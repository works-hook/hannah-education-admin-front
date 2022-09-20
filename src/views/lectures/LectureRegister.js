import { Col, Row } from "reactstrap";
import LectureRegister from "./components/lecture/LectureRegister";
import ClassRegister from "./components/class/ClassRegister";

const LectureClass = () => {
    return (
        <div>
            <Row>
                <Col lg="12">
                    <LectureRegister />
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <ClassRegister />
                </Col>
            </Row>
        </div>
    );
};

export default LectureClass;
