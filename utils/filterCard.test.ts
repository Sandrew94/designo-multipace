import { filterCard } from "./filterCard";
import { FilterCardType } from "../types/CardType";
import { expect } from "expect";

test(
  "Test util function filterCard, from an Array of object with Attributes," +
    " it must return the Obj of the selected attribute ",
  () => {
    const mockObj: FilterCardType = [
      {
        "web-design": [
          {
            url: "/assets/web-design/desktop/image-express.jpg",
            title: "EXPRESS",
            description:
              "A multi-carrier shipping website for ecommerce businesses",
          },
          {
            url: "/assets/web-design/desktop/image-transfer.jpg",
            title: "TRANSFER",
            description:
              "Site for low-cost money transfers and sending money within seconds",
          },
        ],
      },

      {
        "app-design": [
          {
            url: "/assets/app-design/desktop/image-airfilter.jpg",
            title: "AIRFILTER",
            description:
              "Solving the problem of poor indoor air quality by filtering the air",
          },
          {
            url: "/assets/app-design/desktop/image-eyecam.jpg",
            title: "EYECAM",
            description:
              "Product that lets you edit your favorite photos and videos at any time",
          },
        ],
      },

      {
        "graphic-design": [
          {
            url: "/assets/graphic-design/desktop/image-change.jpg",
            title: "TIM BROWN",
            description:
              "A book cover designed for Tim Brown’s new release, ‘Change’",
          },
          {
            url: "/assets/graphic-design/desktop/image-boxed-water.jpg",
            title: "BOXED WATER",
            description: "A simple packaging concept made for Boxed Water",
          },
        ],
      },
    ];

    const resultWeb = filterCard("web-design", mockObj);
    const resultApp = filterCard("app-design", mockObj);
    const resultGraphic = filterCard("graphic-design", mockObj);

    expect(resultWeb["web-design"]).toStrictEqual([
      {
        url: "/assets/web-design/desktop/image-express.jpg",
        title: "EXPRESS",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        url: "/assets/web-design/desktop/image-transfer.jpg",
        title: "TRANSFER",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
    ]);
    expect(resultApp["app-design"]).toStrictEqual([
      {
        url: "/assets/app-design/desktop/image-airfilter.jpg",
        title: "AIRFILTER",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        url: "/assets/app-design/desktop/image-eyecam.jpg",
        title: "EYECAM",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
      },
    ]);
    expect(resultGraphic["graphic-design"]).toStrictEqual([
      {
        url: "/assets/graphic-design/desktop/image-change.jpg",
        title: "TIM BROWN",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        url: "/assets/graphic-design/desktop/image-boxed-water.jpg",
        title: "BOXED WATER",
        description: "A simple packaging concept made for Boxed Water",
      },
    ]);
  }
);
