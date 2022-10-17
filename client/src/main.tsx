import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getClient } from "./queryClient";
import { worker } from "./lib/mocks/browser";
import "./scss/index.scss";
import { RecoilRoot } from "recoil";

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={getClient()}>
        <RecoilRoot>
          <ReactQueryDevtools />
          <App />
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
