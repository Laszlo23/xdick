import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

const Index = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; top: number }>>([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Hearts animation
  useEffect(() => {
    const createHeart = () => {
      const id = Date.now();
      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      
      setHearts(prev => [...prev, { id, left, top }]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== id));
      }, 5000);
    };

    const heartInterval = setInterval(createHeart, 2000);
    return () => clearInterval(heartInterval);
  }, []);

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
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#1A1F2C]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b4906139-cbf0-46fb-b58a-ab9b673d3c87.png" 
          alt="xDicks Collection"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Animated Hearts */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute z-10 animate-float pointer-events-none"
          style={{
            left: `${heart.left}px`,
            top: `${heart.top}px`,
          }}
        >
          <span className="text-2xl text-comic-red">❤️</span>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-8xl font-bold mb-6 animate-float text-comic-blue">
          xDick
        </h1>
        <p className="text-4xl font-bold text-comic-red">Coming Soon</p>
        
        {/* Countdown Timer */}
        <div className="flex gap-4 justify-center">
          <div className="bg-comic-blue/10 p-4 rounded-lg backdrop-blur-sm">
            <span className="text-4xl font-bold text-comic-blue">{timeLeft.days}</span>
            <p className="text-sm text-comic-blue">Days</p>
          </div>
          <div className="bg-comic-blue/10 p-4 rounded-lg backdrop-blur-sm">
            <span className="text-4xl font-bold text-comic-blue">{timeLeft.hours}</span>
            <p className="text-sm text-comic-blue">Hours</p>
          </div>
          <div className="bg-comic-blue/10 p-4 rounded-lg backdrop-blur-sm">
            <span className="text-4xl font-bold text-comic-blue">{timeLeft.minutes}</span>
            <p className="text-sm text-comic-blue">Minutes</p>
          </div>
          <div className="bg-comic-blue/10 p-4 rounded-lg backdrop-blur-sm">
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
          <a href="#" className="text-comic-blue hover:text-comic-red transition-colors">
            <Linkedin size={32} />
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