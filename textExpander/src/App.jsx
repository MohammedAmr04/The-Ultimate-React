import TextExpander from "./TextExpander";

export default function App() {
  return (
    <div>
      <TextExpander padding={60} size={5} bgColor={"red"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        dolor nemo voluptate quasi placeat quos.
      </TextExpander>
      <TextExpander padding={100} size={10} bgColor={"blue"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        dolor nemo voluptate quasi placeat quos.
      </TextExpander>
    </div>
  );
}
