import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button
}

const SearchForm = () => (
  <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder="Enter something ..." />
    </FormGroup>
    <Button type="submit">
      search
    </Button>
  </Form>
);

export default SearchForm;
