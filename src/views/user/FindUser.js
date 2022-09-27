import {
    Button, ButtonGroup,
    Card,
    CardText,
    CardTitle,
    Container, Form, FormGroup, Input, Label
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Timer from "../utils/Timer";
import AlertModal from "../utils/AlertModal";
import "../../assets/customStyle.css"

const FindUser = () => {
    const [idAlert, setIdAlert] = useState(false);
    const [timer, setTimer] = useState(false);

    const idToggle = () => setIdAlert(!idAlert);
    const timerStart = () => setTimer(true);

    return (<>
        <Container className="login-flex custom-container">
            <Card body className="custom-card">
                <div>
                    <CardTitle tag="h2" className="text-center">
                        Find Id
                    </CardTitle>
                </div>
                <CardText>
                    <Form>
                        <FormGroup>
                            <Label for="name">이름</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="이름을 입력해주세요."
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">메일</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="이메일을 입력해주세요."
                            />
                        </FormGroup>
                    </Form>
                </CardText>
                <Button color="primary" className="mb-3" onClick={ idToggle }>
                    아이디 찾기
                </Button>
                <AlertModal color="primary" message="회원님의 아이디는 cl******29입니다." isOpen={ idAlert } toggle={ idToggle }></AlertModal>
                <div>
                    <CardTitle tag="h2" className="text-center">
                        Find Password
                    </CardTitle>
                </div>
                <CardText>
                    <Form>
                        <FormGroup>
                            <Label for="id">아이디</Label>
                            <Input
                                className="mb-4"
                                id="id"
                                name="id"
                                type="text"
                                placeholder="아이디를 입력해주세요."
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">이메일</Label>
                            <Input
                                className="mb-4"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="이메일을 입력해주세요."
                            />
                        </FormGroup>
                        { timer && <div>
                            <FormGroup>
                                <div className="d-flex justify-content-between">
                                    <Label for="checkNumber">메일 인증 번호</Label>
                                    <Timer mm={ 5 } ss={ 0 } />
                                </div>
                                <Input
                                    id="checkNumber"
                                    name="checkNumber"
                                    className="text-sm"
                                    type="text"
                                    placeholder="메일 인증 번호를 입력해주세요."
                                />
                                </FormGroup>
                        </div>}
                    </Form>
                </CardText>
                <Button color="primary" className="mb-3" onClick={ timerStart }>
                    인증 메일 보내기
                </Button>
                <div className="d-flex justify-content-end">
                    <ButtonGroup>
                        <Link to="/login">
                            <Button color="link" size="sm">
                                Login
                            </Button>
                        </Link>
                        <Link to="/signUp">
                            <Button color="link" size="sm">
                                Sign Up
                            </Button>
                        </Link>
                    </ButtonGroup>
                </div>
            </Card>
        </Container>
    </>);
};

export default FindUser;
