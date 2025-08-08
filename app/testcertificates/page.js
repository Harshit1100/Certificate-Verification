import React from 'react';

const CertificateGallery = () => {
  return (
    <div className="bg-black min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Test Certificates
        </h1>
        <p className="text-white text-center mb-8 text-lg">
          Sample certificates for verification testing
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-transparent rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Aakash's Certificate
            </h3>
            <div className="bg-transparent rounded-lg p-2">
              <img 
                src="/aakash certificate.jpg" 
                alt="Aakash Certificate" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300 mb-2">Unique Code:</p>
              <code className="bg-gray-700 text-green-400 px-3 py-1 rounded text-sm">
                db291f9e-b1cd-4566-a886-2d38e4fc9d8e
              </code>
            </div>
          </div>

          <div className="bg-transparent rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Harshit's Certificate
            </h3>
            <div className="bg-transparent rounded-lg p-2">
              <img 
                src="/harshit certificate.jpg" 
                alt="Harshit Certificate" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300 mb-2">Unique Code:</p>
              <code className="bg-gray-700 text-green-400 px-3 py-1 rounded text-sm">
                431df437-Oe7e-40ab-8aab-2b25739d17b4
              </code>
            </div>
          </div>

          <div className="bg-transparent rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Parag Certificate
            </h3>
            <div className="bg-transparent rounded-lg p-2">
              <img 
                src="/GuviCertification - 5H9l2g60621739F1mn.png" 
                alt="Guvi Certificate" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300 mb-2">Unique Code:</p>
              <code className="bg-gray-700 text-green-400 px-3 py-1 rounded text-sm">
                5H9l2g60621739F1mn
              </code>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400">
            Use the unique codes above to test the certificate verification system
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateGallery;
