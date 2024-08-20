import { ChangeEvent } from "react";

interface LabeledInputType {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}


 export function LabeledInput({ label, placeholder, onchange, type }: LabeledInputType) {
    return <div className="py-2">
        <label className="block mb-2 text-sm font-bold text-black">{label}</label>
        <input type={type || "text"} id="first_name" onChange={onchange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}