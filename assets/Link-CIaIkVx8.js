import { j as r } from "./index-BN8Hac8J.js";
import { r as k } from "./wallet-libs-C4iBya-7.js";
import { P as e } from "./App-B3-mP0gp.js";
import { u as j, T as w } from "./i18n-libs-7YlS43F0.js";
import { N } from "./react-vendor-CKqXOJaQ.js";
const g = ({
  children: n,
  className: p = "",
  to: o,
  onClick: t,
  variant: u = "primary",
  size: m = "md",
  disabled: s = !1,
  i18nKey: a,
  fullWidth: c = !1,
  rounded: x = "md",
  type: f = "button",
  icon: l,
}) => {
  const { t: T } = j(),
    b = {
      primary:
        "font-VT323 text-24 leading-30 lg:text-30 lg:leading-30 tracking-1 text-dark bg-gradient-primary  rounded-[100px] shadow-soft hover:shadow-soft-hover transition-all duration-300",
      secondary: "",
      outline:
        "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20",
      danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
      success:
        "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
      ghost:
        "bg-transparent hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-300",
    },
    h = {
      sm: "py-1 px-3 text-sm",
      md: "px-[24px] py-[12px] lg:px-[40px] lg:py-[17px]",
      lg: "px-[24px] py-[12px] lg:px-[32px] lg:py-[17px]",
    },
    y = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    d = [
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      b[u],
      h[m],
      y[x],
      c ? "w-full" : "",
      s ? "opacity-50 cursor-not-allowed" : "",
      p,
    ]
      .filter(Boolean)
      .join(" "),
    i = r.jsxs(r.Fragment, {
      children: [
        l && r.jsx("span", { className: "mr-2", children: l }),
        r.jsx("span", {
          children: a ? r.jsx(w, { i18nKey: a, children: n }) : n,
        }),
      ],
    });
  return o
    ? r.jsx(N, {
        to: o,
        className: d,
        onClick: s ? (v) => v.preventDefault() : t,
        children: i,
      })
    : r.jsx("button", {
        type: f,
        onClick: t,
        className: d,
        disabled: s,
        children: i,
      });
};
g.propTypes = {
  children: e.node,
  className: e.string,
  to: e.string,
  onClick: e.func,
  variant: e.oneOf([
    "primary",
    "secondary",
    "outline",
    "danger",
    "success",
    "ghost",
  ]),
  size: e.oneOf(["sm", "md", "lg"]),
  disabled: e.bool,
  i18nKey: e.string,
  fullWidth: e.bool,
  rounded: e.oneOf(["none", "sm", "md", "lg", "full"]),
  type: e.string,
  icon: e.node,
};
k.memo(g);
