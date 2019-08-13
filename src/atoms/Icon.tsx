import React, { Component } from 'react'
import {
    findIconDefinition,
    IconDefinition,
    IconLookup,
    IconName,
    IconPrefix,
    SizeProp,
    library
} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconSizes, Styles } from '../constants/enum'

library.add(fab, far, fas)

interface IconProps {
    className?: string
    name: IconName
    size?: IconSizes
    style?: Styles
}

class Icon extends Component<IconProps> {
    public static defaultProps = {
        className: '',
        size: '',
        style: Styles.Solid
    }

    constructor (props: Readonly<IconProps>) {
        super(props)

        this.getIconDefinition = this.getIconDefinition.bind(this)
    }

    protected getIconDefinition (): IconDefinition {
        const coffeeLookup: IconLookup = {
            prefix: this.getIconPrefix(),
            iconName: this.props.name
        }

        return findIconDefinition(coffeeLookup)
    }

    protected getIconPrefix (): IconPrefix {
        switch (this.props.style) {
            case Styles.Brands:
                return 'fab'
            case Styles.Light:
                return 'fal'
            case Styles.Regular:
                return 'far'
            case Styles.Solid:
                return 'fas'
            default:
                return 'fas'
        }
    }

    protected getIconSize (): SizeProp {
        switch (this.props.size) {
            case IconSizes.Xs:
                return 'xs'
            case IconSizes.Sm:
                return 'sm'
            case IconSizes.Lg:
                return 'lg'
            case IconSizes.OneTime:
                return '1x'
            case IconSizes.TwoTimes:
                return '2x'
            case IconSizes.ThreeTimes:
                return '3x'
            case IconSizes.FourTimes:
                return '4x'
            case IconSizes.FiveTimes:
                return '5x'
            case IconSizes.SixTimes:
                return '6x'
            case IconSizes.SevenTimes:
                return '7x'
            case IconSizes.HeightTimes:
                return '8x'
            case IconSizes.NineTimes:
                return '9x'
            case IconSizes.TenTimes:
                return '10x'
            default:
                return '1x'
        }
    }

    public render (): JSX.Element {
        return (
            <FontAwesomeIcon
                className={`${this.props.className}`}
                icon={this.getIconDefinition()}
                size={this.getIconSize()}
            />
        )
    }
}

export default Icon
