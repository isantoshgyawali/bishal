import { useParams } from "react-router-dom"

export default function CollectionDetails() {
    const { id } = useParams()

    const images = import.meta.glob('../../assets/portfolio_img/**/', { eager: true, as: 'url' })
    const imageUrls = Object.entries(images)
        .filter(([path]) => path.includes(`/assets/portfolio_img/${id}/`))
        .map(([_, url]) => url)

    return (
        <div className="p-7 overflow-auto h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {imageUrls.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-auto object-cover"
                    />
                ))}
            </div>
        </div>
    )
}
