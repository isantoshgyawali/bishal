import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./components/pages/home"
import Connect from "./components/pages/connect"
import Projects from "./components/pages/projects"
import About from "./components/pages/about"

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
        </Layout>
    )
}
