import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>입장</button>
        <button onClick={onLeave}>나감</button>
      </div>
    </li>
  );
};

const WaitingList = ({input, waitingList,onChange,onSubmit,onEnter,onLeave}) =>{
  const waitingItem = waitingList.map(a =>(
    <WaitingItem key={a.id} text={a.name} entered={a.entered} id={a.id} onEnter={()=>onEnter(a.id)} onLeave ={()=>onLeave(a.id)}/>
  ));


  return (
    <div className="WaitingList">
      <h2>대기자 명단</h2>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}/>
        <button>등록</button>
      </form>
      <ul>
        {waitingItem}
      </ul>
    </div>
  );
};

export default WaitingList;
