import React from 'react';
import { Layout, Form, Button, Input, Upload, Avatar, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;

const SettingsPersonalPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Handle form submission and update user details logic here
  };

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <h1 style={{ color: 'aqua' }}>Avatar and Personal Details</h1>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={{
            fullName: 'John Doe',
          }}
        >
          <Divider>Change Avatar</Divider>
          <Form.Item
            label="Upload New Avatar"
            name="avatar"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload
              listType="picture-card"
              showUploadList={false}
              action="/your-upload-endpoint"
            >
              <Avatar size={100} icon={<UploadOutlined />} />
            </Upload>
          </Form.Item>
          <Divider>Personal Details</Divider>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: 'Please enter your full name' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default SettingsPersonalPage;
