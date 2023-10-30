import React, { useState } from "react";
import "./Adplanpage.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Navbar from "../NavBar/Navbar";
import { Col, Row, Card, Button, Flex } from "antd";
import Homefooter from "../HomeFooter/Homefooter";
function Adplanpage() {
  const [planSelected, setPlanSelected] = useState();

  return (
    <div className="plan-page">
      <Navbar />
      <Row>
        <Col span={16}>
          <h3 className="ad-plan-heading">
            Choose the package that suits you best
          </h3>
        </Col>
        <Col span={16}>
          <Card className={planSelected === 1 ? "ant-card-selected" : ""}>
            <Flex justify="space-between">
              <div className="plan-days-box">
                <span className="plan-days">7 days</span>
                <div className="plan-days-span">Post an ad for 7 days</div>
              </div>

              <div className="plan-price-box">
                <span className="plan-price">2.50 points/day</span>
                <p className="plan-price-total">17.50 points total</p>
              </div>
              <div className="plan-choose-btn-box">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => setPlanSelected(1)}
                >
                  {planSelected === 1 ? <AiOutlineCheckCircle /> : ""}
                  Choose
                </Button>
              </div>
            </Flex>
          </Card>
          <Card className={planSelected === 2 ? "ant-card-selected" : ""}>
            <Flex justify="space-between">
              <div className="plan-days-box">
                <span className="plan-days">15 days</span>
                <div className="plan-days-span">Post an ad for 15 days</div>
              </div>

              <div className="plan-price-box">
                <span className="plan-price">2.00 points/day</span>
                <p className="plan-price-total">30.00 points total</p>
              </div>
              <div className="plan-choose-btn-box">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => setPlanSelected(2)}
                >
                  {planSelected === 2 ? <AiOutlineCheckCircle /> : ""}
                  Choose
                </Button>
              </div>
            </Flex>
          </Card>
          <Card className={planSelected === 3 ? "ant-card-selected" : ""}>
            <Flex justify="space-between">
              <div className="plan-days-box">
                <span className="plan-days">30 days</span>
                <div className="plan-days-span">Post an ad for 30 days</div>
              </div>

              <div className="plan-price-box">
                <span className="plan-price">1.5 points/day</span>
                <p className="plan-price-total">45.00 points total</p>
              </div>
              <div className="plan-choose-btn-box">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => setPlanSelected(3)}
                >
                  {planSelected === 3 ? <AiOutlineCheckCircle /> : ""}
                  Choose
                </Button>
              </div>
            </Flex>
          </Card>
          <Button href="#" type="link" className="plan-cancel-btn">
            Cancel
          </Button>
          <Button className="plan-confirm-btn">Confirm Plan</Button>
        </Col>
      </Row>
      <Homefooter />
    </div>
  );
}

export default Adplanpage;
