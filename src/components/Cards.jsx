import React, { useEffect } from "react";
import cardImage1 from "./images/accent_chairs.jpeg";
import cardImage2 from "./images/beds.jpeg";
import cardImage3 from "./images/bookshelves.jpeg";
import cardImage4 from "./images/coffee_table.jpeg";
import cardImage5 from "./images/cube_storage.jpeg";
import cardImage6 from "./images/desks.jpeg";
import cardImage7 from "./images/dining_room_set.jpg";
import cardImage8 from "./images/dressers.jpg";
import cardImage9 from "./images/futons.jpg";
import cardImage10 from "./images/mattresses.jpg";



const cardData = [
    {
      image: cardImage1,
      name: "الطقم الدبلماسي الفاخر",
      newPrice: "$10.00",
      oldPrice: "$30.60",
      description: "عطور ريحانة",
    },
    {
      image: cardImage2,
      name: "الفراشة دات الألوان الزاهية",
      newPrice: "$10.00",
      oldPrice: "$30.60",
      description: "عطور ريحانة",
    },
    {
        image: cardImage3,
        name: "زجاجة العباءة الوان رجالية",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
      {
        image: cardImage4,
        name: "الزجاجة الكرستالية الفاخرة100 مل",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
      {
        image: cardImage5,
        name: "زجاجة العباءة الالوان النسائية ",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
      {
        image: cardImage6,
        name: "الزجاجة الدبلماسية الوان مت 80 مل",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
      {
        image: cardImage7,
        name: "جرة الوالي الجديدة 40 مل",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
      {
        image: cardImage8,
        name: "طاقية الوان رجالي 50 مل",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
      {
        image: cardImage9,
        name: "الزجاجة المزخرفة العثمانية سعة 80 مل",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
      {
        image: cardImage10,
        name: "الزجاجة المزخرفة العثماني سعة 80",
        newPrice: "$10.00",
        oldPrice: "$30.60",
        description: "عطور ريحانة",
      },
  ];
  

export default function Cards() {
    useEffect(() => {
        const itemList = document.querySelector('.item-list');
        const gridViewBtn = document.getElementById('grid-active-btn');
        const detailsViewBtn = document.getElementById('details-active-btn');
    
        gridViewBtn.classList.add('active-btn');
    
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active-btn');
            detailsViewBtn.classList.remove('active-btn');
            itemList.classList.remove('details-active');
        });
    
        detailsViewBtn.addEventListener('click', () => {
            detailsViewBtn.classList.add('active-btn');
            gridViewBtn.classList.remove("active-btn");
            itemList.classList.add("details-active");
        });
      }, []);
    
      return (
        <>
          <div className="main-wrapper">
            <div className="container">
              <div className="main-title">
                <h1>Reyhana Perfumes Product List</h1>
              </div>
              <div className="display-style-btns">
                <button type="button" id="grid-active-btn">
                  <i className="fas fa-th" />
                </button>
                <button type="button" id="details-active-btn">
                  <i className="fas fa-list-ul" />
                </button>
              </div>
              <div className="item-list">
                {cardData.map((card, index) => (
                  <div className="item" key={index}>
                    <div className="item-img">
                      <img src={card.image} alt={card.name} />
                      <div className="icon-list">
                        <button type="button">
                          <i className="fas fa-sync-alt" />
                        </button>
                        <button type="button">
                          <i className="fas fa-shopping-cart" />
                        </button>
                        <button type="button">
                          <i className="far fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="item-detail">
                      <a href="/"  className="item-name">{card.name}</a>
                      <div className="item-price">
                        <span className="new-price">{card.newPrice}</span>
                        <span className="old-price">{card.oldPrice}</span>
                      </div>
                      <p>{card.description}</p>
                      <button type="button" className="add-btn">
                        add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
