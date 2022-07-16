const { getPhotosService } = require("services");

const getPhotosHandler = async (setPhotos, count) => {
  try {
    const response = await getPhotosService(count);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export { getPhotosHandler };
