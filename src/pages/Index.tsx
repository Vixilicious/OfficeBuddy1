
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import AccessSection from '@/components/AccessSection';
import MeetingSection from '@/components/MeetingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <MeetingSection />
      <AccessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
