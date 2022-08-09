export function filterDesignTableData(
  isTablet: boolean,
  route: string,
  isLaptop: boolean
) {
  const data = [
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
    {
      title: "GRAPHIC DESIGN",
      url: isLaptop
        ? "/assets/home/desktop/image-graphic-design.jpg"
        : isTablet
        ? "/assets/home/tablet/image-graphic-design.jpg"
        : "/assets/home/mobile/image-graphic-design.jpg",
    },
  ];

  const filterData = data.filter((item) => {
    if (route === "/web-design") {
      return item.title === "APP DESIGN" || item.title === "GRAPHIC DESIGN";
    }
    if (route === "/app-design") {
      return item.title === "WEB DESIGN" || item.title === "GRAPHIC DESIGN";
    }

    if (route === "/graphic-design") {
      return item.title === "APP DESIGN" || item.title === "WEB DESIGN";
    }
  });

  return route === "/" ? data : filterData;
}
