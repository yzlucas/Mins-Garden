import React, { useState } from 'react';

function Admin() {
  const [groupOrder, setGroupOrder] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    pickupTime: '',
    pickupLocation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 这里添加与后端的交互逻辑
    console.log('提交的团购订单:', groupOrder);
    alert('团购订单创建成功！');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupOrder(prev => ({
      ...prev,
      [name]: value
    }));
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
      <h1 style={{
        fontSize: '28px',
        color: '#2c3e50',
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: '600'
      }}>Admin Page</h1>
      <div style={{ marginTop: '20px' }}>
        <h2 style={{
          fontSize: '22px',
          color: '#34495e',
          marginBottom: '25px',
          fontWeight: '500'
        }}>Create Order</h2>
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
            }}>Group Order Name：</label>
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
            }}>Description：</label>
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
            }}>Start Date：</label>
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
            }}>End Date：</label>
            <input
              type="datetime-local"
              name="endDate"
              value={groupOrder.endDate}
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
            }}>Pickup Time：</label>
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
            }}>Pickup Location：</label>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;   