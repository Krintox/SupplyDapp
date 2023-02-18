import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1>SupDapp</h1>
            </div>
            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 8) + '.........' + account.slice(36, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    CONNECT TO WALLET
                </button>
            )}
        </nav>
    );
}

export default Navigation;