import Navbar from '../components/Navbar';
import TokenInfo from '../components/TokenInfo';

export default function TokenPage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl text-primary mb-3">PVP TOKEN</h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            The native token powering the PVP.FUN ecosystem on Solana
          </p>
        </div>
        
        <TokenInfo />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="bg-game-light p-6 rounded-lg pixel-border">
            <h2 className="font-pixel text-lg text-primary mb-3">GAME REWARDS</h2>
            <p className="text-sm opacity-80">
              Earn PVP tokens by competing in matches and tournaments.
              Top players receive additional rewards through leaderboards.
            </p>
          </div>
          <div className="bg-game-light p-6 rounded-lg pixel-border">
            <h2 className="font-pixel text-lg text-primary mb-3">NFT MARKETPLACE</h2>
            <p className="text-sm opacity-80">
              Use PVP tokens to purchase, trade, and mint exclusive
              weapon skins and equipment as NFTs.
            </p>
          </div>
          <div className="bg-game-light p-6 rounded-lg pixel-border">
            <h2 className="font-pixel text-lg text-primary mb-3">DAO GOVERNANCE</h2>
            <p className="text-sm opacity-80">
              PVP token holders can vote on game updates, tournament
              rules, and fund allocation through the DAO.
            </p>
          </div>
        </div>
        
        <div className="bg-game-light p-8 rounded-lg pixel-border my-16">
          <div className="text-center mb-8">
            <h2 className="font-pixel text-xl text-primary mb-3">TOKENOMICS</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              PVP token is designed for long-term sustainability and community value
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-pixel text-sm mb-2">CIRCULAR ECONOMY</h3>
              <p className="text-sm opacity-80">
                Players earn tokens through gameplay, spend them on NFTs, and can stake them
                for governance rights, creating a balanced token flow.
              </p>
            </div>
            <div>
              <h3 className="font-pixel text-sm mb-2">DEFLATIONARY MECHANISMS</h3>
              <p className="text-sm opacity-80">
                A portion of all NFT marketplace transactions is burned, reducing total supply
                over time and protecting token value.
              </p>
            </div>
            <div>
              <h3 className="font-pixel text-sm mb-2">STAKING REWARDS</h3>
              <p className="text-sm opacity-80">
                Lock your PVP tokens to earn exclusive NFTs, additional voting power,
                and a share of marketplace transaction fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 