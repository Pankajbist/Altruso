import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

import Header from '../../components/header';
import Image from 'next/image';

const Index = () => {
  const stripeLink = "https://buy.stripe.com/test_14k03h5A80bVgJq4gg";
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [donateModalVisible, setDonateModalVisible] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const fetchCampaigns = async () => {
    try {
      const res = await fetch('http://localhost:4000/campaigns');
      const { data } = await res.json();

      const campaignsWithFullImageURL = data.map((item) => ({
        ...item,
        campaignImage: 'http://localhost:4000/campaign-img/' + item._id,
      }));

      setCampaigns(campaignsWithFullImageURL);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const showDetails = (campaign) => {
    showModal(campaign);
  };

  const showModal = (campaign) => {
    setSelectedCampaign(campaign);
    setModalVisible(true);
  };

  const hideModal = () => {
    setSelectedCampaign(null);
    setModalVisible(false);
  };

  const showDonateModal = () => {
    setDonateModalVisible(true);
  };

  const hideDonateModal = () => {
    setDonateModalVisible(false);
  };

  return (
    <>
      <Header />
      <h1 style={{ textAlign:"center"}}>Trending fundraiser</h1>
      <h2 style={{ textAlign:"center", color:"aqua"}}>___________________________</h2>
      <div className="campaign-list">
        {loading ? (
          <div className="loading">
            <div className="loader"></div>
            <p>Loading...</p>
          </div>
        ) : (
          campaigns.length > 0 ? (
            <div className="cards-container">
              {campaigns.map((item) => (
                <div className='card' key={item._id}>
                  <Image
                    src={item.campaignImage}
                    alt='Campaign Image'
                    width={300}
                    height={200}
                  />
                  <div className="campaign-details">
                    <p className="campaign-name">{item.campaignsName}</p>
                    <p>Name: {item.username}</p>
                    <p>Email: {item.email}</p>
                    <p>Cause: {item.cause}</p>
                    <p> {item.estimatedAmount} Amount Left </p>
                    <div className="buttons">
                      <button  className="donate-button"  onClick={() => showModal(item)}>Details</button>
                      
          <button className="donate-button" onClick={() => window.location.href = "https://buy.stripe.com/test_14k03h5A80bVgJq4gg"}>
                        Donate
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-campaigns">No campaigns available.</p>
          )
        )}
      </div>
      <Modal
        title="Campaign Details"
        visible={modalVisible}
        onCancel={hideModal}
        footer={[
          <button className='button2' key="close" onClick={hideModal}>
            Close
          </button>,
           <button className='button2' key="ok" onClick={hideModal}>
           OK
         </button>,
        ]}
      >
        {selectedCampaign && (
          <div>
             <Image
                    src={selectedCampaign.campaignImage}
                    alt='Campaign Image'
                    width={100}
                    height={100}
                  />
           
            <p>Name: {selectedCampaign.username}</p>
             <p>Email: {selectedCampaign.email}</p>
            <p>Phone Number: {selectedCampaign.phoneNumber}</p>
            <p>Address: {selectedCampaign.address}</p>
            <p>State: {selectedCampaign.state}</p>
            <p>Nationality: {selectedCampaign.nationality}</p>
            <p>Cause: {selectedCampaign.cause}</p>
            <p>Bank Account Holder: {selectedCampaign.bankAccountHolder}</p>
            <p>Bank Account Number: {selectedCampaign.bankAccountNumber}</p>
            <p>Swift Code: {selectedCampaign.swiftCode}</p>
            <p>Branch: {selectedCampaign.branch}</p>
<p>Estimated Amount: {selectedCampaign.estimatedAmount}</p>
 
          </div>
        )}
      </Modal>
    
    </>
  );
};

export default Index;
