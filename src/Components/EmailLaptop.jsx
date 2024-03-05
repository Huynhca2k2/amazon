import React, { useState } from 'react';

export default function EmailLaptop({
    email,
    setEmail,
    showErrorEmail,
    setShowErrorEmail,
    emptyEmail,
    setEmptyEmail,
    setNavigate,
}) {
    const [toggleNeed, setToggleNeed] = useState(false);

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleContinueClick = (event) => {
        event.preventDefault();
        if (email.trim() === '') {
            setEmptyEmail(true);
            setShowErrorEmail(false);
        } else if (email.includes('@')) {
            setShowErrorEmail(false);
            setEmptyEmail(false);
            setNavigate(true);
        } else {
            setShowErrorEmail(true);
            setEmptyEmail(false);
        }
    };

    const handleToggleNeed = (event) => {
        event.preventDefault();
        setToggleNeed(!toggleNeed);
    };

    return (
        <div id="a-page">
            <div className="a-section a-padding-medium auth-workflow">
                <div className="a-section a-spacing-none auth-navbar">
                    <div className="a-section a-spacing-medium a-text-center">
                        <a
                            className="a-link-nav-icon"
                            tabIndex="-1"
                            href="/ref=ap_frn_logo"
                        >
                            <i
                                className="a-icon a-icon-logo"
                                role="img"
                                aria-label="Amazon"
                            ></i>
                        </a>
                    </div>
                </div>

                <div id="authportal-center-section" className="a-section">
                    <div id="authportal-main-section" className="a-section">
                        <div className="a-section a-spacing-base auth-pagelet-container">
                            <div className="a-section">
                                {showErrorEmail && (
                                    <div
                                        id="auth-error-message-box"
                                        className="a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base"
                                        role="alert"
                                    >
                                        <div className="a-box-inner a-alert-container">
                                            <h4 className="a-alert-heading">
                                                There was a problem
                                            </h4>
                                            <i className="a-icon a-icon-alert"></i>
                                            <div className="a-alert-content">
                                                <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none">
                                                    <li>
                                                        <span className="a-list-item">
                                                            We cannot find an
                                                            account with that
                                                            email address
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="a-section auth-pagelet-container">
                            <div className="a-section a-spacing-base">
                                <div className="a-section">
                                    <form
                                        name="signIn"
                                        method="post"
                                        noValidate=""
                                        action="https://www.amazon.com/ap/signin"
                                        className="auth-validate-form auth-real-time-validation a-spacing-none"
                                        data-fwcim-id="VtCaUsW6"
                                    >
                                        <div className="a-section">
                                            <div className="a-box">
                                                <div className="a-box-inner a-padding-extra-large">
                                                    <h1 className="a-spacing-small">
                                                        Sign in
                                                    </h1>

                                                    <div className="a-row a-spacing-base">
                                                        <label
                                                            htmlFor="ap_email"
                                                            className="a-form-label"
                                                        >
                                                            Email or mobile
                                                            phone number
                                                        </label>

                                                        <input
                                                            type="email"
                                                            maxLength="128"
                                                            value={email}
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            id="ap_email"
                                                            name="email"
                                                            tabIndex="1"
                                                            className="a-input-text a-span12 auth-required-field"
                                                        />

                                                        {emptyEmail && (
                                                            <div
                                                                id="auth-email-missing-alert"
                                                                className="a-box a-alert-inline a-alert-inline-error a-spacing-top-mini"
                                                                role="alert"
                                                            >
                                                                <div className="a-box-inner a-alert-container">
                                                                    <i className="a-icon a-icon-alert"></i>
                                                                    <div className="a-alert-content">
                                                                        Enter
                                                                        your
                                                                        email or
                                                                        mobile
                                                                        phone
                                                                        number
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <input
                                                        type="hidden"
                                                        name="create"
                                                        value="0"
                                                    />

                                                    <div className="a-section">
                                                        <span
                                                            id="continue"
                                                            className="a-button a-button-span12 a-button-primary"
                                                            onClick={
                                                                handleContinueClick
                                                            }
                                                        >
                                                            <span className="a-button-inner">
                                                                <input
                                                                    id="continue"
                                                                    tabIndex="5"
                                                                    className="a-button-input"
                                                                    type="submit"
                                                                    aria-labelledby="continue-announce"
                                                                />
                                                                <span
                                                                    id="continue-announce"
                                                                    className="a-button-text"
                                                                    aria-hidden="true"
                                                                >
                                                                    Continue
                                                                </span>
                                                            </span>
                                                        </span>

                                                        <div
                                                            id="legalTextRow"
                                                            className="a-row a-spacing-top-medium a-size-small"
                                                        >
                                                            By continuing, you
                                                            agree to Amazon's
                                                            <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=508088">
                                                                {' '}
                                                                Conditions of
                                                                Use{' '}
                                                            </a>
                                                            and
                                                            <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=468496">
                                                                {' '}
                                                                Privacy Notice
                                                            </a>
                                                            .
                                                        </div>
                                                    </div>

                                                    <div className="a-section">
                                                        <div className="a-row a-expander-container a-expander-inline-container">
                                                            <a
                                                                data-csa-c-func-deps="aui-da-a-expander-toggle"
                                                                data-csa-c-type="widget"
                                                                data-csa-interaction-events="click"
                                                                aria-expanded="false"
                                                                role="button"
                                                                href="/ap/siginin"
                                                                onClick={
                                                                    handleToggleNeed
                                                                }
                                                                data-action="a-expander-toggle"
                                                                className="a-expander-header a-declarative a-expander-inline-header a-link-expander"
                                                                data-a-expander-toggle='{"allowLinkDefault":true, "expand_prompt":"", "collapse_prompt":""}'
                                                                data-csa-c-id="1qozkg-ymwavz-vykefn-u6lmwr"
                                                            >
                                                                {toggleNeed ? (
                                                                    <i class="a-icon a-icon-collapse"></i>
                                                                ) : (
                                                                    <i className="a-icon a-icon-expand"></i>
                                                                )}

                                                                <span className="a-expander-prompt">
                                                                    Need help?
                                                                </span>
                                                            </a>
                                                            {toggleNeed && (
                                                                <ul className="a-unordered-list a-nostyle a-vertical">
                                                                    <li>
                                                                        <span className="a-list-item">
                                                                            <div
                                                                                aria-expanded="false"
                                                                                className="a-expander-content a-expander-inline-content a-expander-inner"
                                                                            >
                                                                                <a
                                                                                    id="auth-fpp-link-bottom"
                                                                                    className="a-link-normal"
                                                                                    href="/"
                                                                                >
                                                                                    Forgot
                                                                                    your
                                                                                    password?
                                                                                </a>
                                                                            </div>
                                                                        </span>
                                                                    </li>

                                                                    <li>
                                                                        <span className="a-list-item">
                                                                            <div
                                                                                aria-expanded="false"
                                                                                className="a-expander-content a-expander-inline-content a-expander-inner"
                                                                            >
                                                                                <a
                                                                                    id="ap-other-signin-issues-link"
                                                                                    className="a-link-normal"
                                                                                    href="/gp/help/customer/account-issues/ref=ap_login_with_otp_claim_collection?ie=UTF8"
                                                                                >
                                                                                    Other
                                                                                    issues
                                                                                    with
                                                                                    Sign-In
                                                                                </a>
                                                                            </div>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div
                                                        id="ab-signin-link-section"
                                                        className="a-section"
                                                    >
                                                        <hr
                                                            aria-hidden="true"
                                                            className="a-divider-normal"
                                                        />
                                                        <div className="a-section a-spacing-micro">
                                                            <span className="a-text-bold">
                                                                Buying for work?
                                                            </span>
                                                        </div>

                                                        <a
                                                            id="ab-sign-in-ingress-link"
                                                            className="a-link-normal"
                                                            href="https://www.amazon.com/business/register/welcome?ref_=ab_reg_signin"
                                                        >
                                                            <span>
                                                                {' '}
                                                                Shop on Amazon
                                                                Business{' '}
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            type="hidden"
                                            name="aaToken"
                                            value='{"uniqueValidationId":"e9d11a5b-38ae-41d3-bd2a-72522a87ae39"}'
                                        />
                                    </form>
                                </div>

                                <div className="a-divider a-divider-break">
                                    <h5 aria-level="5">New to Amazon?</h5>
                                </div>
                                <span
                                    id="auth-create-account-link"
                                    className="a-button a-button-span12 a-button-base"
                                >
                                    <span className="a-button-inner">
                                        <a
                                            id="createAccountSubmit"
                                            href="https://www.amazon.com/ap/register?showRememberMe=true&amp;openid.pape.max_auth_age=0&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;signInRedirectToFPPThreshold=5&amp;pageId=usflex&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&amp;prevRID=JN96JRJ863781QQY9C82&amp;openid.assoc_handle=usflex&amp;openid.mode=checkid_setup&amp;prepopulatedLoginId=eyJjaXBoZXIiOiJQK2VHTW8xR1I0bDVEVzVUTmQrVXRRPT0iLCJJViI6IjhUSTN2bHNNZU9DNDNnd0tWNFFVL0E9PSIsInZlcnNpb24iOjF9&amp;failedSignInCount=0&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;timestamp=1709569482000"
                                            className="a-button-text"
                                        >
                                            Create your Amazon account
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="right-2"></div>

                <div className="a-section a-spacing-top-extra-large auth-footer">
                    <div className="a-divider a-divider-section">
                        <div className="a-divider-inner"></div>
                    </div>

                    <div className="a-section a-spacing-small a-text-center a-size-mini">
                        <span className="auth-footer-seperator"></span>

                        <a
                            className="a-link-normal"
                            target="_blank"
                            rel="noopener"
                            href="/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&amp;nodeId=508088"
                        >
                            Conditions of Use
                        </a>
                        <span className="auth-footer-seperator"></span>

                        <a
                            className="a-link-normal"
                            target="_blank"
                            rel="noopener"
                            href="/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&amp;nodeId=468496"
                        >
                            Privacy Notice
                        </a>
                        <span className="auth-footer-seperator"></span>

                        <a
                            className="a-link-normal"
                            target="_blank"
                            rel="noopener"
                            href="/help"
                        >
                            Help
                        </a>
                        <span className="auth-footer-seperator"></span>
                    </div>

                    <div className="a-section a-spacing-none a-text-center">
                        <span className="a-size-mini a-color-secondary">
                            © 1996-2024, Amazon.com, Inc. or its affiliates
                        </span>
                    </div>
                </div>
            </div>

            <div
                id="auth-external-javascript"
                className="auth-external-javascript"
                data-external-javascripts=""
            ></div>
        </div>
    );
}
