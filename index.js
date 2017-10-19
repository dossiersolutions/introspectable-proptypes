var PropTypes = require("prop-types");

module.exports = {};

"array bool func number object string symbol any element node".split(" ")
  .forEach((kind) => {
    const result = PropTypes[kind];
    result.introspection = {kind: kind};
    result.isRequired.introspection = {kind: kind, isRequired: true};
    module.exports[kind] = result;
  });

"arrayOf instanceOf objectOf oneOf oneOfType shape exact".split(" ")
  .forEach((kind) => {
    module.exports[kind] = function createParametricTypeCheckerWithIntrospection(arg) {

      const result = PropTypes[kind].apply(this, arguments);

      if (Array.isArray(arg)) arg = arg.map((v) => v.introspection || v);
      else if (arg.instrospection) arg = arg.instrospection;

      result.introspection = {kind: kind, arg: arg};
      if (result.isRequired) result.isRequired.introspection = {
        kind: kind,
        arg: arg,
        isRequired: true
      };
      return result;
    };
  });
