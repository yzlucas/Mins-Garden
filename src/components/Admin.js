import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [groupOrder, setGroupOrder] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    pickupTime: '',
    pickupLocation: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // verify date
    if (new Date(groupOrder.endDate) <= new Date(groupOrder.startDate)) {
      setError('End date must be later than start date');
      return;
    }

    // TODO: backend connection
    console.log('submitted group order:', groupOrder);
    alert('Group order created successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupOrder(prev => ({
      ...prev,
      [name]: value
    }));

    if (error) {
      setError('');
    }

    // if modifying start date, and end date is earlier than new start date, update end date
    if (name === 'startDate' && groupOrder.endDate && new Date(value) >= new Date(groupOrder.endDate)) {
      setGroupOrder(prev => ({
        ...prev,
        endDate: value
      }));
    }
  };

  return (
    <div className="admin-page" style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: '28px',
          color: '#2c3e50',
          fontWeight: '600'
        }}>添加订单</h1>
        <Link
          to="/admin/orders"
          style={{
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          管理订单
        </Link>
      </div>
      <div style={{ marginTop: '20px' }}>
        {error && (
          <div style={{
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px',
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '8px'
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500',
              fontSize: '14px'
            }}>订单名称：</label>
            <input
              type="text"
              name="title"
              value={groupOrder.title}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                fontSize: '14px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500',
              fontSize: '14px'
            }}>描述：</label>
            <textarea
              name="description"
              value={groupOrder.description}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '12px',
                minHeight: '120px',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                fontSize: '14px',
                resize: 'vertical',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500',
              fontSize: '14px'
            }}>开始时间：</label>
            <input
              type="datetime-local"
              name="startDate"
              value={groupOrder.startDate}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                fontSize: '14px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500',
              fontSize: '14px'
            }}>结束时间：</label>
            <input
              type="datetime-local"
              name="endDate"
              value={groupOrder.endDate}
              onChange={handleChange}
              required
              min={groupOrder.startDate}
              style={{ 
                width: '100%', 
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                fontSize: '14px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500',
              fontSize: '14px'
            }}>取货时间：</label>
            <input
              type="datetime-local"
              name="pickupTime"
              value={groupOrder.pickupTime}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                fontSize: '14px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '500',
              fontSize: '14px'
            }}>取货地点：</label>
            <input
              type="text"
              name="pickupLocation"
              value={groupOrder.pickupLocation}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                fontSize: '14px',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              placeholder=""
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'background-color 0.3s ease',
              marginTop: '10px',
              ':hover': {
                backgroundColor: '#2980b9'
              }
            }}
          >
            提交
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;   