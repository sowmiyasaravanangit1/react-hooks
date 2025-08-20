import './App.css';
import Form from './components /form';
import ParentComponent from './components /usecallback';
import FcUseEffect from './components /useeffect';
import FcUseRef from './components /useref';
import FcUseState from './components /usestate';
import FcUseMemo from './components /useMemo';
import Counter from './components /useReducer';
function App() {
  return (
    <div className="App">
       <FcUseRef />
      {/* <FcUseState /> */}
      {/* <Form /> */}
      {/* <FcUseEffect />  */}
      
      {/* < ParentComponent /> */}
      {/* <FcUseMemo /> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
