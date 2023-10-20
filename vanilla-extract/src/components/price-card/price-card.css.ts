import { style } from '@vanilla-extract/css'
import { f } from '~/styles'

export const block = style([
  f.flex,
  {
    padding: '1rem 1rem 0',
  },
])

export const button = style([
  f.cursorPointer,
  f.resetButton,
  f.flex,
  {
    padding: '0.2rem 0 1rem 0.2rem',
    width: '100px',
    border: '1px solid lightslategray',
    borderRadius: '6px',
    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
    transition: '0.25s box-shadow ease-in, 0.25s transform ease-in',
    ":hover": {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 20px 0 rgba(0, 0, 0, 0.08)'
    }
  },
])

export const right = style([f.flex1])

export const title = style([
  {
    fontSize: '1rem',
    lineHeight: '1.375rem',
  },
])

export const subtitle = style([
  {
    fontSize: '.8125rem',
    lineHeight: '1.25rem',
    color: 'lightgray',
  },
])

export const price = style({
  fontSize: '.875rem',
  fontWeight: 'bold',
  lineHeight: '1.25rem',
})
