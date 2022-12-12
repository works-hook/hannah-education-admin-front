import {
  Alert,
  Badge,
  Card,
  CardBody,
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
import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ClassModal from "./ClassModal";
import NoticeModal from "./NoticeModal";
import {getTags} from "../../actions/UserActions";
import {deleteLecture, getLecture, saveLecture, updateLecture} from "../../actions/LectureActions";
import {getClass} from "../../actions/ClassActions";
import {getNotices} from "../../actions/NoticeActions";

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
  const [thumbnailImgUrl, setThumbnailImgUrl] = useState("");
  const onImgUrlHandler = (e) => setThumbnailImgUrl(e.currentTarget.value);

  const [tags, setTags] = useState(null)
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
      const fetchLectureData = async () => getLecture(Number(params.lectureId));
      fetchLectureData().then(response => setData(response.data));

      const fetchClassData = async () => getClass(Number(params.lectureId));
      fetchClassData().then(response => setClassData(response.data));

      const fetchNoticeData = async () => getNotices(Number(params.lectureId));
      fetchNoticeData().then(response => setNoticeData(response.data));
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

  const save = () => {
    const data = getData();
    saveLecture(data).then(response => {
      alert(response.message);
      navigate("/lectures");
    });
  }

  const update = () => {
    const data = getData();
    updateLecture(Number(params.lectureId), data).then(response => {
      alert(response.message);
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
              강의 {isRegistered ? "등록" : "수정"}하기
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
                    value={title}
                    onChange={onTitleHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="content">소개글</Label>
                  {showWriter && <Writer
                      value={content}
                      onContentHandler={onContentHandler}
                    />}
                </FormGroup>
                <Row className="my-2">
                  <div className="d-flex">
                    <Label for="isShow">노출 여부</Label>
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
                  <Label for="thumbnail">썸네일</Label>
                  {isRegistered ?
                    <Input
                      id="thumbnail"
                      name="thumbnail"
                      type="file"
                      value={thumbnailImgUrl}
                      onChange={onImgUrlHandler}
                    /> :
                    <div>
                      <Input
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        onChange={onImgUrlHandler}
                      />
                      <img className="mt-3" src={thumbnailImgUrl} alt="thumbnailImgUrl" />
                    </div>
                  //   <Card className="my-2"> // TODO image server api 만들고 나서 수정하기
                  //   <CardBody>
                  //   <CardTitle tag="h5">
                  //   Card Title
                  //   </CardTitle>
                  //   <CardText>
                  //   This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  //   </CardText>
                  //   <CardText>
                  //   <small className="text-muted">
                  //   Last updated 3 mins ago
                  //   </small>
                  //   </CardText>
                  //   </CardBody>
                  //   <CardImg
                  //   alt="Card image cap"
                  //   bottom
                  //   src="https://picsum.photos/900/180"
                  //   style={{
                  //   height: 180
                  // }}
                  //   width="100%"
                  //   />
                  //   </Card>
                  }
                </FormGroup>
                <Row className="mb-4">
                  <Label for="tags">태그</Label>
                  <div className="d-flex">
                    {tags ? tags.map((tag, index) => {
                      return (
                        saveTags.includes(tag.id)
                          ? <div key={index} className="pointer active" onClick={() => {
                            offRemoveSearchTag(tag.id);
                          }}>
                            <Badge pill className="m-1 text-dark" color="light">
                              {tag.name}
                              <span aria-hidden="true">&nbsp;&nbsp;×</span>
                            </Badge>
                          </div>
                          : <div key={index} className="pointer" onClick={() => {
                            onAddSearchTag(tag.id);
                          }}>
                            <Badge pill className="m-1">
                              {tag.name}
                            </Badge>
                          </div>
                      );
                    }) : <span>태그가 존재하지 않습니다.</span>}
                  </div>
                </Row>
                <Row>
                  <div className="d-flex">
                    {isRegistered ? (
                      <Button variant="primary" onClick={save}>
                        등록하기
                      </Button>
                    ) : (
                      <>
                        <Button variant="primary" onClick={update}>
                          수정하기
                        </Button>
                        <Link to="/lectures">
                          <Button variant="danger" className="mx-lg-3" onClick={remove}>
                            삭제하기
                          </Button>
                        </Link>
                      </>
                    )}
                    <Link to="/lectures">
                      <Button variant="outline-secondary" className="mx-lg-1" onClick={cancel}>
                        취소
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
                    수업 관리하기
                  </CardTitle>
                </Col>
                {!isRegistered && (
                  <Col className="d-flex flex-row-reverse align-items-center">
                    <Button variant="secondary" onClick={() => {
                      classToggle();
                      setIsModify(false);
                    }}>
                      수업 등록
                    </Button>
                  </Col>
                )}
              </Row>
            </Container>
            <CardBody>
              {isRegistered
                ? <Alert color="primary">
                  수업 관리는 강의를 등록하신 뒤에 사용하실 수 있습니다.
                </Alert>
                : <>
                  <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                      <td>No</td>
                      <th>제목</th>
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
                            수정
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
                    공지 사항 관리하기
                  </CardTitle>
                </Col>
                {!isRegistered && (
                  <Col className="d-flex flex-row-reverse align-items-center">
                    <Button variant="secondary" onClick={() => {
                      noticeToggle();
                      setIsModify(false);
                    }}>
                      공지 사항 등록
                    </Button>
                  </Col>
                )}
              </Row>
            </Container>
            <CardBody>
              {isRegistered
                ? <Alert color="primary">
                  공지 사항 관리는 강의를 등록하신 뒤에 사용하실 수 있습니다.
                </Alert>
                : <>
                  <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                      <td>No</td>
                      <th>제목</th>
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
                            수정
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
