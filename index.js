
module.exports = {};

var PropTypes = require("prop-types"),
    nonParametricChecks = "array bool func number object string symbol any element node".split(" "),
    parametricChecks = "arrayOf instanceOf objectOf oneOf oneOfType shape exact".split(" "),
    i, kind;

for (i=0; i<nonParametricChecks.length; i++)
{
  kind = nonParametricChecks[i];

  var modifiedChecker = PropTypes[kind];
  modifiedChecker.introspection = {kind: kind};
  modifiedChecker.isRequired.introspection = {kind: kind, isRequired: true};

  module.exports[kind] = modifiedChecker;
}


for (i=0; i<parametricChecks.length; i++)
{
  kind = parametricChecks[i];

  module.exports[kind] = function createParametricTypeCheckerWithIntrospection(arg) {
    var result = PropTypes[kind].apply(this, arguments);

    if (Array.isArray(arg)) arg = arg.map(function (v) { return v.introspection || v; });
    else if (arg.instrospection) arg = arg.instrospection;

    result.introspection = {kind: kind, arg: arg};

    if (result.isRequired) result.isRequired.introspection = {
      kind: kind,
      arg: arg,
      isRequired: true
    };

    return result;
  };
}
