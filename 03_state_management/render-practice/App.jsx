import { useState } from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = useState([])

    const displayMessage = () => {
        if (unreadMessages.length === 0) {
            return <p>you are all caught up</p>
        } else {
            return <p>you have {unreadMessages.length} {unreadMessages.length === 1 ? 'message' : 'messages'}</p>
        }
    }

    return (
        <div>
            {displayMessage()}
        </div>
    )
}