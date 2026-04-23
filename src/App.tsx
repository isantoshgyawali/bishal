import { Route, Routes, Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./components/pages/home"
import About from "./components/pages/about"
import Connect from "./components/pages/connect"
import Portfolio from "./components/pages/portfolio"
import Details from "./components/pages/details"
import Resume from "./components/pages/resume"

function LayoutWrapper() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default function App() {
    return (
        <Routes>
            <Route path="/r" element={<Resume />} />
            <Route element={<LayoutWrapper />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<Details />} />
                <Route path="/connect" element={<Connect />} />
            </Route>
        </Routes>
    )
}
