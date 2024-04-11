import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { Link, useNavigate } from 'react-router-dom';

// Navbar
// navbar
import { Menu, X } from "lucide-react";
// import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

// For footer
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

export default function Footer() {
  return (
    <div>
        <div className="footer ">       
            <div className="max-w-7xl mx-auto pt-50 px-6">
            <footer className="mt-20 border-t py-10 border-neutral-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div >
              <p className="text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">CodeArena</p>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@codearena.com"
                    className="text-neutral-300 hover:text-white"
                  >
                    info@codearena.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-neutral-300 hover:text-white"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <p className="text-neutral-300">
                    123 CodeArena, Nashik, Maharashtra
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          <p className="text-neutral-300 text-center mt-6">
            © {new Date().getFullYear()} CodeArena. All rights reserved.
          </p>
        </footer>
            </div>
        
        
      </div>
    </div>
  )
}
