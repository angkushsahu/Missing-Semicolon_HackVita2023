import { Navigate, Outlet } from "react-router-dom";
import { useGetUserQuery } from "../store";
import Loading from "./loading";
import { routes } from "../routing";

const IsAuthenticated = () => {
    const { data: userData, isLoading } = useGetUserQuery();
    if (isLoading) {
        return <Loading />;
    } else if (userData?.success && userData.user) {
        return <Outlet />;
    } else {
        return <Navigate to={routes.login} replace={true} />;
    }
};

export default IsAuthenticated;
