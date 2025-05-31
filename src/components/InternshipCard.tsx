import { FaHome, FaClock } from 'react-icons/fa'
import { type Internship } from '../types'
// import { formatCurrency } from '../lib/utils'

interface InternshipCardProps {
  internship: Internship
}

export function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="font-medium text-lg text-secondary">{internship.title}</h3>
          <p className="text-gray-600">{internship.company_name}</p>
        </div>
        <img
          src={`https://internshala.com/static/images/internship/company_logo/${internship.company_logo}`}
          alt={`${internship.company_name} logo`}
          className="w-12 h-12 object-contain"
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          {internship.work_from_home ? (
            <>
              <FaHome />
              <span>Work From Home</span>
            </>
          ) : (
            <>
              <span>📍</span>
              <span>{internship.location_names.join(', ')}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1">
          <FaClock />
          <span>{internship.start_date}</span>
        </div>
        <div>{internship.duration}</div>
        <div>{internship.stipend.salary}</div>
      </div>

      <div className="flex flex-wrap gap-2">
        {internship.labels_app_in_card.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-blue-50 text-primary rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {internship.ppo_salary && (
        <div className="text-sm text-green-600">
          {internship.ppo_label_value}
        </div>
      )}

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{internship.posted_by_label}</span>
      </div>
    </div>
  )
}