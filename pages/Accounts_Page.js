

module.exports={
    accounts:{
        FIRSTNAME:"#wrap > div > div > div.span10.content > div > div > form > input[type=text]:nth-child(5)",
        LASTNAME:"",
        OLDPASSWORD:'input[name="oldPassword"]',
        NEWPASSWORD:'input[name="password"]',
        SUBMITBTN:'button[type="submit"]'
    },
    emailPrefernce:{
        NEWSLETTERS:{
            SUBSCRIBE:'input[id="newsletter_subscribed"]',
            UNSUBSCRIBE:'input[id="newsletter_unsubscribed"]',

        },
        LANGUAGES:'#wrap > div > div > div.span10.content > div > div > form > div > div:nth-child(2) > div:nth-child(5) > select',
        COUNTRY:'#wrap > div > div > div.span10.content > div > div > form > div > div:nth-child(2) > div:nth-child(7) > select',
        NOTIFICATIONS:{
            SUBSCRIBE:'input[id="remarketing_subscribed"]',
            UNSUBSCRIBE:'input[id="remarketing_unsubscribed"]'
        },
        SAVEBTN:'input[type="submit"]'
    },
    LOGOUT:'[href="/en-in/account/logout"]',

}