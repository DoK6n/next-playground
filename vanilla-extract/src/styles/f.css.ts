import { style } from '@vanilla-extract/css'

export const flex = style({
  display: 'flex',
})

export const flexAlignCenter = style([
  flex,
  {
    alignItems: 'center',
  },
])

export const flexJustifyCenter = style([
  flex,
  {
    justifyContent: 'center',
  },
])

export const flexColumn = style([
  flex,
  {
    flexDirection: 'column',
  },
])

export const flex1 = style({
  flex: 1,
})

export const posAbs = style({
  position: 'absolute',
})

export const posRel = style({
  position: 'relative',
})

export const top0 = style({
  top: 0,
})

export const left0 = style({
  left: 0,
})

export const fullWidth = style({
  width: '100%',
})

export const fullHeight = style({
  height: '100%',
})

export const posAbsFull = style([posAbs, top0, left0, fullWidth, fullHeight])

export const cursorPointer = style({
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
})

export const resetButton = style({
  appearance: 'none',
  border: 0,
  padding: 0,
  background: 'none',
  color: 'gray',
  textAlign: 'left',
})

