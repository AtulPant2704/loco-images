import { useEffect, useRef, useState } from "react";
import {
  Grid,
  Heading,
  Box,
  Spinner,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { PhotoCard, PhotoModal } from "components";
import { getPhotosHandler } from "utils";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(10);
  const [activePhoto, setActivePhoto] = useState(null);
  const loaderRef = useRef(null);
  const statusRef = useRef(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const observerRef = useRef(
    new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !statusRef.current) {
        console.log("intersect");
        setCount((prev) => prev + 10);
        statusRef.current = true;
      }
    })
  );

  useEffect(() => {
    observerRef.current.observe(loaderRef.current);
  }, []);

  useEffect(() => {
    (async () => {
      await getPhotosHandler(setPhotos, setLoader, count);
      setTimeout(() => {
        statusRef.current = false;
      }, 500);
    })();
  }, [count]);

  return (
    <div className="App">
      {isOpen ? (
        <PhotoModal
          isOpen={isOpen}
          onClose={onClose}
          activePhoto={activePhoto}
          setActivePhoto={setActivePhoto}
          photos={photos}
        />
      ) : null}
      <Heading textAlign="center" my="4">
        UnSplash
      </Heading>
      <Grid
        w={{ md: "100%", lg: "80%" }}
        margin="auto"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gridAutoRows="10px"
        gridColumnGap="10px"
        justifyItems="center"
      >
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onOpen={onOpen}
            setActivePhoto={setActivePhoto}
          />
        ))}
      </Grid>
      {loader ? (
        <Flex justifyContent="center">
          <Spinner
            thickness="8px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            textAlign="center"
          />
        </Flex>
      ) : null}
      <Box ref={loaderRef} w="100%" h="10px"></Box>
    </div>
  );
}

export default App;
