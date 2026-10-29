"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const dark = resolvedTheme === "dark";

  return (
    <button
      className="grid size-9 place-items-center border border-(--line) text-(--ink) transition-colors hover:border-(--accent) hover:text-(--accent)"
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={
        mounted ? `Switch to ${dark ? "light" : "dark"} mode` : "Toggle theme"
      }
      title={
        mounted ? `Switch to ${dark ? "light" : "dark"} mode` : "Toggle theme"
      }
    >
      {mounted ? (
        dark ? (
          <Sun size={16} />
        ) : (
          <Moon size={16} />
        )
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
