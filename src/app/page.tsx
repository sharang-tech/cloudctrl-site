import AISection from '@/components/aisection';
import CallToAction from '@/components/call-to-action';
import Solutions from '@/components/features-10';
import Features from '@/components/features-8';
import HeroSection from '@/components/hero-section';
import ProviderSection from '@/components/integrations-1';
import IntegrationsSection from '@/components/integrations-6';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CloudCTRL',
  description: 'CloudCTRL simplifies deployment and management of cloud, AI, frontend, and database resources with a single, intuitive command-line interface.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProviderSection />
      <Features />
      <AISection />
      <Solutions />
      <IntegrationsSection />
      <CallToAction />
    </>
  );
}
