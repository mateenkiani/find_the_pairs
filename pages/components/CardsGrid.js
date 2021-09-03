import { Row, Col } from "antd";
import Image from "next/image";
import { useReducer } from "react";
import styled from "styled-components";
import { images } from "../../images";

const Card = styled.div`
  width: 7vw;
  height: 7vw;
  background: #1890ff;
  box-shadow: 0px 4px 30px rgba(8, 55, 72, 0.21);
  border-radius: 4px;
  margin: 0.5vw;
`;

const QuestionMark = styled.div`
  position: absolute;
  left: 41.61%;
  right: 41.61%;
  top: calc(50% - 68px / 2);

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 3vw;
  line-height: 68px;

  color: #ffffff;
`;

const StyledImage = styled(Image)`
  box-shadow: 0px 4px 30px rgba(8, 55, 72, 0.21);
  border-radius: 4px;
`;

export const CardsGrid = () => {
  let pairs = 10;
  const rows = 4;
  const cols = 5;

  // Generate pairs of array
  function createPairs(count) {
    let id = 0;
    let imagePairs = [];
    for (let i = 0; i < count; i++) {
      let image1 = {
        identifier: id,
        image: images[i],
        flipped: true,
      };
      id = id + 1;
      imagePairs.push(image1);
      let image2 = {
        identifier: id,
        image: images[i],
        flipped: true,
      };
      id = id + 1;
      imagePairs.push(image2);
    }
    return imagePairs;
  }

  // shuffle an array
  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // convert array to matrix
  const arrayToMatrix = (array, columns) =>
    Array(Math.ceil(array.length / columns))
      .fill("")
      .reduce((acc, cur, index) => {
        return [...acc, [...array].splice(index * columns, columns)];
      }, []);

  let unshuffledCards = createPairs(pairs);
  console.log(unshuffledCards)
  let ShuffledCards = shuffle(unshuffledCards);

  const [cards, dispatch] = useReducer(reducer, unshuffledCards);

  function reducer(state, action) {
    if (action.type == "unflip") {
      return state.map((card) => {
        if (card.identifier === action.payload) {
          console.log("card" + card.identifier);
          card.flipped = false;
        }
        return card;
      });
      // state[action.payload].flipped = false;
      // return state
    }
    if (action.type == "flip") {
      return state.map((card) => {
        console.log(card);
        if (card.identifier === action.payload) {
          card.flipped = true;
        }
        return card;
      });
      // state[action.payload].flipped = false;
      // return state
    }
  }

  return (
    <div>
      {[...Array(4).keys()].map((row, i) => (
        <Row
          key={(i, row ? row + 1 : (row = 0))}
          style={{ marginBottom: "0.5vw" }}
        >
          {[...Array(5)].map((item, j) => (
            <Col key={j}>
              <Card
                onClick={() => {
                  const elem = cards[i * 5 + j];
                  console.log(i * 5 + j);
                  console.log(elem.identifier);
                  dispatch({ type: "unflip", payload: elem.identifier });
                }}
              >
                {cards[i * 4 + j].flipped ? (
                  <QuestionMark>?</QuestionMark>
                ) : (
                  <StyledImage src={cards[i * 5 + j].image} alt="" />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};
