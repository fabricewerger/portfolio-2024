import { useState, useEffect } from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        // You can adjust the threshold (1024 in this case) as needed for your design.
        setIsMobile(true)
      } else {
        setIsMobile(false)
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

  return isMobile
}

export default useIsMobile
