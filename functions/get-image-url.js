exports.handler = async (event) => {
  const { caption, size } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: `https://res.cloudinary.com/${
      process.env.CLOUDINARY_CLOUD_NAME
    }/image/upload/c_fit,g_west,h_400,co_rgb:FFFFFFFF,l_text:netlify.com:Pacaembu-Bold.ttf_${size}:${encodeURIComponent(caption)},w_1053,x_46/${process.env.CLOUDINARY_IMAGE_PUBLIC_ID}`,
  };
};