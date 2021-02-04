import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    text: string
    subText: string
    optionalText: string
    background: string
    card: string
    disabled: string

    success: string
    warning: string
    danger: string
    dangerLight: string

    tiny: number
    small: number
    medium: number
    big: number
    huge: number

    primaryLight: string
    primaryDark: string
    secondary: string

    headerHeight: number
  }
}
