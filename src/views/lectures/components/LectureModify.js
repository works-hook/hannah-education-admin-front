import { forwardRef, useState } from "react";
import { Card, Row, Col, CardTitle, CardBody, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Button, Container } from "react-bootstrap";
import { DatePicker } from "react-datepicker";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "react-datepicker/dist/react-datepicker.css";

const modify = () => {
    window.location.href="/lectures"
    // TODO
}

const cancel = () => {
    window.location.href="/lectures"
    // TODO
}

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date("2022-09-20"));
    const [endDate, setEndDate] = useState(new Date("2022-09-20"));

    const StartCustomInput = forwardRef(({value, onClick}, ref) => (
        <Button variant="primary" onClick={onClick} ref={ref}>
          {value}
        </Button>
      ));

      const EndCustomInput = forwardRef(({value, onClick}, ref) => (
        <Button variant="primary" onClick={onClick} ref={ref}>
          {value}
        </Button>
      ));

    return (
      <>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={<StartCustomInput />}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={<EndCustomInput />}
        />
      </>
    );
  };

const LectureModify = () => {
    return (<Row>
        <Col>
            <Card>
                <CardTitle tag="h3" className="border-bottom p-3 mb-0">
                    <i className="bi bi-arrows-move me-2"> </i>
                    강의 수정하기
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
                                value={"어쨋든 제목임"}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">소개글</Label>
                            <CKEditor
                                editor={ ClassicEditor }
                                id="content"
                                name="content"
                                data={"어쨋든 소개글임"}
                                heigth={"200px"}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="thumbnail">썸네일</Label>
                            <Input id="thumbnail" name="thumbnail" type="file" value={"어쨋든 썸네일임.png"}/>
                            <FormText>Thumbnail 사진을 업로드 해주세요.</FormText>
                        </FormGroup>
                        <FormGroup>
                            <DatePickerComponent />
                        </FormGroup>
                        <Container>
                            <Row className="d-flex">
                                <Col>
                                    <Button variant="primary" onClick={ modify }>수정하기</Button>
                                    <Button variant="outline-danger" className="mx-lg-3" onClick={ cancel }>취소</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </Row>);
};

export default LectureModify;
