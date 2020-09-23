import Layout from "../layouts";
import React from "react";

const SubmitProposal = () => (
  <Layout>
    <div className="page-wrapper" style={{textAlign: 'center'}}>
      <img className="main-logo" src={require("../assets/logo-big.png")} />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf0lb-UitAnoSjjZh3tSwAH-Li2XBr_ENFbnFm_nSHc818uSA/viewform?embedded=true"
        width="100%"
        height="1590"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >Loading…</iframe>
    </div>
  </Layout>
);

export default SubmitProposal;
