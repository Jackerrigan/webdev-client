import Border from "./Border";
import Content from "./Content";
import Margin from "./Margin";
import Padding from "./Padding";

export default function NestingOrderDemo() {
  return (
    <div id="wd-nesting-order-demo" style={{ backgroundColor: "white" }}>
      <Margin margin={20}>
        <Padding padding={20}>
          <Border width={6} color="black" radius={8}>
            <Content width={120} height={40}>
              Hello
            </Content>
          </Border>
        </Padding>
      </Margin>
    </div>
  );
}
