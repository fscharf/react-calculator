import { memo } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  position: fixed;
  inset: 0;
  z-index: -1;
  rect {
    fill: ${props => props.theme.secondary};
  }
  path {
    fill: ${props => props.theme.primary};
  }
`

const Wallpaper = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="2560"
      height="1080"
      viewBox="0 0 2560 1080"
      fill="none"
    >
      <g clipPath="url(#clip0_1364_25)">
        <rect width="2560" height="1080" fill="#AE45EB" fillOpacity="0.2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M683 901.098L794.042 835.614C905.083 770.13 1127.17 639.163 1349.25 622.792C1571.33 606.421 1793.42 704.646 2015.5 819.243C2237.58 933.839 2459.67 1064.81 2681.75 1064.81C2903.83 1064.81 3125.92 933.839 3236.96 868.356L3348 802.872V1294H3236.96C3125.92 1294 2903.83 1294 2681.75 1294C2459.67 1294 2237.58 1294 2015.5 1294C1793.42 1294 1571.33 1294 1349.25 1294C1127.17 1294 905.083 1294 794.042 1294H683V901.098Z"
          fill="#8F16D4"
          fillOpacity="0.8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 854.068L106.667 799.579C213.333 745.09 426.667 636.113 640 622.491C853.333 608.869 1066.67 690.602 1280 785.957C1493.33 881.312 1706.67 990.29 1920 990.29C2133.33 990.29 2346.67 881.312 2453.33 826.823L2560 772.335V1181H2453.33C2346.67 1181 2133.33 1181 1920 1181C1706.67 1181 1493.33 1181 1280 1181C1066.67 1181 853.333 1181 640 1181C426.667 1181 213.333 1181 106.667 1181H0V854.068Z"
          fill="#8F16D4"
        />
      </g>
      <defs>
        <clipPath id="clip0_1364_25">
          <rect width="2560" height="1080" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default memo(Wallpaper)
