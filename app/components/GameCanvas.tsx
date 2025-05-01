import { useEffect, useRef } from 'react';

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game state
  const gameState = {
    player: { x: 150, y: 150, direction: 0, speed: 3 },
    enemies: [
      { x: 300, y: 100, direction: Math.PI, speed: 1 },
      { x: 400, y: 200, direction: Math.PI / 2, speed: 1 },
    ],
    bullets: [] as { x: number, y: number, direction: number, speed: number }[],
    map: {
      width: 600,
      height: 400,
      obstacles: [
        { x: 100, y: 100, width: 50, height: 50 },
        { x: 400, y: 250, width: 60, height: 30 },
      ]
    }
  };

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Simple keyboard controls
      switch(e.key) {
        case 'ArrowUp':
          gameState.player.y -= gameState.player.speed;
          gameState.player.direction = -Math.PI / 2;
          break;
        case 'ArrowDown':
          gameState.player.y += gameState.player.speed;
          gameState.player.direction = Math.PI / 2;
          break;
        case 'ArrowLeft':
          gameState.player.x -= gameState.player.speed;
          gameState.player.direction = Math.PI;
          break;
        case 'ArrowRight':
          gameState.player.x += gameState.player.speed;
          gameState.player.direction = 0;
          break;
        case ' ': // Spacebar to shoot
          gameState.bullets.push({
            x: gameState.player.x,
            y: gameState.player.y,
            direction: gameState.player.direction,
            speed: 5
          });
          break;
      }
      
      // Redraw on each key press
      drawGame();
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // Draw game elements
  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.fillStyle = '#1A1A2E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw obstacles
    ctx.fillStyle = '#34345A';
    gameState.map.obstacles.forEach(obstacle => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
    
    // Draw player (pixel art style character)
    ctx.fillStyle = '#7B3FE4';
    ctx.fillRect(gameState.player.x, gameState.player.y, 10, 10);
    
    // Draw enemies
    ctx.fillStyle = '#FF4D4D';
    gameState.enemies.forEach(enemy => {
      ctx.fillRect(enemy.x, enemy.y, 10, 10);
    });
    
    // Draw bullets
    ctx.fillStyle = '#FFFFFF';
    gameState.bullets.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, 4, 4);
      
      // Update bullet position
      bullet.x += Math.cos(bullet.direction) * bullet.speed;
      bullet.y += Math.sin(bullet.direction) * bullet.speed;
    });
    
    // Remove bullets that are out of bounds
    gameState.bullets = gameState.bullets.filter(bullet => 
      bullet.x > 0 && bullet.x < canvas.width && 
      bullet.y > 0 && bullet.y < canvas.height
    );
  };
  
  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions
    canvas.width = gameState.map.width;
    canvas.height = gameState.map.height;
    
    // Initial draw
    drawGame();
    
    // Game loop
    const gameLoop = setInterval(() => {
      // Move enemies randomly
      gameState.enemies.forEach(enemy => {
        if (Math.random() > 0.95) {
          enemy.direction = Math.random() * Math.PI * 2;
        }
        
        enemy.x += Math.cos(enemy.direction) * enemy.speed;
        enemy.y += Math.sin(enemy.direction) * enemy.speed;
        
        // Keep enemies in bounds
        if (enemy.x < 0) enemy.x = 0;
        if (enemy.y < 0) enemy.y = 0;
        if (enemy.x > canvas.width - 10) enemy.x = canvas.width - 10;
        if (enemy.y > canvas.height - 10) enemy.y = canvas.height - 10;
      });
      
      drawGame();
    }, 1000 / 30); // 30 FPS
    
    return () => {
      clearInterval(gameLoop);
    };
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div className="pixel-border bg-game-dark">
        <canvas 
          ref={canvasRef} 
          className="pixelated"
          style={{ imageRendering: 'pixelated' }}
        ></canvas>
      </div>
    </div>
  );
} 