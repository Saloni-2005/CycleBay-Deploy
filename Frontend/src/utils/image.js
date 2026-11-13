const BACKEND_URL = "https://cyclebay-backend.onrender.com";

export const getImageUrl = (image) => {
  if (!image) return "/placeholder.png";

  if (image.startsWith("http")) {
    return image;
  }

  const imagePath = image.replace(/^\/+/, "");
  const uploadPath = imagePath.startsWith("uploads/")
    ? imagePath
    : `uploads/${imagePath}`;

  return `${BACKEND_URL}/${uploadPath}`;
};
