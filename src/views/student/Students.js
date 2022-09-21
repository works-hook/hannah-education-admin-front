import { Card, CardBody, CardTitle, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
    {
        id: 1,
        avatar: user1,
        name: "Hanna Gover",
        progress: "100",
        status: "success",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "112",
    },
    {
        id: 2,
        avatar: user2,
        name: "Hanna Gover",
        progress: "24",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "20",
    },
    {
        id: 3,
        avatar: user3,
        name: "Hanna Gover",
        progress: "87",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "64",
    },
    {
        id: 4,
        avatar: user4,
        name: "Hanna Gover",
        progress: "34",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "53",
    },
    {
        id: 5,
        avatar: user5,
        name: "Hanna Gover",
        progress: "0",
        status: "danger",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "11",
    },
];

const Lectures = () => {
    return (<div>
        <Card>
            <CardBody>
                <CardTitle className="p-2 w-100" tag="h3">{ "강의별 수강생 관리" }</CardTitle>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>Period</th>
                        <th>Status</th>
                        <th>수강생</th>
                        <th>진행률</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    { tableData.map((tdata, index) => (
                        <tr key={ index } className="border-top">
                            <td>{ tdata.id }</td>
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
                            <td>{ tdata.startDate + " ~ " + tdata.endDate }</td>
                            <td>
                                <span className={`p-2 bg-${ tdata.status } rounded-circle d-inline-block ms-3`}></span>
                            </td>
                            <td>{ tdata.studentCount + "명" }</td>
                            <td>{ tdata.progress + "%" }</td>
                            <td>
                                <Link to={ "/student/" + tdata.id }>
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
    </div>);
};

export default Lectures;
