import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <Provider store={store}>
        <RouterProvider router={router}  />
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
     