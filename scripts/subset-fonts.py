#!/usr/bin/env python3
"""Regenerate the subset Gilroy webfonts used by the site.

The licensed originals live in fonts-src/ and are never loaded by the site.
This script writes trimmed copies into app/fonts/, which is what
next/font/local reads in app/layout.tsx.

Gilroy carries 466 codepoints; the site renders 74. Subsetting to the ranges
below takes the four weights from 172 KB to about 75 KB with no visible
change, because every glyph the site actually uses is retained.

Gilroy is only applied through the `font-brand` utility — headings and the
wordmark. Body copy uses the system sans stack and is unaffected by this
entirely, so the exposure here is limited to heading text.

WHEN TO RE-RUN
    If a heading or the wordmark ever needs a character outside the set
    below (a non-Latin script, unusual punctuation, a maths or box-drawing
    symbol), it will silently render in the fallback face and look wrong
    next to its neighbours. Add the character to EXTRA, re-run, rebuild.

USAGE
    pip install fonttools brotli
    python scripts/subset-fonts.py
"""

import glob
import os
import sys

try:
    from fontTools import subset
except ImportError:
    sys.exit("fontTools is required:  pip install fonttools brotli")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(HERE, "fonts-src")
OUT_DIR = os.path.join(HERE, "app", "fonts")

# Printable ASCII — letters, digits and straight punctuation.
BASIC = set(chr(c) for c in range(0x20, 0x7F))

# Typographic marks the copy uses or plausibly will: curly quotes, en/em
# dashes, ellipsis, middle dot, non-breaking space, arrows, currency.
PUNCT = set("‘’“”–—…· "
            "←↑→↓×°•™®©"
            "€£")

# Western-European accented letters. Not currently on the page, but partner,
# person and place names are the realistic way one appears in a heading, and
# a missing glyph there is a visible break. ~17 KB for the whole set.
ACCENTS = set("ÀÁÂÃÄÅÆÇÈÉ"
              "ÊËÌÍÎÏÑÒÓÔ"
              "ÕÖØÙÚÛÜÝŸŠ"
              "Žàáâãäåæçè"
              "éêëìíîïñòó"
              "ôõöøùúûüýÿ"
              "šžß")

# Add any further characters here, then re-run.
EXTRA = set()

CHARS = BASIC | PUNCT | ACCENTS | EXTRA


def main():
    sources = sorted(glob.glob(os.path.join(SRC_DIR, "*.woff2")))
    if not sources:
        sys.exit("no source fonts found in %s" % SRC_DIR)

    text = "".join(sorted(CHARS))
    before = after = 0

    for src in sources:
        name = os.path.basename(src)
        dest = os.path.join(OUT_DIR, name)
        subset.main([
            src,
            "--text=%s" % text,
            "--flavor=woff2",
            # Keep every OpenType feature: kerning and ligatures are part of
            # how the wordmark is spaced, so dropping them would change the
            # rendering even with all glyphs present.
            "--layout-features=*",
            # Retain the foundry's copyright and licence strings.
            "--name-IDs=*",
            "--output-file=%s" % dest,
        ])
        b, a = os.path.getsize(src), os.path.getsize(dest)
        before += b
        after += a
        print("  %-26s %6d -> %6d bytes  (-%d%%)" % (name, b, a, round(100 * (b - a) / b)))

    print("\n  %d codepoints retained (Gilroy ships 466)" % len(CHARS))
    print("  total %d -> %d bytes  (-%d%%, saves %.0f KB)"
          % (before, after, round(100 * (before - after) / before), (before - after) / 1024))


if __name__ == "__main__":
    main()
