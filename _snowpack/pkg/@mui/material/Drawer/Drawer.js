import { _ as _objectWithoutPropertiesLoose, j as jsxRuntime, c as capitalize, r as require$$4 } from '../../../common/colorManipulator-7af06b2d.js';
import { _ as _extends } from '../../../common/extends-7477639a.js';
import { r as react } from '../../../common/index-04edb6a1.js';
import { e as easing, d as duration } from '../../../common/createTheme-52608124.js';
import { u as useTheme, g as getTransitionProps, r as reflow, M as Modal, P as Paper } from '../../../common/Paper-92644a12.js';
import { s as styled, r as rootShouldForwardProp, u as useThemeProps } from '../../../common/styled-8af018b1.js';
import { g as generateUtilityClass, a as generateUtilityClasses, c as composeClasses } from '../../../common/generateUtilityClasses-eeff7b3a.js';
import { T as Transition } from '../../../common/Transition-2ff61584.js';
import { b as useForkRef } from '../../../common/useForkRef-fb626a2f.js';
import { d as debounce } from '../../../common/debounce-735db077.js';
import { a as ownerWindow } from '../../../common/ownerWindow-46387254.js';
import '../../../common/_commonjsHelpers-8c19dec8.js';
import '../../../common/ModalUnstyled-a1548d77.js';
import '../../../common/getScrollbarSize-0f780b6c.js';
import '../../../common/index-3eae4d6e.js';
import '../../../common/useThemeProps-df9debff.js';
import '../../../common/ClassNameGenerator-0fb33fc3.js';
import '../../../common/TransitionGroupContext-b7682080.js';

const _excluded = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

function getTranslateValue(direction, node, resolvedContainer) {
  const rect = node.getBoundingClientRect();
  const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  const containerWindow = ownerWindow(node);
  let transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    const transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }

    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }

  if (direction === 'right') {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }

    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }

  if (direction === 'up') {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }

    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  } // direction === 'down'


  if (containerRect) {
    return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
  }

  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}

function resolveContainer(containerPropProp) {
  return typeof containerPropProp === 'function' ? containerPropProp() : containerPropProp;
}

function setTranslateValue(direction, node, containerProp) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp
};
const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Slide = /*#__PURE__*/react.forwardRef(function Slide(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    container: containerProp,
    direction = 'down',
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const theme = useTheme();
  const childrenRef = react.useRef(null);
  const handleRefIntermediary = useForkRef(children.ref, childrenRef);
  const handleRef = useForkRef(handleRefIntermediary, ref);

  const normalizedTransitionCallback = callback => isAppearing => {
    if (callback) {
      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (isAppearing === undefined) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };

  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp);
    reflow(node);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', _extends({}, transitionProps));
    node.style.transition = theme.transitions.create('transform', _extends({}, transitionProps));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);
    setTranslateValue(direction, node, containerProp);

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(node => {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  });

  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(childrenRef.current, next);
    }
  };

  const updatePosition = react.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, containerProp);
    }
  }, [direction, containerProp]);
  react.useEffect(() => {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    const handleResize = debounce(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    });
    const containerWindow = ownerWindow(childrenRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp, containerProp]);
  react.useEffect(() => {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear: appear,
    in: inProp,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react.cloneElement(children, _extends({
        ref: handleRef,
        style: _extends({
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, style, children.props.style)
      }, childProps));
    }
  }));
});

function getDrawerUtilityClass(slot) {
  return generateUtilityClass('MuiDrawer', slot);
}
const drawerClasses = generateUtilityClasses('MuiDrawer', ['root', 'docked', 'paper', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedRight', 'paperAnchorDockedTop', 'paperAnchorDockedBottom', 'modal']);

const _excluded$1 = ["BackdropProps"],
      _excluded2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"];

const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, (ownerState.variant === 'permanent' || ownerState.variant === 'persistent') && styles.docked, styles.modal];
};

const useUtilityClasses = ownerState => {
  const {
    classes,
    anchor,
    variant
  } = ownerState;
  const slots = {
    root: ['root'],
    docked: [(variant === 'permanent' || variant === 'persistent') && 'docked'],
    modal: ['modal'],
    paper: ['paper', `paperAnchor${capitalize(anchor)}`, variant !== 'temporary' && `paperAnchorDocked${capitalize(anchor)}`]
  };
  return composeClasses(slots, getDrawerUtilityClass, classes);
};

const DrawerRoot = styled(Modal, {
  name: 'MuiDrawer',
  slot: 'Root',
  overridesResolver
})(({
  theme
}) => ({
  zIndex: theme.zIndex.drawer
}));
const DrawerDockedRoot = styled('div', {
  shouldForwardProp: rootShouldForwardProp,
  name: 'MuiDrawer',
  slot: 'Docked',
  skipVariantsResolver: false,
  overridesResolver
})({
  flex: '0 0 auto'
});
const DrawerPaper = styled(Paper, {
  name: 'MuiDrawer',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== 'temporary' && styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  flex: '1 0 auto',
  zIndex: theme.zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  // temporary style
  position: 'fixed',
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, ownerState.anchor === 'left' && {
  left: 0
}, ownerState.anchor === 'top' && {
  top: 0,
  left: 0,
  right: 0,
  height: 'auto',
  maxHeight: '100%'
}, ownerState.anchor === 'right' && {
  right: 0
}, ownerState.anchor === 'bottom' && {
  top: 'auto',
  left: 0,
  bottom: 0,
  right: 0,
  height: 'auto',
  maxHeight: '100%'
}, ownerState.anchor === 'left' && ownerState.variant !== 'temporary' && {
  borderRight: `1px solid ${theme.palette.divider}`
}, ownerState.anchor === 'top' && ownerState.variant !== 'temporary' && {
  borderBottom: `1px solid ${theme.palette.divider}`
}, ownerState.anchor === 'right' && ownerState.variant !== 'temporary' && {
  borderLeft: `1px solid ${theme.palette.divider}`
}, ownerState.anchor === 'bottom' && ownerState.variant !== 'temporary' && {
  borderTop: `1px solid ${theme.palette.divider}`
}));
const oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
function isHorizontal(anchor) {
  return ['left', 'right'].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
const defaultTransitionDuration = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
/**
 * The props of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

const Drawer = /*#__PURE__*/react.forwardRef(function Drawer(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiDrawer'
  });

  const {
    anchor: anchorProp = 'left',
    BackdropProps,
    children,
    className,
    elevation = 16,
    hideBackdrop = false,
    ModalProps: {
      BackdropProps: BackdropPropsProp
    } = {},
    onClose,
    open = false,
    PaperProps = {},
    SlideProps,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Slide,
    transitionDuration = defaultTransitionDuration,
    variant = 'temporary'
  } = props,
        ModalProps = _objectWithoutPropertiesLoose(props.ModalProps, _excluded$1),
        other = _objectWithoutPropertiesLoose(props, _excluded2);

  const theme = useTheme(); // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  const mounted = react.useRef(false);
  react.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchorInvariant = getAnchor(theme, anchorProp);
  const anchor = anchorProp;

  const ownerState = _extends({}, props, {
    anchor,
    elevation,
    open,
    variant
  }, other);

  const classes = useUtilityClasses(ownerState);

  const drawer = /*#__PURE__*/jsxRuntime.jsx(DrawerPaper, _extends({
    elevation: variant === 'temporary' ? elevation : 0,
    square: true
  }, PaperProps, {
    className: require$$4(classes.paper, PaperProps.className),
    ownerState: ownerState,
    children: children
  }));

  if (variant === 'permanent') {
    return /*#__PURE__*/jsxRuntime.jsx(DrawerDockedRoot, _extends({
      className: require$$4(classes.root, classes.docked, className),
      ownerState: ownerState,
      ref: ref
    }, other, {
      children: drawer
    }));
  }

  const slidingDrawer = /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends({
    in: open,
    direction: oppositeDirection[anchorInvariant],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps, {
    children: drawer
  }));

  if (variant === 'persistent') {
    return /*#__PURE__*/jsxRuntime.jsx(DrawerDockedRoot, _extends({
      className: require$$4(classes.root, classes.docked, className),
      ownerState: ownerState,
      ref: ref
    }, other, {
      children: slidingDrawer
    }));
  } // variant === temporary


  return /*#__PURE__*/jsxRuntime.jsx(DrawerRoot, _extends({
    BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
      transitionDuration
    }),
    className: require$$4(classes.root, classes.modal, className),
    open: open,
    ownerState: ownerState,
    onClose: onClose,
    hideBackdrop: hideBackdrop,
    ref: ref
  }, other, ModalProps, {
    children: slidingDrawer
  }));
});

export default Drawer;
