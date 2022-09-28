import { Drawer, Input, Button, Image } from 'antd';
import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { ModificarPersona } from '../producto/ProductoList';

const ModificarDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <EditOutlined onClick={showDrawer} />
      <Drawer title={'Editando a persona: ' + props.title} placement="right" onClose={showDrawer} open={open} className="unselectable">
        <Image
          width={200}
          src={props.avatar}
          preview={false}
        />
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </Drawer>
    </>
  );
};

export default ModificarDrawer;