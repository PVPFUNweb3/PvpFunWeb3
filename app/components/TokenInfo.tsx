export default function TokenInfo() {
  // Token statistics (example data)
  const tokenStats = {
    name: 'PVP',
    symbol: 'PVP',
    totalSupply: '100,000,000',
    price: '$0.015',
    marketCap: '$1,500,000',
    holders: '3,240',
    platform: 'Solana (SPL Token)',
    allocation: [
      { name: 'Game Rewards', percentage: 40 },
      { name: 'Community DAO', percentage: 25 },
      { name: 'Team & Development', percentage: 15 },
      { name: 'Marketing', percentage: 10 },
      { name: 'Liquidity', percentage: 10 },
    ],
  };
  
  return (
    <div className="bg-game-light p-6 rounded-lg pixel-border my-8">
      <div className="text-center mb-6">
        <h2 className="font-pixel text-xl text-primary mb-2">PVP TOKEN</h2>
        <p className="text-sm opacity-80">The native token for PVP.FUN GameFi ecosystem</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-pixel text-secondary mb-4 text-sm">TOKEN INFO</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="opacity-80">Name:</span>
              <span className="font-medium">{tokenStats.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Symbol:</span>
              <span className="font-medium">{tokenStats.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Total Supply:</span>
              <span className="font-medium">{tokenStats.totalSupply}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Current Price:</span>
              <span className="font-medium text-primary">{tokenStats.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Market Cap:</span>
              <span className="font-medium">{tokenStats.marketCap}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Holders:</span>
              <span className="font-medium">{tokenStats.holders}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Platform:</span>
              <span className="font-medium">{tokenStats.platform}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-pixel text-secondary mb-4 text-sm">TOKEN ALLOCATION</h3>
          <div className="space-y-4">
            {tokenStats.allocation.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full h-4 bg-game-dark rounded-sm overflow-hidden">
                  <div 
                    className="h-full bg-primary"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center space-y-4">
        <p className="text-sm opacity-80">
          PVP token is used for in-game purchases, NFT trading, and DAO governance
        </p>
        <div className="flex justify-center space-x-4">
          <button className="pixel-button text-xs">
            BUY PVP
          </button>
          <button className="pixel-button text-xs bg-game-dark">
            VIEW ON EXPLORER
          </button>
        </div>
      </div>
    </div>
  );
} 