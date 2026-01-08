import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./components/pages/home"
import About from "./components/pages/about"
import Connect from "./components/pages/connect"
import Menu from "./components/pages/menu"
import Portfolio from "./components/pages/portfolio"
import Details from "./components/pages/details"

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<Details />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Layout>
    )
}
