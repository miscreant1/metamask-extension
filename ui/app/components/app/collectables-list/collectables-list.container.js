import { connect } from 'react-redux'
import CollectablesList from './collectables-list.component'

function mapStateToProps (state) {
  return {
    collectableContracts: state.metamask.collectibleContracts,
  }
}


export default connect(mapStateToProps)(CollectablesList)

