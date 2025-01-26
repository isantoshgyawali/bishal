import { useRoutes } from "react-router-dom"
import { routes } from "./utils/routes"
import NavBar from "./components/ui/navbar"

export default function App() {
    const AppRoutes = () => useRoutes(routes)
    return (
        <>
            <NavBar/>
            <AppRoutes/>
        </>
    )
}
