import React from "react";
import { Calendar, Video, Mic, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./MeetingSection.css";
import videoCallImage from "../img/video-call-you.png";

const MeetingSection = () => {
  return (
    <section id='meetings' className='meeting-section'>
      <div className='container'>
        <div className='meeting-grid'>
          <div className='meeting-content'>
            <h2 className='meeting-title'>
              Join Meetings <span className='gradient-text'>From Anywhere</span>
            </h2>
            <p className='meeting-description'>
              Our AI Agent allows you to participate in meetings remotely
              through the robot. Book in advance, join via video conferencing,
              and interact in real-time as if you were physically present.
            </p>

            <div className='features-grid'>
              <div className='feature-item'>
                <div className='feature-icon'>
                  <Calendar className='icon' />
                </div>
                <div className='feature-content'>
                  <h3 className='feature-title'>Easy Booking</h3>
                  <p className='feature-description'>
                    Schedule meeting participation with a few clicks
                  </p>
                </div>
              </div>

              <div className='feature-item'>
                <div className='feature-icon'>
                  <Video className='icon' />
                </div>
                <div className='feature-content'>
                  <h3 className='feature-title'>Video Presence</h3>
                  <p className='feature-description'>
                    Join with crystal clear video and audio
                  </p>
                </div>
              </div>

              <div className='feature-item'>
                <div className='feature-icon'>
                  <Mic className='icon' />
                </div>
                <div className='feature-content'>
                  <h3 className='feature-title'>Voice Interaction</h3>
                  <p className='feature-description'>
                    Speak naturally and be heard clearly
                  </p>
                </div>
              </div>

              <div className='feature-item'>
                <div className='feature-icon'>
                  <MessageSquare className='icon' />
                </div>
                <div className='feature-content'>
                  <h3 className='feature-title'>Realtime Chat</h3>
                  <p className='feature-description'>
                    Send text messages during the meeting
                  </p>
                </div>
              </div>
            </div>

            <Button
              className='meeting-cta'
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Meeting
            </Button>
          </div>

          <div className='meeting-visual-wrapper'>
            <div className='meeting-visual'>
              <div className='video-container'>
                <img
                  src={videoCallImage}
                  alt='Video call interface'
                  className='video-image'
                />
                <div className='video-controls'>
                  <div className='control-button control-button--red'>
                    <Mic className='icon-small' />
                  </div>
                  <div className='control-button control-button--blue'>
                    <Video className='icon-small' />
                  </div>
                  <div className='control-button control-button--gray'>
                    <MessageSquare className='icon-small' />
                  </div>
                </div>
                <div className='decorative-blur decorative-blur--bottom'></div>
                <div className='decorative-blur decorative-blur--top'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingSection;
