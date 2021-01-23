import React, { Component } from 'react';
import Functions from '../common/helpers/functions.helper';
import RouterOutline from '../common/helpers/router-outline.helper';
import RouterComponent from '../common/models/component.model';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/cards.sass';

import Service0Image from '../assets/images/services-0.jpg';
import Service1Image from '../assets/images/services-1.jpg';
import Service2Image from '../assets/images/services-2.jpg';
import Service3Image from '../assets/images/services-3.jpg';
import Service4Image from '../assets/images/services-4.jpg';
import Service5Image from '../assets/images/services-5.png';

export class OurServices extends Component {
  public render(): JSX.Element {
    return (
      <>
        <Row>
          <Col className="my-3" xs="12" md="6" lg="4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={ Service0Image } />
              <Card.Body>
                <Card.Title>Business Consulting to Sellers at Origin</Card.Title>
                <Card.Text>
                  Consulting services to the foreign Seller in the country of origin to assess company’s 
                  readiness to export and to research basic conditions for products to enter the USA market. 
                  Include services such as product labeling, import requirements, legal matters, 
                  export accounting issues, etc. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-3" xs="12" md="6" lg="4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={ Service1Image } />
              <Card.Body>
                <Card.Title>Marketplace Account Support Services</Card.Title>
                <Card.Text>
                  These consulting services improve foreign Seller’s experience by providing local market 
                  knowledge and technical support on the process of creating, maintaining and managing the 
                  accounts in Central Sellers. Knowledge of the U.S. market. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-3" xs="12" md="6" lg="4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={ Service2Image } />
              <Card.Body>
                <Card.Title>Import & international Customs Services</Card.Title>
                <Card.Text>
                  Facilitate the importing process into the USA market for foreign products, to avoid delays or 
                  eventually product return to the origin country; considering in the U.S. does not act as Importer 
                  of Record.The FIOR status allows foreign sellers to repetitively import their own products into the USA. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-3" xs="12" md="6" lg="4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={ Service3Image } />
              <Card.Body>
                <Card.Title>Door to door Logistics Services</Card.Title>
                <Card.Text>
                  Support foreign seller in selecting the most cost-effective door-to-door logistic solution to send inventory to 
                  Marketplaces in the U.S. Solutions include a mix of local and international multimodal services, 
                  considering transit times and products’ unit cost optimization. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-3" xs="12" md="6" lg="4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={ Service4Image } />
              <Card.Body>
                <Card.Title>Last and first Mile Delivery U.S.</Card.Title>
                <Card.Text>
                  Once products are cleared and released by U.S. Customs, packages are sorted and distributed to fulfillment centers 
                  from marketplaces. Last mile distribution services are offered in the U.S. by air and ground, looking 
                  for the most cost- effective solutions. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-3" xs="12" md="6" lg="4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={ Service5Image } />
              <Card.Body>
                <Card.Title>Fulfillment and warehuose Services</Card.Title>
                <Card.Text>
                  Temporary fulfillment in the U.S. is offered to sellers when these services are temporarily needed before reaching 
                  final FBA’ DCs. These temporary fulfillment in the U.S. are useful to optimize the international logistic fixed 
                  costs and to keep FBA’s inventory at reasonable levels all time. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

class Services extends Component implements RouterComponent {
  public preload(): void {
    Functions.updateTitle('Services');  
  }

  public render(): JSX.Element {
    this.preload();
    return RouterOutline.set(
      <>
        <Container className="my-5">
          <Row className="mb-4">
            <Col>
              <h1 className="font-weight-bold">Our Services</h1>
            </Col>
          </Row>
          <OurServices/>
        </Container>
      </>
    );
  }
}

export default Services;
