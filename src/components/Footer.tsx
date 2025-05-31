import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Internships by places */}
          <div>
            <h3 className="font-medium mb-4">Internships by places</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Internship in India</a></li>
              <li><a href="#" className="hover:text-white">Internship in Delhi</a></li>
              <li><a href="#" className="hover:text-white">Internship in Bangalore</a></li>
              <li><a href="#" className="hover:text-white">Internship in Hyderabad</a></li>
              <li><a href="#" className="hover:text-white">Internship in Mumbai</a></li>
              <li><a href="#" className="hover:text-white">Internship in Chennai</a></li>
              <li><a href="#" className="hover:text-white">Internship in Gurgaon</a></li>
              <li><a href="#" className="hover:text-white">Internship in Kolkata</a></li>
              <li><a href="#" className="hover:text-white">Virtual internship</a></li>
              <li><a href="#" className="hover:text-white">View all internships</a></li>
            </ul>
          </div>

          {/* Internship by Stream */}
          <div>
            <h3 className="font-medium mb-4">Internship by Stream</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Computer Science Internship</a></li>
              <li><a href="#" className="hover:text-white">Electronics Internship</a></li>
              <li><a href="#" className="hover:text-white">Mechanical Internship</a></li>
              <li><a href="#" className="hover:text-white">Civil internship</a></li>
              <li><a href="#" className="hover:text-white">Marketing internship</a></li>
              <li><a href="#" className="hover:text-white">Chemical Internship</a></li>
              <li><a href="#" className="hover:text-white">Finance Internship</a></li>
              <li><a href="#" className="hover:text-white">Summer Research Fellowship</a></li>
              <li><a href="#" className="hover:text-white">Campus Ambassador Program</a></li>
              <li><a href="#" className="hover:text-white">View all internships</a></li>
            </ul>
          </div>

          {/* Jobs by Places & Stream */}
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-4">Jobs by Places</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Jobs in Delhi</a></li>
                <li><a href="#" className="hover:text-white">Jobs in Mumbai</a></li>
                <li><a href="#" className="hover:text-white">Jobs in Bangalore</a></li>
                <li><a href="#" className="hover:text-white">Jobs in Jaipur</a></li>
                <li><a href="#" className="hover:text-white">Jobs in Kolkata</a></li>
                <li><a href="#" className="hover:text-white">View all jobs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Jobs by Stream</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Marketing jobs</a></li>
                <li><a href="#" className="hover:text-white">Content writing jobs</a></li>
                <li><a href="#" className="hover:text-white">Web development jobs</a></li>
                <li><a href="#" className="hover:text-white">Sales jobs</a></li>
                <li><a href="#" className="hover:text-white">Finance jobs</a></li>
                <li><a href="#" className="hover:text-white">View all jobs</a></li>
              </ul>
            </div>
          </div>

          {/* Training & About */}
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-4">Placement Guarantee Courses</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Full Stack Development Course</a></li>
                <li><a href="#" className="hover:text-white">Data Science Course</a></li>
                <li><a href="#" className="hover:text-white">Product Management Course</a></li>
                <li><a href="#" className="hover:text-white">Digital Marketing Course</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">About us</a></li>
                <li><a href="#" className="hover:text-white">We're hiring</a></li>
                <li><a href="#" className="hover:text-white">Hire interns for your company</a></li>
                <li><a href="#" className="hover:text-white">Post a Job</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* App store buttons */}
            <div className="flex space-x-4">
              <a href="#" className="block">
                <img src="/googleplayyy.png" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="/apple.png" alt="Download on App Store" className="h-10" />
              </a>
            </div>

            {/* Social links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-gray-400">
            © Copyright 2024 Internshala<br />
            (Scholiverse Educare Private Limited)
          </div>
        </div>
      </div>
    </footer>
  )
}