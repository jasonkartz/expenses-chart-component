export default function Spending() {
  return (
    <div class="spending-box">
      <h2>Spending - Last 7 days</h2>
      <section class="graph-container">
        <div class="graph-column">
          <div class="graph-bar-container">
            <div class="graph-bar-label">$56.32</div>
            <div class="dummy-bar" style={{ height: "75%" }}></div>
          </div>
          <p class="mini-caption">mon</p>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div class="graph-bar-label">$46.32</div>
            <div class="dummy-bar" style={{ height: "25%" }}></div>
          </div>
          <p class="mini-caption">tue</p>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <p class="mini-caption">wed</p>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <p class="mini-caption">thu</p>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <p class="mini-caption">fri</p>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <p class="mini-caption">sat</p>
        </div>
        <div class="graph-column">
          <div class="graph-bar-container">
            <div></div>
          </div>
          <p class="mini-caption">sun</p>
        </div>
      </section>
      <section class="total-section">
        <div class="total-section-left">
          <p class="mini-caption">Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div class="total-section-right">
          <p>
            <strong>+2.4%</strong>
          </p>
          <p class="mini-caption">from last month</p>
        </div>
      </section>
    </div>
  );
}
