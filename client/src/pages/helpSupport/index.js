import React from 'react';
import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

const HelpAndSupportPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={200}
        style={{
          background: '#fff',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Menu mode="vertical">
          <Menu.Item key="account">Account and Login Assistance</Menu.Item>
          <Menu.Item key="product">Product Information and Features</Menu.Item>
          <Menu.Item key="billing">Billing and Payment</Menu.Item>
          <Menu.Item key="troubleshooting">Technical Troubleshooting</Menu.Item>
          <Menu.Item key="howTo">How-To Guides and Tutorials</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
          <h2>Welcome to our Help and Support Center!</h2>
          <p>
            We're here to assist you in every way possible. If you're
            experiencing any issues, have questions about our products or
            services, or need guidance on using our platform, you're in the
            right place. Our dedicated support team is ready to provide you
            with expert assistance to ensure you have a seamless and enjoyable
            experience.
          </p>
          <p>
            To get started, please select a category below that best matches
            your inquiry:
          </p>
          <ul>
            <li>Account and Login Assistance</li>
            <li>Product Information and Features</li>
            <li>Billing and Payment</li>
            <li>Technical Troubleshooting</li>
            <li>How-To Guides and Tutorials</li>
          </ul>
          <p>
            If you can't find the information you're looking for, don't hesitate
            to reach out directly to our support team. You can contact us via:
          </p>
          <ul>
           
            <li>Email: <a href="mailto:altrusocrowdfunding@gmail.com">altrusocrowdfunding@gmail.com</a></li>
            <li>Phone: <a href="tel:01524684">Call Now</a></li>
          </ul>
          <p>
            Before contacting us, consider checking out our comprehensive FAQ
            section, as it might have quick answers to your queries.
          </p>
          <p>
            We're committed to making your experience with us as smooth as
            possible. Thank you for choosing us, and we look forward to
            assisting you!
          </p>
          <div style={{ marginTop: '20px' }}>
            <a href="/settings">Settings</a> |{' '}
            <a href="/settings">Privacy</a>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HelpAndSupportPage;
