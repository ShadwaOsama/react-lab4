import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate email
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        emailError: !value ? 'Email is required' : !emailRegex.test(value) && 'Invalid email format',
      });
    }

    // Validate password
    if (name === 'password') {
      setErrors({
        ...errors,
        passwordError: value.length < 8 ? 'Password must be at least 8 characters long' : '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا تنفيذ الطلب الخاص بتسجيل الدخول
    console.log('Form data:', formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.emailError}
          />
          <Form.Control.Feedback type="invalid">{errors.emailError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.passwordError}
          />
          <Form.Control.Feedback type="invalid">{errors.passwordError}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
