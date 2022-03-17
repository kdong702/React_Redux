// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수 정의

export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () =>({type: INCREMENT });
export const decrement = () =>({type: DECREMENT });

//export쓰는 이유: 나중에 호출할꺼다.

// export const changeColor2= function(color){
//     return {
//         type: CHANGE_COLOR,
//         color
//     }
// } ********************************************* payload 생략?

// **** 초기상태 정의
const initialState = {
    color: 'red',
    number: 0,
  };

  //*****************************number: 0 ,  ,는 왜있는거지 ?????????

// 리듀서 작성
export default function counter(state = initialState, action){
    switch (action.type){
        case CHANGE_COLOR:
            return {
                ...state,
                color:action.color,
            };
        case INCREMENT:
            return {
                ...state,
                number:state.number + 1,
            };
        case DECREMENT:
            return {
                ...state,
                number:state.number -1,
            };
        default:
            return state;
        }
}

//export default 차이

