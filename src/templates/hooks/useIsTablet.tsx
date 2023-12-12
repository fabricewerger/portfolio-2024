import { useState, useEffect } from 'react'

function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setIsTablet(true)
      } else {
        setIsTablet(false)
      }
    }

    // Initial check on mount
    handleResize()

    // Listen to window resize events
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isTablet
}

export default useIsTablet
