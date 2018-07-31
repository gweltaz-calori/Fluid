import axios from "axios";
const sortFramesOnPageByPosition = page => {
  let rows = [];
  let frames = page.children.filter(layer => layer.type === "FRAME");

  for (let frame of frames) {
    let row = rows.find(row => {
      let frameBounds = {
        top: frame.absoluteBoundingBox.y,
        bottom: frame.absoluteBoundingBox.y + frame.absoluteBoundingBox.height
      };

      let rowBounds = {
        top: row.absoluteBoundingBox.y,
        bottom: row.absoluteBoundingBox.y + row.absoluteBoundingBox.height
      };

      return (
        (frameBounds.top >= rowBounds.top &&
          frameBounds.top <= rowBounds.bottom) ||
        (frameBounds.bottom <= rowBounds.bottom &&
          frameBounds.bottom >= rowBounds.top)
      );
    });

    if (row) {
      row.children.push(frame);
    } else {
      rows.push({
        children: [frame],
        name: frame.name,
        absoluteBoundingBox: frame.absoluteBoundingBox
      });
    }
  }

  rows = rows.sort((a, b) => a.absoluteBoundingBox.y - b.absoluteBoundingBox.y);

  let sortedFrames = [];
  for (let row of rows) {
    let sortedRow = row.children.sort(
      (a, b) => a.absoluteBoundingBox.x - b.absoluteBoundingBox.x
    );
    sortedFrames = sortedFrames.concat(sortedRow);
  }

  page.children = sortedFrames;

  return page;
};

export const getPages = async key => {
  let response = await axios({
    method: "GET",
    url: `https://api.figma.com/v1/files/${key}`,
    headers: {
      "X-Figma-Token": "2415-33f208e7-a549-4dcc-88f3-eeff30ca3a10"
    },
    params: {
      geometry: "paths"
    }
  });

  let sortedPages = [];

  for (let page of response.data.document.children) {
    sortedPages.push(sortFramesOnPageByPosition(page));
  }

  return sortedPages;
};
