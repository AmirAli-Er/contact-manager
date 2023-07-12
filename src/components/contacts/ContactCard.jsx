import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { deleteConatct } from '../../services/service';
import { Link, useNavigate } from 'react-router-dom';
const ContactCard = ({sub, phoneNumber, address, email, id, setContact, contact, image, showDeleteMessage, setShowDeleteMessage}) =>{
    const navigate = useNavigate()
    return(
        <Card >
            <Card.Img variant="top" height={'250px'} src={image} />
            <Card.Body>
                <Card.Title>{sub}</Card.Title>
                <Card.Text className='pb-3 text-truncate' style={{borderBottom:'0.5px solid gray'}}>
                    <span>شماره</span> : <span>{phoneNumber}</span> <br/>
                    <span>ایمیل</span> : <span>{email}</span> <br/>
                    <span>آدرس</span> : <span className=''>{address}</span> <br/>
                </Card.Text>
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={()=>{
                                deleteConatct(id)
                                const contactsFiltered = contact.filter(item=>item.id!==id)
                                setContact(contactsFiltered)
                                setShowDeleteMessage(true)
                                }} variant="danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>navigate(`${id}/edit/`)} variant="warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                </svg>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                </svg>
                            </Button>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}  >
                            <Link style={{ textDecoration:'none' }} to={`/contacts/${id}/`} className='d-grid mt-3'>
                                <Button  variant={'dark'}>
                                    بازدید
                                </Button>
                            </Link>
                            
                        </Col>
                    </Row>
                </Container>
                
            </Card.Body>
        </Card>
    )
}
export default ContactCard