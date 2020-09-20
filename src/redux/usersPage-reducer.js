const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU",
            followed: false,
            fullName: "Ilya",
            status: "blabla",
            location: {city: "Yaroslavl", country: "Russia"}
        },
        {
            id: 2,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU",
            followed: true,
            fullName: "Vitaly",
            status: "Hi!",
            location: {city: "Yaroslavl", country: "Russia"}
        },
        {
            id: 3,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU",
            followed: false,
            fullName: "Sergey",
            status: "Hello!",
            location: {city: "Yaroslavl", country: "Russia"}
        },
        {
            id: 4,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU",
            followed: true,
            fullName: "Svyatoslav",
            status: "123",
            location: {city: "Yaroslavl", country: "Russia"}
        },
        {
            id: 5,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU",
            followed: false,
            fullName: "Alexander",
            status: "456",
            location: {city: "Yaroslavl", country: "Russia"}
        },
        {
            id: 6,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU",
            followed: false,
            fullName: "Dmitry",
            status: "789",
            location: {city: "Yaroslavl", country: "Russia"}
        },
    ]
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        };
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        };
                    }
                    return u;
                })
            };
        default:
            return state;
    }
};

export const followAC = userId => ({
    type: FOLLOW,
    userId
});
export const unfollowAC = userId => ({
    type: UNFOLLOW,
    userId
});

export default usersPageReducer;