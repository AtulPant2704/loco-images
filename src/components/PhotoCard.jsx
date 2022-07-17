import { useEffect, useRef, useState } from "react";
import { Image, Box } from "@chakra-ui/react";

const PhotoCard = ({ photo, onOpen, setActivePhoto }) => {
  const imageRef = useRef();
  const [span, setSpan] = useState(0);

  const modalHandler = () => {
    setActivePhoto(photo);
    onOpen();
  };

  const calculateHeight = () => {
    const height = imageRef.current?.clientHeight;
    setSpan(Math.ceil(height / 10 + 1));
  };

  useEffect(() => {
    imageRef.current.addEventListener("load", calculateHeight);
  }, []);

  return (
    <Box gridRowEnd={`span ${span}`} onClick={modalHandler}>
      <Image ref={imageRef} src={photo.urls.small} w="300px" />
    </Box>
  );
};

export { PhotoCard };
