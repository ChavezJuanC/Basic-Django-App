import React from "react";
import Form from "../components/Form";

const LogIn = () => {
    return <Form route="/api/token/" method="login" />;
};

export default LogIn;
