import React from "react"

const FadeIn = ({ children, additionalClass, ...props }) => {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  const moreClasses = additionalClass ? additionalClass : ""

  React.useLayoutEffect(() => {
    let observerRefValue = null
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting)
        }
      })
    })

    if (domRef.current) {
      observer.observe(domRef.current)
      observerRefValue = domRef.current
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue)
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`fade-container ${
        isVisible ? "is-visible" : ""
      } ${moreClasses}`}
    >
      {children}
    </div>
  )
}

export default FadeIn
