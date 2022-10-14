import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail]= useState('');
  const [age, setAge] = useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,email,age
      
    }
    addUser(newUser);
    history.push("/");
  }

  

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter email" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Age</Label>
        <Input type="text" value={age} onChange={(e) => setAge(e.target.value)} name="age" placeholder="Enter age" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
