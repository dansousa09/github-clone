import * as C from "./styles";
import RepoItem from "../RepoItem";

const Content = ({ reposData }) => {
  return (
    <C.Container>
      <C.ContentTitle>
        <h3>Popular Repositories</h3>
      </C.ContentTitle>
      <C.RepoList>
        {reposData.map((repo, index) => {
          return <RepoItem key={index} repoData={repo} />;
        })}
      </C.RepoList>
    </C.Container>
  );
};

export default Content;
