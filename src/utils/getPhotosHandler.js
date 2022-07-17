const { getPhotosService } = require("services");

const getPhotosHandler = async (setPhotos, setLoader, count) => {
  try {
    setLoader(true);
    const response = await getPhotosService(count);
    if (response.status === 200) {
      setPhotos(response.data);
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
