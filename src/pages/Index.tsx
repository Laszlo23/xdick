import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Facebook, Twitter, Github } from "lucide-react";

const Index = () => {
  const [position, setPosition] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Animation effect for floating image
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= window.innerWidth ? -300 : prev + 5));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Countdown effect
  useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
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
        
        {/* Countdown Timer */}
        <div className="flex gap-4 justify-center">
          <div className="bg-comic-blue/10 p-4 rounded-lg">
            <span className="text-4xl font-bold text-comic-blue">{timeLeft.days}</span>
            <p className="text-sm text-comic-blue">Days</p>
          </div>
          <div className="bg-comic-blue/10 p-4 rounded-lg">
            <span className="text-4xl font-bold text-comic-blue">{timeLeft.hours}</span>
            <p className="text-sm text-comic-blue">Hours</p>
          </div>
          <div className="bg-comic-blue/10 p-4 rounded-lg">
            <span className="text-4xl font-bold text-comic-blue">{timeLeft.minutes}</span>
            <p className="text-sm text-comic-blue">Minutes</p>
          </div>
          <div className="bg-comic-blue/10 p-4 rounded-lg">
            <span className="text-4xl font-bold text-comic-blue">{timeLeft.seconds}</span>
            <p className="text-sm text-comic-blue">Seconds</p>
          </div>
        </div>

        <p className="text-2xl italic text-comic-blue">"We know when it's time to grow"</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-comic-blue hover:text-comic-red transition-colors">
            <Facebook size={32} />
          </a>
          <a href="#" className="text-comic-blue hover:text-comic-red transition-colors">
            <Twitter size={32} />
          </a>
          <a href="#" className="text-comic-blue hover:text-comic-red transition-colors">
            <Github size={32} />
          </a>
        </div>

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