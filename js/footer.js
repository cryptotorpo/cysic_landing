document.addEventListener("DOMContentLoaded", function () {
    var navbarHTML = `
        <section class="footer">
      <div class="footer-container">
        <div class="footer-main-container">
          <div class="footer-main-text">Cysic</div>
          <div class="div-block-8"></div>
          <div class="footer-navbar">
            <a
              href="index.html"
              aria-current="page"
              class="button-footer w-button w--current"
              >Home</a
            >
            <link rel="prefetch" href="/" />
            <a
              href="products/product-cysic-network.html"
              class="button-footer w-button"
              >Products</a
            >
            <link rel="prefetch" href="/products/product-cysic-network" />

          </div>
        </div>
        <div class="footer-social-container">
          <a
            href="https://x.com/"
            target="_blank"
            class="footer-socials w-inline-block"
          >
            <div class="footer-socials-logo _1 w-embed">
              <svg
                width="100%"
                height="100%"
                viewbox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path
                  d="M20.7603 0.294434H24.7224L16.0683 10.2112L26.2498 23.7059H18.2786L12.035 15.52L4.89051 23.7059H0.926712L10.1831 13.0981L0.416504 0.294434H8.59114L14.2341 7.7748L20.7603 0.294434ZM19.3717 21.3292H21.5675L7.39635 2.54678H5.04229L19.3717 21.3292Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://t.me/cysic_ai_portal"
            target="_blank"
            class="footer-socials w-inline-block"
          >
            <div class="footer-socials-logo w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewbox="0,0,256,256"
              >
                <g
                  fill="currentcolor"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <g transform="scale(5.12,5.12)">
                    <title>Telegram</title>
                    <path
                      d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </a>
          
        </div>
        <div class="footer-marquee">
          <div class="footer-marquee-text scroll">
            <div class="text-block-5">revolutionizing ZK Computation</div>
          </div>
          <div class="footer-marquee-text scroll">
            <div class="text-block-5">revolutionizing ZK Computation</div>
          </div>
        </div>
        <div class="footer-marquee-code w-embed">
          <style>
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(calc(-100% - 5rem));
              }
            }
            .scroll {
              animation: scroll 50s linear infinite;
            }
            .reverse {
              animation-direction: reverse;
            }
            .marquee-image {
              -webkit-transform: translateZ(0);
            }
          </style>
        </div>
      </div>
    </section>
    `
    document.getElementById("footer-container").innerHTML = navbarHTML;
  });