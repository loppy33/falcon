import './Wallets.sass'
import { useState } from 'react';
import { useAccount } from 'wagmi';

export default function Wallets() {
  const account = useAccount();
  const [activeTab, setActiveTab] = useState('wallets');

  const renderContent = () => {
    switch (activeTab) {

      case 'wallets':
        return (
          <div className="wallets choice">
            <div className="mainWallet" contentEditable={true}>
              <label htmlFor="mainWallet">Main account wallet</label>
              <input type="text" value={account.address} readOnly={true} />
            </div>

            <form className="otherWallets">
              <label htmlFor="solana">Your wallet on the Solana network (example: Phantom)</label>
              <input type="text" />

              <label htmlFor="ethereum">Your wallet on the Ethereum network (example: Metamask)</label>
              <input type="text" />

              <button type='button'>Save</button>
            </form>
          </div>
        );
      case 'replenish':
        return (
          <div className="renderContent">
            <form className="replenishForm choice">
              <label htmlFor="replenishAmount">Enter the top-up amount</label>
              <input type="number" />
              <button type="button">Replenish</button>
            </form>
            <div className="warning">
              <h2>Attention!</h2>
              <p>Top up your balance, minimum top up amount is $15. You must enter the amount that you will transfer to the specified wallet in the application.</p>
            </div>
          </div>
        );
      case 'withdraw':
        return (
          <div className="renderContent">
            <form className="withdrawForm choice">
              <label htmlFor="withdrawAmount">Amount to Withdraw</label>
              <input type="number" />
              <button type="button">Withdraw</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Profile">
      <div className="pageContainer">
        <ul>
          <li className={activeTab === 'wallets' ? 'active' : ''} onClick={() => setActiveTab('wallets')}>Wallets</li>
          <li className={activeTab === 'replenish' ? 'active' : ''} onClick={() => setActiveTab('replenish')}>Replenish</li>
          <li className={activeTab === 'withdraw' ? 'active' : ''} onClick={() => setActiveTab('withdraw')}>Withdraw</li>
        </ul>
        {renderContent()}

      </div>
    </div>
  );
}
