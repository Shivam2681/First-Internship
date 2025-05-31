import { FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaRupeeSign, FaHome } from 'react-icons/fa'
import { type Internship } from '../types'
import { formatCurrency } from '../lib/utils'

interface InternshipModalProps {
  internship: Internship
  onClose: () => void
}

export function InternshipModal({ internship, onClose }: InternshipModalProps) {
  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={handleModalClick}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-start p-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-medium text-secondary dark:text-secondary-dark">{internship.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{internship.company_name}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Key facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              {internship.work_from_home ? (
                <>
                  <FaHome className="text-primary" />
                  <span>Work From Home</span>
                </>
              ) : (
                <>
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{internship.location_names.join(', ')}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />
              <span>Start Date: {internship.start_date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-primary" />
              <span>Duration: {internship.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRupeeSign className="text-primary" />
              <span>Stipend: {internship.stipend.salaryValue1 ? formatCurrency(internship.stipend.salaryValue1) : internship.stipend.salary}</span>
            </div>
          </div>

          {/* About the internship */}
          <div>
            <h3 className="text-lg font-medium mb-2">About the internship</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Selected intern's day-to-day responsibilities include:<br />
              1. Working on {internship.title} projects<br />
              2. Collaborating with the team to develop solutions<br />
              3. Learning industry best practices<br />
              4. Participating in code reviews and team meetings
            </p>
          </div>

          {/* Skills required */}
          <div>
            <h3 className="text-lg font-medium mb-2">Skills required</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              {internship.labels_app_in_card.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
              <li>Problem-solving skills</li>
              <li>Good communication</li>
            </ul>
          </div>

          {/* Who can apply */}
          <div>
            <h3 className="text-lg font-medium mb-2">Who can apply</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Only those candidates can apply who:</li>
              <li>are available for full time (in-office) internship</li>
              <li>can start the internship between {internship.start_date} and 2 weeks from this date</li>
              <li>are available for duration of {internship.duration}</li>
              <li>have relevant skills and interests</li>
            </ul>
          </div>

          {/* Perks */}
          <div>
            <h3 className="text-lg font-medium mb-2">Perks</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Certificate of Completion</li>
              <li>Letter of Recommendation</li>
              <li>Flexible work hours</li>
              <li>5 days a week</li>
              {internship.ppo_salary && (
                <li>{internship.ppo_label_value}</li>
              )}
            </ul>
          </div>
        </div>

        {/* Footer with apply button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Apply now
          </button>
        </div>
      </div>
    </div>
  )
}