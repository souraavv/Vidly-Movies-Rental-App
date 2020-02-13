// import * as Sentry from "@sentry/browser";
// import Raven from "raven-js";

function init() {
  // Sentry.init({
  //   dsn: "https://4a2834615ed84c7493c6a39ff0f5e951@sentry.io/2232835"
  // });
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
