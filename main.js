import *

let canv = document.getElementById("text");

let fi = document.getElementById('myFile');
fi.onchange = () => {
  let selectedFile = fi.files[0];
  canv.innerhtml = "test";
  Metadata metadata = PNGMetadataReader.readMetadata(selectedFile);
  console.log(metadata);
}
