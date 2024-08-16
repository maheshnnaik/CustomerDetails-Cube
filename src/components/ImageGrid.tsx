import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard"
import { getRandomImages } from "../utils";

export const ImageGrid = () => {
    const [photos, setPhotos] = useState<string[]>([]);

    const fetchPhotos = async () => {
        try {
          const response = await getRandomImages();
          const imageUrls = response.map((item: any) => `https://picsum.photos/id/${item.id}/200`);
          setPhotos(imageUrls);
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
    };
    useEffect(() => {
        fetchPhotos();
        const intervalId = setInterval(fetchPhotos, 10000); // Update photos every 10 seconds
        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className='image-container'>
            {
                photos.map((item, index) => {
                    return (
                        <ImageCard imageSrc={item} key={index} />
                    )
                })
            }
        </div>
    )
}