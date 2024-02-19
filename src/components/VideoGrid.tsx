import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "India is unbelievable! | Hear me out!!",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "How to start a career in UFC ??",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "DAMN! Expensive stuff...",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "India is unbelievable! | Hear me out!!",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "How to start a career in UFC ??",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "DAMN! Expensive stuff...",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "India is unbelievable! | Hear me out!!",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "How to start a career in UFC ??",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "DAMN! Expensive stuff...",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "India is unbelievable! | Hear me out!!",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "How to start a career in UFC ??",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
},
{
    title: "DAMN! Expensive stuff...",
    image: "./photo.jpg",
    thumbImage: "./thumb.jpg",
    author: "Sameer Mishra",
    views: "23M",
    timestamp: "2 days ago"
}]


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.author}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}