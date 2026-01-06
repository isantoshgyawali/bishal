import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./components/pages/home"
import About from "./components/pages/about"
import Connect from "./components/pages/connect"
import Collections from "./components/pages/collections"
import CollectionDetails from "./components/pages/collectionDetails"

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/collection" element={<Collections />} />
                <Route path="/collection/:id" element={<CollectionDetails />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
        </Layout>
    )
}
