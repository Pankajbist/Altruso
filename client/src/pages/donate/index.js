import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
// ... Import statements and Header component

function Index() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          campaigns.length > 0 ? (
            <div>
              {campaigns.map((item) => (
                <div className='card' key={item._id}>
                  <Image
                    src={item.campaignImage}
                    alt='Campaign Image'
                    width={50}
                    height={60}
                  />
                  <div>
                    <p>Name: {item.campaignsName}</p>
                    <p>Price: {item.campaignsPrice}</p>
                    <p>Category: {item.category}</p>
                    <p>Description: {item.campaignsDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No campaigns available.</p>
          )
        )}
      </div>
    </>
  );
}

export default Index;
