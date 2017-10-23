const PropTypes = require("./index.js");

describe("non-parametric", () => {
  describe('non-required propType', () => {
    const boolPropType = PropTypes.bool;

    test("has introspectable kind", () => {
      expect(boolPropType).toHaveProperty("introspection.kind", "bool");
    });

    test("has introspectable requiredness", () => {
      expect(boolPropType).not.toHaveProperty("introspection.isRequired");
    });

    test("does not have introspection args", () => {
      expect(boolPropType).not.toHaveProperty("introspection.arg");
    });
  });

  describe('required propType', () => {
    const requiredBoolPropType = PropTypes.bool.isRequired;

    test("has introspectable kind", () => {
      expect(requiredBoolPropType).toHaveProperty("introspection.kind", "bool");
    });

    test("has introspectable requiredness", () => {
      expect(requiredBoolPropType).toHaveProperty("introspection.isRequired", true);
    });

    test("does not have introspection args", () => {
      expect(requiredBoolPropType).not.toHaveProperty("introspection.arg");
    });
  });
});

describe("parametric", () => {

  describe("required propTypes", () => {

    const oneOfStringNumber = PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({foo: PropTypes.number.isRequired}),
    ]).isRequired;

    // test("has introspectable kind", () => {
    //   expect(oneOfStringNumber).toHaveProperty("introspection.kind", "oneOfType");
    // });

    // test("has introspectable requiredness", () => {
    //   expect(oneOfStringNumber).toHaveProperty("introspection.isRequired", true);
    // });

    // test("has correct introspection args", () => {
    //   expect(oneOfStringNumber).toHaveProperty("introspection.arg", [
    //     {kind: "string"},
    //     {kind: "number"},
    //     {
    //       kind: "shape",
    //       arg: {
    //         foo: expect.any(Function)
    //       }
    //     }
    //   ]);
    // });

    // test("has correct deeply nested introspection args", () => {
    //   expect(oneOfStringNumber.introspection.arg[2].arg.foo.introspection).toMatchObject({
    //     kind: "number"
    //   });
    // });
  });

});
