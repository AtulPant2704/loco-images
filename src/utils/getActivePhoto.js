const getActivePhoto = (photos, setActivePhoto, id, type) => {
  const activePhotoIndex = photos.findIndex((photo) => photo.id === id);
  if (type === "previous") {
    setActivePhoto(photos[activePhotoIndex - 1]);
  } else {
    setActivePhoto(photos[activePhotoIndex + 1]);
  }
};

export { getActivePhoto };
