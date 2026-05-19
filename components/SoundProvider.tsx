"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLifestyle } from "./LifestyleProvider";

interface SoundContextType {
  playSound: (type: "hover" | "click" | "transition") => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const { lifestyle } = useLifestyle();
  const [isMuted, setIsMuted] = useState(true); // Default muted to avoid autoplay issues
  const ambientRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We will just mock the sounds to prevent actual errors if files are missing.
    // In a real scenario, we'd load actual audio files.
  }, [lifestyle]);

  const playSound = (type: "hover" | "click" | "transition") => {
    if (isMuted) return;
    // Mock play sound
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <SoundContext.Provider value={{ playSound, isMuted, toggleMute }}>
      {/* Optional: Add a subtle mute toggle UI in a portal or just leave it for components to use */}
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) throw new Error("useSound must be used within SoundProvider");
  return context;
}
