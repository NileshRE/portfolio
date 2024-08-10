import { CertificateCard } from "./certificate-card"

const CertificateCardContainer = ()=>{
    return(
        <div className="certificate-card-container">
             <CertificateCard Imgsrc="/assets/cert1logo.png" Coursename="Namaste React" Edcomp="Namaste Dev" />
             <CertificateCard Imgsrc="/assets/cert2logo.png"Coursename="Google UX Design" Edcomp="Coursera" />
        </div>
    )
}

export default CertificateCardContainer