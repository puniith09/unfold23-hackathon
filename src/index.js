import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoute from "./routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId="828839030628-jcji7k1uhk59s071n56080tq2744caep.apps.googleusercontent.com">
      <AppRoute />
    </GoogleOAuthProvider>
  </StrictMode>
);
