import {
    Button,
    Card,
    CardText,
    CardTitle,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import "../../assets/customStyle.css";

const Login = () => {
    return (<>
        <Container className="login-flex">
            <Card body>
                <CardTitle tag="h2" className="text-center">
                    Login
                </CardTitle>
                <CardText>
                    <Form>
                        <FormGroup>
                            <Label for="id">Id</Label>
                            <Input
                                id="id"
                                name="id"
                                placeholder="Input your Id."
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Input your Password."
                                type="password"
                            />
                        </FormGroup>
                    </Form>
                </CardText>
                <Button color="primary">
                    Submit
                </Button>
            </Card>
        </Container>
    </>);
};

export default Login;
