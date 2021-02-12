import './App.css';
import {Provider} from 'react-redux';
import store from "./AppState/store";
import ScreenIncDec from "./Screens/ScreenIncDec";


function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <ScreenIncDec/>
        </div>
      </Provider>
  );
}

export default App;
