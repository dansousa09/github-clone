import * as C from "./styles";

const Categories = () => {
  return (
    <C.Container>
      <C.NavCategories>
        <li className="activedNav">Overview</li>
        <li>Repositories</li>
        <li>Packages</li>
        <li>Projects</li>
      </C.NavCategories>
    </C.Container>
  );
};

export default Categories;
