import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, ArrowRight, Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Custom Software Development", href: "#services" },
      { name: "IT Consulting & Strategy", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "Network & Security", href: "#services" },
      { name: "Database Management", href: "#services" },
      { name: "Mobile App Development", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Support Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <footer className="bg-gradient-footer border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white logo-glow" />
                  </div>
                  <div className="text-2xl font-bold text-white logo-shadow">VIMAX IT</div>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Innovative IT solutions for modern businesses. Empowering organizations through technology excellence
                  since 2022.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <div className="text-sm text-white/70">
                    <div>8100 W HIGHWAY 98, APT. 702</div>
                    <div>PENSACOLA, FL 32506</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-white/70">+1 (850) 409-9004</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-white/70">info@vimaxitsolution.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Newsletter */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-xs text-white/70 mb-3">Get the latest IT insights and company updates.</p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="text-xs bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-accent"
                    size={10}
                  />
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground px-3">
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              © {currentYear} VIMAX IT SOLUTION LLC. All rights reserved. | EIN: 88-3930111
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
