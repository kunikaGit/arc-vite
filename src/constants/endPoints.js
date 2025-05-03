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
    twoPhase:"/plan?id=&tableName=two_phase_plans"
}