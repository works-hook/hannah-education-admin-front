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
import {useState} from "react";
import Timer from "../utils/Timer";
import {certificationCheck, certificationSend, checkAccountDuplicate, registerUser} from "../../actions/UserActions";

const SignUp = () => {
    const [timer, setTimer] = useState(false);
    const timerStart = () => setTimer(true);

    const [duplicate, setDuplicate] = useState(false);
    const [certification, setCertification] = useState(false);

    const [account, setAccount] = useState("");
    const onAccountHandler = (e) => setAccount(e.currentTarget.value);
    const [password, setPassword] = useState("");
    const onPasswordHandler = (e) => setPassword(e.currentTarget.value);
    const [checkPassword, setCheckPassword] = useState("");
    const onCheckPasswordHandler = (e) => setCheckPassword(e.currentTarget.value);
    const [name, setName] = useState("");
    const onNameHandler = (e) => setName(e.currentTarget.value);
    const [email, setEmail] = useState("");
    const onEmailHandler = (e) => setEmail(e.currentTarget.value);
    const [checkEmail, setCheckEmail] = useState("");
    const onCheckEmailHandler = (e) => setCheckEmail(e.currentTarget.value);
    const [phoneNumber, setPhoneNumber] = useState("");
    const onPhoneNumberHandler = (e) => setPhoneNumber(e.currentTarget.value);

    const getData = () => {
        return {
            account: account,
            password: password,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            userType: "TEACHER",
        }
    }

    const duplicateCheck = () => {
        const fetchData = async () => checkAccountDuplicate({account: account});
        fetchData().then(response => {
            if (response.code === "00002") { setDuplicate(true) }
            else { setDuplicate(false) }
            alert(response.message);
        });
    }

    const sendMail = () => {
        const fetchData = async () => certificationSend({email: email});
        fetchData().then(response => alert(response.message));
    }

    const checkMail = () => {
        const fetchData = async () => certificationCheck({certificationNumber: checkEmail});
        fetchData().then(response => {
            if (response.code === "20202") { setCertification(true) }
            else { setCertification(false) }
            alert(response.message);
        })
    }

    const register = () => {
        if (!duplicate) return alert("????????? ????????? ??????????????????.");
        if (!certification) return alert("????????? ????????? ??????????????????.");
        if (!(password === checkPassword)) return alert("??????????????? ?????? ??????????????? ???????????? ????????????.");

        const fetchData = async () => registerUser(getData());
        fetchData().then(response => alert(response.message));
    }

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
                            ????????? ????????? ????????? ????????? ??? ??????????????????.
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
                                    value={account}
                                    onChange={onAccountHandler}
                                    placeholder="Input your Id"
                                />
                                <Button
                                  color="outline-secondary"
                                  size="sm"
                                  onClick={duplicateCheck}
                                >
                                    duplicate check
                                </Button>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={onPasswordHandler}
                                placeholder="Input your Password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="checkPassword">Re-enter Password</Label>
                            <Input
                                id="checkPassword"
                                name="checkPassword"
                                type="password"
                                value={checkPassword}
                                onChange={onCheckPasswordHandler}
                                placeholder="Re-enter your Password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={onNameHandler}
                                placeholder="Input your Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <InputGroup>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={onEmailHandler}
                                    placeholder="Input your Email"
                                />
                                <Button onClick={() => {
                                    timerStart();
                                    sendMail();
                                }} size="sm">???????????? ??????</Button>
                            </InputGroup>
                        </FormGroup>
                        { timer && <div>
                            <FormGroup>
                                <div className="d-flex justify-content-between">
                                    <Label for="checkNumber">?????? ?????? ??????</Label>
                                    <Timer mm={ 5 } ss={ 0 } />
                                </div>
                                <InputGroup>
                                    <Input
                                      id="checkNumber"
                                      name="checkNumber"
                                      className="text-sm"
                                      type="text"
                                      value={checkEmail}
                                      onChange={onCheckEmailHandler}
                                      placeholder="?????? ?????? ????????? ??????????????????."
                                    />
                                    <Button onClick={() => {
                                        timerStart();
                                        checkMail();
                                    }} size="sm">???????????? ??????</Button>
                                </InputGroup>
                            </FormGroup>
                        </div>}
                        <FormGroup>
                            <Label for="phoneNumber">Phone Number</Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                value={phoneNumber}
                                onChange={onPhoneNumberHandler}
                                placeholder="Input your Phone Number"
                            />
                        </FormGroup>
                    </Form>
                </CardText>
                <Button color="primary" className="mb-3" onClick={register}>
                    Submit
                </Button>
                <div className="d-flex justify-content-end">
                    <ButtonGroup>
                        <Link to="/login">
                            <Button color="link" size="sm">
                                Login
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

export default SignUp;
