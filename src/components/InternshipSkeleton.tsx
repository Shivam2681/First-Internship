
export function InternshipSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md space-y-4 border border-gray-100 dark:border-gray-700 animate-pulse">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  )
}