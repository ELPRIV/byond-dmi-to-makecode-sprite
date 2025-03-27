let mode = "full-width";

const canvas = document.getElementById("text")

const fileInput = document.getElementById('myFile');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0].getAsBinary();
  canvas.innerHTML = selectedFile;
}
