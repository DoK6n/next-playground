import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'teal',
    white: '#fff',
  },
  space: {
    small: '4px',
    medium: '8px',
  },
  font: {
    size: '24px',
  },
  border: {
    base: '1px solid #000',
  },
})

export const hero = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  padding: vars.space.small,
  fontSize: vars.font.size,
  border: vars.border.base,
})

export const colorTomato = style({ color: 'tomato' })
