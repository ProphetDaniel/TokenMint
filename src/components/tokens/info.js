import React from 'react';
import { Row, Col, Carousel, Panel } from 'react-bootstrap';



export const Information = (props) => {

    return (
      <Row>
        <Col sm={12}>
         <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-info back-widget-set text-center">
              <i className="fa fa-history fa-5x"></i>
              <h3 id = "weekData">5 <i className="fa fa-dot-circle-o"></i></h3>
              Tokens Minted
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-success back-widget-set text-center">
              <i className="fa fa-bars fa-5x"></i>
              <h3 id="crowdSalesCurrent"> 25 </h3>
              Live Crowdsales
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-warning back-widget-set text-center">
              <i className="fa fa-exchange fa-5x"></i>
              <h3 id = "regTokens">56 </h3>
              Registered Tokens
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="alert alert-success back-widget-set text-center">
              <i className="fa fa fa-users fa-5x"></i>
              <h3 id = "weeklyusers">10k </h3>
              Weekly Users
            </div>
          </div>
        </Col>
        <Col sm={8}>
             <Carousel>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="img/hotcoin/1.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="img/hotcoin/2.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="img/hotcoin/3.jpg"/>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col sm = {4}>
            <Panel header={"Events"} bsStyle="primary">
            <div>
              <Panel footer="Token Minter | Time 2:00 pm at 25th july" bsStyle="success">

              Greg Coin Minted!
              </Panel>
            </div>
            <div>
              <Panel footer=" CrowdSale | Time 2:00 pm at 25th july" bsStyle="info">

              DontPanic Coin launched a crowdsale!
            </Panel>
            </div>
            </Panel>
            </Col>
          </Row>
    );
};
