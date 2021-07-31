import {theme} from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...theme,
    breakpoints,
    fonts: {
        body: 'Monserrat, sans-serif',
        header: 'Arial',
    },
    colors: {
        ...theme.colors,
        rick: {
           100: '#000000',
           200: '#000000',
           300: '#000000',
           400: '#000000',
           500: '#000000',
           600: '#000000',
           700: '#000000',
           800: '#000000',
           900: '#000000',
        }
    },
    icons:{
        ...theme.icons,
        user: {
            path: (
              <g fill="#707070">
                <path d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.828A8.828,8.828,0,1,1,18.828,10,8.838,8.838,0,0,1,10,18.828Z" />
                <path
                  d="M155.1,68.2a4.1,4.1,0,1,0-4.1-4.1A4.106,4.106,0,0,0,155.1,68.2Zm0-7.031a2.93,2.93,0,1,1-2.93,2.93A2.933,2.933,0,0,1,155.1,61.172Z"
                  transform="translate(-145.102 -57.656)"
                />
                <path
                  d="M93.694,301.384A4.105,4.105,0,0,0,90.622,300H83.591a4.105,4.105,0,0,0-3.072,1.384l-.278.314.207.364a7.658,7.658,0,0,0,13.317,0l.207-.364Zm-6.588,3.381a6.5,6.5,0,0,1-5.406-2.9,2.932,2.932,0,0,1,1.89-.692h7.031a2.932,2.932,0,0,1,1.89.692A6.5,6.5,0,0,1,87.107,304.766Z"
                  transform="translate(-77.107 -288.281)"
                />
              </g>
            ),
            viewBox: '0 0 20 20'
          },
    }
}