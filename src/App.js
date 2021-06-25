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

       
        <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: 'center'}}>
          <div style={{margin: "50px", border: "2px solid white", padding: "30px"}}>
            <h3>
              Counter Value = {counter}
            </h3>
            <input type = "text" placeholder="Counter change value" onChange ={(e) => {dispatch(setVal(e.target.value))}} style={{background: "none", color: "white", border: "solid 2px white", padding: "7px", fontSize:"16px", outline: "none"}}/><br /><br />
            <div>
              <button onClick={() => {dispatch(increment(value))}} style={{background: "none", borderRadius: "50%", height: "50px", width: "50px", color: "white", fontWeight: "bolder", fontSize: "25px", border: "2px solid white",  cursor: "pointer", margin: "10px"}}>+</button>
              <button onClick={() => {dispatch(decrement(value))}} style={{background: "none", borderRadius: "50%", height: "50px", width: "50px", color: "white", fontWeight: "bolder", fontSize: "25px", border: "2px solid white",  cursor: "pointer", margin: "10px"}}>-</button>
            </div>
          </div>
         
          <div style={{margin: "50px", border: "2px solid white", padding: "30px"}}>
          {loggedIn? 
            <><h3>Logged In</h3><button onClick={() => {dispatch(signin())}} style={{textDecoration: "none",color: "white", border: "2px solid white", padding: "7px", margin: "30px", background: "none",  cursor: "pointer"}}>Sign Out</button></> : 
            <><h3>Not Logged In</h3><button onClick={() => {dispatch(signin())}} style={{textDecoration: "none",color: "white", border: "2px solid white", padding: "7px", margin: "30px", background: "none",  cursor: "pointer"}}>Sign In</button></>
            }
          
          </div>
        </div>

      </header>
      
    </div>
  );
}

export default App;
