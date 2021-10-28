import * as C from "./styles";

const RepoItem = ({ repoData }) => {
  // let description = repoData.description;
  // if (description.length >= 200) {
  //   description = description.substring(0, 200) + "...";
  // }
  return (
    <a href={repoData.svn_url}>
      <C.Container>
        <C.RepoTitle>{repoData.name}</C.RepoTitle>
        <C.RepoOverview>
          {!repoData.description
            ? "Sem descrição disponível"
            : !repoData.description}
        </C.RepoOverview>
        <C.RepoStacks>{repoData.language}</C.RepoStacks>
      </C.Container>
    </a>
  );
};

export default RepoItem;
