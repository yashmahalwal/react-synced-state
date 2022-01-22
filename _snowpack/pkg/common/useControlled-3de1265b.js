import { r as react } from './index-04edb6a1.js';

function deprecatedPropType(validator, reason) {
  {
    return () => null;
  }
}

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function requirePropFactory(componentNameInError, Component) {
  {
    return () => null;
  } // eslint-disable-next-line react/forbid-foreign-prop-types
}

function unsupportedProp(props, propName, componentName, location, propFullName) {
  {
    return null;
  }
}

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

export { useControlled as a, deprecatedPropType as d, isMuiElement as i, requirePropFactory as r, unsupportedProp as u };
