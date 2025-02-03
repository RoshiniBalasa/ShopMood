import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';
import '../styles/homepage.css';

const HomePage = () => {
    const { auth } = useAuth();

    const categories = [
        { name: "clothes" },
        { name: "accessories"},
        { name: "footwear" }
    ];
    
    const genders = ["men", "women", "boys", "girls"];

    const allProducts = [
        {
            id: 1,
            name: "Summer Floral Dress",
            category: "clothes",
            gender: "women",
            description: "Beautiful floral dress perfect for summer",
            price: "₹2,499.00",
            image: "https://i.pinimg.com/236x/2b/a8/3d/2ba83d39d5393a7ecf4db8d1da92a472.jpg",
        },
        {
            id: 2,
            name: "Classic White Sneakers",
            category: "footwear",
            gender: "men",
            description: "Versatile white sneakers for everyday wear",
            price: "₹3,999.00",
            image: "https://images.meesho.com/images/products/236646983/riujq_512.webp",
        },
        {
            id: 3,
            name: "Boho Statement Necklace",
            category: "accessories",
            gender: "women",
            description: "Handcrafted bohemian style necklace",
            price: "₹1,299.00",
            image: "https://m.media-amazon.com/images/I/61A2Hz6-bvL._AC_UY1100_.jpg",
            
        },
        {
            id: 1,
            name: "Men Loose Fit Shirt",
            category: "clothes",
            gender: "men",
            description: "Men Ribbed Loose Fit Shirt with Flap Pockets",
            price: "₹1,299.00",
            image: "https://assets.ajio.com/medias/sys_master/root/20240716/q251/6696aca91d763220fac86454/-473Wx593H-466747617-pink-MODEL6.jpg",
        },
        {
            id: 1,
            name: "Boys full sleeves T-Shirt",
            category: "clothes",
            gender: "boys",
            description: "Mothercare Boys Full Sleeves T-Shirt Text Print - Navy - Baby Boy Clothing",
            price: "₹1,299.00",
            image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:1355,w:1080)/data/mothercare/24dec2021/ZB533-1.jpg",
        },
        {
            id: 2,
            name: "Girls shoes",
            category: "footwear",
            gender: "girls",
            description: "Cute Pink and White Sneakers Soft Girls Shoes for Kids",
            price: "₹1,299.00",
            image: "https://luckymallskart.com/admin/storage/media/7/Cute-Pink-and-White-Sneakers-Soft-Girls-Shoes-for-Kids.webp",
        },
        
        
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    // Filter products based on search, category, and gender
    const filteredProducts = allProducts.filter(product => 
        (selectedCategory ? product.category === selectedCategory : true) &&
        (selectedGender ? product.gender === selectedGender : true) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <div className="homepage-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="search-box" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <h2>Categories</h2>
                    <div className="filter-group">
                        {categories.map((category) => (
                            <div 
                                key={category.name} 
                                className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                
                                <span>{category.name}</span>
                            </div>
                        ))}
                    </div>

                    <h2>Gender</h2>
                    <div className="filter-group">
                        {genders.map((gender) => (
                            <button 
                                key={gender} 
                                className={`filter-btn ${selectedGender === gender ? 'active' : ''}`}
                                onClick={() => setSelectedGender(gender)}
                            >
                                {gender}
                            </button>
                        ))}
                    </div>

                    <button className="reset-btn" onClick={() => {
                        setSelectedCategory('');
                        setSelectedGender('');
                        setSearchTerm('');
                    }}>
                        Reset Filters
                    </button>
                </aside>

                {/* Product Grid */}
                <section className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="product-footer">
                                        <span className="price">{product.price}</span>
                                        <button className="add-btn">+ Add</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No products found</p>
                    )}
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;
