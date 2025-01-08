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
  name: `Penise Face #${i + 1}`,
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
      <section className="pt-20 min-h-screen bg-comic-yellow flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 animate-float">
                Welcome to Penise Faces! 🤪
              </h1>
              <p className="text-xl mb-8">
                The most hilarious NFT collection that will make your wallet smile!
              </p>
              <Button size="lg" className="bg-comic-blue hover:bg-comic-blue/90 animate-wiggle">
                Join the Fun!
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-full p-8 shadow-2xl">
                <span className="text-9xl">🤪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About The Project</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              Penise Faces is not just another NFT collection - it's a community of
              fun-loving individuals who appreciate the lighter side of crypto!
            </p>
            <p className="text-xl text-gray-600">
              Each Penise Face is uniquely generated to bring joy and laughter to
              your digital wallet.
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
          <h2 className="text-4xl font-bold mb-8">Why So Serious? 🃏</h2>
          <p className="text-xl mb-8">
            Join us now and get your very own Penise Face! 
            Warning: May cause uncontrollable laughter and FOMO.
          </p>
          <Button size="lg" variant="secondary" className="animate-wiggle">
            Mint Now!
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
              <p>Building the most fun-loving community in Web3</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p>Pushing the boundaries of digital humor</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Value</h3>
              <p>Creating lasting value through laughter</p>
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