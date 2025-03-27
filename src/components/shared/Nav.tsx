import { Link } from "react-router";
import LogoutIcon from "../../icons/LogoutIcon";
import { useState } from "react";
import Modal from "../Modal";
import ExitNoticeModal from "./ExitNoticeModal";
export default function Nav() {

    const [openModal, setOpenModal] = useState(false)
    function hanndleModal() {
        setOpenModal(false)
    }


    return (
        <>
            <nav className=" flex justify-between items-center px-5 lg:px-32 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                <Link to="/" viewTransition>

                    <img className="size-[50px]" src="https://trazza.mx/wp-content/uploads/2020/09/Logo-Grupopo-Salinas-768x768.png" alt="logo-salinas" />
                </Link>

                <p className="text-grayPrimary" >Nutricion</p>

                <button className="logout-btn flex gap-2 items-center" rel="stylesheet" onClick={() => setOpenModal(true)}>
                    <p className="text-grayPrimary" >Salir</p>
                    <LogoutIcon />
                </button>
            </nav>

            {openModal && <Modal onClick={hanndleModal} >
                <ExitNoticeModal />
            </Modal>}
        </>
    )
}
