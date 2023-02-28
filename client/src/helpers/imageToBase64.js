const imageToBase64 = (image) => {
  return new Promise((resolve, reject) => {
    if (!image) {
      reject('No image provided');
    }
    if (image.size > 1536000) {
      reject('Max size if 1500 Kb');
    }

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      resolve(e.target.result);
    };
    fileReader.readAsDataURL(image);

    fileReader.onerror = (e) => {
      reject(e.target.error);
    };
  });
};

export default imageToBase64;