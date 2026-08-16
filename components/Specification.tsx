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
    <section id="specification" className="py-28 px-6 border-t border-white/[0.04] grid-bg">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-[#4ade80] tracking-widest uppercase mb-4">
            QBCore Specification
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5 max-w-2xl">
            A formal shared specification defining what makes an implementation QBCore.
          </h2>
          <p className="max-w-2xl text-zinc-500 leading-relaxed">
            The specification defines behavior, concepts, guarantees, and boundaries. It
            does not require identical APIs or architecture between platforms. It is
            the contract that keeps the ecosystem coherent across implementations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {specs.map((s, i) => (
            <div key={i} className="bg-[#0d0d0f] p-7 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-start gap-3 mb-4">
                <span className="font-mono text-[10px] text-zinc-700 mt-1 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-medium text-sm">{s.title}</h3>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed pl-6">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded border border-[#4ade80]/10 bg-[#4ade80]/5">
          <p className="text-xs text-zinc-400 font-mono leading-relaxed">
            <span className="text-[#4ade80]">// Note:</span> The specification describes{" "}
            <em>semantic requirements</em>. It does not mandate API surface or
            implementation details. QBCore.Functions.GetPlayer(source) is an
            implementation API, not a specification concept.
          </p>
        </div>
      </div>
    </section>
  );
}
