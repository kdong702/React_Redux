import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import  {changeColor}  from '../store/modules/counter';

class PaletteContainer extends Component{
    handleSelect2 = color =>{
        const {changeColor} = this.props;
        console.log(color);
        changeColor(color);
    };
//handleSelect 이름 저거여야해?

    render () {
        const {color} = this.props;
        return (
            <Palette onSelect ={this.handleSelect2} selected={color}></Palette>
        );
    }
}
// props 로 넣어줄 스토어 상태값 프롭스에서 비교하는거 아닌가?
const mapStateToProps = state => ({
    color: state.counter2.color,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    changeColor: color => dispatch(changeColor(color)),
});


// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteContainer);
