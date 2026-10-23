export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const yourObject = { course: "RS101", credits: 4 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <br />
      yourStringify = {JSON.stringify(yourObject)}
      <hr />
    </div>
  );
}
