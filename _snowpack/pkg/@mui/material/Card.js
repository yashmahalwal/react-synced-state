import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-0d249d68.js';
import { h as _extends_1, r as require$$4, j as jsxRuntime } from '../../common/colorManipulator-7af06b2d.js';
import { o as objectWithoutPropertiesLoose, u as useThemeProps_1 } from '../../common/useThemeProps-ef3d7e2e.js';
import { r as react } from '../../common/index-04edb6a1.js';
import { p as propTypes } from '../../common/index-47a09a79.js';
import { b as base } from '../../common/index-49c727b6.js';
import { s as styled_1 } from '../../common/styled-8576ff9b.js';
import { P as Paper } from '../../common/index-7f02b7b3.js';
import '../../common/extends-7477639a.js';
import '../../common/green-45c74814.js';
import '../../common/ownerWindow-46387254.js';
import '../../common/debounce-735db077.js';
import '../../common/useControlled-3de1265b.js';
import '../../common/useForkRef-fb626a2f.js';
import '../../common/useId-820ad9b8.js';
import '../../common/useIsFocusVisible-1ec77cac.js';
import '../../common/getScrollbarSize-0f780b6c.js';
import '../../common/useThemeProps-df9debff.js';
import '../../common/createBox-462ce840.js';
import '../../common/extendSxProp-e84efcc5.js';
import '../../common/emotion-react.browser.esm-6b337b85.js';
import '../../common/ModalUnstyled-a1548d77.js';
import '../../common/generateUtilityClasses-eeff7b3a.js';
import '../../common/ClassNameGenerator-0fb33fc3.js';
import '../../common/index-3eae4d6e.js';
import '../../common/useTheme-99381af8.js';

var cardClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCardUtilityClass = getCardUtilityClass;



function getCardUtilityClass(slot) {
  return (0, base.generateUtilityClass)('MuiCard', slot);
}

const cardClasses = (0, base.generateUtilityClasses)('MuiCard', ['root']);
var _default = cardClasses;
exports.default = _default;
});

var Card_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(require$$4);





var _styled = interopRequireDefault(styled_1);

var _useThemeProps = interopRequireDefault(useThemeProps_1);

var _Paper = interopRequireDefault(Paper);





const _excluded = ["className", "raised"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, base.unstable_composeClasses)(slots, cardClasses_1.getCardUtilityClass, classes);
};

const CardRoot = (0, _styled.default)(_Paper.default, {
  name: 'MuiCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    overflow: 'hidden'
  };
});
const Card = /*#__PURE__*/React.forwardRef(function Card(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiCard'
  });
  const {
    className,
    raised = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    raised
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(CardRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    elevation: raised ? 8 : undefined,
    ref: ref,
    ownerState: ownerState
  }, other));
});
var _default = Card;
exports.default = _default;
});

var Card = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  cardClasses: true
};
Object.defineProperty(exports, "cardClasses", {
  enumerable: true,
  get: function () {
    return _cardClasses.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Card.default;
  }
});

var _Card = interopRequireDefault(Card_1);

var _cardClasses = _interopRequireWildcard(cardClasses_1);

Object.keys(_cardClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _cardClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cardClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Card);

export default __pika_web_default_export_for_treeshaking__;
