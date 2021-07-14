import {writable, derived} from "svelte/store";

export const products = writable([
    {
        id : 1,
        name : "Chelsea Shoes",
        price : 200,
        shortdesc : "Best Drip in the Market",
        url : "images/chelsea-shoes.png"
      },
      {
        id : 2,
        name : "Kimono",
        price : 50,
        shortdesc : "Classy, Stylish, Dope",
        url : "images/kimono.png"
      },
      {
        id : 3,
        name : "Watch",
        price : 2500,
        shortdesc : "Elegance built in",
        url : "images/rolex.png"
      },
      {
        id : 4,
        name : "Wallet",
        price : 80,
        shortdesc : "Sleek, Trendy, Clean",
        url : "images/wallet.png"
      },
      {
        id : 5,
        name : "Lady Handbags",
        price : 230,
        shortdesc : "Fabulous, Exotic, Classy",
        url : "images/handbag.png"
      },
      {
        id : 6,
        name : "Casual Shirts",
        price : 30,
        shortdesc : "Neat, Sleek, Smart",
        url : "images/shirt.png"
      }
]);

export const cart = writable([]);



/* export const loading =  writable(true);
export const isAuthenticated = writable(false);
export const user =  writable({});
export const popupOpen = writable(false)
export const error = writable();

export const tasks = writable([]);

export const user_tasks = derived([tasks, user], ([$tasks, $user]) => {

    let logged_in_user_tasks = [];

    if($user && $user.email){
        logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email)
    }

    return logged_in_user_tasks;
}); */

