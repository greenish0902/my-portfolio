import React, { useCallback } from "react";
import styled from "styled-components";
import useAxios from "axios-hooks";

import Form from "./components/Form";
import Spinner from "./components/Spinner";

const NavContainer = styled.nav`
  text-align: center;
  .logoImg {
    margin: 0 auto;
    margin-top: 60px;
    width: 240px;
  }
`;

const App = () => {
  const [{ loading, error }, refetch] = useAxios(
    {
      url: "http://localhost:3001/members",
      method: "POST",
    },
    { manual: true }
  );
  // 유저 정보로 이루어진 객체를 하위 컴포넌트로부터 받아와서 저장
  const handleSubmit = useCallback(
    (info) => {
      (async () => {
        try {
          await refetch({ data: { ...info } });
        } catch (error) {
          console.log(error);
        }
      })();
      window.alert("finished!");
      window.location.reload();
    },
    [refetch]
  );

  return (
    <div>
      {loading && <Spinner visible={loading} />}
      {error ? (
        <>
          <h1>Error</h1>
          <p>status: {error.status}</p>
          <p>message: {error.message}</p>
        </>
      ) : (
        <>
          <NavContainer>
            <img
              src="/img/logo.png"
              alt="logo"
              className="logoImg"
              onClick={() => window.location.reload()}
            />
          </NavContainer>
          <Form onSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
};

export default App;
