import React from 'react'
import { IconPositions, Sizes, Types } from '../constants/enum'
import Icon from '../atoms/Icon'

/**
 * Interface which defines the props of a Button
 */
interface ButtonProps {
  /** The type of button */
  type: Types,
  /** The classname to set to the button. Optionnal */
  className?: string,
  /** The event to trigger on a click. Optionnal */
  click?: (event: Object) => void,
  /** Defines if the button is disabled or not. Optionnal */
  disabled?: boolean,
  /** The icon to set next to the text. Should be an component of type 'Icon'. Optionnal */
  icon?: JSX.Element,
  /** The position of the icon if set. Optionnal */
  iconPos?: IconPositions,
  /** The text in the button. Optionnal */
  label?: string,
  /** Doesn't set the background as the color but the border and the text. Optionnal */
  inversed?: boolean,
  /** Defines the type of the button as a submit button (for the forms). Optionnal */
  submit?: boolean,
  /** Defines the size of the button. Optionnal */
  size?: Sizes
}

/**
 * The molecule which represents a button
 * ```tsx
 * <Button type={Button.Types.Primary} label="Primary"></Button>
 * ```
 */
class Button extends React.Component<ButtonProps> {
  /**
   * The default props of the button element
   */
  public static defaultProps = {
    label: '',
    icon: null,
    iconPos: IconPositions.Right,
    className: '',
    disabled: false,
    submit: false,
    size: Sizes.Normal
  }

  /**
   * The icon positions enum to help for the 'iconPos' prop
   * ```ts
   * Button.IconPositions.Right
   * ```
   */
  public static IconPositions = IconPositions
  /**
   * The size enum to help for the 'size' prop
   * ```ts
   * Button.Sizes.Normal
   * ```
   */
  public static Sizes = Sizes
  /**
   * The type enum to help for the 'type' prop
   * ```ts
   * Button.Types.Primary
   * ```
   */
  public static Types = Types

  /**
   * The constructor of the button component. It will check if the icon is of type Icon and bind helper methods
   */
  constructor (props: Readonly<ButtonProps>) {
    super(props)

    if (this.props.icon && this.props.icon.type !== Icon) {
      throw new Error('Invalid prop passed. Make sure that an instance of Icon is passed through the nested prop')
    }
    this.getClassBySize = this.getClassBySize.bind(this)
    this.getClassByType = this.getClassByType.bind(this)
    this.getClassByProperties = this.getClassByProperties.bind(this)
    this.getButtonType = this.getButtonType.bind(this)
    this.getContent = this.getContent.bind(this)
    this.triggerAction = this.triggerAction.bind(this)
  }

  /**
   * Get the className of the size depending the 'size' prop
   * 
   * @returns The classname for the configured size
   */
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

  /**
   * Get the className of the size depending the 'type' prop
   * 
   * @returns The classname for the configured type
   */
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

  /**
   * Get the html button type depending the 'submit' prop
   * 
   * @returns The type of button
   */
  protected getButtonType (): 'submit' | 'button' {
    if (this.props.submit) {
      return 'submit'
    } else {
      return 'button'
    }
  }

  /**
   * Get some classNames depending on the props 'disabled' and 'inversed'
   * 
   * @returns The classNames to append to the full className
   */
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

  /**
   * The content to put in the button. Include the text and the icon (if set)
   * 
   * @returns The content of the button
   */
  protected getContent (): JSX.Element {
    if (this.props.iconPos === IconPositions.Left) {
      return (
        <React.Fragment>
          {this.props.icon}
          {this.generateLabel()}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {this.generateLabel()}
          {this.props.icon}
        </React.Fragment>
      )
    }
  }

  /**
   * Trigger the method pass as the 'click' prop if the button is not disabled
   * 
   * @param event The event triggered on a click
   */
  protected triggerAction (event: Object): void {
    if (!this.props.disabled && typeof this.props.click !== 'undefined') {
      this.props.click(event)
    }
  }

  /**
   * Generate the label content based on the 'label' prop
   * 
   * @returns Return the text content of the button
   */
  private generateLabel(): JSX.Element | null {
    if (this.props.label !== 'undefined') {
      return <span className='ds-button-label'>{this.props.label}</span>
    }

    return null
  }

  /**
   * The render method of the react component
   * 
   * @returns The button component
   */
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
