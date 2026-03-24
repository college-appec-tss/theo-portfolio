import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';
import portfolioData from '../../data/portfolio.json';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  project: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = portfolioData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-text">Testimonials</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              What people say about my work
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <FadeIn direction="up" delay={200}>
            <div className="testimonial-card glass-dark p-8 md:p-12 rounded-2xl relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#22C55E]/30" />
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  key={current.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <img 
                    src={current.avatar} 
                    alt={current.name}
                    className="w-24 h-24 rounded-full border-4 border-[#22C55E]/30"
                  />
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-lg text-white/80 mb-4 italic leading-relaxed">
                        "{current.content}"
                      </p>
                      
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={i < current.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                          />
                        ))}
                      </div>
                      
                      <h4 className="text-white font-semibold">{current.name}</h4>
                      <p className="text-white/60 text-sm">{current.role}</p>
                      <p className="text-[#22C55E] text-xs mt-1">{current.project}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-white/20 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-white/20 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </FadeIn>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#22C55E] w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-card {
          min-height: 300px;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
