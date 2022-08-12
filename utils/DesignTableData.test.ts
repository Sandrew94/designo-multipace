import { expect } from "expect";
import { filterDesignTableData } from "./DummyDataManipulations";

describe("Given 2 view (laptop or tablet) with the route of the page, it must filter the correct object", () => {
  const isLaptop = false;
  const isTablet = true;

  test("test route /web-design", () => {
    const mockDataWebDesign = filterDesignTableData(
      isTablet,
      "/web-design",
      isLaptop
    );

    expect(mockDataWebDesign).toStrictEqual([
      {
        title: "APP DESIGN",
        url: isLaptop
          ? "/assets/home/desktop/image-app-design.jpg"
          : isTablet
          ? "/assets/home/tablet/image-app-design.jpg"
          : "/assets/home/mobile/image-app-design.jpg",
      },
      {
        title: "GRAPHIC DESIGN",
        url: isLaptop
          ? "/assets/home/desktop/image-graphic-design.jpg"
          : isTablet
          ? "/assets/home/tablet/image-graphic-design.jpg"
          : "/assets/home/mobile/image-graphic-design.jpg",
      },
    ]);
  });

  test("test route /app-design", () => {
    const mockDataWebDesign = filterDesignTableData(
      isTablet,
      "/app-design",
      isLaptop
    );

    expect(mockDataWebDesign).toStrictEqual([
      {
        title: "WEB DESIGN",
        url: isLaptop
          ? "/assets/home/desktop/image-web-design-large.jpg"
          : isTablet
          ? "/assets/home/tablet/image-web-design.jpg"
          : "/assets/home/mobile/image-web-design.jpg",
      },
      {
        title: "GRAPHIC DESIGN",
        url: isLaptop
          ? "/assets/home/desktop/image-graphic-design.jpg"
          : isTablet
          ? "/assets/home/tablet/image-graphic-design.jpg"
          : "/assets/home/mobile/image-graphic-design.jpg",
      },
    ]);
  });

  test("test route /graphic-design", () => {
    const mockDataWebDesign = filterDesignTableData(
      isTablet,
      "/graphic-design",
      isLaptop
    );

    expect(mockDataWebDesign).toStrictEqual([
      {
        title: "WEB DESIGN",
        url: isLaptop
          ? "/assets/home/desktop/image-web-design-large.jpg"
          : isTablet
          ? "/assets/home/tablet/image-web-design.jpg"
          : "/assets/home/mobile/image-web-design.jpg",
      },
      {
        title: "APP DESIGN",
        url: isLaptop
          ? "/assets/home/desktop/image-app-design.jpg"
          : isTablet
          ? "/assets/home/tablet/image-app-design.jpg"
          : "/assets/home/mobile/image-app-design.jpg",
      },
    ]);
  });
});
