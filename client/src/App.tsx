import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { routing } from "./routing";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/loading";

export default function App() {
    return (
        <main className="min-h-screen bg-bg-col">
        <Suspense fallback={<Loading />}>
            <RouterProvider router={routing} />
        </Suspense>
    </main>
    );
}