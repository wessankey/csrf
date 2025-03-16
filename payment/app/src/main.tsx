import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "./pages/Login.tsx";
import { PaymentPage } from "./pages/Pay.tsx";
import "./index.css";
import { SuccessPage } from "./pages/Success.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
