let renders = [];
export default class Render {
  static start(callback) {
    Render.renders.push(callback);
  }

  static stop(callback) {
    let index = Render.renders.indexOf(callback);
    Render.renders.splice(index, 1);
  }

  static render(tsl) {
    for (let callback of renders) {
      if (callback) {
        callback(tsl);
      }
    }
    requestAnimationFrame(Render.render);
  }

  static get renders() {
    return renders;
  }
}

Render.render();
