import { useNavigate } from "react-router"

export default function useNextPage(path: string) {
    const navigate = useNavigate()

    function navigatePage() {
        navigate(path)
    }

    return (
        navigatePage
    )
}
