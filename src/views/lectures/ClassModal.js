import React,{ useState } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Collapse } from "reactstrap";
import Writer from '../utils/Writer';


const ClassModal = (props) => {
    const [assignmentState, setAssignmentState] = useState(false);

    const assignmentToggle = () => { 
        setAssignmentState(!assignmentState)
    }

    return (
        <Modal size="xl" isOpen={ props.modal } toggle={ props.toggle }>
            <ModalHeader>수업 { props.isModify ? "수정" : "등록" }하기</ModalHeader>
            <ModalBody>
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
                        <Label for="content">내용</Label>
                        <Writer />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="date">
                                    시작 일
                                </Label>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
                                    value="2022-09-01"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="time">
                                    시작 시간
                                </Label>
                                <Input
                                    id="time"
                                    name="time"
                                    type="time"
                                    value="20:11"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="d-flex">
                        <Label for="assignmentState">과제 제출</Label>
                        <FormGroup switch className="mx-lg-3">
                            <Input
                                id="assignmentState"
                                name="assignmentState"
                                type="switch"
                                checked={ assignmentState }
                                onClick={ assignmentToggle }
                                size="xxl"
                            />
                        </FormGroup>
                    </div>

                    <Collapse isOpen={ assignmentState }>
                        <FormGroup>
                            <Label for="assignmentContent">과제 내용</Label>
                            <Writer />
                        </FormGroup>
                    </Collapse>
                </Form>
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

export default ClassModal;
