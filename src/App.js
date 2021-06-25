import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signin } from './actions';



function App() {
   
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <div className="App">
      
      <header className="App-header">
        
        <h1>Hello</h1>

        <h3>
          {counter}
        </h3>
        
        <div>
        <button onClick={() => {dispatch(increment())}}>+</button>
        <button onClick={() => {dispatch(decrement())}}>-</button>
        </div>
        {loggedIn? 
          <><h3>Logged In</h3><button onClick={() => {dispatch(signin())}}>Sign Out</button></> : 
          <><h3>Not Logged In</h3><button onClick={() => {dispatch(signin())}}>Sign In</button></>
          }
        

      </header>
      
    </div>
  );
}

export default App;
