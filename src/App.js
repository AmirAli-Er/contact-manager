import './App.css';
import { Button } from 'react-bootstrap';
import NavbarHome from './components/NavbarHome';
import ContactSection from './components/contacts/ContactSection';
import { useEffect, useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import ContactPage from './components/ContactPage';
import axios from 'axios'
import { getContacts } from './services/service';
import AddContact from './components/contacts/AddContact';
import ContactView from './components/contacts/ContactView';
import EditConatct from './components/contacts/EditContact';
import DeleteAleart from './components/contacts/DeleteAleart';

function App() {
  const [loading, setStatus] = useState(false)
  const [getContact, setContact] = useState()
  const [reload, setReload] = useState(0)
  const [showDeleteMessage, setShowDeleteMessage] = useState(false)
  useEffect(()=>{
    const data = async ()=>{
      try{
        setStatus(true)
        const jsonData = await getContacts()
        setContact(jsonData.data)
        setStatus(false)
      }catch(error){
        console.log(error.message)
      }
    }
    data()
  }, [,reload])
  return (
    <div className="App">
      <NavbarHome/>
      <h1 class="subject text-center">اپلیکیشن مدیریت مخاطبین</h1>
      {
        showDeleteMessage?
        <DeleteAleart  />: null
      }
      <Routes>
        <Route path='/' element={<Navigate to='/contacts'/>}/>
        <Route path='/contacts' element={<ContactPage showDeleteMessage={showDeleteMessage} setShowDeleteMessage={setShowDeleteMessage} setContact={setContact} setStatus={setStatus} setReload={setReload} contact={getContact} status={loading} />}/>
        <Route path='/contacts/:userId' element={<ContactView loading={loading} setStatus={setStatus}/>}/>
        <Route path='/contacts/:userId/edit' element={<EditConatct setReload={setReload} loading={loading} setStatus={setStatus} />}/>
        
        <Route path='/contacts/bookmark' element={ <p>sadf</p> }/>
      </Routes>
      
    </div>
  );
}

export default App;
