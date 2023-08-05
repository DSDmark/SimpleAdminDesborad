export default function Popover() {
  return {
    MuiPopover: {
      defaultProps: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
      },
    },
  }
}
