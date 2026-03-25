import { j as e, S as c } from "./index-BN8Hac8J.js";
import { r as o } from "./wallet-libs-C4iBya-7.js";
import { u as d } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
const g = ({ isOpen: i, onClose: n }) => {
  const [a, r] = o.useState(!1),
    { t } = d();
  return (
    o.useEffect(() => {
      let s;
      return (
        i
          ? (r(!0), (document.body.style.overflow = "hidden"))
          : ((s = setTimeout(() => {
              r(!1);
            }, 300)),
            (document.body.style.overflow = "")),
        () => {
          s && clearTimeout(s);
        }
      );
    }, [i]),
    o.useEffect(() => {
      const s = (l) => {
        l.key === "Escape" && n();
      };
      return (
        i && document.addEventListener("keydown", s),
        () => {
          document.removeEventListener("keydown", s);
        }
      );
    }, [i, n]),
    !a && !i
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
                  children: e.jsx(c, { className: "w-6 h-6", name: "close" }),
                }),
                e.jsxs("div", {
                  className: "text-center mb-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "font-VT323 text-36 tracking-1 text-green mb-2",
                      children: t(
                        "risks.title",
                        "DeepSnitch AI – Risks Disclosure Statement"
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
                    e.jsx("p", {
                      children: t(
                        "risks.introduction",
                        "This Risks Disclosure Statement provides information about potential risks of purchasing or holding the DeepSnitch token $DSNT, participation in the DeepSnitch AI token sale, including presale."
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "risks.noGuarantee",
                        "We do not guarantee accuracy, completeness, reliability, or usefulness. Participation is voluntary and at your own risk."
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "risks.warning",
                        "Purchasing the $DSNT token involves a high degree of risk. Potential purchasers should carefully consider the following risk factors, alongside all other information contained in the DeepSnitch AI whitepaper, this Statement and Terms of Sale and Use before making a decision to acquire $DSNT."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "risks.token.title",
                        "1. Risks Relating to $DSNT token"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.token.value.title",
                                "Risk of Loss of Value:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.token.value.content",
                              "As with any crypto-asset, the value of $DSNT may fluctuate significantly. Holders may lose their value in part or in full. The market price of $DSNT is not guaranteed and may be subject to extreme volatility due to market sentiment, regulatory news or broader economic factors."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.token.liquidity.title",
                                "Liquidity Risk:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.token.liquidity.content",
                              "$DSNT may become illiquid. There is no guarantee that $DSNT will be listed on any specific centralised or decentralised exchange (CEX/DEX) or that an active secondary market will develop. You may not be able to sell or exchange your tokens when desired."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.token.transferability.title",
                                "Transferability Restrictions:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.token.transferability.content",
                              "$DSNT token may not always be transferable between parties or platforms due to technical limitations or regulatory restrictions imposed on specific jurisdictions (e.g., sanctions lists)."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.token.exchangeability.title",
                                "Exchangeability:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.token.exchangeability.content",
                              "$DSNT may not be exchangeable against the goods or services described in the DeepSnitch AI whitepaper, particularly in the event of a failure, suspension or discontinuation of the DeepSnitch AI project."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.token.utility.title",
                                "Utility and Functionality:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.token.utility.content",
                              "Functionality of $DSNT is not conclusively defined before the token sale and/or publication of the DeepSnitch AI whitepaper. DeepSnitch has the right to add or remove functionality of $DSNT. You shall be aware of the fact that the $DSNT may not provide token holders with any functionality at all."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.token.protection.title",
                                "Exclusion of Protection Schemes:"
                              ),
                            }),
                            e.jsxs("ul", {
                              className: "list-disc pl-6 mt-2 space-y-1",
                              children: [
                                e.jsx("li", {
                                  children: t(
                                    "risks.token.protection.eu",
                                    "$DSNT token is not covered by the investor compensation schemes under Directive 97/9/EC of the European Parliament and of the Council. In the event of a project failure or loss of value, you will not be reimbursed by any EU-backed compensation fund;"
                                  ),
                                }),
                                e.jsx("li", {
                                  children: t(
                                    "risks.token.protection.deposit",
                                    "$DSNT token is not covered by the deposit guarantee schemes under Directive 2014/49/EU."
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.token.yields.title",
                                "No Expectations of Yields:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.token.yields.content",
                              "Staking rewards and yields depend entirely on product adoption, network conditions and resources allocated to staking rewards. Staking rewards and yields may be changed, reduced or cancelled at DeepSnitch's sole discretion to ensure the long-term viability of the DeepSnitch AI project."
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "risks.project.title",
                        "2. Risks Relating to the Project and Technology"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.project.development.title",
                                "Product Development & Modification:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.project.development.content",
                              "DeepSnitch's AI utilities, features and access terms are subject to ongoing development. They may be modified, delayed, suspended or differ materially from what is currently described in the DeepSnitch AI whitepaper."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.project.technology.title",
                                "Technological Limitations:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.project.technology.content",
                              "It may happen that the then-current technology level does not allow the project to achieve everything stated in the DeepSnitch AI whitepaper. The project's vision relies on complex integrations of AI and blockchain data, which may face unforeseen technical barriers or computational limits that prevent full implementation."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.project.forecasts.title",
                                "Forecasts and Assumptions:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.project.forecasts.content",
                              "Any ideas, forecasts provided in the DeepSnitch AI whitepaper shall be considered as assumptions only, may be subject to change and shall not be considered a comprehensive representation of the future standing of the product and platform."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.project.smartContract.title",
                                "Smart Contract and Operational Risk:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.project.smartContract.content",
                              "Bugs, exploits, network outages, or operational errors may affect contributions or token distribution. While reasonable audits have been conducted, smart contracts may still contain undiscovered vulnerabilities."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.project.custody.title",
                                "Custody and User Error:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.project.custody.content",
                              "Wallet mismanagement, phishing, loss of private keys or sending crypto assets to the wrong address are your sole responsibility. DeepSnitch cannot recover lost funds."
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "risks.team.title",
                        "3. Risks Relating to DeepSnitch and the Development Team"
                      ),
                    }),
                    e.jsx("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: e.jsxs("li", {
                        children: [
                          e.jsx("strong", {
                            children: t(
                              "risks.team.dependency.title",
                              "Dependency on Core Team:"
                            ),
                          }),
                          " ",
                          t(
                            "risks.team.dependency.content",
                            "The success of the DeepSnitch AI project relies heavily on the continued active participation of key technical staff. The loss of key personnel could negatively impact the development of the AI agents and the future value of the crypto-asset."
                          ),
                        ],
                      }),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("risks.legal.title", "4. Legal Risks"),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.legal.jurisdiction.title",
                                "Jurisdictional Responsibility:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.legal.jurisdiction.content",
                              "Crypto-asset regulations differ widely around the world and continue to evolve. It is your sole obligation to determine whether your nationality, residency or local rules permit you to purchase, hold or use $DSNT. DeepSnitch makes no representation that participation is lawful in your jurisdiction."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.legal.regulatory.title",
                                "Regulatory Risk:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.legal.regulatory.content",
                              "Policy changes or restrictions may affect access, custody or tradability. DeepSnitch may geo-block or restrict access to the platform at its discretion to comply with international laws."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.legal.noOffer.title",
                                "No Offer / No Solicitation:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.legal.noOffer.content",
                              "The sale and presale of $DSNT token does not constitute an offer or solicitation for securities or financial products in any jurisdiction. Access may be restricted where prohibited by law."
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "risks.general.title",
                        "5. General Disclaimers and Nature of Participation"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.general.advice.title",
                                "Not Financial Advice:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.general.advice.content",
                              "Nothing in the DeepSnitch website, the DeepSnitch AI whitepaper, presale pages, social channels, emails or communications constitutes financial, investment, tax, accounting or legal advice. Always Do Your Own Research (DYOR) and consult qualified professionals. Never contribute more than you can afford to lose."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.general.nature.title",
                                "Non-Investment Nature:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.general.nature.content",
                              "$DSNT token is offered as a non-investment product. Contributions do not purchase equity, revenue share, profit rights or any expectation of profit derived from our managerial efforts. Any future value is uncertain and not promised."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.general.updates.title",
                                "Updates to Tokenomics:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.general.updates.content",
                              "DeepSnitch reserves the right to amend the DeepSnitch AI whitepaper, tokenomics and presale mechanics (including allocations, caps, vesting or distribution methods) if reasonably necessary for security, compliance or operational integrity."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.general.thirdParty.title",
                                "Third-Party Info:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.general.thirdParty.content",
                              "DeepSnitch does not control or continuously monitor third-party content, which may include paid placements, opinions, or errors. External links are for convenience only; verify independently before acting. Smart contract addresses, contribution links, announcements and version-controlled documents are valid only if published on our official website and pinned posts on verified social channels. DeepSnitch is not responsible for actions taken based on screenshots, reposts, direct messages or impersonations."
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "risks.profits.title",
                        "6. No Expectation of Profits"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "risks.profits.intro",
                        "You shall not have any expectation of profit, profit participation or financial return arising from the acquisition, holding, or use of $DSNT."
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.profits.managerial.title",
                                "No Managerial Reliance:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.profits.managerial.content",
                              "The potential future value of $DSNT is not dependent on the managerial efforts of DeepSnitch, its founders or affiliates. $DSNT is designed solely as a utility instrument to access the DeepSnitch AI platform and its surveillance agents."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.profits.equity.title",
                                "No Equity or Dividends:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.profits.equity.content",
                              "Ownership of $DSNT does not represent any share, equity, interest or participation in DeepSnitch's legal entity. Ownership of $DSNT does not grant rights to dividends, revenue shares or voting rights on corporate matters."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.profits.fluctuations.title",
                                "Incidental Value Fluctuations:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.profits.fluctuations.content",
                              "Any appreciation in the value of $DSNT on the secondary market is purely incidental to its utility function and market supply/demand dynamics. DeepSnitch makes no promise or guarantee that the $DSNT will increase in value or maintain its initial purchase price."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "risks.profits.consumable.title",
                                "Consumable Nature:"
                              ),
                            }),
                            " ",
                            t(
                              "risks.profits.consumable.content",
                              "$DSNT is intended to be consumed or utilised within the DeepSnitch AI platform and its surveillance agents. It should not be purchased for speculative purposes."
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "risks.limitation.title",
                        "7. Limitation of Liability"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "risks.limitation.content",
                        "DeepSnitch, its team, affiliates, advisors, contributors, and partners shall not be liable for any loss or damage arising from or related to: your participation or inability to participate in the token sale; smart contract, blockchain, or network issues; market volatility, lack of liquidity, or pricing outcomes; regulatory actions or access restrictions; third-party marketing, PR content, external sites, or integrations."
                      ),
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("risks.updates.title", "8. Updates"),
                    }),
                    e.jsx("p", {
                      children: t(
                        "risks.updates.content",
                        'We may modify this Statement by providing notice of such changes, such as by providing notice through the Website or updating the "Last Updated" date at the bottom of this Statement. By continuing holding or owning Tokens, you confirm your agreement to the modified Statement.'
                      ),
                    }),
                    e.jsx("p", {
                      className: "text-white/70 text-14 mt-4",
                      children: t(
                        "risks.lastUpdate",
                        "Last update on 28 September 2025."
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
export { g as default };
