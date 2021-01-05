import React from 'react';
import { FelixLogo } from './logo/felix';
import { GitHubLogo } from './logo/github';
import { InstagramLogo } from './logo/instagram';
import { LinkedInLogo } from './logo/linkedin';
import { MailLogo } from './logo/mail';
import './simple-styles.scss';

export const Simple = () => {


    return (
        <main>
            <div className="container container--left">
                <img className="profile__picture" src="/content/images/felix-3.png" alt="Felix Saaro" />
                <h1>— Felix Saaro is a debater, software developer, and brewer who is interested in technology & food.</h1>
            </div>
            <div className="container container--right">
                <div className="inner">
                    <a className="link link--external" href="https://github.com/MrF3lix" target="_blank" rel="noopener noreferrer">
                        <GitHubLogo />
                        Github
                    </a>
                    <a className="link link--external" href="https://www.linkedin.com/in/felix-saaro/" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogo />
                        LinkedIn
                    </a>
                    <a className="link link--external" href="https://www.instagram.com/felixsaaro/" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo />
                        Instagram
                    </a>
                    {/* <a className="link link--external" href="/content/cv/CV_Felix-Saaro_v3.0.0.pdf" target="_blank" rel="noopener noreferrer">
                        <FelixLogo />
                        View my CV
                    </a> */}
                    <a className="link link--external" href="https://read.cv/felixsaaro" target="_blank" rel="noopener noreferrer">
                        <FelixLogo />
                        View my CV
                    </a>
                    <a className="link link--external" href="mailto:felix@saaro.ch">
                        <MailLogo />
                        Contact me
                    </a>
                </div>
            </div>
        </main>
    );
};