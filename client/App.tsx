import React, { useEffect } from "react"

const App: React.FC = () => {
  useEffect(() => {
    fetch("/ping")
      .then((res) => res.json())
      .then(console.log)
  }, [])

  return <div>TODO</div>
}

export default App
