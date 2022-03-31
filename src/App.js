/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Timer from './components/Timer';
import Form from './components/todo/Form';

function App() {
  return (
    <div className="App">
      <Timer />
      <Form />
    </div>
  );
}

export default App;
