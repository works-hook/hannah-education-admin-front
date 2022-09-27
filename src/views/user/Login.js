import {
    Button, ButtonGroup,
    Card,
    CardText,
    CardTitle,
    Container, Form, FormGroup, Input, Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../../assets/customStyle.css"

const Login = () => {
    return (<>
        <Container className="login-flex custom-container">
            <Card body className="custom-card">
                <CardTitle tag="h2" className="text-center">
                    Login
                </CardTitle>
                <CardText>
                    <Form>
                        <FormGroup>
                            <Label for="id">Id</Label>
                            <Input
                                className="mb-4"
                                id="id"
                                name="id"
                                type="text"
                                placeholder="Input your Id"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Input your Password"
                            />
                        </FormGroup>
                    </Form>
                </CardText>
                <Button color="primary" className="mb-3">
                    Submit
                </Button>
                <div className="d-flex justify-content-end">
                    <ButtonGroup>
                        <Link to="/signUp">
                            <Button color="link" size="sm">
                                Sign Up
                            </Button>
                        </Link>
                        <Link to="/findUser">
                            <Button color="link" size="sm">
                                Forget your Id/Password?
                            </Button>
                        </Link>
                    </ButtonGroup>
                </div>
            </Card>
        </Container>
    </>);
};

export default Login;
