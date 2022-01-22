import { r as require$$4, j as jsxRuntime, _ as _objectWithoutPropertiesLoose, c as capitalize, a_ as alpha } from '../../../common/colorManipulator-7af06b2d.js';
import { _ as _extends } from '../../../common/extends-7477639a.js';
import { r as react } from '../../../common/index-04edb6a1.js';
import { s as styled, u as useThemeProps } from '../../../common/styled-8af018b1.js';
import { a as generateUtilityClasses, g as generateUtilityClass, c as composeClasses } from '../../../common/generateUtilityClasses-eeff7b3a.js';
import { k as keyframes } from '../../../common/emotion-react.browser.esm-6b337b85.js';
import { T as TransitionGroup } from '../../../common/TransitionGroup-c1f5db59.js';
import { u as useIsFocusVisible } from '../../../common/useIsFocusVisible-1ec77cac.js';
import { a as useEventCallback, b as useForkRef } from '../../../common/useForkRef-fb626a2f.js';
import '../../../common/_commonjsHelpers-8c19dec8.js';
import '../../../common/useThemeProps-df9debff.js';
import '../../../common/createTheme-52608124.js';
import '../../../common/ClassNameGenerator-0fb33fc3.js';
import '../../../common/TransitionGroupContext-b7682080.js';

function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = react.useState(false);
  const rippleClassName = require$$4(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = require$$4(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

  if (!inProp && !leaving) {
    setLeaving(true);
  }

  react.useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/jsxRuntime.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/jsxRuntime.jsx("span", {
      className: childClassName
    })
  });
}

const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

const _excluded = ["center", "classes", "className"];

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled('span', {
  name: 'MuiTouchRipple',
  slot: 'Root',
  skipSx: true
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
}); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.

const TouchRippleRipple = styled(Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

const TouchRipple = /*#__PURE__*/react.forwardRef(function TouchRipple(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTouchRipple'
  });

  const {
    center: centerProp = false,
    classes = {},
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const [ripples, setRipples] = react.useState([]);
  const nextKey = react.useRef(0);
  const rippleCallback = react.useRef(null);
  react.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  const ignoringMouseDown = react.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  const startTimer = react.useRef(null); // This is the hook called once the previous timeout is ready.

  const startTimerCommit = react.useRef(null);
  const container = react.useRef(null);
  react.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = react.useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime.jsx(TouchRippleRipple, {
      classes: {
        ripple: require$$4(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: require$$4(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: require$$4(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: require$$4(classes.child, touchRippleClasses.child),
        childLeaving: require$$4(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: require$$4(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = react.useCallback((event = {}, options = {}, cb) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes

    } = options;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    let rippleX;
    let rippleY;
    let rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size is even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = react.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = react.useCallback((event, cb) => {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/jsxRuntime.jsx(TouchRippleRoot, _extends({
    className: require$$4(classes.root, touchRippleClasses.root, className),
    ref: container
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});

function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

const _excluded$1 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"];

const useUtilityClasses = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }

  return composedClasses;
};

const ButtonBaseRoot = styled('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.

  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

const ButtonBase = /*#__PURE__*/react.forwardRef(function ButtonBase(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiButtonBase'
  });

  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    type
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$1);

  const buttonRef = react.useRef(null);
  const rippleRef = react.useRef(null);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  react.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  react.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  const keydownRef = react.useRef(false);
  const handleKeyDown = useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;

  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }

  const buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);
  const [mountedState, setMountedState] = react.useState(false);
  react.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: require$$4(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    jsxRuntime.jsx(TouchRipple, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});

function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);

const _excluded$2 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];

const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};

const IconButtonRoot = styled(ButtonBase, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  overflow: 'visible',
  // Explicitly set the default value to solve a bug on IE11.
  color: theme.palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.color === 'inherit' && {
  color: 'inherit'
}, ownerState.color !== 'inherit' && ownerState.color !== 'default' && _extends({
  color: theme.palette[ownerState.color].main
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}), ownerState.size === 'small' && {
  padding: 5,
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  padding: 12,
  fontSize: theme.typography.pxToRem(28)
}, {
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled
  }
}));
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

const IconButton = /*#__PURE__*/react.forwardRef(function IconButton(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiIconButton'
  });

  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$2);

  const ownerState = _extends({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });

  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(IconButtonRoot, _extends({
    className: require$$4(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: children
  }));
});

export default IconButton;
