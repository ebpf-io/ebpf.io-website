import React, { useEffect } from "react";
import Helmet from "react-helmet";

const Page = () => {
  useEffect(() => {
    setTimeout(
      () => window.location.href = "https://cilium.herokuapp.com/",
      500
    );
  }, []);
  return (
    <div>
      <Helmet title="eBPF / Slack" />
      <h1 className="page-note">Please wait...</h1>
    </div>
  );
}

export default Page;
