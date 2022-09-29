import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Row,
    Table,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import ListFooter from "../utils/ListFooter";

const tableData = [
    {
        id: 1,
        name: "Java 기본 문법",
        status: "danger",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 2,
        name: "Java 객체 지향",
        status: "success",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 3,
        name: "DataBase (MySQL)",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 4,
        name: "Git / GitHub",
        status: "danger",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 5,
        name: "Spring Framework",
        status: "success",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 6,
        name: "Spring Framework",
        status: "danger",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 7,
        name: "Spring Framework",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 8,
        name: "Spring Framework",
        status: "success",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 9,
        name: "Spring Framework",
        status: "danger",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 10,
        name: "Spring Framework",
        status: "success",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
    {
        id: 11,
        name: "Spring Framework",
        status: "danger",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
    },
];

const Lectures = () => {
    const [search, setSearch] = useState("");
    const onSearchChange = (e) => setSearch(e.target.value);

    const searchData = tableData.filter((data) => {
        return data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });

    const [page, setPage] = useState(1);
    const offset = (page - 1) * 5;

    return (<div>
        <Card>
            <CardBody>
                <Container>
                    <Row>
                        <Col className="p-2 w-100">
                            <CardTitle tag="h3">{ "강의 리스트" }</CardTitle>
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

                <Table className="no-wrap mt-3 align-middle" responsive borderless>
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
                    { searchData.slice(offset, offset + 5).map((tdata, index) => (
                        <tr key={ index } className="border-top list-td">
                            <td className="text-center">{ tdata.id }</td>
                            <td>{ tdata.name }</td>
                            <td>{ tdata.startDate + " ~ " + tdata.endDate }</td>
                            <td>
                                <span className={`p-2 bg-${ tdata.status } rounded-circle d-inline-block ms-3`}></span>
                            </td>
                            <td className="text-center">
                                <Link to={`/lecture/${ tdata.id }`}>
                                    <Button color="outline-primary">
                                        상세 보기
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <ListFooter
                    search={ search }
                    onSearchChange={ onSearchChange }
                    total={ searchData.length }
                    page={ page }
                    setPage={ setPage }
                />
            </CardBody>
        </Card>
    </div>);
};

export default Lectures;
