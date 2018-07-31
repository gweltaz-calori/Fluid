export default class ImageResource {
  constructor(hash) {
    this.HASH_REGEX = /(?:ImageResource)(?:\((.+)\))/;
    this.url = this.getUrlFromHash(hash);
  }

  getUrlFromHash(hashText) {
    let [input, hash] = this.HASH_REGEX.exec(hashText);
    const squash = hash.split("-").join("");
    return `url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/${squash.substring(
      0,
      4
    )}/${squash.substring(4, 8)}/${squash.substring(8)})`;
  }
}
