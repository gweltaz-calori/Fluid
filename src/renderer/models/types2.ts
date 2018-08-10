enum PresetType {
  CUSTOM = "Custom",
  POP = "Pop",
  BOTTOM_SLIDE = "BottomSlide",
  RIGHT_SLIDE = "RightSlide",
  LEFT_SLIDE = "LeftSlide",
  TOP_SLIDE = "TopSlide"
}

enum EaseType {
  LINEAR = "Linear",
  QUAD_IN_OUT = "QuadInOut"
}

enum AnimatedPropertyType {
  OPACITY = "Opacity",
  SCALE = "Scale",
  MOVE_Y = "MoveY",
  MOVE_X = "MoveX",
  ROTATE = "Rotate"
}

class AnimatedProperty {
  name: AnimatedPropertyType;
  from: number;

  constructor(
    name: AnimatedPropertyType = AnimatedPropertyType.OPACITY,
    from: number = 0
  ) {
    this.name = name;
    this.from = from;
  }
}

class Preset {
  name?: PresetType;
  duration: number = 1;
  delay: number = 0;
  ease: EaseType = EaseType.LINEAR;
  properties?: AnimatedProperty[];

  constructor(
    name: PresetType = PresetType.CUSTOM,
    properties: AnimatedProperty[] = []
  ) {
    this.name = name;
    this.properties = properties;
  }

  public addProperty() {
    if (this.name !== PresetType.CUSTOM) {
      //if the user add new properties on existing presets it's now a custom preset
      this.name = PresetType.CUSTOM;
    }

    let propertyType: AnimatedPropertyType = AnimatedPropertyType.OPACITY;
    let index = 0;

    while (
      index < ANIMATED_PROPERTIES.length &&
      this.propertyExists(propertyType)
    ) {
      index++;
      propertyType = AnimatedPropertyType[ANIMATED_PROPERTIES[index].key];
    }

    this.properties.push(new AnimatedProperty(propertyType));
  }

  public removeProperty(index: number) {
    this.properties.splice(index, 1);
  }

  public popProperty() {
    this.properties.pop();
  }

  public hasAllProperties() {
    return this.properties.length === ANIMATED_PROPERTIES.length;
  }

  public getRemainingProperties(name: AnimatedPropertyType) {
    return ANIMATED_PROPERTIES.filter(possibleProperty => {
      let found = this.properties.find(
        (property: AnimatedProperty) => property.name === possibleProperty.value
      );

      return !found || name === possibleProperty.value;
    });
  }

  private propertyExists(propertyName: AnimatedPropertyType) {
    return this.properties.find(
      (property: AnimatedProperty) => property.name === propertyName
    );
  }
}

class PopPreset extends Preset {
  constructor() {
    super(PresetType.POP, [
      new AnimatedProperty(AnimatedPropertyType.OPACITY, 0),
      new AnimatedProperty(AnimatedPropertyType.SCALE, 0.6)
    ]);
  }
}

class BottomSlidePreset extends Preset {
  constructor() {
    super(PresetType.BOTTOM_SLIDE, [
      new AnimatedProperty(AnimatedPropertyType.MOVE_Y, -20),
      new AnimatedProperty(AnimatedPropertyType.OPACITY, 0)
    ]);
  }
}

class TopSlidePreset extends Preset {
  constructor() {
    super(PresetType.TOP_SLIDE, [
      new AnimatedProperty(AnimatedPropertyType.MOVE_Y, 20),
      new AnimatedProperty(AnimatedPropertyType.OPACITY, 0)
    ]);
  }
}

class LeftSlidePreset extends Preset {
  constructor() {
    super(PresetType.LEFT_SLIDE, [
      new AnimatedProperty(AnimatedPropertyType.MOVE_X, -20),
      new AnimatedProperty(AnimatedPropertyType.OPACITY, 0)
    ]);
  }
}

class RightSlidePreset extends Preset {
  constructor() {
    super(PresetType.RIGHT_SLIDE, [
      new AnimatedProperty(AnimatedPropertyType.MOVE_X, 20),
      new AnimatedProperty(AnimatedPropertyType.OPACITY, 0)
    ]);
  }
}

export const PRESETS = Object.keys(PresetType).map(
  (presetKey: keyof typeof PresetType) => {
    return {
      key: presetKey,
      value: PresetType[presetKey]
    };
  }
);
export const EASINGS = Object.keys(EaseType).map(
  (easeKey: keyof typeof EaseType) => {
    return { key: easeKey, value: EaseType[easeKey] };
  }
);
export const ANIMATED_PROPERTIES = Object.keys(AnimatedPropertyType).map(
  (propType: keyof typeof AnimatedPropertyType) => {
    return { key: propType, value: AnimatedPropertyType[propType] };
  }
);
export const PRESETS_FROM_TYPES = {
  CUSTOM: Preset,
  POP: PopPreset,
  BOTTOM_SLIDE: BottomSlidePreset,
  RIGHT_SLIDE: RightSlidePreset,
  LEFT_SLIDE: LeftSlidePreset,
  TOP_SLIDE: TopSlidePreset
};
