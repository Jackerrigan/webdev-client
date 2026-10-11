export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          <div
            id="wd-ai-relative"
            className="wd-ai-pos-relative-nudge wd-bg-color-green wd-fg-color-white wd-dimension-square"
          >
            AI relative
          </div>
          <div className="wd-pos-relative-nudge-down-right wd-dimenstion-square">
            your position
          </div>
        </div>
      </div>
      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative" style={{ height: 150 }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
          <div className="wd-pos-absolute-120-20-right wd-bg-color-green wd-dimesnsion-square">
            Your absolute
          </div>
          <div
            id="wd-ai-absolute"
            className="wd-ai-pos-absolute-br wd-bg-color-green wd-fg-color-white wd-dimension-square"
          >
            AI absolute
          </div>
        </div>
      </div>
    </div>
  );
}
