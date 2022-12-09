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
import {getTags} from "../../actions/UserActions";
import {saveLecture} from "../../actions/LectureActions";


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
  const lectureId = useParams();
  const isRegistered = props.isRegistered

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

  const [saveTags, setSaveTags] = useState([]);
  const onAddSearchTag = (tag) => setSaveTags([...saveTags, tag]);
  const offRemoveSearchTag = (tag) => setSaveTags(saveTags.filter(v => v !== tag));

  const [tags, setTags] = useState(null)
  const save = () => {
    const data = {
      title: title,
      content: content,
      startDate: startDate,
      endDate: endDate,
      thumbnailImgUrl: thumbnailImgUrl,
      tags: saveTags,
    }
    saveLecture(data).then(response => {
      alert(response.message);
      navigate("/lectures");
    });
  }

  useEffect(() => {
    if (!tags) {
      const fetchData = async () => getTags();
      fetchData().then(response => setTags(response.data))
    }
  });

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
                  <Writer
                    value={content}
                    onChange={onContentHandler}
                  />
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
                  <Input
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    value={thumbnailImgUrl}
                    onChange={onImgUrlHandler}
                  />
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
                    <Button variant="primary" onClick={save}>
                      {isRegistered ? "등록" : "수정"}하기
                    </Button>
                    {!isRegistered && (
                      <Link to="/lectures">
                        <Button variant="danger" className="mx-lg-3" onClick={save}>
                          삭제하기
                        </Button>
                      </Link>
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
                  <ClassModal toggle={toggle} modal={modal} isModify={isModify} lectureId={lectureId}/>
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
