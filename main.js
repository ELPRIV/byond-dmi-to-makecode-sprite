import PngToy from 'pngtoy';
let a = []
async function readZtxt(file) {
            const pngtoy = new PngToy();
            await pngtoy.fetch(file);
            const zTXtChunks = pngtoy.getChunk('zTXt');
            if (zTXtChunks) {
                zTXtChunks.forEach(chunk => {
                    console.log(`Keyword: ${chunk.keyword}, Text: ${chunk.text}`);
                    a.append([chunk.keyword,chunk.text]);
                });
            } else {
              console.log('No zTXt chunks found.');
            }
        }

const canvas = document.getElementById("text")

const fileInput = document.getElementById('myFile');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  canvas.innerhtml = "test";
}
