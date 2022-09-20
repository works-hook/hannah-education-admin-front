import { Card, CardBody, CardTitle, Table, Container, Row, Col } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    project: "Flexy React",
    status: "danger",
    startDate: "2022-01-03",
    endDate: "2022-06-30",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    project: "Lading pro React",
    status: "success",
    startDate: "2022-01-03",
    endDate: "2022-06-30",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    project: "Elite React",
    status: "warning",
    startDate: "2022-01-03",
    endDate: "2022-06-30",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    project: "Flexy React",
    status: "danger",
    startDate: "2022-01-03",
    endDate: "2022-06-30",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    project: "Ample React",
    status: "success",
    startDate: "2022-01-03",
    endDate: "2022-06-30",
  },
];

const LecturesList = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Container>
            <Row className="d-flex">
              <Col className="p-2 w-100">
                <CardTitle tag="h3">{ props.title }</CardTitle>
              </Col>
              <Col className="d-flex flex-row-reverse align-items-center">
                <Link to="/register">
                  <Button variant="secondary">
                    강의 등록
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>제목</th>
                <th>설명</th>

                <th>Status</th>
                <th>Period</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={ index } className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={ tdata.avatar }
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{ tdata.name }</h6>
                        <span className="text-muted">{ tdata.email }</span>
                      </div>
                    </div>
                  </td>
                  <td>{ tdata.project }</td>
                  <td>
                    <span className={`p-2 bg-${ tdata.status } rounded-circle d-inline-block ms-3`}></span>
                  </td>
                  <td>{ tdata.startDate + " ~ " + tdata.endDate }</td>
                  <td>
                    <Link to="/modify">
                      <Button variant="outline-primary">
                        상세 보기
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default LecturesList;
