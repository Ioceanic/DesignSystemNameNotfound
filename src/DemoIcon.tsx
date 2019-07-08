import React from 'react'
import Icon from './atoms/Icon'
import { IconSizes, Styles } from './constants/enum'

const DemoIcon: React.FC = () => {
  return (
    <div>
      <p>Base icons</p>
      <Icon name="android" style={ Styles.Brands } />
      <p>Icon sizes</p>
      <Icon name="android" size={IconSizes.Xs} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.Sm} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.Lg} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.OneTime} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.TwoTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.ThreeTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.FourTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.FiveTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.SixTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.SevenTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.HeightTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.NineTimes} style={ Styles.Brands } />
      <Icon name="android" size={IconSizes.TenTimes} style={ Styles.Brands } />
    </div>
  )
}

export default DemoIcon
