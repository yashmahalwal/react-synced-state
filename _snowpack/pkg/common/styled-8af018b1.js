import { u as useThemeProps$1, s as shouldForwardProp, c as createStyled } from './useThemeProps-df9debff.js';
import { c as createTheme } from './createTheme-52608124.js';

const defaultTheme = createTheme();

function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme
  });
}

const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
const styled = createStyled({
  defaultTheme,
  rootShouldForwardProp
});

export { defaultTheme as d, rootShouldForwardProp as r, styled as s, useThemeProps as u };
