import { Alert } from "react-bootstrap"

const DeleteAleart = () =>{
    return(
        <div >
            <Alert style={{ position:'absolute',
            top:'10px', 
            right:'10px',
            width:'300px', 
            zIndex:'10',
            paddingBottom:'1px' 
            }}
            variant="danger"
            dismissible>
                <p>مخاطب با موفقیت حذف شد</p>
            </Alert>
        </div>
    )
}
export default DeleteAleart