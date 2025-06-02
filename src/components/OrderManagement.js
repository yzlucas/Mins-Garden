import React, { useState, useEffect } from 'react';

function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // TODO: backend connection
    // use mock data temporarily
    const mockOrders = [
      {
        id: 1,
        title: 'Test Order 1',
        description: 'This is a test order',
        startDate: '2024-03-20T10:00',
        endDate: '2024-03-21T10:00',
        pickupTime: '2024-03-21T15:00',
        pickupLocation: 'Test Location 1',
        status: 'active'
      },
      {
        id: 2,
        title: 'Test Order 2',
        description: 'This is another test order',
        startDate: '2024-03-22T10:00',
        endDate: '2024-03-23T10:00',
        pickupTime: '2024-03-23T15:00',
        pickupLocation: 'Test Location 2',
        status: 'cancelled'
      }
    ];
    setOrders(mockOrders);
  }, []);

  const handleCancelOrder = (orderId) => {
    // TODO: backend connection
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: 'cancelled' } : order
    ));
  };

  const handleEditOrder = (orderId) => {
    // TODO: implement edit order
    console.log('Edit order:', orderId);
  };

  return (
    <div className="order-management" style={{ 
      padding: '40px', 
      maxWidth: '1200px', 
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
      }}>Order Management</h1>

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

      <div style={{
        overflowX: 'auto'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #e2e8f0'
            }}>
              <th style={{ padding: '12px', textAlign: 'left', color: '#1a202c' }}>Order Name</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#1a202c' }}>Start Time</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#1a202c' }}>End Time</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#1a202c' }}>Pickup Time</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#1a202c' }}>Pickup Location</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#1a202c' }}>Status</th>
              <th style={{ padding: '12px', textAlign: 'left', color: '#1a202c' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{
                borderBottom: '1px solid #e2e8f0'
              }}>
                <td style={{ padding: '12px', color: '#2d3748' }}>{order.title}</td>
                <td style={{ padding: '12px', color: '#2d3748' }}>{new Date(order.startDate).toLocaleString()}</td>
                <td style={{ padding: '12px', color: '#2d3748' }}>{new Date(order.endDate).toLocaleString()}</td>
                <td style={{ padding: '12px', color: '#2d3748' }}>{new Date(order.pickupTime).toLocaleString()}</td>
                <td style={{ padding: '12px', color: '#2d3748' }}>{order.pickupLocation}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: order.status === 'active' ? '#dcfce7' : '#fee2e2',
                    color: order.status === 'active' ? '#166534' : '#991b1b'
                  }}>
                    {order.status === 'active' ? 'processing' : 'cancelled'}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  <button
                    onClick={() => handleEditOrder(order.id)}
                    style={{
                      padding: '6px 12px',
                      marginRight: '8px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Edit
                  </button>
                  {order.status === 'active' && (
                    <button
                      onClick={() => handleCancelOrder(order.id)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement; 