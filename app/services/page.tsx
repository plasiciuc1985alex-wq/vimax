import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cloud, Shield, Users, Database, Smartphone, ArrowRight, CheckCircle, Star } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements and drive growth.",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"],
      pricing: "Starting at $5,000",
      timeline: "4-12 weeks",
    },
    {
      icon: Users,
      title: "IT Consulting & Strategy",
      description:
        "Strategic technology guidance to optimize your IT infrastructure and align with business objectives.",
      features: ["Technology Assessment", "Digital Transformation", "IT Roadmapping", "Process Optimization"],
      pricing: "Starting at $150/hour",
      timeline: "2-8 weeks",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to enhance flexibility and reduce costs.",
      features: ["Cloud Migration", "AWS/Azure Setup", "Cloud Security", "Backup Solutions"],
      pricing: "Starting at $3,000",
      timeline: "2-6 weeks",
    },
    {
      icon: Shield,
      title: "Network & Security Services",
      description: "Comprehensive cybersecurity solutions to protect your business from evolving digital threats.",
      features: ["Security Audits", "Firewall Management", "Data Protection", "Compliance Support"],
      pricing: "Starting at $2,500",
      timeline: "1-4 weeks",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Professional database design, optimization, and maintenance for reliable data operations.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"],
      pricing: "Starting at $2,000",
      timeline: "2-6 weeks",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Deployment"],
      pricing: "Starting at $8,000",
      timeline: "8-16 weeks",
    },
  ]

  const industries = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Manufacturing",
    "Education",
    "Real Estate",
    "Logistics",
    "Retail",
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "VIMAX IT transformed our outdated systems into a modern, efficient platform. Their expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Logistics Co.",
      text: "The cloud migration project was seamless. We've seen 40% cost reduction and improved performance.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "HealthCare Plus",
      text: "Their security audit identified critical vulnerabilities. We now feel confident about our data protection.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary bg-transparent">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive <span className="text-primary">IT Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From custom software development to cloud solutions, we provide end-to-end IT services that empower your
              business to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Pricing:</span>
                        <span className="font-medium text-primary">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-medium">{service.timeline}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-section-alternate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Proven Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your business needs and technical requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project roadmap, technical specifications, and timeline estimates.",
              },
              {
                step: "03",
                title: "Development",
                description: "Building solutions using best practices, modern technologies, and agile methodologies.",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance, updates, and support to ensure optimal performance and growth.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across various industries, delivering tailored solutions for unique business needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-6 py-3 text-base bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default text-black"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-section-alternate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your business goals and stay ahead of the
            competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
