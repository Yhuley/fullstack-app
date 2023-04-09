import { Col, Row, Image, Input, Form, Button, Typography } from 'antd';
import { loginSchema, profilePath, registrationPath } from 'app/utils';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const yupSync = [
  {
    async validator({ field }: { field: string }, value: string) {
      await loginSchema.validateSyncAt(field, { [field]: value });
    },
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const login = () => {
    navigate(profilePath);
  };

  return (
    <Row style={{ height: '100vh' }}>
      <Col lg={12} xs={24}>
        <Row align="middle" justify="center" style={{ height: '100%' }}>
          <Col xs={20} md={12} lg={16}>
            <Title>Login</Title>
            <Form onFinish={login} layout="vertical" requiredMark={false} size="large">
              <Form.Item name="email" label="Email" rules={yupSync}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={yupSync}>
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
              Do not have account? <Link to={registrationPath}>Register</Link>
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
