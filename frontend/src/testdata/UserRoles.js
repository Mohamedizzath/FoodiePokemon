const userRoles = [
    {
        "userId": 1,
        "username": "Mohamed Izzath",
        "password": "izzath@123",
    },
    {
        "userId": 2,
        "username": "Naresh Vijay",
        "password": "naresh@123",
    },
    {
        "userId": 3,
        "username": "Mohamed Ashfak",
        "password": "ashfak@123",
    },
    {
        "userId": 4,
        "username": "Akila Dharmadasa",
        "password": "akila@123",
    },
    {
        "userId": 5,
        "username": "Rushda Rasheed",
        "password": "rushda@123",
    },
];

export default userRoles;

const orders = [
    {
        user: {
            "userId": 3,
            "username": "Mohamed Ashfak",
            "password": "ashfak@123",
        },
        foods: [
            {
                "_id": 1,
                "Name": "Seafood Rice",
                "Category": "Lunch",
                "ImageURL": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                "Price": 1500,
            },
            {
                "_id": 2,
                "Name": "Pizza",
                "Category": "Lunch",
                "ImageURL": "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                "Price": 2000,
            },
        ]
    }
];