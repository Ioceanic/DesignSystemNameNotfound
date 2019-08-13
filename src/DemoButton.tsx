import React from 'react'
import Button from './molecules/Button'
import Icon from './atoms/Icon'
// To change when available in Icon
import { IconSizes, Styles } from './constants/enum'
import './styles/index.scss'

const DemoButton: React.FC = () => {
  const firstIcon = <Icon name="atom" size={IconSizes.Sm} style={Styles.Solid} />
  const secondIcon = <Icon name="beer" size={IconSizes.Lg} style={Styles.Solid} />

  return (
    <div>
      <p>Base Buttons</p>
      <Button type={Button.Types.Primary} label="Primary"></Button>
      <Button type={Button.Types.Secondary} label="Secondary"></Button>
      <Button type={Button.Types.Success} label="Success"></Button>
      <Button type={Button.Types.Warning} label="Warning"></Button>
      <Button type={Button.Types.Danger} label="Danger"></Button>
      <Button type={Button.Types.Info} label="Info"></Button>
      <Button type={Button.Types.None} label="None"></Button>
      <hr />
      <p>Inversed Buttons</p>
      <Button type={Button.Types.Primary} inversed label="Primary"></Button>
      <Button type={Button.Types.Secondary} inversed label="Secondary"></Button>
      <Button type={Button.Types.Success} inversed label="Success"></Button>
      <Button type={Button.Types.Warning} inversed label="Warning"></Button>
      <Button type={Button.Types.Danger} inversed label="Danger"></Button>
      <Button type={Button.Types.Info} inversed label="Info"></Button>
      <Button type={Button.Types.None} inversed label="None"></Button>
      <hr />
      <p>Test multiple properties of button</p>
      <Button type={Button.Types.Primary} disabled label="Disabled"></Button>
      <Button type={Button.Types.Secondary} label="With event" click={(event: Object) => { console.log(event);alert('Clicked !'); }}></Button>
      <Button type={Button.Types.Secondary} disabled label="With event but disabled" click={(event: Object) => { console.log(event);alert('Clicked !'); }}></Button>
      <Button type={Button.Types.Success} label="Icon" icon={firstIcon}></Button>
      <Button type={Button.Types.Warning} label="Icon position" icon={secondIcon} iconPos={Button.IconPositions.Left}></Button>
      <Button type={Button.Types.Danger} label="Submit button" submit></Button>
      <Button type={Button.Types.None} label="Small" size={Button.Sizes.Small}></Button>
      <Button type={Button.Types.None} label="Normal" size={Button.Sizes.Normal}></Button>
      <Button type={Button.Types.None} label="Medium" size={Button.Sizes.Medium}></Button>
      <Button type={Button.Types.None} label="Large" size={Button.Sizes.Large}></Button>
    </div>
  )
}

export default DemoButton
