import ImageUser from "./ImageUser";


export default function InfoUserHeader() {
    return (
        <section className="max-x-[90%] lg:w-[600px] lg:flex lg:items-center lg:gap-5 lg:ml-52">
            <div className="w-fit mx-auto lg:mx-0">
                <ImageUser />
            </div>
            <div className="text-center lg:text-start">
                <h2 className="text-lg" >Nutricion</h2>
                <h3 className="font-bold text-2xl">Hola, Oscar Adan</h3>
                <p className="text-sm text-gray-500 lg:text-base text-balance">
                    Para brindarte una mejor atención, contesta las siguientes preguntas. La información es confidencial y esencial para crear tu perfil y que recibas la mejor atención.
                </p>
            </div>
        </section>
    )
}
