import { _ as _extends } from './extends-7477639a.js';
import { r as react } from './index-04edb6a1.js';
import { c as capitalize, _ as _objectWithoutPropertiesLoose, j as jsxRuntime, r as require$$4 } from './colorManipulator-7af06b2d.js';
import { s as styled, u as useThemeProps } from './styled-8af018b1.js';
import { g as generateUtilityClass, a as generateUtilityClasses, c as composeClasses } from './generateUtilityClasses-eeff7b3a.js';

function getSvgIconUtilityClass(slot) {
  return generateUtilityClass('MuiSvgIcon', slot);
}
const svgIconClasses = generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];

const useUtilityClasses = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};

const SvgIconRoot = styled('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$ownerS, _theme$palette$ownerS2;

  return {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: theme.typography.pxToRem(20),
      medium: theme.typography.pxToRem(24),
      large: theme.typography.pxToRem(35)
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_theme$palette$ownerS = (_theme$palette$ownerS2 = theme.palette[ownerState.color]) == null ? void 0 : _theme$palette$ownerS2.main) != null ? _theme$palette$ownerS : {
      action: theme.palette.action.active,
      disabled: theme.palette.action.disabled,
      inherit: undefined
    }[ownerState.color]
  };
});
const SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiSvgIcon'
  });

  const {
    children,
    className,
    color = 'inherit',
    component = 'svg',
    fontSize = 'medium',
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = '0 0 24 24'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    inheritViewBox,
    viewBox
  });

  const more = {};

  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(SvgIconRoot, _extends({
    as: component,
    className: require$$4(classes.root, className),
    ownerState: ownerState,
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, more, other, {
    children: [children, titleAccess ? /*#__PURE__*/jsxRuntime.jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.muiName = 'SvgIcon';

function createSvgIcon(path, displayName) {
  const Component = (props, ref) => /*#__PURE__*/jsxRuntime.jsx(SvgIcon, _extends({
    "data-testid": `${displayName}Icon`,
    ref: ref
  }, props, {
    children: path
  }));

  Component.muiName = SvgIcon.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}

export { createSvgIcon as c };
