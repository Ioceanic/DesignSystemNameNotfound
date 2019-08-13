import React from 'react'
import { IconPositions, Sizes, Types } from '../constants/enum'

interface ButtonProps {
  type: Types,
  className?: string,
  click?: (event: Object) => void,
  disabled?: boolean,
  icon?: string,
  iconPos?: IconPositions,
  label?: string,
  inversed?: boolean,
  submit?: boolean,
  size?: Sizes
}

class Button extends React.Component<ButtonProps> {
  public static defaultProps = {
    label: '',
    icon: '',
    iconPos: IconPositions.Right,
    className: '',
    disabled: false,
    submit: false,
    size: Sizes.Normal
  }
  public static IconPositions = IconPositions
  public static Sizes = Sizes
  public static Types = Types

  constructor (props: Readonly<ButtonProps>) {
    super(props)

    this.getClassBySize = this.getClassBySize.bind(this)
    this.getClassByType = this.getClassByType.bind(this)
    this.getClassByProperties = this.getClassByProperties.bind(this)
    this.getButtonType = this.getButtonType.bind(this)
    this.getContent = this.getContent.bind(this)
    this.triggerAction = this.triggerAction.bind(this)
  }

  protected getClassBySize (): string {
    switch (this.props.size) {
      case Sizes.Small:
        return 'ds-small'
      case Sizes.Normal:
        return ''
      case Sizes.Medium:
        return 'ds-medium'
      case Sizes.Large:
        return 'ds-large'
      default:
        return ''
    }
  }

  protected getClassByType (): string {
    switch (this.props.type) {
      case Types.Primary:
        return 'ds-primary'
      case Types.Secondary:
        return 'ds-secondary'
      case Types.Success:
        return 'ds-success'
      case Types.Warning:
        return 'ds-warning'
      case Types.Danger:
        return 'ds-danger'
      case Types.Info:
        return 'ds-info'
      default:
        return ''
    }
  }

  protected getButtonType (): 'submit' | 'button' {
    if (this.props.submit) {
      return 'submit'
    } else {
      return 'button'
    }
  }

  protected getClassByProperties (): string {
    let classNames = ''

    if (this.props.disabled) {
      classNames += 'ds-disabled '
    }
    if (this.props.inversed) {
      classNames += 'ds-inversed'
    }

    return classNames
  }

  protected getContent (): JSX.Element {
    if (this.props.iconPos === IconPositions.Left) {
      return (
        <React.Fragment>
          {this.generateIcon()}
          {this.generateLabel()}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {this.generateLabel()}
          {this.generateIcon()}
        </React.Fragment>
      )
    }
  }

  protected triggerAction (event: Object): void {
    if (!this.props.disabled && typeof this.props.click !== 'undefined') {
      this.props.click(event)
    }
  }

  private generateLabel(): JSX.Element | null {
    if (this.props.label !== 'undefined') {
      return <span className='ds-button-label'>{this.props.label}</span>
    }

    return null
  }

  private generateIcon(): JSX.Element | null {
    // @todo : Manage icon
    if (this.props.icon !== 'undefined') {
      return <span className='ds-button-icon'>{this.props.icon}</span>
    }

    return null
  }

  public render (): JSX.Element {
    return (
      <button
        className={`${this.props.className} ds-button ${this.getClassBySize()} ${this.getClassByType()} ${this.getClassByProperties()}`}
        onClick={this.triggerAction}
        type={this.getButtonType()}
      >
        {this.getContent()}
      </button>
    )
  }
}

export default Button
