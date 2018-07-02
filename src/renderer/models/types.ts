export enum AttributeNames {
  opacity = "opacity",
  radius = "borderRadius",
  moveX = "transform|translate|X",
  moveY = "transform|translate|Y",
  moveZ = "transform|translate|Z",
  rotateX = "transform|rotate|X",
  rotateY = "transform|rotate|Y",
  rotateZ = "transform|rotate|Z",
  scale = "transform|scale",
  scaleX = "transform|rotate|X",
  scaleY = "transform|rotate|Y"
}

export enum Properties {
  ANIMATION = "animation",
  VIDEO = "video",
  GIF = "gif",
  AUDIO = "audio"
}

export enum AnimatedPropertyEasing {}

/* export type AnimatedPropertyEasing =
  | "QuadInOut"
  | "QuadIn"
  | "QuadOut"
  | "SineInOut"
  | "SineIn"
  | "SineOut"
  | "ExpoInOut"
  | "ExpoIn"
  | "ExpoOut"
  | "QuartInOut"
  | "QuartIn"
  | "QuartOut"
  | "CubicInOut"
  | "CubicIn"
  | "CubicOut"
  | "QuintInOut"
  | "QuintIn"
  | "QuintOut"
  | "CircInOut"
  | "CircIn"
  | "CircOut"
  | "BackInOut"
  | "BackIn"
  | "BackOut"
  | "BounceInOut"
  | "BounceIn"
  | "BounceOut"; */

class Property {
  protected visible: boolean = true;
}

class Vector {
  x: number = 0;
  y: number = 0;
  z: number = 0;
}

class Animation {
  duration: number = 1;
  delay: number = 0;
}

export class AnimationProperty extends Animation {
  public value: number;
}

class MorphingProperty extends Animation {}
