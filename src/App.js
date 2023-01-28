import './App.css';
import logo from './images/logo.png';
import BG from './images/BG.png';
import room from './images/02.jpg';
import { useState } from 'react';

function App() {
  const [pendingList, setPendingList ] = useState(['a', 'b', 'c', 'd', 'e', 'f']);
  const [doneList, setDoneList ] = useState(['g', 'h', 'i', 'j', 'k', 'l']);

  return (
    <div className="App">
      <div className='header'>
        <div className='logo-content'>
          <div className='logo'>
            <img src={logo} alt='coopers green logo'></img>
          </div>
          <div className='logo-text'>
            <b>coopers</b>
          </div>
        </div>
        <div className='signin-button'>
          entrar
        </div>
      </div>
      <div className='content'>
        <div className='welcome-content'>
          <div className='text-contents'>
            <p className='text-one'>Organize</p>
            <p className='text-two'>your daily jobs</p>
            <p className='text-three'>The only way to get things done</p>
            <button className='todo-button' >Go to To-do list</button>
          </div>
          <div className='slide-content'>
            <img className='room-img' alt='room' src={room} />
            <img className='bg-img' src={BG} alt='Coopers logo background' />
          </div>
        </div>
        <div className='info-todo-content'>
          <h3>To-do List</h3>
          <div className='line-div'></div>
          <p>Drag and drop to set your main priorities, check</p>
          <p>when done and create what's new.</p>
        </div>
        <div className='todo-content'>
          <div className='list-pending'>
            <h3>To-Do</h3>
            <p>Take a breath.</p>
            <p>Start doing.</p>
            <div className='pending-items-list'>
              <ul>
                { pendingList.map((pendingItem, index) => (<li key={index}>{pendingItem}</li>))}
              </ul>
              <input type='button' onClick={ () => { setPendingList([]) } } value='Erase All'/>
            </div>
          </div>
          <div className='list-done'>
            <h3>Done</h3>
            {
              doneList.length > 0
              &&
              <div>
                <p>Congratulations!</p>
                <p>You have done {doneList.length} tasks</p>
              </div>
            }
            {
              doneList.length === 0
              &&
              <div>
                <p>Not finished tasks</p>
              </div>
            }
            <div className='done-items-list'>
              <ul>
                { doneList.map((doneItem, index) => (<li key={index}>{doneItem}</li>))}
              </ul>
              <input type='button' onClick={ () => { setDoneList([]) } } value='Erase All' />
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
