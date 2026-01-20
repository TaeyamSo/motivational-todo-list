// import './App.css'
import './components/Header'
import Header from './components/Header'
import Todo from './components/Todo'
import Quotes from './components/Quotes'
import Streak from './components/Streak'
import Home from './pages/Home'
import Todopage from './pages/Todopage'

import { BrowserRouter, Routes, Route } from 'react-router';
function App() {

  return (
    <>
<BrowserRouter>
      <Header />
      <Routes>
        <Route path="/motivational-todo-list/" element={<Home />} />
        <Route path="/motivational-todo-list/todo" element={<Todopage />} />
      </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
