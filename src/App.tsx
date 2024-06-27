

import { useState } from 'react'
import './App.css'
import List from './components/List/List'
import Details from './components/Details/Details'

function App() {
  const [currentDataId, setCurrentDataId] = useState<undefined | number>(undefined)

  const handleClick = (id: number | undefined) => {
    setCurrentDataId(id)
  }

  return (
    <div className="App">
      <List onClick={handleClick}/>
      <Details info={{id: currentDataId, name: ''}}/>
    </div>
  )
}

export default App
