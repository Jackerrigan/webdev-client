export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  var name = "jimmy";
  let greeting = "hello";
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <hr />
      name = {name}
      <br />
      greeting = {greeting}
      <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
