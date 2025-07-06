import "./Portfolio.css";
import spotifyImg from "../assets/spotify1.jpg";
import youtubeImg from "../assets/yt1.png";

function Portfolio() {
  const projects = [
    {
      img: spotifyImg,
      title: "Spotify 0.2",
      description:
        "A React‑based music streaming UI that lets you search and play songs in real time.",
      link: "https://spotify-clone-weoo.vercel.app/",
    },
    {
      img: youtubeImg,
      title: "YouTube Clone",
      description:
        "A feature‑rich YouTube front‑end clone built with React and Rapid API.",
      link: "https://youtube-clone-five-livid-45.vercel.app/",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        {projects.map(({ img, title, description, link }) => (
          <div className="portfolio-box" key={title}>
            <img src={img} alt={title} />

            <div className="portfolio-layer">
              <h4>{title}</h4>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
