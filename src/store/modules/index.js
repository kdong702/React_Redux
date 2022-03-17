import { combineReducers } from "redux";
import counter2 from "./counter";
import waiting2 from "./waiting";

export default combineReducers({
    counter2,
    waiting2,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
})

// {
//     counter: {
//       color: 'red',
//       number: 0,
//     },
//     // ... 다른 리듀서에서 사용하는 초깃값들
//   }