
interface Props {
    label: string;
    placeholder: string;
    input: string;
    htmlFor: string;
    Icon?: React.ComponentType

}


export default function Input({ placeholder, input, htmlFor, label, Icon }: Props) {
    return (
        <div>
            <div className="flex gap-1 items-center">
                {Icon && <Icon />}
                <label className="text-grayLabel text-sm" htmlFor={htmlFor}>{label}</label>
            </div>
            <input className="text-grayPrimary border-b border-yellowPrimary w-full focus:outline-none mt-2" type={input} required id={htmlFor} placeholder={placeholder} />
        </div>
    )
}
