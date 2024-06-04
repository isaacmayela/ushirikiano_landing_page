import statistics from "../../assets/images/data-analysis.png"
import verctorRed from "../../assets/images/Vector32.png"
import Button from "../iu/Button"

export default function HeroSectionDescription() {
  return (
    <div className="w-full max-w-[1300px] px-[1em] py-[1.5em] grid grid-cols-12 mt-[2em]">
        <div className="col-span-5 flex flex-col gap-[2em]">
            <h1 className="font-bold text-[2.6em] w-[10em] leading-[1.4em]">Revolutionnez la gestion de vos factures</h1>
            <img src={verctorRed} alt="vector" className="w-[20em]"/>
            <p>Gérez vos factures en toute simplicité et prenez le contrôle de vos finances pour une prise de décision stratégique et optimisée avec votre application de gestion de facture.</p>
            <Button outline={false} text="Essai gratuit"/>
        </div>
        <div className="col-span-7 flex justify-between">
            <p></p>
            <img src={statistics} alt="statistics" className="w-[35em] h-[23em]"/>
        </div>
    </div>
  )
}
