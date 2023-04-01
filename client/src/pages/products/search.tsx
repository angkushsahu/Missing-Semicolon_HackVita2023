import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../../components";
import { routes } from "../../routing";

export default function ProductsSearch() {
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function onSearch(e: FormEvent) {
        e.preventDefault();
        const search = searchRef.current?.value;
        if (!search) return;
        navigate(`${routes.products}?type=${search}&page=1`);
    }

    return <Search onSearch={onSearch} searchRef={searchRef} placeholder="Search our products" />;
}
