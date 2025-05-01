import { NextResponse } from 'next/server';

export async function GET() {
  // Simulated data to represent Solana blockchain information
  const data = {
    network: 'Solana Mainnet',
    status: 'online',
    latestBlock: 123456789,
    tps: 2543,
    pvpToken: {
      address: 'PVP1234567890abcdefghijklmnopqrstuvwxyz',
      totalSupply: '100000000',
      holders: 3240,
      price: 0.015,
      marketCap: 1500000,
    },
    nfts: {
      totalSupply: 10000,
      minted: 3521,
      floorPrice: 0.8,
      volume24h: 456,
    }
  };

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate wallet connection
    if (body.action === 'connect_wallet') {
      return NextResponse.json({
        success: true,
        wallet: {
          address: 'Demo' + Math.random().toString(36).substring(2, 10),
          balance: (Math.random() * 10).toFixed(2),
          pvpBalance: Math.floor(Math.random() * 1000),
        }
      });
    }
    
    // Simulate NFT purchase
    if (body.action === 'purchase_nft') {
      if (!body.nftId) {
        return NextResponse.json({ 
          success: false, 
          error: 'NFT ID required' 
        }, { status: 400 });
      }
      
      return NextResponse.json({
        success: true,
        transaction: {
          hash: 'tx_' + Math.random().toString(36).substring(2, 15),
          timestamp: new Date().toISOString(),
          nftId: body.nftId,
        }
      });
    }
    
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid action' 
    }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid request' 
    }, { status: 400 });
  }
} 