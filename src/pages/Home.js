import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Action" fetchURL={requests.requestAction} />
      <Row rowID="4" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID="5" title="Upcoming" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;
