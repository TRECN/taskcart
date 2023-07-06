import React from 'react';
import todoImage from '../Images/todo.png'; // Import the image for the todo app
import cartImage from '../Images/Shopping.png'; // Import the image for the shopping cart
import movie from '../Images/movie.png'
import '../css/home.css'
const HomePage = () => (
  <div className="home">
    <div className='home-page'>
    <h1 style={{color:'#00539C'}}>Welcome to TASKCART!</h1>
      
      <p>
        Our app is a simple and intuitive tool that helps you stay organized and manage your tasks and shopping lists effectively. Whether you need to keep track of your daily to-dos or plan your shopping, our app has got you covered.
      </p>
      <p>
        With our easy-to-use interface, you can quickly add new tasks to your to-do list and mark them as completed. The app also provides a shopping cart feature where you can add and remove items as you go. Keep track of the total number of tasks and completed tasks in your to-do list, as well as the number of items and subtotal in your shopping cart.
      </p>
      <p>
        Additionally, our app integrates with an API of your choice, allowing you to fetch and display relevant data such as weather updates, news articles, or movie recommendations. Explore the different pages of our app, including the Home page, About page for more information, and Contact page to get in touch with us.
      </p>
      <p>
        Start using our app today and experience a seamless and organized way to manage your tasks and shopping!
      </p>
    </div>
    {/* all the main components are shown in the card */}
    <div className="app-container">
      <div className="app-card">
        <img src={todoImage} alt="Todo App" />
        <h2>Todo App</h2>
        <p>Manage your tasks and stay organized.</p>
        <a href="/todo">Go to Todo App</a>
      </div>
      <div className="app-card">
        <img src={cartImage} alt="Shopping Cart" />
        <h2>Shopping Cart</h2>
        <p>Shop for your favorite items.</p>
        <a href="/cart">Go to Shopping Cart</a>
      </div>
      <div className="app-card">
        <img src={movie} alt="movie" />
        <h2>Movies</h2>
        <p>Search for your favorite Movies.</p>
        <a href="/movies">Go to Movies</a>
      </div>
    </div>
  </div>
);

export default HomePage;