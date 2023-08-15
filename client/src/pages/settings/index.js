import React, { useState } from 'react';
import { setUserDetails } from '@/redux/reducerSlice/users';
import { useDispatch, useSelector } from 'react-redux'

import { Layout, Menu, Tabs, Avatar, Form, Input, Button,Card, Switch } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';

const { Content, Sider } = Layout;
const { TabPane } = Tabs;

const SettingsPage = () => {
  const { userDetails } = useSelector(state => state.users)
  const [activeTab, setActiveTab] = useState('personal');
  const [editProfile, setEditProfile] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [twoStepVerification, setTwoStepVerification] = useState(false);

  <Card className="account--details"
  title="Account Details"
  extra={<span onClick={() => setIsAccountModalOpen(true)}>Edit Details</span>}
  bordered={true}
  style={{
    width: '100%',
  }}
>
  <p><span>Full Name: </span>{userDetails?.fullName}</p>
  <p><span>Email: </span>{userDetails?.email}</p>
  <p><span>Bank Account Number: </span>{userDetails?.BankAccountNumber}</p>
</Card>

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleEditPassword = () => {
    setEditPassword(!editPassword);
  };

  const handleTwoStepVerification = () => {
    setTwoStepVerification(!twoStepVerification);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Handle form submission and update user details or password logic here
  };

  return (
    <Layout  style={{ minHeight: '100vh' }}>
      
      <Sider  width={200}
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeTab]}
          onClick={({ key }) => handleTabChange(key)}
        >
          <Menu.Item key="personal" icon={<UserOutlined />}>
            Personal Details
          </Menu.Item>
          <Menu.Item key="privacy" icon={<SafetyCertificateOutlined />}>
            Privacy
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content  style={{ padding: '20px' }}>
          <Tabs  activeKey={activeTab}>
            <TabPane tab="Personal Details" key="personal">
             <Avatar
              size={120}
              style={{
                backgroundColor: 'aqua',
                color: '#f56a00',
                marginTop: '3px',
                fontSize: '5rem',
                marginRight: '-5px',
                textAlign: 'center',
              }}
            >
              {userDetails.fullName[0]}
            </Avatar>
              {editProfile ? (
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  onFinish={onFinish}
                  initialValues={userDetails}
                >
                  <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter your Email Address' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="BankAccountNumber"
                    name="BankAccountNumber"
                    rules={[
                      { required: true, message: 'Please enter your BankAccountNumberr' },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                   Save Changes
                 
                    </Button>
                    <Button onClick={handleEditProfile} style={{ marginLeft: 10 }}>
                      Cancel
                    </Button>
                  </Form.Item>
                </Form>
              ) : (
                <>
                  <p>
                    <strong>Full Name:</strong> {userDetails.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {userDetails.email}
                  </p>
                  <p>
                    <strong>Bank Account Number:</strong> {userDetails.BankAccountNumber}
                  </p>
                  <Button onClick={handleEditProfile}>Edit</Button>
                </>
              )}
            </TabPane>
            <TabPane tab="Privacy" key="privacy">
            <Avatar
              size={120}
              style={{
                backgroundColor: 'aqua',
                color: '#f56a00',
                marginTop: '3px',
                fontSize: '5rem',
                marginRight: '-5px',
                textAlign: 'center',
              }}
            >
              {userDetails.fullName[0]}
            </Avatar>
            <br></br>
            <br></br>

              <Button onClick={handleEditPassword} style={{ marginBottom: 20 }}>
                Change Password
              </Button>
              {editPassword && (
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    label="Current Password"
                    name="currentPassword"
                    rules={[{ required: true, message: 'Please enter your current password' }]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[
                      { required: true, message: 'Please enter a new password' },
                      { min: 6, message: 'Password must be at least 6 characters long' },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Confirm New Password"
                    name="confirmNewPassword"
                    dependencies={['newPassword']}
                    rules={[
                      { required: true, message: 'Please confirm your new password' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('newPassword') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Passwords do not match'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Save Changes
                    </Button>
                    <Button onClick={handleEditPassword} style={{ marginLeft: 10 }}>
                      Cancel
                    </Button>
                  </Form.Item>
                </Form>
              )}
              <div className="settings-switch">
                <p>
                  <strong>Two-Step Verification:</strong>
                  <Switch
                    checked={twoStepVerification}
                    onChange={handleTwoStepVerification}
                  />
                </p>
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SettingsPage;