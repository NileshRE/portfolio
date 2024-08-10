import { Line } from "../line";
import CertificateCardContainer from "./certificate-card-container";

const Certificate = () => {
  return (
    <div id="certificates">
      <div className="sub-heading">
        <h2>
          <span>#</span>certificates
        </h2>
        <Line />
      </div>
      <CertificateCardContainer />
     
    </div>
  );
};

export default Certificate;
