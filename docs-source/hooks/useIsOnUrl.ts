import { useMatch } from "react-router-dom";

export function useIsOnUrl(url: string) {
  const matchInformation = useMatch({ path: url, end: true, caseSensitive: true });
  return !!matchInformation;
}
