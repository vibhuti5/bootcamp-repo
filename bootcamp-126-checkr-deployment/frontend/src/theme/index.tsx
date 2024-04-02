import { createTheme } from '@mui/material/styles'
import '../index.css'

declare module '@mui/material/styles' {
  interface PaletteColor {
    50: string
    100: string
    300: string
    400: string
    500: string
    700: string
  }

  interface CustomPalette {
    accentColors: {
      blue: string
      lightBlue: string
      green: string
      lightGreen: string
      yellowEmphasis: string
      lightYellowEmphasis: string
      lightRed: string
      darkRed: string
    }
    structuralColors: {
      white: string
      stroke: string
      lightGray: string
      gray: string
      boxShadow: string
      shadow: string
      black: string
    }
  }

  interface Palette extends CustomPalette {
    accentColors: {
      blue: string
      lightBlue: string
      green: string
      lightGreen: string
      yellowEmphasis: string
      lightYellowEmphasis: string
      lightRed: string
      darkRed: string
    }
    structuralColors: {
      white: string
      stroke: string
      lightGray: string
      gray: string
      boxShadow: string
      shadow: string
      black: string
    }
  }

  interface PaletteOptions extends CustomPalette {
    accentColors: {
      blue: string
      lightBlue: string
      green: string
      lightGreen: string
      yellowEmphasis: string
      lightYellowEmphasis: string
      lightRed: string
      darkRed: string
    }
    structuralColors: {
      white: string
      stroke: string
      lightGray: string
      gray: string
      boxShadow: string
      shadow: string
      black: string
    }
  }

  interface TypeText {
    lowEmphasis: string
    mediumEmphasis: string
    highEmphasis: string
  }
  interface TypographyVariants {
    h1: TypographyStyle
    h2: TypographyStyle
    subtitle1: TypographyStyle
    body1: TypographyStyle
    body2: TypographyStyle
    caption1: TypographyStyle
    caption2: TypographyStyle
  }

  interface TypographyVariantsOptions {
    h1?: TypographyStyle
    h2?: TypographyStyle
    subtitle1?: TypographyStyle
    body1?: TypographyStyle
    body2?: TypographyStyle
    caption1?: TypographyStyle
    caption2?: TypographyStyle
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    subtitle1: true
    body1: true
    body2: true
    caption1: true
    caption2: true
  }
}
interface TypographyStyle {
  '@media (max-width:1920px)': {
    fontFamily: string
    fontSize: string
    fontWeight: string
    lineHeight: string
  }
  '@media (max-width:1440px)': {
    fontSize: string
    lineHeight: string
  }
  '@media (max-width:1080px)': {
    fontSize: string
    lineHeight: string
  }
}
const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1081,
      lg: 1441,
      xl: 1920,
    },
  },
  spacing: [0, 2, 4, 6, 8, 10, 12],
  palette: {
    primary: {
      50: '#FAFAFC',
      100: '#F7F8FA',
      300: '#EFF2FF',
      400: '#95AAFF',
      500: '#224DFF',
      700: '#1132B7',
    },
    text: {
      lowEmphasis: '#818287',
      mediumEmphasis: '#696A6E',
      highEmphasis: '#2C2C2E',
    },
    accentColors: {
      blue: '#3E5FE2',
      lightBlue: '#F2F4FC',
      green: '#17A076',
      lightGreen: '#F2FCFB',
      yellowEmphasis: '#A08817',
      lightYellowEmphasis: '#FAF8EB',
      lightRed: '#FCE5EA',
      darkRed: '#994D5B',
    },
    structuralColors: {
      white: '#FFFFFF',
      stroke: '#E5E7ED',
      lightGray: '#696A6E',
      gray: '#3E414D',
      boxShadow: '#0000001A',
      shadow: '#2d2d2f1a',
      black: '#0A0B0D',
    },
  },
  typography: {
    fontFamily: 'Inter-Medium',
    h1: {
      '@media (max-width:1920px)': {
        fontFamily: 'Inter-Medium',
        fontSize: '1.51rem',
        fontWeight: '500',
        lineHeight: '2.275rem',
      },
      '@media (max-width:1440px)': {
        fontSize: '1.13rem',
        lineHeight: '1.7rem',
      },
      '@media (max-width:1080px)': {
        fontSize: '0.85rem',
        lineHeight: '1.28rem',
      },
    },
    h2: {
      '@media (max-width:1920px)': {
        fontFamily: 'Inter-Medium',
        fontSize: '1.36rem',
        fontWeight: '500',
        lineHeight: '2.12rem',
      },
      '@media (max-width:1440px)': {
        fontSize: '1.02rem',
        lineHeight: '1.59rem',
      },
      '@media (max-width:1080px)': {
        fontSize: '0.76rem',
        lineHeight: '1.19rem',
      },
    },
    subtitle1: {
      '@media (max-width:1920px)': {
        fontFamily: 'Inter-Medium',
        fontSize: '1.21rem',
        fontWeight: '500',
        lineHeight: '1.82rem',
      },
      '@media (max-width:1440px)': {
        fontSize: '0.91rem',
        lineHeight: '1.36rem',
      },
      '@media (max-width:1080px)': {
        fontSize: '0.68rem',
        lineHeight: '1.02rem',
      },
    },
    body1: {
      '@media (max-width:1920px)': {
        fontFamily: 'Inter-Medium',
        fontSize: '1.06rem',
        fontWeight: '500',
        lineHeight: '1.51rem',
      },
      '@media (max-width:1440px)': {
        fontSize: '0.79rem',
        lineHeight: '1.13rem',
      },
      '@media (max-width:1080px)': {
        fontSize: '0.59rem',
        lineHeight: '0.85rem',
      },
    },
    body2: {
      '@media (max-width:1920px)': {
        fontFamily: 'Inter-Medium',
        fontSize: '1.06rem',
        fontWeight: '400',
        lineHeight: '1.51rem',
      },
      '@media (max-width:1440px)': {
        fontSize: '0.79rem',
        lineHeight: '1.13rem',
      },
      '@media (max-width:1080px)': {
        fontSize: '0.59rem',
        lineHeight: '0.85rem',
      },
    },
    caption1: {
      '@media (max-width:1920px)': {
        fontFamily: 'Inter-Medium',
        fontSize: '0.91rem',
        fontWeight: '500',
        lineHeight: '1.36rem',
      },
      '@media (max-width:1440px)': {
        fontSize: '0.68rem',
        lineHeight: '1.02rem',
      },
      '@media (max-width:1080px)': {
        fontSize: '0.51rem',
        lineHeight: '0.76rem',
      },
    },
    caption2: {
      '@media (max-width:1920px)': {
        fontFamily: 'Inter-Regular',
        fontSize: '0.91rem',
        fontWeight: '400',
        lineHeight: '1.36rem',
      },
      '@media (max-width:1440px)': {
        fontSize: '0.68rem',
        lineHeight: '1.02rem',
      },
      '@media (max-width:1080px)': {
        fontSize: '0.51rem',
        lineHeight: '0.76rem',
      },
    },
  },
})

export default Theme
