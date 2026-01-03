import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <Contact
                profileImage='./assets/mr-whiskerson.png'
                fullName='Mr. Anderson'
                phoneNumber='2123232323'
                emailId='sdsd@sdsd.od'
            />

            <Contact
                profileImage='./assets/felix.png'
                fullName='Mr. Felix'
                phoneNumber='21232323231212'
                emailId='sdsd@sdsd.12ws'
            />

            <Contact
                profileImage='./assets/fluffykins.png'
                fullName='Mr. Fluffykins'
                phoneNumber='21232323231213'
                emailId='sdsd@sdsd.23'
            />

            <Contact
                profileImage='./assets/pumpkin.png'
                fullName='Mr. Pumpkin'
                phoneNumber='21232323231214'
                emailId='sdsd@sdsd.34'
            />
        </>
    )
}