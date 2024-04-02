import { createTheme, type SxProps } from '@mui/material/styles'
import '../index.css'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    overline2: true
  }
}

declare module '@mui/material/styles' {
  interface TypeText {
    highEmphasis?: string
    mediumEmphasis?: string
    lowEmphasis?: string
    black?: string
    white?: string
  }

  interface Palette {
    grays: {
      gray100: string
      gray200: string
      gray300: string
      gray400: string
      gray500: string
      gray600: string
      gray700: string
      gray800: string
    }
    structuralColor: {
      main: string
      background1: string
      background2: string
      overlay: string
      white: string
    }
    Accent: {
      gradient: string
      red: string
    }
    gradient: {
      main: string
    }
  }

  interface PaletteOptions {
    grays: {
      gray100: string
      gray200: string
      gray300: string
      gray400: string
      gray500: string
      gray600: string
      gray700: string
      gray800: string
    }
    structuralColor: {
      main: string
      background1: string
      background2: string
      overlay: string
      white: string
    }
    gradient: {
      main: string
    }
  }

  interface Color {
    '100': string
    '300': string
    '500': string
  }

  interface TypographyOptions {
    caption1?: SxProps
    overline1?: SxProps
    overline2?: SxProps
  }

  interface TypographyVariantsOptions {
    caption1?: SxProps
    overline1?: SxProps
    overline2?: SxProps
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true
    overline1: true
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#8B3DFF',
      dark: '#0B69FF',
      light: '#F2EAFD',
    },

    text: {
      highEmphasis: '#D3D4D4',
      mediumEmphasis: '#959596',
      lowEmphasis: '#707477',
      black: '#2A3238',
      white: '#FFFFFF',
    },
    structuralColor: {
      main: '#EC3A3A',
      background1: 'rgb(255, 255, 255, 0.2)', // for opacity
      background2: '#EBECF0',
      overlay: 'rgba(224, 224, 224, 0.8)',
      white: '#FFF',
    },
    grays: {
      gray100: '#BFC4C8',
      gray200: '#959596',
      gray300: '#343536',
      gray400: '#252627',
      gray500: '#18191B',
      gray600: '#F4F5F5',
      gray700: '#D5CEDDB2',
      gray800: '#D7DFE9',
    },
    gradient: {
      main: '#E3E4E6',
    },
  },

  typography: {
    h1: {
      fontSize: '56px',
      fontWeight: '600',
      lineHeight: '76.5px',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },
    h2: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '32px',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },
    h3: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '28px',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },
    h4: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '20px',
      fontFamily: 'Manrope',
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '24px',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },

    subtitle2: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '26px',
      fontFamily: 'Manrope',
    },

    body1: {
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '22px',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '22px',
      fontFamily: 'Manrope',
    },
    caption1: {
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '20px',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },

    overline: {
      fontSize: '10px',
      fontWeight: '600',
      lineHeight: '16px',
      textTransform: 'none',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },

    overline2: {
      fontSize: '9px',
      fontWeight: '500',
      lineHeight: '7px',
      textTransform: 'none',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: () => ({
          background: '#7E8288',
          color: theme.palette.primary.dark,
          borderRadius: theme.spacing(25),
          padding: theme.spacing(1),
          '& .MuiLinearProgress-bar': {
            background: '#0B69FF',
            borderRadius: theme.spacing(25),
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
})

export default theme
