import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PVP.FUN - Pixel-Style Counter-Strike on Solana',
  description: 'A pioneering pixel-style Counter-Strike (CS) shooter game on the Solana blockchain with NFT assets and on-chain governance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-game-dark text-white">
        {children}
      </body>
    </html>
  )
} 