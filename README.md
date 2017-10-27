
# Introspectable PropTypes

**Hacky thin wrapper to add introspection to React prop-types**

---

This is a very thin layer around the prop-types package, to add introspection support, by setting a field called `introspection` on all created propTypes. This only handles the `prop-types` package. If you are using other packages (like `react-immutable-proptypes`), those must also be replaced.

## Usage

1. Add as dependency: `yarn add introspectable-proptypes` or `npm install introspectable-proptypes`
2. Import component: `import PropTypes from "introspectable-proptypes";`
3. Use as before.
4. Introspect: `MyComponent.propTypes.introspection` now contains a readable version of the propType.

## Versioning

Major and minor version numbers match the prop-types version they wrap. Patch numbers are independent from prop-types. We try to always use the latest available patch version when making new releases.
