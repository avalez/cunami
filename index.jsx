import { Signer } from '@waves/signer'
import { ProviderSeed } from '@waves/provider-seed'

const signer = new Signer({
  NODE_URL: 'https://nodes-testnet.wavesnodes.com'
})
signer.setProvider(new ProviderSeed((new Date).toString()))

var user
signer.login().then(login => user = login.address)

export default function HelloWorld() {
  function authFunc() {
    WavesKeeper.auth({data: "Auth to the beatch"}).then(auth => console.log(JSON.stringify(auth))).catch(console.log)
  }
  return (
    <div className="container">
      <p>
        Welcome to the beatch, {user}!
      </p>
      <input className="btn btn-primary" type="submit" value="Auth" onClick={authFunc}></input>
    </div>
  )
}
