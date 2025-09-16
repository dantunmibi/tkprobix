import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our diverse team of designers, developers, and strategists brings years of experience to every project.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive business growth and user satisfaction.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every project undergoes rigorous testing and quality assurance to ensure exceptional standards.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
              About tkpobix
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and exceptional user experiences,
              tkpobix has been at the forefront of digital transformation for over a decade.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in creating bespoke digital solutions that not only meet our clients' immediate needs but
              also position them for future growth. Our collaborative approach ensures that every project reflects our
              clients' unique vision while leveraging the latest technological advancements.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">98%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
