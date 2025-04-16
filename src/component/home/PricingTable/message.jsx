import { useState } from "react";

const useMessageData = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleClose = () => {
        setIsModalOpen(false)
    }
    const handleOpenModal = (type) => {
        let content = "";

        switch (type) {
            case "minTrade":
                content =
                    <div>
                        <p>During each stage of our evaluation, there are a minimum of 3 trading days. A day is counted as a trading day if at least one trade is executed.
                            Holding a trade over multiple days will not count as multiple trading days.</p>
                        <p> <strong>Note:</strong></p>
                        <p> If you reach the profit target before completing the 3 minimum trading days,
                            it is allowed to execute 0.01 lot trades on the remaining days.</p>
                    </div>
                break;
            case "dailyLoss":
                content =
                    <div>
                        <p>The Maximum Daily Loss is the amount you are allowed to lose every day.</p>
                        <p>For the purpose of this rule, the higher value between equity and balance will be used. This rule is set as a % of the starting equity or balance of every day. The rule states that the equity of the day, which is the result of the currently floating PnL (Profit and Loss) in sum with all closed positions of that day must not hit the Maximum Daily Loss Limit.</p>
                        <p>
                            <strong>Example:</strong><br />
                            You have a master account. At the start of day 5, your account balance is $105.000 and your equity is $107.000. The Daily Loss Limit is 5% from the starting equity for this example, this means that your equity on day 5 can't go lower than: Maximum Daily loss = $107.000 starting equity balance * 5% Daily Loss Limit = $5.350 Daily Loss Limit. $107.000 starting equity balance on day 5 - $5.350 Daily Loss Limit= $101.650 If your equity goes below $101.650 at any certain moment of time on day 5 your account will be closed.
                        </p>
                    </div>
                break;
            case "maxloss":
                content = <p>The Maximum Loss Limit is the amount your equity or balance can't go below.
                    This rule is set to 10% of the initial account size. For example, if you have a $100.000 account and the Maximum Loss Limit is 10%, your equity or balance can't go below $90.000 at any moment.</p>
            case "profitTarget":
                content = <p>To prove your trading skills, you have to reach the profit target after closing all your trades without violating any trading rules within the given trading period.";</p>
                break;
            case "leverage":
                content = <p>Trade with up to 1:100 leverage with RAW Spreads. There is a different leverage applied for different types of financial instruments.FX 1:100, Indices 1:20, Metals 1:30, Energies 1:10 & Crypto 1:2.</p>
                break;
            case "rewards":
                content = <p>A trader is eligible to request a reward based on the preferred reward cycle, Tuesday Payday, Bi-weekly, or Monthly, with a profit split up to 100%. Once a trader earns a Hot Seat in our firm, the trader receives on-demand rewards with a 100% profit split.</p>
            default:
                content = "No information available.";
        }

        setModalContent(content);
        setIsModalOpen(true);
    };

    return { handleOpenModal, isModalOpen, modalContent, handleClose }
}
export default useMessageData;