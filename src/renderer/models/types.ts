class Media {
  protected source: String = null;
  protected volume: Number = 1;
  protected isPlaying: Boolean = false;
  protected playOnMouseClick: Boolean = true;
}

export enum MediaName {
  VIDEO = "VIDEO",
  AUDIO = "AUDIO"
}

export class VideoMedia extends Media {
  static type: MediaName.VIDEO;
  static MAX_CHILDREN: number = 1;
}

export class AudioMedia extends Media {
  static type: MediaName.AUDIO;
  static MAX_CHILDREN: number = 2;
}
