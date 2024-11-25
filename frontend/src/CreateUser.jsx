import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { BASE_URL } from "./App";
import { useToastStyles } from "@chakra-ui/react";

const CreateUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create user");
      }

      const data = await res.json();
      console.log("User created:", data);
      alert("User created successfully!");
      setIsOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Error creating user:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false); // Set loading state to false after request completes
    }
  };

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
            <form onSubmit={handleSubmit}>
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
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
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
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
                    }
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
                    value={inputs.description}
                    onChange={(e) =>
                      setInputs({ ...inputs, description: e.target.value })
                    }
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
                    value={inputs.gender}
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
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
                  type="button"
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
                  type="submit"
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
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateUser;
