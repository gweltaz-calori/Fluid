import axios from "axios";
const sortFramesByPosition = frames => {
  let rows = [];

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

  return sortedFrames;
};

export const getFrames = async key => {
  let response = await axios({
    method: "GET",
    url: `https://api.figma.com/v1/files/${key}`,
    headers: {
      "X-Figma-Token": "2415-33f208e7-a549-4dcc-88f3-eeff30ca3a10"
    }
  });

  return sortFramesByPosition(response.data.document.children[0].children);
};

export const getImages = async (key, frames) => {
  let response = await axios({
    method: "GET",
    url: `https://api.figma.com/v1/images/${key}`,
    headers: {
      "X-Figma-Token": "2415-33f208e7-a549-4dcc-88f3-eeff30ca3a10"
    },
    params: {
      format: "svg",
      ids: frames
        .map(frame => {
          return frame.id;
        })
        .join(",")
    }
  });
  const imageUrls = response.data.images;
  const promises = [];

  for (let imageUrl in imageUrls) {
    let promise = getImageContents(imageUrl, imageUrls[imageUrl]);
    promises.push(promise);
  }

  const svgContents = await Promise.all(promises);

  for (let svgContent of svgContents) {
    let frame = frames.find(frame => frame.id === svgContent.id);
    frame.svg = svgContent.svg;
  }

  return frames;
};

export const getImageContents = async (imageId, imageUrl) => {
  const response = await axios({
    method: "GET",
    url: imageUrl
  });
  return {
    id: imageId,
    svg: response.data
  };
};
