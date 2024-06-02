import Button from "../iu/Button"
import { ChevronDown, Globe, SunDim } from "lucide-react"
import { NavLink } from "react-router-dom"


export default function Navigations() {
  return (
    <div className="w-full max-w-[1250px] flex items-center justify-between px-[1em] py-[1.5em]">
      <div>
        <h1 className="font-bold text-[1.2em]">LOGO</h1>
      </div>
      <div>
        <ul className="flex itmes-center gap-[1.5em]">
            <NavLink 
                to={""}
                className={"text-[1.1em] font-semibold flex items-center hover:text-[#4A536B] hover:underline"}
            >
                Produit
                <ChevronDown size={20} strokeWidth={3}/>
            </NavLink>
            <NavLink
                to={""}
                className={"text-[1.1em] font-semibold hover:text-[#4A536B] hover:underline"}
            >Solutions</NavLink>
            <NavLink 
                to={""}
                className={"text-[1.1em] font-semibold hover:text-[#4A536B] hover:underline"}
            >Entreprise</NavLink>
            <NavLink 
                to={""}
                className={"text-[1.1em] font-semibold hover:text-[#4A536B] hover:underline"}
            >Tarifs</NavLink>
        </ul>
      </div>
      <div className="flex itmes-center gap-[1em]">
        <button>
            <Globe />
        </button>
        <button>
            <SunDim size={32}/>
        </button>
      </div>
      <div className="flex itmes-center gap-[1em]">
        <Button text="Connexion" outline= {true}/>
        <Button text="Commencer" outline= {false}/>
      </div>
    </div>
  )
}
