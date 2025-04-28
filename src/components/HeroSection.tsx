import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <ParticleBackground />
      <div className='container'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='hero-heading animate-fade-in'>
              <br />
              <span className='gradient-text'>Our OfficeBuddy</span>
              <br />
              Enhanced Information Access through AI
            </h1>
            <p
              className='hero-description animate-fade-in'
              style={{ animationDelay: "0.2s" }}
            >
              Connect to company information and participate in meetings
              seamlessly with our advanced AI agent technology.
            </p>
            <div
              className='hero-buttons animate-fade-in'
              style={{ animationDelay: "0.4s" }}
            >
              <Button className='btn-gradient'>
                Get Started
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
              <Button variant='outline'>View Demo</Button>
            </div>
          </div>

          <div className='hero-visual'>
            <div
              className='visual-container animate-fade-in'
              style={{ animationDelay: "0.6s" }}
            >
              <div className='visual-frame animate-float'>
                <div className='visual-overlay'></div>
                <div className='visual-content'>
                  <div className='ai-indicator'>
                    <div className='ai-circle'>
                      <div className='ai-pulse'></div>
                    </div>
                    <p className='ai-status'>AI AGENT ONLINE</p>
                  </div>
                </div>
              </div>
              <div className='decorative-blur blur-1'></div>
              <div className='decorative-blur blur-2'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
