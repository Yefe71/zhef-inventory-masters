import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilMoneyWithdrawal,
    UilUsdSquare
  } from "@iconscout/react-unicons";

  export const SidebarData = [
      {
        icon: UilEstate,
        heading: "Dashboard",
      },
      {
        icon: UilClipboardAlt,
        heading: "Orders",
      },
      {
        icon: UilUsersAlt,
        heading: "Customers",
      },
      {
        icon: UilPackage,
        heading: 'Products'
      },
      {
        icon: UilChart,
        heading: 'Analytics'
      },
      
  ]

  export const CardsData = [
    {
      title: "Total Revenue",
      title2: " after taxes",
      gridArea: 'top1',
      color: {
        backGround: "#79b665",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Total Revenue",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },



    {
      title: "Total Orders",
      gridArea: 'top2',
      color: {
        backGround: "#d24365",
        
      },
      barValue: 80,
      value: "80",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },




    {
      title: "New Customers",
      gridArea: 'top3',
      color: {
        backGround: "#7ca3de",
      },
      barValue: 60,
      value: "15",
      png: UilClipboardAlt,
      series: [
        {
          name: "New Customers",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },




    {
      title: "Most Popular Dish",
      gridArea: 'top4',
      color: {
        backGround: "#f1592a"
      },
      barValue: 60,
      value: "Burger",
      png: UilClipboardAlt,
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E'],
    },
  ];