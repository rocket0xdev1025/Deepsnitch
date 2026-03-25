import { j as e, S as c } from "./index-BN8Hac8J.js";
import { r as o } from "./wallet-libs-C4iBya-7.js";
import { u as h } from "./i18n-libs-7YlS43F0.js";
import "./crypto-libs-BTkSibId.js";
import "./react-vendor-CKqXOJaQ.js";
import "./animation-libs-DQqW_Ij_.js";
const b = ({ isOpen: i, onClose: n }) => {
  const [s, r] = o.useState(!1),
    { t } = h();
  return (
    o.useEffect(() => {
      let a;
      return (
        i
          ? (r(!0), (document.body.style.overflow = "hidden"))
          : ((a = setTimeout(() => {
              r(!1);
            }, 300)),
            (document.body.style.overflow = "")),
        () => {
          a && clearTimeout(a);
        }
      );
    }, [i]),
    o.useEffect(() => {
      const a = (l) => {
        l.key === "Escape" && n();
      };
      return (
        i && document.addEventListener("keydown", a),
        () => {
          document.removeEventListener("keydown", a);
        }
      );
    }, [i, n]),
    !s && !i
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
                        "terms.title",
                        "DeepSnitch AI – Terms of Sale and Use"
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
                      children: t(
                        "terms.acceptance.title",
                        "1. Acceptance and Eligibility"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.acceptance.contract",
                            'This is a contract between you and between SignalPlex Labs Ltd., the company incorporated in the British Virgin Islands, having the notices address of Intershore Chambers, Road Town, Tortola, British Virgin Islands. References in these Terms to "DeepSnitch", "we", "our" or "us" are to SignalPlex Labs and references to "you", "your" or "purchaser" are to the person with whom DeepSnitch enters into these Terms.'
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acceptance.applicability",
                            "These Terms apply to the purchase of Tokens (as defined below), regulate purchasing, holding, using and owning of Tokens and using the Website. Upon accessing the Token Sale (as defined below), purchasing or acquiring Tokens or accessing or using the Website, you agree to be legally bound by and to comply with these Terms, our Privacy Policy, Risks Disclosure Statement and all additional terms, policies and agreements incorporated herein by reference and amended from time to time at our sole discretion."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acceptance.representation",
                            "By accepting these Terms, you represent and warrant that you have read, understood and accept these Terms and that you also have had the possibility to obtain advice related to these Terms, DeepSnitch AI Whitepaper, Token utilities, functionalities and risks from an attorney, legal advisor or any other relevant professional."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acceptance.age",
                            "Purchase of Tokens is available and is intended solely for persons who are 18 or older and who satisfy the criteria described in these Terms. You represent and warrant that you are of legal age to form a binding contract (at least 18 years old under the BVI law) and have full power and authority to agree to these Terms."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acceptance.restrictions",
                            "You are not allowed to purchase, whether directly or not, Tokens through any means and/or take part in the Token Sale if you are the individual that is a citizen, a permanent resident or located in (i) the Democratic Republic of Congo, Cuba, the Crimea region, the Democratic People's Republic of Korea, the Islamic Republic of Iran, Puerto Rico, Somalia, the Syrian Arab Republic, the United States of America (including its states and the District of Columbia), the Virgin Islands of the United States, or any other possessions of the United States of America; (ii) any state, country, territory or other jurisdiction that is embargoed by the United Nations, the European Union or the British Virgin Islands, (iii) any state, country, territory or other jurisdiction where purchase, ownership and/or use of Tokens would be illegal or otherwise violate any applicable law."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acceptance.funds",
                            "By participating in the Token Sale, you represent and warrant that any funds and crypto assets used to pay for Tokens have no origins that may be connected to any breach of money laundering or financing of terrorism regulations whatsoever or to any criminal activity, as defined in the jurisdiction of origin, or internationally, and have a clear and non-criminal origin."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acceptance.refusal",
                            "You hereby acknowledge and agree that we may refuse you to participate in the Token Sale at our sole discretion, without explaining the reasons for such refusal."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("terms.definitions.title", "2. Definitions"),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t("terms.definitions.token", "Token"),
                            }),
                            " ",
                            t(
                              "terms.definitions.tokenDesc",
                              "means a cryptographic token named DSNT to be issued and offered by DeepSnitch."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "terms.definitions.tge",
                                "Token Generation Event"
                              ),
                            }),
                            " ",
                            t(
                              "terms.definitions.tgeDesc",
                              "means, as determined by us at our sole and absolute discretion, the date upon which Token liquidity is officially deposited into the selected decentralised exchange (DEX) liquidity pool."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "terms.definitions.tokenSale",
                                "Token Sale"
                              ),
                            }),
                            " ",
                            t(
                              "terms.definitions.tokenSaleDesc",
                              "means a single event or a group of related events when we make Tokens available for purchase, including event(s) available by invitation to a limited number of purchasers and/or event(s) available to the general public."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "terms.definitions.website",
                                "Website"
                              ),
                            }),
                            " ",
                            t(
                              "terms.definitions.websiteDesc",
                              "means a website accessible at the address https://deepsnitch.ai."
                            ),
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: t(
                                "terms.definitions.whitepaper",
                                "Whitepaper"
                              ),
                            }),
                            " ",
                            t(
                              "terms.definitions.whitepaperDesc",
                              'means the document name "Crypto-Asset Whitepaper: $DSNT (DeepSnitch AI)" covering in detail Tokens, DeepSnitch AI project, as well as other issues related thereto and associated therewith.'
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "terms.functionalities.title",
                        "3. Token Functionalities"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.functionalities.description",
                            'The Token may provide you with one or more specific access, participation, engagement, entertainment or interaction functionalities for the DeepSnitch AI project and its related ecosystem ("Project"), as further described in the Whitepaper or any other of our informational materials ("Token Functionalities"). By participating in the Token Sale, you represent and warrant that you are not purchasing Tokens for the purposes of speculative investment, regular investment or wealth management.'
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.functionalities.timing",
                            "While we can define specific Token Functionalities before the Token Sale, we can also do so at a later point in time. This means that the Token Functionalities of the Token are not conclusively defined at the time of the Token Sale. You hereby acknowledge and agree that we have the right to add and remove Token Functionalities at any time at our sole and absolute discretion."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.functionalities.noRight",
                            "You hereby acknowledge and agree that by purchasing Tokens, you do not purchase the right to make use of Token Functionalities in the future. This means that you do not have a contractual right to claim any Token Functionalities. Since the addition of Token Functionalities by us is not guaranteed, you are aware of the fact that the Token may not provide you with any Token Functionalities at all."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.functionalities.whitepaper",
                            "You hereby acknowledge and agree that (i) we are under no obligation to update and maintain the Whitepaper, (ii) we may at any time, at our sole and absolute discretion, modify the integration of the Token into the Project, (iii) the Whitepaper is for general information purposes only and may be amended by us from time to time without notice to you, including, but not limited to, amending any parts of tokenomics or Token model and (iv) the Whitepaper does not form any part of a contract, arrangement or understanding (or otherwise) between us and you."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "terms.sale.title",
                        "4. Token Sale. Distribution"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.sale.price",
                            'We will determine the price of the Token ("Purchase Price") at our sole discretion and we may set separate Purchase Prices for each and any stage or round of the Token Sale, as well as we may set different Purchase Prices for the same stage or round of the Token Sale. You hereby acknowledge and agree that we are free to change the Purchase Price at any time and at our sole discretion. We may also set a specific allocation of Tokens available for purchase. We may divide purchasers into several groups (tiers), set specific participation criteria for each of such groups (tiers) and set specific allocation of Tokens available for purchase for each of such groups (tiers).'
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.sale.payment",
                            "The Payment for Tokens shall be made by the transfer of crypto assets, specified at the Website, including, but not limited to, USDT and ETH. You shall make the payment for Tokens by transferring applicable crypto assets to our blockchain wallet address. We will inform you of our wallet address or our other blockchain identifiers. You hereby acknowledge and agree that it is your responsibility to check the correctness of the wallet or smart contract address where you make a payment for Tokens, notwithstanding if it is made via automated means or not."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.sale.noDebt",
                            "You hereby acknowledge and agree that we have no debt towards you with respect to Tokens and will have no obligation to buy back any Token from you. The Token is not and will never represent a loan to us. The purchase of Tokens is final, the payment for the purchase of Tokens is non-refundable."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.sale.distribution",
                            "We have set rules for the release and distribution of Tokens purchased at specific rounds of the Token Sale. This includes that Tokens would be locked for a specific time after the Token Sale. The rules of distribution, lock-up and release are set in our Whitepaper, provided that such rules are subject to change at our sole discretion. You hereby acknowledge and agree that the payment of the Purchase Price would not entitle you to transfer the purchased Tokens immediately upon completion of the Token Sale until a later period in time. We set separate rules of distribution, lock-up and release for each and any round of the Token Sale. It is your responsibility to check the rules of distribution, lock-up and release in the Whitepaper before purchasing Tokens."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "terms.risks.title",
                        "5. Disclaimer of Risks"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.risks.participation",
                            "Participation in the Token Sale, purchasing, using and holding Tokens, and interaction with smart contracts involves significant risks and potential for financial losses. The specific risks associated with these activities are specified in the Risks Disclosure Statement, available at the Website, which forms an integral part of these Terms."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.risks.noLiability",
                            "You hereby assume and agree that we will have no responsibility or liability for such risks described in the Risks Disclosure Statement. You hereby irrevocably waive, release and discharge any and all claims, whether known or unknown to you, against DeepSnitch, its affiliates and its/their representatives related to any of the risks set forth herein."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.risks.expertise",
                            "You represent and warrant that you have: (i) the necessary technical expertise and ability to review and evaluate the security, integrity and operation of Tokens that you decide to acquire; and (ii) the knowledge, experience, understanding, professional advice and information to make your own evaluation of the merits and risks of such Tokens. You should not acquire or hold Tokens unless you have sufficient financial resources and can afford to lose all value of the Tokens."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "terms.acknowledgements.title",
                        "6. Your Acknowledgements"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.acknowledgements.noRights",
                            "You hereby acknowledge and agree that Tokens do not and shall not be construed to grant you any kind of the right to convert Tokens into our shares or other equity, do not and shall not be construed to grant you any other right whatsoever, do not and shall not be construed to represent or confer any ownership right or stake, share or security or equivalent rights, voting right or any right to receive dividends, future revenue shares, intellectual property rights or any other form of participation in DeepSnitch and/or the Project."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acknowledgements.funds",
                            'You hereby acknowledge and agree that any funds received by us through the Token Sale ("Received Funds") are our revenue and will be utilised by us at our sole discretion. To avoid any doubt, we will not and shall not be obliged to disclose, publish or anyhow make available any portion of the information relating to our usage or spending of such Received Funds, or account for such Received Funds. You shall never expect that we would use Received Funds in a way that may impact the price, value or availability of Tokens.'
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.acknowledgements.technology",
                            "You hereby acknowledge and agree that blockchain, tokens, wallet gateways, non-custodial wallets and smart contract technologies are still in an early development stage and their application is of an experimental nature. They, therefore, carry significant operational, technological, financial, regulatory and reputational risks. You are fully aware of such risks and accept them as part of your participation in the Token Sale."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "terms.representations.title",
                        "7. Your Representations and Warranties"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "terms.representations.intro",
                        "By purchasing Tokens and/or participating in the Token Sale, you hereby represent, warrant and covenant the following:"
                      ),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.representations.capacity",
                            "You have the full capacity to contract and the authority to execute and deliver these Terms, and to perform your obligations hereunder. The execution, delivery of and performance under these Terms require no approval or other action from any person other than you."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.representations.purpose",
                            "You purchase Tokens for your own use and utility, to use the Project, not for investment, wealth management, speculative or financial purposes, not as a nominee or agent, and not with a view to, or for resale in connection with, the distribution thereof, you have no present intention of selling, granting any participation in, or otherwise distributing the same."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.representations.manipulation",
                            "You will not manipulate the price of Tokens in any way and will not use Tokens for any other kind of market manipulation."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.representations.knowledge",
                            "You have the knowledge, experience, understanding, professional advice and information to make your own evaluation of the merits and risks of such Tokens and the Project. You should not acquire or hold Tokens unless you have sufficient financial resources and can afford to lose all value of the Tokens."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.representations.actions",
                            "There are no actions or investigations, pending or threatened before or by any governmental authority against you which, if determined adversely, could reasonably be expected to have a material adverse effect on your ability to enter into and perform your obligations under these Terms; and"
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.representations.judgment",
                            "There is no unsatisfied judgment or any open injunction binding upon you which could reasonably be expected to have a material adverse effect on your ability to enter into and perform your obligations under these Terms."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("terms.website.title", "8. Website. Use"),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.website.selfService",
                            "The Website is offered on a self-service basis in accordance with the terms and conditions of these Terms. All users are responsible for ensuring that they are accessing the Website via secure and trustworthy sources or devices. You hereby acknowledge and agree that we have no obligation to enhance, modify or replace any part of the Website or to continue developing or releasing new versions of the Website."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.website.thirdParty",
                            "Links to third-party materials (including, without limitation, websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third-party sites accessible or linked from the Website."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.website.accuracy",
                            "We cannot and do not represent or guarantee that any of the information available through the Website is accurate, reliable, current, complete, valid, stable or appropriate for your needs. We do not guarantee the timeliness of the technology or information involved in the Website. We disclaim any liability for any loss or damage should you use or view the information available through the Website."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.website.prohibited",
                            "You must not: i) violate any law, regulation, contract, intellectual property or other third-party right, or commit a tort while using the Website, ii) use the Website in any manner to engage in any fraud, money-laundering, or terrorist activities, or other activities that are illegal under applicable laws or regulations, iii) use the Website to display, stream or promote any pornographic, defamatory, libellous, threatening, harassing, hateful, abusive, or inflammatory content, iv) introduce to the Website any malware, virus, worms, Trojan horses, logic bombs, or other harmful material, v) develop any third-party applications that interact with the Website, or any of its parts or functionalities, without our prior written consent, or unless otherwise agreed, vi) harvest or collect email addresses or other contact information of our other users, vii) send junk mail or spam to our other users, including without limitation unsolicited advertising, promotional materials, or other solicitation material, viii) use the Website in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Website, or that could damage, disable, overburden, or impair the functioning of the Website in any manner, ix) encourage or induce any third party to engage in any of the activities prohibited under these Terms."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.website.property",
                            'The Website, including any enhancements, derivatives and improvements thereof, is the sole property of us. All the text, videos, documents, images, sounds, music, marks, logos, informational materials, user interfaces, compilations (meaning the collection, arrangement and assembly of information), charts, diagrams, graphs, market data and other content that forms a part of the Website (collectively, the "Content") are the sole property of us, our affiliates and licensors.'
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.website.license",
                            "We hereby grant you a limited, revocable, non-exclusive, non-transferable license, subject to the terms and conditions of these Terms, to access and use the Website and Content solely for purposes approved by us from time to time. Any other use of the Website or Content is expressly prohibited and all other rights, title, and interest in the Website or Content are exclusively the property of us, our affiliates and licensors."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.website.rights",
                            "Nothing in these Terms shall grant you any of such property rights and/or ownership rights and shall not be considered as an assignment of such rights. Other than access to our services in accordance with the Terms, we do not in any way grant our users any license or other intellectual property rights. You must not (nor attempt to) copy, decompile, reverse engineer, disassemble, derive the source code of, modify, or create derivative works of the Website or any other part of the Content or in any other way manipulate the Website."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.website.frames",
                            "Without prior approval and express written permission, you may not create frames around our Website or use other techniques that alter in any way the visual presentation or appearance of our Website."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t("terms.warranties.title", "9. Warranties"),
                    }),
                    e.jsxs("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        e.jsx("li", {
                          children: t(
                            "terms.warranties.disclaimer",
                            "Except for the express warranties set forth in these Terms, we hereby disclaim all express or implied warranties with regard to the Website, where Token Sale is conducted, smart contracts, Tokens, including, but not limited to, any implied warranties of merchantability, fitness for a particular purpose, title, non-infringement and quality. We make no representations or warranties regarding the reliability, availability, timeliness, suitability, accuracy or completeness of the Website and/or Tokens. Without limiting the generality of the foregoing, we do not represent or warrant that: (i) the operation or use of the Website or smart contracts will be timely, uninterrupted or error-free; or (ii) the quality and functionality of the Website, smart contracts or Tokens will meet your requirements or expectations."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.warranties.control",
                            'You acknowledge and agree that we do not control the transfer of data over communications facilities, including the Internet and blockchains, and that the Website, ecosystems and smart contracts may be subject to limitations, delays, and other problems inherent in the use of such communications facilities. We are not and shall not be responsible for any delays, delivery failures, or other damage resulting from such problems. Without limiting the foregoing, we do not warrant or guarantee that any or all security attacks will be discovered, reported or remedied, or that there will not be any security breaches by third parties. Except where expressly provided otherwise by us, the Website, smart contracts and Tokens are provided to you on an "as is", "as developed" and "as available" basis.'
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.warranties.advisor",
                            "You further acknowledge that we do not act as your broker-dealer, intermediary, agent or advisor and owe you no fiduciary duty. Any communication by us to you shall not be construed under any circumstances as legal, tax, accounting or financial advice. Our Token Sale and your purchase of Tokens shall not be construed as the facilitation of any sale or exchange of securities as an exchange."
                          ),
                        }),
                        e.jsx("li", {
                          children: t(
                            "terms.warranties.claims",
                            "You acknowledge and agree that we shall not be liable for any claims, damages, or losses arising from or related to: (i) market volatility, lack of liquidity, or pricing outcomes of the Tokens; (ii) regulatory actions, government interventions, or access restrictions; or (iii) third-party marketing, PR content, external sites or integrations, including any errors or misrepresentations contained therein."
                          ),
                        }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "text-20 font-bold text-green mb-2",
                      children: t(
                        "terms.liability.title",
                        "10. Limitation of Liability"
                      ),
                    }),
                    e.jsx("p", {
                      children: t(
                        "terms.liability.content",
                        "In no event we will be liable under any contract, negligence, strict liability or other theory: (i) for any indirect, exemplary, incidental, special or consequential damages; (ii) for loss of use, inaccuracy, cost of procurement of substitute goods, services or technology, loss of profits, data or business interruption; or (iii) for any matter beyond our reasonable control, whether or not foreseeable, even if we have been advised of the possibility of such loss or damage, and even if a remedy set forth herein has failed its essential purpose."
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
export { b as default };
