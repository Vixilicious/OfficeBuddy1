import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import "./NavBar.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className='navbar-container'>
        <div className='navbar-content'>
          <div className='navbar-brand'>
            <a href='#' className='navbar-logo'>
              Office<span>Buddy</span>
            </a>
          </div>

          <nav className='navbar-nav'>
            <div className='navbar-nav-items'>
              <a href='#features' className='nav-link'>
                Features
              </a>
              <a href='#access' className='nav-link'>
                Access Levels
              </a>
              <a href='#meetings' className='nav-link'>
                Meetings
              </a>
              <a href='#contact' className='nav-link'>
                Contact
              </a>
              <Button className='btn-gradient'>Book Demo</Button>
            </div>
          </nav>

          <button
            className='mobile-menu-button'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className='mobile-menu'>
            <nav className='mobile-nav'>
              <a
                href='#features'
                className='nav-link'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href='#access'
                className='nav-link'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Access Levels
              </a>
              <a
                href='#meetings'
                className='nav-link'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </a>
              <a
                href='#contact'
                className='nav-link'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className='btn-gradient'>Book Demo</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
