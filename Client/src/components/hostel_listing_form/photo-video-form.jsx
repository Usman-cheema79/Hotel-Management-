import React, { useState, useContext } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { HotelContext } from '../../context/HotelContext'; // Adjust the import path as necessary
import { storage } from '../../config/firebase'; // Adjust the import path as necessary
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const UploadPhotosVideos = () => {
    const { formData, setFormData } = useContext(HotelContext);
    const [videoLink, setVideoLink] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleFileUpload = async (file, type) => {
        setUploading(true);

        const storageRef = ref(storage, `${type}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change, progress, and completion of upload
            }, 
            (error) => {
                console.error("Error uploading file:", error);
                setUploading(false);
            }, 
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setFormData(prevFormData => ({
                    ...prevFormData,
                    photoVideo: {
                        ...prevFormData.photoVideo,
                        [type]: [...(prevFormData.photoVideo?.[type] || []), downloadURL],
                    }
                }));
                setUploading(false);
            }
        );
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFileUpload(file, 'images');
        }
    };

    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFileUpload(file, 'videos');
        }
    };

    const handleVideoLinkUpload = () => {
        if (videoLink) {
            setFormData(prevFormData => ({
                ...prevFormData,
                photoVideo: {
                    ...prevFormData.photoVideo,
                    videoLinks: [...(prevFormData.photoVideo?.videoLinks || []), videoLink],
                }
            }));
            setVideoLink('');
        }
    };

    const removeImage = (index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            photoVideo: {
                ...prevFormData.photoVideo,
                images: (prevFormData.photoVideo?.images || []).filter((_, i) => i !== index),
            }
        }));
    };

    const removeVideo = (index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            photoVideo: {
                ...prevFormData.photoVideo,
                videos: (prevFormData.photoVideo?.videos || []).filter((_, i) => i !== index),
            }
        }));
    };

    const removeVideoLink = (index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            photoVideo: {
                ...prevFormData.photoVideo,
                videoLinks: (prevFormData.photoVideo?.videoLinks || []).filter((_, i) => i !== index),
            }
        }));
    };

    return (
        <div className="bg-white rounded-lg p-6 w-full mx-auto">
            <h2 className="text-3xl font-bold mb-6">Upload Photos & Videos</h2>
            <p className="text-sm text-gray-500 mb-6">Upload up to 30 photos & videos</p>

            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
                <p className="text-sm text-gray-500 mb-2">
                    Make sure the size of the photos should not be more than 5MB (PNG, JPG). Select a photo so you can edit it, or drag it to change the order.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                    {(formData.photoVideo?.images || []).map((image, index) => (
                        <div key={index} className="relative w-24 h-24">
                            <img src={image} alt={`uploaded-${index}`} className="w-full h-full object-cover rounded-lg" />
                            <button
                                className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500"
                                onClick={() => removeImage(index)}
                            >
                                <FaTimes />
                            </button>
                        </div>
                    ))}
                    <div className="border-2 border-dashed border-red-500 rounded-lg p-4 flex justify-center items-center cursor-pointer w-24 h-24 bg-[#FFF5F5]">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                            id="imageUpload"
                        />
                        <label htmlFor="imageUpload" className="flex flex-col items-center cursor-pointer">
                            <FaPlus className="text-red-500 text-2xl" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Video Upload</label>
                <p className="text-sm text-gray-500 mb-2">
                    Make sure the size of the Videos should not be more than 150MB. (MP4)
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                    {(formData.photoVideo?.videos || []).map((video, index) => (
                        <div key={index} className="relative w-24 h-24">
                            <video src={video} className="w-full h-full object-cover rounded-lg" controls />
                            <button
                                className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500"
                                onClick={() => removeVideo(index)}
                            >
                                <FaTimes />
                            </button>
                        </div>
                    ))}
                    <div className="border-2 border-dashed border-red-500 rounded-lg p-4 flex justify-center items-center cursor-pointer w-24 h-24 bg-[#FFF5F5]">
                        <input
                            type="file"
                            accept="video/*"
                            className="hidden"
                            onChange={handleVideoUpload}
                            id="videoUpload"
                        />
                        <label htmlFor="videoUpload" className="flex flex-col items-center cursor-pointer">
                            <FaPlus className="text-red-500 text-2xl" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex items-center border border-lightGray rounded-lg mb-4">
                <input
                    type="text"
                    placeholder="Paste video link"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                    className="flex-grow p-2 border-0 rounded-md mr-4"
                />
                <button
                    onClick={handleVideoLinkUpload}
                    className="text-primary px-4 py-2 rounded-md"
                >
                    Upload
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {(formData.photoVideo?.videoLinks || []).map((link, index) => (
                    <div key={index} className="flex items-center border p-2 rounded-lg">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex-grow">
                            {link}
                        </a>
                        <button
                            className="text-red-500 ml-2"
                            onClick={() => removeVideoLink(index)}
                        >
                            <FaTimes />
                        </button>
                    </div>
                ))}
            </div>
            {uploading && <p className="text-blue-500">Uploading...</p>}
        </div>
    );
};

export default UploadPhotosVideos;
