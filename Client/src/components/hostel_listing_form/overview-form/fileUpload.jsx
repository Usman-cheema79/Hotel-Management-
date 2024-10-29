import React, { useState, useContext } from 'react';
import { FaUpload, FaTimes } from 'react-icons/fa';
import { HotelContext } from '../../../context/HotelContext';

const FileUpload = () => {
    const { formData, setFormData } = useContext(HotelContext);
    const [file, setFile] = useState(formData?.overview?.additionalDetails?.tradeLicenseFile || null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            setFile(fileUrl);

            // Update context
            setFormData(prevFormData => ({
                ...prevFormData,
                overview: {
                    ...prevFormData.overview,
                    additionalDetails: {
                        ...prevFormData.overview.additionalDetails,
                        tradeLicenseFile: fileUrl // Save the file URL in context
                    }
                }
            }));
        }
    };

    const handleRemoveFile = () => {
        setFile(null);

        // Update context
        setFormData(prevFormData => ({
            ...prevFormData,
            overview: {
                ...prevFormData.overview,
                additionalDetails: {
                    ...prevFormData.overview.additionalDetails,
                    tradeLicenseFile: null // Remove the file from context
                }
            }
        }));
    };

    return (
        <div className="w-full p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Trade Licence</h2>
            <div className="flex justify-between items-start">
                <div className="w-full md:w-1/2 border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                    <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-center text-red-500"
                    >
                        <FaUpload className="mx-auto mb-2 text-gray-400" size={30} />
                        <p className="mb-1">Click to upload</p>
                        <p className="text-gray-500">or drag and drop</p>
                        <p className="text-gray-500 text-sm">PDF (Upto 2 MB)</p>
                    </label>
                </div>
                {file && (
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 flex flex-col items-center">
                        <h3 className="text-gray-700 font-medium mb-2">Document Uploaded</h3>
                        <div className="relative w-40 h-40">
                            <img
                                src={file}
                                alt="Uploaded file"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <button
                                className="absolute top-0 right-0 mt-2 mr-2 text-white bg-red-500 rounded-full p-1"
                                onClick={handleRemoveFile}
                            >
                                <FaTimes size={14} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
