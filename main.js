

const canvas = document.getElementById("text")

const fileInput = document.getElementById('myFile');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  canvas.innerhtml = "test";
  Metadata metadata = ImageMetadataReader.readMetadata(jpegFile);
  console.log(metadata);
}
