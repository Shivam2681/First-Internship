import { useState, useEffect } from 'react'
import { type Internship } from '../types'
import { InternshipCard } from './InternshipCard'
import { fetchInternships } from '../lib/api'

interface InternshipsListProps {
  filters: {
    usePreferences: boolean
    profile?: string
    location?: string
    isRemote?: boolean
    isPartTime?: boolean
    minStipend?: number
  }
}

export function InternshipsList({ filters }: InternshipsListProps) {
  const [internships, setInternships] = useState<Internship[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadInternships() {
      try {
        setLoading(true)
        const data = await fetchInternships()
        setInternships(data)
        setError(null)
      } catch (err) {
        setError('Failed to load internships')
        setInternships([])
      } finally {
        setLoading(false)
      }
    }

    loadInternships()
  }, [])

  const filteredInternships = internships.filter((internship) => {
    if (!filters.usePreferences) return true

    const matchesProfile = !filters.profile || 
      internship.profile_name.toLowerCase().includes(filters.profile.toLowerCase()) ||
      internship.title.toLowerCase().includes(filters.profile.toLowerCase())

    const matchesLocation = !filters.location || 
      internship.location_names.some(loc => 
        loc.toLowerCase().includes((filters.location || '').toLowerCase())
      )

    const matchesRemote = !filters.isRemote || internship.work_from_home === true

    const matchesPartTime = !filters.isPartTime || internship.part_time === true

    const matchesStipend = !filters.minStipend || 
      (internship.stipend.salaryValue1 !== null && 
       internship.stipend.salaryValue1 >= filters.minStipend)

    return (
      matchesProfile && 
      matchesLocation && 
      matchesRemote && 
      matchesPartTime && 
      matchesStipend
    )
  })

  if (loading) {
    return <div className="text-center py-8">Loading internships...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>
  }

  return (
    <div className="space-y-6">
      <div className='flex flex-col justify-center items-center'>
        <h2 className="text-xl font-medium text-secondary">
          {filteredInternships.length} Total Internships
        </h2>
        <p className="text-gray-600">Latest Internships</p>
      </div>

      <div className="space-y-4">
        {filteredInternships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
    </div>
  )
}