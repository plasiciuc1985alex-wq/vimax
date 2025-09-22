import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cloud, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden"
    >
      <div className="absolute inset-0 bg-tech-pattern"></div>

      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Innovative IT Solutions for <span className="text-secondary">Modern Businesses</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty max-w-2xl">
              Custom Software Development, IT Consulting, and Managed Services to elevate your business. Trusted by
              companies across Pensacola, FL and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-white/80">Uptime Guarantee</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">3+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Service Icons */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 hover:shadow-lg transition-all duration-300">
                <Code className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-semibold text-white mb-2">Custom Development</h3>
                <p className="text-sm text-white/80">Tailored software solutions</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 hover:shadow-lg transition-all duration-300 mt-8">
                <Cloud className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-semibold text-white mb-2">Cloud Solutions</h3>
                <p className="text-sm text-white/80">Scalable cloud infrastructure</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 hover:shadow-lg transition-all duration-300 -mt-4">
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-semibold text-white mb-2">Security Services</h3>
                <p className="text-sm text-white/80">Enterprise-grade protection</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 hover:shadow-lg transition-all duration-300 mt-4">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-semibold text-white mb-2">IT Consulting</h3>
                <p className="text-sm text-white/80">Strategic technology guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
