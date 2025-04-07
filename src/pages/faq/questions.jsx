const faqData = {
  generalQuestions: [
    {
      id: 1,
      question: "What is a Proprietary Trading Firm?",
      answer:
        "A proprietary trading firm (prop firm) provides traders with capital to trade financial markets. Traders do not risk their own funds but instead earn a share of the profits while the firm covers any losses.",
    },
    {
      id: 2,
      question: "How does your prop firm work?",
      answer:
        "Traders must complete an evaluation phase to prove their skills. Once they pass, they receive a funded account with a set profit split. The firm absorbs losses, allowing traders to focus on executing profitable strategies.",
    },
    {
      id: 3,
      question: "Who can apply to become a trader?",
      answer:
        "Anyone who meets the firm's requirements can apply. No prior professional trading experience is necessary, but traders must demonstrate skill, discipline, and risk management.",
    },
    {
      id: 4,
      question: "Is your prop firm available worldwide?",
      answer:
        "Yes, we accept traders from most countries, except those restricted due to regulatory compliance.",
    },
  ],
  evaluationProcess: [
    {
      id: 5,
      question: "What is the evaluation phase?",
      answer:
        "The evaluation phase is a challenge where traders must achieve a profit target within specific risk limits. Passing this phase qualifies traders for a funded account.",
    },
    {
      id: 6,
      question: "What are the trading rules in the evaluation phase?",
      answer:
        <>         
         <strong>Traders must adhere to risk parameters, including: </strong><br/>
         <strong>Profit Target:</strong> Earn a set percentage of initial capital.<br/>
         <strong>Max Daily Loss: </strong>Do not exceed the specified daily loss limit.<br/>
         <strong>Overall Drawdown:</strong> Maintain account balance above a defined threshold.<br/>
         <strong> Minimum Trading Days: </strong>Trade a minimum number of days to ensure consistency.
        </>

    },
    {
      id: 7,
      question: "Can I retry the evaluation if I fail?",
      answer:
        "Yes, traders can retake the evaluation at a discounted fee.",
    },
  ],
  fundedAccounts: [
    {
      id: 8,
      question: "How do I get a funded account?",
      answer:
        "After passing the evaluation, traders receive access and can start earning real profits.",
    },
    {
      id: 9,
      question: "What is the profit split?",
      answer:
        "The profit split varies but typically starts at 80% to the trader and can increase based on performance.",
    },
    {
      id: 10,
      question: "Do you take any fees from profits?",
      answer: "No, traders keep their share of the profits without hidden fees.",
    },
    {
      id: 11,
      question: "What happens if I hit the drawdown limit in a funded account?",
      answer:
        "If a trader breaches the max drawdown limit, the account is deactivated. however we have reset option",
    },
  ],
  tradingConditions: [
    {
      id: 12,
      question: "What platforms can I trade on?",
      answer:
        "We provide access to MetaTrader 4, MetaTrader 5, and Trader, along with custom dashboards for analytics.",
    },
    {
      id: 13,
      question: "What instruments can I trade?",
      answer:
        "Traders can trade Forex, Stocks, Indices, Commodities, and Cryptocurrencies, depending on the selected account type.",
    },
    {
      id: 14,
      question: "Are there any restrictions on trading styles?",
      answer:
        "We allow most strategies, including scalping and swing trading, but prohibit high-frequency trading (HFT), latency arbitrage, and account abuse.",
    },
    {
      id: 15,
      question: "Can I hold trades over the weekend?",
      answer:
        "Yes, but only on select accounts. Some programs may have restrictions for risk management reasons.",
    },
  ],
  payoutsAndWithdrawals: [
    {
      id: 16,
      question: "How do I withdraw my profits?",
      answer:
        "Traders request payouts via bank transfer, cryptocurrency, or online payment methods. Payouts are processed within 1-3 business days.",
    },
    {
      id: 17,
      question: "How often can I withdraw profits?",
      answer: "Withdrawals can be made weekly or bi-weekly, depending on the account type.",
    },
    {
      id: 18,
      question: "Are there any fees for withdrawals?",
      answer:
        "No, we cover withdrawal fees, but payment providers may have their own charges.",
    },
  ],
  supportAndExtras: [
    {
      id: 19,
      question: "What support do you offer traders?",
      answer:
        "We provide 24/7 customer support, dedicated account managers, and trading analytics dashboards to help traders improve.",
    },
    {
      id: 20,
      question: "Do you offer educational resources?",
      answer:
        "Yes, we provide trading courses, market insights, and risk management training to help traders succeed.",
    },
    {
      id: 21,
      question: "Can I trade multiple accounts?",
      answer:
        "Yes, traders can have multiple accounts, but there may be restrictions on total capital allocation per trader.",
    },
    {
      id: 22,
      question: "How do I sign up?",
      answer:
        <>
        To get started, visit our registration page, choose an evaluation plan, and begin trading.<br/> There $400k max allocation per trader
        </>
    },
  ],
};

export default faqData;
