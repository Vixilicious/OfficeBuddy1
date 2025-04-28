import React from "react";
import { Shield, Users, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./AccessSection.css";

const accessLevels = [
  {
    icon: <Users className='icon' />,
    title: "General Access",
    description:
      "Open access to general company information, policies, and public resources for all employees.",
    features: [
      "Company announcements",
      "General policies",
      "Public documents",
      "Basic tools and resources",
    ],
    highlight: false,
  },
  {
    icon: <User className='icon' />,
    title: "Team Access",
    description:
      "Role-specific access to department resources and collaborative team tools.",
    features: [
      "Department documentation",
      "Team calendars and schedules",
      "Project management tools",
      "Shared team resources",
    ],
    highlight: true,
  },
  {
    icon: <Lock className='icon' />,
    title: "Secure Access",
    description:
      "Highly secure access to sensitive company information with advanced authentication.",
    features: [
      "Financial information",
      "HR records",
      "Strategic planning documents",
      "Confidential business data",
    ],
    highlight: false,
  },
];

const AccessSection = () => {
  return (
    <section id='access' className='section'>
      <div className='container-tight'>
        <div className='text-center mb-12 md:mb-16'>
          <div className='flex justify-center mb-4'>
            <Shield className='icon' />
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Role-Based <span className='gradient-text'>Access Levels</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Our system provides different levels of information access based on
            roles and security clearance, ensuring that the right information is
            available to the right people.
          </p>
        </div>

        <div className='cards-container'>
          {accessLevels.map((level, index) => (
            <div
              key={index}
              className={`card ${
                level.highlight ? "card--highlighted" : "card--default"
              }`}
            >
              <div
                className={`card-icon ${
                  level.highlight
                    ? "card-icon--highlighted"
                    : "card-icon--default"
                }`}
              >
                {level.icon}
              </div>
              <h3 className='card-title'>{level.title}</h3>
              <p
                className={`card-description ${
                  level.highlight
                    ? "card-description--highlighted"
                    : "card-description--default"
                }`}
              >
                {level.description}
              </p>
              <ul className='feature-list'>
                {level.features.map((feature, i) => (
                  <li key={i} className='feature-item'>
                    <div
                      className={`feature-dot ${
                        level.highlight
                          ? "feature-dot--highlighted"
                          : "feature-dot--default"
                      }`}
                    ></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={level.highlight ? "secondary" : "outline"}
                className={`card-button ${
                  level.highlight ? "card-button--highlighted" : ""
                }`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
