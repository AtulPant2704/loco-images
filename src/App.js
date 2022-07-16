import { useEffect, useState } from "react";
import { getPhotosHandler } from "utils";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotosHandler(setPhotos, 10);
  }, []);

  return (
    <div className="App">
      {photos.map((photo) => (
        <img src={photo.urls.small} alt="hello" />
      ))}
    </div>
  );
}

export default App;
