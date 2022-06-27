export default function Spending() {
  return (
    <div class="spending-box">
      <h2>Spending - Last 7 days</h2>
      <section class="graph-container">
        <div class="graph-column">
          <div class="graph-bar-container">
            <div class="dummy-bar" style={{ height: "75%" }}></div>
          </div>
          <h5>mon</h5>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div class="dummy-bar" style={{ height: "25%" }}></div>
          </div>
          <h5>tue</h5>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <h5>wed</h5>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <h5>thu</h5>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <h5>fri</h5>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <h5>sat</h5>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <h5>sun</h5>
        </div>
      </section>
      <p>Total this month $478.33 +2.4% from last month</p>
    </div>
  );
}
