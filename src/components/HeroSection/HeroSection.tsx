
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">OfficeBuddy</span>
              <br />Enhanced Information Access
            </h1>
            <p className="hero-description">
              Connect to company information and participate in meetings seamlessly with our advanced AI agent technology.
            </p>
            <div className="hero-buttons">
              <Button className="btn-gradient">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="shadow-sm">
                View Demo
              </Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="gradient-image bg-gradient-blue">
                <div className="gradient-overlay"></div>
                <div className="gradient-content">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-robot-blue-light rounded-full flex items-center justify-center shadow-lg mb-4">
                      <div className="w-12 h-12 bg-white rounded-full animate-pulse-slow"></div>
                    </div>
                    <p className="text-white font-tech tracking-wider">AI AGENT ONLINE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
