import "./Award.css";

const Award = () => {
  return (
    <>
      <section className="award-section" id="award">
        <div className="award-content">
          <h1>
            Garden Loft received the 2024 City of Calgary Accessibility Award
          </h1>
          <div className="learn-btn">
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="680"
            height="330"
            src="https://www.youtube.com/embed/y_nhYxDIm24" // Use the correct YouTube embed URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="award-button">
          Learn more <br />about our <br /> awards
        </button>
      </div>
    </>
  );
};6
export default Award;
