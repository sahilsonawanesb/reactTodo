import './App.css';
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="main-container">
      <div className="center-container">
      <TodoList/>
      <ToastContainer />
      </div>
     
    </div>
  );
}

export default App;
