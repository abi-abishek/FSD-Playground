import React, { useState } from "react";
import { useDropzone } from 'react-dropzone';
import QrReader from 'qrcode-reader';
import './QRCodeImageReader.css';

function QRCodeImageReader() {
    const [decodedData, setDecodedData] = useState([]);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const imageDataUri = event.target.result;
            const qr = new QrReader();
            qr.callback = (err, value) => {
                if (err) { 
                    setDecodedData([{ error: 'Error decoding QR code.' }]);
                    return;
                } else {
                    setDecodedData([{ error: 'No QR Code found' }]);
                } 
            };
            qr.decode(imageDataUri);
        };

        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({});

    const parseQRData = (data) => {
        try {
            const parsedData = JSON.parse(data);
            if (parsedData && typeof parsedData === 'object') {
                return [parsedData];
            }
            return [{ error: 'Invalid QR Code data.' }];
        } catch (e) {
            return [{ error: 'Invalid QR Code data.' }];
        }
    };

    return (
        <div>
            <h2>QR Code Image Reader</h2>
            <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps} />
                {
                    isDragActive ?
                    <p>Drop the image file here...</p> :
                    <p>Drag and drop an image file here, or click to Upload the image.</p>
                }
            </div>
            <div className="decoded-data-container">
                {decodedData.length > 0 && (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    {Object.keys(decodedData[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QRCodeImageReader;