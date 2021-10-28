import React, { useEffect, useState } from "react";
import * as C from "./styles.js";

import { useParams } from "react-router";

import { getRepoData, getUserData } from "../../api";
import MainHeader from "../../components/MainHeader/index.jsx";
import Aside from "../../components/Aside/index.jsx";
import Content from "../../components/Content/index.jsx";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [repos, setRepos] = useState([]);

  const { user } = useParams();

  useEffect(() => {
    const getApiData = async () => {
      const data = await getUserData(user);
      setUserData(data);
      const repoData = await getRepoData(user);
      setRepos(repoData);
    };

    getApiData();
  }, [user]);

  return (
    <C.Container>
      <MainHeader />
      <Aside userData={userData} />
      <Content reposData={repos} />
    </C.Container>
  );
};

export default Home;
