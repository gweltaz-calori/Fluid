self.createBlobFromSvg = function(contents) {
  self.postMessage(
    new Blob([contents], {
      type: "image/svg+xml;charset=utf-8"
    })
  );
};

function onMessage(e) {
  self[e.data.fn](e.data.args);
}

self.addEventListener("message", onMessage);
