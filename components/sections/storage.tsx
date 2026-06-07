const steps = [
  {
    step: "01",
    title: "Auction Bidding",
    description:
      "We identify and bid on abandoned storage units sold at public auction, evaluating potential resale value before committing.",
  },
  {
    step: "02",
    title: "Inventory Sorting",
    description:
      "Every unit is systematically sorted and assessed. We identify sellable items, document condition, and discard what isn't viable.",
  },
  {
    step: "03",
    title: "Online Reselling",
    description:
      "Sellable inventory is photographed, listed with accurate descriptions, and sold across eBay and other online marketplaces.",
  },
]

export default function StorageSection() {
  return (
    <section id="storage" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="inline-block mb-4 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
              Storage Unit Reselling
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-6">
              Real inventory.
              <br />
              Real operations.
            </h2>
            <p className="text-zinc-500 text-[17px] leading-relaxed mb-5">
              Storage unit auctions are a proven, legitimate method of sourcing
              resale inventory. When tenants abandon their units, facilities
              auction the contents publicly. We participate, recover the
              inventory, and put it back into the market.
            </p>
            <p className="text-zinc-500 text-[17px] leading-relaxed">
              This is an operational business — not a hobby. We approach every
              unit with discipline: evaluate the opportunity, manage the cost,
              and execute the sale systematically.
            </p>
          </div>

          <div className="space-y-3 lg:pt-2">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="relative flex gap-5 p-6 rounded-2xl border border-zinc-100 bg-zinc-50 hover:border-orange-100 hover:bg-orange-50/30 transition-colors group"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-bold text-orange-200 leading-none group-hover:text-orange-300 transition-colors">
                    {step.step}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-3 bg-zinc-200 min-h-6" />
                  )}
                </div>
                <div>
                  <h3 className="text-zinc-900 font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
