import React, { useEffect, useState } from "react";
import * as C from "./styles.js";

import { useParams } from "react-router";

import api from "../../api";

const Home = () => {
  const [data, setData] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await api.get(`users/${user}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getApiData();
  }, [user]);

  function getData() {
    console.log(data);
  }

  return (
    <C.Container>
      <C.UserProfile>
        <button onClick={getData}>oi</button>
      </C.UserProfile>
      <C.MainContent></C.MainContent>
    </C.Container>
  );
};

export default Home;
