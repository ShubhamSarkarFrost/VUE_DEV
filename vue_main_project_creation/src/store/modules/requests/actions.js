export default {
    async contactCoach(context,payload){
        const CoachId = payload.coachId;
        const newRequest = {

            userEmail: payload.email,
            message: payload.message
        };

        const response = await fetch(
            `https://vue-main-project-c9113-default-rtdb.firebaseio.com/requests/${CoachId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(newRequest)
            }
        );

        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to Send Request');
            throw error;
        }
        newRequest.id = responseData.name;

        context.commit('addRequest', {
            ...newRequest, coachId: CoachId});
    },

    async loadRequests(context){
        const coachId = context.rootGetters.userId;
        const response = await fetch(
            `https://vue-main-project-c9113-default-rtdb.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to Fetch Requests' );
            throw error;
        }

        const requests = [];
        for (const key in responseData){
            const request = {
                id: key,
                coachId: coachId,
                email: responseData[key].userEmail,
                message: responseData[key].message
            }
            requests.push(request);
        }
        context.commit('setRequests', requests);
    }
}