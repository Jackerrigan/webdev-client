export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension-box">
          This sentence is deliberately much longer than the declared 120px by
          60px box, so it is obvious how the fixed width and height behave.
        </div>
      </div>
      <div className="wd-your-dimensions wd-bg-color-green"> short text</div>
      <div className="wd-your-dimensions wd-bg-color-green">
        long text long text long text long text long text long text long text
        long text long text long text long text long text long text long text
        long text long text long text long text long text long text long text
        long text long text long text long text long text long text long text
        long text long text long text long text long text long text long text
        long text long text long text long text long text long text long text
        long text long text long text long text long text long text long text
        long text long text long text long text long text long text long text
        long text long text{" "}
      </div>
    </div>
  );
}
