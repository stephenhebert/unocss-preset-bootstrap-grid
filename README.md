# unocss-preset-bootstrap-grid

> Bootstrap Grid Preset for UnoCSS
## Usage

```js
// unocss.config.js
import { presetUno, defineConfig } from 'unocss'
import { presetBootstrapGrid } from 'unocss-preset-bootstrap-grid'

export default defineConfig({
  presets: [
    presetUno(), // for color theme
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
* .(prefix-)col-offset-(1-12)

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