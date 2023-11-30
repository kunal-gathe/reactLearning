import React from "react";
import "/style.css";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg"
        />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
}
const restaurantList = [
  {
    info: {
      id: "54604",
      name: "Domino's Pizza",
      cloudinaryImageId: "dp3bbhabqbzpi9lk05la",
      locality: "Sitabuldi",
      areaName: "Sitabuldi",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "54604",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-30 00:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-sitabuldi-nagpur-54604",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "55054",
      name: "Reddy's Gokul Brindavan Restaurant",
      cloudinaryImageId: "fogfnatzbqcn5nytgb7e",
      locality: "Laxminagar",
      areaName: "Dharampeth",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Beverages"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "55054",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "168579",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/reddys-gokul-brindavan-restaurant-laxminagar-dharampeth-nagpur-55054",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "56350",
      name: "Checkers",
      cloudinaryImageId: "d5516079bd5c3cf93e9c5a5340287894",
      locality: "Residency Road",
      areaName: "Sadar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese",
        "North Indian",
        "Indian",
        "Tandoor",
        "Continental",
        "Beverages",
        "Pizzas",
        "Desserts",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "56350",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "21854",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/checkers-residency-road-sadar-nagpur-56350",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "58326",
      name: "Al Zam Zam",
      cloudinaryImageId: "nysbs8kybd94uhbzdrem",
      locality: "Lakadganj",
      areaName: "Lakadganj",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Mughlai",
        "Chinese",
        "Afghani",
        "Tandoor",
      ],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "58326",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "4830",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/al-zam-zam-lakadganj-nagpur-58326",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "305822",
      name: "Barbeque Nation",
      cloudinaryImageId: "xxh8c7ggvlhlzlx3oyv4",
      locality: "Sitabuldi",
      areaName: "Sitabuldi",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "305822",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "2438",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 16:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barbeque-nation-sitabuldi-nagpur-305822",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "63013",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "su3q3pwzz3we7yr4wsc8",
      locality: "Mohan Nagar",
      areaName: "Sadar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "63013",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "4925",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-mohan-nagar-sadar-nagpur-63013",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53418",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Mohan Nagar",
      areaName: "Sadar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "53418",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "21809",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-mohan-nagar-sadar-nagpur-53418",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "54053",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Sitabuldi",
      areaName: "Sitabuldi",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "54053",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "721",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-sitabuldi-nagpur-54053",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "155444",
      name: "The Good Bowl",
      cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
      locality: "Near Gandhi Chowk",
      areaName: "Sadar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "155444",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "7918",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-near-gandhi-chowk-sadar-nagpur-155444",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "385132",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
      locality: "Residency Road",
      areaName: "Sadar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "385132",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "236673",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-residency-road-sadar-nagpur-385132",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53868",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Sitabuldi",
      areaName: "Sitabuldi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "53868",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "547",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-30 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-sitabuldi-nagpur-53868",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53484",
      name: "Haldiram's Restaurant",
      cloudinaryImageId: "c058b951bd917bf716630dff74648a5d",
      locality: "Sitabuldi",
      areaName: "Sitabuldi",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "South Indian", "Sweets", "Desserts", "Chaat"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "53484",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "351771",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/haldirams-restaurant-sitabuldi-nagpur-53484",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "56276",
      name: "Cluckers Fried Chicken Restaurant",
      cloudinaryImageId: "bapn4x8smuctxtpfzu9r",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹250 for two",
      cuisines: ["American", "Snacks", "Continental"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "56276",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "4842",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cluckers-fried-chicken-restaurant-civil-lines-nagpur-56276",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "185820",
      name: "McDonald's",
      cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      locality: "Trillium Mall",
      areaName: "Ayodhya Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "185820",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "630",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-30 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-trillium-mall-ayodhya-nagar-nagpur-185820",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "52547",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Dharampeth",
      areaName: "Dharampeth",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "52547",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3000,
      },
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-30 01:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-dharampeth-nagpur-52547",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53419",
      name: "Behrouz Biryani",
      cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
      locality: "Mohan Nagar",
      areaName: "Sadar",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "53419",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "1803",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-mohan-nagar-sadar-nagpur-53419",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53420",
      name: "Oven Story Pizza - Standout Toppings",
      cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
      locality: "Mohan Nagar",
      areaName: "Sadar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "53420",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "3534",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "23-27 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-mohan-nagar-sadar-nagpur-53420",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "207902",
      name: "Baskin Robbins",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Laxminagar",
      areaName: "Bajaj Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "207902",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4100,
      },
      parentId: "5588",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-30 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-laxminagar-bajaj-nagar-nagpur-207902",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53422",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
      locality: "Mohan Nagar",
      areaName: "Sadar",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "53422",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "4444",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-mohan-nagar-sadar-nagpur-53422",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "76405",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
      locality: "Futala Road",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "76405",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "1",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-futala-road-civil-lines-nagpur-76405",
      type: "WEBLINK",
    },
  },
];

function RestaurantCard( {name,cuisines,avgRating,cloudinaryImageId} ) {
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating} star</h4>
    </div> 
  );
}
function Body() {
  return (
    <div className="body-card">
        {restaurantList.map((res)=>{
                return <RestaurantCard  {...res.info} key={res.info.id}/>
        })}
        
    </div>
  );
}
function Footer() {
  return <h1>Footer</h1>;
}

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
