const orders = [
    {
        "orderId" : 1,
        "userId": 1,
        "username": "Mohamed Izzath",
        "foodItems": [{
            "_id": 3,
            "Name": "Burger",
            "Category": "Breakfast",
            "ImageURL": "https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "Price": 1000,
            },
            {
            "_id": 4,
            "Name": "Toast",
            "Category": "Breakfast",
            "ImageURL": "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "Price": 1250,
            }],
        "drinks": [{
            "_id": 2,
            "Name": "Coffee",
            "Category": "Coffee",
            "ImageURL": "https://images.unsplash.com/photo-1632789395770-20e6f63be806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=539&q=80",
            "Price": 250,
        }]
    },
    {
        "orderId" : 2,
        "userId": 2,
        "username": "Naresh Vijay",
        "fooditems": [{
            "_id": 1,
            "Name": "Seafood Rice",
            "Category": "Lunch",
            "ImageURL": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "Price": 1500,
            }],
        "drinks": [{
            "_id": 2,
            "Name": "Coffee",
            "Category": "Coffee",
            "ImageURL": "https://images.unsplash.com/photo-1632789395770-20e6f63be806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=539&q=80",
            "Price": 250,
            }]
    },
    {
        "orderId" : 3,
        "userId": 4,
        "username": "Akila Dharmadasa",
        "fooditems": [{
            "_id": 4,
            "Name": "Toast",
            "Category": "Breakfast",
            "ImageURL": "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "Price": 1250,
            }],
        "drinks": [{
            "_id": 3,
            "Name": "Lemonade",
            "Category": "Fruit-Juice",
            "ImageURL": "https://images.unsplash.com/photo-1498772776855-2248a3e740f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80",
            "Price": 200,
            }]
    }
];

export default orders;