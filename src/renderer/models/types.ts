class Media {
  protected source: String;
  protected volume: Number;
  protected isPlaying: Boolean;
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
