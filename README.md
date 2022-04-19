# unocss-preset-bootstrap-grid

> Bootstrap Grid Preset for UnoCSS
## Usage

```js
// unocss.config.js
import { presetUno, defineConfig } from 'unocss'
import { presetBootstrapGrid } from 'unocss-preset-bootstrap-grid'

export default defineConfig({
  presets: [
    ...
    presetBootstrapGrid(),
  ],
})
```

## Utilities

* .(prefix-)container - does NOT set max-width by theme breakpoints
* .(prefix-)row
* .(prefix-)row-cols-*
* .(prefix-)col
* .(prefix-)col-(1-12)
* .(prefix-)col-auto
* .(prefix-)offset-(1-12)
* .(prefix-)g(x|y)-*

> See [tailwind-bootstrap-grid](https://tailwind-bootstrap-grid.netlify.app/) for examples / syntax

### Type of `BootstrapGridOptions`

```ts
export interface BootstrapGridOptions {
  /**
   * Prefix for Bootstrap Grid classes
   *
   * @defaultValue `b-`
   */
  prefix?: string,
  /**
   * Gutter width
   *
   * @defaultValue `1rem`
   */
  gutter?: string,
  /**
   * Grid columns
   *
   * @defaultValue `12`
   */
  gridColumns?: number,
}
```

## License

MIT
