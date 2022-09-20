import React from "react";
import { Card, Row, Col, CardTitle, CardBody, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Writer from "../Writer";

const save = () => {
    window.location.href="/lectures"
}

const cancel = () => {
    window.location.href="/lectures"
}

const LectureRegister = () => {

    return (<Row>
            <Col>
                <Card>
                    <CardTitle tag="h3" className="border-bottom p-3 mb-0">
                        <i className="bi bi-upload me-2"> </i>
                        강의 등록하기
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="title">제목</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="제목을 입력해주세요."
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="content">소개글</Label>
                                <Writer />
                            </FormGroup>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="startDate">
                                            시작 일자
                                        </Label>
                                        <Input
                                            id="startDate"
                                            name="startDate"
                                            type="date"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="startDate">
                                            종료 일자
                                        </Label>
                                        <Input
                                            id="startDate"
                                            name="startDate"
                                            type="date"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="thumbnail">썸네일</Label>
                                <Input id="thumbnail" name="thumbnail" type="file"/>
                                <FormText>Thumbnail 사진을 업로드 해주세요.</FormText>
                            </FormGroup>
                            <Container>
                                <Row className="d-flex">
                                    <Col>
                                        <Button variant="primary" onClick={ save }>저장하기</Button>
                                        <Button variant="outline-danger" className="mx-lg-3" onClick={ cancel }>취소</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>);
};

export default LectureRegister;
