import './header.css';

const Header = () => {
  return (
    <>
      <header className="appheader">
        <h1 className="intro">Hi!
          <div id="container">
            <span className="wave-hand">👋</span>
          </div>
        </h1>
        <h2 className="tagline">
          I'm <span className='color-name'>Vishnu vardhan Eyunni</span>, a web developer based in Tirupati, India. I love building beautiful interfaces, web apps and everything in between!
        </h2>
        <h3 className='get-in-touch'>
          <p>
            Get in touch 👉🏼
          </p>
          <span className="email">vishnuvardhan.eyunni@gmail.com</span>
        </h3>
      </header>
    </>
  )
}

export default Header;