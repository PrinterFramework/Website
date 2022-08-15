import { useState, useEffect } from 'react'

export interface SplashI {}

export function Splash({}: SplashI) {
  const [activated, setActivated] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActivated(true)
    }, 2500)

    return () => clearTimeout(timeout)
  }, [setActivated])

  useEffect(() => {
    const timeout = activated
      ? setTimeout(() => {
          setLoaded(true)
        }, 2500)
      : null

    return () => clearTimeout(timeout)
  }, [activated, setLoaded])

  return (
    <div
      id="interactive-splash"
      className={`${activated ? 'activated' : ''} ${loaded ? 'loaded' : ''}`}
    >
      <img src="/assets/image/printer.png" alt="Printer Logo" />
      <h2>Printer</h2>
    </div>
  )
}

export default Splash
