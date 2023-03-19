import { Col, Row, Image, Input, Form, Button, Typography } from 'antd';
import { profilePath, signUpPath } from 'app/utils';
import { useAppDispatch } from 'data';
import { login as loginReducer } from 'data/reducers/auth.reducer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type SignInValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const login = () => {
    dispatch(loginReducer());
    navigate(profilePath);
  };

  return (
    <Row style={{ height: '100vh' }}>
      <Col lg={12} xs={24}>
        <Row align="middle" justify="center" style={{ height: '100%' }}>
          <Col xs={20} md={12} lg={16}>
            <Title>Login</Title>
            <Form onFinish={login} layout="vertical" requiredMark={false} size="large">
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input.Password
                  visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
            <Text>
              Do not have account? <Link to={signUpPath}>Register</Link>
            </Text>
          </Col>
        </Row>
      </Col>
      <Col lg={12} xs={0}>
        <Image
          src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg"
          preview={false}
          height="100vh"
          style={{ objectFit: 'cover' }}
        />
      </Col>
    </Row>
  );
};

export default Login;
