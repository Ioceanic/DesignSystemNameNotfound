import React from 'react'
import Icon from './atoms/Icon'
import { Styles } from './constants/enum'

const DemoIcon: React.FC = () => {
  return (
    <div>
      <p>Base icons</p>
      <Icon name="android" style={ Styles.Brands } />
    </div>
  )
}

export default DemoIcon
