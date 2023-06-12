import React from 'react';
import { Link as Anchor } from 'react-router-dom';
const Orders = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Barra de al lado */}
      <div className="w-64 bg-white border-r">
   
        <div className="h-20 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul>
          <Anchor to="/admin"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Dashboard
            </li>
            </Anchor>
            <Anchor to="/admin/products"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Products
            </li>
            </Anchor>
            <Anchor to="/admin/order"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Orders
            </li>
            </Anchor>
            <Anchor to="/admin/users"> 
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Users
            </li>
            </Anchor>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Orders</h2>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Orders;