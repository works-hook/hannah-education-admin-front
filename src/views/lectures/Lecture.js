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
import React, {lazy, useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import ClassModal from "./ClassModal";
import {getTags} from "../../actions/UserActions";
import {deleteLecture, getLecture, saveLecture, updateLecture} from "../../actions/LectureActions";


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
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const isRegistered = props.isRegistered;

  const [showWriter, setShowWriter] = useState(isRegistered);

  const [modal, setModal] = useState(false);
  const [isModify, setIsModify] = useState(false);

  const toggle = () => setModal(!modal);

  const [title, setTitle] = useState("");
  const onTitleHandler = (e) => setTitle(e.currentTarget.value);
  const [content, setContent] = useState("");
  const onContentHandler = (data) => setContent(data);
  const [startDate, setStartDate] = useState("");
  const onStartDateHandler = (e) => setStartDate(e.currentTarget.value);
  const [endDate, setEndDate] = useState("");
  const onEndDateHandler = (e) => setEndDate(e.currentTarget.value);
  const [thumbnailImgUrl, setThumbnailImgUrl] = useState("");
  const onImgUrlHandler = (e) => setThumbnailImgUrl(e.currentTarget.value);

  useEffect(() => {
    if (!isRegistered && !content) {
      const fetchData = async () => getLecture(Number(params.lectureId));
      fetchData().then(response => setData(response.data));
    }
  }, []);

  const setData = (data) => {
    console.log(data)
    setTitle(data.title);
    setContent(data.content);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
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
      startDate: startDate,
      endDate: endDate,
      thumbnailImgUrl: thumbnailImgUrl,
      tags: saveTags,
    }
  }

  const [saveTags, setSaveTags] = useState([]);
  const onAddSearchTag = (tag) => setSaveTags([...saveTags, tag]);
  const offRemoveSearchTag = (tag) => setSaveTags(saveTags.filter(v => v !== tag));

  const [tags, setTags] = useState(null)
  useEffect(() => {
    if (!tags) {
      const fetchData = async () => getTags();
      fetchData().then(response => setTags(response.data))
    }
  }, []);

  const save = () => {
    const data = getData()
    saveLecture(data).then(response => {
      alert(response.message);
      navigate("/lectures");
    });
  }

  const update = () => {
    const data = getData()
    updateLecture(Number(params.lectureId), data).then(response => {
      alert(response.message);
    });
  }

  const deleted = () => {
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
                        value={startDate}
                        onChange={onStartDateHandler}
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
                        value={endDate}
                        onChange={onEndDateHandler}
                      />
                    </FormGroup>
                  </Col>
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
                          <Button variant="danger" className="mx-lg-3" onClick={deleted}>
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
              <Row className="d-flex">
                <Col>
                  <CardTitle tag="h3" className="border-bottom p-3 mb-0">
                    <i className="bi bi-textarea-resize me-2"> </i>
                    수업 관리하기
                  </CardTitle>
                </Col>
                {!isRegistered && (
                  <Col className="d-flex flex-row-reverse align-items-center">
                    <Button variant="secondary" onClick={() => {
                      toggle();
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
                      <th>Period</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index} className="border-top">
                        <td>{index + 1}</td>
                        <td>{data.title}</td>
                        <td>{data.classDate}</td>
                        <td className="d-flex justify-content-sm-end px-lg-5">
                          <Button variant="outline-primary" size="sm" onClick={() => {
                            toggle();
                            setIsModify(true);
                          }}>
                            <i className="bi bi-pencil me-2"> </i>
                            수정
                          </Button>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                  <ClassModal toggle={toggle} modal={modal} isModify={isModify} lectureId={params.lectureId}/>
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
