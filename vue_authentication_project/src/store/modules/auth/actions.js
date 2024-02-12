export default {
    login() {
    },
    async signup(context, payload) {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCQ2EFHzQhF8xqtXZaYZvxeOaBC2T4Tpc`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            throw  new Error(responseData.message || 'Failed to Authenticate.')
        }
        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.email,
            tokenExpiration:responseData.expiresIn
        });
    }
};