"use client"

const clients = [
  "Pengo",
  "Minetec",
  "Toros",
  "HQ Tech",
  "Natural Stone",
  "Fabbro",
]

export function TNClients() {
  return (
    <section className="py-12 border-y border-primary/10 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by Leading Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <span
              key={client}
              className="text-lg md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
