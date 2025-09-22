import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Users, Zap, ArrowRight } from "lucide-react"

export function AboutSection() {
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

  return (
    <section id="about" className="py-24 bg-section-alternate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 border-primary text-primary bg-transparent">
                About VIMAX IT SOLUTION LLC
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Empowering Businesses Through <span className="text-primary">Technology Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in August 2022 and based in Pensacola, FL, VIMAX IT SOLUTION LLC has quickly established
                  itself as a trusted partner for businesses seeking innovative IT solutions. Our team combines deep
                  technical expertise with a passion for solving complex business challenges.
                </p>
                <p>
                  We specialize in custom software development, cloud solutions, and IT consulting services that help
                  organizations streamline operations, enhance security, and accelerate growth. Our commitment to
                  excellence and client satisfaction drives everything we do.
                </p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">2022</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Technologies We Master</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with modern technologies and frameworks to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
