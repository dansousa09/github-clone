import * as C from "./styles";
import Categories from "../Categories";
import Header from "../Header";

const MainHeader = () => {
  return (
    <C.Container>
      <Header />
      <Categories />
    </C.Container>
  );
};

export default MainHeader;
