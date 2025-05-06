export function Affiliates() {

  const partnersLogos = [
    "/assets/partners/cot-logo.png",
    "/assets/partners/rdb-logo.jpg",
    "/assets/partners/rtta-logo.png",
    "/assets/partners/utb-logo.webp",
  ]

  return (
    <section id="affiliates" className="py-16 md:py-24 bg-muted/30">
      <main className="container">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work with the best in the industry to ensure your African adventure is safe, sustainable, and
            unforgettable.
          </p>
        </header>

        <article className="w-full flex items-center justify-evenly">
          {partnersLogos.map((logo, index) => (
            <figure key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-8 md:h-12 object-contain cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              />
            </figure>
          ))}
        </article>
      </main>
    </section>
  )
}
