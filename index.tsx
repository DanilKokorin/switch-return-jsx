import Svg, { Path } from 'react-native-svg'
import { IIconProps } from '../../entities/types/icons'
import { Platform } from 'react-native'

const ArrowIcon: React.FC<IIconProps> = (props) => {
  const { width = 8, height = 14 } = props

  switch (Platform.OS) {
    case 'android':
      return (
        <Svg width={width} height={height} viewBox="0 0 8 14" fill="none">
          <Path
            d="M7 1L1 7L7 13"
            stroke="#000614"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      )

    case 'ios':
      return (
        <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.56653 15.5758C8.80084 15.8101 8.80084 16.19 8.56653 16.4243L8.28368 16.7071C8.04937 16.9415 7.66947 16.9415 7.43516 16.7071L1.00084 10.2728C0.297896 9.56988 0.297898 8.43018 1.00084 7.72724L7.43516 1.29292C7.66947 1.05861 8.04937 1.05861 8.28368 1.29292L8.56653 1.57577C8.80084 1.81008 8.80084 2.18998 8.56653 2.4243L2.79081 8.20001H15.4C15.7314 8.20001 16 8.46864 16 8.80001V9.20001C16 9.53138 15.7314 9.80001 15.4 9.80001H2.79077L8.56653 15.5758Z" fill="#000614" />
        </Svg>
      )
  }
}

export default ArrowIcon
