import { FaBell, FaEnvelope, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
    setIsAnimating(true)
  }

  const closeMobileMenu = () => {
    setIsAnimating(false)
    // Wait for animation to complete before hiding the menu
    setTimeout(() => {
      setIsMobileMenuOpen(false)
    }, 300) // Match this with the CSS transition duration
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden text-secondary hover:text-primary" 
              onClick={() => isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()}
            >
              {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
            <a href="/" className="text-2xl font-bold text-primary">
              INTERNSHALA
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              {/* Internships Dropdown */}
              <div className="relative group">
                <button className="flex border-b-2 border-blue-400 items-center text-secondary hover:text-primary py-2">
                  Internships <FaChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {/* Internships Dropdown Menu */}
                <div className="absolute left-0 top-full mt-3 w-[500px] bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="flex">
                    {/* Left Column */}
                    <div className="w-1/2 p-6 border-r">
                      <div className="mb-6">
                        <h3 className="text-blue-500 bg-blue-50 px-3 py-2 rounded font-medium mb-4">Top Locations</h3>
                        <div className="space-y-2">
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Work from Home</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Bangalore</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Delhi</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Hyderabad</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Mumbai</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Chennai</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Pune</a>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-gray-800 font-medium mb-4">Profile</h3>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-gray-800 font-medium mb-4">Top Categories</h3>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-gray-800 font-medium mb-4">Explore More Internships</h3>
                      </div>
                      
                      <div>
                        <h3 className="text-gray-800 font-medium mb-4">
                          Placement Guarantee Courses
                          <span className="ml-2 px-2 py-1 text-xs bg-orange-500 text-white rounded">NEW</span>
                        </h3>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="w-1/2 p-6">
                      <div className="space-y-2">
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Kolkata</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Internship in Jaipur</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">International Internship</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1 font-medium">View all internships</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Courses Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-secondary hover:text-primary py-2">
                  Courses
                  <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded">
                    OFFER
                  </span>
                  <FaChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {/* Courses Dropdown Menu */}
                <div className="absolute mt-3 -ml-32 w-[400px] bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="flex">
                    {/* Left Column - Certification Courses */}
                    <div className="w-1/2 p-6 border-r">
                      <h3 className="text-gray-800 font-medium mb-4">Certification Courses</h3>
                      <div className="space-y-3">
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Web Development</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Programming with Python</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Machine Learning</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Core Java</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Cloud computing with AWS</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Digital Marketing</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Advanced Excel</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">AutoCAD</a>
                        <a href="#" className="block text-blue-500 hover:text-blue-600 py-1 font-medium">View 70+ more courses</a>
                      </div>
                    </div>
                    
                    {/* Right Column - Placement Guarantee Courses */}
                    <div className="w-1/2 p-6">
                      <h3 className="text-gray-800 font-medium mb-4">Placement Guarantee Courses</h3>
                      <div className="space-y-3">
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Full Stack Development Course</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Data Science Course</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Product Management Course</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Digital Marketing Course</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Jobs Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-secondary hover:text-primary py-2">
                  Jobs <FaChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {/* Jobs Dropdown Menu */}
                <div className="absolute -ml-48 mt-3 w-[400px] bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="flex">
                    {/* Left Column */}
                    <div className="w-1/2 p-6 border-r">
                      <div className="mb-6">
                        <h3 className="text-blue-500 bg-blue-50 px-3 py-2 rounded font-medium mb-4">Top Locations</h3>
                        <div className="space-y-2">
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Work from home</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Delhi</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Mumbai</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Bangalore</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Hyderabad</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Kolkata</a>
                          <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Chennai</a>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-gray-800 font-medium mb-4">Top Categories</h3>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-gray-800 font-medium mb-4">Explore More Jobs</h3>
                      </div>
                      
                      <div>
                        <h3 className="text-gray-800 font-medium mb-4">
                          Placement Guarantee Courses
                          <span className="ml-2 px-2 py-1 text-xs bg-orange-500 text-white rounded">NEW</span>
                        </h3>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="w-1/2 p-6">
                      <div className="space-y-2">
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Pune</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1">Jobs in Jaipur</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 py-1 font-medium">View all jobs</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="text-secondary hover:text-primary">
              <FaEnvelope className="h-5 w-5" />
            </button>
            
            <div className="relative">
              <button className="text-secondary hover:text-primary">
                <FaBell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
            
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90">
                  S
                </button>
              </DropdownMenu.Trigger>
              
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="bg-white border mt-4 shadow-lg p-2 min-w-[200px] z-50">
                  <DropdownMenu.Item className="px-4 py-2 text-sm text-secondary hover:bg-gray-100 rounded cursor-pointer">
                    My Profile
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="px-4 py-2 text-sm text-secondary hover:bg-gray-100 rounded cursor-pointer">
                    My Applications
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
                  <DropdownMenu.Item className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded cursor-pointer">
                    Logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        // Main container for the mobile menu and overlay
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Sidebar Content - positioned with a higher z-index */}
          <div 
            className={`fixed inset-y-0 left-0 w-4/5 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              isAnimating ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full overflow-y-auto pt-4 px-6">
              {/* User Profile */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
                  S
                </div>
                <div>
                  <div className="font-medium">Shivam Raj Shekhar</div>
                  <div className="text-sm text-gray-500">shekharshivam51@gmail.com</div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="mr-3">4</span>
                <a href="#" className="text-blue-500">Know More</a>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 border-t border-b py-4 mb-4">
                <a href="#" className="py-2">Internships</a>
                <a href="#" className="py-2">Jobs</a>
                <div className="flex justify-between items-center py-2">
                  <span>Placement Guarantee Courses</span>
                  <span className="bg-orange-500 text-white px-3 py-1 text-sm rounded">GET HIRED</span>
                </div>
                <a href="#" className="py-2">Certification Courses</a>
              </nav>
              
              {/* User Actions */}
              <div className="flex flex-col space-y-4">
                <a href="#" className="py-2">My Applications</a>
                <a href="#" className="py-2">My Bookmarks</a>
                <a href="#" className="py-2">Edit Resume</a>
                <a href="#" className="py-2">Edit Preferences</a>
                <div className="flex items-center justify-between py-2">
                  <span>More</span>
                  <FaChevronDown className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
          {/* Overlay to close menu - positioned behind the sidebar but above other page content */}
          <div 
            className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
              isAnimating ? 'bg-opacity-25' : 'bg-opacity-0'
            }`}
            onClick={closeMobileMenu}
          ></div>
        </div>
      )}
    </nav>
  )
}