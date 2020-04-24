import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Identicon from '../../ui/identicon'

export default class CollectableCell extends Component {
  static propTypes = {
    address: PropTypes.string,
    name: PropTypes.string,
    logo: PropTypes.string,
    collectables: PropTypes.array,
  }

  render () {
    const { collectables, address, logo, name } = this.props
    return (
      <div className={classnames('collectable-cell')}>
        <Identicon
          diameter={50}
          className="collectable-cell__identicon"
          address={address}
          image={logo}
        />
        <div className="collectable-cell__collectable-amount">
          {collectables.filter((collectable) =>
            collectable.address.toLowerCase() === address.toLowerCase()
          ).length || 0}
        </div>

        <div className="collectable-cell__collectable-name">{name}</div>
      </div>
    )
  }
}
