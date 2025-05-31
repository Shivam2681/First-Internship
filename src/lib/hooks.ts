import { useState, useEffect } from 'react'
import type { Internship } from '../types'

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Internship[]>([])
  
  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('internship-bookmarks')
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks))
      } catch (error) {
        console.error('Failed to parse bookmarks:', error)
        localStorage.removeItem('internship-bookmarks')
      }
    }
  }, [])
  
  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('internship-bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])
  
  // Add or remove a bookmark
  const toggleBookmark = (internship: Internship) => {
    setBookmarks(prevBookmarks => {
      const isBookmarked = prevBookmarks.some(item => item.id === internship.id)
      
      if (isBookmarked) {
        return prevBookmarks.filter(item => item.id !== internship.id)
      } else {
        return [...prevBookmarks, internship]
      }
    })
  }
  
  // Check if an internship is bookmarked
  const isBookmarked = (internshipId: number) => {
    return bookmarks.some(item => item.id === internshipId)
  }
  
  return { bookmarks, toggleBookmark, isBookmarked }
}