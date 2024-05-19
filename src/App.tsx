import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Rules from "./components/Rules";

const App: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(true);

  return (
    <>
      <Header active={modalActive} setActive={setModalActive} />
      <Content />
      <Rules active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default App;
