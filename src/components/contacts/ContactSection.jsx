import { Button, Col, Row, Container } from "react-bootstrap"
import ContactCard from "./ContactCard"
import SpinnerPage from "../../Spinner"
import { Link, Outlet } from "react-router-dom"
const ContactSection = ({contacts, load, ShowModul, setContact, showDeleteMessage, setShowDeleteMessage})=>{
    return(
        <>
            <div className="d-grid ">
                
                <Button onClick={()=>ShowModul(true)}  className="mx-5 mt-3" variant="primary" size="md">
                    +
                </Button>
                
                {
                    load ? <SpinnerPage/> :(
                        <section className="mx-5 mt-3">
                            <Container fluid='1rem'>
                                <Row xs='1' sm='2' md='3' lg='4'  >
                                {
                                    contacts.map(item=><Col className='mt-5'><ContactCard showDeleteMessage={showDeleteMessage} setShowDeleteMessage={setShowDeleteMessage} contact={contacts} setContact={setContact} id={item.id} sub={item.sub} phoneNumber={item.phoneNumber} email={item.email} address={item.address} image={item.image} /></Col>)
                                }
                                </Row>
                            </Container>
                        </section>
                    )
                }
            
            </div>
        </>
    )
}
export default ContactSection