// Unavailable.js

export default function Unavailable() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        padding: "20px",
        transition: "all ease 0.3s",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          color: "#333",
          margin: 0,
        }}
      >
        This page is still currently in the works of development
      </p>
    </div>
  );
}
