import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
} from "@testing-library/react";
import HeaderHome from "../HeaderHome";

describe("Test HeaderHome style and media queryes", () => {
  const mediaLaptop = window.matchMedia(
    "(min-width: 1024px)"
  );

  const mediaPhone = window.matchMedia(
    "(max-width: 1024px)"
  );

  it("test media query if there is a laptop", () => {
    expect(mediaLaptop.matches).toBe(true);
  });

  it("test if the styles is correct", () => {
    const { container } = render(<HeaderHome />);

    if (mediaLaptop.matches) {
      expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="sc-bczRLJ citeBF"
  >
    <div
      class="sc-gsnTZi czwQRw"
    >
      <span
        style="box-sizing: border-box; display: inline-block; overflow: hidden; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"
      >
        <span
          style="box-sizing: border-box; display: block; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"
        >
          <img
            alt=""
            aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27640%27%20height=%27640%27/%3e"
            style="display: block; max-width: 100%; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"
          />
        </span>
        <img
          data-nimg="intrinsic"
          decoding="async"
          src="/_next/image?url=%2Fimg.jpg&w=1920&q=75"
          srcset="/_next/image?url=%2Fimg.jpg&w=640&q=75 1x, /_next/image?url=%2Fimg.jpg&w=1920&q=75 2x"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
        />
      </span>
    </div>
    <div
      class="sc-dkzDqf jPAhal"
    >
      <span
        class="sc-hKMtZM ihjoIU"
      >
        Award-winning custom designs and digital branding solutions
      </span>
      <span
        class="sc-eCYdqJ cHEhGr"
      >
        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
      </span>
      <button
        class="sc-jSMfEi goiftG"
      >
        LEARN MORE
      </button>
    </div>
    <div
      class="sc-gKXOVf efRbcB"
    >
      <span
        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 24px; height: 24px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"
      >
        <img
          data-nimg="fixed"
          decoding="async"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
        />
        <noscript />
      </span>
    </div>
  </div>
</div>
`);
    }

    //phone
    if (mediaPhone.matches) {
      expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="sc-bczRLJ citeBF"
  >
    <div
      class="sc-gsnTZi czwQRw"
    >
      <span
        style="box-sizing: border-box; display: inline-block; overflow: hidden; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"
      >
        <span
          style="box-sizing: border-box; display: block; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"
        >
          <img
            alt=""
            aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27640%27%20height=%27640%27/%3e"
            style="display: block; max-width: 100%; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"
          />
        </span>
        <img
          data-nimg="intrinsic"
          decoding="async"
          src="/_next/image?url=%2Fimg.jpg&w=1920&q=75"
          srcset="/_next/image?url=%2Fimg.jpg&w=640&q=75 1x, /_next/image?url=%2Fimg.jpg&w=1920&q=75 2x"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
        />
      </span>
    </div>
    <div
      class="sc-dkzDqf jPAhal"
    >
      <span
        class="sc-hKMtZM ihjoIU"
      >
        Award-winning custom designs and digital branding solutions
      </span>
      <span
        class="sc-eCYdqJ cHEhGr"
      >
        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
      </span>
      <button
        class="sc-jSMfEi goiftG"
      >
        LEARN MORE
      </button>
    </div>
    <div
      class="sc-gKXOVf efRbcB"
    >
      <span
        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 24px; height: 24px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"
      >
        <img
          data-nimg="fixed"
          decoding="async"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
        />
        <noscript />
      </span>
    </div>
  </div>
</div>
`);
    }
  });
});
