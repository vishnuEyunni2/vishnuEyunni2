import react from "react";
import Header from "../Header/Header";
import './ContentLayout.scss'

const ContentLayout = (props) => {
  return (
    <main id="content-main">
      <section className="content-side">
        <Header />
      </section>
      <section className="content-main">

      </section>
    </main>

  )
}

export default ContentLayout;