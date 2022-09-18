import { Link, Route, Routes } from 'react-router-dom';
import { Col, Container, List, ListInlineItem, Row } from 'reactstrap';

import { EmailCheck } from './email-check';
import { ExampleComponent } from './example';

function App() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <List type="inline">
              <ListInlineItem>
                <Link to="/">Home</Link>
              </ListInlineItem>
              <ListInlineItem>
                <Link to="/example">Example</Link>
              </ListInlineItem>
            </List>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<EmailCheck />} />
        <Route path="/example" element={<ExampleComponent />} />
      </Routes>
    </>
  );
}

export default App;
