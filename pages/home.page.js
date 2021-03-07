class HomePage {

    /**************************  Elements *************************************** */
        get ourServicesSection() {return $("#services-block")}
        get aemTitle() {return $("#services-block").$("h5=Adobe Experience Manager")}
        get aemBlurb() {return $("#services-block").$('img[alt="Adobe Experience Cloud"]')}


    /************************** Actions  *************************************** */

    // no actions defined at the moment but I would add them here


}

module.exports = new HomePage();