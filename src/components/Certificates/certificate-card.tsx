
interface CertCardProps{
    Coursename:string;
    Edcomp:string;
    Imgsrc:string;
}

export const CertificateCard = ({Coursename, Edcomp, Imgsrc}:CertCardProps)=>{
    return(
        <div className="certificate-card">
            <img src={Imgsrc} />
            <p>{Coursename}
                <span>{Edcomp}</span>
            </p>
        </div>
    )
}