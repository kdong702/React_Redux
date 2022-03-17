import React,{Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as waitingActions2 from '../store/modules/waiting';
import WaitingList from "../components/WaitingList";

class WaitingListContainer extends Component{
    // 인풋 변경 이벤트
    handleChange = e =>{
        const {WaitingActions} = this.props;
        WaitingActions.changeInput(e.target.value);
    };
    // 등록 이벤트
    handleSubmit = e => {
        e.preventDefault();
        const { WaitingActions, input2 } = this.props;
        console.log(WaitingActions,input2);
        WaitingActions.create(input2); // 등록
        WaitingActions.changeInput(''); // 인풋 값 초기화
    };
    // 입장
    handleEnter = id => {
        const { WaitingActions } = this.props;
        WaitingActions.enter(id);
    };
    // 나가기
    handleLeave = id => {
        const { WaitingActions } = this.props;
        WaitingActions.leave(id);
    };

    render() {
        const { input, list } = this.props;
        return (
          <WaitingList
            input={input}
            waitingList={list}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onEnter={this.handleEnter}
            onLeave={this.handleLeave}
          />
        );
      }
}
const mapStateToProps = ({ waiting2 }) => ({
    input2: waiting2.input,
    list: waiting2.list,
});

const mapDispatchToProps = dispatch => ({
    WaitingActions: bindActionCreators(waitingActions2, dispatch),
    // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingListContainer);
