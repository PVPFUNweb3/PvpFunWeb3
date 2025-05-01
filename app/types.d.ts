// Type definitions for the project

// Ensure React JSX types are available
import React from 'react';

// Define custom types here
interface NftCardProps {
  id: string;
  name: string;
  image: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  price: number;
}

// Add any additional type definitions as needed 