import './App.css';
import { Button } from 'react-bootstrap';
import NavbarHome from './components/NavbarHome';
import ContactSection from './components/contacts/ContactSection';
import { useEffect, useState } from 'react';
import {Routes, Route, Navigate, useSearchParams} from 'react-router-dom'
import ContactPage from './components/ContactPage';
import axios from 'axios'
import { getContacts } from './services/service';
import AddContact from './components/contacts/AddContact';
import ContactView from './components/contacts/ContactView';
import EditConatct from './components/contacts/EditContact';
import DeleteAleart from './components/contacts/DeleteAleart';
import ContactContext from './context/ContactContext';

function App() {
  const [loading, setStatus] = useState(false)
  const [getContact, setContact] = useState([])
  const [reload, setReload] = useState(0)
  const [showDeleteMessage, setShowDeleteMessage] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [params, setParams] = useSearchParams()
  const [searchURL, setSearchURL] = useState('')
  const [filteredUser, setFilteredUser] = useState([])
  const [nullFilter, setNullFilter] = useState(false)
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
  useEffect(()=>{
    const filtered_list = getContact.filter(item=>item.sub.startsWith(params.get('name')))
    if (filtered_list.length==0){
      setFilteredUser([])
      setNullFilter(true)
    }else{
      setFilteredUser(filtered_list)
    }
    
  }, [params])
  return (
    <div className="App">
      <ContactContext.Provider value={{
        loading,
        setContact,
        setStatus,
        getContact,
        setReload,
        showDeleteMessage,
        setShowDeleteMessage,
        searchText,
        setSearchText,
        searchURL,
        setSearchURL,
        params,
        setParams,
        setFilteredUser,
        filteredUser,
        nullFilter
        
      }}>
        <NavbarHome/>
        <h1 class="subject text-center">اپلیکیشن مدیریت مخاطبین</h1>
        {
          showDeleteMessage?
          <DeleteAleart  setShowDeleteMessage={setShowDeleteMessage} />: null
        }
        <Routes>
          <Route path='/' element={<Navigate to='/contacts'/>}/>
          <Route path='/contacts' element={<ContactPage setReload={setReload}  />}/>
          <Route path='/contacts/:userId' element={<ContactView />}/>
          <Route path='/contacts/:userId/edit' element={<EditConatct setReload={setReload} setStatus={setStatus} />}/>
          
          <Route path='/contacts/bookmark' element={ <p>sadf</p> }/>
        </Routes>
      </ContactContext.Provider>
    </div>
  );
}

export default App;
