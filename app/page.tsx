import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <section className="flex flex-col items-center justify-center text-center py-12">
          <h1 className="font-pixel text-4xl text-primary mb-6">PVP.FUN</h1>
          <p className="text-xl mb-8 max-w-2xl">
            A pioneering pixel-style Counter-Strike shooter game on the Solana blockchain
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/game" className="pixel-button">
              PLAY NOW
            </Link>
            <Link href="/nfts" className="pixel-button bg-game-light">
              EXPLORE NFTs
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="bg-game-light p-6 rounded-lg pixel-border">
            <h2 className="font-pixel text-lg text-primary mb-3">REAL-TIME BATTLES</h2>
            <p className="text-sm opacity-80">
              Experience fast-paced multiplayer combat with low-latency gameplay, 
              powered by Solana's high-throughput blockchain.
            </p>
          </div>
          <div className="bg-game-light p-6 rounded-lg pixel-border">
            <h2 className="font-pixel text-lg text-primary mb-3">NFT ASSETS</h2>
            <p className="text-sm opacity-80">
              Collect and trade unique weapon skins and equipment, with full
              ownership secured on the blockchain.
            </p>
          </div>
          <div className="bg-game-light p-6 rounded-lg pixel-border">
            <h2 className="font-pixel text-lg text-primary mb-3">COMMUNITY DAO</h2>
            <p className="text-sm opacity-80">
              Participate in game governance through PVP tokens, shape the future
              of the game and organize tournaments.
            </p>
          </div>
        </section>

        <section className="my-16 bg-game-light p-8 rounded-lg pixel-border">
          <div className="text-center mb-8">
            <h2 className="font-pixel text-2xl text-primary mb-3">HOW IT WORKS</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              PVP.FUN combines the thrill of classic Counter-Strike with the power of Web3 technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-pixel text-white">1</span>
              </div>
              <h3 className="font-pixel text-sm mb-2">CONNECT WALLET</h3>
              <p className="text-xs opacity-80">Link your Solana wallet to get started</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-pixel text-white">2</span>
              </div>
              <h3 className="font-pixel text-sm mb-2">JOIN BATTLES</h3>
              <p className="text-xs opacity-80">Enter 5v5 matches and compete for rewards</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-pixel text-white">3</span>
              </div>
              <h3 className="font-pixel text-sm mb-2">EARN PVP TOKENS</h3>
              <p className="text-xs opacity-80">Win matches to earn PVP tokens</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-pixel text-white">4</span>
              </div>
              <h3 className="font-pixel text-sm mb-2">COLLECT NFTs</h3>
              <p className="text-xs opacity-80">Use tokens to mint unique weapon skins</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 