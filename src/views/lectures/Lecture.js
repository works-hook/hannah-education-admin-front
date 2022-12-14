import {
  Alert,
  Badge,
  Card,
  CardBody, CardImg,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table
} from "reactstrap";
import Writer from "../utils/Writer";
import {Button, Image} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ClassModal from "./ClassModal";
import NoticeModal from "./NoticeModal";
import {getTags} from "../../actions/UserActions";
import {deleteLecture, getLecture, saveLecture, updateLecture} from "../../actions/LectureActions";
import {getClass} from "../../actions/ClassActions";
import {getNotices} from "../../actions/NoticeActions";
import {uploadImage} from "../../actions/ImageActions";

const cancel = () => {}

const LectureClass = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const isRegistered = props.isRegistered;

  const [showWriter, setShowWriter] = useState(isRegistered);
  const [classId, setClassId] = useState(null);
  const [noticeId, setNoticeId] = useState(null);

  const [classModal, setClassModal] = useState(false);
  const classToggle = () => setClassModal(!classModal);

  const [noticeModal, setNoticeModal] = useState(false);
  const noticeToggle = () => setNoticeModal(!noticeModal);

  const [isModify, setIsModify] = useState(false);

  const [title, setTitle] = useState("");
  const onTitleHandler = (e) => setTitle(e.currentTarget.value);
  const [content, setContent] = useState("");
  const onContentHandler = (data) => setContent(data);
  const [isShow, setIsShow] = useState(false);
  const onIsShowHandler = () => setIsShow(!isShow);

  const [thumbnailImgUrl, setThumbnailImgUrl] = useState(null);
  const onImgUrlHandler = (e) => {
    const formData = new FormData();
    formData.append('file', e.currentTarget.files[0]);

    const fetchData = async () => uploadImage("LECTURE", formData);
    fetchData().then(response => setThumbnailImgUrl(response.data));
  }

  const [tags, setTags] = useState(null);
  const [saveTags, setSaveTags] = useState([]);
  const onAddSearchTag = (tag) => setSaveTags([...saveTags, tag]);
  const offRemoveSearchTag = (tag) => setSaveTags(saveTags.filter(v => v !== tag));

  const [classData, setClassData] = useState([]);
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    if (!tags) {
      const fetchData = async () => getTags();
      fetchData().then(response => setTags(response.data))
    }
  }, []);

  useEffect(() => {
    if (!isRegistered && !content) {
      fetchLectureData();
      fetchClassData();
      fetchNoticeData();
    }
  }, []);

  const setData = (data) => {
    setTitle(data.title);
    setContent(data.content);
    setIsShow(data.isShow);
    setThumbnailImgUrl(data.thumbnailImgUrl);
    const tags = [];
    data.tags.map((tag) => tags.push(tag.tagId));
    setSaveTags(tags);
    setShowWriter(true);
  }

  const getData = () => {
    return {
      title: title,
      content: content,
      isShow: isShow,
      thumbnailImgUrl: thumbnailImgUrl,
      tags: saveTags,
    }
  }

  const fetchLectureData = () => {
    const fetchLectureData = async () => getLecture(params.lectureId);
    fetchLectureData().then(response => setData(response.data));
  }

  const fetchClassData = () => {
    const fetchClassData = async () => getClass(params.lectureId);
    fetchClassData().then(response => setClassData(response.data));
  }

  const fetchNoticeData = () => {
    const fetchNoticeData = async () => getNotices(params.lectureId);
    fetchNoticeData().then(response => setNoticeData(response.data));
  }

  const save = () => {
    const data = getData();
    saveLecture(data).then(response => {
      alert(response.message);
      navigate("/lectures");
    });
  }

  const update = () => {
    const data = getData();
    updateLecture(params.lectureId, data).then(response => {
      alert(response.message);
      fetchLectureData();
    });
  }

  const remove = () => {
    deleteLecture(Number(params.lectureId)).then(response => {
      alert(response.message);
      navigate("/lectures", {replace: true});
    });
  }

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h3" className="border-bottom p-3 mb-0">
              <i className="bi bi-clipboard me-2"> </i>
              ?????? {isRegistered ? "??????" : "??????"}??????
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="title">??????</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="????????? ??????????????????."
                    type="text"
                    value={title}
                    onChange={onTitleHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="content">?????????</Label>
                  {showWriter && <Writer
                      value={content}
                      onContentHandler={onContentHandler}
                    />}
                </FormGroup>
                <Row className="my-2 mx-1">
                  <div className="d-flex">
                    <Label for="isShow">?????? ??????</Label>
                    <FormGroup switch className="mx-lg-3">
                      <Input
                        id="isShow"
                        name="isShow"
                        type="switch"
                        checked={isShow}
                        onChange={onIsShowHandler}
                        size="xxl"
                      />
                    </FormGroup>
                  </div>
                </Row>
                <FormGroup>
                  <Label for="thumbnail">?????????</Label>
                  {isRegistered ?
                    <>
                      <Input
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        onChange={onImgUrlHandler}
                      />
                      {thumbnailImgUrl && <Card style={{width: '30%'}}>
                        <CardImg className="mt-3" src={thumbnailImgUrl} alt="thumbnailImgUrl"/>
                      </Card>}
                    </> :
                    <div>
                      <Input
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        onChange={onImgUrlHandler}
                      />
                      <Card style={{width: '30%'}}>
                        <CardImg className="mt-3" src={thumbnailImgUrl} alt="thumbnailImgUrl"/>
                      </Card>
                    </div>
                  }
                </FormGroup>
                <Row className="mb-4 mx-1 justify-content-start">
                  <Label for="tags">??????</Label>
                    {tags ? tags.map((tag, index) => {
                      return (
                        saveTags.includes(tag.id)
                          ? <Col>
                            <div key={index} className="pointer active" onClick={() => {
                              offRemoveSearchTag(tag.id);
                            }}>
                              <Badge pill className="m-1 text-dark" color="light">
                                {tag.name}
                                <span aria-hidden="true">&nbsp;&nbsp;??</span>
                              </Badge>
                            </div>
                          </Col>
                          : <Col>
                            <div key={index} className="pointer" onClick={() => {
                              onAddSearchTag(tag.id);
                            }}>
                              <Badge pill className="m-1">
                                {tag.name}
                              </Badge>
                            </div>
                          </Col>
                      );
                    }) : <span>????????? ???????????? ????????????.</span>}
                </Row>
                <Row>
                  <div className="d-flex mx-3">
                    {isRegistered ? (
                      <Button variant="primary" onClick={save}>
                        ????????????
                      </Button>
                    ) : (
                      <>
                        <Button variant="primary" onClick={update}>
                          ????????????
                        </Button>
                        <Link to="/lectures">
                          <Button variant="danger" className="mx-lg-3" onClick={remove}>
                            ????????????
                          </Button>
                        </Link>
                      </>
                    )}
                    <Link to="/lectures">
                      <Button variant="outline-secondary" className="mx-lg-1" onClick={cancel}>
                        ??????
                      </Button>
                    </Link>
                  </div>
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
              <Row className="d-flex border-bottom">
                <Col>
                  <CardTitle tag="h3" className="p-3 mb-0">
                    <i className="bi bi-textarea-resize me-2"> </i>
                    ?????? ????????????
                  </CardTitle>
                </Col>
                {!isRegistered && (
                  <Col className="d-flex flex-row-reverse align-items-center">
                    <Button variant="secondary" onClick={() => {
                      classToggle();
                      setIsModify(false);
                    }}>
                      ?????? ??????
                    </Button>
                  </Col>
                )}
              </Row>
            </Container>
            <CardBody>
              {isRegistered
                ? <Alert color="primary">
                  ?????? ????????? ????????? ???????????? ?????? ???????????? ??? ????????????.
                </Alert>
                : <>
                  <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                      <td>No</td>
                      <th>??????</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {classData.map((data, index) => (
                      <tr key={index} className="border-top">
                        <td>{data.classId}</td>
                        <td>{data.title}</td>
                        <td className="d-flex justify-content-sm-end px-lg-5">
                          <Button variant="outline-primary" size="sm" onClick={() => {
                            classToggle();
                            setIsModify(true);
                            setClassId(data.classId);
                          }}>
                            <i className="bi bi-pencil me-2"> </i>
                            ??????
                          </Button>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                  {classModal &&
                    <ClassModal
                      toggle={classToggle}
                      modal={classModal}
                      isModify={isModify}
                      lectureId={params.lectureId}
                      classId={classId}
                      fetchClassData={fetchClassData}
                    />
                  }
                </>
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Container>
              <Row className="d-flex border-bottom">
                <Col>
                  <CardTitle tag="h3" className="p-3 mb-0">
                    <i className="bi bi-textarea-resize me-2"> </i>
                    ?????? ?????? ????????????
                  </CardTitle>
                </Col>
                {!isRegistered && (
                  <Col className="d-flex flex-row-reverse align-items-center">
                    <Button variant="secondary" onClick={() => {
                      noticeToggle();
                      setIsModify(false);
                    }}>
                      ?????? ?????? ??????
                    </Button>
                  </Col>
                )}
              </Row>
            </Container>
            <CardBody>
              {isRegistered
                ? <Alert color="primary">
                  ?????? ?????? ????????? ????????? ???????????? ?????? ???????????? ??? ????????????.
                </Alert>
                : <>
                  <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                      <td>No</td>
                      <th>??????</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {noticeData.map((data, index) => (
                      <tr key={index} className="border-top">
                        <td>{data.noticeId}</td>
                        <td>{data.title}</td>
                        <td className="d-flex justify-content-sm-end px-lg-5">
                          <Button variant="outline-primary" size="sm" onClick={() => {
                            noticeToggle();
                            setIsModify(true);
                            setNoticeId(data.noticeId)
                          }}>
                            <i className="bi bi-pencil me-2"> </i>
                            ??????
                          </Button>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                  {noticeModal &&
                    <NoticeModal
                      toggle={noticeToggle}
                      modal={noticeModal}
                      isModify={isModify}
                      lectureId={params.lectureId}
                      noticeId={noticeId}
                      fetchNoticeData={fetchNoticeData}
                    />
                  }
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
