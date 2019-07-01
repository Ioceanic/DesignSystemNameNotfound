import React, { Component } from 'react'
import {
    findIconDefinition,
    IconDefinition,
    IconLookup,
    IconName,
    IconPrefix,
    library
} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Styles } from '../constants/enum'

library.add(fab, far, fas)

interface IconProps {
    className?: string
    name: IconName
    style?: Styles
}

class Icon extends Component<IconProps> {
    public static defaultProps = {
        className: '',
        style: Styles.Solid
    }

    constructor (props: Readonly<IconProps>) {
        super(props)

        this.getIconDefinition = this.getIconDefinition.bind(this)
        this.getIconPrefix = this.getIconPrefix.bind(this)
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

    public render (): JSX.Element {
        return (
            <FontAwesomeIcon
                className={`${this.props.className}`}
                icon={this.getIconDefinition()}
            />
        )
    }
}

export default Icon
