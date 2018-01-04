Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphQlClient = undefined;
exports.default = configureClient;
var _apolloClient = require("apollo-client");
var _apolloClient2 = _interopRequireDefault(_apolloClient);
var _apolloLinkHttp = require("apollo-link-http");
var _apolloLinkError = require("apollo-link-error");
var _apolloCacheInmemory = require("apollo-cache-inmemory");
var _reactNative = require("react-native");
var _reactNativeReduxToast = require("react-native-redux-toast");
var _user = require("../redux/modules/user");
var userActions = _interopRequireWildcard(_user);
var _reactApollo = require("react-apollo");
var _apolloLink = require("apollo-link");
var _apolloLinks = require("./apolloLinks");
var _apolloLinks2 = _interopRequireDefault(_apolloLinks);
var _apolloCache = require("./apolloCache");
var _apolloCache2 = _interopRequireDefault(_apolloCache);
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var graphqlClient = null;
function configureClient(store) {
  if (!graphqlClient) {
    graphqlClient = new _apolloClient2.default({
      link: (0, _apolloLinks2.default)(store),
      cache: _apolloCache2.default.restore(),
      connectToDevTools: process.env.NODE_ENV !== "production",
      queryDeduplication: true
    });
    window.__APOLLO_CLIENT__ = graphqlClient;
  }
  return graphqlClient;
}
var getGraphQlClient = (exports.getGraphQlClient = function getGraphQlClient() {
  return graphqlClient;
});
