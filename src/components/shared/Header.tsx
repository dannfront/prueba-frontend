interface Props {
    children: React.ReactNode
}

export default function Header({ children }: Props) {
    return (
        <header className="bg-graySecondary h-[200px] content-center ">
            {children}
        </header>
    )
}
