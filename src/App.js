
import './App.scss';
import { Home, AddNote, EditNote, Notes, SingleNote } from "./pages/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/home' element={<Notes />} />
            <Route path='/add' element={<AddNote />}></Route>
            <Route path='/edit/:id' element={<EditNote />} ></Route>
            <Route path='/note/:id' element={<SingleNote />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
