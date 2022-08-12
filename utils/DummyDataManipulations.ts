type FilterDesignType = Array<{
  altText?: string;
  description?: string;
  title: string;
  url: string;
}>;

export function filterDesignTableData(
  isTablet: boolean,
  route: string,
  isLaptop: boolean
): FilterDesignType {
  const dataDesignTable = [
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
  const dataAboutSection = [
    {
      title: "About Us",
      description:
        "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
      url: isLaptop
        ? "/assets/about/desktop/image-about-hero.jpg"
        : isTablet
        ? "/assets/about/tablet/image-about-hero.jpg"
        : "/assets/about/mobile/image-about-hero.jpg",
      altText: "Header Image",
    },
    {
      title: "World-class talent",
      description:
        "We are a crew of strategists, problem-solvers, and" +
        " technologists. Every design is thoughtfully crafted from" +
        " concept to launch, ensuring success in its given market." +
        " We are constantly updating our skills in a myriad of" +
        " platforms." +
        "Our team is multi-disciplinary and we are not merely" +
        " interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
      url: isLaptop
        ? "/assets/about/desktop/image-world-class-talent.jpg"
        : isTablet
        ? "/assets/about/tablet/image-world-class-talent.jpg"
        : "/assets/about/mobile/image-world-class-talent.jpg",
      altText: "Header-2 Image",
    },
  ];

  const routeData = route === "/about" ? dataAboutSection : dataDesignTable;

  const filterData = routeData.filter((item) => {
    if (route === "/web-design") {
      return item.title === "APP DESIGN" || item.title === "GRAPHIC DESIGN";
    }
    if (route === "/app-design") {
      return item.title === "WEB DESIGN" || item.title === "GRAPHIC DESIGN";
    }

    if (route === "/graphic-design") {
      return item.title === "APP DESIGN" || item.title === "WEB DESIGN";
    }

    if (route === "/about") {
      return item;
    }
  });

  return route === "/" ? dataDesignTable : filterData;
}
