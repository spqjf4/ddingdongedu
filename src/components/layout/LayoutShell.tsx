"use client";

import { useState } from "react";
import Header from "./Header";
import MenuOverlay from "./MenuOverlay";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        {children}
      </main>
    </>
  );
}
