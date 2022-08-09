import { filterDesignTableData } from "../../../utils/DesignTableData";
import SingleTableMobile from "../SingleTable/SingleTableMobile";
import { v4 } from "uuid";
import React from "react";
import { WrapperDesktopSTM } from "../DesignTable.style";

type Props = {
  isTablet: boolean;
  isLaptop: boolean;
  route: any;
};

export default function DDTableMultiplePages({
  isTablet,
  route,
  isLaptop,
}: Props) {
  const tableConditionalRoute =
    route.asPath === "/graphic-design"
      ? filterDesignTableData(isTablet, route.asPath, isLaptop).reverse()
      : filterDesignTableData(isTablet, route.asPath, isLaptop);

  return (
    <>
      {isLaptop ? (
        <WrapperDesktopSTM>
          {tableConditionalRoute.map((table) => {
            return (
              <SingleTableMobile
                key={v4()}
                title={table.title}
                image={table.url}
              />
            );
          })}
        </WrapperDesktopSTM>
      ) : (
        tableConditionalRoute.map((table) => {
          return (
            <SingleTableMobile
              key={v4()}
              title={table.title}
              image={table.url}
            />
          );
        })
      )}
    </>
  );
}
