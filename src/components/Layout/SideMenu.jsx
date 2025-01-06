
import { useState } from 'react';
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

function SideMenu(props) {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
          <div id="sideMenu" className="h-auto w-80 bg-black rounded-2xl text-white font-mono">
            <div className="flex flex-col justify-center align-middle px-2 py-10">
                <button className="text-2xl hover:text-3xl" onClick={()=>setMenuOpen(!menuOpen)} id="menu">Menu</button>
                <AnimatePresence initial={false}>
                {menuOpen&&(
                  <motion.div initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key="box">
                    <ol className="ms-5 gap-2" id="menuDropdown">
                      <li><button className="text-start hover:text-lg" onClick={()=>props.onClick("Register")}>Register Page</button></li>
                      <li><button className="text-start hover:text-lg" onClick={()=>props.onClick("CreditCardRegistration")}>Credit Card Register Page</button></li>
                    </ol>
                  </motion.div>
                )}
                </AnimatePresence>
                <button className="text-2xl hover:text-3xl" onClick={()=>props.onClick("")} id="reset">Reset</button>
            </div>
          </div>
  )
}

export default SideMenu;
