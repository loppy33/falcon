import { useAccount } from 'wagmi'
import './connected.sass'
import './noConnected.sass'
import './noConnectedPhone.sass'
import './connectedPhone.sass'
import { Link } from 'react-router-dom';


export default function Home() {

  const account = useAccount()

  const noConnected = () => {


    return (
      <div className="noConnected">

        <section id='greetings' className='block1'>
          <video src="/images/home/bg/1.mp4" muted autoPlay loop playsInline></video>

          <div className="container">
            <h1>Low fees, <br /> high perfomance</h1>
            <p className='main__p'>Join the New Era of VC Investing in High-Quality Early-Stage Projects. <br /> Become a Member of Our Community</p>
            <button className='main__button'>Start Investing</button>
          </div>

        </section>

        <div className="bg-1">
          <video src="/images/home/bg/1.mp4" muted autoPlay loop playsInline></video>
          <section id='about_us' className='block2 home__container'>
            <div className='images'>
              <div>
                <img data-aos="flip-right" src="/images/home/ab1.png" alt="" />
                <img src="/images/home/ab3.png" alt="" />
              </div>
              <div className='second'>
                <img data-aos="flip-right" src="/images/home/ab2.png" alt="" />
                <img src="/images/home/ab4.png" alt="" />
              </div>
            </div>

            <div className='about' data-aos="fade-left" >
              <h2>About Us</h2>
              <h3>Fenom: Your Partner in the Cryptocurrency World</h3>
              <p>At Fenom, we are dedicated to developing cutting-edge solutions for the investment community, providing transparent, trustworthy, and highly effective cryptocurrency products. <br /> <br />Our mission is to empower you to manage your digital assets efficiently and reach your financial goals. </p>
            </div>

          </section>

          <section id='our_mission' className='block3 home__container'>
            <div className='mission' data-aos="fade-down">
              <h2>Our Mission</h2>
              <h3>Embracing the Digital Future</h3>
              <p>We are convinced that blockchain technology and cryptocurrencies hold the potential to revolutionize the global economy. <br /> <br /> Our mission is to connect investors with top opportunities in the digital asset space, while prioritizing security, transparency, and maximizing returns.</p>
            </div>
            <img src="/images/home/mission.png" alt="" />
          </section>

          <section id='our_services' className='block4 home__container'>
            <div className="title">
              <h2>Our Services</h2>
              <h3>Comprehensive Crypto Solutions</h3>
            </div>
            <div className='services'>

              <div className='service' data-aos-duration="500">
                <img src="/images/home/ed.png" alt="" />
                <h4>Educational Programs</h4>
                <p>We offer courses and seminars to help you better understand the cryptocurrency market and make informed investment decisions.</p>
              </div>

              <div className='service' data-aos-duration="1000">
                <img src="/images/home/asset.png" alt="" />
                <h4>Asset Management:</h4>
                <p>Our team of experts will develop personalized crypto asset management strategies, considering your financial goals and risk tolerance.</p>
              </div>

              <div className='service'>
                <img src="/images/home/analytic.png" alt="" />
                <h4>Analytics and Research:</h4>
                <p>We provide in-depth market analysis, so you are always aware of the latest trends and can make timely decisions.</p>
              </div>

            </div>

            <div className='who' data-aos="flip-down">
              <div>
                <h5>Why Choose Us?</h5>
                <h3>Professionalism and Reliability</h3>
              </div>
              <button className='main__button'>Join Us</button>
            </div>
          </section>
        </div>

        <div className="bg-2">
          <section id='experienced_team' className='block5 home__container'>
            <div className="title">
              <h2>Experienced Team:</h2>
              <h3>Our specialists have many years of experience in finance and cryptocurrencies.</h3>
            </div>

            <div data-aos="fade-right" className='exp'>
              <img src="/images/home/innov.png" alt="" />
              <div>
                <h4>Innovative Approaches</h4>
                <p>We use cutting-edge technologies and methods to ensure the maximum efficiency of your investments.</p>
              </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" className='exp'>
              <img src="/images/home/tran.png" alt="" />
              <div>
                <h4>Transparency and Security</h4>
                <p>We guarantee full transparency of all operations and a high level of protection for your assets.</p>
              </div>
            </div>
          </section>

          <section id='join_us' className='block6 home__container'>
            <div className="join" data-aos="zoom-in-up">
              <video src="/images/home/bg/2.webm" muted autoPlay loop playsInline></video>

              <div>
                <h2>Join Us</h2>
                <h3>Invest in the Future</h3>
              </div>
              <p>Fenom is your trusted partner in the world of cryptocurrencies. Start your journey into the digital economy with us and reach new heights in your financial success.</p>
              <button className='main__button'>Join Now</button>
            </div>
          </section>

          <section className='block7 home__container'>

            <h2>Join & Follow the Community</h2>
            <form action="post">
              <div>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='E-Mail' />
              </div>
              <textarea name="Message" id="message" placeholder='Message' rows={6}></textarea>
              <button className='action__button'>Send</button>
            </form>

            <div className='links'>
              <div className='link' data-aos-duration="1000">
                <img src="/images/net/facebook.png" alt="" />
                <span>Facebook</span>
                <a target="_blank" href="Visit">Visit</a>
              </div>
              <div className='link'>
                <img src="/images/net/twitter.png" alt="" />
                <span>Twitter</span>
                <a target="_blank" href="https://x.com/Fenom_project">Visit</a>
              </div>
              <div className='link' >
                <img src="/images/net/youtube.png" alt="" />
                <span>Youtube</span>
                <a href="Visit">Visit</a>
              </div>
              <div className='link' data-aos-duration="2500">
                <img src="/images/net/telegram.png" alt="" />
                <span>Telegram</span>
                <a href="Visit">Visit</a>
              </div>
            </div>
            <div className="mini-footer">
              <div className='links'>
                <a href="#/">Disclaimer</a>
                <a href="#/">Terms of conditions</a>
                <a href="#/">Privacy policy</a>
              </div>
              <span>@2024</span>
            </div>
          </section>
        </div>


      </div>
    )
  }


  return (
    <div className="Home">
      {
        account.status !== 'connected'
          ?
          <>
            {noConnected()}
          </>
          :
          <>
            <div className="pageContainer pgf">
              <div className="user__info">

                <div className="content">
                  <div className='title'>
                    <div><span className='btn__active icon'><img className='icons' src="/images/icons/license.svg" alt="" /></span> Your License </div>
                    <span className='not__active'>Not active</span>
                  </div>
                  <div className='info'>
                    <div><span className='second'>Limit</span> $ 0 </div>
                    <div>
                      <Link className='link' to="/wallets">Pay now</Link>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <div className='title'>
                    <div><span className='btn__active icon'><img className='icons' src="/images/icons/balance.svg" alt="" /></span> Your License </div>
                  </div>
                  <div className='info'>
                    <div className='balance'> $ 5000 </div>
                    <div>
                      <Link className='link' to="/wallets">Top up now</Link>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Launchpad</h2>
              <div className="launchpad">
                <table className="content">
                  <tbody>

                    <tr>
                      <td><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                      <td><div><span className='line'> <span style={{ width: 74.6 + '%' }} className='lineContent'></span> </span> 74.6%</div></td>
                      <td>$ 60001</td>
                      <td>$ 0.0288</td>
                      <td className='arrow__link'>
                        <Link to='/launchpad/1' className="arrow">
                          <img src="/images/icons/arrow-right.svg" alt="" />
                        </Link>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <h2 className='section__name'>Academy <a className='link' href="">Show More</a></h2>
              <div className='academy'>
                <a href="#/">
                  <img src="/images/temp.png" alt="" />
                  <div className="content">
                    <div className="info">Portfolio · 05.08.2024</div>
                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                  </div>
                </a>
                <a href="#/">
                  <img src="/images/temp.png" alt="" />
                  <div className="content">
                    <div className="info">Portfolio · 05.08.2024</div>
                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                  </div>
                </a>
                <a href="#/">
                  <img src="/images/temp.png" alt="" />
                  <div className="content">
                    <div className="info">Portfolio · 05.08.2024</div>
                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                  </div>
                </a>

              </div>

              <h2>Our social networks</h2>
              <div className='networks'>
                <div className='net'>
                  <img src="/images/net/facebook.png" alt="" />
                  <span>Facebook</span>
                  <a className='link' target="_blank" href="Visit">Join now</a>
                </div>
                <div className='net'>
                  <img src="/images/net/twitter.png" alt="" />
                  <span>Twitter</span>
                  <a className='link' target="_blank" href="https://x.com/Fenom_project">Join now</a>
                </div>
                <div className='net' >
                  <img src="/images/net/youtube.png" alt="" />
                  <span>Youtube</span>
                  <a className='link' href="Visit">Join now</a>
                </div>
                <div className='net'>
                  <img src="/images/net/telegram.png" alt="" />
                  <span>Telegram</span>
                  <a className='link' href="Visit">Join now</a>
                </div>
              </div>
            </div>
          </>

      }
    </div>
  )

}