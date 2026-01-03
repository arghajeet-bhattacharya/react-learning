export default function Contact(props) {
    const { profileImage: directProfile, fullName, phoneNumber, emailId } = props;
    return (
        <article className="contact-card">
            <img
                src={directProfile}
                alt="Photo of {{fullName}}"
            />
            <h3>{fullName}</h3>
            <div className="info-group">
                <img
                    src="./assets/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phoneNumber}</p>
            </div>
            <div className="info-group">
                <img
                    src="./assets/mail-icon.png"
                    alt="mail icon"
                />
                <p>{emailId}</p>
            </div>
        </article>
    )
}