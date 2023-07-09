import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { Link } from 'react-router-dom';

const Side = () => {
  const [kotaItems, setKotaItems] = useState([]);
  const foodItems = useSelector((state) => state.food.food);

  useEffect(() => {
    const filteredItems = foodItems.filter((item) => item.typeList === 'Side');
    setKotaItems(filteredItems);
  }, [foodItems]);

  const chartData = {
    labels: kotaItems.map((item) => item.text),
    datasets: [
      {
        label: 'Price',
        data: kotaItems.map((item) => item.price),
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (

    <div className='flex flex-col gap-8 mx-auto w-[90%] py-4'>

    <div><Link to='/dashboard'>
      <button className='bg-blue-400 rounded p-2 text-white'>Back</button>
    </Link >
    </div>

<div><h1 className='text-3xl font-semibold'>Side Items</h1></div>
<div style={{ height: 'auto', width: 'auto' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>

<div className="overflow-hidden">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th >Description</th>
            <th className='hidden md:block'>Type</th>
            <th >Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {kotaItems.map((item) => (
            <tr key={item._id}>
              <td>{item.text}</td>
              <td >{item.description}</td>
              <td className='hidden md:block'>{item.typeList}</td>
              <td>{item.quantity}</td>
              <td>R{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default Side;
