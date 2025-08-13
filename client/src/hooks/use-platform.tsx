import { create } from 'zustand';

interface PlatformStore {
  currentPlatform: 'pet' | 'vet';
  setPlatform: (platform: 'pet' | 'vet') => void;
}

export const usePlatform = create<PlatformStore>((set) => ({
  currentPlatform: 'pet',
  setPlatform: (platform) => set({ currentPlatform: platform }),
}));
