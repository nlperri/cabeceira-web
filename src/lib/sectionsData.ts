import {BookShelfStatus} from "../@types/UserBookDetails"

export const sectionsData = [
    {
      id: 1,
      title: "Quero ler",
      status: BookShelfStatus.WANT_TO_READ,
    },
    {
      id: 2,
      title: "Lendo",
      status: BookShelfStatus.READING,
    },
    {
      id: 3,
      title: "Lidos",
      status: BookShelfStatus.READED,
    },
  ];