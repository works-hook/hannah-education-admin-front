import {
    Button, ButtonGroup,
    Card,
    CardText,
    CardTitle,
    Container, Form, FormGroup, Input, InputGroup, Label, UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as QuestionMark } from "../../assets/images/svg/questionMark.svg";
import "../../assets/customStyle.css"

const SignUp = () => {
    return (<>
        <Container className="login-flex custom-container">
            <Card body className="custom-card">
                <div>
                    <CardTitle tag="h2" className="text-center">
                        Sign Up
                    </CardTitle>
                    <div className="text-end pointer">
                        <QuestionMark id="tooltip" size="sm">
                            Click me
                        </QuestionMark>
                        <UncontrolledTooltip
                            placement="top"
                            target="tooltip"
                            trigger="click"
                        >
                            자세한 프로필 설정은 로그인 후 이용해주세요.
                        </UncontrolledTooltip>
                    </div>
                </div>
                <CardText>
                    <Form>
                        <FormGroup>
                            <Label for="id">Id</Label>
                            <InputGroup>
                                <Input
                                    id="id"
                                    name="id"
                                    type="text"
                                    placeholder="Input your Id"
                                />
                                <Button color="outline-secondary" size="sm">duplicate check</Button>
                            </InputGroup>
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
                        <FormGroup>
                            <Label for="checkPassword">Re-enter Password</Label>
                            <Input
                                id="checkPassword"
                                name="checkPassword"
                                type="password"
                                placeholder="Re-enter your Password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Input your Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Input your Email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phoneNumber">Phone Number</Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="Input your Phone Number"
                            />
                        </FormGroup>
                    </Form>
                </CardText>
                <Button color="primary" className="mb-3">
                    Submit
                </Button>
                <div className="d-flex justify-content-end">
                    <ButtonGroup>
                        <Link to="/login">
                            <Button color="link" size="sm">
                                Login
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

export default SignUp;
