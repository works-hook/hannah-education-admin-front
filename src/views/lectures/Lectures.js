import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
  Button, Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import ListFooter from "../utils/ListFooter";
import { getLectures } from "../../actions/LectureActions";

const Lectures = () => {
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => setSearch(e.target.value);

  const [lectures, setLectures] = useState(null)
  useEffect(() => {
    if (!lectures) {
      const fetchData = async () => getLectures();
      fetchData().then(response => {
        setLectures(response.data);
        console.log(response);
      })
    }
  });

  const searchData = lectures && lectures.length > 0 ? lectures.filter((data) => {
    return data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }) : lectures;

  const [page, setPage] = useState(1);
  const offset = (page - 1) * 5;

  return (<div>
    <Card>
      <CardBody className="list-card-body">
        <Container>
          <Row>
            <Col className="p-2 w-100">
              <CardTitle tag="h3">강의 리스트</CardTitle>
            </Col>
            <Col className="d-flex flex-row-reverse align-items-center">
              <Link to="/lecture">
                <Button color="secondary">
                  강의 등록
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>

        {searchData
          ? <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
            <tr>
              <th className="text-center">No.</th>
              <th>제목</th>
              <th>Period</th>
              <th>Status</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {searchData.slice(offset, offset + 5).map((data, index) => (
              <tr key={index} className="border-top list-td">
                <td className="text-center">{data.lectureId}</td>
                <td>{data.title}</td>
                <td>{data.startDate + " ~ " + data.endDate}</td>
                <td>
                  <span className={`p-2 bg-${data.state} rounded-circle d-inline-block ms-3`}></span>
                </td>
                <td className="text-center">
                  <Link to={`/lecture/${data.lectureId}`}>
                    <Button color="outline-primary">
                      상세 보기
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
            </tbody>
          </Table>
          : <Alert color="light">
            데이터가 존재하지 않습니다.
          </Alert>
        }
        <ListFooter
          search={search}
          onSearchChange={onSearchChange}
          total={lectures ? lectures.length : 0}
          page={page}
          setPage={setPage}
        />
      </CardBody>
    </Card>
  </div>);
};

export default Lectures;
