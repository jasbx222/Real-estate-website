"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Lifestyle = "none" | "fast-city" | "silent-nature" | "luxury-minimal" | "night-creative" | "investor";

interface LifestyleContextType {
  lifestyle: Lifestyle;
  setLifestyle: (l: Lifestyle) => void;
}

const LifestyleContext = createContext<LifestyleContextType | undefined>(undefined);

export function LifestyleProvider({ children }: { children: React.ReactNode }) {
  const [lifestyle, setLifestyle] = useState<Lifestyle>("none");

  useEffect(() => {
    if (lifestyle !== "none") {
      document.documentElement.setAttribute("data-theme", lifestyle);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [lifestyle]);

  return (
    <LifestyleContext.Provider value={{ lifestyle, setLifestyle }}>
      {children}
    </LifestyleContext.Provider>
  );
}

export function useLifestyle() {
  const context = useContext(LifestyleContext);
  if (!context) throw new Error("useLifestyle must be used within LifestyleProvider");
  return context;
}
