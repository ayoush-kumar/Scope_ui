import React, { useState, useEffect } from 'react';
import d1 from './demo01.png'
import d2 from './demo02.png'
import d3 from './demo03.png'

const ImageRotator = () => {
    const imagePaths = [
        d1,
        d2,
        d3
    ];

    const [currentImage, setCurrentImage] = useState(imagePaths[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(prevImage => {
                const currentIndex = imagePaths.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % imagePaths.length;
                return imagePaths[nextIndex];
            });
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{
            filter:'blur(8px)',
            width:'3%'
        }}>
            <img src={currentImage} alt="Rotating" height="800px" width="100%"/>
        </div>
        <div>
            <img src={currentImage} alt="Rotating" height="800px" width="100%"/>
        </div>  
        </div>
        
    );
};

export default ImageRotator;
