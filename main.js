import *

window.document.getElementById('myFile').onchange = () => {
  let canv = window.document.getElementById("text");
  let fi = window.document.getElementById('myFile');
  let selectedFile = fi.files[0];
  canv.innerhtml = "test";
  Metadata metadata = PNGMetadataReader.readMetadata(selectedFile);
  console.log(metadata);
}
