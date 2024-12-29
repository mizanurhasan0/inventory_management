'use client'
import React, { useState } from 'react';
import defaultImg from '@/assets/imgs/Delivery2.jpg';
import Image from 'next/image';

export default function Gallary() {
    const [selectedImage, setSelectedImage] = useState([]);
    return (
        <div className="flex flex-col gap-4">
            {/* Main Image Viewer */}
            <div className="relative aspect-video">
                <Image
                    src={defaultImg}
                    alt="Selected Product Image"
                    fill
                    className="object-contain rounded-md"
                />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 w-full overflow-y-hidden overflow-x-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((image, index) => (
                    <div
                        key={index}
                        className={`w-20 h-20 shrink-0 cursor-pointer border rounded-md ${selectedImage === defaultImg ? "border-green-500" : "border-gray-300"
                            }`}
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={defaultImg}
                            alt={`Thumbnail ${9 + 1}`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
