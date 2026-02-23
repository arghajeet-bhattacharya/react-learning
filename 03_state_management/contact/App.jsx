import React from "react"
import avatar from "./assets/user.png"
import Favorite from './component/Favorite';

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Marcus",
        lastName: "Aurelius",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Favorite isFavorite={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}