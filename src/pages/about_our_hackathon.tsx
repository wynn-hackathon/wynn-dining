import Head from 'next/head'
import Image from 'next/image'

export default function AboutOurHackathon(props: any) {
  return (
    <>
      <Head>
        <title>Wynn Las Vegas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='container landingPage aboutProject'>
          <section className='headline'>
            <div className="container">
              <h1 className="marketing-title" tabIndex={0}>AMV Hackathon</h1>
              <p className="copy-wrap" tabIndex={0}>We built a Wynn Resort restaurant’s website</p>
            </div>
          </section>
          <div className='nextLogo'>
            <Image src="/images/nextjs-logo.svg" width="300" height="100" alt="Wynn Las Vegas" />
          </div>
          <div className='about'>
            <h2>Features</h2>
            <div className='row'>
              <div className='col'>
                <h3>Home Page</h3>
                <ul>
                  <li>Banner</li>
                  <li>Reservations</li>
                  <li>Intro information </li>
                  <li>Promotions (optional)</li>
                  <li>List of all restaurants or filter by the category</li>
                  <li>Restaurant's menu page (optional)</li>
                  <li>Reserve a table form</li>
                </ul>
              </div>
              <div className='col'>
                <h3>Detail page</h3>
                <ul>
                  <li>Banner with headline box</li>
                  <li>Detail information</li>
                  <li>Gallery (optional)</li>
                  <li>Special meal section (optional)</li>
                  <li>Testimonial (optional)</li>
                  <li>FAQs (optional)</li>
                  <li>Recommended restaurants (optional)</li>
                  <li>Restaurant's menu page (optional)</li>
                  <li>Reserve a table form</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='tech'>
            <h2>Technologies</h2>
            <div><Image src="/images/tech-env.jpg" width="342" height="31" alt="Wynn Las Vegas" /></div>
            <div><Image src="/images/tech.jpg" width="577" height="29" alt="Wynn Las Vegas" /></div>
          </div>
          <div className='developerTeam'>
            <ul >
              <li><span>A</span>run Kannamkaavil</li>
              <li> <span>M</span>elat Fransiscos</li>
              <li><span>V</span>an Nguyen</li>
            </ul>
            <div className='logo-amv'><Image src="/images/amv-logo.svg" width="200" height="250" alt="Wynn Las Vegas" /></div>
          </div>
        </div>
      </main>
    </>
  )
}
