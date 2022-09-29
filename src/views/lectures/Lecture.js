import {Alert, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row, Table} from "reactstrap";
import Writer from "../utils/Writer";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClassModal from "./ClassModal";

const modify = () => {
    // TODO
}

const cancel = () => {
    // TODO
}

const tableData = [
    {
        title: "java 자료형",
        classDate: "2022-01-03 13:00"
    },
    {
        title: "java 클래스",
        classDate: "2022-01-03 13:00"
    },
    {
        title: "java 추상화",
        classDate: "2022-01-03 13:00"
    },
    {
        title: "java 인터페이스",
        classDate: "2022-01-03 13:00"
    },
];

const LectureClass = (props) => {
    const lectureId = useParams();
    const isRegistered = props.isRegistered

    const [modal, setModal] = useState(false);
    const [isModify, setIsModify] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h3" className="border-bottom p-3 mb-0">
                            <i className="bi bi-clipboard me-2"> </i>
                            강의 { isRegistered ? "등록" : "수정" }하기
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
                                                value="2022-09-01"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="endDate">
                                                종료 일자
                                            </Label>
                                            <Input
                                                id="endDate"
                                                name="endDate"
                                                type="date"
                                                value="2022-12-01"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="thumbnail">썸네일</Label>
                                    <Input id="thumbnail" name="thumbnail" type="file" />
                                </FormGroup>
                                <Row>
                                    <Col>
                                        <Button variant="primary" onClick={ modify }>
                                            { isRegistered ? "등록" : "수정" }하기
                                        </Button>
                                        { !isRegistered && (
                                            <Link to="/lectures">
                                                <Button variant="danger" className="mx-lg-3" onClick={ modify }>
                                                    삭제하기
                                                </Button>
                                            </Link>
                                        ) }
                                        <Link to="/lectures">
                                            <Button variant="outline-secondary" className="mx-lg-1" onClick={ cancel }>
                                                취소
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Container>
                            <Row className="d-flex">
                                <Col>
                                    <CardTitle tag="h3" className="border-bottom p-3 mb-0">
                                        <i className="bi bi-textarea-resize me-2"> </i>
                                        수업 관리하기
                                    </CardTitle>
                                </Col>
                                { !isRegistered && (
                                    <Col className="d-flex flex-row-reverse align-items-center">
                                        <Button variant="secondary" onClick={ () => { toggle(); setIsModify(false); } }>
                                            수업 등록
                                        </Button>
                                    </Col>
                                ) }
                            </Row>
                        </Container>
                        <CardBody>
                            { isRegistered
                                ? <Alert color="primary">
                                        수업 관리는 강의를 등록하신 뒤에 사용하실 수 있습니다.
                                    </Alert>
                                : <>
                                    <Table className="no-wrap mt-3 align-middle" responsive borderless>
                                        <thead>
                                        <tr>
                                            <td>No</td>
                                            <th>제목</th>
                                            <th>Period</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tableData.map((tdata, index) => (
                                            <tr key={ index } className="border-top">
                                                <td>{ index + 1 }</td>
                                                <td>{ tdata.title }</td>
                                                <td>{ tdata.classDate }</td>
                                                <td className="d-flex justify-content-sm-end px-lg-5">
                                                    <Button variant="outline-primary" size="sm" onClick={ () => { toggle(); setIsModify(true); } }>
                                                        <i className="bi bi-pencil me-2"> </i>
                                                        수정
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                    <ClassModal toggle={ toggle } modal={ modal } isModify={ isModify } lectureId={ lectureId } />
                                </>
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default LectureClass;
