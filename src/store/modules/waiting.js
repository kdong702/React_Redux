import { createAction } from "redux-actions";

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

let id = 3;
export const changeInput = text => ({type: CHANGE_INPUT,payload:text});
export const create = text => ({type:CREATE, payload:text, id:id++});
export const enter = id => ({type:ENTER, payload:id});
export const leave = id => ({type:LEAVE, payload:id});

//2번째 createAction

// **** createAction 으로 액션 만들기
// import { createAction } from 'redux-actions';
// export const changeInput = createAction(CHANGE_INPUT, text => text);
// export const create = createAction(CREATE, text => text);
// export const enter = createAction(ENTER, id => id);
// export const leave = createAction(LEAVE, id => id);

// **** 초기 상태 정의
const initialState = {
    input: '',
    list: [
      {
        id: 0,
        name: '홍길동',
        entered: true,
      },
      {
        id: 1,
        name: '콩쥐',
        entered: false,
      },
      {
        id: 2,
        name: '팥쥐',
        entered: false,
      },
    ],
  };

export default function waiting(state = initialState,action){
    switch (action.type){
        case CHANGE_INPUT:
            return{
             ...state ,
             input: action.payload, 
            };
        case  CREATE:
            return{
                ...state,
                list: state.list.concat({
                    id: action.id,
                    name: action.payload,
                    entered: false,
                }),
            };
        case ENTER:
            return{
                ...state,
                list: state.list.map(
                    item =>
                    item.id === action.payload
                        ? { ...item, entered: !item.entered }
                        : item
                ),
            };
        case LEAVE :
            return{
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
            };
        default:
            return state;
        
    }
}