import { useState } from "react";
import { Card, Row, Col, CardTitle, CardBody, Table, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ClassModal from "../ClassModal"

const tableData = [
    {
        title: "1. java 자료형",
        classDate: "2022-01-03 13:00"
    },
    {
        title: "2. java 클래스",
        classDate: "2022-01-03 13:00"
    },
    {
        title: "3. java 추상화",
        classDate: "2022-01-03 13:00"
    },
    {
        title: "4. java 인터페이스",
        classDate: "2022-01-03 13:00"
    },
];

const ClassModifiy = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
        console.log(modal)
    };

    return (<Row>
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
                        <Col className="d-flex flex-row-reverse align-items-center">
                            <Button variant="secondary" onClick={toggle}>
                                수업 등록
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <CardBody>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                        <th>제목</th>
                        <th>Period</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((tdata, index) => (
                        <tr key={ index } className="border-top">
                            <td>{ tdata.title }</td>
                            <td>{ tdata.classDate }</td>
                            <td>
                                <Link to="/modify">
                                    <i className="bi bi-pencil me-2" onClick={toggle}> </i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <ClassModal toggle={toggle} modal={modal} />
                </CardBody>
            </Card>
        </Col>
    </Row>);
};

export default ClassModifiy;
