import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= window.innerWidth ? -300 : prev + 5));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b4906139-cbf0-46fb-b58a-ab9b673d3c87.png" 
          alt="xDicks Collection"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Floating Image */}
      <div 
        style={{ 
          left: `${position}px`,
          top: '20%'
        }} 
        className="absolute z-20 flex flex-col items-center"
      >
        <img 
          src="/lovable-uploads/f8622061-71d7-4b88-af36-ddc6dfb5a047.png" 
          alt="Dickhead"
          className="w-32 h-32 object-contain"
        />
        <p className="text-xl font-bold text-comic-red mt-2">F**k You!</p>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-8xl font-bold mb-6 animate-float text-comic-blue">
          xDick
        </h1>
        <p className="text-4xl font-bold text-comic-red">Coming Soon</p>
        <p className="text-2xl italic text-comic-blue">"We know when it's time to grow"</p>
        <div className="mt-8">
          <Button 
            size="lg" 
            className="bg-comic-blue hover:bg-comic-blue/90 animate-wiggle"
            onClick={() => window.open('https://t.me/+85Jbnv4cd942M2Nk', '_blank')}
          >
            Join us on Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;