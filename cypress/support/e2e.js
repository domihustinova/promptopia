import "@testing-library/cypress/add-commands";
import { configure } from "@testing-library/cypress";

configure({ testIdAttribute: "data-test" });

/**
 * Hides any command log entries in the UI that originate from fetch/XHR requests
 */
const hideXhrRequests = () => {
  const app = window.top;

  if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");
    app.document.head.appendChild(style);
  }
};

hideXhrRequests();
