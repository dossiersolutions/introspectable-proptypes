const PropTypes = require("./index.js");

test('non-parametric non-required propType', () => {

  const boolPropType = PropTypes.bool;

  expect(boolPropType).toHaveProperty("introspection.kind", "bool");
  expect(boolPropType).not.toHaveProperty("introspection.isRequired");
  expect(boolPropType).not.toHaveProperty("introspection.arg");
});

test('non-parametric required propType', () => {

  const requiredBoolPropType = PropTypes.bool.isRequired;

  expect(requiredBoolPropType).toHaveProperty("introspection.kind", "bool");
  expect(requiredBoolPropType).toHaveProperty("introspection.isRequired", true);
  expect(requiredBoolPropType).not.toHaveProperty("introspection.arg");
});


test('nested parametric required propTypes', () => {

  const oneOfStringNumber = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({foo: PropTypes.number.isRequired}),
  ]).isRequired;

  expect(oneOfStringNumber).toHaveProperty("introspection.kind", "oneOfType");
  expect(oneOfStringNumber).toHaveProperty("introspection.isRequired", true);
  expect(oneOfStringNumber).toHaveProperty("introspection.arg", [
    {kind: "string"},
    {kind: "number"},
    {
      kind: "shape",
      arg: {
        foo: expect.any(Function)
      }
    }
  ]);

  expect(oneOfStringNumber.introspection.arg[2].arg.foo.introspection).toMatchObject({
    kind: "number"
  });
});
