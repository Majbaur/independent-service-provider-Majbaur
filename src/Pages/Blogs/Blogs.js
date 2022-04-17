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

            <h2>Que:2 the difference of authorisation and authentication?</h2>
            <h4>Ans: A semantic element clearly describes its meaning to both the browser and the developer.
                Examples of non-semantic elements: "div" and "span" - Tells nothing about its content.
                Examples of semantic elements: "form", "table", and "article" - Clearly defines its context.</h4>

            {/* ======== Que:3*/}

            <h2>Que:3 Difference between inline-block and inline-block elements?</h2>
            <h4>Ans: inline The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height.
                inline-block It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values.</h4>
        </div>
    );
};

export default Blogs;