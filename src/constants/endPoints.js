export const API_ENDPOINTS = {
    // auth
    signup:'/register',
    send_resetOtp:'/forgotpasword',
    verify_resetOtp:'/verifyotp',
    resetPassword:'/resetpasword',
    countries:'/countries',
    professions:'/professions',
    profile_get:"/profile",
    profile_update:"/profile",
    instantFunding:"/plan?id=&tableName=instant_funding_plans",
    twoPhase:"/plan?id=&tableName=two_phases_plans",
    paymentMethods:"/payment/methods",
    addOns:"/payment/add-ons",
    checkout:"/payment/create-checkout-session",
    updateStatus:"/payment/update-session-status",
    couponCode:"/payment/apply-coupon-code",
    getProfile:"/profile",
    updateProfile:"/profile",
    changePassowrd:"/profile/change-password"

}