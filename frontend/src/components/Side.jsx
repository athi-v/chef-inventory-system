import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto'

import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate()
  const {chef} = useSelector((state) => state.auth)


  useEffect(() => {
    if(!chef)
    {
    navigate('/login')}
  }, [chef, navigate])

  const {food} = useSelector((state) => state.food)

  const totalCash = food.reduce((acc, curr) => {
    if (curr.typeList === 'Side') {
      return acc + curr.price;
    }
    return acc;
  }, 0);
  
  const totalQuantity = food.reduce((acc, curr) => {
    if (curr.typeList === 'Side') {
      return acc + curr.quantity;
    }
    return acc;
  }, 0);


  return (

    <div className='flex flex-col gap-8 mx-auto w-[90%] py-4'>

    <div><Link to='/dashboard'>
      <button className='bg-blue-500 rounded p-2 text-white text-semibold'>Back</button>
    </Link >
    </div>
    <div><h1 className='text-3xl font-semibold'>Side Items</h1></div>


    <div className="rounded shadow-md flex justify-between items-center mx-auto w-full my-5 p-5 lg:p-10">
  
  <div className="text-center place-items-center">
    <div className="font-medium text-gray-400">Total Cost</div>
    <div className="font-bold text-3xl lg:text-7xl"> R{totalCash}
</div>
  </div>
  
  <div className="text-center place-items-center">
    <div className="font-medium text-gray-400">Total Quantity</div>
    <div className="font-bold text-3xl lg:text-7xl">{totalQuantity}</div>
  </div>
  
  
</div>
 
<div style={{ height: 'auto', width: 'auto' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>

<div className="overflow-hidden">
      <table className="table-auto w-full text-left">
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
