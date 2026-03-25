import { j as e, S as l } from "./index-BN8Hac8J.js";
import { r as s } from "./wallet-libs-C4iBya-7.js";
import "./App-B3-mP0gp.js";
import { u as d } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
import "./index-Chjiymov.js";
import "./v4-C6aID195.js";
import "./empty-Bo4iX0pm.js";
const b = ({ isOpen: i, onClose: n }) => {
  const [o, a] = s.useState(!1),
    { t } = d();
  return (
    s.useEffect(() => {
      let r;
      return (
        i
          ? (a(!0), (document.body.style.overflow = "hidden"))
          : ((r = setTimeout(() => {
              a(!1);
            }, 300)),
            (document.body.style.overflow = "")),
        () => {
          r && clearTimeout(r);
        }
      );
    }, [i]),
    s.useEffect(() => {
      const r = (c) => {
        c.key === "Escape" && n();
      };
      return (
        i && document.addEventListener("keydown", r),
        () => {
          document.removeEventListener("keydown", r);
        }
      );
    }, [i, n]),
    !o && !i
      ? null
      : e.jsxs("div", {
          className: `fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
            i ? "opacity-100" : "opacity-0"
          }`,
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
              onClick: n,
            }),
            e.jsxs("div", {
              className: `relative bg-[#0f1a17]/95 backdrop-blur-lg rounded-[16px] border border-green/30 p-6 max-w-3xl w-full mx-4 shadow-xl transform transition-all duration-300 overflow-y-auto max-h-[90vh] ${
                i ? "translate-y-0" : "translate-y-8"
              }`,
              children: [
                e.jsx("button", {
                  onClick: n,
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
                      children: t(
                        "privacy.title",
                        "Deep Snitch AI – Privacy Policy"
                      ),
                    }),
                    e.jsx("div", {
                      className: "w-[60px] h-[3px] bg-green/50 mx-auto",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "text-white space-y-4 mb-6 text-16 leading-relaxed",
                  children: [
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("privacy.introduction.title", "Introduction"),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.introduction.content",
                        "This Privacy Policy outlines how Deep Snitch AI collects, uses, and protects your personal information when you use our platform or participate in the DSNT token sale. We are committed to safeguarding your privacy and ensuring transparency in our data practices."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "privacy.collect.title",
                        "Information We Collect"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.collect.intro",
                        "We may collect the following types of information:"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsxs("strong", {
                              children: [
                                t(
                                  "privacy.collect.personal.title",
                                  "Personal Information:"
                                ),
                                " ",
                              ],
                            }),
                            t(
                              "privacy.collect.personal.content",
                              "Email address, wallet address, and other information you voluntarily provide."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsxs("strong", {
                              children: [
                                t(
                                  "privacy.collect.transaction.title",
                                  "Transaction Data:"
                                ),
                                " ",
                              ],
                            }),
                            t(
                              "privacy.collect.transaction.content",
                              "Records of DSNT tokens purchased and blockchain transactions."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsxs("strong", {
                              children: [
                                t("privacy.collect.usage.title", "Usage Data:"),
                                " ",
                              ],
                            }),
                            t(
                              "privacy.collect.usage.content",
                              "Information about how you interact with our platform, including IP address, browser type, and operating system."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsxs("strong", {
                              children: [
                                t(
                                  "privacy.collect.cookies.title",
                                  "Cookies and Tracking:"
                                ),
                                " ",
                              ],
                            }),
                            t(
                              "privacy.collect.cookies.content",
                              "We use cookies and similar technologies to enhance your experience and collect usage information."
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "privacy.use.title",
                        "How We Use Your Information"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.use.intro",
                        "We use collected information for the following purposes:"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "privacy.use.facilitating",
                            "Facilitating your participation in the DSNT token sale"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.use.providing",
                            "Providing and improving our platform's functionality"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.use.communicating",
                            "Communicating important updates and announcements"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.use.preventing",
                            "Preventing fraud and ensuring compliance with applicable laws"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.use.analyzing",
                            "Analyzing usage patterns to enhance user experience"
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("privacy.security.title", "Data Security"),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.security.content",
                        "We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security of your data."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("privacy.sharing.title", "Data Sharing"),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.sharing.intro",
                        "We may share your information with:"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsxs("strong", {
                              children: [
                                t(
                                  "privacy.sharing.providers.title",
                                  "Service Providers:"
                                ),
                                " ",
                              ],
                            }),
                            t(
                              "privacy.sharing.providers.content",
                              "Third parties who assist us in operating our platform and conducting token sales."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsxs("strong", {
                              children: [
                                t(
                                  "privacy.sharing.legal.title",
                                  "Legal Requirements:"
                                ),
                                " ",
                              ],
                            }),
                            t(
                              "privacy.sharing.legal.content",
                              "When required by law, court order, or governmental authority."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsxs("strong", {
                              children: [
                                t(
                                  "privacy.sharing.business.title",
                                  "Business Transfers:"
                                ),
                                " ",
                              ],
                            }),
                            t(
                              "privacy.sharing.business.content",
                              "In connection with a merger, acquisition, or sale of assets."
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.sharing.noSell",
                        "We do not sell your personal information to third parties."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("privacy.rights.title", "Your Rights"),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.rights.intro",
                        "Depending on your location, you may have the following rights regarding your data:"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "privacy.rights.access",
                            "Access to your personal information"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.rights.correction",
                            "Correction of inaccurate data"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.rights.deletion",
                            "Deletion of your personal information"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.rights.objection",
                            "Objection to or restriction of processing"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "privacy.rights.portability",
                            "Data portability"
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "privacy.children.title",
                        "Children's Privacy"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.children.content",
                        "Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "privacy.changes.title",
                        "Changes to This Policy"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "privacy.changes.content",
                        "We may update this Privacy Policy periodically. Any changes will be posted on our platform, and the revised policy will be effective immediately upon posting."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("privacy.contact.title", "Contact Us"),
                    }),
                    e.jsxs("p", {
                      children: [
                        t(
                          "privacy.contact.content",
                          "If you have any questions or concerns about our Privacy Policy, please contact us at:"
                        ),
                        " ",
                        e.jsx("a", {
                          href: "mailto:deepsnitchai@proton.me",
                          className: "text-green hover:underline",
                          children: "deepsnitchai@proton.me",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
  );
};
export { b as default };
