import { Row, Col, Button, Dropdown, Menu } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import Image from "next/image";
import pair from "../../images/pair-10.jpg";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1vw;
  padding-top: 0.5vw;
  width: 15vw;
  height: 25vw;
`;

const Card = styled.div`
  margin-top: 0.5vw;
  margin-left: 2vw;
  width: 15vw;
  height: 25vw;
  background: #fbfbfb;
  border-radius: 4px;
`;

const Line = styled.div`
  width: 10vw;
  height: 0.09vw;
  border: 1px solid #b2b2b2;
`;

const MyButton = styled(Button)`
  width: 6vw;
  background: #1890ff;
  color: #ffffff;
`;

export const ScoreCard = () => {
  const menu = (
    <Menu onClick={null}>
      <Menu.Item key="1">5 pairs</Menu.Item>
      <Menu.Item key="2">6 pairs</Menu.Item>
      <Menu.Item key="3">15 pairs</Menu.Item>
    </Menu>
  );

  return (
    <Card>
      <Column>
        <div className={"score-text"}>Score</div>
        <div className={"score"}>3 / 10</div>
        <div className={"tries"}>Tries: 5</div>
        <Line />
        <div className={"tries"}>Options</div>
        <div className={"select-size"}>
          <div className={"tries"}>Size</div>
          <Dropdown overlay={menu}>
            <Button>
              10 Pairs <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        
        <div className={"tries"}>Score</div>
        <MyButton>Restart</MyButton>
      </Column>
    </Card>
  );
};
