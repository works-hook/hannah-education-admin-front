import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import ListFooter from "../utils/ListFooter";
import "../../assets/customStyle.css";

const tableData = [
    {
        id: 1,
        name: "Java 기본 문법",
        progress: "100",
        status: "success",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "112",
    },
    {
        id: 2,
        name: "Java 객체 지향",
        progress: "24",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "20",
    },
    {
        id: 3,
        name: "DataBase (MySQL)",
        progress: "87",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "64",
    },
    {
        id: 4,
        name: "Git / GitHub",
        progress: "34",
        status: "warning",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "53",
    },
    {
        id: 5,
        name: "Spring Framework",
        progress: "0",
        status: "danger",
        startDate: "2022-01-03",
        endDate: "2022-06-30",
        studentCount: "11",
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
                <CardTitle className="p-2 w-100" tag="h3">{ "강의별 수강생 관리" }</CardTitle>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                        <th className="text-center">No.</th>
                        <th>제목</th>
                        <th>Period</th>
                        <th>Status</th>
                        <th>수강생</th>
                        <th>진행률</th>
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
                            <td>{ tdata.studentCount + "명" }</td>
                            <td>{ tdata.progress + "%" }</td>
                            <td>
                                <Link to={ "/student/" + tdata.id }>
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
