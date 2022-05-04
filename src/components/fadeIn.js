import React from "react"

const FadeIn = ({ children, additionalClass }) => {
  const domRef = React.useRef()

  const [isVisible, setVisible] = React.useState(false)

  React.useEffect(() => {
    let observerRefValue
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true)
        console.log(domRef.current)
        // No need to keep observing:
        observer.unobserve(domRef.current)
      }
    })

    if (domRef.current) {
      observer.observe(domRef.current)
      observerRefValue = domRef.current
    }

    return () => {
       observer.unobserve(observerRefValue)
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`fade-container ${additionalClass} ${
        isVisible ? " is-visible" : ""
      }`}
    >
      {children}
    </div>
  )
}

export default FadeIn
