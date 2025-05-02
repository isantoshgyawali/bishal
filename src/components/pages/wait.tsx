import { Link } from "react-router-dom";

export default function WaitPage() {
    return (
        <div className="h-dvh w-dvw flex flex-col items-center justify-center gap-5">
            <p className="font-bold text-3xl">Currently Unavailable.</p>
            <Link to="/" className="text-xl bg-black px-5 py-2 rounded-2xl text-white font-bold">back to home</Link>
        </div>
    )
}
