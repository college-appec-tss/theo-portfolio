import { useState } from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Heart, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { FadeIn } from '../hooks/useInView';
import { useToast } from './ToastContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !message) {
      showToast('Please fill in all fields');
      return;
    }

    setIsSending(true);

    // Create mailto link with subject and body
    const subject = encodeURIComponent(`Portfolio Contact from ${email}`);
    const body = encodeURIComponent(`\n\n---\nFrom: ${email}\n\nMessage:\n${message}`);
    
    // Open email client
    window.location.href = `mailto:theoneste7dushimirimana@gmail.com?subject=${subject}&body=${body}`;
    
    // Simulate sending and show success
    setTimeout(() => {
      setIsSending(false);
      setEmail('');
      setMessage('');
      showToast('Thanks for your message! I will get back to you soon.');
    }, 1000);
  };

  return (
    <>
      {/* Wave Divider */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="footer-wave-path"></path>
        </svg>
      </div>
      
      <footer className="py-16 px-6 footer-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Get In Touch */}
            <FadeIn direction="right">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Get In Touch</h3>
                <p className="text-[#A0A6B8] mb-6 leading-relaxed">
                  Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas. Let's build something amazing together.
                </p>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#A0A6B8] focus:outline-none focus:border-[#22C55E] transition-colors"
                    required
                  />
                  <textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#A0A6B8] focus:outline-none focus:border-[#22C55E] transition-colors resize-none"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSending}
                    className="w-full px-4 py-3 rounded-lg bg-[#22C55E] hover:bg-[#16a34a] text-white font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/theoneste"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://instagram.com/theoneste"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/theoneste"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/theoneste-dushimirimana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right Column - Contact Info */}
            <FadeIn direction="left" delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="contact-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-[#A0A6B8] text-sm">Email</span>
                      <a href="mailto:theoneste7dushimirimana@gmail.com" className="text-white hover:text-[#22C55E] transition-colors">
                        theoneste7dushimirimana@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="contact-icon">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-[#A0A6B8] text-sm">Phone</span>
                      <a href="tel:+250788123456" className="text-white hover:text-[#22C55E] transition-colors">
                        +250 788 123 456
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="contact-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[#A0A6B8] text-sm">Location</span>
                      <span className="text-white">Kigali, Rwanda</span>
                    </div>
                  </li>
                </ul>

                {/* Quick Links */}
                <div className="mt-8">
                  <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Link to="/" className="text-[#A0A6B8] hover:text-white transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight size={14} /> Home
                    </Link>
                    <Link to="/about" className="text-[#A0A6B8] hover:text-white transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight size={14} /> About
                    </Link>
                    <Link to="/skills" className="text-[#A0A6B8] hover:text-white transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight size={14} /> Skills
                    </Link>
                    <Link to="/projects" className="text-[#A0A6B8] hover:text-white transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight size={14} /> Projects
                    </Link>
                    <Link to="/contact" className="text-[#A0A6B8] hover:text-white transition-colors flex items-center gap-2 text-sm">
                      <ArrowRight size={14} /> Contact
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#A0A6B8] text-sm">
                © {currentYear} Theo Dev. All rights reserved.
              </p>
              <p className="text-[#A0A6B8] text-sm flex items-center gap-2">
                Built with <Heart size={14} className="text-[#FF4C4C] fill-[#FF4C4C]" /> in Rwanda
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-bg {
          background-color: #1B2035;
        }
        
        .footer-wave {
          height: 60px;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }
        
        .footer-wave-path {
          fill: #1B2035;
        }
        
        .social-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: #A0A6B8;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: rgba(34, 197, 94, 0.2);
          color: #22C55E;
          transform: translateY(-3px);
        }
        
        .contact-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: white;
        }
        
        /* Light mode styles */
        .light .footer-bg {
          background-color: #f8f9fa;
        }
        
        .light .footer-wave-path {
          fill: #f8f9fa;
        }
        
        .light .social-icon {
          background: rgba(15, 23, 42, 0.1);
          color: #0F172A;
        }
        
        .light .social-icon:hover {
          background: rgba(34, 197, 94, 0.2);
          color: #22C55E;
        }
        
        .light .contact-icon {
          background: rgba(15, 23, 42, 0.1);
          color: #0F172A;
        }
        
        .light .footer-bg input,
        .light .footer-bg textarea {
          background: rgba(15, 23, 42, 0.1);
          border-color: rgba(15, 23, 42, 0.2);
          color: #0F172A;
        }
        
        .light .footer-bg input::placeholder,
        .light .footer-bg textarea::placeholder {
          color: #64748b;
        }
        
        .light .footer-bg h3,
        .light .footer-bg h4,
        .light .footer-bg span {
          color: #0F172A;
        }
        
        .light .footer-bg p,
        .light .footer-bg a {
          color: #64748b;
        }
        
        .light .footer-bg a:hover {
          color: #22C55E;
        }
      `}</style>
    </>
  );
}

export default Footer;
