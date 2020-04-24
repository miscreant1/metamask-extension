import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CollectableCell from '../collectable-cell'

class CollectablesList extends Component {
  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    collectableContracts: PropTypes.array.isRequired,
  }

  render () {
    const { collectableContracts } = this.props

    return (
      <div className="collectable__list">
        {collectableContracts.map((collectable, index) => {
          return (
            <CollectableCell
              key={index}
              {...collectable}
            />
          )
        })}
      </div>
    )
  }
}

export default CollectablesList
