import { Col, Row, Image, Input, Form, Button, Typography } from 'antd';
import { loginPath, profilePath } from 'app/utils';
import { useAppDispatch } from 'data';
import { register as registerThunk } from 'data/reducers/auth.reducer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const register = () => {
    dispatch(registerThunk());
    // navigate(profilePath);
  };

  return (
    <Row style={{ height: '100vh' }}>
      <Col lg={12} xs={24}>
        <Row align="middle" justify="center" style={{ height: '100%' }}>
          <Col xs={20} md={12} lg={16}>
            <Title>Register</Title>
            <Form onFinish={register} layout="vertical" requiredMark={false} size="large">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!', type: 'string' }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
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
                  Register
                </Button>
              </Form.Item>
            </Form>
            <Text>
              Already have an account? <Link to={loginPath}>Login</Link>
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

export default Registration;
