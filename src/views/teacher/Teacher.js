import {
  Button,
  Card, CardBody,
  CardTitle, Col, Form, FormGroup, Input, InputGroup, Label, Row,
} from "reactstrap";
import "../../assets/customStyle.css";

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {Viewer} from '@toast-ui/react-editor';
import {Link, useNavigate} from "react-router-dom";
import Writer from "../utils/Writer";
import {useEffect, useState} from "react";
import {getUser, updateUser} from "../../actions/MyPageActions";
import {uploadImage} from "../../actions/ImageActions";

const Teacher = (props) => {
  const navigate = useNavigate();
  const [showViewer, setShowViewer] = useState(props.isModify);

  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const onNameHandler = (e) => setName(e.currentTarget.value);
  const [email, setEmail] = useState("");
  const onEmailHandler = (e) => setEmail(e.currentTarget.value);
  const [phoneNumber, setPhoneNumber] = useState("");
  const onPhoneNumberHandler = (e) => setPhoneNumber(e.currentTarget.value);
  const [brith, setBrith] = useState("");
  const onBrithHandler = (e) => setBrith(e.currentTarget.value);
  const [imageUrl, setImageUrl] = useState("");
  const [oneLineIntroduction, setOneLineIntroduction] = useState("");
  const onOneLineIntroductionHandler = (e) => setOneLineIntroduction(e.currentTarget.value);
  const [introduction, setIntroduction] = useState("");
  const onIntroductionHandler = (data) => setIntroduction(data);

  const onProfileImgHandler = (e) => {
    const formData = new FormData();
    formData.append('file', e.currentTarget.files[0]);

    const fetchData = async () => uploadImage("USER", formData);
    fetchData().then(response => setImageUrl(response.data));
  }

  const setData = (data) => {
    setAccount(data.account);
    setName(data.name);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setBrith(data.brith);
    setImageUrl(data.imageUrl);
    setOneLineIntroduction(data.oneLineIntroduction);
    setIntroduction(data.introduction);
    setShowViewer(true);
  }

  const getData = () => {
    return {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      brith: brith,
      imageUrl: imageUrl,
      oneLineIntroduction: oneLineIntroduction,
      introduction: introduction,
    }
  }

  useEffect(() => {
    if (!showViewer) {
      const fetchData = async () => getUser();
      fetchData().then(response => setData(response.data));
    }
  }, []);

  const update = () => {
    const data = getData();
    updateUser(data).then(response => {
      alert(response.message);
      navigate("/teacher");
    });
  }

  const imageUpdate = (imageUrl) => {
    const data = getData();
    data.imageUrl = imageUrl;
    updateUser(data).then(response => {
      alert(response.message);
      navigate("/teacher");
    });
  }

  return (<>
    <Card>
      <CardBody>
        <CardTitle className="p-2 w-100" tag="h3">
          My Page
        </CardTitle>
        <div className="profile-box">
          <div>
            <img
              src={imageUrl}
              alt="profile"
              className="rounded-circle"
              width="210"
              height="210"
            />
            <div className="d-flex mt-4 justify-content-center">
              {!props.isModify
                ? <Link to="/teacher/modify">
                  <Button color="outline-secondary">수정하기</Button>
                </Link>
                : <Form>
                  <FormGroup>
                    <Label for="profileImage">Upload Profile Image</Label>
                    <Input
                      id="profileImage"
                      name="profileImage"
                      type="file"
                      size="sm"
                      onChange={onProfileImgHandler}
                    />
                  </FormGroup>
                </Form>
              }
            </div>
          </div>
          {!props.isModify
            ? <>
              <div>
                <Col>
                  <h5>Id</h5>
                  <h6>{account}</h6>
                </Col>
                <Col>
                  <h5>Name</h5>
                  <h6>{name}</h6>
                </Col>
                <Col>
                  <h5>Brith</h5>
                  <h6>{brith}</h6>
                </Col>
                <Col>
                  <h5>Phone Number</h5>
                  <h6>{phoneNumber}</h6>
                </Col>
                <Col>
                  <h5>Email</h5>
                  <h6>{email}</h6>
                </Col>
              </div>
              <div className="mx-5">
                <h5>One Line Introduce</h5>
                <h6>{oneLineIntroduction}</h6>
                <h5 className="mt-4">Introduce</h5>
                {showViewer &&
                  <Viewer initialValue={introduction}/>
                }
              </div>
            </>
            : <>
              <div>
                <Row>
                  <Col>
                    <h5>Id</h5>
                    <InputGroup>
                      <Input
                        id="id"
                        name="name"
                        value={account}
                        readOnly
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Name</h5>
                    <Input
                      id="name"
                      name="name"
                      value={name}
                      onChange={onNameHandler}
                    />
                  </Col>
                  <Col>
                    <h5>Brith</h5>
                    <Input
                      id="name"
                      name="name"
                      type="date"
                      value={brith ? brith : ""}
                      onChange={onBrithHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Phone Number</h5>
                    <Input
                      id="name"
                      name="name"
                      value={phoneNumber}
                      onChange={onPhoneNumberHandler}
                    />
                  </Col>
                  <Col>
                    <h5>Email</h5>
                    <Input
                      id="name"
                      name="name"
                      value={email}
                      onChange={onEmailHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>One Line Introduce</h5>
                    <InputGroup>
                      <Input
                        id="oneLineIntroduce"
                        name="name"
                        value={oneLineIntroduction ? oneLineIntroduction : ""}
                        onChange={onOneLineIntroductionHandler}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <div className="introduce mx-3 mb-4">
                  <h5>Introduce</h5>
                  {showViewer &&
                    <Writer value={introduction ? introduction : ""} onContentHandler={onIntroductionHandler}/>
                  }
                </div>
                <div className="d-flex justify-content-end mx-4">
                  <Button onClick={update} color="secondary">
                    저장하기
                  </Button>
                </div>
              </div>
            </>
          }
        </div>
      </CardBody>
    </Card>
  </>);
};

export default Teacher;
