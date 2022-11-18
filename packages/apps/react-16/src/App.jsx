import { useState } from 'react'
import './App.css'

import { Button } from 'antd';
import Header from "@np/ui/header";
import Footer from "@np/ui/footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Button type="primary">Primary Button</Button>
   
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </div>
  )
}

export default App
