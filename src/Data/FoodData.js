export function formatPrice(price){
    return price.toLocaleString('en-us', {
        style: 'currency',
        currency: 'USD'
    })
}

export const foodItems = [
    {
        name: 'Nasi Lemak Beef, anchovies, boiled egg, peanut',
        Details: 'Beef, anchovies, boiled egg, peanut',
        img:'/img/nasi-lemak.jpg',
        section: "Entrees",
        price: 12.75
    },

    {   
        name: 'Chicken Noodle Soup',
        img: '/img/chicken-noodle-soup.jpg',
        section: "Entrees",
        price: 10.50
        
    },

    {
        name: 'Chicken Satay',
        img:'/img/chicken-satay.jpg',
        section: "Sides",
        price: 9.75
        
    },

    {
        name: 'Curry Chicken',
        img:'/img/curry-chicken.jpg',
        section: "Entrees",
        price: 8.90
        
    },

    {
        name: 'Curry Lamb',
        img:'/img/curry-lamb.jpg',
        section: "Entrees",
        price: 8.90
        
    },

    {
        name: 'Curry Laksa',
        img:'/img/curry-laksa.jpg',
        section: "Entrees",
        price: 8.90
        
    },

    {
        name: 'Fish Cooked in Bamboo',
        img:'/img/fish-cooked-in-bamboo.jpg',
        section: "Entrees",
        price: 20.35
        
    },

    {
        name: 'Kolo Mee',
        img:'/img/kolo-mee.jpg',
        section: "Entrees",
        price: 6.99
        
    },

    {
        name: 'Malaysian Coconut Butter Prawns',
        img:'/img/malaysian-coconut-butter-prawns.jpg',
        section: "Entrees",
        price: 15.85
        
    },

    {
        name: 'Spicy Noodle',
        img:'/img/spicy-noodle.jpg',
        section: "Entrees",
        price: 8.90
        
    },

    {
        name: 'Peanut Pocket',
        img:'/img/Peanut-Pocket.jpg',
        section: "Dessert",
        price: 4.75
        
    },

    {
        name: 'Mee Goreng',
        img:'/img/mee-goreng.jpg',
        section: "Entrees",
        price: 12.99
        
    },

    {
        name: 'Fried Spicy Noodles',
        img:'/img/fried-spicy-noodle.jpg',
        section: "Entrees",
        price: 10.75
        
    },

    {
        name: 'Fried-Rice-Noodles',
        img:'/img/fried-rice-noodle.jpg',
        section: "Entrees",
        price: 10.75
        
    },

    {
        name: 'Mee Goreng',
        img:'/img/mee-goreng.jpg',
        section: "Entrees",
        price: 10.75
        
    },
        
    {
        name: 'Hainan Chicken Rice',
        img:'/img/hainan-chicken-rice.jpg',
        section: "Entrees",
        price: 11.75
        
    },

    {
        name: 'Chili Crab',
        img:'/img/chili-crab.jpg',
        section: "Entrees",
        price: 32.99
        
    },

    {
        name: 'Penang Fried Rice Noodle',
        img:'/img/penang-fried-rice-noodle.jpg',
        section: "Entrees",
        price: 12.75
        
    },

    {
        name: 'Soy Bean Drink',
        img:'/img/soy-bean-drink.jpg',
        section: "Beverages",
        price: 2.75
        
    },

    {
        name: 'Soy Bean Drink',
        img:'/img/soy-bean-drink.jpg',
        section: "Beverages",
        price: 2.75
        
    },

    {
        name: 'Soy Bean Drink',
        img:'/img/soy-bean-drink.jpg',
        section: "Beverages",
        price: 2.75
        
    }

];

export const foods = foodItems.reduce((res, food ) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});

