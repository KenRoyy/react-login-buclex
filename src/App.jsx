import React from 'react';
import  {Button, Container, Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './css/App.css';
import {Route,Routes,Link} from 'react-router-dom';
import SingUp from './singUp';
import Formulario from './components/Formulario';

function Navegacion(){
  return(
    <Navbar bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{fontSize: '2rem'}}>BUCLEX</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link style={{fontSize: '1.5rem'}}>Home</Nav.Link>
          <Nav.Link><Link style={{fontSize: '1.5rem'}} to='/Login'>Login</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '100%'}}>

      <Navegacion/>
      
      <Routes>
        <Route path='/Login' element={<Formulario/>}/>
        <Route path='/SingUp' element={<SingUp/>}/>
      </Routes>
      
      <div>
        {/* <h1 style={{marginTop: '3rem', fontSize: '2.3rem' }}>Welcome to buclex software</h1> */}
      </div>

   </div>
  )
}

export default App;