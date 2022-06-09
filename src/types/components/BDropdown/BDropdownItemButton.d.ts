import ColorVariant from 'src/types/ColorVariant'

// Props
export interface Props {
  buttonClass: string | Array | Record<string, unknown>
  active?: boolean
  activeClass?: string
  disabled?: boolean
  variant?: ColorVariant
}
// Emits
export interface Emits {
  (e: 'click', value: MouseEvent): void
}
// Other