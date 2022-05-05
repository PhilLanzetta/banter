import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const FadeIn = ({ children, className }) => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div data-aos="fade-up" data-aos-once={true} className={className}>
      {children}
    </div>
  )
}

export default FadeIn
