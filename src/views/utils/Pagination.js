import { Pagination as StrapPagination, PaginationItem, PaginationLink} from "reactstrap";

const Pagination = ({ total, limit, page, setPage }) => {
    const numPages = Math.ceil(total / limit);

    return (
        <>
            <StrapPagination>
                <PaginationItem disabled={ page === 1 }>
                    <PaginationLink previous onClick={() => setPage(page - 1)} />
                </PaginationItem>
                { Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <PaginationItem active={ page === i + 1 ? "page" : null }>
                            <PaginationLink key={ i + 1 } onClick={ () => setPage(i + 1) }>
                                { i + 1 }
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                <PaginationItem disabled={ page === numPages }>
                    <PaginationLink next onClick={ () => setPage(page + 1) } />
                </PaginationItem>
            </StrapPagination>
        </>
    );
}

export default Pagination;