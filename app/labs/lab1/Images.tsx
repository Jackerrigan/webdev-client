export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Webb telescope deep field"
        src="https://science.nasa.gov/wp-content/uploads/2023/09/web-first-images-release.png"
      />
      <br />
      Loading an image from the internet that I like:
      <br />
      <img
        id="wd-your-image"
        width="300px"
        height="300px"
        alt="Shinjuku at night"
        src="https://www.gotokyo.org/en/story/guide/shinjuku-shop/images/shopping_guide_670.webp"
      />
      <br />
    </div>
  );
}
