import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const CreateUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        style={{
          backgroundColor: "#3182ce",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <FaUserPlus size={20} />
        Add User
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "400px",
              padding: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                color: "black",
              }}
            >
              <h2 style={{ margin: 0 }}>My New BFF!</h2>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div>
                <label
                  htmlFor="firstName"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "black",
                  }}
                >
                  Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "black",
                  }}
                >
                  Role
                </label>
                <input
                  id="role"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "black",
                  }}
                >
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "black",
                  }}
                >
                  Gender
                </label>
                <select
                  id="gender"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: "#3182ce",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: "#3182ce",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateUser;
