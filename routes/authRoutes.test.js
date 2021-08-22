const authRoutes = require("./authRoutes")
// @ponicode
describe("authRoutes", () => {
    test("0", () => {
        let callFunction = () => {
            authRoutes("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            authRoutes("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            authRoutes("https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            authRoutes("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            authRoutes("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            authRoutes(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
