import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

import { Container } from "../components/container";
import { Title } from "../components/title";
import { Input } from "../components/input";
import { invitedUser, initialized } from "../state/auth";
import axios from "axios";

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(invitedUser);
  const [hasInitialized, setHasInitialized] = useRecoilState(initialized);

  const [code, setCode] = useState("");

  const onSubmit = useCallback(async () => {
    const { data } = await axios.post("/api/validate-invite", {
      code,
    });

    setUser(data.user);
    setHasInitialized(true);

    router.push("/reserve");
  }, [code]);

  return (
    <>
      <Container>
        <Title>VALET MIAMI</Title>

        <Input
          placeholder="invite code"
          value={code}
          onChange={(e) => setCode(e.currentTarget.value)}
        />
        <button onClick={onSubmit}>submit</button>

        <footer>
          <a
            href="https://instagram.com/valetmiami"
            target="_blank"
            rel="noopener noreferrer"
          >
            @valetmiami
          </a>
        </footer>
      </Container>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
          font-size: 1rem;
        }

        .a:hover {
          color: #ccc;
        }

        .title a {
          color: #212826;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Home;
