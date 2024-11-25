import React from "react";
import { BiTrash } from "react-icons/bi";

function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Replace Chakra's Avatar component with an img tag */}
          <img
            src="https://avatar.iran.liara.run/public"
            alt={user.name}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <div>
            {/* Replace Chakra's Heading component with h3 */}
            <h3 style={{ fontSize: "1rem", margin: 0 }}>{user.name}</h3>
            {/* Replace Chakra's Text component with p */}
            <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
              {user.role}
            </p>
          </div>
        </div>

        <div>
          {/* Replace Chakra's IconButton component with a button */}
          <button
            style={{
              background: "none",
              border: "none",
              color: "red",
              cursor: "pointer",
              padding: 0,
              fontSize: "16px",
            }}
            aria-label="see menu"
          >
            <BiTrash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
