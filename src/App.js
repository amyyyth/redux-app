import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signin, setVal } from './actions';



function App() {
   
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  const value = useSelector(state => state.value)

  return (
    <div className="App">
      
      <header className="App-header">
        
        <h1>Counter and Log In</h1>

        <h3>
          Counter Value = {counter}
        </h3>
        <div>
          <input type = "text" placeholder="Counter change value" onChange ={(e) => {dispatch(setVal(e.target.value))}} /><br /><br />
        </div>
        <div>
        <button onClick={() => {dispatch(increment(value))}}>+</button>
        <button onClick={() => {dispatch(decrement(value))}}>-</button>
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
