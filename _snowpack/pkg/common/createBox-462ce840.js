import { _ as _extends } from './extends-7477639a.js';
import { s as styled, b as styleFunctionSx, u as useTheme, _ as _objectWithoutPropertiesLoose, j as jsxRuntime, r as require$$4 } from './colorManipulator-7af06b2d.js';
import { r as react } from './index-04edb6a1.js';
import { e as extendSxProp } from './extendSxProp-e84efcc5.js';

const _excluded = ["className", "component"];
function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = styled('div')(styleFunctionSx);
  const Box = /*#__PURE__*/react.forwardRef(function Box(inProps, ref) {
    const theme = useTheme(defaultTheme);

    const _extendSxProp = extendSxProp(inProps),
          {
      className,
      component = 'div'
    } = _extendSxProp,
          other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded);

    return /*#__PURE__*/jsxRuntime.jsx(BoxRoot, _extends({
      as: component,
      ref: ref,
      className: require$$4(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: theme
    }, other));
  });
  return Box;
}

export { createBox as c };
