import { Example } from 'mth-ui-2';
import { Col, Container, Row } from 'reactstrap';

export const ExampleComponent = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col>
          <Example name="Marcus" />
        </Col>
      </Row>
    </Container>
  );
};
