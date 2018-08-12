const MIXED_CONTENT = "Mixed";

export const FLUID_TYPES = {
  ANIMATION_IN: "animationIn",
  ANIMATION_OUT: "animationOut"
};

export function isMixed(value) {
  return MIXED_CONTENT === value;
}

export function animatedPropertyAlreadyExists(name, properties) {
  return properties.find(property => property.name === name);
}

//this will reduce to one value with mixed in case of mixed content
export function mergeProperty(acc, currentValue) {
  if (acc === undefined || acc === null) {
    acc = currentValue;
  } else if (acc !== currentValue && currentValue !== MIXED_CONTENT) {
    //if we have a property but it's not the same, that's mixed content
    acc = MIXED_CONTENT;
  }
  return acc;
}
