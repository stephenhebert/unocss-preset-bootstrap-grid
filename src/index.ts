import type { Preset } from 'unocss'
import { e } from 'unocss'

/**
 * @public
 */
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

// TODO: - container max widths? https://getbootstrap.com/docs/5.0/layout/containers/

/**
 * @public
 */
export function presetBootstrapGrid(options: BootstrapGridOptions = {}): Preset {
  const prefix = options.prefix ?? 'b-'
  const gutter = options.gutter ?? '1rem'
  const gridColumns = options.gridColumns ?? 12

  return {
    name: 'unocss-preset-bootstrap-grid',
    rules: [
      [`${prefix}container`, {
        'width': '100%',
        'margin-right': 'auto',
        'margin-left': 'auto',
      }],
      [new RegExp(`^${prefix}row$`),
        ([], { rawSelector }) => {
          const selector = e(rawSelector)
          const template = `
            .${selector} {
              display: flex;
              flex-wrap: wrap;
              /* TODO: Revisit calc order after https://github.com/react-bootstrap/react-bootstrap/issues/6039 is fixed */
              margin-top: calc(-1 * var(--${prefix}gutter-y, 0));
              margin-right: calc(-.5 * var(--${prefix}gutter-x, ${gutter}));
              margin-left: calc(-.5 * var(--${prefix}gutter-x, ${gutter}));
            }
            .${selector} > * {
              flex-shrink: 0;
              width: 100%;
              max-width: 100%;
              padding-right: calc(var(--${prefix}gutter-x, ${gutter}) * .5);
              padding-left: calc(var(--${prefix}gutter-x, ${gutter}) * .5);
              margin-top: var(--${prefix}gutter-y);
            }
          `
          return template.replace(/^ {12}/gm, '')
        }
      ],
      [new RegExp(`^${prefix}col-?(\\d*)$`),
        ([, size]) => {
          if (size) return {
            'flex': '0 0 auto',
            'width': `${(Number(size) / gridColumns * 100)}%`,
          }
          else return {
            'flex': '1 0 0%',
          }
        }
      ],
      [`${prefix}col-auto`, {
        'flex': '0 0 auto',
        'width': 'auto',
      }],
      [new RegExp(`^${prefix}offset-(\\d+)$`),
        ([, size]) => {
          return {
            'margin-left': size === '0' ? 0 : `${(Number(size) / gridColumns * 100)}%`,
          }
        }
      ],
      [new RegExp(`^${prefix}row-cols-(\\d+|auto)$`),
        ([, columns], { rawSelector }) => {
          const selector = e(rawSelector)
          const template = `
            .${selector} > * {
              flex: 0 0 auto;
              width: ${(columns === 'auto' ? 'auto' : `${(100 / Number(columns))}%`)};
            }
          `
          return template.replace(/^ {12}/gm, '')
        }
      ],
      [new RegExp(`^${prefix}g(x|y)?-(\\d+)$`),
        ([, dim, size]) => {
          let returnObj = {}
          if (dim !== 'y') returnObj[`--${prefix}gutter-x`] = `${.25 * Number(size)}rem`
          if (dim !== 'x') returnObj[`--${prefix}gutter-y`] = `${.25 * Number(size)}rem`
          return returnObj
        }
      ],
    ],
  }
}

export default presetBootstrapGrid
