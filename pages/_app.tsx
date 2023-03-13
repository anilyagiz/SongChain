import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useMemo } from 'react';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { LedgerWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter, SolletWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import { GumUIProvider } from '@gumhq/ui-components';

require('@solana/wallet-adapter-react-ui/styles.css');

function MyApp({ Component, pageProps }: AppProps) {
   // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
   const network = WalletAdapterNetwork.Devnet;

   // You can also provide a custom RPC endpoint
   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

   const wallets = useMemo(
       () => [
          
           new PhantomWalletAdapter({ network }),
           new SlopeWalletAdapter(),
           new SolflareWalletAdapter({ network }),
           new TorusWalletAdapter(),
           new LedgerWalletAdapter(),
           new SolletWalletAdapter({ network }),
           new SolletExtensionWalletAdapter({ network }),
       ],
       
       [network]
   );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <GumUIProvider>
            <Component {...pageProps} />
          </GumUIProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>)
}

export default MyApp
