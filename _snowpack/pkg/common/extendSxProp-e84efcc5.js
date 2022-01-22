import { _ as _extends } from './extends-7477639a.js';
import { _ as _objectWithoutPropertiesLoose, b4 as propToStyleFunction, i as isPlainObject } from './colorManipulator-7af06b2d.js';

const _excluded = ["sx"];

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;

  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);

      if (!isPlainObject(result)) {
        return systemProps;
      }

      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }

  return _extends({}, otherProps, {
    sx: finalSx
  });
}

export { extendSxProp as e };
