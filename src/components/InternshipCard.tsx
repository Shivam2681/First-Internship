// Update the imports at the top
import { FaHome, FaClock, FaBookmark, FaRegBookmark, FaMapMarkerAlt, FaRupeeSign, FaCalendarAlt } from 'react-icons/fa'
import { type Internship } from '../types'
import { formatCurrency } from '../lib/utils'

interface InternshipCardProps {
  internship: Internship
  isBookmarked: boolean
  onToggleBookmark: (internship: Internship) => void
}

export function InternshipCard({ 
  internship, 
  isBookmarked, 
  onToggleBookmark 
}: InternshipCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-start">
        <div className="space-y-1.5">
          <h3 className="font-medium text-lg text-secondary dark:text-secondary-dark">{internship.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{internship.company_name}</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onToggleBookmark(internship)}
            className="text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {isBookmarked ? 
              <FaBookmark className="h-5 w-5" /> : 
              <FaRegBookmark className="h-5 w-5" />
            }
          </button>
          <img
            src={`https://internshala.com/static/images/internship/company_logo/${internship.company_logo}`}
            alt={`${internship.company_name} logo`}
            className="w-12 h-12 object-contain rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1.5">
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
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt className="text-primary" />
          <span>{internship.start_date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FaClock className="text-primary" />
          <span>{internship.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FaRupeeSign className="text-primary" />
          <span>{internship.stipend.salaryValue1 ? formatCurrency(internship.stipend.salaryValue1) : internship.stipend.salary}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {internship.labels_app_in_card.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900 text-primary dark:text-primary-light rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {internship.ppo_salary && (
        <div className="text-sm text-green-600 dark:text-green-400">
          {internship.ppo_label_value}
        </div>
      )}

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500 dark:text-gray-400">{internship.posted_by_label}</span>
      </div>
    </div>
  )
}