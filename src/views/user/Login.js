import {
    Button, ButtonGroup,
    Card,
    CardText,
    CardTitle,
    Container, Form, FormGroup, Input, Label,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/customStyle.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/UserActions";
import {setRefreshToken} from "../../token/Cookies";
import {SET_TOKEN} from "../../token/Auth";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const onAccountHandler = (e) => setAccount(e.currentTarget.value);
    const onPasswordHandler = (e) => setPassword(e.currentTarget.value);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        let body = { account: account,  password: password }

        const response = await loginUser(body);

        if (response.success === 'LOGIN') {
            setRefreshToken(response.data.token)
            dispatch(SET_TOKEN(response.data.token))

            return navigate("/lectures")
        } else {
            alert(response.message)
        }
    }

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
                                id="account"
                                name="account"
                                type="text"
                                value={ account }
                                onChange={ onAccountHandler }
                                placeholder="Input your Id"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={ password }
                                onChange={ onPasswordHandler }
                                placeholder="Input your Password"
                            />
                        </FormGroup>
                    </Form>
                    <Button onClick={ onSubmitHandler } color="primary" className="mb-3 w-100p">
                        Submit
                    </Button>
                </CardText>
                <div className="d-flex justify-content-end">
                    <ButtonGroup>
                        <Link to="/signUp">
                            <Button color="link" size="sm">
                                Sign Up
                            </Button>
                        </Link>
                        {/*<Link to="/findUser">*/}
                        {/*    <Button color="link" size="sm">*/}
                        {/*        Forget your Id/Password?*/}
                        {/*    </Button>*/}
                        {/*</Link>*/}
                    </ButtonGroup>
                </div>
            </Card>
        </Container>
    </>);
};

export default Login;
