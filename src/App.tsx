import React from 'react'
import DemoButton from './DemoButton'
import './styles/index.scss'
import Icon from './atoms/Icon'
import { Styles } from './constants/enum'

const App: React.FC = () => {
  return (
    <div>
      <DemoButton />
      <Icon
          name="android"
          style={ Styles.Brands }
      />
    </div>
  )
}

export default App
