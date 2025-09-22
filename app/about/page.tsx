import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Users, Zap, ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Delivering innovative IT solutions that drive business success and digital transformation.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building lasting partnerships through exceptional service and personalized attention.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies to solve complex business challenges.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Maintaining the highest standards in every project we deliver.",
    },
  ]

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "GraphQL",
  ]

  const achievements = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Certified",
    "Google Cloud Professional",
    "Certified Kubernetes Administrator",
    "ISO 27001 Compliance",
    "SOC 2 Type II Certified",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary bg-transparent">
              About VIMAX IT SOLUTION LLC
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Empowering Businesses Through <span className="text-primary">Technology Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Founded in August 2022 and based in Pensacola, FL, we've quickly established ourselves as a trusted
              partner for businesses seeking innovative IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Founder</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading VIMAX IT SOLUTION with vision, expertise, and a commitment to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Founder photo section */}
                  <div className="relative h-96 lg:h-auto">
                    <img
                      src="/images/founder.png"
                      alt="Alexandru Plasiciuc - Founder & CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Founder information section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-2">Alexandru Plasiciuc</h3>
                      <p className="text-primary font-semibold text-lg mb-4">Founder & CEO</p>
                      <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        With over 15 years of experience in IT solutions and business development, Alexandru founded
                        VIMAX IT SOLUTION LLC with a vision to democratize access to enterprise-grade technology
                        solutions.
                      </p>
                      <p>
                        His expertise spans across cloud architecture, software development, and digital transformation,
                        helping businesses of all sizes leverage technology to achieve their goals.
                      </p>
                      <p>
                        Under his leadership, VIMAX IT has grown from a startup to a trusted partner for businesses
                        seeking innovative IT solutions, maintaining a 100% client satisfaction rate.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Cloud Architecture
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Business Development
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Digital Transformation
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  VIMAX IT SOLUTION LLC was born from a vision to bridge the gap between complex technology and
                  practical business solutions. Our founders recognized that many businesses struggle to leverage
                  technology effectively, often due to lack of expertise or resources.
                </p>
                <p>
                  Since our founding in August 2022, we've been committed to democratizing access to enterprise-grade IT
                  solutions. We believe that every business, regardless of size, deserves access to cutting-edge
                  technology that can drive growth and efficiency.
                </p>
                <p>
                  Our team combines deep technical expertise with a passion for solving complex business challenges. We
                  don't just build software; we craft solutions that transform how our clients operate and compete in
                  their markets.
                </p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2022</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-section-alternate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-section-alternate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologies We Master</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with modern technologies and frameworks to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default text-black"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Certifications & Achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business through innovative technology solutions.
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
