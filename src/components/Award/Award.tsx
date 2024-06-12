import "./Award.css";

const Award = () => {
  return (
    <>
    <section className="award-section">
      <div className="award-content">
        <h1>
          Garden Loft receive the 2024 City of Calgary Accessibility Award
        </h1>
        <div className="learn-btn">
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button className="award-button">Learn more <br/>about our <br/> awards</button>
    </div>
    </>
  );
};

export default Award;
