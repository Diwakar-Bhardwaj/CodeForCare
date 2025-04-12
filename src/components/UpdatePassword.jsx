import React, { useState } from "react";

const UpdatePassword = () => {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/update-password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, oldPassword, newPassword }),
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage("Something went wrong.");
        }
    };

    return (
        <div>
            <h2>Update Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Update Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdatePassword;
