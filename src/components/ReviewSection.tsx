import { useState, useRef, useEffect } from 'react'
import { cn } from '../lib/utils'

interface TestimonialProps {
  name: string
  text: string
  image: string
}

function Testimonial({ name, text, image }: TestimonialProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm min-w-[280px] flex-shrink-0 w-full">
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{text}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-8 h-8 rounded-full mr-3" 
        />
        <div>
          <p className="font-medium text-sm">{name}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  // Array of testimonials
  const testimonials = [
    {
      name: "Pankaj", 
      text: "100% guarantee de rahe the, mujhe 100% doubt tha ki placement hogi bhi ya nahi. Truth is I got a placement. I didn't have any idea of how to enter corporate, what kind of job would be a good fit for me and where to start. In the placement guarantee course, I learnt so much and even before I completed it, I got an internship.", 
      image: "/pankaj.png" 
    },
    {
      name: "Preetika Anand", 
      text: "Internshala has helped me get into internships and I have got many calls from hirers through Internshala. I would be using it frequently for my job search and would be my first prioritized job search app as it gave me more opportunities to explore. would be looking forward for more opportunities.", 
      image: "/preetika.png" 
    },
    {
      name: "Rahul Sharma", 
      text: "The internship I found through Internshala was a game-changer for my career. The platform is easy to use and has a wide variety of opportunities across different fields. I highly recommend it to all students looking to gain practical experience.", 
      image: "/favicon.png" 
    },
    {
      name: "Neha Gupta", 
      text: "As a college student, Internshala has been my go-to platform for finding quality internships. The application process is straightforward, and I appreciate how they verify companies before listing opportunities. Got my first tech internship here!", 
      image: "/favicon.png" 
    },
    {
      name: "Amit Kumar", 
      text: "The training courses on Internshala helped me build skills that employers are looking for. I completed the web development course and landed an internship within a month. The certification definitely added value to my resume.", 
      image: "/favicon.png" 
    },
    {
      name: "Sneha Patel", 
      text: "I've been using Internshala for the past two years and have secured three different internships through the platform. The filter options make it easy to find opportunities that match my skills and interests. Highly recommended!", 
      image: "/favicon.png" 
    }
  ]
  
  // For desktop, we move 2 cards at a time
  const cardsPerView = 2
  const totalSlides = Math.max(0, Math.ceil((testimonials.length - cardsPerView) / cardsPerView))
  const canGoNext = currentIndex < totalSlides
  const canGoPrev = currentIndex > 0
  
  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1)
    }
  }
  
  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1)
    }
  }
  
  // Scroll to position when currentIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      // On mobile, scroll one card at a time
      if (window.innerWidth < 768) {
        const scrollAmount = container.scrollWidth / testimonials.length * currentIndex
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        })
      }
    }
  }, [currentIndex, testimonials.length])

  // Get visible testimonials for desktop view (2 at a time)
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * cardsPerView
    return testimonials.slice(startIndex, startIndex + cardsPerView)
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left section with heading and app rating */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-primary text-4xl font-bold">"</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Join the pool of 21Mn+ students and get started with your career
            </h2>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase font-medium mb-1">PLAY STORE RATINGS</p>
              <div className="flex items-center mb-2">
                <span className="text-4xl font-bold text-gray-800 dark:text-gray-100 mr-2">4.2</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={cn("w-4 h-4", i < 4 ? "text-yellow-400" : "text-yellow-400/50")} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">(39K Reviews)</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.internshala.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-full mt-4 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9,2.4c-0.1,0-0.2,0-0.3,0.1l-10,5.7C7.5,8.2,7.5,8.3,7.5,8.4v0.1l7.9,4.5c0.1,0,0.2,0,0.3-0.1l3.9-2.2c0.1-0.1,0.2-0.2,0.2-0.3V2.7C19.8,2.5,19.7,2.4,19.5,2.4C19.3,2.4,18.1,2.4,17.9,2.4z M6.7,9.3C6.6,9.3,6.5,9.4,6.5,9.5v6.8c0,0.1,0.1,0.2,0.2,0.3l3.8,2.2c0.1,0.1,0.2,0,0.3,0l4.5-2.5c0.1-0.1,0.2-0.2,0.2-0.3l-9-5.2C6.8,9.3,6.7,9.3,6.7,9.3z M19.5,11.3c-0.1,0-0.2,0-0.3,0.1l-3.8,2.2c-0.1,0.1-0.2,0.2-0.2,0.3v4.4c0,0.1,0.1,0.2,0.2,0.3l3.8,2.2c0.1,0.1,0.2,0,0.3,0l3.8-2.2c0.1-0.1,0.2-0.2,0.2-0.3v-4.4c0-0.1-0.1-0.2-0.2-0.3l-3.8-2.2C19.6,11.3,19.6,11.3,19.5,11.3z M4.5,11.3c-0.1,0-0.2,0-0.3,0.1l-3.8,2.2c-0.1,0.1-0.2,0.2-0.2,0.3v4.4c0,0.1,0.1,0.2,0.2,0.3l3.8,2.2c0.1,0.1,0.2,0,0.3,0l3.8-2.2c0.1-0.1,0.2-0.2,0.2-0.3v-4.4c0-0.1-0.1-0.2-0.2-0.3l-3.8-2.2C4.6,11.3,4.6,11.3,4.5,11.3z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Testimonials section - scrollable on mobile, 2 cards at a time on desktop */}
          <div className="lg:col-span-2 relative">
            {/* Mobile view - scrollable */}
            <div 
              ref={scrollContainerRef}
              className="flex lg:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="snap-start w-full flex-shrink-0">
                  <Testimonial 
                    name={testimonial.name} 
                    text={testimonial.text} 
                    image={testimonial.image} 
                  />
                </div>
              ))}
            </div>
            
            {/* Desktop view - show only 2 cards at a time */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-4 px-4 py-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={currentIndex * cardsPerView + index}>
                  <Testimonial 
                    name={testimonial.name} 
                    text={testimonial.text} 
                    image={testimonial.image} 
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation arrows - positioned correctly and hidden on mobile */}
            <div className="hidden lg:flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-2 pointer-events-none">
              <button 
                onClick={handlePrev} 
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-full p-2 shadow-md transition-colors pointer-events-auto -ml-3",
                  canGoPrev 
                    ? "hover:bg-gray-100 dark:hover:bg-gray-700 text-primary" 
                    : "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                )}
                disabled={!canGoPrev}
                aria-label="Previous testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext} 
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-full p-2 shadow-md transition-colors pointer-events-auto -mr-3",
                  canGoNext 
                    ? "hover:bg-gray-100 dark:hover:bg-gray-700 text-primary" 
                    : "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                )}
                disabled={!canGoNext}
                aria-label="Next testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Pagination indicators for mobile */}
            <div className="flex justify-center mt-4 lg:hidden">
              {[...Array(testimonials.length)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-2 h-2 mx-1 rounded-full",
                    currentIndex === i ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}