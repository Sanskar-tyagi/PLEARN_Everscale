import { createContext } from 'react';

const WalletContext = createContext({
    userAccount: null,
    setUserAccount: () => {},
  });

export default WalletContext;