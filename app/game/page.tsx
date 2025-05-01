import Navbar from '../components/Navbar';
import GameCanvas from '../components/GameCanvas';

export default function GamePage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-2xl text-primary mb-3">PIXEL CS SHOOTER</h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            Use arrow keys to move and spacebar to shoot
          </p>
        </div>
        
        <GameCanvas />
        
        <div className="max-w-3xl mx-auto my-8 bg-game-light p-6 rounded-lg pixel-border">
          <h2 className="font-pixel text-lg text-primary mb-4">GAME CONTROLS</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-pixel text-sm mb-2">MOVEMENT</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="bg-game-dark px-2 py-1 rounded mr-2 font-pixel text-xs">↑</span>
                  <span>Move Up</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-game-dark px-2 py-1 rounded mr-2 font-pixel text-xs">↓</span>
                  <span>Move Down</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-game-dark px-2 py-1 rounded mr-2 font-pixel text-xs">←</span>
                  <span>Move Left</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-game-dark px-2 py-1 rounded mr-2 font-pixel text-xs">→</span>
                  <span>Move Right</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-pixel text-sm mb-2">ACTIONS</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="bg-game-dark px-2 py-1 rounded mr-2 font-pixel text-xs">SPACE</span>
                  <span>Shoot</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-game-dark px-2 py-1 rounded mr-2 font-pixel text-xs">R</span>
                  <span>Reload (Coming Soon)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-game-dark px-2 py-1 rounded mr-2 font-pixel text-xs">F</span>
                  <span>Switch Weapon (Coming Soon)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 