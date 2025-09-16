import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 bg-[url('/placeholder-e3ayl.png')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold mb-6 text-balance">
          Crafting Digital
          <span className="text-primary block">Excellence</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          We transform ideas into exceptional digital experiences through innovative design and cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
