import { Button, Col, Input, InputGroup, Row } from "reactstrap";
import Pagination from "./Pagination";

const ListFooter = ({search, onSearchChange, total, page, setPage}) => {
    return <Row className="mx-3">
        <Col>
            <InputGroup>
                <Button color="customPrimary" className="searchBtn">
                    검색
                </Button>
                <Input id="search" name="search" className="search" onChange={ onSearchChange } value={ search }/>
            </InputGroup>
        </Col>
        <Col className="d-flex justify-content-end">
            <Pagination
                total={total}
                limit={5}
                page={page}
                setPage={setPage}
            />
        </Col>
    </Row>
}

export default ListFooter;