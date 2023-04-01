import Paginate from "react-js-pagination";

export interface PaginationProps {
    currentPage: number;
    resultPerPage: number;
    totalResults: number;
    onPageChange: (pageNumber: number) => void;
}

export default function Pagination(props: PaginationProps) {
    const { currentPage, onPageChange, resultPerPage, totalResults } = props;

    return (
        <div className="pagination_container">
            <Paginate
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={totalResults}
                onChange={onPageChange}
                pageRangeDisplayed={3}
                nextPageText="Next"
                prevPageText="Previous"
                firstPageText="First"
                lastPageText="Last"
                activeClass="active_page"
                activeLinkClass="active_link__page"
                hideDisabled={true}
            />
        </div>
    );
}
