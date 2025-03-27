
interface Props {
    name: string
    labe1: string
    label2: string
    id1: string
    id2: string
}

export default function RadioInputs({ name, labe1, label2, id1, id2 }: Props) {
    return (
        <div className=" flex gap-20 items-center mt-5">
            <div className="space-x-5">
                <input required type="radio" name={name} id={id1} />
                <label htmlFor={id1}>{labe1}</label>
            </div>
            <div className="space-x-5">
                <input required type="radio" name={name} id={id2} />
                <label htmlFor={id2}>{label2}</label>
            </div>
        </div>

    )
}
