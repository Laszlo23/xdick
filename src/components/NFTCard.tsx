import { Card, CardContent } from "./ui/card";

interface NFTCardProps {
  id: number;
  name: string;
  perks: string[];
}

const NFTCard = ({ id, name, perks }: NFTCardProps) => {
  return (
    <Card className="w-[300px] hover:scale-105 transition-transform duration-300">
      <CardContent className="p-6">
        <div className="aspect-square bg-comic-yellow rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src="/lovable-uploads/a23089fa-5139-4a4a-8e0e-f20d4c8a08d9.png" 
            alt={name}
            className="w-full h-full object-cover"
            style={{
              clipPath: `polygon(${((id - 1) % 4) * 25}% 0%, ${((id - 1) % 4 + 1) * 25}% 0%, ${((id - 1) % 4 + 1) * 25}% 50%, ${((id - 1) % 4) * 25}% 50%)`,
              transform: `translateY(${Math.floor((id - 1) / 4) * -100}%)`
            }}
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <ul className="list-disc list-inside space-y-1">
          {perks.map((perk, index) => (
            <li key={index} className="text-sm text-gray-600">
              {perk}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NFTCard;