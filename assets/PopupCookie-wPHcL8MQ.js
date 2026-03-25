import { j as e, S as l } from "./index-BN8Hac8J.js";
import { r as n } from "./wallet-libs-C4iBya-7.js";
import { u as d } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
const f = ({ isOpen: o, onClose: s }) => {
  const [r, a] = n.useState(!1),
    { t } = d();
  return (
    n.useEffect(() => {
      let i;
      return (
        o
          ? (a(!0), (document.body.style.overflow = "hidden"))
          : ((i = setTimeout(() => {
              a(!1);
            }, 300)),
            (document.body.style.overflow = "")),
        () => {
          i && clearTimeout(i);
        }
      );
    }, [o]),
    n.useEffect(() => {
      const i = (c) => {
        c.key === "Escape" && s();
      };
      return (
        o && document.addEventListener("keydown", i),
        () => {
          document.removeEventListener("keydown", i);
        }
      );
    }, [o, s]),
    !r && !o
      ? null
      : e.jsxs("div", {
          className: `fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
            o ? "opacity-100" : "opacity-0"
          }`,
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
              onClick: s,
            }),
            e.jsxs("div", {
              className: `relative bg-[#0f1a17]/95 backdrop-blur-lg rounded-[16px] border border-green/30 p-6 max-w-3xl w-full mx-4 shadow-xl transform transition-all duration-300 overflow-y-auto max-h-[90vh] ${
                o ? "translate-y-0" : "translate-y-8"
              }`,
              children: [
                e.jsx("button", {
                  onClick: s,
                  className:
                    "absolute top-4 right-4 text-white/70 hover:text-white transition-colors",
                  children: e.jsx(l, { className: "w-6 h-6", name: "close" }),
                }),
                e.jsxs("div", {
                  className: "text-center mb-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "font-VT323 text-36 tracking-1 text-green mb-2",
                      children: t("cookie.title", "Cookie Management Policy"),
                    }),
                    e.jsx("div", {
                      className: "w-[60px] h-[3px] bg-green/50 mx-auto",
                    }),
                    e.jsx("p", {
                      className: "text-white/70 text-14 mt-2",
                      children: t(
                        "cookie.effectiveDate",
                        "Effective date: January 1, 2025"
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "text-white space-y-4 mb-6 text-16 leading-relaxed",
                  children: [
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.introduction.title",
                        "1. Introduction"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.introduction.content",
                        'Deepsnitch AI ("Company," "we," "us," or "our") uses cookies and similar tracking technologies on its website and platform to ensure proper functionality, improve user experience, and support analytics and security. This Cookie Management Policy explains what cookies are, how we use them, and the choices available to you.'
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.introduction.consent",
                        "By accessing or using our website and services, you consent to the use of cookies as described in this policy. If you do not agree, you may adjust your browser settings to manage or disable cookies; however, doing so may affect certain features of the website."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.whatAre.title",
                        "2. What Are Cookies?"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.whatAre.content",
                        "Cookies are small text files stored on your device (such as a computer, tablet, or mobile device) when you visit a website. They allow websites to recognize your device and store information about your preferences or past actions to enhance functionality and user experience."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.types.title",
                        "3. Types of Cookies We Use"
                      ),
                    }),
                    e.jsx("h4", {
                      className: "text-18 font-semibold text-green/90 mb-2",
                      children: t(
                        "cookie.types.essential.title",
                        "3.1 Essential Cookies"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.types.essential.content",
                        "These cookies are necessary for the website to function properly and cannot be disabled. They include cookies required for security, authentication, and core site functionality."
                      ),
                    }),
                    e.jsx("h4", {
                      className: "text-18 font-semibold text-green/90 mb-2",
                      children: t(
                        "cookie.types.performance.title",
                        "3.2 Performance Cookies"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.types.performance.content",
                        "These cookies help us understand how visitors interact with our website by collecting aggregated and anonymous usage data, allowing us to improve performance and usability."
                      ),
                    }),
                    e.jsx("h4", {
                      className: "text-18 font-semibold text-green/90 mb-2",
                      children: t(
                        "cookie.types.functional.title",
                        "3.3 Functional Cookies"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.types.functional.content",
                        "These cookies enable enhanced functionality and personalization, such as remembering user preferences and settings."
                      ),
                    }),
                    e.jsx("h4", {
                      className: "text-18 font-semibold text-green/90 mb-2",
                      children: t(
                        "cookie.types.marketing.title",
                        "3.4 Marketing Cookies"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.types.marketing.content",
                        "These cookies may be used to deliver relevant content or advertisements and to track interactions across websites, where applicable."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.howWeUse.title",
                        "4. How We Use Cookies"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.howWeUse.intro",
                        "We use cookies to:"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "cookie.howWeUse.security",
                            "Ensure website security and proper operation"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "cookie.howWeUse.experience",
                            "Improve user experience and functionality"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "cookie.howWeUse.analyze",
                            "Analyze website traffic and usage trends"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "cookie.howWeUse.deliver",
                            "Deliver relevant content and communications"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "cookie.howWeUse.compliance",
                            "Support compliance with legal, regulatory, and security requirements"
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.thirdParty.title",
                        "5. Third-Party Cookies"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.thirdParty.content",
                        "We may permit third-party service providers to place cookies on our website for purposes such as analytics, advertising, or security. These third parties operate independently and are responsible for their own cookie and privacy practices. We encourage you to review their respective privacy policies for more information."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.managing.title",
                        "6. Managing Cookies"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.managing.content",
                        "You can manage or delete cookies at any time through your browser settings. Disabling cookies may limit the availability or functionality of certain features on our website."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.updates.title",
                        "7. Updates to This Policy"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "cookie.updates.content",
                        "We may update this Cookie Management Policy from time to time. Any changes will be posted on this page, and continued use of our website or services after updates constitutes acceptance of the revised policy."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "cookie.contact.title",
                        "8. Contact Information"
                      ),
                    }),
                    e.jsxs("p", {
                      children: [
                        t(
                          "cookie.contact.content",
                          "If you have any questions about this Cookie Management Policy, please contact us at:"
                        ),
                        " ",
                        e.jsx("a", {
                          href: "mailto:support@deepsnitch.ai",
                          className: "text-green hover:underline",
                          children: "support@deepsnitch.ai",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-white/70 text-14 mt-6",
                      children: t(
                        "cookie.acknowledgment",
                        "By using Deepsnitch AI's website and services, you acknowledge that you have read, understood, and agreed to this Cookie Management Policy."
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
  );
};
export { f as default };
