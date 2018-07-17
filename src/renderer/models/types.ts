class Media {
  protected source: String = null;
  protected volume: Number = 1;
  protected isPlaying: Boolean = false;
  protected playOnMouseClick: Boolean = true;
}

enum AnimationEasing {
  LINEAR = "Linear",
  QUAD_IN_OUT = "QuadInOut",
  QUAD_IN = "QuadIn",
  QUAD_OUT = "QuadOut"
}

export enum AnimationPropertyType {
  OPACITY = "opacity",
  Y = "moveY",
  X = "moveX",
  Z = "moveZ"
}

class AnimationProperty {
  name: AnimationPropertyType = AnimationPropertyType.OPACITY;
  value: number = 0;
  unit: String = "";
}

export class Animation {
  property: AnimationProperty = new AnimationProperty();
  duration: Number = 1;
  delay: Number = 0;
  easing: AnimationEasing = AnimationEasing.LINEAR;
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
