import "./App.css";
import Router from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/store";

const queryClient = new QueryClient();
function App() {
    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Router />
                </QueryClientProvider>
            </Provider>
        </>
    );
}

export default App;
