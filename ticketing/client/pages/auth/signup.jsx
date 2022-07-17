import { useState } from "react";
import Router from "next/router";

import useRequest from "../../hooks/use-request";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { doRequest, errors } = useRequest({
        url: "/api/users/signup",
        method: "post",
        body: {
            email,
            password,
        },
        onSuccess: () => Router.push("/"),
    });

    // Singup form submit handler
    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            {errors}
            <div className="form-group">
                <label>Email Address</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Sign Up</button>
        </form>
    );
};

export default Signup;
