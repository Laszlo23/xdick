import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Index = () => {
  const faqItems = [
    {
      question: "What are NFTs?",
      answer: "NFTs (Non-Fungible Tokens) are unique digital assets stored on a blockchain. Each xDick NFT is one-of-a-kind and cannot be replicated, making it truly special and collectible."
    },
    {
      question: "How do I get one?",
      answer: "You can purchase xDick NFTs directly through OpenSea marketplace. Simply connect your crypto wallet, browse our collection, and make your purchase using ETH (Ethereum)."
    },
    {
      question: "How do I make sure my NFT is unique?",
      answer: "Each xDick NFT has a unique identifier on the blockchain that proves its authenticity and ownership. You can verify this through the blockchain explorer or OpenSea's verification system."
    },
    {
      question: "Can I resell my NFT?",
      answer: "Absolutely! You can list your xDick NFT for sale on OpenSea or other NFT marketplaces at any time. The value may increase based on market demand and rarity."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB] text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#F1F0FB] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-8xl font-black mb-6 tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
            THE NEW xDICK NFT COLLECTION
          </h1>
          <p className="text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Meet the notorious xDicks – the creatures from your dreams and nightmares, and quite possibly from under your bed... Don't look down!
          </p>
          <Button 
            size="lg"
            className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.open('https://opensea.io', '_blank')}
          >
            BUY ON OPENSEA
          </Button>
          
          {/* Character Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            <img src="/lovable-uploads/420cc069-f2b6-4b4b-9fde-6137e9f7ceee.png" alt="Character 1" className="w-full h-auto rounded-full bg-pink-200 p-4 hover:scale-110 transition-transform animate-float" />
            <img src="/lovable-uploads/4ef1f7e3-232a-4005-bd45-67561ee2beef.png" alt="Character 2" className="w-full h-auto rounded-full bg-blue-200 p-4 hover:scale-110 transition-transform animate-float delay-100" />
            <img src="/lovable-uploads/93a8d387-667c-4984-a691-5a229a298279.png" alt="Character 3" className="w-full h-auto rounded-full bg-yellow-200 p-4 hover:scale-110 transition-transform animate-float delay-200" />
            <img src="/lovable-uploads/33fabd6f-5719-47be-8a67-7aada2ede8df.png" alt="Character 4" className="w-full h-auto rounded-full bg-green-200 p-4 hover:scale-110 transition-transform animate-float delay-300" />
            <img src="/lovable-uploads/62d629d9-1b6c-4249-8953-d5124ad2726e.png" alt="Character 5" className="w-full h-auto rounded-full bg-purple-200 p-4 hover:scale-110 transition-transform animate-float delay-400" />
            <img src="/lovable-uploads/f7b63aca-7a6e-44d0-8516-952a849cee75.png" alt="Character 6" className="w-full h-auto rounded-full bg-orange-200 p-4 hover:scale-110 transition-transform animate-float delay-500" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">THE STORY BEHIND xDICKS</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                In a world where digital art meets mischief, the xDicks emerged from the creative depths of the internet. These peculiar creatures aren't your ordinary NFTs – they're a celebration of humor, absurdity, and the pure joy of collecting something truly unique.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Each xDick has its own personality: from the caped crusader who fights for justice with style, to the sleepy dreamer who floats on clouds, to the mariachi enthusiast who brings the party wherever they go. They're more than just digital assets; they're a community of misfits waiting to find their forever homes.
              </p>
              <p className="text-xl text-gray-600">
                Join the xDick revolution and own a piece of internet history. Whether you're a seasoned NFT collector or just someone who appreciates the quirkier side of life, there's an xDick waiting for you. Just remember – they might be under your bed right now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="container mx-auto px-4 py-20 bg-white rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">xDick Classic Collection</h3>
            <p className="text-gray-600">Get nostalgic about the original xDick designs</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">xDick Tech Collection</h3>
            <p className="text-gray-600">Tech cartoony xDicks for their geeky tech fans</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">xDick Neon Collection</h3>
            <p className="text-gray-600">Brighten up your art collection with these colorful xDicks</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">xDick Mystic Collection</h3>
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
          {faqItems.map((item, index) => (
            <Collapsible key={index} className="w-full">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-white rounded-xl hover:shadow-lg transition-all group">
                <span className="text-xl font-bold">{item.question}</span>
                <ArrowRight className="text-[#0066FF] transition-transform group-hover:translate-x-2 group-data-[state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden">
                <div className="p-6 bg-white/50 rounded-b-xl">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
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