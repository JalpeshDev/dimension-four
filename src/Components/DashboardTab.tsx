import React from 'react';
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
import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import IBirds from '../Interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const config = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};


const DashboardTab = () => {
  const birds: readonly IBirds[] = useSelector((state: any) => state.birds);
  const labels = Array(birds.length).fill('');
  const finalArray = birds.slice(Math.max(birds.length - 10, 0))

  const data: any = {
    labels,
    datasets: [
      {
        label: 'Last 10 values',
        data: finalArray,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }} >
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom component="div">
          Last 10 values
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Line options={config} data={data} />
      </Grid>
    </Grid>
  );
}

export default DashboardTab;
