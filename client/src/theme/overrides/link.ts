export default function Link() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          underline: 'none',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  }
}
