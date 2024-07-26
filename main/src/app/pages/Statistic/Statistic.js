// src/components/CampaignTimeline.js
import React, { useEffect, useState } from 'react';
import exampleImage from './holberton-akm.jpeg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Statistic.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistic = () => {
  const [data, setData] = useState({
    emailSent: 0,
    emailOpened: 0,
    clickedLink: 0,
    submittedData: 0,
    emailReported: 0,
    timeline: [], // Placeholder for timeline events
  });

  useEffect(() => {
    // Placeholder for future data fetching
    const fetchData = async () => {
      // Fetch data from your backend (replace with your actual API endpoint)
      // const response = await fetch('/api/data');
      // const result = await response.json();
      // setData(result);

      // For now, just log to console to indicate this is where the data fetching will happen
      console.log('Fetching data from backend...');
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.timeline.map((event) => event.time),
    datasets: [
      {
        label: 'Statistics',
        data: data.timeline.map((_, index) => index + 1),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="campaign-timeline">
      <div className="content">
        <div className="chart-container">
          <Line data={chartData} />
        </div>
        <div className="stats">
          <div className="stat">
            <span>Email Sent</span>
            <div className="circle">{data.emailSent}</div>
          </div>
          <div className="stat">
            <span>Email Opened</span>
            <div className="circle">{data.emailOpened}</div>
          </div>
          <div className="stat">
            <span>Clicked Link</span>
            <div className="circle">{data.clickedLink}</div>
          </div>
          <div className="stat">
            <span>Submitted Data</span>
            <div className="circle">{data.submittedData}</div>
          </div>
          <div className="stat">
            <span>Email Reported</span>
            <div className="circle">{data.emailReported}</div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <button onClick={() => (window.location.href = '/quiz')}>
          Go to Quiz
        </button>
        <button onClick={() => (window.location.href = '/send-phish-attack')}>
          Send Phish Attack
        </button>
        <div className="image-placeholder">
          <img src={exampleImage} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
