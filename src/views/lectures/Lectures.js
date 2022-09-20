import { Col, Row } from "reactstrap";
import LecturesList from "./LecturesList";

const Lectures = () => {
    return (
        <div>
            <Row>
                <Col lg="12">
                    <LecturesList
                        title="강의 리스트"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Lectures;
