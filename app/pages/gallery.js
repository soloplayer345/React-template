import { Navbar } from "../components/navbar";

function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }

  export default function Gallery() {
    return (
      <section>
        <Navbar/>
        <h1>Amazing scientists</h1>
        <Profile />
      </section>
    );
  }
  