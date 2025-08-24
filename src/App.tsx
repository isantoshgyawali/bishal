import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./components/pages/home"
import WaitPage from "./components/pages/wait"
import Connect from "./components/pages/connect"
import Projects from "./components/pages/projects"

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<WaitPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
        </Layout>
    )
}
