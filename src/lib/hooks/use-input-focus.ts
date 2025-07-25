import { useEffect, useRef } from "react";

export function useInputFocus() {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return { ref };
}
