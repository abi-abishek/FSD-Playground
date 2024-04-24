import React, { useState } from "react";
import QRCode from 'qrcode';


function QRCodeGenerator() {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [qrCodeDataURL, setQRCodeDataURL] = useState('');

    const generateQRCode = async () => {
        const student = {
            name,
            rollNumber,
            department,
            year,
            contactNumber
        };

        const studentInfo = JSON.stringify(student);

        try {
            const dataURL = await QRCode.toDataURL(studentInfo, {
                errorCorrectionLevel: 'H',
                width: 500
            });
            setQRCodeDataURL(dataURL);

            // create a temporary anchor element to trigger the download
            const downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = `${name.toLowerCase().replace(' ', '-')}_qr_code.png`;
            downloadLink.click();
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <div className="qr-generator-container">
            <h2>Generate QR Code</h2>
            <div className="form-container">
                <label>
                    Name:
                    <input type="text" value={name} onClick={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Roll Number:
                    <input type="text" value={rollNumber} onClick={(e) => setRollNumber(e.target.value)} />
                </label>
                <label>
                    Department:
                    <input type="text" value={department} onClick={(e) => setDepartment(e.target.value)} />
                </label>
                <label>
                    Year:
                    <input type="text" value={year} onClick={(e) => setYear(e.target.value)} />
                </label>
                <label>
                    Contact Number:
                    <input type="text" value={contactNumber} onClick={(e) => setContactNumber(e.target.value)} />
                </label>
                <button onClick={generateQRCode}>Generate QR Code</button>
            </div>
            {qrCodeDataURL && (
                <div className="qr-code-container">
                    <h3>QR Code Generated</h3>
                    <img src={qrCodeDataURL} alt="QR Code" />
                </div>
            )}
        </div>
    );

}

export default QRCodeGenerator;