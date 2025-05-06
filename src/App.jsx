import  React  from 'react';

import  AddTodos  from './components/AddTodos.jsx';
import  Todos  from './components/Todos.jsx';

function App() {
  

  return (
    <div className="w-screen h-screen ">
      <AddTodos />
      <Todos />
    </div>
  )
}

export default App
