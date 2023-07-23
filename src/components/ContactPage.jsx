import { useState } from "react";
import AddContact from "./contacts/AddContact"
import ContactSection from "./contacts/ContactSection"
const ContactPage = ({setReload}) =>{
    const [lgShow, setLgShow] = useState(false);
    return(
        <>
            <AddContact setReload={setReload} lgShow={lgShow} setLgShow={setLgShow} />
            <ContactSection setLgShow={setLgShow}/>
        </>
    )
}
export default ContactPage