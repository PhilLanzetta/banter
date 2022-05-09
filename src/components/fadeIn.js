import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const FadeIn = ({ children, className }) => {
  React.useEffect(() => {
    let mounted = true
    if (mounted) {
      Aos.init({ duration: 1000 })
    } else {
      return null
    }
    return () => (mounted = false)
  }, [])

  return (
    <div data-aos="fade-up" data-aos-once={true} className={className}>
      {children}
    </div>
  )
}

export default FadeIn
