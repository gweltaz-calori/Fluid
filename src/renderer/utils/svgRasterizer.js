import Worker from "../workers/thread.worker";

export async function rasterize(svgStr) {
  return new Promise(async resolve => {
    const worker = new Worker();
    let img = new Image();

    worker.postMessage({
      fn: "createBlobFromSvg",
      args: [svgStr]
    });

    worker.addEventListener("message", e => {
      img.src = window.URL.createObjectURL(e.data);
      img.onload = () => {
        resolve(img);
      };
    });
  });
}
