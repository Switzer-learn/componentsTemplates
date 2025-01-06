import * as Components from './components';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [selectedPage,setSelectedPage]=useState("");

  function pageSelect(page){
    setSelectedPage(page);
  }

  return (
      <div className="w-screen h-screen">
        <Components.Header />
        <div className="h-full flex">
          <Components.SideMenu onClick={pageSelect} />
          <div className="object-cover rounded-xl shadow-lg w-full">
            {selectedPage=="Register"&&(<Components.RegisterPage />)}
            {selectedPage=="CreditCardRegistration"&&(<Components.CreditCardRegisterPage />)}
          </div>
        </div>
      </div>
  )
}

export default App;
