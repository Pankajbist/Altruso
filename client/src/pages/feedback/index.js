import React, { useState } from 'react';
import { Layout, Rate } from 'antd';

const { Content } = Layout;

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
        <h2>We Value Your Feedback!</h2>
        <p>
          Thank you for choosing our products/services. Your experience matters
          to us, and we're constantly striving to improve. We would greatly
          appreciate it if you could take a few moments to share your thoughts
          with us.
        </p>
        <p>
          Your feedback helps us understand what we're doing right and where we
          can make enhancements. Whether you have suggestions for improvement,
          compliments for our team, or insights on areas that need attention,
          we're eager to hear from you.
        </p>
        <p>Please consider the following prompts to guide your feedback:</p>
        <ol>
          <li>What aspects of our product/service do you find most valuable?</li>
          <li>
            Have you encountered any challenges while using our product/service?
            If yes, please provide details.
          </li>
          <li>
            Is there a feature you would like to see us implement in the future?
          </li>
          <li>
            How would you rate your overall experience with our customer support
            team?
          </li>
          <li>
            Share any suggestions or ideas you have for making our product/service even better.
          </li>
        </ol>
        <p>
          Your feedback is important to us and will contribute to our ongoing
          efforts to provide you with the best possible experience. Thank you
          for taking the time to help us serve you better!
        </p>
        <div style={{ marginTop: '20px' }}>
          <p>Rate your overall experience:</p>
          <Rate allowHalf value={rating} onChange={handleRatingChange} />
        </div>
      </Content>
    </Layout>
  );
};

export default FeedbackPage;
