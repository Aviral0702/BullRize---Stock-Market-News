import { useState } from 'react'

import NavBar from './assets/components/NavBar'
import { SignUp } from './assets/components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <NavBar/>
      <SignUp/>
    </div>
  )
}

export default App
