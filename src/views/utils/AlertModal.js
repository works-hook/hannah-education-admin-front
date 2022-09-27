import { Alert } from "reactstrap";

const AlertModal = (props) => {
    return <>
        <Alert color={ props.color } isOpen={ props.isOpen } toggle={ props.toggle }>
            <div>
                { props.message }
            </div>
        </Alert>
    </>;
}

export default AlertModal;
