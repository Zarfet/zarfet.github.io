
      // Smooth scroll reveal
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      document
        .querySelectorAll(".experience-item, .service-item, .skill-category")
        .forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(30px)";
          el.style.transition = "all 0.6s ease";
          observer.observe(el);
        });

      // Navigation active state
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Detectar si estamos cerca del final de la página
    const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
    
    if (pageBottom && section.getAttribute("id") === "contact") {
      current = "contact";
    } else if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      }

      window.addEventListener("scroll", setActiveLink);
      window.addEventListener("load", setActiveLink);

      // Mobile menu functionality
      const menuToggle = document.querySelector(".menu-toggle");
      const mobileBackdrop = document.querySelector(".mobile-menu-backdrop");
      const mobileDrawer = document.querySelector(".mobile-menu-drawer");
      const mobileMenuLinks = document.querySelectorAll(".mobile-menu-links a");

      function openMobileMenu() {
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        mobileBackdrop.classList.add("active");
        mobileBackdrop.setAttribute("aria-hidden", "false");
        mobileDrawer.classList.add("active");
        document.body.style.overflow = "hidden";
      }

      function closeMobileMenu() {
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileBackdrop.classList.remove("active");
        mobileBackdrop.setAttribute("aria-hidden", "true");
        mobileDrawer.classList.remove("active");
        document.body.style.overflow = "";
      }

      // Toggle menu on hamburger click
      menuToggle.addEventListener("click", () => {
        if (menuToggle.classList.contains("active")) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      // Close menu on backdrop click
      mobileBackdrop.addEventListener("click", closeMobileMenu);

      // Close menu when a link is clicked
      mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });

      // Update mobile menu active state on scroll
      function updateMobileMenuActive() {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
          }
        });

        mobileMenuLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      }

      window.addEventListener("scroll", updateMobileMenuActive);
      window.addEventListener("load", updateMobileMenuActive);

      // Close menu on escape key (accessibility)
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuToggle.classList.contains("active")) {
          closeMobileMenu();
        }
      });

      // Language dropdown toggle
      const langDropdown = document.getElementById("lang-dropdown");
      const langCurrent = document.getElementById("lang-current");
      const langOptions = document.getElementById("lang-options");

      if (langDropdown && langCurrent && langOptions) {
        langCurrent.addEventListener("click", (e) => {
          e.stopPropagation();

          // Close mobile menu if open
          if (menuToggle.classList.contains("active")) {
            closeMobileMenu();
          }

          langDropdown.classList.toggle("active");
          const isExpanded = langDropdown.classList.contains("active");
          langCurrent.setAttribute("aria-expanded", isExpanded);
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
          if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove("active");
            langCurrent.setAttribute("aria-expanded", "false");
          }
        });

        // Close dropdown on ESC key
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && langDropdown.classList.contains("active")) {
            langDropdown.classList.remove("active");
            langCurrent.setAttribute("aria-expanded", "false");
            langCurrent.focus();
          }
        });

        // Detect current language and update button text
        const currentPath = window.location.pathname;
        let currentLang = "EN";

        // Improved detection
        if (
          currentPath === "/es/" ||
          currentPath === "/es/index.html" ||
          currentPath.includes("/es/")
        ) {
          currentLang = "ES";
        } else if (
          currentPath === "/ca/" ||
          currentPath === "/ca/index.html" ||
          currentPath.includes("/ca/")
        ) {
          currentLang = "CA";
        }

        document.getElementById("lang-text").textContent = currentLang;

        // Highlight active language option
        const langOptionLinks = document.querySelectorAll(".lang-option");
        langOptionLinks.forEach((link) => {
          link.classList.remove("active");
          const linkHref = link.getAttribute("href");

          if (
            (currentLang === "EN" &&
              (linkHref === "/" || linkHref === "/index.html")) ||
            (currentLang === "ES" && linkHref === "/es/") ||
            (currentLang === "CA" && linkHref === "/ca/")
          ) {
            link.classList.add("active");
          }
        });
      }
