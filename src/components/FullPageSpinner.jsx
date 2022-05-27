import React from 'react';

export default function FullPageSpinner() {
  return (
    <div
      style={{
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        height: '10vh',
        width:"7%",
        position: 'fixed',
        top: "40%",
        left: "50%",
        right: 0,
        background: '#fff',
        justifyContent:"center"
      }}
      className="shadow-lg p-3 mb-5 bg-body rounded"
    >
      <div className="spinner-border text-dark position-absolute">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
