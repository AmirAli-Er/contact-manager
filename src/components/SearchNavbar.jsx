import { useContext } from "react"
import { Button, Form } from "react-bootstrap"
import ContactContext from "../context/ContactContext"
import { useSearchParams } from "react-router-dom"


const SearchNavbar = () => {
    const {searchText,setSearchText,searchURL,setSearchURL, params, setParams, setFilteredUser} = useContext(ContactContext)
    
    return(
        <>
            <Form className="d-flex ">
                <Form.Control
                onChange={(e)=>setSearchText(e.target.value)}
                type="search"
                value={''||searchText}
                placeholder="جست و جوی مخاطبین"
                className="me-2 display-1"
                aria-label="Search"
                />
                <Button onClick={()=>{if(searchText){
                    setParams({name:searchText})
                    }else{
                    setFilteredUser([])
                    setParams()}}} className='btn-font' variant="outline-success">بجو</Button>
            </Form>
        </>
    )
}
export default SearchNavbar