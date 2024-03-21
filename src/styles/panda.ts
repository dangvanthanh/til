import { css } from '@/styled-system/css'

export const postClass = css({
  px: 3,
  py: 1,
  bg: 'white',
  minW: 100,
  w: 'full',
  display: 'flex',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRadius: 'sm',
  borderWidth: '1px',
  borderColor: 'gray.300',
  boxShadow:
    '0 .5rem 0 -.1rem var(--colors-gray-300), 0 .55rem 0 var(--colors-gray-200)',
  color: 'gray.900',
})
