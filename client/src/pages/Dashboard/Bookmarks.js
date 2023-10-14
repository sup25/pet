import React, { useState, useEffect } from "react";

const Bookmarks = () => {
  const [bookmarkedImages, setBookmarkedImages] = useState([]);
  const [dogImages, setDogImages] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedImages");
    if (storedBookmarks) {
      setBookmarkedImages(JSON.parse(storedBookmarks));
    }
  }, []);

  const handleBookmarkClick = (imageUrl) => {
    setBookmarkedImages([...bookmarkedImages, imageUrl]);

    // Save bookmarks to local storage when updated
    localStorage.setItem("bookmarkedImages", JSON.stringify(bookmarkedImages));
  };

  const removeBookmark = (index) => {
    const updatedBookmarks = [...bookmarkedImages];
    updatedBookmarks.splice(index, 1);
    setBookmarkedImages(updatedBookmarks);

    // Update local storage to reflect the changes
    localStorage.setItem("bookmarkedImages", JSON.stringify(updatedBookmarks));
  };

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/20"
        );
        const data = await response.json();
        setDogImages(data.message);
      } catch (error) {
        console.error("Error fetching dog images:", error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div className="container mx-auto mt-5 pb-20 px-4">
      <div className="flex justify-end gap-2">
        <button onClick={() => setShowBookmarks(!showBookmarks)}>
          Toggle Bookmarks
        </button>
      </div>

      <div className="mt-4">
        <div className="flex justify-between flex-wrap gap-1 w-full">
          {dogImages.map((imageUrl, index) => (
            <div key={index} className="w-1/5 h-[300px] flex">
              <img
                src={imageUrl}
                alt={`Dog ${index}`}
                className="w-full rounded"
              />
              <button onClick={() => handleBookmarkClick(imageUrl)}>
                Add to Bookmarks
              </button>
            </div>
          ))}
        </div>
      </div>

      {showBookmarks && (
        <div className="flex justify-between flex-wrap gap-1 mt-4 w-full">
          {bookmarkedImages.map((imageUrl, index) => (
            <div key={index} className="w-1/5 h-[300px] flex">
              <img
                src={imageUrl}
                alt={`Bookmarked ${index}`}
                className="w-full rounded"
              />
              <button onClick={() => removeBookmark(index)}>
                Remove Bookmark
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
