import { LuMoveLeft } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams(); // id = 001, 002, 003, 004, 005
    const navigate = useNavigate();

    // Base CDN URL
    const BASE_CDN_URL = "https://cdn.jsdelivr.net/gh/YOUR_USERNAME/REPO_NAME@main";

    // Construct list of image URLs dynamically
    // Assuming images are named 1.webp, 2.webp, 3.webp ... adjust if needed
    const TOTAL_IMAGES = 20; // or dynamically fetch if you have a gallery.json
    const imageUrls = Array.from({ length: TOTAL_IMAGES }, (_, i) =>
        `${BASE_CDN_URL}/${id}/${i + 1}.webp`
    );

    return (
        <div className="p-7 overflow-auto h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {imageUrls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-auto object-cover rounded-md shadow-sm transition-transform duration-300 hover:scale-105"
                    />
                ))}
            </div>

            <div
                className="fixed bottom-5 right-5 flex items-center gap-2 px-5 py-2 bg-[#008080] rounded-full cursor-pointer hover:opacity-90 transition-all group shadow-lg"
                onClick={() => navigate(-1)}
            >
                <LuMoveLeft
                    size={22}
                    color="white"
                    className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2"
                />
                <p className="text-white font-semibold text-lg transition-all duration-300 group-hover:tracking-wider">
                    Back
                </p>
            </div>
        </div>
    );
}

