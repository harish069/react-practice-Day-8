import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Todos />
      <br/>
      <Form/>
    </div>
  );
}

export default App;
