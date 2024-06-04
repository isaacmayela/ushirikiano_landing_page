interface ButtonProps {
    text: string
    outline: boolean
}


export default function Button({text, outline}:ButtonProps) {
  return (
    <>
        <button
            className={`w-[10em] text-[#4A536B] py-[0.3em] rounded-[8px] font-semibold ${outline ? "border-[3px] border-solid border-[#4A536B]" : "bg-[#FF9A8D]"}`}
        >
            {text}
        </button>
    </>
  )
}
