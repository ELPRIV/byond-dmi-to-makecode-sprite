import *

let canvas = document.getElementById("text");

let fileInput = document.getElementById('myFile');
fileInput.onchange = () => {
  let selectedFile = fileInput.files[0];
  canvas.innerhtml = "test";
  Metadata metadata = PNGMetadataReader.readMetadata(selectedFile);
  console.log(metadata);
}
