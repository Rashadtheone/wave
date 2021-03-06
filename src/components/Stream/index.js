import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Stream from './presenter';
import * as actions from '../../actions'

function mapStateToProps(state) {
    const { user } = state.auth
    const tracks = state.track
    return {
        user,
        tracks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch)
    }
}
//binded action to help pass actions to the presenter component. 

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
