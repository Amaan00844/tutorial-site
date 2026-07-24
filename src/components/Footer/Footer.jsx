'use client';
import { FaHome, FaBook, FaQuestionCircle, FaGithub } from 'react-icons/fa';
import { PiFlowerLotusDuotone } from 'react-icons/pi';
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
                           
const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-10 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white text-sm shadow-lg px-8 py-12 w-full"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Address */}
        <div>
          <div className="text-3xl font-semibold flex items-center space-x-2 mb-2">
            <PiFlowerLotusDuotone className="text-blue-400 w-8 h-8" />
            <span className="logo-shine">Skill</span>
            <span className="logo-shine text-blue-400">Bridge</span>
          </div>
          <p className="text-gray-300">
           Email: nexcorealliance@gmail.com
<br/>
           Phone: +91 95944 30295<br/>

             Address: Off BKC, Mumbai, India 400070<br/>
          </p>
        
        </div>

        {/* Column: Main Menu */}
        <div className='ml-2'>
          <h3 className="font-semibold mb-2 text-white flex items-center space-x-2">
            <FaHome className="w-5 h-5 text-white" />
            <span>Main Menu</span>
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer " >  <Link href="/">Home</Link></li>
            <li className="hover:text-white cursor-pointer"  >  <Link href="/services">Service</Link></li>
            <li className="hover:text-white cursor-pointer">  <Link href="/contact">Contact</Link></li>
            <li className="hover:text-white cursor-pointer">  <Link href="/exercises">Exercise</Link></li>
          </ul>
        </div>

        {/* Column: Academic */}
        <div>
          <h3 className="font-semibold mb-2 text-white flex items-center space-x-2">
            <FaBook className="w-5 h-5 text-white" />
            <span>Academic</span>
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer"><Link href="/tutorial">Tutorial</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href="/video">E-learning</Link></li>

          </ul>
        </div>

        {/* Column: Help */}
        <div>
          <h3 className="font-semibold mb-2 text-white flex items-center space-x-2">
            <FaQuestionCircle className="w-5 h-5 text-white" />
            <span>Tracker</span>
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer"><Link href="/activity">Progress Tracker</Link></li>

            <li className="hover:text-white cursor-pointer"><Link href="/testimonials">Testimonials</Link></li>


          </ul>
        </div>

        {/* Column: Social */}
        <div>
  <h3 className="font-semibold mb-2 text-white">FOLLOW</h3>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com/people/Nexcore-Alliance/61570113656994/" target="_blank" rel="noopener noreferrer">
      <Facebook className="w-5 h-5 text-white hover:text-[#3b5998] cursor-pointer" />
    </a>
   
    <a href="https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag" target="_blank" rel="noopener noreferrer">
      <Youtube className="w-5 h-5 text-white hover:text-[#FF0000] cursor-pointer" />
    </a>
    <a href="https://www.linkedin.com/company/105730702/admin/dashboard/" target="_blank" rel="noopener noreferrer">
      <Linkedin className="w-5 h-5 text-white hover:text-[#0077B5] cursor-pointer" />
    </a>
    <a href="https://www.instagram.com/nexcorealliance/" target="_blank" rel="noopener noreferrer">
      <Instagram className="w-5 h-5 text-white hover:text-[#E1306C] cursor-pointer" />
    </a>
  </div>
</div>

      </div>

      {/* Bottom Bar */}
<div className="border-t border-gray-700 mt-10 pt-6 text-sm flex justify-center items-center text-gray-400 text-center px-4">
  <p className="flex flex-col items-center space-y-2">
  <span>
  Built with ❤️ and passion by{" "}
  <a
    href="https://code4bharat.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 hover:underline"
  >
    <strong>Code4Bharat</strong>
  </a>
</span>
<span>
  © 2011 – 2025{" "}
  <a
    href="http://nexcorealliance.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 hover:underline"
  >
    <strong>NexCoreAlliance</strong>
  </a>
  . All rights reserved.
</span>

  </p>
</div>

      
    </footer>
  );
};

export default Footer;
 {/* <div className="space-x-6 mb-2 md:mb-0">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div> */}