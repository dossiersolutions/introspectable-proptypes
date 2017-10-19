
# Introspectable PropTypes

**Hacky thin wrapper to add introspection to React prop-types**

---

This is a very thin layer around the prop-types package, to add introspection support, by setting a field called ´introspection´ on all created propTypes. This only handles the ´prop-types´ package. If you are using other packages (like ´react-immutable-proptypes´), those must also be replaced.

## Usage

1. Add as dependency: `yarn add introspectable-proptypes` or `npm install instrospectable-proptypes`
2. Import component: `import PropTypes from "introspectable-proptypes";`
3. Use as before.
4. Introspect: `MyComponent.propTypes.introspection` now contains a readable version of the propType.
