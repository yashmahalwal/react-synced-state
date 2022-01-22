import { _ as _objectWithoutPropertiesLoose, j as jsxRuntime, r as require$$4 } from '../../../common/colorManipulator-7af06b2d.js';
import { _ as _extends } from '../../../common/extends-7477639a.js';
import { r as react } from '../../../common/index-04edb6a1.js';
import { s as styled, u as useThemeProps } from '../../../common/styled-8af018b1.js';
import { g as generateUtilityClass, a as generateUtilityClasses, c as composeClasses } from '../../../common/generateUtilityClasses-eeff7b3a.js';
import { T as Typography } from '../../../common/Typography-b40d1b99.js';
import '../../../common/_commonjsHelpers-8c19dec8.js';
import '../../../common/useThemeProps-df9debff.js';
import '../../../common/createTheme-52608124.js';
import '../../../common/ClassNameGenerator-0fb33fc3.js';
import '../../../common/extendSxProp-e84efcc5.js';

function getCardHeaderUtilityClass(slot) {
  return generateUtilityClass('MuiCardHeader', slot);
}
const cardHeaderClasses = generateUtilityClasses('MuiCardHeader', ['root', 'avatar', 'action', 'content', 'title', 'subheader']);

const _excluded = ["action", "avatar", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"];

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    avatar: ['avatar'],
    action: ['action'],
    content: ['content'],
    title: ['title'],
    subheader: ['subheader']
  };
  return composeClasses(slots, getCardHeaderUtilityClass, classes);
};

const CardHeaderRoot = styled('div', {
  name: 'MuiCardHeader',
  slot: 'Root',
  overridesResolver: (props, styles) => _extends({
    [`& .${cardHeaderClasses.title}`]: styles.title,
    [`& .${cardHeaderClasses.subheader}`]: styles.subheader
  }, styles.root)
})({
  display: 'flex',
  alignItems: 'center',
  padding: 16
});
const CardHeaderAvatar = styled('div', {
  name: 'MuiCardHeader',
  slot: 'Avatar',
  overridesResolver: (props, styles) => styles.avatar
})({
  display: 'flex',
  flex: '0 0 auto',
  marginRight: 16
});
const CardHeaderAction = styled('div', {
  name: 'MuiCardHeader',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})({
  flex: '0 0 auto',
  alignSelf: 'flex-start',
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4
});
const CardHeaderContent = styled('div', {
  name: 'MuiCardHeader',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})({
  flex: '1 1 auto'
});
const CardHeader = /*#__PURE__*/react.forwardRef(function CardHeader(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiCardHeader'
  });

  const {
    action,
    avatar,
    className,
    component = 'div',
    disableTypography = false,
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const ownerState = _extends({}, props, {
    component,
    disableTypography
  });

  const classes = useUtilityClasses(ownerState);
  let title = titleProp;

  if (title != null && title.type !== Typography && !disableTypography) {
    title = /*#__PURE__*/jsxRuntime.jsx(Typography, _extends({
      variant: avatar ? 'body2' : 'h5',
      className: classes.title,
      component: "span",
      display: "block"
    }, titleTypographyProps, {
      children: title
    }));
  }

  let subheader = subheaderProp;

  if (subheader != null && subheader.type !== Typography && !disableTypography) {
    subheader = /*#__PURE__*/jsxRuntime.jsx(Typography, _extends({
      variant: avatar ? 'body2' : 'body1',
      className: classes.subheader,
      color: "text.secondary",
      component: "span",
      display: "block"
    }, subheaderTypographyProps, {
      children: subheader
    }));
  }

  return /*#__PURE__*/jsxRuntime.jsxs(CardHeaderRoot, _extends({
    className: require$$4(classes.root, className),
    as: component,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [avatar && /*#__PURE__*/jsxRuntime.jsx(CardHeaderAvatar, {
      className: classes.avatar,
      ownerState: ownerState,
      children: avatar
    }), /*#__PURE__*/jsxRuntime.jsxs(CardHeaderContent, {
      className: classes.content,
      ownerState: ownerState,
      children: [title, subheader]
    }), action && /*#__PURE__*/jsxRuntime.jsx(CardHeaderAction, {
      className: classes.action,
      ownerState: ownerState,
      children: action
    })]
  }));
});

export default CardHeader;
