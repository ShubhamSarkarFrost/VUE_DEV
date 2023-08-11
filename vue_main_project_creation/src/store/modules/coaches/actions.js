export default {
   async registerCoach(context, data) {
        const userId = context.rootGetters.userId
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await fetch(`https://vue-main-project-c9113-default-rtdb.firebaseio.com/${userId}/coaches.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        const responseData = await response.json();
        console.log(responseData)
        if(!response.ok){
            // error...
        }

        context.commit('registerCoach', {
            ...coachData,id:userId
        });
    }
};