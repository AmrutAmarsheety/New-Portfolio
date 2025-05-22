'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Certificate {
  title: string;
  url: string;
}

const certificates: Certificate[] = [
  {
    title: "Certificate 1",
    url: "https://drive.google.com/file/d/1MS4ii0nKPTzos3gd_E8DUo_ttp5fgrqh/preview"
  },
  {
    title: "Certificate 2",
    url: "https://drive.google.com/file/d/1MS4ii0nKPTzos3gd_E8DUo_ttp5fgrqh/preview"
  },
  // Add more certificates as needed
];

const Certificates = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">My professional certifications and achievements</p>
        </div>
        
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-[600px]"
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">{certificate.title}</h3>
                <div className="max-w-2xl mx-auto">
                  <iframe
                    src={certificate.url}
                    className="w-full h-[500px]"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates; 