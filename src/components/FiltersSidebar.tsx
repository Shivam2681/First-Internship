import { useState } from 'react'
import {FaFilter, FaSearch, FaTimes } from 'react-icons/fa'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Slider from '@radix-ui/react-slider'
import * as Popover from '@radix-ui/react-popover'

interface Filters {
  usePreferences: boolean
  profile?: string
  location?: string
  isRemote?: boolean
  isPartTime?: boolean
  minStipend?: number
}

interface FiltersSidebarProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
}

// Sample data for dropdowns
const PROFILES = [
  'Marketing',
  'Software Development',
  'Data Science',
  'Business Development',
  'Content Writing',
  'Design',
  'Sales',
  'Human Resources',
]

const LOCATIONS = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
]

export function FiltersSidebar({ filters, onFiltersChange }: FiltersSidebarProps) {
  const [keyword, setKeyword] = useState('')
  const [profileSearch, setProfileSearch] = useState('')
  const [locationSearch, setLocationSearch] = useState('')
  const [profilePopoverOpen, setProfilePopoverOpen] = useState(false)
  const [locationPopoverOpen, setLocationPopoverOpen] = useState(false)

  const handlePreferencesChange = (checked: boolean) => {
    if (!checked) {
      onFiltersChange({
        usePreferences: false
      })
    } else {
      onFiltersChange({
        ...filters,
        usePreferences: true
      })
    }
  }

  const handleInputChange = (field: keyof Filters, value: string | boolean | number) => {
    onFiltersChange({
      ...filters,
      [field]: value
    })
  }

  const handleClearAll = () => {
    onFiltersChange({
      usePreferences: false,
      profile: '',
      location: '',
      isRemote: false,
      isPartTime: false,
      minStipend: 0
    })
  }

  const handleKeywordSearch = () => {
    if (keyword.trim()) {
      onFiltersChange({
        ...filters,
        usePreferences: true,
        location: keyword
      })
    }
  }

  const filteredProfiles = PROFILES.filter(profile =>
    profile.toLowerCase().includes(profileSearch.toLowerCase())
  )

  const filteredLocations = LOCATIONS.filter(location =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <FaFilter className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-medium">Filters</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Checkbox.Root
              checked={filters.usePreferences}
              onCheckedChange={(checked) => handlePreferencesChange(checked === true)}
              className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            >
              <Checkbox.Indicator className="text-white">✓</Checkbox.Indicator>
            </Checkbox.Root>
            <label className="text-gray-700">
              As per my <span className="text-primary">preferences</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Profile</label>
            <Popover.Root open={profilePopoverOpen} onOpenChange={setProfilePopoverOpen}>
              <Popover.Trigger asChild>
                <button className="w-full px-3 py-2 border border-gray-300 rounded-lg text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50" disabled={!filters.usePreferences}>
                  {filters.profile || 'e.g. Marketing'}
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content sideOffset={4} align="start" className="bg-white rounded-lg shadow-lg p-2 w-[240px]">
                  <div className="p-2">
                    <input
                      type="text"
                      placeholder="Search profiles..."
                      value={profileSearch}
                      onChange={(e) => setProfileSearch(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="max-h-48 overflow-y-auto">
                    {filteredProfiles.map((profile) => (
                      <button
                        key={profile}
                        onClick={() => {
                          handleInputChange('profile', profile)
                          setProfileSearch('')
                          setProfilePopoverOpen(false)
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 rounded-lg"
                      >
                        {profile}
                      </button>
                    ))}
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Location</label>
            <Popover.Root open={locationPopoverOpen} onOpenChange={setLocationPopoverOpen}>
              <Popover.Trigger asChild>
                <button className="w-full px-3 py-2 border border-gray-300 rounded-lg text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50" disabled={!filters.usePreferences}>
                  {filters.location || 'e.g. Delhi'}
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content sideOffset={4} align="start" className="bg-white rounded-lg shadow-lg p-2 w-[240px]">
                  <div className="p-2">
                    <input
                      type="text"
                      placeholder="Search locations..."
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="max-h-48 overflow-y-auto">
                    {filteredLocations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          handleInputChange('location', location)
                          setLocationSearch('')
                          setLocationPopoverOpen(false)
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 rounded-lg"
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox.Root
                checked={filters.isRemote}
                onCheckedChange={(checked) => handleInputChange('isRemote', checked === true)}
                disabled={!filters.usePreferences}
                className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:border-primary disabled:bg-gray-200"
              >
                <Checkbox.Indicator className="text-white">✓</Checkbox.Indicator>
              </Checkbox.Root>
              <label className="text-gray-700">Work from home</label>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox.Root
                checked={filters.isPartTime}
                onCheckedChange={(checked) => handleInputChange('isPartTime', checked === true)}
                disabled={!filters.usePreferences}
                className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:border-primary disabled:bg-gray-200"
              >
                <Checkbox.Indicator className="text-white">✓</Checkbox.Indicator>
              </Checkbox.Root>
              <label className="text-gray-700">Part-time</label>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-gray-700">
              Desired minimum monthly stipend (₹)
            </label>
            <Slider.Root
              disabled={!filters.usePreferences}
              value={[filters.minStipend || 0]}
              onValueChange={([value]) => handleInputChange('minStipend', value)}
              min={0}
              max={10000}
              step={1000}
              className="relative flex items-center w-full h-5"
            >
              <Slider.Track className="relative h-2 grow rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full rounded-full bg-primary" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </Slider.Root>
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹0</span>
              <span>₹2K</span>
              <span>₹4K</span>
              <span>₹6K</span>
              <span>₹8K</span>
              <span>₹10K</span>
            </div>
          </div>

          <button
            onClick={() => {}}
            disabled={!filters.usePreferences}
            className="w-full flex items-center justify-center gap-2 text-primary disabled:text-gray-400"
          >
            View more filters
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button
            onClick={handleClearAll}
            disabled={!filters.usePreferences}
            className="w-full text-primary disabled:text-gray-400"
          >
            Clear all
          </button>
        </div>
      </div>

      {/* Keyword Search Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
        <h2 className="text-xl font-medium">Keyword Search</h2>
        <div className="relative">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. Delhi"
            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleKeywordSearch()
              }
            }}
          />
          {keyword && (
            <button
              onClick={() => setKeyword('')}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={handleKeywordSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
          >
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
