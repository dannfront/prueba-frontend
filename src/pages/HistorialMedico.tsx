import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "../components/shared/Header";
import InfoUserHeader from "../components/shared/InfoUserHeader";
import DeleteIcon from "../icons/DeleteIcon";
import AddIcon from "../icons/AddIcon";
import RadioInputs from "../components/RadioInputs";
import Button from "../components/Button";
import SaveProgress from "../components/shared/SaveProgress";
import GoalsIcon from "../icons/GoalsIcon";

interface Test {
    parentesco: string,
    afectaciones: string,
    id: string
}

export default function HistorialMedico() {

    const [test, setTest] = useState<Test[]>([{ parentesco: "", id: uuidv4(), afectaciones: "" }])

    function handdleAdd() {
        setTest([...test, { id: uuidv4(), parentesco: "", afectaciones: "" }])
    }
    function handdleChangue(e: React.ChangeEvent<HTMLInputElement>, i: number, value: keyof Test) {
        const newTest = [...test];
        newTest[i][value] = e.target.value;
        setTest(newTest);
    }
    function handdleDelete(item: Test) {
        setTest((test) => test.filter(i => i.id != item.id))
    }

    function redirectToHome(e?: React.FormEvent<HTMLFormElement>) {
        e?.preventDefault()

    }


    return (
        <>
            <Header>
                <InfoUserHeader />
            </Header>

            <main className="max-w-[85%] lg:max-w-[70%] mx-auto mt-10">
                <h1 className="font-bold text-xl flex items-center gap-2 mb-5"> <span> <GoalsIcon /> </span> Objetivos </h1>
                <form className="mb-10" onSubmit={(e) => redirectToHome(e)}>
                    <div className="space-y-5 lg:space-y-0 lg:flex lg:flex-wrap lg:justify-between">

                        <fieldset className="lg:w-[250px]">
                            <legend className="text-grayPrimary">¿Padeces alguna enfermedad o afectación médica?</legend>

                            <RadioInputs name="enfermedad-afectacion" labe1="Si" label2="No" id1="si-afectacion" id2="no-afectacion" />
                        </fieldset>

                        <fieldset>
                            <legend className="text-grayPrimary">¿Tienes alguna alergia?</legend>

                            <RadioInputs name="alergia" id1="si-alergia" id2="no-alergia" labe1="Si" label2="No" />

                            <input className="border-b border-yellowPrimary focus:outline-none mt-5 w-full" placeholder="alergia" type="text" id="listaAlergias" name="listaAlergias" aria-describedby="alergiaInfo"></input>
                        </fieldset>

                        <fieldset>
                            <legend className="text-grayPrimary">¿Te han hecho alguna cirugía?</legend>
                            <RadioInputs name="cirugia" labe1="Si" label2="No" id1="si-cirugia" id2="no-cirugia" />
                            <div className="space-y-5 mt-5">

                                <input className="w-full border-b block border-yellowPrimary focus:outline-none" placeholder="nombre de la cirugia" type="text" name="cirugia" />
                                <input className="w-full border-b block border-yellowPrimary focus:outline-none" type="date" name="fecha" />
                            </div>
                        </fieldset>

                    </div>


                    <p className="text-grayPrimary mt-20">
                        ¿Algún familiar directo ha sufrido alguna afección médica como enfermedades del corazón, cáncer, diabetes u otro padecimiento crónico?
                    </p>
                    {

                        test.map((item, i) => {
                            return <div className="flex space-y-10" key={i}>
                                <div className="flex gap-2 flex-wrap mt-5">

                                    <input className=" border-b border-yellowPrimary focus:outline-none" onChange={(e) => handdleChangue(e, i, "parentesco")} type="text" placeholder="parentesco familiar" />
                                    <input className=" border-b border-yellowPrimary focus:outline-none" onChange={(e) => handdleChangue(e, i, "afectaciones")} type="text" placeholder="afectaciones medicas" />
                                </div>
                                <button onClick={() => handdleDelete(item)} className="" type="button"><DeleteIcon /></button>
                            </div>
                        })
                    }
                    <button className="flex items-center gap-2 mt-5 mb-20" type="button" onClick={handdleAdd}>

                        <span><AddIcon /></span> agregar mas

                    </button>

                    <div className="space-y-5 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-10 lg:justify-between mt-10">


                        <fieldset className="lg:w-[250px]">
                            <legend>¿Has hecho dieta para bajar de peso?</legend>
                            <RadioInputs name="peso-dieta" labe1="Si" label2="No" id1="si-dieta" id2="no-dieta" />
                        </fieldset>

                        <fieldset className="lg:w-[250px]">
                            <legend>¿Has tomado medicamentos para bajar de peso?</legend>
                            <RadioInputs name="peso-medicamento" labe1="Si" label2="No" id1="si-medicamento" id2="no-medicamento" />
                        </fieldset>

                        <fieldset className="lg:w-[250px]">
                            <legend>¿Has tomado tratamientos reductivos anteriormente?</legend>
                            <RadioInputs name="peso-medicamento-reductivo" labe1="Si" label2="No" id1="si-medicamento-reductivo" id2="no-medicamento-reductivo" />

                            <div className="space-x-10">
                                <input className="w-[100px] border-b border-yellowPrimary focus:outline-none mt-5" type="text" name="medicamento-reductivo" placeholder="ej. Cavitacion" />
                                <input className="w-[100px] border-b border-yellowPrimary focus:outline-none mt-5" type="text" name="tiempo" placeholder="ej. 6 meses" />
                            </div>
                        </fieldset>

                        <fieldset >
                            <legend>¿Utilizas algún suplemento o tomas vitaminas de manera regular?</legend>
                            <RadioInputs name="suplemento" labe1="Si" label2="No" id1="si-suplemento" id2="no-suplemento" />

                            <div className="space-x-10">
                                <input className="border-b border-yellowPrimary focus:outline-none mt-5" type="text" name="vitamina" placeholder="ej. Vitamina B, Proteina" />
                            </div>

                        </fieldset>

                        <fieldset>
                            <legend>¿Te has realizado estudios médicos recientes?</legend>
                            <RadioInputs name="estudios" labe1="Si" label2="No" id1="si-estudios" id2="no-estudios" />

                            <div className="space-x-10 ">
                                <input className="w-full border-b border-yellowPrimary focus:outline-none mt-5" type="text" name="tipo-estudio" placeholder="ej. Química Sanguinea, Hemoglobina, etc." />
                            </div>

                        </fieldset>

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
