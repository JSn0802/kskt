import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

function RegisterForm() {
  return (
    <Sform>
         <Form>
         <h3>Register here</h3>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="number" placeholder="Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Sform>

  );
}
const Sform=styled.div`
    margin: 2rem 10%;
    h3{
        font-weight: 700;
    }
    border-style: solid;
    border-width: 0.05rem;
    padding: 2rem;
    background-color: #adf6ad;
    border-radius: 0.5%;
`
export default RegisterForm;