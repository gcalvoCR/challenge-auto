const homePage = require('../../pages/home.page')
constants = require('../../data/constants')

describe('Hoodo Homepage validation', () => {

    it('should redirect to https', ()=>{

        browser.url(constants.unsecure_url)
        expect(browser).toHaveUrlContaining(constants.secure_url)

    })

    it('should have an "Our Services" section with an AEM blurb', ()=>{

        browser.url('/')
        expect(homePage.ourServicesSection).toBeDisplayed()
        expect(homePage.aemBlurb).toBeDisplayed()
        expect(homePage.aemTitle).toBeDisplayed()

    })

})

