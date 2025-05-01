import Navbar from '../components/Navbar';
import NftCard from '../components/NftCard';

export default function NftsPage() {
  // Example NFT data
  const nfts = [
    {
      id: 'nft-001',
      name: 'Pixel AK-47 | Blaze',
      image: 'https://via.placeholder.com/200x200/FF4D4D/FFFFFF?text=AK-47',
      rarity: 'Epic' as const,
      price: 3.5
    },
    {
      id: 'nft-002',
      name: 'Pixel AWP | Void',
      image: 'https://via.placeholder.com/200x200/7B3FE4/FFFFFF?text=AWP',
      rarity: 'Legendary' as const,
      price: 5.2
    },
    {
      id: 'nft-003',
      name: 'Pixel M4A4 | Cyber',
      image: 'https://via.placeholder.com/200x200/3F87E4/FFFFFF?text=M4A4',
      rarity: 'Rare' as const,
      price: 2.1
    },
    {
      id: 'nft-004',
      name: 'Pixel Desert Eagle | Retro',
      image: 'https://via.placeholder.com/200x200/E4B83F/FFFFFF?text=DEAGLE',
      rarity: 'Epic' as const,
      price: 1.8
    },
    {
      id: 'nft-005',
      name: 'Pixel USP-S | Minimal',
      image: 'https://via.placeholder.com/200x200/555555/FFFFFF?text=USP-S',
      rarity: 'Common' as const,
      price: 0.8
    },
    {
      id: 'nft-006',
      name: 'Pixel Knife | Rainbow',
      image: 'https://via.placeholder.com/200x200/FF00FF/FFFFFF?text=KNIFE',
      rarity: 'Legendary' as const,
      price: 8.5
    },
  ];

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl text-primary mb-3">NFT MARKETPLACE</h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            Browse and collect unique weapon skins secured as NFTs on the Solana blockchain
          </p>
        </div>
        
        <div className="bg-game-light p-6 rounded-lg pixel-border mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h2 className="font-pixel text-lg text-primary">FEATURED NFTs</h2>
            </div>
            <div className="flex gap-2">
              <button className="pixel-button text-xs">
                NEWEST
              </button>
              <button className="pixel-button bg-game-dark text-xs">
                RARITY
              </button>
              <button className="pixel-button bg-game-dark text-xs">
                PRICE
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map(nft => (
            <NftCard 
              key={nft.id}
              id={nft.id}
              name={nft.name}
              image={nft.image}
              rarity={nft.rarity}
              price={nft.price}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="pixel-button text-xs">
            LOAD MORE NFTs
          </button>
        </div>
      </div>
    </main>
  );
} 