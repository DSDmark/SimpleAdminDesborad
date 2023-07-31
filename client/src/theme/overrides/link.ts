export default function Link() {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover' as const,
      },
      styleOverrides: {
        root: {
          '&:hover': {
            color: 'red',
            cursor: 'pointer',
          },
        },
      },
    },
  }
}
