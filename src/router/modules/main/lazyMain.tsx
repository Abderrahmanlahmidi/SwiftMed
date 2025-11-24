import { lazy, Suspense, type JSX } from "react";
import PageLoader from "../../../components/ui/loaders/pageLoader";


export const Home = lazy(() => import("../../../features/main/pages/home"))


export const withSuspense = (Component: JSX.Element) => {
  return <Suspense fallback={<PageLoader />}>{Component}</Suspense>;
};