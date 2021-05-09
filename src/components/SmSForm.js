import React, {useState} from 'react';
import styled from 'styled-components';

function SmsForm() {
  const [sms, setSms] = useState('');
  const [number, setNumber] = useState('');

  const sendSms = (event) => {
    event.preventDefault();

    let smsObj = {
        mobile_number: '1' + number,
        message: sms,
    }
   
    fetch('http://localhost:3000/sms_messages/', {
        method:'POST',
        headers: {
            'content-type': 'application/json',
            accepts: "application/json"
        },
        body: JSON.stringify(smsObj)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}

  const handleChange = (event) => {
    if (event.target.name === 'number') {
      setNumber(event.target.value);
    } else if (event.target.name === 'sms') {
      setSms(event.target.value);
    }
  }

  return (
    <Container>
      <Header>Send SMS Message!</Header>
      <Form onSubmit={sendSms}>
        <label>Mobile Number:</label>
        <Input name='number' onChange={handleChange}></Input>
        <label>Message:</label>
        <TextArea name='sms' onChange={handleChange}></TextArea>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default SmsForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #C8A2C8;
`

const Header = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;s
`

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 6px 0 4px;
`

const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  padding: 12px;
  margin: 6px 0 4px;
  height: 100px;
`

const Button = styled.button`
  width: 180px;
  padding: 12px 25px;
  margin: 6px 0 4px;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`