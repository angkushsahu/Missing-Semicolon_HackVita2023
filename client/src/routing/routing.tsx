import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Header } from "../components";
import * as Component from "./lazyLoading";
import routes from "./routes";

const routing = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Header />}>
                <Route path={routes.home} element={<Component.Home />} />
            </Route>
            <Route path={routes.login} element={<Component.Login />} />
            <Route path={routes.forgotPassword} element={<Component.Forgotpassword />} />
            <Route path={routes.resetPassword} element={<Component.ResetPassword />} />
            <Route path={routes.changePassword} element={<Component.ChangePassword />} />
            <Route path={routes.signupCriteria} element={<Component.SignupCriteria />} />
            <Route path={routes.signupAsUser} element={<Component.SignupAsUser />} />
            <Route path={routes.signupAsTransport} element={<Component.SignupAsTransport />} />
            <Route path={routes.signupAsStorage} element={<Component.SignupAsStorage />} />
        </Route>
    )
);

export default routing;
