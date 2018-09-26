var initialState = [
    {
        id: 1,
        Date: "20/02/1993",
        Type: "Mobile",
        Description: "Cái con củ cặc",
        Status: "1",
        Price: "100$",
    },
    {
        id: 2,
        Date: "20/02/1994",
        Type: "Game",
        Description: "Cái con củ ấy",
        Status: "2",
        Price: "200$",
    },
    {
        id: 1,
        Date: "20/02/1995",
        Type: "Game",
        Description: "Cái con củ à",
        Status: "3",
        Price: "300$",
    },
];
const categories = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
};
export default categories;