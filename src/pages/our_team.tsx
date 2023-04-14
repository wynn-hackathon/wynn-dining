import Head from 'next/head'
import Image from 'next/image'

export default function OurFlow(props: any) {
  return (
    <>
      <Head>
        <title>Wynn Las Vegas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='container landingPage team'>
          <section className='headline'>
            <div className="container">
              <h1 className="marketing-title" tabIndex={0}>Our Team</h1>
              <div className='developerTeam'>
                <ul >
                  <li><span>A</span>run Kannamkaavil</li>
                  <li> <span>M</span>elat Fransiscos</li>
                  <li><span>V</span>an Nguyen</li>
                </ul>
              </div>
              <p className="copy-wrap" tabIndex={0}>Creators, Developers, and Problem solvers</p>
            </div>

          </section>
          <div className='developer'>
            <div className='profile'><Image src="/images/arun.jpg" className='rounded-circle' width="200" height="200" alt="Wynn Las Vegas" /></div>
            <div className='info'>
              <p className='name'>Kannamkaavil, Arun</p>
              <p className='title'>Mobile developer</p>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec. </p>
            </div>
          </div>
          <div className='developer'>
            <div className='profile'><Image src="/images/melat.jpg" className='rounded-circle' width="200" height="200" alt="Wynn Las Vegas" /></div>
            <div className='info'>
              <p className='name'>Fransiscos, Melat</p>
              <p className='title'>Analyst - DevOps</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec. </p>
            </div>
          </div>
          <div className='developer'>
            <div className='profile'><Image src="/images/van.jpg" className='rounded-circle' width="200" height="200" alt="Wynn Las Vegas" /></div>
            <div className='info'>
              <p className='name'>Nguyen, Van</p>
              <p className='title'>Front End Web Developer</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec. </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}