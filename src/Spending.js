import data from "./data.json";

export default function Spending() {
  let highestAmount = 0;

  data.forEach((data) =>
    data.amount > highestAmount ? (highestAmount = data.amount) : highestAmount
  );

  const graphData = data.map((data, index) => {
    const barHeight = (data.amount / highestAmount) * 150;
    return (
      <div className="graph-column" key={index}>
        <div className="graph-bar-label">${data.amount}</div>
        <div
          className="graph-bar"
          style={{
            height: barHeight + "px",
            backgroundColor: data.amount === highestAmount && "#76B5BC",
          }}
        ></div>
        <p className="mini-caption">{data.day}</p>
      </div>
    );
  });

  return (
    <div className="spending-box">
      <h2>Spending - Last 7 days</h2>
      <section className="graph-container">{graphData}</section>
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
