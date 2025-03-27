import * as ExifReader from 'exifreader';

const canvas = document.getElementById("text")

const fileInput = document.getElementById('myFile');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  let metadata = ImageMetadataReader.readMetadata(selectedFile);
  canvas.innerhtml = metadata;
}
