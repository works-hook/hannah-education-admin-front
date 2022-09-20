import React from "react";
import { Card, Row, Col, CardTitle, CardBody, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Button } from "react-bootstrap";
import Writer from "../Writer";

const modify = () => {
    window.location.href="/lectures"
    // TODO
}

const cancel = () => {
    window.location.href="/lectures"
    // TODO
}

const LectureModify = () => {
    return (<Row>
        <Col>
            <Card>
                <CardTitle tag="h3" className="border-bottom p-3 mb-0">
                    <i className="bi bi-arrows-move me-2"> </i>
                    강의 수정하기
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
                                value={"어쨋든 제목임"}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">소개글</Label>
                            <Writer />
                        </FormGroup>
                        <FormGroup>
                            <Label for="thumbnail">썸네일</Label>
                            <Input id="thumbnail" name="thumbnail" type="file" />
                            <FormText>Thumbnail 사진을 업로드 해주세요.</FormText>
                        </FormGroup>
                        <FormGroup>
                            {/* <DatePickerComponent /> */}
                        </FormGroup>
                        <Row>
                            <Col>
                                <Button variant="primary" onClick={ modify }>수정하기</Button>
                                <Button variant="outline-danger" className="mx-lg-3" onClick={ cancel }>취소</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </Row>);
};

export default LectureModify;
