import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  Label,
  Row,
} from 'reactstrap';

import { useEmailCheckQuery } from '../generated/graphql';
import { graphqlClient } from '../graphqlClient';

export const EmailCheck = () => {
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');

  const { data } = useEmailCheckQuery(
    graphqlClient,
    {
      email,
    },
    {
      enabled: !!email,
    }
  );
  const validEmail = data?.emailCheck;

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <div className="d-flex justify-content-center">
            <Col sm="6">
              <Form
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  setEmail(value);
                }}
              >
                <FormGroup>
                  <Label className="d-block mb-0">Email Check:</Label>
                  <FormText>
                    Enter an email address to check if it is valid
                  </FormText>
                  <InputGroup>
                    <Input
                      valid={validEmail === true}
                      invalid={validEmail === false}
                      id="emailCheck"
                      type="search"
                      value={value}
                      onChange={(event) => {
                        setValue(event.target.value);
                      }}
                    />

                    {/* eslint-disable indent */}
                    <Button
                      color={
                        validEmail === true
                          ? 'success'
                          : validEmail === false
                          ? 'danger'
                          : 'primary'
                      }
                      type="submit"
                    >
                      Check
                    </Button>
                    {/* eslint-enable indent */}
                  </InputGroup>
                  {validEmail === true ? (
                    <p className="text-success">
                      <small>THE EMAIL IS VALID!</small>
                    </p>
                  ) : validEmail === false ? (
                    <p className="text-danger">
                      <small>THE EMAIL IS INVALID!</small>
                    </p>
                  ) : null}
                </FormGroup>
              </Form>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};
