import data from "./data.json";

export default function Spending() {
  // divide each number by highest number and multiply by 100 to get scaled percentages.
  console.log(data);
  return (
    <div className="spending-box">
      <h2>Spending - Last 7 days</h2>
      <section className="graph-container">
        <div className="graph-column">
          <div className="graph-bar-container">
            <div className="graph-bar-label">$56.32</div>
            <div className="dummy-bar" style={{ height: "75%" }}></div>
          </div>
          <p className="mini-caption">mon</p>
        </div>
        <div className="graph-column">
          <div className="graph-bar-container">
            <div className="graph-bar-label">$46.32</div>
            <div className="dummy-bar" style={{ height: "25%" }}></div>
          </div>
          <p className="mini-caption">tue</p>
        </div>
        <div className="graph-column">
          <div className="graph-bar-container">
            <div></div>
          </div>
          <p className="mini-caption">wed</p>
        </div>
        <div className="graph-column">
          <div className="graph-bar-container">
            <div></div>
          </div>
          <p className="mini-caption">thu</p>
        </div>
        <div className="graph-column">
          <div className="graph-bar-container">
            <div></div>
          </div>
          <p className="mini-caption">fri</p>
        </div>
        <div className="graph-column">
          <div className="graph-bar-container">
            <div></div>
          </div>
          <p className="mini-caption">sat</p>
        </div>
        <div className="graph-column">
          <div className="graph-bar-container">
            <div></div>
          </div>
          <p className="mini-caption">sun</p>
        </div>
      </section>
      <section className="total-section">
        <div className="total-section-left">
          <p className="mini-caption">Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="total-section-right">
          <p>
            <strong>+2.4%</strong>
          </p>
          <p className="mini-caption">from last month</p>
        </div>
      </section>
    </div>
  );
}
