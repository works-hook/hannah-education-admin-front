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
    Container, Progress,
    Row,
} from "reactstrap";
import React, { useState } from "react";

import AssignmentModal from "./AssignmentModal";
import QuestionModal from "./QuestionModal";
import "../../assets/customStyle.css";

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const tableData = [
    {
        classId: 1,
        title: "java 자료형",
        classDate: "2022-01-03 13:00",
        classState: "DONE",
        assignmentId: "1",
        assignmentTitle: "java 자료형 과제1",
        assignmentContent: " ```java\n" +
            "private String name;\n" +
            "```\n" +
            "- 어쨋든 강의 내용임\n" +
            "- 여러개 있음\n" +
            "> 자바 좋아\n" +
            "> 자바 스크립트 좋아",
        questionsCount: "12",
    },
    {
        classId: 2,
        title: "java 클래스",
        classDate: "2022-01-04 13:00",
        classState: "DONE",
        assignmentId: "2",
        assignmentTitle: "java 클래스 과제2",
        questionsCount: "7",
        assignmentContent: " ```java\n" +
            "private String name;\n" +
            "```\n" +
             "- 어쨋든 강의 내용임\n" +
             "- 여러개 있음\n" +
             "> 자바 좋아\n" +
             "> 자바 스크립트 좋아",
    },
    {
        classId: 3,
        title: "java 추상화",
        classDate: "2022-01-05 13:00",
        classState: "DONE",
        assignmentId: null,
        assignmentTitle: null,
        questionsCount: "4",
    },
    {
        classId: 4,
        title: "java 인터페이스",
        classDate: "2022-01-06 13:00",
        classState: "READY",
        assignmentId: "4",
        assignmentTitle: "java 인터페이스 과제4",
        questionsCount: "0",
        assignmentContent: " ```java\n" +
            "private String name;\n" +
            "```\n" +
            "- 어쨋든 강의 내용임\n" +
            "- 여러개 있음\n" +
            "> 자바 좋아\n" +
            "> 자바 스크립트 좋아",
    },
];

const Student = () => {
    const [open, setOpen] = useState('0');
    const classToggle = (id) => setOpen(open === id ? '0' : id);

    const [assignmentModal, setAssignmentModal] = useState(false);
    const [questionModal, setQuestionModal] = useState(false);
    const [clickAssignmentId, setClickAssignmentId] = useState('0');
    const [clickClassId, setClassId] = useState('0');

    const assignmentToggle = (assignmentId) => {
        setAssignmentModal(!assignmentModal);
        setClickAssignmentId(assignmentId);
    };

    const questionToggle = (classId) => {
        setQuestionModal(!questionModal);
        setClassId(classId);
    }

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
                                <span className={`p-2 bg-warning rounded-circle d-inline-block`}></span>
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
                                                <Progress
                                                    animated
                                                    style={{
                                                        height: '23.5px'
                                                    }}
                                                    color="warning"
                                                    max="4"
                                                    value="3"
                                                >3 of 4</Progress>
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
                            <Accordion flush open={open} toggle={classToggle}>
                                {tableData.map((tdata, index) => (
                                    <AccordionItem>
                                        <AccordionHeader targetId={ index + 1 }>
                                            <Col>{ index + 1 }. { tdata.title }</Col>
                                            <Col className="d-flex justify-content-sm-end px-lg-5">{ tdata.classDate }</Col>
                                        </AccordionHeader>
                                        <AccordionBody accordionId={ index + 1 }>
                                            <Row>
                                                <Col>
                                                    <Card className="my-2" color="secondary" outline >
                                                        <CardHeader>
                                                            수업 상태
                                                        </CardHeader>
                                                        <CardBody>
                                                            <CardText className={`d-flex align-items-md-center`}>
                                                                { tdata.classState === 'DONE'
                                                                    ? <span className={`p-2 bg-success rounded-circle d-inline-block`}></span>
                                                                    : <span className={`p-2 bg-danger rounded-circle d-inline-block`}></span> }
                                                                <span className={`mx-2`}>{ tdata.classState }</span>
                                                            </CardText>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    { tdata.assignmentTitle
                                                        ? <Card
                                                            className="my-2 pointer"
                                                            color="secondary"
                                                            outline
                                                            onClick={() => {
                                                                assignmentToggle(tdata.assignmentId)
                                                            }}>
                                                            <CardHeader>과제</CardHeader>
                                                            <CardBody>
                                                                <CardText>{ tdata.assignmentTitle }</CardText>
                                                            </CardBody>
                                                        </Card>
                                                        : <Card className="my-2" color="secondary" outline>
                                                            <CardHeader>과제</CardHeader>
                                                            <CardBody>
                                                                <CardText>과제 없음</CardText>
                                                            </CardBody>
                                                        </Card>
                                                    }
                                                </Col>
                                                <Col>
                                                    { tdata.questionsCount > 0
                                                        ? <Card
                                                            className="my-2 pointer"
                                                            color="secondary"
                                                            outline
                                                            onClick={ () => { questionToggle(tdata.classId) }}
                                                        >
                                                            <CardHeader>질문</CardHeader>
                                                            <CardBody>
                                                                <CardText>
                                                                    { tdata.questionsCount }개
                                                                </CardText>
                                                            </CardBody>
                                                        </Card>
                                                        : <Card className="my-2" color="secondary" outline>
                                                            <CardHeader>질문</CardHeader>
                                                            <CardBody>
                                                                <CardText>
                                                                    { tdata.questionsCount }개
                                                                </CardText>
                                                            </CardBody>
                                                        </Card>
                                                    }
                                                </Col>
                                            </Row>
                                            <Alert color="white">
                                                { tdata.assignmentTitle
                                                    ? <>
                                                        <h4 className="alert-heading">
                                                            { tdata.assignmentTitle }
                                                        </h4>
                                                        <hr />
                                                        <Viewer initialValue={ tdata.assignmentContent } />
                                                      </>
                                                    : <div>과제 없음</div>
                                                }
                                            </Alert>
                                        </AccordionBody>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <AssignmentModal assignmentId={ clickAssignmentId } toggle={ assignmentToggle } modal={ assignmentModal }/>
                            <QuestionModal classId={ clickClassId } toggle={ questionToggle } modal={ questionModal }/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Student;
