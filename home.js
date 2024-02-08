import React from 'react';

import SupportEngine from '../SupportEngine';

import './index.css';

const Home = () => {
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} ></div>

        <SupportEngine />
    </div>
  );
}

export default Home;

export const htmlCode = `

    </script>
    <script src="https://cdn.dorik.com/common/jquery-3.5.1.min.js"></script>
    <script type="text/javascript">
      (function() {
        var navbar = $(".dorik-nav-ynq9x73v");
        (function($, navbar) {
          $(navbar).on("click", "a", function(e) {
            var a = event.target.closest("a");
            var hash = a.hash;

            if (hash) {
              var baseHref = a.href.match(/(^https?:.+)#/);
              var baseURI = a.baseURI.match(/(^https?:.+)#?/);
              baseHref = baseHref && baseHref[1];
              baseURI = baseURI && baseURI[1];

              if (baseHref && baseURI && baseURI.includes(baseHref)) {
                e.preventDefault();
                const section = $(hash).offset();
                if (!section) return;
                var navbarHeight = event.currentTarget.clientHeight;
                var scrollTop = section.top - navbarHeight;
                var options = {
                  easing: "linear"
                };
                $("html, body").animate(
                  {
                    scrollTop: scrollTop
                  },
                  options
                );
              }
            }
          });
        })($, navbar);
      })();

      (function() {
        var navbar = document.querySelector(".dorik-nav-ynq9x73v");
        (function toggleNav(el) {
          const toggleBtn = el.querySelector(".dorik-navbar--toggle");
          toggleBtn &&
            toggleBtn.addEventListener("click", function(e) {
              const navlist = toggleBtn.nextElementSibling;
              const hasShow = navlist.classList.contains("show");

              if (!hasShow) {
                expend();
              } else {
                collapse();
              }

              navlist.addEventListener("click", function(e) {
                if (
                  e.target.closest("a") &&
                  !e.target.closest(".is-dropdown")
                ) {
                  collapse();
                }
              });

              function expend() {
                navlist.classList.add("show");
                const height = navlist.clientHeight + "px";
                navlist.classList.add("collapsing");
                setTimeout(() => {
                  navlist.style.height = height;
                }, 0);
                setTimeout(() => {
                  navlist.style.height = null;
                  navlist.classList.remove("collapsing");
                }, 350);
              }

              function collapse() {
                navlist.style.height = navlist.clientHeight + "px";
                navlist.classList.add("collapsing");
                setTimeout(() => {
                  navlist.style.height = null;
                }, 0);
                setTimeout(() => {
                  navlist.classList.remove("show");
                  navlist.classList.remove("collapsing");
                }, 350);
              }
            });
        })(navbar);
        (function toggleDropdown(jQuery, navbar) {
          var dropdown = jQuery(navbar).find(".dorik-nav--links .is-dropdown");
          jQuery(dropdown).on("click", function() {
            var dropdownItem = jQuery(this).find(".dorik-nav--dropdown");
            dropdownItem.toggleClass("expended");
          });
        })($, navbar);
      })();
    </script>
</div>
`

