import { c as createCommonjsModule } from './_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from './interopRequireDefault-0d249d68.js';
import { e as esm } from './index-47a09a79.js';
import { d as defaultTheme_1 } from './useThemeProps-ef3d7e2e.js';

var styled_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slotShouldForwardProp = exports.rootShouldForwardProp = exports.default = void 0;



var _defaultTheme = interopRequireDefault(defaultTheme_1);

const rootShouldForwardProp = prop => (0, esm.shouldForwardProp)(prop) && prop !== 'classes';

exports.rootShouldForwardProp = rootShouldForwardProp;
const slotShouldForwardProp = esm.shouldForwardProp;
exports.slotShouldForwardProp = slotShouldForwardProp;
const styled = (0, esm.createStyled)({
  defaultTheme: _defaultTheme.default,
  rootShouldForwardProp
});
var _default = styled;
exports.default = _default;
});

export { styled_1 as s };
