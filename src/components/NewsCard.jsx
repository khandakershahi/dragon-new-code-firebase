import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";


const NewsCard = ({ news }) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags
    } = news;

    return (
        <div className="card bg-base-100 shadow-md border border-gray-200 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{author.name}</h4>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <CiBookmark className="text-xl text-gray-500 hover:text-accent cursor-pointer" />
                    <CiShare2 className="text-xl text-gray-500 hover:text-accent cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="px-4 text-lg font-bold leading-tight text-gray-800">
                {title}
            </h2>

            {/* Thumbnail */}
            <figure className="px-4 pt-3">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-48 object-cover rounded-md"
                />
            </figure>

            {/* Details */}
            <div className="p-4 pt-2 text-sm text-gray-600">
                <p>
                    {details.length > 200 ? (
                        <>
                            {details.slice(0, 200)}...
                            <Link to={`/news-details/${id}`} className="text-warning font-semibold flex">
                                Read More
                            </Link>
                        </>
                    ) : (
                        details
                    )}
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 pb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1 text-warning">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < Math.round(rating.number) ? "text-warning" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-1 font-semibold text-gray-700">
                        {rating.number.toFixed(1)}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

