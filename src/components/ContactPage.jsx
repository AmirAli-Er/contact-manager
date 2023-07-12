import { useState } from "react";
import AddContact from "./contacts/AddContact"
import ContactSection from "./contacts/ContactSection"
const ContactPage = ({contact, status, setStatus, setReload, setContact, showDeleteMessage, setShowDeleteMessage}) =>{
    const [lgShow, setLgShow] = useState(false);
    return(
        <>
            <AddContact setReload={setReload} status={status} setStatus={setStatus} show={lgShow} setShow={setLgShow} />
            <ContactSection showDeleteMessage={showDeleteMessage} setShowDeleteMessage={setShowDeleteMessage} setContact={setContact} ShowModul={setLgShow} contacts={contact} load={status}/>
        </>
    )
}
export default ContactPage