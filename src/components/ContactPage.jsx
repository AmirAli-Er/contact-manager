import { useState } from "react";
import AddContact from "./contacts/AddContact"
import ContactSection from "./contacts/ContactSection"
const ContactPage = ({setReload, contactsNumber}) =>{
    const [lgShow, setLgShow] = useState(false);
    return(
        <>
            <AddContact setReload={setReload} lgShow={lgShow} setLgShow={setLgShow} />
            
            <ContactSection setLgShow={setLgShow}/>
            {
                contactsNumber==0?<h1 className="text-light text-center mt-5">یک مخاطب ایجاد کنید !!!</h1>:null
            }
        </>
    )
}
export default ContactPage