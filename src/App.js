// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact } from './components/contacts/Contact';
import { Navbar } from './components/Navbar';
import store from './store';
import { AddContact } from './components/contacts/AddContact';
import { EditContact } from './components/contacts/EditContact';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='py-3'>  
          <Routes>
          <Route exact path='/' element={<Contact/>}/>
          <Route exact path='/contacts/add' element={<AddContact/>}/>
          <Route exact path='/contacts/edit/:id' element={<EditContact/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
    </Provider>
  ); 
}

export default App;
