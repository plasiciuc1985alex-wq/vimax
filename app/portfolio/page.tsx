import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Star, Calendar, Users, Award } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Development",
      client: "RetailMax Corp",
      duration: "12 weeks",
      results: "300% increase in online sales, 50% reduction in cart abandonment",
      link: "#",
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with appointment scheduling and medical records.",
      image: "/healthcare-management-dashboard.png",
      technologies: ["Next.js", "Python", "MongoDB", "AWS"],
      category: "Healthcare",
      client: "MedCare Solutions",
      duration: "16 weeks",
      results: "40% improvement in patient scheduling efficiency, 100% HIPAA compliance",
      link: "#",
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and reporting platform for investment firms.",
      image: "/financial-analytics-dashboard.png",
      technologies: ["React", "D3.js", "Node.js", "Redis"],
      category: "Finance",
      client: "InvestPro Analytics",
      duration: "10 weeks",
      results: "Real-time data processing, 60% faster report generation",
      link: "#",
    },
    {
      title: "Cloud Migration Project",
      description: "Complete infrastructure migration from on-premises to AWS with 99.9% uptime maintained.",
      image: "/cloud-infrastructure-architecture.png",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      category: "Cloud Solutions",
      client: "TechGlobal Inc",
      duration: "8 weeks",
      results: "45% cost reduction, 99.9% uptime, improved scalability",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "/mobile-banking-app.png",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      category: "Mobile Development",
      client: "SecureBank",
      duration: "14 weeks",
      results: "500K+ downloads, 4.8 app store rating, zero security incidents",
      link: "#",
    },
    {
      title: "IoT Monitoring System",
      description: "Industrial IoT platform for real-time equipment monitoring and predictive maintenance.",
      image: "/iot-monitoring-dashboard-with-sensors.jpg",
      technologies: ["Python", "InfluxDB", "Grafana", "MQTT"],
      category: "IoT Solutions",
      client: "ManufacturePro",
      duration: "18 weeks",
      results: "30% reduction in equipment downtime, predictive maintenance alerts",
      link: "#",
    },
  ]

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Cloud Solutions",
    "Healthcare",
    "Finance",
    "IoT Solutions",
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "25+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
  ]

  const testimonials = [
    {
      quote:
        "VIMAX IT transformed our outdated systems into a modern, efficient platform. Their expertise and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      rating: 5,
    },
    {
      quote:
        "The cloud migration project was seamless. We experienced zero downtime and significant cost savings. Highly recommended!",
      author: "Michael Chen",
      position: "CTO, DataFlow Solutions",
      rating: 5,
    },
    {
      quote:
        "Outstanding support and innovative solutions. VIMAX IT has been instrumental in our digital transformation journey.",
      author: "Emily Rodriguez",
      position: "Operations Director, HealthCare Plus",
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
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Successful Projects & <span className="text-primary">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore our portfolio of successful projects across various industries. Each solution is crafted with
              precision and tailored to meet specific business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-section-alternate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-border hover:bg-primary hover:text-primary-foreground bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-primary">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-primary">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs bg-muted">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Client: {project.client}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Duration: {project.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="h-4 w-4 mr-2" />
                      <span>Results: {project.results}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-border bg-transparent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
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
                  <blockquote className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our proven expertise and innovative solutions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
