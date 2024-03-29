# sierpinski-curve-cli
Print the [Sierpinski (Square) Curve](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_curve) to the console!

![What sierpinski-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-curve-cli/main/img/sierpinski-curve-banner.png)

[![npm version](https://img.shields.io/npm/v/sierpinski-curve-cli)](https://www.npmjs.com/package/sierpinski-curve-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/sierpinski-curve-cli)](https://bundlephobia.com/package/sierpinski-curve-cli)
[![downloads](https://img.shields.io/npm/dy/sierpinski-curve-cli)](https://www.npmjs.com/package/sierpinski-curve-cli)
[![license](https://img.shields.io/npm/l/sierpinski-curve-cli)](https://github.com/spirometaxas/sierpinski-curve-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx sierpinski-curve-cli <n>
$ npx sierpinski-curve-cli <n> [options]
```
where `n >= 0`.

### Via Global Install
```
$ npm install --global sierpinski-curve-cli
$ sierpinski-curve-cli <n>
$ sierpinski-curve-cli <n> [options]
```
where `n >= 0`.

### Via Import
```
$ npm install sierpinski-curve-cli
```
then:
```
const sierpinski = require('sierpinski-curve-cli');
console.log(sierpinski.create(<n>);
console.log(sierpinski.create(<n>, { 
    line: <bold|double|standard> 
});
```
The config params are optional. 

## Options
### Recursive Step  
```
$ sierpinski-curve-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ sierpinski-curve-cli 2
```
![What sierpinski-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-curve-cli/main/img/sierpinski-curve-2.png)

```
$ sierpinski-curve-cli 3
```
![What sierpinski-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-curve-cli/main/img/sierpinski-curve-3.png)

### Line Type
```
$ sierpinski-curve-cli <n> --line=<bold|double|standard>
```
The optional `--line` param draws the Sierpinski Curve using different line types.  Supported values:

- `bold`: Draw using bold lines
- `double`: Draw using double lines
- `standard`: Draw using standard lines (default)

#### Examples:
```
$ sierpinski-curve-cli 3 --line=bold
```
![What sierpinski-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-curve-cli/main/img/sierpinski-curve-3-line_bold.png)

```
$ sierpinski-curve-cli 3 --line=double
```
![What sierpinski-curve-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-curve-cli/main/img/sierpinski-curve-3-line_double.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console

## License
- [MIT](https://github.com/spirometaxas/sierpinski-curve-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)