import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    AccordionItem,
    AccordionHeader,
    Col,
    AccordionBody,
    Accordion, Alert, Form, Label, FormGroup, Input, Collapse,
} from "reactstrap";

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import Writer from "../utils/Writer";
import * as PropTypes from "prop-types";

const students = [
    {
        studentId: "1",
        name: "student1",
        assignmentState: "DONE",
        assignmentContent: "```java\n" +
            "private String name;\n" +
            "```\n" +
            "- 과제 내용임\n" +
            "- 과제 하기 싫어요 쌤\n" +
            "> 자바 싫어\n" +
            "> 자바 스크립트 싫어",
        assignmentDate: "2022-01-06 13:00",
    },
    {
        studentId: "2",
        name: "student2",
        assignmentState: "READY",
        assignmentContent: null,
        assignmentDate: "2022-01-06 13:00",
    },
    {
        studentId: "3",
        name: "student3",
        assignmentState: "READY",
        assignmentContent: null,
        assignmentDate: "2022-01-06 13:00",
    },
    {
        studentId: "4",
        name: "student4",
        assignmentState: "DONE",
        assignmentContent: "```java\n" +
            "private String name;\n" +
            "```\n" +
             "- 과제 내용임\n" +
             "- 과제 하기 싫어요 쌤\n" +
             "> 자바 싫어\n" +
             "> 자바 스크립트 싫어",
        assignmentDate: "2022-01-06 13:00",
    },
];

function Low(props) {
    return null;
}

Low.propTypes = {children: PropTypes.node};
const AssignmentModal = (props) => {
    const [open, setOpen] = useState('0');
    const [commentState, setCommentState] = useState(false);

    const classToggle = (id) => { setOpen(open === id ? '0' : id) };
    const commentToggle = () => { setCommentState(!commentState) }

    return (
        <Modal size="xl" isOpen={ props.modal } toggle={ props.toggle }>
            <ModalHeader>과제 제출 현황</ModalHeader>
            <ModalBody>
                <Accordion flush open={open} toggle={classToggle}>
                    {students.map((tdata, index) => (
                        <AccordionItem>
                            <AccordionHeader targetId={ index + 1 }>
                                <Col md={4}>{ index + 1 }. { tdata.name }</Col>
                                { tdata.assignmentState === 'DONE'
                                    ? <>
                                        <Col className="d-flex px-lg-5">{ tdata.assignmentDate }</Col>
                                        <Col className="d-flex px-lg-5">
                                            <div className="d-flex align-items-md-center">
                                                <span className={`p-2 bg-success rounded-circle d-inline-block`}></span>
                                                <span className={`mx-2`}>{ tdata.assignmentState }</span>
                                            </div>
                                        </Col>
                                    </>
                                    : <>
                                        <Col className="d-flex px-lg-5">미제출</Col>
                                        <Col className="d-flex px-lg-5">
                                            <div className="d-flex align-items-md-center">
                                                <span className={`p-2 bg-danger rounded-circle d-inline-block`}></span>
                                                <span className={`mx-2`}>{ tdata.assignmentState }</span>
                                            </div>
                                        </Col>
                                    </>
                                }
                            </AccordionHeader>
                            <AccordionBody accordionId={ index + 1 }>
                                { tdata.assignmentState === 'READY'
                                    ? <Alert color="light">
                                        과제를 아직 제출하지 않았습니다.
                                    </Alert>
                                    : <>
                                        <Viewer initialValue={ tdata.assignmentContent } />
                                        <br />
                                        <Form>
                                            <div className="d-flex">
                                                <Label for="assignmentState">코멘트 달기</Label>
                                                <FormGroup className="mx-lg-3">
                                                    <Input
                                                        id="assignmentState"
                                                        name="assignmentState"
                                                        type="checkbox"
                                                        checked={ commentState }
                                                        onClick={ commentToggle }
                                                        size="xxl"
                                                    />
                                                </FormGroup>
                                            </div>

                                            <Collapse isOpen={ commentState }>
                                                <Col>
                                                    <FormGroup>
                                                        <Label for="assignmentContent">Comment</Label>
                                                        <Input id="comment" name="comment" type="text" />
                                                    </FormGroup>
                                                </Col>
                                                <Col>
                                                    <Button className="" color="primary" onClick={ props.toggle }>
                                                        저장하기
                                                    </Button>{''}
                                                </Col>
                                            </Collapse>
                                        </Form>
                                    </>
                                }
                            </AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={ props.toggle }>
                    { props.isModify ? "수정" : "등록" }하기
                </Button>{''}
                { props.isModify && (
                    <Button color="danger" onClick={ props.toggle }>
                        삭제하기
                    </Button>
                )}
                <Button color="outline-secondary" onClick={ props.toggle }>
                    취소
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AssignmentModal;
