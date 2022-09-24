import {Card, CardBody, CardTitle, Container} from "reactstrap";

const Login = () => {
    return (<Container>
        <Card>
            <CardBody>
                <CardTitle className="p-2 w-100" tag="h3">{ "강의별 수강생 관리" }</CardTitle>
            </CardBody>
        </Card>
    </Container>);
};

export default Login;
