import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Palette, Users, Sparkles, Leaf, Sun, Waves } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">Reverdecer.co</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Servicios Terapéuticos
              </a>
              <a href="#productos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Productos Artesanales
              </a>
              <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Agenda tu sesión</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat opacity-25"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in">
              <Badge variant="secondary" className="w-fit bg-background/80 backdrop-blur-sm">
                Acompañamiento terapéutico desde el corazón
              </Badge>
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Acompañamiento terapéutico con <span className="text-primary">psicología</span>,{" "}
                  <span className="text-primary">arte</span> y <span className="text-primary">sabiduría ancestral</span>
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed bg-background/60 backdrop-blur-sm p-4 rounded-lg">
                  En Reverdecer te invitamos a reconectar con tu esencia a través de un acompañamiento terapéutico
                  integral. Aquí se entrelazan la psicología, la ancestralidad y el arte, creando un camino de sanación
                  único, profundo y amoroso.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Comienza tu camino de sanación
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
                >
                  Conoce más sobre nosotros
                </Button>
              </div>
            </div>
            <div className="relative slide-up lg:flex lg:justify-center">
              <div className="organic-shape bg-primary/20 absolute -top-8 -right-8 w-80 h-80 -z-10"></div>
              <div className="organic-shape bg-primary/30 absolute -bottom-8 -left-8 w-72 h-72 -z-10"></div>
              <div className="bg-background/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Leaf className="h-12 w-12 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Tu sanación comienza aquí</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Un espacio seguro donde el arte, la psicología y la sabiduría ancestral se encuentran para
                      acompañarte en tu proceso de crecimiento personal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Nuestros Servicios
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-balance">Servicios de Terapia en Verdecer</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              En Verdecer, ofrecemos un acompañamiento terapéutico profundo e integral, donde la psicología, la
              ancestralidad y el arte se entrelazan para ayudarte a florecer en tu camino personal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Terapia Individual</CardTitle>
                <CardDescription>Sesión 1 a 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Espacio íntimo y personalizado donde exploraremos juntos tu mundo interior, utilizando herramientas
                  terapéuticas adaptadas a tus necesidades específicas.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Arteterapia</CardTitle>
                <CardDescription>Terapia Individual</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  A través del arte como lenguaje del alma, exploraremos emociones y experiencias que a veces las
                  palabras no pueden expresar, facilitando procesos de sanación profunda.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Terapia Infantil</CardTitle>
                <CardDescription>Niños y Familias</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Acompañamiento especializado para los más pequeños, utilizando el juego y la creatividad como
                  herramientas principales para su desarrollo emocional y bienestar.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Terapia Guiada</CardTitle>
                <CardDescription>Mindfulness y Meditación</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Sesiones grupales donde la sabiduría ancestral se encuentra con técnicas modernas de mindfulness,
                  creando un espacio de sanación colectiva y crecimiento personal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 bg-gradient-to-br from-muted/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Productos Artesanales
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-balance">Productos Artesanales Verdecer</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Conexión y Bienestar</p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Estos productos que ofrecemos en Verdecer están diseñados para complementar tu proceso terapéutico y crear
              un ambiente de paz y armonía en tu hogar. Cada uno está elaborado con amor y dedicación, utilizando
              ingredientes naturales que honran la conexión con la Madre Tierra.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-card/80 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/card1.jpg"
                  alt="Velas de Cera de Palma"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">Artesanal</Badge>
                </div>
                <CardTitle className="text-primary">Velas de Cera de Palma</CardTitle>
                <CardDescription>Ilumina y armoniza tu espacio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Elaboradas con cera de palma natural, estas velas crean un ambiente de calma y serenidad, perfectas
                  para acompañar tus momentos de reflexión y meditación.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-card/80 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/card2.jpg"
                  alt="Velas para Masajes"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Cuidado Personal</Badge>
                </div>
                <CardTitle className="text-primary">Velas para Masajes</CardTitle>
                <CardDescription>Conexión y Cuidado Sensorial</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Velas especiales que se transforman en aceite tibio para masajes, creando una experiencia sensorial
                  única que nutre tanto el cuerpo como el alma.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-card/80 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/card3.jpg"
                  alt="Brumas Naturales"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Waves className="h-5 w-5 text-primary" />
                  <Badge variant="outline">Aromaterapia</Badge>
                </div>
                <CardTitle className="text-primary">Brumas Naturales</CardTitle>
                <CardDescription>Armoniza tu ser y tu espacio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Brumas elaboradas con esencias naturales que purifican y armonizan tanto tu espacio como tu energía,
                  creando un ambiente propicio para la sanación y el bienestar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <Badge variant="outline" className="w-fit mx-auto">
                Conecta con nosotros
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold text-balance">Comienza tu camino de sanación</h3>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Estamos aquí para acompañarte en tu proceso de crecimiento personal. Contáctanos para agendar tu primera
                sesión o resolver cualquier duda.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Acompañamiento personalizado</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Cada proceso es único. Adaptamos nuestro enfoque a tus necesidades específicas y ritmo personal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Enfoque integral</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Combinamos psicología, arte y sabiduría ancestral para crear un camino de sanación holístico y
                        profundo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Espacio seguro y amoroso</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Creamos un ambiente de confianza y respeto donde puedes explorar y sanar a tu propio ritmo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Heart className="mr-2 h-5 w-5" />
                    Agenda tu sesión
                  </Button>
                  <Button variant="outline" size="lg">
                    Conecta conmigo
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="organic-shape bg-primary/10 absolute -top-6 -right-6 w-32 h-32 -z-10"></div>
                <div className="organic-shape bg-primary/10 absolute -bottom-6 -left-6 w-24 h-24 -z-10"></div>
                <Card className="p-8 shadow-xl bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-primary">Conecta por WhatsApp</CardTitle>
                    <CardDescription>Inicia tu proceso de sanación de forma directa y personal</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Escríbenos directamente por WhatsApp para agendar tu sesión o resolver cualquier duda sobre
                        nuestros servicios terapéuticos.
                      </p>
                      <a
                        href="https://wa.me/573001234567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Reverdecer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
                      >
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Escribir por WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Reverdecer</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Acompañamiento terapéutico desde el corazón, integrando psicología, arte y sabiduría ancestral para tu
                proceso de sanación.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Servicios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#servicios" className="hover:text-primary transition-colors">
                    Terapia Individual
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-primary transition-colors">
                    Arteterapia
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-primary transition-colors">
                    Terapia Infantil
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-primary transition-colors">
                    Terapia Guiada
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Productos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#productos" className="hover:text-primary transition-colors">
                    Velas de Cera de Palma
                  </a>
                </li>
                <li>
                  <a href="#productos" className="hover:text-primary transition-colors">
                    Velas para Masajes
                  </a>
                </li>
                <li>
                  <a href="#productos" className="hover:text-primary transition-colors">
                    Brumas Naturales
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Reverdecer. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
