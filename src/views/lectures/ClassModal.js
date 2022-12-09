import React, {useEffect, useState} from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse
} from "reactstrap";
import Writer from '../utils/Writer';
import {deleteClass, getClass, getOneClass, saveClass, updateClass} from "../../actions/ClassActions";


const ClassModal = (props) => {

  const [showWriter, setShowWriter] = useState(!props.isModify);

  const [title, setTitle] = useState("");
  const onTitleHandler = (e) => setTitle(e.currentTarget.value);
  const [content, setContent] = useState("");
  const onContentHandler = (data) => setContent(data);
  const [startDate, setStartDate] = useState("");
  const onStartDateHandler = (e) => setStartDate(e.currentTarget.value);
  const [startTime, setStartTime] = useState("");
  const onStartTimeHandler = (e) => setStartTime(e.currentTarget.value);
  const [isAssignment, setIsAssignment] = useState(false);
  const assignmentToggle = () => setIsAssignment(!isAssignment);
  const [assignmentContent, setAssignmentContent] = useState("");
  const onAssignmentContentHandler = (data) => setAssignmentContent(data);

  const getData = () => {
    return {
      title: title,
      content: content,
      startDate: startDate,
      startTime: startTime,
      isAssignment: isAssignment,
      assignmentContent: assignmentContent,
    }
  }

  const setData = (data) => {
    setTitle(data.title);
    setContent(data.content);
    setStartDate(data.startDate);
    setStartTime(data.startTime);
    setIsAssignment(data.isAssignment);
    setAssignmentContent(data.assignmentContent);
    setShowWriter(true);
  }

  useEffect(() => {
    if (props.isModify) {
      const fetchData = async () => await getOneClass(props.classId);
      fetchData().then(response => setData(response.data));
    }
  }, []);

  const save = () => {
    const data = getData();
    saveClass(props.lectureId, data).then(response => {
      alert(response.message);
      props.toggle();
    });
  }

  const update = () => {
    const data = getData();
    console.log(data)
    updateClass(props.classId, data).then(response => {
      alert(response.message);
      props.toggle();
    });
  }

  const remove = () => {
    deleteClass(props.classId).then(response => {
      alert(response.message);
      props.toggle();
    })
  }

  return (
    <Modal size="xl" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader>수업 {props.isModify ? "수정" : "등록"}하기</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">제목</Label>
            <Input
              id="title"
              name="title"
              placeholder="제목을 입력해주세요."
              type="text"
              value={title}
              onChange={onTitleHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">내용</Label>
            {showWriter && <Writer
              value={content}
              onContentHandler={onContentHandler}
            />}
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
                  value={startDate}
                  onChange={onStartDateHandler}
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
                  value={startTime}
                  onChange={onStartTimeHandler}
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
                checked={isAssignment}
                onChange={assignmentToggle}
                size="xxl"
              />
            </FormGroup>
          </div>

          <Collapse isOpen={isAssignment}>
            <FormGroup>
              <Label for="assignmentContent">과제 내용</Label>
              {showWriter && <Writer
                value={assignmentContent}
                onContentHandler={onAssignmentContentHandler}
              />}
            </FormGroup>
          </Collapse>
        </Form>
      </ModalBody>
      <ModalFooter>
        {props.isModify ? <>
          <Button color="primary" onClick={update}>
            수정하기
          </Button>{''}
          <Button color="danger" onClick={remove}>
            삭제하기
          </Button>
        </> : <>
          <Button color="primary" onClick={save}>
            등록하기
          </Button>
        </>
        }
        <Button color="outline-secondary" onClick={props.toggle}>
          취소
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ClassModal;
