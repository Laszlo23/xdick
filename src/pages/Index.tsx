import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/b4906139-cbf0-46fb-b58a-ab9b673d3c87.png" 
          alt="xDicks Collection"
          className="w-full h-full object-cover opacity-10"
        />
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
            onClick={() => window.open('https://t.me/xDicks', '_blank')}
          >
            Join us on Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;