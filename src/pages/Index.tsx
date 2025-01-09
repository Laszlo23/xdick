import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F0FB] text-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="text-6xl font-bold mb-6">
            THE NEW VAPORVAWE XDICK NFT COLLECTION
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Meet the notorious xDicks – the creatures from your dreams and nightmares, and quite possibly from under your bed... Don't look down!
          </p>
          <Button 
            size="lg"
            className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.open('https://opensea.io', '_blank')}
          >
            BUY ON OPENSEA
          </Button>
        </div>
      </section>

      {/* Collections Section */}
      <section className="container mx-auto px-4 py-20 bg-white rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Vaporwave collection</h3>
            <p className="text-gray-600">Get nostalgic about the 90s rave and soft electronic music</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Cyberpunk collection</h3>
            <p className="text-gray-600">Tech cartoony xDicks for their geeky tech fans</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Acid neon collection</h3>
            <p className="text-gray-600">Brighten up your art collection with these colorful characters</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Mystic cult collection</h3>
            <p className="text-gray-600">Uncanny and ghostly flair for those who like it spooky</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">BEHOLD: THEIR MAJESTY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-5xl font-bold text-[#0066FF] mb-4">80%</div>
            <h3 className="text-xl font-bold mb-2">NFTs bought at pre-launch</h3>
            <p className="text-gray-600">The last collection we launched was sold out on day 5 – and the start was quite impressive, too.</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#0066FF] mb-4">15</div>
            <h3 className="text-xl font-bold mb-2">Highest sale</h3>
            <p className="text-gray-600">These items are not to be looked down upon: this is something you'll boast about – or profitably resell.</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#0066FF] mb-4">+3K</div>
            <h3 className="text-xl font-bold mb-2">Top-notch pieces of art</h3>
            <p className="text-gray-600">Our incredibly productive artists and designers have embodied all their inspiration in these NFTs.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">WAIT, I NEED TO KNOW SOMETHING...</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            "What are NFTs?",
            "How do I get one?",
            "How do I make sure my NFT is unique?",
            "Can I resell my NFT?"
          ].map((question, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-6 bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => console.log(`Clicked ${question}`)}
            >
              <span className="text-xl font-bold">{question}</span>
              <ArrowRight className="text-[#0066FF]" />
            </div>
          ))}
        </div>
      </section>

      {/* Prime Membership Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-[#0066FF] text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">PRIME MEMBERSHIP</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If you're not too impressed yet, get ready for this: more stuff is available with the Pro subscription! Get pre-launch access to the market drops and exclusive collections of the best NFT collection in the observable universe.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-[#0066FF] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
          >
            GIMME MY PRO ACCESS!
          </Button>
        </div>
      </section>

      {/* Social Links */}
      <footer className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=61571499762060" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:text-[#0052CC] transition-colors">
            Facebook
          </a>
          <a href="https://x.com/xDickHeads" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:text-[#0052CC] transition-colors">
            Twitter
          </a>
          <a href="https://github.com/Laszlo23/xdick.git" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:text-[#0052CC] transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;