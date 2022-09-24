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
    Accordion, Card, ListGroup, ListGroupItem, FormGroup, Input, Collapse, Badge
} from "reactstrap";

import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const questions = [
    {
        questionId: 1,
        studentId: 13,
        studentImage: user1,
        studentName: "student13",
        questionTitle: "쌤 뭔지 모르겠어요ㅠ 1111",
        questionContent: "그냥 수업 듣기 싫고 지루하고 쌤 너무 못가르쳐요ㅠ 때려치워주세요ㅠㅜ 1111",
        answerState: "Y",
        answer: "그냥 때려쳐 너한텐 의지가 부족하단다 다시 태어나렴...^^"
    },
    {
        questionId: 2,
        studentId: 67,
        studentImage: user2,
        studentName: "student67",
        questionTitle: "쌤 뭔지 모르겠어요ㅠ 2222",
        questionContent: "그냥 수업 듣기 싫고 지루하고 쌤 너무 못가르쳐요ㅠ 때려치워주세요ㅠㅜ 2222",
        answerState: "Y",
        answer: "그냥 때려쳐 너한텐 의지가 부족하단다 다시 태어나렴...^^"
    },
    {
        questionId: 3,
        studentId: 5,
        studentImage: user3,
        studentName: "student5",
        questionTitle: "쌤 뭔지 모르겠어요ㅠ 3333",
        questionContent: "그냥 수업 듣기 싫고 지루하고 쌤 너무 못가르쳐요ㅠ 때려치워주세요ㅠㅜ 3333",
        answerState: "Y",
        answer: "그냥 때려쳐 너한텐 의지가 부족하단다 다시 태어나렴...^^"
    },
    {
        questionId: 4,
        studentId: 12,
        studentImage: user4,
        studentName: "student12",
        questionTitle: "쌤 뭔지 모르겠어요ㅠ 4444",
        questionContent: "그냥 수업 듣기 싫고 지루하고 쌤 너무 못가르쳐요ㅠ 때려치워주세요ㅠㅜ 4444",
        answerState: "Y",
        answer: "답하기 존나 귀찮으니 구글링하렴. 구글이 나보다 더 잘알아^^"
    },
    {
        questionId: 5,
        studentId: 32,
        studentImage: user5,
        studentName: "student32",
        questionTitle: "쌤 뭔지 모르겠어요ㅠ 5555",
        questionContent: "그냥 수업 듣기 싫고 지루하고 쌤 너무 못가르쳐요ㅠ 때려치워주세요ㅠㅜ 5555",
        answerState: "N",
        answer: null
    },
]

const QuestionModal = (props) => {
    const [open, setOpen] = useState('0');

    const questionToggle = (id) => { setOpen(open === id ? '0' : id) };

    return (
        <Modal size="xl" isOpen={ props.modal } toggle={ props.toggle }>
            <ModalHeader><h4>질문 리스트</h4></ModalHeader>
            <ModalBody>
                <Accordion flush open={ open } toggle={ questionToggle }>
                    { questions.map((tdata, index) => (
                        <AccordionItem>
                            <AccordionHeader targetId={ index + 1 }>
                                <Col>{ index + 1 }. { tdata.questionTitle }</Col>
                                <Col>
                                    <img
                                        src={ tdata.studentImage }
                                        className="rounded-circle mx-3"
                                        alt="avatar"
                                        width="45"
                                        height="45"
                                    />
                                    { tdata.studentName }
                                </Col>
                                <Col className="d-flex justify-content-sm-end mx-4">
                                    { tdata.answerState === 'Y'
                                        ? <Button color="outline-menuSuccess">답변 완료</Button>
                                        : <Button color="outline-warning">답변 대기</Button>
                                    }
                                </Col>
                            </AccordionHeader>
                            <AccordionBody accordionId={ index + 1 }>
                                <Card>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <Badge color="customPrimary" className="my-1">질문</Badge> <br />
                                            { tdata.questionContent }
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <Badge color="customPrimary" className="my-1">답변</Badge> <br />
                                            { tdata.answer }
                                            <Collapse isOpen={ tdata.answerState === 'N' }>
                                                <div className="d-flex my-2">
                                                    <Col md={10}>
                                                        <FormGroup>
                                                            <Input id="comment" name="comment" type="text" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={2} className="mx-xl-3">
                                                        <Button className="" color="primary">
                                                            답변하기
                                                        </Button>{''}
                                                    </Col>
                                                </div>
                                            </Collapse>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>
            </ModalBody>
            <ModalFooter>
                <Button color="outline-secondary" onClick={ props.toggle }>
                    취소
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default QuestionModal;
