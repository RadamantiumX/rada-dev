import { LangContext } from "../context/LangContext" 
import { useContext } from "react" 
export default function LangButton () {
  
  return (
    <div className="fixed flex flex-row ml-5 z-40 gap-x-10">
      <a href="#en" onClick={()=>{}}>EN</a>
      <a href="#es" onClick={()=>{}}>ES</a>
    </div>
  )
}