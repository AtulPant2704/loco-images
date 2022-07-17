const getActivePhoto = (photos, setActivePhoto, activePhotoIndex, type) => {
  if (type === "previous") {
    setActivePhoto(photos[activePhotoIndex - 1]);
  } else {
    setActivePhoto(photos[activePhotoIndex + 1]);
  }
};

export { getActivePhoto };
