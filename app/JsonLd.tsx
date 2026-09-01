// Structured data for search engines. Emitted as one @graph so the three
// nodes can cross-reference by @id rather than repeating the same fields.
//
// Deliberately omitted: `license` on SoftwareSourceCode. The repo carries no
// LICENSE file, and an unverified licence claim in structured data is worse
// than no claim at all. Add it here once the licence is confirmed.
const siteUrl = "https://qbcore.org/";

const description =
  "Cross-platform open-source roleplay framework. One specification across FiveM, RedM and Roblox, with UEFN next.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "QBCore",
      url: siteUrl,
      // apple-icon.png is the square raster mark; og-image.png is a 1200x630
      // banner, which Google rejects for `logo`.
      logo: `${siteUrl}apple-icon.png`,
      description,
      sameAs: [
        "https://github.com/qbcore-framework",
        "https://discord.gg/qbcore",
        "https://x.com/qbcore",
        "https://www.reddit.com/r/qbcore/",
        "https://youtube.com/@qbcoreframework",
        "https://www.twitch.tv/kakarotqb",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "QBCore",
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${siteUrl}#software`,
      name: "QBCore",
      description,
      codeRepository: "https://github.com/qbcore-framework",
      programmingLanguage: ["Lua", "Luau"],
      // Only platforms with shipped or in-progress implementations. UEFN is
      // still R&D on the roadmap, so it is not claimed as a runtime here.
      runtimePlatform: ["FiveM", "RedM", "Roblox"],
      author: { "@id": `${siteUrl}#organization` },
      isPartOf: { "@id": `${siteUrl}#website` },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escaping `<` keeps the inlined JSON from breaking out of the script
      // tag — per the Next.js JSON-LD guide.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\u003c"),
      }}
    />
  );
}
