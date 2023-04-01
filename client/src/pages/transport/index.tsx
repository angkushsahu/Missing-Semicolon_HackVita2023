import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading, Pagination, TransportCard } from "../../components";
import { routes } from "../../routing";
import { useAllProductsQuery, useGetAllTransportQuery } from "../../store";

export default function Transport() {
    const { search } = useLocation();
    const navigate = useNavigate();
    const url = new URLSearchParams(search);
    const location = url.get("location");
    const page = Number(url.get("page")) || 1;
    const [currentPage, setCurrentPage] = useState(page);
    const query = `page=${page}` + (location ? `&location=${location}` : "");
    const { isLoading, data } = useGetAllTransportQuery({ query });

    const tempData: string[] = [];
    for (let i = 0; i < 12; i++) tempData.push("");

    const totalResults = data?.totalProducts || 10;
    const resultPerPage = data?.resultPerPage || 3;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setCurrentPage(page);
    }, [currentPage, page]);

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        let urlString = `${routes.products}?`;
        urlString += location ? `location=${location}&` : "";
        urlString += `page=${pageNumber}`;
        navigate(urlString);
    };

    if (isLoading) {
        return <Loading />;
    }
    if (data && data.users) {
        return (
            <section className="max-w-6xl mx-auto px-3 pt-6 pb-10">
                <p>You searched for {location}</p>
                <section className="mt-8 flex items-center justify-center flex-wrap gap-8">
                    {data.users.map((data, idx) => (
                        <TransportCard data={data} key={idx}></TransportCard>
                    ))}
                </section>
                <Pagination currentPage={currentPage} onPageChange={onPageChange} resultPerPage={resultPerPage} totalResults={totalResults} />
            </section>
        );
    }
    return <></>;
}
