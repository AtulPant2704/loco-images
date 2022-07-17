import numeral from "numeral";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Image,
  Avatar,
  Heading,
  Flex,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getActivePhoto } from "utils";

const PhotoModal = ({
  isOpen,
  onClose,
  activePhoto,
  setActivePhoto,
  photos,
}) => {
  const views = numeral(Number(activePhoto.views)).format("0,0");
  const downloads = numeral(Number(activePhoto.downloads)).format("0,0");
  const likes = numeral(Number(activePhoto.likes)).format("0,0");

  const activePhotoIndex = photos.findIndex(
    (photo) => photo.id === activePhoto.id
  );

  const activePhotoHandler = (e, type) => {
    e.stopPropagation();
    getActivePhoto(photos, setActivePhoto, activePhotoIndex, type);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="80%" height="max-content" overflowY="auto">
          <ModalHeader display="flex" alignItems="center" gap="4">
            <Avatar
              name={activePhoto.user.name}
              src={activePhoto.user.profile_image.small}
              size="md"
            />
            <Heading as="h6" size="md">
              {activePhoto.user.name}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody w={{ md: "80%", lg: "60%" }} margin="auto">
            <Image src={activePhoto.urls.regular} alt="unsplash" />
          </ModalBody>
          <ModalFooter justifyContent="flex-start">
            <Flex gap="4">
              <Box>
                <Text as="p">Views</Text>
                <Text as="p">{views}</Text>
              </Box>
              <Box>
                <Text as="p">Downloads</Text>
                <Text as="p">{downloads}</Text>
              </Box>
              <Box>
                <Text as="p">Likes</Text>
                <Text as="p">{likes}</Text>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
        <IconButton
          icon={<AiOutlineLeft />}
          variant="ghost"
          color="gray.200"
          cursor="pointer"
          position="fixed"
          h="200px"
          top="35%"
          left="0"
          fontSize="3xl"
          zIndex="var(--chakra-zIndices-modal)"
          _hover={{
            color: "white",
          }}
          disabled={activePhotoIndex === 0}
          onClick={(e) => activePhotoHandler(e, "previous")}
        />
        <IconButton
          icon={<AiOutlineRight />}
          variant="ghost"
          color="gray.200"
          cursor="pointer"
          position="fixed"
          h="200px"
          top="35%"
          right={{ base: "0", sm: "10px" }}
          fontSize="3xl"
          zIndex="var(--chakra-zIndices-modal)"
          _hover={{
            color: "white",
          }}
          disabled={activePhotoIndex === photos.length - 1}
          onClick={(e) => activePhotoHandler(e, "next")}
        />
      </Modal>
    </>
  );
};

export { PhotoModal };
