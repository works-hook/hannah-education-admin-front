import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Alert,
    Card,
    CardBody,
    CardHeader, CardText,
    CardTitle,
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Row,
    Table, Toast, ToastBody, ToastHeader
} from "reactstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

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

const Student = () => {
    const [open, setOpen] = useState('');
    const classToggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };


    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h3" className="d-flex justify-content-between border-bottom p-3 mb-0">
                            <div>
                                <i className="bi bi-clipboard me-2"> </i>
                                강의 정보
                            </div>
                            <div>
                                <span className={`p-2 bg-success rounded-circle d-inline-block`}></span>
                            </div>
                        </CardTitle>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Card className="my-2" color="secondary" outline >
                                        <CardHeader>
                                            시작 일자
                                        </CardHeader>
                                        <CardBody>
                                            <CardText>
                                                2022-09-01
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="my-2" color="secondary" outline >
                                        <CardHeader>
                                            종료 일자
                                        </CardHeader>
                                        <CardBody>
                                            <CardText>
                                                2022-12-01
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="my-2" color="secondary" outline >
                                        <CardHeader>
                                            진행률
                                        </CardHeader>
                                        <CardBody>
                                            <CardText>
                                                100%
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="my-2" color="secondary" outline >
                                        <CardHeader>
                                            수강생 수
                                        </CardHeader>
                                        <CardBody>
                                            <CardText>
                                                112명
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Alert color="white">
                                <h4 className="alert-heading">
                                    어쨋든 제목임
                                </h4>
                                <hr />
                                <Viewer initialValue="```java
                                 private String name;
                                 ```
                                 - 어쨋든 강의 소개글임
                                 - 여러개 있음
                                 > 이거슨 인용구이다
                                 > 인용구 왜 안보임?" />
                            </Alert>
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
                                        수업 정보
                                    </CardTitle>
                                </Col>
                            </Row>
                        </Container>
                        <CardBody>
                            <div>
                                <Accordion flush open={open} toggle={classToggle}>
                                    <AccordionItem>
                                        <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <Table className="no-wrap mt-3 align-middle" responsive borderless>
                                                <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>제목</th>
                                                    <th>Period</th>
                                                    <th>수강 완료 인원 / 수강 전체 인원</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {tableData.map((tdata, index) => (
                                                    <tr key={ index } className="border-top">
                                                        <td>{ index + 1 }</td>
                                                        <td>{ tdata.title }</td>
                                                        <td>{ tdata.classDate }</td>
                                                        <td className="px-lg-5"><span className="px-lg-5">30 / 112</span></td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <strong>This is the second item&#39;s accordion body.</strong>
                                            You can modify any of this with custom CSS or overriding our default
                                            variables. It&#39;s also worth noting that just about any HTML can
                                            go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <strong>This is the third item&#39;s accordion body.</strong>
                                            You can modify any of this with custom CSS or overriding our default
                                            variables. It&#39;s also worth noting that just about any HTML can
                                            go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <Table className="no-wrap mt-3 align-middle" responsive borderless>
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>제목</th>
                                    <th>Period</th>
                                    <th>수강 완료 인원 / 수강 전체 인원</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tableData.map((tdata, index) => (
                                    <tr key={ index } className="border-top">
                                        <td>{ index + 1 }</td>
                                        <td>{ tdata.title }</td>
                                        <td>{ tdata.classDate }</td>
                                        <td className="px-lg-5"><span className="px-lg-5">30 / 112</span></td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Student;
