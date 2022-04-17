import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='QuesAns'>

            {/* ======== Que:1*/}

            <h2 className='pt-4'>Que:1 What is the difference of  Authorization and Authentication?</h2>
            <br />
            <h4>Ans:  Difference between authentication and authorization:
                <br />
                1.	In the authentication process, the identity of users is checked for providing the access to the system.	While in the authorization process, a person’s or user’s authorities are checked for accessing the resources.
                <br />
                2.	In the authentication process, users or persons are verified.While in this process, users or persons are validated in the authorization.
                <br />
                3.	It is done before the authorization process.but the authorization process is done after the authentication process.
                <br />
                4.	It needs usually the user’s login details.While it needs the user’s privilege or security levels.
                <br />
                5.	Authentication determines whether the person is the user or not.While it determines What permission the user has.</h4>

            {/* ======== Que:2*/}

            <h2>Que:2 Why are you using firebase?</h2>
            <h4>Ans: Data is persisted locally, and even while offline, real-time events continue to fire, giving the end-user a responsive experience. Firebase is Realtime Database that lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code.
                3rd-Party User Authentication. like: STYTCH, Ory, Supabase, Okta, PingIdentity, Authress, OneLogin.</h4>

            {/* ======== Que:3*/}

            <h2>Que:3 What other services does firebase provide other than authentication?</h2>
            <h4>Ans: There are many services which Firebase provides, Most useful of them are:
                <br />
                1. Cloud Firestore
                <br />
                2. Cloud Functions
                <br />
                3. Authentication
                <br />
                4. Hosting
                <br />
                5. Cloud Storage
                <br />
                6. Google Analytics
                <br />
                7. Predictions
                <br />
                8. Cloud Messaging
                <br />
                9. Dynamic Links
                <br />
                10. Remote Config
                <br />
            </h4>
        </div>
    );
};

export default Blogs;