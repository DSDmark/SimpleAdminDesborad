import { Theme } from "@mui/material";

export default function Tooltip(theme:Theme){
  return{
    MuiTooltip:{
      styleOverrides:{
        tooltip:{
          background:theme.palette.grey[200]
        },
        arrow:{
          color:theme.palette.grey[800]
        }
      }
    }
  }
}
