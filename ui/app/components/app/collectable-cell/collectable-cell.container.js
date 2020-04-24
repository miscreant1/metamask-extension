import { connect } from 'react-redux'
import CollectableCell from './collectables-cell.component'

function mapStateToProps (state) {
  return {
    collectables: state.metamask.collectibles,
  }
}

export default connect(mapStateToProps)(CollectableCell)
