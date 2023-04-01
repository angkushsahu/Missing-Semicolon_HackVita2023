import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routing } from "./routing";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/loading";
import { removeUser, setUser, useAppDispatch, useGetUserQuery } from "./store";

export default function App() {
    const dispatch = useAppDispatch();
    const { data: userData } = useGetUserQuery();

    useEffect(() => {
        if (userData) {
            dispatch(setUser({ user: userData.user }));
        } else {
            dispatch(removeUser());
        }
    }, [userData?.user, dispatch, userData]);

    return (
        <main className="min-h-screen bg-bg-col overflow-x-hidden">
            <Suspense fallback={<Loading />}>
                <RouterProvider router={routing} />
            </Suspense>
            <ToastContainer position="top-center" />
        </main>
    );
}
