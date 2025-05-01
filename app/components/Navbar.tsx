import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-game-light p-4 pixel-border my-4 mx-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-pixel text-xl text-primary">
          PVP.FUN
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/game" className="font-pixel text-sm hover:text-secondary">
            GAME
          </Link>
          <Link href="/nfts" className="font-pixel text-sm hover:text-secondary">
            NFTs
          </Link>
          <Link href="/token" className="font-pixel text-sm hover:text-secondary">
            PVP TOKEN
          </Link>
          <button className="pixel-button text-xs">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </nav>
  );
} 