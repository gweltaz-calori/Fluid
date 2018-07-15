import Vue from "vue";

import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

const requireComponent = require.context(".", false, /\.vue$/);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the file extension from the end
        .replace(/\.\w+$/, "")
    )
  );
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
