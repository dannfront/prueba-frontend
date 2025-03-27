import { Link } from "react-router";
import Button from "./Button";
import { useEffect } from "react";

interface Props {
    children: React.ReactNode
    onClick: () => void
}

export default function Modal({ onClick, children }: Props) {


    useEffect(() => {
        console.log(window.location.pathname === "/");

        if (window.location.pathname === "/") {
            return onClick()
        }

    }, [onClick])

    return (
        <section
            className="fixed top-0 left-0 h-screen w-full bg-gray-600 bg-opacity-50 flex items-center justify-center"
        >
            <div className="w-[500px] bg-white p-5 rounded shadow-lg">
                {children}
                <div className="flex flex-col gap-4">
                    <Button
                        text="Continuar"
                        type="button"
                        onClick={onClick}
                    />
                    <Link
                        to="/"
                        viewTransition
                        className="block text-[#005FC5] text-center underline"
                        onClick={onClick}
                    >
                        Salir
                    </Link>
                </div>
            </div>
        </section>
    );
}