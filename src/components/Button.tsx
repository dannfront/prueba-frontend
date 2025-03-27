interface Props {
    text: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
}

export default function Button({ text, type = "submit", onClick }: Props) {
    return (
        <button
            className="block bg-yellowPrimary px-7 py-3 rounded-3xl mx-auto mt-10"
            type={type}
            onClick={() => onClick?.()}
        >
            {text}
        </button>
    );
}