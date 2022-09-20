import { Card, Row, Col, CardTitle, CardBody, Alert } from "reactstrap";

const ClassModifiy = () => {
    return (<Row>
        <Col>
            <Card>
                <CardTitle tag="h3" className="border-bottom p-3 mb-0">
                    <i className="bi bi-arrows-move me-2"> </i>
                    수업 관리하기
                </CardTitle>
                <CardBody>
                <Alert color="primary">
                    수업 관리는 강의를 등록하신 뒤에 사용하실 수 있습니다.
                </Alert>
                </CardBody>
            </Card>
        </Col>
    </Row>);
};

export default ClassModifiy;
