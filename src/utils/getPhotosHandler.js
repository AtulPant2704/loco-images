const { getPhotosService } = require("services");

const getPhotosHandler = async (setPhotos, count) => {
  try {
    const response = await getPhotosService(count);
    if (response.status === 200) {
      setPhotos(response.data);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { getPhotosHandler };
