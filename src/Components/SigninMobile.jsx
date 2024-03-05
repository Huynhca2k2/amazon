import React, { useState } from 'react';
import EmailMobile from './EmailMobile';
import PassMobile from './PassMobile';
import { Helmet } from 'react-helmet';

export default function SigninMobile() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorPass, setShowErrorPass] = useState(false);
    const [emptyPass, setEmptyPass] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [navigate, setNavigate] = useState(false);

    document.body.className = '';
    document.body.classList.add(
        'a-color-offset-background',
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
        'auth-show-password-enabled',
        'auth-show-password-ready',
        'auth-show-password-engaged',
    );

    return (
        <>
            <Helmet
                htmlAttributes={{
                    class: 'a-touch a-mobile a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-orientation a-gradients a-hires a-transform3d a-touch-scrolling a-ios a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition a-ember awa-browser',
                }}
            >
                <meta
                    name="viewport"
                    content="width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no, shrink-to-fit=no"
                />
                <meta charset="utf-8" />
                <title dir="ltr">Amazon Sign-In</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />

                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/61UhpddG6YL._RC|11iHkiAT2oL.css,01wLsDqViEL.css,11MhAJ3QIgL.css,31JhtlVsImL.css,31i+Ric3zOL.css,01DHz7m6lhL.css_.css?AUIClients/AmazonUI#mobile.us.not-trident"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/01SdjaY0ZsL._RC|31jdWD+JB+L.css,51raMAFHQbL.css_.css?AUIClients/AuthenticationPortalAssets&amp;QmmAyoMU#mobile.194821-T1"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/21D7oXu-KGL.css?AUIClients/CVFAssets#mobile"
                />

                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/41HvKG+LfOL._RC|41-WpIOxHtL.css,51AfUgtFX8L.css_.css?AUIClients/NavMobileAssets-all&amp;EHUJ1ZxG#488657-T2.778344-T1.777424-T1"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/41bhuBzDmyL.css?AUIClients/InternationalCustomerPreferencesNavMobileAssets"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/01+72+wCC9L.css?AUIClients/GlowToasterAssets#mobile"
                />
                <link
                    rel="stylesheet"
                    href="https://images-na.ssl-images-amazon.com/images/I/415bFd7emCL._RC|21eEVwLFzfL.css,31eNyfgmRYL.css_.css?AUIClients/RetailSearchAutocompleteAssets#mobile"
                />
            </Helmet>
            {navigate ? (
                <PassMobile
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
                <EmailMobile
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
