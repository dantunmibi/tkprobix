import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { link } from "fs"

const projects = [
  {
    title: "RubyApks",
    description:
      "Rubyapks is a free, web-based app marketplace designed specifically for indie game lovers and developers. The platform enables seamless browsing, discovery, and distribution of indie apps and games worldwide—all without registration.",
    image: "/rubyapks logo.png",
    tags: ["Blogger", "Adsense", "SEO", "Analytics"],
    link: "https://rubyapks.blogspot.com",
  },
  {
    title: "PdfnBooks",
    description:
      "Pdfnbooks is a vibrant digital library offering free eBooks and PDFs across genres—from educational texts to fanfiction. Managed by a community of passionate authors, the platform curates a diverse collection for readers worldwide. ",
    image: "/pdfnbooks logo2.png",
    tags: ["Blogger", "Adsense", "SEO", "Analytics"],
    link: "https://pdfnbooks.blogspot.com",
  },
  {
    title: "Rubies Unleashed",
    description:
      "Rubies Unleashed is a next-generation digital ecosystem designed to connect users and developers worldwide through visually attractive, secure, innovative, and inclusive digital solutions. With a commitment to accessibility and growth.",
    image: "/rubies_unleashed_logo.jpg",
    tags: ["Python", "Github", "Netlify", "React"],
    link: "https://rubiesunleashed.netlify.app",
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

                <a href={project.link} target="_blank" rel="noopener noreferrer">
  <Button variant="outline" className="w-full group bg-transparent">
    Learn More
    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
  </Button>
</a>

               
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
