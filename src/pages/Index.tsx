import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NFTCard from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const nfts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `xDick #${i + 1}`,
  perks: [
    "Access to exclusive memes",
    "Monthly joke airdrops",
    "Community voting rights",
  ],
}));

const partners = [
  "Laugh Corp",
  "Meme Masters",
  "Joke Factory",
  "Comedy Chain",
  "Grin Labs",
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen bg-comic-yellow flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-8xl font-bold mb-6 animate-float">
              xDicks NFT
            </h1>
            <div className="space-y-4 text-2xl font-bold mb-8">
              <p>We Fuck</p>
              <p>We Talk</p>
              <p>We Love</p>
              <p>We Are The Change That Is Needed</p>
            </div>
            <Button size="lg" className="bg-comic-blue hover:bg-comic-blue/90 animate-wiggle">
              Join the Revolution!
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/38547c48-0e79-4bba-b64f-5c26a973abf1.png" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About xDicks</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              xDicks is not just another NFT collection - it's a movement of rebels
              who dare to be different and make a statement in the crypto world!
            </p>
            <p className="text-xl text-gray-600">
              Each xDick is uniquely generated to represent the boldness and
              creativity of our community.
            </p>
          </div>
        </div>
      </section>

      {/* NFTs Section */}
      <section id="nfts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our NFTs</h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {nfts.map((nft) => (
                <CarouselItem key={nft.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <NFTCard {...nft} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-comic-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get xDicked? 🍌</h2>
          <p className="text-xl mb-8">
            Join our community of rebels and revolutionaries! 
            Warning: Side effects may include uncontrollable laughter and FOMO.
          </p>
          <Button size="lg" variant="secondary" className="animate-wiggle">
            Mint Your xDick!
          </Button>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p>Building the most rebellious community in Web3</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p>Pushing the boundaries of digital expression</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Revolution</h3>
              <p>Creating lasting change through bold statements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;