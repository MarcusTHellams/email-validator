import { Col, Container, Row } from 'reactstrap';

import { type UserType, useGetUserQuery } from '../generated/graphql';
import { graphqlClient } from '../graphqlClient';

export const User = () => {
  const { data } = useGetUserQuery(graphqlClient, {
    id: 'defa268a-d916-4b6d-87c5-380d6290d9c0',
  });
  const user = data?.user ? data.user : ({} as UserType);
  return (
    <Container>
      {user && (
        <>
          <Row tag="dl">
            <Col tag="dt" sm="3">
              <strong>First Name:</strong>
            </Col>
            <Col tag="dd" sm="9">
              {user.firstName}
            </Col>
            <Col tag="dt" sm="3">
              <strong>Last Name:</strong>
            </Col>
            <Col tag="dd" sm="9">
              {user.lastName}
            </Col>
            <Col tag="dt" sm="3">
              <strong>Username:</strong>
            </Col>
            <Col tag="dd" sm="9">
              {user.username}
            </Col>
            <Col tag="dt" sm="3">
              <strong>Email:</strong>
            </Col>
            <Col tag="dd" sm="9">
              {user.email}
            </Col>
            <Col tag="dt" sm="3">
              <strong>Image URL:</strong>
            </Col>
            <Col tag="dd" sm="9">
              {user.imageUrl ? (
                <img
                  alt={user.username}
                  className="img-thumbnail rounded-circle"
                  style={{ maxWidth: '6.25rem', height: 'auto' }}
                  src={user.imageUrl}
                />
              ) : 'No Image Specified'}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
