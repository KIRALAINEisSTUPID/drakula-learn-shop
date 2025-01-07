import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start p-4 space-y-12">
      {/* Hero Section */}
      <section className="w-full max-w-6xl">
        <h1 className="text-5xl font-bold text-dracula-purple mb-4">Welcome to School Portal</h1>
        <p className="text-xl text-dracula-foreground/80 max-w-2xl text-center mx-auto mb-8">
          Your one-stop destination for school resources, community, and supplies.
        </p>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-dracula-current rounded-lg text-center hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-dracula-pink mb-2">Learn</h2>
            <p className="text-dracula-foreground/80">Access educational resources and materials</p>
          </div>
          <div className="p-6 bg-dracula-current rounded-lg text-center hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-dracula-green mb-2">Connect</h2>
            <p className="text-dracula-foreground/80">Join our vibrant student community</p>
          </div>
          <div className="p-6 bg-dracula-current rounded-lg text-center hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-dracula-orange mb-2">Shop</h2>
            <p className="text-dracula-foreground/80">Get all your school supplies here</p>
          </div>
        </div>
      </section>

      <Separator className="bg-dracula-purple/20 w-full max-w-6xl" />

      {/* News Carousel */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-dracula-cyan mb-8 text-center">Latest Updates</h2>
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="basis-full">
              <div className="bg-dracula-current p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dracula-pink mb-2">New Semester Registration Open</h3>
                <p className="text-dracula-foreground/80">Register now for the upcoming semester and secure your spot in preferred classes.</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="bg-dracula-current p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dracula-green mb-2">Campus Events</h3>
                <p className="text-dracula-foreground/80">Check out our upcoming events and activities for this month.</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="bg-dracula-current p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dracula-orange mb-2">New Store Items</h3>
                <p className="text-dracula-foreground/80">Browse our latest collection of school supplies and merchandise.</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dracula-purple text-dracula-background hover:bg-dracula-pink" />
          <CarouselNext className="bg-dracula-purple text-dracula-background hover:bg-dracula-pink" />
        </Carousel>
      </section>

      {/* Quick Links */}
      <section className="w-full max-w-6xl bg-dracula-current p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-dracula-yellow mb-6 text-center">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-dracula-pink mb-2">Academic Calendar</h3>
            <p className="text-dracula-foreground/80">View important dates</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-dracula-green mb-2">Course Catalog</h3>
            <p className="text-dracula-foreground/80">Browse available courses</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-dracula-cyan mb-2">Student Resources</h3>
            <p className="text-dracula-foreground/80">Access study materials</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-dracula-orange mb-2">Support</h3>
            <p className="text-dracula-foreground/80">Get help when needed</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;