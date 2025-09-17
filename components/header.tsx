import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-xl">TkProbix</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <a href="https://linkedin.com/in/dantunmibi" target="_blank"><Button variant="outline" className="hidden md:inline-flex bg-transparent">
          Get in Touch
        </Button></a>
      </div>
    </header>
  )
}
