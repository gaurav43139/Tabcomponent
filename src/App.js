import "./styles.css";
import Tab from "./Tab.js";
export default function App() {
  return (
    <div className="App">
      <Tab>
        <div header="Tab1">Content1</div>
        <div header="Tab2">Content2</div>
        <div header="Tab3">Content3</div>
      </Tab>
      {/* <Tabs>
        <Tab header="Tab1">Content1</Tab>
        <Tab header="Tab2">Content2</Tab>
        <Tab header="Tab3">Content3</Tab>
      </Tab> */}
    </div>
  );
}
