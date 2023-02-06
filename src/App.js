import { useState } from 'react';
import './App.css';
import logo from './images/logo.png';
import BG from './images/BG.png';
import room from './images/02.jpg';
import image01 from './images/image_01.png';
import image02 from './images/image_02.png';
import image03 from './images/image_03.png';
import coopersIcon from './images/icone-coopers.png';
import tatiana from './images/tatiana.png';
import vector from './images/Vector.png';

function App() {
  // const [pendingList, setPendingList ] = useState(['a', 'b', 'c', 'd', 'e', 'f']);
  const [doneList, setDoneList ] = useState(['g', 'h', 'i', 'j', 'k', 'l']);
  const [pendingList, setPendingList ] = useState([
    { finished: false, task: 'a' },
    { finished: false, task: 'b' },
    { finished: false, task: 'c' },
    { finished: false, task: 'd' },
    { finished: false, task: 'e' },
  ]);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      const newTodoValue = event.target.value;
      console.log('Adding new todo: ', newTodoValue);
      
      const newTodoList = [...pendingList, { finished: false, task: newTodoValue }];
      setPendingList(newTodoList);
      event.target.value = '';

    }
  }

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
            <button className='todo-button' >
              <a href='#info-todo-content'>Go to To-do list</a>
            </button>
          </div>
          <div className='slide-content'>
            <img className='room-img' alt='room' src={room} />
            <img className='bg-img' src={BG} alt='Coopers logo background' />
          </div>
        </div>
        <div id='info-todo-content' className='info-todo-content'>
          <h3>To-do List</h3>
          <div className='line-div'></div>
          <p>Drag and drop to set your main priorities, check</p>
          <p>when done and create what's new.</p>
        </div>
        <div id='todo-content' className='todo-content'>
          <div className='list-pending'>
            <h3>To-Do</h3>
            <p>Take a breath.</p>
            <p>Start doing.</p>
            <div className='pending-items-list'>
              <ul>
                <li>
                  <input type="checkbox" name="" className='checkbox-newtodo'/>
                  <input type="text" name="new-todo" placeholder='this is a new task' onKeyDown={ (event) => ( handleKeyPress(event) ) } />
                </li>
                { 
                  pendingList.map((itemList, index) => (
                    <li key={index}>
                      <input type='checkbox' checked={ itemList.finished }/> {itemList.task}
                    </li>
                  ))
                }
              </ul>
              <input type='button' onClick={ () => { setPendingList([]) } } className='erase-all' value='erase all'/>
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
                { doneList.map((doneItem, index) => (
                  <li key={index}>
                    <input type='checkbox' /> {doneItem}
                  </li>
                ))}
              </ul>
              <input type='button' onClick={ () => { setDoneList([]) } } className='erase-all' value='erase all' />
            </div>
          </div>
        </div>
        <div className='good-things'>
          <div className='good-things-container'>
            <p className='p-title'>good things</p>
            <div className='cards-container'>
              <div className='card-infos'>
                <img src={image01} alt=''/>
                <img src={coopersIcon} className='coopers-icon' alt='coopers icon'/>
                <p className='function-p'>function</p>
                <div className='description-p'>Organize your daily job enhance your life performance</div>
                <p className='readmore'>read more</p>
              </div>
              <div className='card-infos'>
                <img src={image02} alt=''/>
                <img src={coopersIcon} className='coopers-icon' alt='coopers icon'/>
                <p className='function-p'>function</p>
                <div className='description-p'>Mark one activity as done makes your brain understands the power of doing.</div>
                <p className='readmore'>read more</p>
              </div>
              <div className='card-infos'>
                <img src={image03} alt=''/>
                <img src={coopersIcon} className='coopers-icon' alt='coopers icon'/>
                <p className='function-p'>function</p>
                <div className='description-p'>Careful with missunderstanding the difference between a list of things and a list of desires.</div>
                <p className='readmore'>leia mais</p>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-container'>
          <img className='contact-picture' src={tatiana} alt='tatiana' />
          <form className='contact-form'>
            <div className='contact-form-header'>
              <div className='detail-form'></div>
              <div className='form-header-icon'>
                <img src={vector} alt="vector form" />
              </div>
              <div>
                <p>GET IN</p>
                <b>TOUCH</b>
              </div>
            </div>
            <label htmlFor='name'>
              Your name
            </label>
            <input type='text' className='form-fields' name='name' placeholder='type your name here...' />
            <div className='personal-contact'>
              <label htmlFor='email'>
                Email*
                <input type='email' className='form-fields' name='email' placeholder='example@example.com' />
              </label>
              <label className='telephone' htmlFor='telephone'>
                Telephone*
                <input type='tel' className='form-fields' name='telephone' placeholder='(  ) ____-____'/>
              </label>
            </div>
            <label htmlFor='message'>
              Message*
            </label>
            <textarea type='text' className='message' name='message' placeholder='Type what you want to say to us'></textarea>
            <input type='button' className='send-button' name='send' value="SEND NOW" />
          </form>
        </div>
      </div>
      <div className='footer'>
        <p>Need help?</p>
        <a href='mailto:coopers@coopers.pro'>coopers@coopers.pro</a>
        <h5>© 2021 Coopers. All rights reserved.</h5>
        <div className='footer-bar'></div>
      </div>
    </div>
  );
}

export default App;
