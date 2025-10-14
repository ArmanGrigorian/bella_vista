"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      } catch (err) {
        // noop: registration failure should not break UI
      }
    };

    const id = window.setTimeout(register, 500);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
