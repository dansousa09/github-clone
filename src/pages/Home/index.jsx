import React, { useEffect } from "react";
import { getRepoData, getUserData } from "../../api";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import * as C from "./styles.js";

import MainHeader from "../../components/MainHeader/index.jsx";
import Aside from "../../components/Aside/index.jsx";
import Content from "../../components/Content/index.jsx";

const Home = () => {
  const { user } = useParams();

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const repos = useSelector((state) => state.repos);

  useEffect(() => {
    const getApiData = async () => {
      const data = await getUserData(user);
      const repoData = await getRepoData(user);
      dispatch({ type: "GET_USERDATA", payload: data });
      dispatch({ type: "GET_REPOS", payload: repoData });
      console.log(userData, repos);
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
