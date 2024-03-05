import ContentLaptop from './Components/ContentLaptop';
import ContentMobile from './Components/ContentMobile';
import { Helmet } from 'react-helmet';
import { scriptMobile, scriptLaptop } from './ScriptContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninLaptop from './Components/SigninLaptop';
import SigninMobile from './Components/SigninMobile';

function App() {
    const windowWidth = window.innerWidth;
    return (
        <BrowserRouter>
            <Routes>
                {windowWidth < 640 ? (
                    <>
                        <Route path="/ap/signin" element={<SigninMobile />} />
                        <Route
                            path="/content"
                            element={
                                <>
                                    <Helmet>
                                        <meta
                                            name="viewport"
                                            content="width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no, shrink-to-fit=no"
                                        />
                                        <meta charset="utf-8" />
                                        <title>
                                            Account on hold temporarily
                                        </title>
                                        <meta
                                            name="viewport"
                                            content="width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no, shrink-to-fit=no"
                                        />
                                        <meta
                                            http-equiv="content-type"
                                            content="text/html; charset=utf-8"
                                        />
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
                                    <ContentMobile />
                                </>
                            }
                        />
                    </>
                ) : (
                    <>
                        <Route path="/ap/signin" element={<SigninLaptop />} />
                        <Route
                            path="/content"
                            element={
                                <>
                                    <Helmet>
                                        <meta charset="utf-8" />
                                        <title>
                                            Account on hold temporarily
                                        </title>
                                        <meta
                                            http-equiv="content-type"
                                            content="text/html; charset=utf-8"
                                        />
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
                                    <ContentLaptop />
                                </>
                            }
                        />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
