interface NftCardProps {
  id: string;
  name: string;
  image: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  price: number;
}

export default function NftCard({ id, name, image, rarity, price }: NftCardProps) {
  // Define color based on rarity
  const rarityColors = {
    Common: 'border-gray-400',
    Rare: 'border-blue-500',
    Epic: 'border-purple-500',
    Legendary: 'border-yellow-400',
  };
  
  return (
    <div className={`bg-game-light p-4 rounded-lg pixel-border ${rarityColors[rarity]}`}>
      <div className="h-40 overflow-hidden mb-4 bg-black flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="w-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      <div className="text-center">
        <h3 className="font-pixel text-xs mb-1">{name}</h3>
        <span className={`text-xs px-2 py-1 rounded ${
          rarity === 'Common' ? 'bg-gray-400' : 
          rarity === 'Rare' ? 'bg-blue-500' : 
          rarity === 'Epic' ? 'bg-purple-500' : 
          'bg-yellow-400'
        }`}>
          {rarity}
        </span>
        <p className="mt-3 font-pixel text-primary">{price} SOL</p>
        <button className="w-full mt-3 pixel-button text-xs">
          BUY NFT
        </button>
      </div>
    </div>
  );
} 