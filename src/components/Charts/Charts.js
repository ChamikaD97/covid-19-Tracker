import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Charts.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['darkblue', 'forestgreen', 'darkred'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        
        options={{
          legend: { display: false },
          title: { display: true, fontSize:15, },
        }}
      />
    ) : null
  );



  return (
    <div className={styles.container}>
      {country ? barChart : barChart}
    </div>
  );
};

export default Chart;
