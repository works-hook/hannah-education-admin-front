import { Col, Row } from "reactstrap";
import LectureModify from "./components/lecture/LectureModify";
import ClassModify from "./components/class/ClassModify";

const LectureClass = () => {
    return (
        <div>
            <Row>
                <Col lg="12">
                    <LectureModify />
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <ClassModify />
                </Col>
            </Row>
        </div>
    );
};

export default LectureClass;
