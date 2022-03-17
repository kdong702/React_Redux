import React,{Component} from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";

class CounterContainer extends Component{
    handleIncrement = () =>{
        this.props.increment();
    };

    donghyun = () => {
        this.props.decrement();
    };

    render(){
        const {color, number}  = this.props;
        console.log({color , number});
        return(
            <Counter color = {color} value ={number} onIncrement={this.handleIncrement} onDecrement={this.donghyun}></Counter>
        );
    }
}

//{counter2 } 어디서 부른건가?
const mapStateToProps = ({counter2}) => ({
    color: counter2.color,
    number: counter2.number,
});

const mapDispatchToProps = dispatch => ({
    increment: () =>dispatch(increment()),
    decrement: () =>dispatch(decrement()),
});

// 액션생성 함수 방법 추가 2개
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ increment, decrement }, dispatch);  

// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
// const mapDispatchToProps = { increment, decrement };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterContainer);