import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./components/pages/home"
import WaitPage from "./components/pages/wait"

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<WaitPage />} />
                <Route path="/work" element={<WaitPage />} />
                <Route path="/connect" element={<WaitPage />} />
            </Routes>
        </Layout>
    )
}
