import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution with advanced analytics and seamless user experience. Built with Next.js and integrated payment systems.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Analytics"],
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Comprehensive healthcare management system with real-time patient monitoring, appointment scheduling, and data visualization.",
    image: "/healthcare-dashboard-with-charts-and-data.jpg",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "AI-Powered SaaS",
    description:
      "Intelligent automation platform that leverages machine learning to optimize business processes and increase productivity.",
    image: "/ai-interface-with-data-visualization-and-automatio.jpg",
    tags: ["Python", "TensorFlow", "AWS", "React"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest work and the innovative solutions we've delivered for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-playfair)] text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group bg-transparent">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
