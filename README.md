# First-Internship
A React application that replicates the Internshala internship listing platform with enhanced features and functionality.

## Features
### Core Functionality
- Browse and search for internships
- Filter internships by various criteria (profile, location, remote/part-time options, stipend)
- View detailed internship information including company, location, duration, and stipend
### Enhanced Features 1. Bookmark System
- Save Internships : Bookmark interesting internships for later viewing
- Persistent Storage : Bookmarks are saved to localStorage and persist between sessions
- Toggle View : Switch between viewing all internships or only bookmarked ones
- Visual Indicators : Clear bookmark/unbookmark icons show saved status 2. Dark Mode
- System Preference Detection : Automatically detects and applies user's system preference for light/dark mode
- Manual Toggle : Users can override system preference with a toggle in the navbar
- Persistent Preference : Selected theme is saved to localStorage and applied on return visits
- Comprehensive Styling : All UI components are fully styled for both light and dark modes 3. Advanced Sorting Options
- Multiple Sort Criteria : Sort internships by:
  - Newest First (default)
  - Duration (shortest to longest)
  - Stipend (highest to lowest)
- Real-time Sorting : Sorting is applied instantly without page reload 4. Infinite Scroll Pagination
- Smooth Loading : Internships load progressively as the user scrolls down the page
- Performance Optimization : Only a limited number of internships are rendered at once
- Intersection Observer : Uses modern browser APIs to detect when user reaches the end of the list
- Loading Indicators : Shows loading state while fetching more internships 5. Loading Skeletons
- Enhanced UX : Displays placeholder UI while content is loading
- Reduced Perceived Wait Time : Provides visual feedback during data fetching
- Responsive Design : Skeletons match the layout of actual content
- Dark Mode Compatible : Skeletons adapt to the current theme 6. Responsive UI
- Mobile-First Design : Fully functional on all device sizes
- Adaptive Layout : UI components reorganize based on screen size
- Touch-Friendly : All interactive elements are properly sized for touch input
## Technology Stack
- Frontend : React with TypeScript
- Build Tool : Vite
- Styling : Tailwind CSS
- UI Components : Radix UI primitives
- Icons : React Icons
## Getting Started
### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
### Installation
```
# Clone the repository
git clone <repository-url>
cd First-Internship

# Install dependencies
npm install

# Start the development server
npm run dev
```
The application will be available at http://localhost:5173

## Project Structure
```
src/
├── assets/           # Static assets
├── components/       # UI components
│   ├── FiltersSidebar.tsx    # 
Filtering options
│   ├── InternshipCard.tsx    # 
Individual internship display
│   ├── InternshipSkeleton.tsx # Loading 
placeholder
│   ├── InternshipsList.tsx   # Main 
listing with sorting and pagination
│   └── Navbar.tsx            # 
Navigation with dark mode toggle
├── lib/              # Utilities and 
hooks
│   ├── DarkModeContext.tsx   # Dark 
mode state management
│   ├── api.ts                # API 
interaction
│   ├── hooks.ts              # Custom 
hooks (bookmarks)
│   └── utils.ts              # Helper 
functions
├── App.tsx          # Main application 
component
├── index.css        # Global styles
├── main.tsx         # Application entry 
point
└── types.ts         # TypeScript type 
definitions
```
## Future Enhancements
- User authentication system
- Application tracking
- Email notifications
- Advanced filtering options
- Company profiles