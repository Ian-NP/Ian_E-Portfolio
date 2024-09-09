import React from 'react';

export default function UnsupportedMobileView({ message }: { message: string }) {
  const containerStyle: React.CSSProperties = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: "18px",
    textAlign: "center" as "center", // Explicitly specify the textAlign value
  };

  return (
    <div style={containerStyle}>
      <p>{message}</p>
    </div>
  );
}
