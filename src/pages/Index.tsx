import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import AccessSection from "@/components/AccessSection";
import MeetingSection from "@/components/MeetingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatContainer from "@/components/chatbot/ChatContainer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <MeetingSection />
      <AccessSection />
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-2xl font-bold text-center mb-6'>
              Chat with Our Assistant
            </h2>
            <ChatContainer />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
