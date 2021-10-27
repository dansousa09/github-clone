import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Redirect = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/gitpage/camunda");
  }, [history]);

  return <></>;
};

export default Redirect;
