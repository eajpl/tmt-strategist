export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Observatoire TMT & Finance";

export const APP_LOGO = "/logo-tmt-finance.png";

export const getLoginUrl = () => {
  return "/login";
};
