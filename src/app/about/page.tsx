import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LayoutShell from '@/components/layout/LayoutShell';
import About from '@/components/sections/About';

export default function AboutPage() {
  return (
    <LayoutShell>
      <About />
    </LayoutShell>
  );
}
