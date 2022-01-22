import { c as createCommonjsModule } from './_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from './interopRequireDefault-0d249d68.js';
import { r as react } from './index-04edb6a1.js';
import { e as esm } from './index-47a09a79.js';
import { d as defaultTheme_1 } from './useThemeProps-ef3d7e2e.js';

var useTheme_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTheme;

var React = _interopRequireWildcard(react);



var _defaultTheme = interopRequireDefault(defaultTheme_1);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useTheme() {
  const theme = (0, esm.useTheme)(_defaultTheme.default);

  return theme;
}
});

export { useTheme_1 as u };
