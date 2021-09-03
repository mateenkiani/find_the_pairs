import styled from "styled-components";
import { Header, CardsGrid } from "./components";
import { ScoreCard } from "./components/ScoreCard";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export function Home() {
  return (
    <>
      <Header />
      <FlexBox>
        <CardsGrid />
        <ScoreCard />
      </FlexBox>
    </>
  );
}

export default Home;
