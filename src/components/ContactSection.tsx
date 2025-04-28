import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:Victoria.Askander@xlent.se?subject=${encodeURIComponent(
      (document.getElementById("subject") as HTMLInputElement)?.value || ""
    )}&body=${encodeURIComponent(
      (document.getElementById("message") as HTMLTextAreaElement)?.value || ""
    )}`;
  };

  return (
    <section id='contact' className='section'>
      <div className='container-tight'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl text-4xl font-bold mb-4'>
            Get in <span className='gradient-text'>Touch</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Ready to transform your workplace with our AI Kontorsrobot? Contact
            us to book a demo or learn more about how our solution can help your
            organization.
          </p>
        </div>

        <div className='grid grid-cols-1 grid-cols-2 gap-12'>
          <div className='bg-white rounded-xl shadow-sm p-6 p-8'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Name
                  </label>
                  <Input id='name' placeholder='Your name' />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Email
                  </label>
                  <Input id='email' placeholder='your.email@company.com' />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Subject
                </label>
                <Input id='subject' placeholder='How can we help?' />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  placeholder='Tell us about your needs...'
                  rows={4}
                />
              </div>

              <div>
                <Button type='submit' className='btn-gradient'>
                  Send Message
                  <Send className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </form>
          </div>

          <div>
            <div className='bg-gradient-blue rounded-xl text-white p-6 p-8 shadow-lg mb-8'>
              <h3 className='text-2xl font-semibold mb-6'>Book a Demo</h3>
              <p className='mb-6'>
                Experience the power of OfficeBuddy firsthand with a
                personalized demonstration tailored to your organization's
                needs.
              </p>
              <Button
                variant='secondary'
                className='w-full'
                onClick={() =>
                  (window.location.href =
                    "mailto:Victoria.Askander@xlent.se?subject=Demo Request - OfficeBuddy")
                }
              >
                Schedule Now
              </Button>
            </div>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0'>
                  <Mail className='h-6 w-6 text-robot-blue' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold'>Email</h4>
                  <a
                    href='mailto:Victoria.Askander@xlent.se'
                    className='text-robot-blue hover:underline'
                  >
                    Victoria.Askander@xlent.se
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0'>
                  <Phone className='h-6 w-6 text-robot-blue' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold'>Phone</h4>
                  <a
                    href='tel:+46730366779'
                    className='text-robot-blue hover:underline'
                  >
                    +46 73-036 67 79
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0'>
                  <MapPin className='h-6 w-6 text-robot-blue' />
                </div>
                <div>
                  <h4 className='text-lg font-semibold'>Location</h4>
                  <p className='text-gray-600'>
                    Sveavägen 100
                    <br />
                    113 50 Stockholm
                    <br />
                    Sweden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
