import themes from "@/themes/index";
import isEqual from "lodash/isequal";
export const MIXED_CONTENT = "Mixed";

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
export function mergeProperty(value, currentValue) {
  if (!isEqual(value, currentValue)) {
    value = MIXED_CONTENT;
  }

  return value;
}

export function getThemeFromPref(defaultTheme = "dark") {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme) {
    return JSON.parse(localStorageTheme);
  }

  const themeInThemes = themes.find(theme => theme.name === defaultTheme);

  localStorage.setItem("theme", JSON.stringify(themeInThemes));

  return themeInThemes;
}
