import { useState } from 'react'
import { FiltersSidebar } from './components/FiltersSidebar'
import { InternshipsList } from './components/InternshipsList'
import { Navbar } from './components/Navbar'

interface Filters {
  usePreferences: boolean
  profile?: string
  location?: string
  isRemote?: boolean
  isPartTime?: boolean
  minStipend?: number
}

function App() {
  const [filters, setFilters] = useState<Filters>({
    usePreferences: false
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="container py-8 max-w-5xl mx-auto px-4 mt-5">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="md:w-72 md:sticky md:top-44 md:h-fit">
            <FiltersSidebar filters={filters} onFiltersChange={setFilters} />
          </aside>
          <main className="flex-1 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto hide-scrollbar">
            <InternshipsList filters={filters} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App