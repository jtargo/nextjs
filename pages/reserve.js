import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import startCase from "lodash/startCase";

import { Container } from "../components/container";
import { Title, Subtitle } from "../components/title";
import { invitedUser, initialized } from "../state/auth";
import { useEffect } from "react";

export default () => {
  const hasInitialized = useRecoilValue(initialized);
  const user = useRecoilValue(invitedUser);
  const router = useRouter();

  useEffect(() => {
    if (!hasInitialized) router.push("/");
  }, [hasInitialized]);

  return (
    <Container>
      {user ? (
        <>
          <Title>Access granted.</Title>
          <Subtitle>
            Welcome to Valet Private Dispatch, {startCase(user.name)}
          </Subtitle>
        </>
      ) : (
        <>
          <Title>Access denied.</Title>
          <Subtitle>That wasn't a valid invite code</Subtitle>
        </>
      )}
    </Container>
  );
};
