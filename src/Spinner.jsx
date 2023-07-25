import { Spinner } from "react-bootstrap"
const SpinnerPage = () =>{
    return(
        <Spinner style={{ position:'absolute', top:'40%', right:'50%', width:'50px', height:'50px', marginRight:'-50px' }} animation="border" variant={'white'}  />
    )
}
export default SpinnerPage