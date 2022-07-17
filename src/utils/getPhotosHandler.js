const { getPhotosService } = require("services");

const getUniquePhotos = (photos, data) => {
  return data.filter((item) => photos.every((photo) => photo.id !== item.id));
};

const getPhotosHandler = async (photos, setPhotos, setLoader) => {
  try {
    setLoader(true);
    const response = await getPhotosService();
    if (response.status === 200) {
      setPhotos((prev) => [...prev, ...getUniquePhotos(photos, response.data)]);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoader(false);
  }
};

export { getPhotosHandler };
