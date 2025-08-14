import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "14k Gold-filled Freshwater Pearl Bracelet",
      price: "$",
      images: [
        "/images/14K GF FW pearl brace2.jpg",
        "/images/14K GF FW pearl brace.jpg",
      ],
    },
    {
      id: 2,
      name: "Gold-filled Mother of Pearl Earrings",
      price: "$",
      images: [
        "/images/GFMP earrings.jpg",
        "/images/GFMP earrings2.jpg",
      ],
    },
    {
      id: 3,
      name: "14k Gold-filled Mother of Pearls Bar Necklace",
      price: "$",
      images: [
        "/images/14k GF MOP neck2.jpg",
        "/images/14k GF MOP neck.jpg",
      ],
    },
    {
      id: 4,
      name: "Zeta Meraki Earring",
      price: "USD $20",
      images: [
        "/images/Meraki2.jpg",
        "/images/Meraki1.jpg",
        "/images/Meraki3.jpg",
      ],
    },
    {
      id: 5,
      name: "Zeta Meraki Necklace",
      price: "USD $30",
      images: ["/images/Merakinecklace.jpg"],
    },
    {
      id: 6,
      name: "Natural Crystal Rings",
      price: "USD $30",
      images: [
        "/images/gemstonering3.jpg",
        "/images/gemstonering2.jpg",
        "/images/gemstonering1.jpg",
      ],
    },
    {
      id: 7,
      name: "Athena Earrings",
      price: "$",
      images: [
        "/images/Athena3.jpg",
        "/images/Athena4.jpg",
        "/images/Athena2.jpg",
        "/images/Athena1.jpg",
      ],
    },
    {
      id: 8,
      name: "Green Aventurine Necklace",
      price: "$",
      images: [
        "/images/Green aventurine1.jpg",
        "/images/Green aventurine2.jpg",
      ],
    },
    {
      id: 9,
      name: "Green Aventurine Gold plated bracelet",
      price: "$",
      images: ["/images/GAGPbrace.jpg"],
    },
    {
      id: 10,
      name: "Gold plated minimalist bracelet",
      price: "$",
      images: [
        "/images/GPMB1.jpg",
        "/images/GPMB2.jpg",
      ],
    },
    {
      id: 11,
      name: "Handmade Ring",
      price: "$",
      images: [
        "/images/HM rings3.jpg",
        "/images/HM rings2.jpg",
        "/images/HM rings1.jpg"
      ],
    },
    {
      id: 11,
      name: "Little Silver Bracelet",
      price: "$",
      images: ["/images/LSB.jpg",],
    },
    {
      id: 12,
      name: "Lapis Lazul Rings",
      price: "$",
      images: ["/images/Lapis lazuli3.jpg",
        "images/Lapis lazuli2.jpg",
      ],
    },
    {
      id: 13,
      name: "Gold-plated Necklace with Gold-filled Charm",
      price: "$",
      images: ["/images/Lapis lazuli1.jpg",],
    },
    {
      id: 14,
      name: "Mixed Crysal Bracelet",
      price: "$",
      images: ["/images/mixedcrys.jpg",],
    },
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedProductImages, setSelectedProductImages] = useState([]);

  const openImage = (img, productImages, imageIndex) => {
    setSelectedImage(img);
    setSelectedProductImages(productImages);
    setSelectedImageIndex(imageIndex);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedProductImages([]);
    setSelectedImageIndex(0);
  };

  const nextImageLightbox = () => {
    const nextIndex = (selectedImageIndex + 1) % selectedProductImages.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(selectedProductImages[nextIndex]);
  };

  const prevImageLightbox = () => {
    const prevIndex =
      (selectedImageIndex - 1 + selectedProductImages.length) %
      selectedProductImages.length;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(selectedProductImages[prevIndex]);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold">Our Products</h1>
      </div>

      <div className="row g-3">
        {products.map((product, index) => (
          <motion.div key={product.id} className="col-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.5 }} >
            <div className="card h-100 shadow-lg border-1">
              <div className="card-img-top position-relative overflow-hidden"style={{ height: "400px" }} >
                <ImageCarousel images={product.images} openImage={openImage} productImages={product.images}/>
              </div>
              <div className="card-body text-center p-2">
                <h6 className="card-title fw-semibold mb-1" style={{ fontSize: "0.9rem" }}>
                  {product.name}
                </h6>
                <p className="card-text text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                  {product.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: 1050,}} onClick={closeImage} initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {selectedProductImages.length > 1 && (
              <button className="btn btn-light btn-lg position-absolute start-0 top-50 translate-middle-y ms-4"
                style={{zIndex: 1051, width: "50px", height: "50px", borderRadius: "50%",}}
                onClick={(e) => {e.stopPropagation();prevImageLightbox();}}>&lt;
              </button>
            )}

            <motion.img key={selectedImage} src={selectedImage} alt="Large view" className="img-fluid"
              style={{maxWidth: "50%", maxHeight: "50%", objectFit: "contain",}}
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} />

            {selectedProductImages.length > 1 && (
              <button className="btn btn-light btn-lg position-absolute end-0 top-50 translate-middle-y me-4"
                style={{ zIndex: 1051, width: "50px", height: "50px", borderRadius: "50%", }}
                onClick={(e) => { e.stopPropagation();  nextImageLightbox(); }}> &gt;
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ImageCarousel({ images, openImage, productImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
      {images.length > 1 && (
        <button //for left arrow
          className="btn btn-dark btn-sm position-absolute start-0 top-50 translate-middle-y ms-1"
          style={{ zIndex: 10, opacity: 0.8, width: "25px", height: "25px", fontSize: "10px",}} onClick={prevImage}> &lt;
        </button>
      )}

      <img src={images[currentIndex]} alt={`Product ${currentIndex + 1}`} className="img-fluid w-100 h-100 rounded"
        style={{ objectFit: "cover", cursor: "pointer" }}
        onClick={() => openImage(images[currentIndex], productImages, currentIndex) }/>
        
      {images.length > 1 && (
        <button //right arrow button
          className="btn btn-dark btn-sm position-absolute end-0 top-50 translate-middle-y me-1"
          style={{ zIndex: 10, opacity: 0.8, width: "25px", height: "25px", fontSize: "10px", }}
          onClick={nextImage}> &gt;
        </button>
      )}
    
      {images.length > 1 && (
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2">
          <small className="badge bg-dark bg-opacity-75">
            {currentIndex + 1} / {images.length}
          </small>
        </div>
      )}
    </div>
  );
}

export default Products;