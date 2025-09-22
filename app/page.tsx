import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { ArrowRight, Code, Users, Award, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const highlights = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built with modern technologies",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "50+ successful projects with 100% client satisfaction",
    },
  ]

  const featuredServices = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      link: "/services",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      link: "/services",
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance for your business",
      link: "/services",
    },
  ]

  const testimonials = [
    {
      text: "VIMAX IT transformed our business with their innovative solutions. Highly recommended!",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
    },
    {
      text: "Professional, reliable, and delivered exactly what we needed on time and budget.",
      author: "Michael Chen",
      company: "DataFlow Solutions",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />

        <section className="py-24 bg-section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary text-primary bg-transparent">
                Why Choose VIMAX IT
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Trusted <span className="text-primary">Technology Partner</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Since 2022, we've been helping businesses in Pensacola and beyond leverage technology for growth and
                success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <Card
                    key={index}
                    className="border-border bg-card text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IT solutions designed to drive your business forward
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground">Don't just take our word for it - hear from our satisfied clients</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  View Our Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
