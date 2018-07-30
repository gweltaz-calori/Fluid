import PixelFormatter from "../formatter/PixelFormatter";

class Media {
  protected source: String = null;
  protected volume: Number = 1;
  protected isPlaying: Boolean = false;
  protected playOnMouseClick: Boolean = true;
}

enum AnimationEasingType {
  LINEAR = "Linear",
  QUAD_IN_OUT = "QuadInOut",
  QUAD_IN = "QuadIn",
  QUAD_OUT = "QuadOut"
}

export enum AnimationType {
  ANIMATE_IN = "ANIMATE_IN",
  ANIMATE_OUT = "ANIMATE_OUT"
}

enum AnimationPropertyType {
  OPACITY = "Opacity",
  Y = "MoveY",
  X = "MoveX",
  Z = "MoveZ",
  SCALE = "Scale"
}

class AnimationProperty {
  name: String = "";
  formatter?: Object;
  min: number = 0;
  max: number = Infinity;
  constructor(
    name: String,
    min: number,
    max: number,
    formatter: Object = null
  ) {
    this.name = name;
    this.formatter = formatter;
    this.max = max;
    this.min = min;
  }
}

class AnimationEasing {
  name: String = "";
  constructor(name: String) {
    this.name = name;
  }
}

export const AVAILAIBLE_ANIMATION_PROPERTIES = [
  new AnimationProperty(AnimationPropertyType.OPACITY, 0, 1),
  new AnimationProperty(
    AnimationPropertyType.Y,
    -Infinity,
    Infinity,
    new PixelFormatter()
  ),
  new AnimationProperty(
    AnimationPropertyType.X,
    -Infinity,
    Infinity,
    new PixelFormatter()
  ),
  new AnimationProperty(
    AnimationPropertyType.Z,
    -Infinity,
    Infinity,
    new PixelFormatter()
  ),
  new AnimationProperty(AnimationPropertyType.SCALE, -Infinity, Infinity)
];

export const AVAILAIBLE_ANIMATION_EASINGS = [
  new AnimationEasing(AnimationEasingType.LINEAR),
  new AnimationEasing(AnimationEasingType.QUAD_IN),
  new AnimationEasing(AnimationEasingType.QUAD_IN_OUT),
  new AnimationEasing(AnimationEasingType.QUAD_OUT)
];

export class Animation {
  property: AnimationProperty = AVAILAIBLE_ANIMATION_PROPERTIES[0];
  duration: Number = 1;
  delay: Number = 0;
  value: number = 0;
  easing: AnimationEasing = AVAILAIBLE_ANIMATION_EASINGS[0];
  static MAX_CHILDREN: number = Infinity;
}

export enum MediaName {
  VIDEO = "VIDEO",
  AUDIO = "AUDIO"
}

export enum FormatType {
  URL = "URL"
}

export class VideoMedia extends Media {
  static type: MediaName.VIDEO;
  static MAX_CHILDREN: number = 1;
}

export class AudioMedia extends Media {
  static type: MediaName.AUDIO;
  static MAX_CHILDREN: number = 2;
}

export class FormatUrl {
  websiteUrl: String = "";
  static MAX_CHILDREN: number = 1;
}
