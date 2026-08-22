const specs = [
  {
    title: "Player & Character",
    description:
      "A connected platform Player and their persistent roleplay Character are separate concepts. A Player represents the active participant. A Character represents the persistent RP identity controlled by that Player.",
  },
  {
    title: "Persistence",
    description:
      "Defines what state survives runtime boundaries without dictating SQL, Roblox DataStores, UEFN persistence, or any other storage architecture.",
  },
  {
    title: "Authority & Security",
    description:
      "Protected gameplay state must be controlled by trusted authority. Untrusted clients may request actions but do not define authoritative outcomes. Authentication, authorization, validation, and mutation are distinct concepts.",
  },
  {
    title: "State & Replication",
    description:
      "Persistence, runtime state, authority, replication, and visibility are separate concerns. Visibility does not imply authority. Persistent state does not automatically imply replicated state.",
  },
  {
    title: "Accounts",
    description:
      "Money and currencies exist as their own domain rather than arbitrary values inside one giant PlayerData object. Accounts may belong to Characters, businesses, organizations, shared entities, or systems.",
  },
  {
    title: "Roles",
    description:
      "Replaces rigid job/gang assumptions. Characters may have multiple roles. Roles may contain grades, duty state, capabilities, policies, and metadata — representing professions, affiliations, or any gameplay concept.",
  },
];

export default function Specification() {
  return (
    <section id="specification" className="py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            QBCore Specification
          </p>
          <h2 className="text-balance font-brand text-3xl sm:text-4xl font-bold text-white mb-5 max-w-2xl">
            A formal, shared specification defining what makes an implementation QBCore.
          </h2>
          <p className="text-pretty max-w-2xl text-stone-500 leading-relaxed">
            The specification defines behavior, concepts, guarantees, and boundaries. It
            does not require identical APIs or architecture between platforms. It is
            the contract that keeps the ecosystem coherent across implementations.
          </p>
        </div>

        <div className="@container">
          <div className="reveal-stagger grid @sm:grid-cols-2 @lg:grid-cols-3 gap-4">
            {specs.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out hover:bg-white/[0.05] hover:border-white/[0.14] hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="font-mono text-[10px] text-gold/80 mt-1 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-medium text-sm">{s.title}</h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed pl-6">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 p-5 rounded-xl border border-accent/10 bg-accent/5">
          <p className="text-xs text-stone-400 font-mono leading-relaxed">
            <span className="text-accent">Note:</span> The specification describes{" "}
            <em>semantic requirements</em>. It does not mandate API surface or
            implementation details. QBCore.Functions.GetPlayer(source) is an
            implementation API, not a specification concept.
          </p>
        </div>
      </div>
    </section>
  );
}
