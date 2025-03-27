import { useState } from "react";

export default function OpcionAlimentacion() {

    const [objetivo, setObjetivo] = useState("")

    const opciones = [
        { id: 'perdidaPeso', value: 'Pérdida de peso', label: 'Pérdida de peso' },
        { id: 'alimentacionSaludable', value: 'Alimentación saludable', label: 'Alimentación saludable' },
        { id: 'aumentoMasaMuscular', value: 'Aumento de masa muscular', label: 'Aumento de masa muscular' },
        { id: 'controlEnfermedades', value: 'Control de enfermedades', label: 'Control de enfermedades' },
    ];


    return (

        <div className="space-y-5 lg:space-y-0 lg:flex lg:gap-10 lg:justify-between lg:flex-wrap">
            {
                opciones.map((opcion) => {
                    return <label className={`flex flex-col items-center justify-center border rounded-md p-7 cursor-pointer shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] ${objetivo === opcion.id ? "bg-yellowObjetivo border-yellowPrimary" : ""}`} htmlFor={opcion.id} key={opcion.id}>

                        <input onChange={() => setObjetivo(opcion.id)} type="radio" className="hidden" value={opcion.id} name="" id={opcion.id} checked={objetivo === opcion.id} />
                        <p>{opcion.value}</p>
                    </label>;
                })
            }
        </div>

        // <label htmlFor="">

        // <input type="text" />

        // </label>
    )
}
