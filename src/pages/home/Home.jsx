import { useAccount } from 'wagmi'

export default function Home() {
  const account = useAccount()


  return (
    <div className="Home">
      {
        account.status !== 'connected'
          ?
          <>
            <h1>Home for no connected user</h1>
          </>
          :
          <>
            <h1>Home for connected user</h1>
          </>
      }
    </div>
  )
}