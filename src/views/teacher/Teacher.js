import {
    Button,
    Card, CardBody,
    CardTitle, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row,
} from "reactstrap";
import user from "../../assets/images/users/user4.jpg";
import "../../assets/customStyle.css";

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { Link } from "react-router-dom";
import Writer from "../utils/Writer";


const myData = {
    id: "hannahTeacher",
    name: "Hannah",
    brith: '2003-03-29',
    gender: "Female",
    phoneNumber: "010-1234-1234",
    email: "ghdcoalss33@gmail.com",
    profileImg: user,
    introduce: `<h3>안녕하세요 학생과 함께 성장하는 강사 Hannah입니다.</h3><div contenteditable="false"><hr></div><ul><li><p><span style="color: #a1b56c">경력</span></p><ul><li><p>삼성 product service backend developer (3년)</p></li><li><p>당근마켓 결재 서비스 backend developer (재직중)</p></li></ul></li><li><p><span style="color: #ba8baf">skill set</span></p><ul><li><p>language : java, kotlin, javascript</p></li><li><p>framework : spring, react, vue</p></li></ul></li></ul><p>github <a>https://github.com/HongChaeMin</a></p><br><br><div data-language="kotlin" class="toastui-editor-ww-code-block-highlighting"><pre class="language-kotlin"><code data-language="kotlin" class="language-kotlin">val name: String = 'Hannah'</code></pre></div><p><span style="color: #ab4642">코드 스타일이 적용이 안돼여ㅠ</span></p>`,
}

const Teacher = (props) => {
    return (<>
        <Card>
            <CardBody>
                <CardTitle className="p-2 w-100" tag="h3">
                    My Page
                </CardTitle>
                <div className="profile-box">
                    <div>
                        <img
                            src={ myData.profileImg }
                            alt="profile"
                            className="rounded-circle"
                            width="200"
                        />
                        <div className="d-flex mt-4 justify-content-center">
                            { !props.isModify
                                ? <Link to="/teacher/modify">
                                    <Button color="outline-secondary">수정하기</Button>
                                </Link>
                                : <Form>
                                    <FormGroup>
                                        <Label for="profileImage">Upload Profile Image</Label>
                                        <Input
                                            id="profileImage"
                                            name="profileImage"
                                            type="file"
                                            size="sm"
                                        />
                                    </FormGroup>
                                </Form>
                            }
                        </div>
                    </div>
                    { !props.isModify
                        ? <>
                            <div>
                                <Col>
                                    <h5>Id</h5>
                                    <h6>{ myData.id }</h6>
                                </Col>
                                <Col>
                                    <h5>Name</h5>
                                    <h6>{ myData.name }</h6>
                                </Col>
                                <Col>
                                    <h5>Brith</h5>
                                    <h6>{ myData.brith }</h6>
                                </Col>
                                <Col>
                                    <h5>Phone Number</h5>
                                    <h6>{ myData.phoneNumber}</h6>
                                </Col>
                                <Col>
                                    <h5>Email</h5>
                                    <h6>{ myData.email }</h6>
                                </Col>
                            </div>
                            <div className="mx-5">
                                <h5>Introduce</h5>
                                <Viewer initialValue={ myData.introduce } />
                            </div>
                        </>
                        : <>
                            <div>
                                <Row>
                                    <Col>
                                        <h5>Id</h5>
                                        <InputGroup>
                                            <Input id="id" name="name" value={ myData.id } />
                                            <Button>
                                                변경하기
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <h5>Password</h5>
                                        <InputGroup>
                                            <Input id="password" name="password" type="password" />
                                            <Button>
                                                변경하기
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5>Name</h5>
                                        <Input id="name" name="name" value={ myData.name }></Input>
                                    </Col>
                                    <Col>
                                        <h5>Brith</h5>
                                        <Input id="name" name="name" type="date" value={ myData.brith }></Input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5>Phone Number</h5>
                                        <Input id="name" name="name" value={ myData.phoneNumber }></Input>
                                    </Col>
                                    <Col>
                                        <h5>Email</h5>
                                        <Input id="name" name="name" value={ myData.email }></Input>
                                    </Col>
                                </Row>
                                <Col className="introduce">
                                    <h5>Introduce</h5>
                                    <Writer value={ myData.introduce } />
                                </Col>
                                <div className="d-flex justify-content-end mx-4">
                                    <Link to="/teacher">
                                        <Button color="secondary">저장하기</Button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </CardBody>
        </Card>
    </>);
};

export default Teacher;
