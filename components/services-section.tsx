import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Shield, Users, Database, Smartphone, ArrowRight, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements and drive growth.",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"],
      color: "text-primary",
    },
    {
      icon: Users,
      title: "IT Consulting & Strategy",
      description:
        "Strategic technology guidance to optimize your IT infrastructure and align with business objectives.",
      features: ["Technology Assessment", "Digital Transformation", "IT Roadmapping", "Process Optimization"],
      color: "text-secondary",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to enhance flexibility and reduce costs.",
      features: ["Cloud Migration", "AWS/Azure Setup", "Cloud Security", "Backup Solutions"],
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Network & Security Services",
      description: "Comprehensive cybersecurity solutions to protect your business from evolving digital threats.",
      features: ["Security Audits", "Firewall Management", "Data Protection", "Compliance Support"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Professional database design, optimization, and maintenance for reliable data operations.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"],
      color: "text-secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Deployment"],
      color: "text-accent",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-subtle bg-tech-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive IT Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From custom software development to cloud solutions, we provide end-to-end IT services that empower your
            business to thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-6 w-6 ${service.color}`} />
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
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Proven Process</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business needs and technical requirements",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project roadmap and technical specifications",
              },
              {
                step: "03",
                title: "Development",
                description: "Building solutions using best practices and modern technologies",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and support to ensure optimal performance",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-sm text-white/80">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
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
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
