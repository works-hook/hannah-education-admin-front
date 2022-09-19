import { Col, Row } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";

const Lectures = () => {
    return (
        <div>
            <Row>
                <Col lg="12">
                    <ProjectTables
                        title="강의 리스트"
                        subTitle="강의 리스트 입니다."
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Lectures;
