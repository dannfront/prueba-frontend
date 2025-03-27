import { useState } from "react";
import SaveIcon from "../../icons/SaveIcon";
import Modal from "../Modal";
import CheckedIcon from "../../icons/CheckedIcon";


export default function SaveProgress() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <section>
                <h3>
                    Deseo continuar después
                </h3>
                <div className="flex items-center">

                    <span><SaveIcon /></span>
                    <button className="text-[#005FC5] underline flex items-center mt-3" type="button" onClick={() => setOpenModal(true)}>
                        Guardar mi avance
                    </button>
                </div>
            </section>

            {openModal && <Modal onClick={() => setOpenModal(false)}>
                <div className="mx-auto w-fit">
                    <CheckedIcon />
                </div>
                <h2 className="text-center text-[#3E3E3E] font-bold text-xl">
                    Tu avance ha sido guardado correctamente
                </h2>
                <p className="text-center text-[#3E3E3E]">Puedes continuar cuando estés listo.</p>
            </Modal>}
        </>
    )
}
