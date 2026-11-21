"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const isDark = resolvedTheme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={mounted ? isDark : undefined}
      title={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Toggle color theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span aria-hidden="true">
        {mounted ? (isDark ? "☼" : "☾") : "◐"}
      </span>
    </button>
  );
}
