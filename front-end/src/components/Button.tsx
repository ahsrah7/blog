
interface buttonInputs {
    buttonText : string;
    onClick : ()=>void
}

export const Button = ({onClick,buttonText}:buttonInputs) => {
    return <button onClick={onClick} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{buttonText}</button>
}