import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { addConatct, getCategories } from '../../services/service';

const AddContact = ({show, setShow, status, setStatus, setReload}) =>{
    const [category, setCategory] = useState([])
    const [contact, setContact] = useState({
        sub:'',
        email:'',
        phoneNumber:'',
        address:'',
        job:'',
        image:'',
        category:''
    })
    useEffect(()=>{
        const fetch = async()=>{
            try{
                const {data} = await getCategories()
                setCategory(data)
            }catch(error){
                console.log(error.message)
            }
            
        }
        fetch()
    }, [])
    function createContact(e){
        setContact({
            ...contact,[e.target.name]:e.target.value
        })
        
    }
    const SubmitForm = async(e)=>{
        e.preventDefault()
        try{
            const {status:STATUS, data:DATA} = await addConatct(contact)
            if (STATUS===201){
                setShow(false)
                console.log(DATA)
                setContact({
                    sub:'',
                    email:'',
                    phoneNumber:'',
                    address:'',
                    job:'',
                    image:'',
                    category:''
                })
            }
        }catch(err){
            console.log(err.message)
        }
        setReload((i)=>{console.log(i);return i+1})

    }
    console.log(contact)
    return (
        <>
        <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                اضافه کردن مخاطب
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-light'>
                <ContactForm contact={contact} formHandler={SubmitForm} createContact={createContact} category={category}  setShow={setShow} status={status} setStatus={setStatus} />
            </Modal.Body>
        </Modal>
        </>
)}
export default AddContact