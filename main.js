import 'metadata-extractor'

let canv = document.getElementById("text");
let fi = document.getElementById('myFile');
 
window.document.getElementById('myFile').onchange = () => {
  let selectedFile = fi.files[0];
  canv.innerhtml = "test";
  let meta = PNGMetadataReader.readMetadata(selectedFile);
  console.log(metadata);
}
