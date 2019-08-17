import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators as tomatoAction } from "../../reducer";
import Timer from './presenter';

function mapStateToProps(state){
    const { isPlaying, elapseTime, timerDuration} = state;
    return {
        isPlaying,
        elapseTime,
        timerDuration
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoAction.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoAction.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoAction.addSecond, dispatch )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);