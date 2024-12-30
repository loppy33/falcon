import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.sass'
import './styles/main.sass'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'

import { arbitrum, mainnet } from 'wagmi/chains'

const projectId = "895e1bfd51457942f53f33e8d504a7c3"

const chains = [mainnet]

const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata: {
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
})


createWeb3Modal({
  chains,
  projectId,
  wagmiConfig
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <WagmiProvider config={wagmiConfig}>
      <App />
    </WagmiProvider>
)
