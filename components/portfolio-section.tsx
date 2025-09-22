import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Development",
      link: "#",
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with appointment scheduling and medical records.",
      image: "/healthcare-management-dashboard.png",
      technologies: ["Next.js", "Python", "MongoDB", "AWS"],
      category: "Healthcare",
      link: "#",
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and reporting platform for investment firms.",
      image: "/financial-analytics-dashboard.png",
      technologies: ["React", "D3.js", "Node.js", "Redis"],
      category: "Finance",
      link: "#",
    },
    {
      title: "Cloud Migration Project",
      description: "Complete infrastructure migration from on-premises to AWS with 99.9% uptime maintained.",
      image: "/cloud-infrastructure-architecture.png",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      category: "Cloud Solutions",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "/mobile-banking-app.png",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      category: "Mobile Development",
      link: "#",
    },
    {
      title: "IoT Monitoring System",
      description: "Industrial IoT platform for real-time equipment monitoring and predictive maintenance.",
      image: "/iot-monitoring-dashboard-with-sensors.jpg",
      technologies: ["Python", "InfluxDB", "Grafana", "MQTT"],
      category: "IoT Solutions",
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

  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle bg-tech-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-transparent">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Successful Projects & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our portfolio of successful projects across various industries. Each solution is crafted with
            precision and tailored to meet specific business requirements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-border bg-transparent">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">What Our Clients Say</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <Card key={index} className="border-white/20 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                        ★
                      </div>
                    ))}
                  </div>
                  <blockquote className="text-white/90 mb-4 italic">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/80">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our proven expertise and innovative solutions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
