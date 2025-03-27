import Button from "../components/Button";
import Input from "../components/Input";
import OpcionAlimentacion from "../components/OpcionAlimentacion";
import Header from "../components/shared/Header";
import InfoUserHeader from "../components/shared/InfoUserHeader";
import SaveProgress from "../components/shared/SaveProgress";
import useNextPage from "../hooks/useNextPage";
import AppleIcon from "../icons/AppleIcon";


export default function Objetivos() {
    const navigate = useNextPage("/historial-medico")
    function handleNextPage(e?: React.FormEvent<HTMLFormElement>) {
        e?.preventDefault()
        navigate();
    }
    return (
        <>

            <Header>
                <InfoUserHeader />
            </Header>

            <main className="max-w-[90%] lg:max-w-[80%] mx-auto my-10">
                <h1 className="font-bold text-xl flex items-center gap-2"> <span> <AppleIcon /> </span> Objetivos </h1>
                <form className="mt-5 lg:mt-10" onSubmit={(e) => handleNextPage(e)}>

                    <div className="lg:flex lg:justify-between space-y-5 lg:space-y-0">

                        <Input input="text" label="¿Cuál es tu peso ideal?" placeholder="ej. 72.0 kg" htmlFor="peso" />
                        <Input input="text" label="¿Cuánto mides?" placeholder="ej. 0cm" htmlFor="estatura" />
                        <Input input="text" label="¿Cuál es tu peso ideal?" placeholder="ej. 72.0 kg" htmlFor="peso" />

                    </div>

                    <div className=" my-10">
                        <h2 className="mb-5">¿Qué buscas al mejorar tu alimentación?</h2>
                        <OpcionAlimentacion />

                    </div>

                    <div className="lg:flex lg:gap-20 space-y-5 lg:space-y-0">

                        <Input input="text" label="¿Cuál ha sido tu peso mínimo en los últimos 5 años?" placeholder="ej. 60.0 kg" htmlFor="peso-minimo" />
                        <Input input="text" label="¿Cuál ha sido tu peso mínimo en los últimos 5 años?" placeholder="ej. 80.0 kg" htmlFor="peso-maximo" />

                    </div>
                    <div>
                        <Button text="Continuar" />

                        <SaveProgress />

                    </div>

                </form>
            </main>

        </>
    )
}
