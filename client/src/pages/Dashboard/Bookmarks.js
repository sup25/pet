import React, { useState, useEffect } from "react";

const Bookmarks = ({ images }) => {
  useEffect(() => {
    // This code will run whenever the 'images' prop changes
    console.log("Bookmarked images updated:", images);
  }, [images]);
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Bookmarked Images</h2>
      <div className="flex flex-wrap gap-2">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Bookmarked ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
