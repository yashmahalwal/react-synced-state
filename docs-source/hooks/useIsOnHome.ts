import { useIsOnUrl } from "./useIsOnUrl";
import { Pages } from "../navigationData/pages";

export function useIsOnHome() {
  return useIsOnUrl(Pages.Home.path);
}
