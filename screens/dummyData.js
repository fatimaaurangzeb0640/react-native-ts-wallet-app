import { colors } from "../components/colors";

export const cardsData = [
  {
    id: 1,
    accountNo: "5793750284",
    balance: 2000.54,
    alias: "Work Debit",
    logo: require("../assets/cards/mc.png"),
  },
  {
    id: 2,
    accountNo: "5793757903",
    balance: 207400.54,
    alias: "Personal Debit",
    logo: require("../assets/cards/mc.png"),
  },
  {
    id: 3,
    accountNo: "5793778658",
    balance: 1900.22,
    alias: "School Debit",
    logo: require("../assets/cards/visa_white.png"),
  },
];

export const transactionData = [
  {
    id: 1,
    title: "Taxi",
    subtitle: "Uber car",
    amount: "$-86.43",
    date: "14 Sep 2022",
    art: {
      icon: "car",
      background: colors.primary,
    },
  },
  {
    id: 2,
    title: "Shopping",
    subtitle: "Ali Express",
    amount: "$-200.78",
    date: "14 Oct 2022",
    art: {
      icon: "cart",
      background: colors.tertiary,
    },
  },
  {
    id: 3,
    title: "Travel",
    subtitle: "Emirates",
    amount: "$-86.43",
    date: "7 Jan 2022",
    art: {
      icon: "airplane",
      background: colors.accent,
    },
  },
];
