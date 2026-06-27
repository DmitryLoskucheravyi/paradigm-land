import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const THEME_KEY = "theme";

const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
};

export const Toggler = () => {
    const W = 96;
    const H = 48;
    const PAD = 6;
    const KNOB = H - PAD * 2;
    const [theme, setTheme] = useState(getInitialTheme);
    const isDark = theme === "dark";

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={isDark ? "Увімкнути світлу тему" : "Увімкнути темну тему"}
            onClick={toggleTheme}
            style={{
                display: "block",
                position: "relative",
                width: W,
                height: H,
                borderRadius: H / 2,
                border: "none",
                cursor: "pointer",
                padding: 0,
                outline: "none",
                background: isDark ? "#15161a" : "#ffffff",
                boxShadow: isDark
                    ? "inset 0 0 0 1px rgba(255,255,255,0.06)"
                    : "inset 0 0 0 1px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.12)",
                transition: "background 350ms ease, box-shadow 350ms ease",
            }}
        >
            <span
                style={{
                    position: "absolute",
                    left: PAD + 7,
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    color: isDark ? "rgba(255,255,255,0.55)" : "#2b2d33",
                    transition: "color 350ms ease, opacity 350ms ease",
                    opacity: isDark ? 1 : 0,
                    pointerEvents: "none",
                }}
            >
                <Sun size={20} strokeWidth={2.4} />
            </span>

            <span
                style={{
                    position: "absolute",
                    right: PAD + 7,
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    color: isDark ? "rgba(255,255,255,0.55)" : "#2b2d33",
                    transition: "color 350ms ease, opacity 350ms ease",
                    opacity: isDark ? 0 : 1,
                    pointerEvents: "none",
                }}
            >
                <Moon size={18} strokeWidth={2.4} />
            </span>

            <span
                style={{
                    position: "absolute",
                    top: PAD,
                    left: PAD,
                    width: KNOB,
                    height: KNOB,
                    borderRadius: "50%",
                    background: isDark ? "#ffffff" : "#2b2d33",
                    transform: `translateX(${isDark ? W - KNOB - PAD * 2 : 0}px)`,
                    transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1), background 350ms ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }}
            >
                {isDark ? (
                    <Moon size={18} strokeWidth={2.4} color="#15161a" />
                ) : (
                    <Sun size={20} strokeWidth={2.4} color="#ffffff" />
                )}
            </span>
        </button>
    );
};
