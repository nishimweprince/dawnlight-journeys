export function Affiliates() {
  return (
    <section id="affiliates" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work with the best in the industry to ensure your African adventure is safe, sustainable, and
            unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={`/placeholder.svg?height=80&width=160&text=Partner ${i + 1}`}
                alt={`Partner ${i + 1}`}
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
