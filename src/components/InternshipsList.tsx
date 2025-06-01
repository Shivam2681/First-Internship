import { useState, useEffect, useRef, useCallback } from 'react'
import { type Internship } from '../types'
import { InternshipCard } from './InternshipCard'
import { fetchInternships } from '../lib/api'
import { useBookmarks } from '../lib/hooks'
import { InternshipSkeleton } from './InternshipSkeleton'
import { InternshipModal } from './InternshipModal'

// Define sorting options
type SortOption = 'newest' | 'duration' | 'stipend'

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
  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks()
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null)
  
  // Add missing toggleBookmarksView function
  const toggleBookmarksView = () => {
    setShowBookmarksOnly(prev => !prev)
  }
  
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

  // Helper function to apply filters
  function applyFilters(internship: Internship) {
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
  }

  // Add missing filteredInternships variable
  const filteredInternships = internships.filter(applyFilters)
  
  // Sorting function
  const sortInternships = (internships: Internship[]) => {
    return [...internships].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
          
        case 'duration':
          const getDurationMonths = (duration: string) => {
            const match = duration.match(/^(\d+)\s*Months?$/i)
            return match ? parseInt(match[1], 10) : 0
          }
          return getDurationMonths(a.duration) - getDurationMonths(b.duration)
          
        case 'stipend':
          return (b.stipend.salaryValue1 || 0) - (a.stipend.salaryValue1 || 0)
          
        default:
          return 0
      }
    })
  }
  
  // Apply sorting to the filtered internships
  const sortedInternships = sortInternships(
    showBookmarksOnly ? bookmarks.filter(applyFilters) : filteredInternships
  )
  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  
  // For infinite scroll
  const observer = useRef<IntersectionObserver | null>(null)
  const lastInternshipRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setCurrentPage(prevPage => prevPage + 1)
        }
      })
      
      if (node) observer.current.observe(node)
    },
    [loading]
  )
  
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const paginatedInternships = sortedInternships.slice(0, indexOfLastItem)
  
  // Check if there are more items to load
  const hasMore = paginatedInternships.length < sortedInternships.length

  // Handle internship click to show modal
  const handleInternshipClick = (internship: Internship) => {
    setSelectedInternship(internship)
  }

  // Close modal
  const closeModal = () => {
    setSelectedInternship(null)
  }
  
  if (loading && internships.length === 0) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <InternshipSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (error && internships.length === 0) {
    return <div className="text-center py-8 text-red-600">{error}</div>
  }
  
  return (
    <div className="space-y-6 px-2">
      <div className='flex flex-col justify-center items-center'>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full mb-4">
          <h2 className="text-xl text-center font-medium text-secondary dark:text-secondary-dark">
            {sortedInternships.length} Total Internships
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Latest Summer Internships in India</p>
          </h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleBookmarksView}
              className={`px-4 py-2 rounded-lg ${showBookmarksOnly ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'}`}
            >
              {showBookmarksOnly ? 'Show All' : 'Bookmarks'}
            </button>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="newest">Newest First</option>
              <option value="duration">Duration</option>
              <option value="stipend">Stipend</option>
            </select>
          </div>
        </div>
        
      </div>

      <div className="space-y-4">
        {paginatedInternships.map((internship, index) => {
          // Add ref to last item for infinite scroll
          if (paginatedInternships.length === index + 1) {
            return (
              <div key={internship.id} ref={lastInternshipRef}>
                <InternshipCard 
                  internship={internship} 
                  isBookmarked={isBookmarked(internship.id)}
                  onToggleBookmark={toggleBookmark}
                  onClick={handleInternshipClick}
                />
              </div>
            )
          } else {
            return (
              <InternshipCard 
                key={internship.id} 
                internship={internship} 
                isBookmarked={isBookmarked(internship.id)}
                onToggleBookmark={toggleBookmark}
                onClick={handleInternshipClick}
              />
            )
          }
        })}
        
        {loading && internships.length > 0 && (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <InternshipSkeleton key={index} />
            ))}
          </div>
        )}
        
        {!hasMore && sortedInternships.length > 0 && (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400">No more internships to load</div>
        )}
      </div>


      {/* Render modal when an internship is selected */}
      {selectedInternship && (
        <InternshipModal 
          internship={selectedInternship} 
          onClose={closeModal} 
        />
      )}
    </div>
  )
}