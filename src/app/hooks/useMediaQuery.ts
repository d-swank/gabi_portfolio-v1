import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    listener(); // Set initial state
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
