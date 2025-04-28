
import React from 'react';
import { Database, Lock, MessageCircle, Zap } from 'lucide-react';
import './FeatureSection.css';

const features = [
  {
    icon: <Database className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "Centralized Information",
    description: "Connect to all company information sources through one unified AI interface for improved efficiency."
  },
  {
    icon: <Lock className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "Role-Based Security",
    description: "Secure access to sensitive information with customizable role-based permissions and authentication."
  },
  {
    icon: <MessageCircle className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "Remote Meetings",
    description: "Participate in meetings remotely with full video, audio, and interaction capabilities."
  },
  {
    icon: <Zap className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "System Integration",
    description: "Seamlessly connect with your existing internal systems for maximum automation benefits."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <h2 className="feature-title">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="feature-description">
            Our AI Kontorsrobot provides advanced capabilities for accessing company information 
            and participating in meetings from anywhere.
          </p>
        </div>
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
