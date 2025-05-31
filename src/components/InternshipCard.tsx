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
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 
                  transition-all duration-300 ease-in-out 
                  hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/30 
                  hover:translate-y-[-2px] hover:scale-[1.01]">
      <div className="flex justify-between items-start">
        <div className="space-y-1.5 flex-1 min-w-0 pr-2">
          <h3 className="font-medium text-lg text-secondary dark:text-secondary-dark truncate">{internship.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 truncate">{internship.company_name}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button 
            onClick={() => onToggleBookmark(internship)}
            className="text-primary hover:text-primary-dark dark:hover:text-primary-light 
                      transition-all duration-200 p-1.5 rounded-full 
                      hover:bg-gray-100 dark:hover:bg-gray-700 
                      hover:scale-110 flex-shrink-0"
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {isBookmarked ? 
              <FaBookmark className="h-5 w-5" /> : 
              <FaRegBookmark className="h-5 w-5" />
            }
          </button>
          <img
            src={`https://internshala-uploads.internshala.com/logo%2F${internship.company_logo}`}
            alt={`${internship.company_name} logo`}
            className="w-14 h-14 object-contain rounded-md transition-transform duration-300 hover:scale-105 flex-shrink-0"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/logo.png';
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-4">
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

      <div className="flex flex-wrap gap-2 mt-4">
        {internship.labels_app_in_card.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900 text-primary dark:text-primary-light rounded-full 
                    transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-800"
          >
            {tag}
          </span>
        ))}
      </div>

      {internship.ppo_salary && (
        <div className="text-sm text-green-600 dark:text-green-400 mt-3">
          {internship.ppo_label_value}
        </div>
      )}

      <div className="flex justify-between items-center text-sm mt-3">
        <span className="text-gray-500 dark:text-gray-400">{internship.posted_by_label}</span>
      </div>
    </div>
  )
}