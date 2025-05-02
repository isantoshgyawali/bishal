import NavBar from "./ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="overflow-y-hidden h-screen">
            <NavBar />
            {children}
        </main>
    )
}
