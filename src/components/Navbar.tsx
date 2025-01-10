import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const menuItems = ["Roadmap", "FAQ", "Reviews", "About", "Post", "404", "Dark Version"];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>xDICK</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Laszlo23/xdick.git" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/f8622061-71d7-4b88-af36-ddc6dfb5a047.png" alt="GitHub" className="w-6 h-6 hover:animate-wiggle" />
            </a>
            <a href="https://discord.gg/freakzers" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/38547c48-0e79-4bba-b64f-5c26a973abf1.png" alt="Discord" className="w-6 h-6 hover:animate-float" />
            </a>
            <a href="https://x.com/xDickHeads" target="_blank" rel="noopener noreferrer">
              <img src="/lovable-uploads/b4906139-cbf0-46fb-b58a-ab9b673d3c87.png" alt="Twitter" className="w-6 h-6 hover:animate-wiggle" />
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 hover:animate-spin" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;