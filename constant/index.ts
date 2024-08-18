export const hedaerLinks = [
  {
    label: "ホーム",
    route: "/",
  },
  {
    label: "イベントを作る",
    route: "/events/create",
  },
  {
    label: "プロフィール",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
