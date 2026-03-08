import { lazy, Suspense, type JSX } from "react";
import PageLoader from "../../../components/ui/loaders/pageLoader";


export const Home = lazy(() => import("../../../features/main/pages/home"))
export const Dashboard = lazy(() => import("../../../features/admin/main/dashboard"))
export const Map = lazy(() => import("../../../features/admin/pages/map"))


export const withSuspense = (Component: JSX.Element) => {
  return <Suspense fallback={<PageLoader />}>{Component}</Suspense>;
};