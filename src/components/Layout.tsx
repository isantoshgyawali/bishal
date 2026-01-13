import NavBar from "./ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <NavBar />
            {children}
        </main>
    )
}
