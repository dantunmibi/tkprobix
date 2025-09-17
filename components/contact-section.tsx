import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h2>
          Email - <a href="mailto:tkprobix@gmail.com">tkprobix@gmail.com</a>
          <br />
          LinkedIn - <a href="http://linkedin.com/in/dantunmibi" target="_blank" rel="noopener noreferrer">DanTunmibi</a>
          <br />
          Instagram - <a href="http://instagram.com/fullondani" target="_blank" rel="noopener noreferrer">@fullondani</a>
          <br />
          Github - <a href="https:github.com/dantunmibi" target="_blank" rel="noopener noreferrer">DanTunmibi</a>
        </div>
             
      </div>
    </section>
  )
}
