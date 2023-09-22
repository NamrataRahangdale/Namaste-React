import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxtRcHK-N18FZ2DL9-jo-sKbPLeSy3Lg6kg&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const ResCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;
  return (

    <div className="res-card">
      <img
        className="menu-image"
        alt="menu-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      />
      <div className="card-info">
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{rcostForTwo} Rs</h4>
      <h4>{avgRating} Star</h4>
      </div>
    </div>
  )
}

const resDataList = [
  {
    "info": {
      "id": "243625",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Deccan Gymkhana",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "243625",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3800
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-23 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "628118",
      "name": "Hotel Dawath\t",
      "cloudinaryImageId": "hpooldauljohuiap84a8",
      "locality": "Narveer Tanaji Wadi",
      "areaName": "Shivajinagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 2.7,
      "feeDetails": {
        "restaurantId": "628118",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "98713",
      "avgRatingString": "2.7",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:30:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "70% OFF",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-dawath-narveer-tanaji-wadi-shivajinagar-pune-628118",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "506982",
      "name": "McDonald's",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "locality": "Narayan Peth",
      "areaName": "Shaniwar Peth",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "506982",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:45:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-narayan-peth-shaniwar-peth-pune-506982",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "152984",
      "name": "Oye Kiddan",
      "cloudinaryImageId": "usahf2gbff2ybnfnik9n",
      "locality": "Bharati Nagar",
      "areaName": "Kothrud",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Punjabi",
        "North Indian",
        "Desserts",
        "Thalis"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "152984",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 7500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 7500
      },
      "parentId": "690",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 7.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "7.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 15:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/oye-kiddan-bharati-nagar-kothrud-pune-152984",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "456986",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "clcpnrfs8dz1xcrlbhwr",
      "locality": "Somwar Peth",
      "areaName": "Rasta Peth",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "456986",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "2456",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 22:59:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-somwar-peth-rasta-peth-pune-456986",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "507944",
      "name": "Great Indian Khichdi by EatFit",
      "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
      "locality": "Ghole Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Home Food",
        "Healthy Food",
        "Snacks"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "507944",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "319582",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-ghole-road-shivajinagar-pune-507944",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "348887",
      "name": "Big Bowl",
      "cloudinaryImageId": "992f217c2f122c0d8fc385855ca30722",
      "locality": "Kumar Pacific Mall",
      "areaName": "Swargate",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "348887",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4300
      },
      "parentId": "434792",
      "avgRatingString": "3.8",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-kumar-pacific-mall-swargate-pune-348887",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "42581",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "The Pavillion Mall",
      "areaName": "Shivajinagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "42581",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4300
      },
      "parentId": "166",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-23 03:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹129"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-the-pavillion-mall-shivajinagar-pune-42581",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "12824",
      "name": "Mathura Pure Veg",
      "cloudinaryImageId": "gky7e4jjybodkjlkfvmh",
      "locality": "JM Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Maharashtrian",
        "Street Food",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "veg": true,
      "feeDetails": {
        "restaurantId": "12824",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "133513",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-e9250783-5cc7-40f5-ad5a-9b694bdeb153"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mathura-pure-veg-jm-road-shivajinagar-pune-12824",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  
  {
    "info": {
      "id": "62934",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "chs0jbyj2osyqumr1wiu",
      "locality": "Shaniwar Peth",
      "areaName": "Narayan Peth",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "62934",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "4925",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-shaniwar-peth-narayan-peth-pune-62934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "21001",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "FC Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "21001",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "721",
      "avgRatingString": "3.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-23 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-fc-road-shivajinagar-pune-21001",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5624",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "FC Road",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "5624",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3300
      },
      "parentId": "2",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-23 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-fc-road-deccan-gymkhana-pune-5624",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "6239",
      "name": "Chaitanya Paranthas",
      "cloudinaryImageId": "xofljpukrkkbftsjospa",
      "locality": "F.C. Road",
      "areaName": "F.C. Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Punjabi",
        "Chinese",
        "Thalis",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "6239",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "236",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chaitanya-paranthas-f-c-road-pune-6239",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "35370",
      "name": "Falahaar",
      "cloudinaryImageId": "ynt91kk0vyornubvrdgl",
      "locality": "The pavillion mall",
      "areaName": "Shivajinagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Beverages",
        "Juices",
        "Fast Food",
        "Snacks",
        "Pizzas",
        "Italian",
        "Street Food",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "35370",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "364",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-23 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/falahaar-the-pavillion-mall-shivajinagar-pune-35370",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "13909",
      "name": "Wadeshwar(FC Road)",
      "cloudinaryImageId": "uwny9zuejmpvoznipn3c",
      "locality": "Deccan Gymkhana",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "South Indian",
        "Street Food",
        "Snacks",
        "Beverages",
        "Healthy Food",
        "Indian"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "13909",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "1770",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/wadeshwar-fc-road-deccan-gymkhana-pune-13909",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "289696",
      "name": "Smoke House Deli",
      "cloudinaryImageId": "idvn7k6mbcfncfprwf52",
      "locality": "F.C. Road",
      "areaName": "F.C. Road",
      "costForTwo": "₹800 for two",
      "cuisines": [
        "American",
        "Italian"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "289696",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4000
      },
      "parentId": "874",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-23 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/smoke-house-deli-f-c-road-pune-289696",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "200980",
      "name": "Irani Cafe",
      "cloudinaryImageId": "lwysdaf2bdkz40mqtjbr",
      "locality": "Prabhat Road",
      "areaName": "Erandwane",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Snacks",
        "Fast Food",
        "Desserts",
        "Beverages",
        "Indian",
        "Street Food"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "200980",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "4057",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/irani-cafe-prabhat-road-erandwane-pune-200980",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "305794",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "eizjdmngzyna4mp0xmwm",
      "locality": "Jangali Maharaj Rd",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "305794",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4000
      },
      "parentId": "2438",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-22 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/barbeque-nation-jangali-maharaj-rd-deccan-gymkhana-pune-305794",
      "type": "WEBLINK"
    }
  },
]
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <div className="body-heading">
          <h1>What's you looking for ?</h1>
        </div>
        <div className="search">
          <input className="search-tag" placeholder="search" />
        </div>
      </div>
      <div className="res-container">{
        resDataList.map((restaurant) => (
          <ResCard
            key={restaurant.info.id}
            resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
const PageLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PageLayout />);
