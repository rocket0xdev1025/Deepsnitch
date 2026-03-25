import { j as e } from "./index-BN8Hac8J.js";
import { r as n } from "./wallet-libs-C4iBya-7.js";
import { I as i } from "./App-B3-mP0gp.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
import "./i18n-libs-7YlS43F0.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const m = () => {
    const [s] = n.useState([
        { id: "coinmarketcap", name: "coinmarketcap" },
        { id: "coincodex", name: "coincodex" },
        { id: "cryptonews", name: "cryptonews" },
        { id: "coinspeaker", name: "coinspeaker" },
        { id: "cryptonomist", name: "cryptonomist" },
      ]),
      [r, o] = n.useState(0);
    n.useEffect(() => {
      const t = setInterval(() => {
        o((c) => (c + 1) % s.length);
      }, 2e3);
      return () => clearInterval(t);
    }, [s.length]);
    const l = s.slice(0, 3),
      a = s.length - 3;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("style", {
          children: `
        @keyframes slideInVertical {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .logo-slide-in {
          animation: slideInVertical 0.3s ease-out;
        }
      `,
        }),
        
      ],
    });
  },
  y = n.memo(m);
export { y as default };
