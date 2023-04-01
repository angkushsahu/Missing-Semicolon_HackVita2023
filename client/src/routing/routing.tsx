import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Header } from "../components";
import * as Component from "./lazyLoading";
import routes from "./routes";

const routing = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Header />}>
                <Route path={routes.home} element={<Component.Home />} />
                <Route path={routes.productsSearch} element={<Component.ProductsSearch />} />
                <Route path={routes.products} element={<Component.Products />} />
                <Route path={routes.transportSearch} element={<Component.TransportSearch />} />
                <Route path={routes.transport} element={<Component.Transport />} />
                <Route path={routes.storageSearch} element={<Component.StorageSearch />} />
                <Route path={routes.storage} element={<Component.Storage />} />
                <Route path={routes.userProfile} element={<Component.UserProfile />} />
                <Route path={routes.transportProfile} element={<Component.TransportProfile />} />
                <Route path={routes.storageProfile} element={<Component.StorageProfile />} />
                <Route path={routes.productDescription} element={<Component.ProductDescription />} />
            </Route>
            <Route path={routes.signupCriteria} element={<Component.SignupCriteria />} />
            <Route path={routes.signupAsUser} element={<Component.SignupAsUser />} />
            <Route path={routes.signupAsTransport} element={<Component.SignupAsTransport />} />
            <Route path={routes.signupAsStorage} element={<Component.SignupAsStorage />} />
            <Route path={routes.login} element={<Component.Login />} />
            <Route path={routes.forgotPassword} element={<Component.Forgotpassword />} />
            <Route path={routes.resetPassword} element={<Component.ResetPassword />} />
            <Route path={routes.changePassword} element={<Component.ChangePassword />} />
            <Route path={routes.updateUserAsUser} element={<Component.UpdateUserAsUser />} />
            <Route path={routes.updateUserAsTransport} element={<Component.UpdateUserAsTransport />} />
            <Route path={routes.updateUserAsStorage} element={<Component.UpdateUserAsStorage />} />
        </Route>
    )
);

export default routing;
