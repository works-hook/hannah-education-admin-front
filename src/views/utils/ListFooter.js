import { Button, Input, InputGroup, } from "reactstrap";
import Pagination from "./Pagination";

const ListFooter = ({search, onSearchChange, total, page, setPage}) => {
    return <div className="list-footer">
        <div>
            <InputGroup>
                <Button color="customPrimary" className="searchBtn">
                    검색
                </Button>
                <Input id="search" name="search" className="search" onChange={ onSearchChange } value={ search }/>
            </InputGroup>
        </div>
        <div className="d-flex justify-content-end">
            <Pagination
                total={total}
                limit={5}
                page={page}
                setPage={setPage}
            />
        </div>
    </div>
}

export default ListFooter;