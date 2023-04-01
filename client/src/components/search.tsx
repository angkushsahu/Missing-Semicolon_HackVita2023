import { FormEvent, RefObject } from "react";
import { BsSearch } from "react-icons/bs";

export interface SearchProps {
    onSearch: (e: FormEvent) => Promise<void>;
    searchRef: RefObject<HTMLInputElement>;
    placeholder: string;
}

export default function Search({ searchRef, onSearch, placeholder }: SearchProps) {
    return (
        <section className="max-w-6xl mx-auto px-3 component-height flex items-center justify-center">
            <form onSubmit={onSearch} className="max-w-2xl w-full">
                <div
                    className="flex items-center justify-center bg-gray-200 rounded-md shadow-lg cursor-pointer"
                    onClick={() => searchRef.current?.focus()}
                >
                    <BsSearch className="mx-2" size="16" />
                    <label htmlFor="search"></label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder={placeholder + " ...."}
                        title={placeholder}
                        className="flex-1 py-3 px-1 bg-transparent outline-none placeholder:text-gray-600"
                        ref={searchRef}
                    />
                    <button type="submit" className="hidden xs:block rounded-s-none py-3">
                        Search
                    </button>
                </div>
                <button type="submit" className="block xs:hidden w-full mt-4">
                    Search
                </button>
            </form>
        </section>
    );
}
