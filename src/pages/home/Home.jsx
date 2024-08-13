import { useAccount } from 'wagmi'
import './noConnected.sass'
import './noConnectedPhone.sass'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {

  const account = useAccount()

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const noConnected = () => {


    return (
      <div className="noConnected">

        <section id='greetings' className='block1'>
          <video src="images/home/bg/1.mp4" muted autoPlay loop playsInline></video>

          <div className="container">
            <h1 data-aos="fade-up">Low fees, <br /> high perfomance</h1>
            <p data-aos="fade-up"  data-aos-duration="1500"  className='main__p'>Join the New Era of VC Investing in High-Quality Early-Stage Projects. <br /> Become a Member of Our Community</p>
            <button data-aos="fade-up" data-aos-duration="3000" className='main__button'>Start Investing</button>
          </div>

        </section>

        <div className="bg-1">
          <video src="images/home/bg/1.mp4" muted autoPlay loop playsInline></video>
          <section id='about_us' className='block2 container'>
            <div className='images'>
              <div>
                <img data-aos="flip-right" data-aos-duration="1500"  src="images/home/ab1.png" alt="" />
                <img data-aos="flip-left" data-aos-duration="3000" src="images/home/ab3.png" alt="" />
              </div>
              <div className='second'>
                <img data-aos="flip-right" data-aos-duration="1500"  src="images/home/ab2.png" alt="" />
                <img data-aos="flip-left" data-aos-duration="3000"  src="images/home/ab4.png" alt="" />
              </div>
            </div>

            <div className='about' data-aos="fade-left" >
              <h2>About Us</h2>
              <h3>Fenom: Your Partner in the Cryptocurrency World</h3>
              <p>At Fenom, we are dedicated to developing cutting-edge solutions for the investment community, providing transparent, trustworthy, and highly effective cryptocurrency products. <br /> <br />Our mission is to empower you to manage your digital assets efficiently and reach your financial goals. </p>
            </div>

          </section>

          <section id='our_mission' className='block3 container'>
            <div className='mission' data-aos="fade-down">
              <h2>Our Mission</h2>
              <h3>Embracing the Digital Future</h3>
              <p>We are convinced that blockchain technology and cryptocurrencies hold the potential to revolutionize the global economy. <br /> <br /> Our mission is to connect investors with top opportunities in the digital asset space, while prioritizing security, transparency, and maximizing returns.</p>
            </div>
            <img src="images/home/mission.png" data-aos="zoom-in" alt="" />
          </section>

          <section id='our_services' className='block4 container'>
            <div className="title">
              <h2>Our Services</h2>
              <h3>Comprehensive Crypto Solutions</h3>
            </div>
            <div className='services'>

              <div className='service' data-aos="zoom-in" data-aos-duration="500">
                <img src="images/home/ed.png" alt="" />
                <h4>Educational Programs</h4>
                <p>We offer courses and seminars to help you better understand the cryptocurrency market and make informed investment decisions.</p>
              </div>

              <div className='service' data-aos="zoom-in" data-aos-duration="1000">
                <img src="images/home/asset.png" alt="" />
                <h4>Asset Management:</h4>
                <p>Our team of experts will develop personalized crypto asset management strategies, considering your financial goals and risk tolerance.</p>
              </div>

              <div className='service' data-aos="zoom-in" data-aos-duration="1500">
                <img src="images/home/analytic.png" alt="" />
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
          <section id='experienced_team' className='block5 container'>
            <div className="title">
              <h2>Experienced Team:</h2>
              <h3>Our specialists have many years of experience in finance and cryptocurrencies.</h3>
            </div>

            <div data-aos="fade-right" data-aos-duration="2000" className='exp'>
              <img src="images/home/innov.png" alt="" />
              <div>
                <h4>Innovative Approaches</h4>
                <p>We use cutting-edge technologies and methods to ensure the maximum efficiency of your investments.</p>
              </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" className='exp'>
              <img src="images/home/tran.png" alt="" />
              <div>
                <h4>Transparency and Security</h4>
                <p>We guarantee full transparency of all operations and a high level of protection for your assets.</p>
              </div>
            </div>
          </section>

          <section id='join_us' className='block6 container'>
            <div className="join" data-aos="zoom-in-up">
              <video src="images/home/bg/2.webm" muted autoPlay loop playsInline></video>

              <div>
                <h2>Join Us</h2>
                <h3>Invest in the Future</h3>
              </div>
              <p>Fenom is your trusted partner in the world of cryptocurrencies. Start your journey into the digital economy with us and reach new heights in your financial success.</p>
              <button className='main__button'>Join Now</button>
            </div>
          </section>

          <section className='block7 container'>

            <h2>Join & Follow the Community</h2>
            <form action="post">
              <div data-aos="zoom-in">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='E-Mail' />
              </div>
              <textarea data-aos="zoom-in" name="Message" id="message" placeholder='Message' rows={6}></textarea>
              <button className='action__button'>Send</button>
            </form>

            <div className='links'>
              <div className='link' data-aos="flip-left" data-aos-duration="1000">
                <img src="images/net/facebook.png" alt="" />
                <span>Facebook</span>
                <a target="_blank" href="Visit">Visit</a>
              </div>
              <div className='link' data-aos="flip-left" data-aos-duration="1500">
                <img src="images/net/twitter.png" alt="" />
                <span>Twitter</span>
                <a target="_blank" href="https://x.com/Fenom_project">Visit</a>
              </div>
              <div className='link' data-aos="flip-left" data-aos-duration="2000">
                <img src="images/net/youtube.png" alt="" />
                <span>Youtube</span>
                <a href="Visit">Visit</a>
              </div>
              <div className='link' data-aos="flip-left" data-aos-duration="2500">
                <img src="images/net/telegram.png" alt="" />
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
            <h1>Home for connected user</h1>
          </>

      }
    </div>
  )

}