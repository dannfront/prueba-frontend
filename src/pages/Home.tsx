
import Button from "../components/Button";
import Input from "../components/Input";
import CakeIcon from "../icons/CakeIcon";
import EmailIcon from "../icons/EmailIcon";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";
import UserIcon from "../icons/UserIcon";
import Header from "../components/shared/Header";
import ImageUser from "../components/shared/ImageUser";
import useNextPage from "../hooks/useNextPage";


export default function Home() {
    const navigate = useNextPage("/objetivos")
    function handleNextPage() {

        navigate();
    }

    return (
        <>
            <Header>
                <section className="w-fit flex gap-5 items-center  mx-auto">
                    <ImageUser />

                    <h2 className="text-xl text-grayPrimary lg:text-2xl">!Bienvenido <br /> <span className="font-bold text-2xl lg:text-3xl">Oscar Adan¡</span> </h2>
                </section>
            </Header>

            <div className="max-w-[90%] mx-auto">


                <form className="lg:w-[600px] mx-auto mb-10  mt-12" onSubmit={handleNextPage}>
                    <h3 className="text-grayPrimary w-fit text-left my-5 ">Para comenzar, ayudanos a verificar tus datos.</h3>
                    <div className="lg:flex lg:justify-between lg:gap-20 lg:mx-auto">

                        <div className="space-y-10 lg:w-[200px]">
                            <Input htmlFor="name" input="text" label="Nombre" placeholder="ej Adrian Ruiz" Icon={UserIcon} />
                            <Input htmlFor="email" input="email" label="Email" placeholder="ej user@example.com" Icon={EmailIcon} />
                            <Input htmlFor="email" input="text" label="Lugar de Trabajo" placeholder="ej AV el rosario" Icon={LocationIcon} />
                        </div>

                        <div className="mt-10 lg:mt-0 space-y-10 lg:w-[200px]">
                            <Input htmlFor="edad" input="number" label="Edad" placeholder="ej 38" Icon={CakeIcon} />
                            <Input htmlFor="phone" input="tel" label="Telefono celular" placeholder="ej 5546093218" Icon={PhoneIcon} />
                        </div>

                    </div>
                    <Button text="Continuar" />
                </form>

            </div>
        </>
    )
}
