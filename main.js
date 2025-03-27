import * as ExifReader from 'exifreader';

let mode = "full-width";

const canvas = document.getElementById("text")

const fileInput = document.getElementById('myFile');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  Metadata metadata = ImageMetadataReader.readMetadata(selectedFile);
  canvas.innerhtml = metadata;
}
