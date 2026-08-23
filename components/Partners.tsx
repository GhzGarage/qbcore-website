const partners = [
  {
    name: "JetBrains",
    category: "IDE & Developer Tools",
    href: "https://www.jetbrains.com/",
    // JetBrains' brand guidelines do define a flat-black version of this
    // mark (for dense IDE UI / print), but the identity people actually
    // recognize as "JetBrains" is the magenta → red → orange gradient
    // used across their marketing and product icons — that's what's
    // applied here via the #jetbrains-gradient def below.
    color: "url(#jetbrains-gradient)",
    // Official JetBrains mark (simple-icons, CC0)
    svg: (
      <path d="M2.345 23.997A2.347 2.347 0 0 1 0 21.652V10.988C0 9.665.535 8.37 1.473 7.433l5.965-5.961A5.01 5.01 0 0 1 10.989 0h10.666A2.347 2.347 0 0 1 24 2.345v10.664a5.056 5.056 0 0 1-1.473 3.554l-5.965 5.965A5.017 5.017 0 0 1 13.007 24v-.003H2.345Zm8.969-6.854H5.486v1.371h5.828v-1.371ZM3.963 6.514h13.523v13.519l4.257-4.257a3.936 3.936 0 0 0 1.146-2.767V2.345c0-.678-.552-1.234-1.234-1.234H10.989a3.897 3.897 0 0 0-2.767 1.145L3.963 6.514Zm-.192.192L2.256 8.22a3.944 3.944 0 0 0-1.145 2.768v10.664c0 .678.552 1.234 1.234 1.234h10.666a3.9 3.9 0 0 0 2.767-1.146l1.512-1.511H3.771V6.706Z" />
    ),
  },
  {
    name: "GitBook",
    category: "Documentation Platform",
    href: "https://www.gitbook.com/",
    // GitBook's official brand blue
    color: "#BBDDE5",
    // Official GitBook mark (simple-icons, CC0)
    svg: (
      <path d="M12.513 1.097c-.645 0-1.233.34-2.407 1.017L3.675 5.82A7.233 7.233 0 0 0 0 12.063v.236a7.233 7.233 0 0 0 3.667 6.238L7.69 20.86c2.354 1.36 3.531 2.042 4.824 2.042 1.292.001 2.47-.678 4.825-2.038l4.251-2.453c1.177-.68 1.764-1.02 2.087-1.579.323-.56.324-1.24.323-2.6v-2.63a1.04 1.04 0 0 0-1.558-.903l-8.728 5.024c-.587.337-.88.507-1.201.507-.323 0-.616-.168-1.204-.506l-5.904-3.393c-.297-.171-.446-.256-.565-.271a.603.603 0 0 0-.634.368c-.045.111-.045.282-.043.625.002.252 0 .378.025.494.053.259.189.493.387.667.089.077.198.14.416.266l6.315 3.65c.589.34.884.51 1.207.51.324 0 .617-.17 1.206-.509l7.74-4.469c.202-.116.302-.172.377-.13.075.044.075.16.075.392v1.193c0 .34.001.51-.08.649-.08.14-.227.224-.522.394l-6.382 3.685c-1.178.68-1.767 1.02-2.413 1.02-.646 0-1.236-.34-2.412-1.022l-5.97-3.452-.043-.025a4.106 4.106 0 0 1-2.031-3.52V11.7c0-.801.427-1.541 1.12-1.944a1.979 1.979 0 0 1 1.982-.001l4.946 2.858c1.174.679 1.762 1.019 2.407 1.02.645 0 1.233-.34 2.41-1.017l7.482-4.306a1.091 1.091 0 0 0 0-1.891L14.92 2.11c-1.175-.675-1.762-1.013-2.406-1.013Z" />
    ),
  },
  {
    name: "Crowdin",
    category: "Localization & Translation",
    href: "https://crowdin.com/",
    // Crowdin's own brand mark is a near-black navy, which reads the
    // same as JetBrains' issue above — falls back to the site foreground.
    color: "var(--foreground)",
    // Official Crowdin mark (simple-icons, CC0)
    svg: (
      <path d="M16.119 17.793a2.619 2.619 0 0 1-1.667-.562c-.546-.436-1.004-1.09-1.018-1.858-.008-.388.414-.388.414-.388l1.018-.008c.332.008.43.47.445.586.128 1.04.717 1.495 1.168 1.702.273.123.204.513-.362.528zm-5.695-5.287L8.5 12.252c-.867-.214-.844-.982-.807-1.247a5.119 5.119 0 0 1 .814-2.125c.545-.804 1.303-1.508 2.29-2.073 1.856-1.074 4.45-1.673 7.31-1.673 2.09 0 4.256.27 4.29.27.197.025.328.213.333.437a.377.377 0 0 1-.355.393l-.92-.01c-2.902 0-4.968.394-6.506 1.248-1.527.837-2.57 2.117-3.287 4.012-.076.163-.335 1.12-1.24 1.022zm2.533 7.823c-1.44 0-2.797-.622-3.825-1.746-.87-.96-1.397-1.931-1.493-3.164-.06-.813.3-1.094.788-1.044l1.988.218c.45.092.75.34.825.854.397 2.736 2.122 3.814 3.15 4.046.18.042.292.157.283.365a.412.412 0 0 1-.322.398c-.458.074-.936.073-1.394.073zm-4.101 2.418a14.216 14.216 0 0 1-2.307-.214c-1.202-.214-2.208-.582-3.072-1.13C1.41 20.095.163 17.786.014 15.048c-.037-.65-.11-1.89 1.427-1.797.638.033 1.653.343 2.368.548.887.247 1.314.933 1.314 1.608 0 3.858 3.494 6.408 5.02 6.408.654 0 .414.701.127.779-.502.136-1.15.153-1.413.153zM3.525 11.419c-.605-.109-1.194-.358-1.768-.5C-.018 10.479.284 8.688.45 8.196c1.617-4.757 6.746-6.35 10.887-6.773 3.898-.4 7.978-.092 11.778.967.31.083 1.269.327.718.891-.35.358-1.7-.016-2.073-.041-2.23-.167-4.434-.192-6.656.15-2.349.357-4.768 1.099-6.71 2.665-.938.758-1.76 1.723-2.313 2.866-.144.3-.256.6-.354.9-.11.327-.47 1.91-2.215 1.6zm9.94.917c.332-1.488 1.81-3.848 6.385-3.686 1.05.033.57.749.052.731-2.586-.09-3.815 1.578-4.457 3.27-.219.546-.68.626-1.271.53-.415-.074-.866-.123-.71-.846Z" />
    ),
  },
  {
    name: "GitHub",
    category: "Source Code Hosting",
    href: "https://github.com/qbcore-framework",
    // GitHub's mark is near-black too — same fallback as above.
    color: "var(--foreground)",
    // Official GitHub mark (simple-icons, CC0)
    svg: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
  {
    name: "GitKraken",
    category: "Git GUI Client",
    href: "https://www.gitkraken.com/",
    // GitKraken's official brand teal
    color: "#179287",
    // Official GitKraken mark (simple-icons, CC0)
    svg: (
      <path d="M23.225 6.252a.478.478 0 00-.923.171c0 .053.013.119.026.171 2.15 5.71-.751 12.077-6.46 14.226a10.9 10.9 0 01-2.426.607v-5.155c.33-.066.646-.158.962-.264v4.338c5.445-1.332 8.794-6.817 7.463-12.262a10.147 10.147 0 00-4.958-6.487.472.472 0 00-.646.185.472.472 0 00.185.646c4.443 2.452 6.051 8.056 3.6 12.499a9.13 9.13 0 01-4.681 4.1v-3.836a1.472 1.472 0 001.028-1.398c0-.527-.264-1.002-.725-1.266.343-3.309 1.859-2.439 1.859-3.493v-.62c0-1.582-3.665-6.737-5.38-6.856h-.316c-1.714.119-5.379 5.274-5.379 6.856v.62c0 1.054 1.503.184 1.859 3.493a1.461 1.461 0 00-.725 1.266c0 .646.422 1.2 1.028 1.398v3.836C3.91 17.168 1.59 11.83 3.448 7.11a9.24 9.24 0 014.1-4.68.479.479 0 00.185-.66.487.487 0 00-.422-.237.444.444 0 00-.224.065 10.142 10.142 0 00-3.982 13.791 10.147 10.147 0 006.487 4.958V16.02c.316.106.633.198.962.264v5.155C4.503 20.636.257 15.085 1.062 9.034a10.9 10.9 0 01.606-2.426.489.489 0 00-.277-.62.494.494 0 00-.62.277c-2.333 6.21.805 13.131 7.015 15.452 1.2.448 2.452.699 3.73.751v-6.09c.172.012.489.012.489.012s.316 0 .488-.013v6.078c6.631-.277 11.773-5.867 11.496-12.499a12.458 12.458 0 00-.764-3.704zm-9.019 6.842a.995.995 0 011.398 0 .995.995 0 010 1.398.995.995 0 01-1.398 0 .988.988 0 010-1.398zm-4.43 1.398a.979.979 0 01-1.384 0 .995.995 0 010-1.398.995.995 0 011.398 0 .983.983 0 01-.013 1.398z" />
    ),
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Ecosystem
          </p>
          <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-5">
            We work with great tools.
          </h2>
          <p className="text-pretty max-w-xl mx-auto text-stone-400 leading-relaxed text-sm">
            QBCore&rsquo;s development, documentation, and localization are supported
            by the following platforms.
          </p>
        </div>

        <div className="reveal logo-marquee">
          {/* Shared gradient def, referenced by both the real and cloned
              JetBrains marks below via fill="url(#jetbrains-gradient)". */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <linearGradient id="jetbrains-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E627F8" />
                <stop offset="50%" stopColor="#FF0007" />
                <stop offset="100%" stopColor="#FF841B" />
              </linearGradient>
            </defs>
          </svg>
          <div className="logo-marquee-track items-center gap-x-12 sm:gap-x-16">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} — ${p.category}`}
                title={`${p.name} — ${p.category}`}
                className="group flex items-center justify-center shrink-0 opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={p.color}
                  aria-hidden="true"
                  className="h-8 sm:h-9 w-auto transition-transform duration-300 ease-out group-hover:scale-110"
                >
                  {p.svg}
                </svg>
              </a>
            ))}
            {/* Cloned set: only rendered visible under prefers-reduced-motion:
                no-preference (see .logo-marquee-clone-item in globals.css),
                so the scrolling track has a second copy to loop into. */}
            {partners.map((p) => (
              <div
                key={`${p.name}-clone`}
                aria-hidden="true"
                className="logo-marquee-clone-item items-center justify-center shrink-0 opacity-80"
              >
                <svg viewBox="0 0 24 24" fill={p.color} className="h-8 sm:h-9 w-auto">
                  {p.svg}
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
