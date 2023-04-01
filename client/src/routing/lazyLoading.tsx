import { lazy } from "react";

export const Home = lazy(() => import("../pages/home"));
// products
export const Products = lazy(() => import("../pages/products"));
export const ProductsSearch = lazy(() => import("../pages/products/search"));
export const ProductDescription = lazy(() => import("../pages/products/description"));
// transport
export const Transport = lazy(() => import("../pages/transport"));
export const TransportSearch = lazy(() => import("../pages/transport/search"));
// storage
export const Storage = lazy(() => import("../pages/storage"));
export const StorageSearch = lazy(() => import("../pages/storage/search"));
// profile
export const UserProfile = lazy(() => import("../pages/profiles/userProfile"));
export const TransportProfile = lazy(() => import("../pages/profiles/transportProfile"));
export const StorageProfile = lazy(() => import("../pages/profiles/storageProfile"));
// signup
export const SignupCriteria = lazy(() => import("../pages/signup/signupCriteria"));
export const SignupAsUser = lazy(() => import("../pages/signup/signupAsUser"));
export const SignupAsTransport = lazy(() => import("../pages/signup/signupAsTransport"));
export const SignupAsStorage = lazy(() => import("../pages/signup/signupAsStorage"));

export const Login = lazy(() => import("../pages/login"));
export const Forgotpassword = lazy(() => import("../pages/forgotPassword"));
export const ProductCard = lazy(() => import("../components/productCard"));
export const ResetPassword = lazy(() => import("../pages/resetPassword"));
export const ChangePassword = lazy(() => import("../pages/changePassword"));

export const UpdateUserAsStorage = lazy(() => import("../pages/updateUser/updateUserAsStorage"));
export const UpdateUserAsTransport = lazy(() => import("../pages/updateUser/updateUserAsTransport"));
export const UpdateUserAsUser = lazy(() => import("../pages/updateUser/updateUserAsUser"));
