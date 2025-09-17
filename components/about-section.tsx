import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Developers",
    description:
      "Years of experience in programming, design, and digital creativity.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project is built to perform and make an impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We explore the latest technologies to create cutting-edge experiences.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing ensures every project meets high standards.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
              About Tkprobix
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a passion for turning ideas into digital experiences, TkProbix has been creating innovative projects that blend technology, creativity, and functionality. With a focus on originality and quality, each project is a showcase of what’s possible when imagination meets code.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in developing unique digital projects that push the boundaries of design and functionality, reflecting our commitment to innovation and technical excellence.
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
