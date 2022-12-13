import React, {useEffect, useState} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Writer from '../utils/Writer';
import {deleteNotice, getOneNotice, saveNotice, updateNotice} from "../../actions/NoticeActions";

const ClassModal = (props) => {

  const [showWriter, setShowWriter] = useState(!props.isModify);

  const [title, setTitle] = useState("");
  const onTitleHandler = (e) => setTitle(e.currentTarget.value);
  const [content, setContent] = useState("");
  const onContentHandler = (data) => setContent(data);

  const getData = () => {
    return {
      title: title,
      content: content,
    }
  }

  const setData = (data) => {
    setTitle(data.title);
    setContent(data.content);
    setShowWriter(true);
  }

  useEffect(() => {
    if (props.isModify) {
      const fetchData = async () => await getOneNotice(props.noticeId);
      fetchData().then(response => setData(response.data));
    }
  }, []);

  const save = () => {
    const data = getData();
    saveNotice(props.lectureId, data).then(response => {
      alert(response.message);
      props.fetchNoticeData();
      props.toggle();
    });
  }

  const update = () => {
    const data = getData();
    updateNotice(props.noticeId, data).then(response => {
      alert(response.message);
      props.fetchNoticeData();
      props.toggle();
    });
  }

  const remove = () => {
    deleteNotice(props.noticeId).then(response => {
      alert(response.message);
      props.fetchNoticeData();
      props.toggle();
    })
  }

  return (
    <Modal size="xl" isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader>공지사항 {props.isModify ? "수정" : "등록"}하기</ModalHeader>
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
