<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org" lang="en">
<head th:fragment="head(title, extraCss)">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title th:text="${title} ?: 'My Application'">My Application</title>

    <!-- Bootstrap CSS (CDN) -->
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous" />

    <!-- Bootstrap Icons -->
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet" />

    <!-- Main application stylesheet -->
    <link rel="stylesheet" th:href="@{/css/main.css}" />

    <!-- Home page stylesheet (included when extraCss contains 'home') -->
    <link th:if="${extraCss != null and #strings.contains(extraCss, 'home')}"
          rel="stylesheet"
          th:href="@{/css/home.css}" />

    <!-- Slot for page-specific additional stylesheets -->
    <th:block th:if="${extraCss != null and not #strings.contains(extraCss, 'home')}">
        <link rel="stylesheet" th:href="@{'/css/' + ${extraCss} + '.css'}" />
    </th:block>
</head>

<body>

<!-- =====================================================================
     NAVIGATION FRAGMENT
     Usage: th:replace="~{fragments/layout :: navbar}"
     ===================================================================== -->
<header th:fragment="navbar" class="site-header">
    <nav class="navbar navbar-expand-lg navbar-dark site-navbar" aria-label="Main navigation">
        <div class="container-xl">

            <!-- Brand / Logo -->
            <a class="navbar-brand site-navbar__brand" th:href="@{/}">
                <span class="site-navbar__logo-icon" aria-hidden="true">
                    <i class="bi bi-layers-fill"></i>
                </span>
                <span class="site-navbar__logo-text">MyApp</span>
            </a>

            <!-- Mobile toggle button -->
            <button class="navbar-toggler site-navbar__toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavMenu"
                    aria-controls="mainNavMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible nav links -->
            <div class="collapse navbar-collapse" id="mainNavMenu">

                <!-- Primary navigation links (left-aligned) -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 site-navbar__nav">
                    <li class="nav-item">
                        <a class="nav-link site-navbar__link"
                           th:href="@{/}"
                           th:classappend="${#httpServletRequest.requestURI == '/'} ? 'active' : ''"
                           aria-current="page">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link site-navbar__link"
                           th:href="@{/features}"
                           th:classappend="${#httpServletRequest.requestURI.startsWith('/features')} ? 'active' : ''">
                            Features
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link site-navbar__link"
                           th:href="@{/about}"
                           th:classappend="${#httpServletRequest.requestURI.startsWith('/about')} ? 'active' : ''">
                            About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link site-navbar__link"
                           th:href="@{/contact}"
                           th:classappend="${#httpServletRequest.requestURI.startsWith('/contact')} ? 'active' : ''">
                            Contact
                        </a>
                    </li>
                </ul>

                <!-- Right-aligned action buttons -->
                <div class="site-navbar__actions d-flex align-items-center gap-2">
                    <a class="btn btn-outline-light btn-sm site-navbar__btn-secondary"
                       th:href="@{/login}">
                        Sign In
                    </a>
                    <a class="btn btn-primary btn-sm site-navbar__btn-primary"
                       th:href="@{/register}">
                        Get Started
                    </a>
                </div>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-xl -->
    </nav>
</header>


<!-- =====================================================================
     FOOTER FRAGMENT
     Usage: th:replace="~{fragments/layout :: footer}"
     ===================================================================== -->
<footer th:fragment="footer" class="site-footer" aria-label="Site footer">
    <div class="container-xl">

        <div class="site-footer__grid">

            <!-- Column 1: Brand & tagline -->
            <div class="site-footer__col site-footer__col--brand">
                <a class="site-footer__brand" th:href="@{/}">
                    <i class="bi bi-layers-fill" aria-hidden="true"></i>
                    <span>MyApp</span>
                </a>
                <p class="site-footer__tagline">
                    Building great products with modern technology.
                </p>
                <div class="site-footer__social">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                       class="site-footer__social-link" aria-label="GitHub">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                       class="site-footer__social-link" aria-label="Twitter / X">
                        <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       class="site-footer__social-link" aria-label="LinkedIn">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>

            <!-- Column 2: Product links -->
            <div class="site-footer__col">
                <h3 class="site-footer__heading">Product</h3>
                <ul class="site-footer__links">
                    <li><a class="site-footer__link" th:href="@{/features}">Features</a></li>
                    <li><a class="site-footer__link" th:href="@{/pricing}">Pricing</a></li>
                    <li><a class="site-footer__link" th:href="@{/changelog}">Changelog</a></li>
                    <li><a class="site-footer__link" th:href="@{/roadmap}">Roadmap</a></li>
                </ul>
            </div>

            <!-- Column 3: Company links -->
            <div class="site-footer__col">
                <h3 class="site-footer__heading">Company</h3>
                <ul class="site-footer__links">
                    <li><a class="site-footer__link" th:href="@{/about}">About Us</a></li>
                    <li><a class="site-footer__link" th:href="@{/blog}">Blog</a></li>
                    <li><a class="site-footer__link" th:href="@{/careers}">Careers</a></li>
                    <li><a class="site-footer__link" th:href="@{/contact}">Contact</a></li>
                </ul>
            </div>

            <!-- Column 4: Legal / Support links -->
            <div class="site-footer__col">
                <h3 class="site-footer__heading">Support</h3>
                <ul class="site-footer__links">
                    <li><a class="site-footer__link" th:href="@{/docs}">Documentation</a></li>
                    <li><a class="site-footer__link" th:href="@{/faq}">FAQ</a></li>
                    <li><a class="site-footer__link" th:href="@{/privacy}">Privacy Policy</a></li>
                    <li><a class="site-footer__link" th:href="@{/terms}">Terms of Service</a></li>
                </ul>
            </div>

        </div><!-- /.site-footer__grid -->

        <!-- Bottom bar: copyright -->
        <div class="site-footer__bottom">
            <p class="site-footer__copyright">
                &copy; <span th:text="${#dates.year(#dates.createNow())}">2024</span>
                MyApp. All rights reserved.
            </p>
            <p class="site-footer__legal">
                Made with <i class="bi bi-heart-fill text-danger" aria-label="love"></i>
                using Spring Boot &amp; Thymeleaf.
            </p>
        </div>

    </div><!-- /.container-xl -->
</footer>


<!-- =====================================================================
     SCRIPTS FRAGMENT
     Usage: th:replace="~{fragments/layout :: scripts}"
     ===================================================================== -->
<th:block th:fragment="scripts">
    <!-- Bootstrap JS bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"></script>
    <!-- Application JS -->
    <script th:src="@{/js/main.js}"></script>
</th:block>

</body>
</html>
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Welcome to our application — fast, reliable, and easy to use." />
    <title th:text="${pageTitle != null} ? ${pageTitle} : 'Home'">Home</title>

    <!-- Layout / shared styles -->
    <link rel="stylesheet" th:href="@{/css/main.css}" href="/css/main.css" />
    <!-- Home-page specific styles -->
    <link rel="stylesheet" th:href="@{/css/home.css}" href="/css/home.css" />
</head>
<body class="page-home">

    <!-- ===================== NAVIGATION ===================== -->
    <header th:replace="~{fragments/layout :: navbar}" class="site-header">
        <!-- Replaced by layout fragment at runtime -->
        <nav class="navbar">
            <div class="navbar__container container">
                <a class="navbar__brand" href="/">MyApp</a>
                <ul class="navbar__links">
                    <li><a class="navbar__link" href="/">Home</a></li>
                    <li><a class="navbar__link" href="/about">About</a></li>
                    <li><a class="navbar__link" href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <!-- ===================== MAIN CONTENT ===================== -->
    <main id="main-content" class="site-main">

        <!-- ── HERO / BANNER SECTION ── -->
        <section class="hero" aria-labelledby="hero-heading">
            <div class="hero__overlay"></div>
            <div class="hero__content container">
                <h1 id="hero-heading" class="hero__title"
                    th:text="${heroTitle != null} ? ${heroTitle} : 'Welcome to MyApp'">
                    Welcome to MyApp
                </h1>
                <p class="hero__subtitle"
                   th:text="${heroSubtitle != null} ? ${heroSubtitle} : 'Build something amazing — fast, reliable, and beautifully simple.'">
                    Build something amazing — fast, reliable, and beautifully simple.
                </p>
                <div class="hero__actions">
                    <a class="btn btn--primary btn--lg"
                       th:href="@{/get-started}"
                       href="/get-started">
                        Get Started
                    </a>
                    <a class="btn btn--outline btn--lg"
                       th:href="@{/learn-more}"
                       href="/learn-more">
                        Learn More
                    </a>
                </div>
            </div>
        </section>

        <!-- ── FEATURES / CARDS SECTION ── -->
        <section class="features section" aria-labelledby="features-heading">
            <div class="container">
                <header class="section__header">
                    <h2 id="features-heading" class="section__title"
                        th:text="${featuresTitle != null} ? ${featuresTitle} : 'Why Choose Us'">
                        Why Choose Us
                    </h2>
                    <p class="section__subtitle"
                       th:text="${featuresSubtitle != null} ? ${featuresSubtitle} : 'Everything you need to succeed, all in one place.'">
                        Everything you need to succeed, all in one place.
                    </p>
                </header>

                <!-- Dynamic feature cards (th:each preserved) -->
                <div class="card-grid" th:if="${features != null and !features.isEmpty()}">
                    <article class="card" th:each="feature : ${features}">
                        <div class="card__icon" th:if="${feature.icon != null}">
                            <img th:src="@{${feature.icon}}"
                                 th:alt="${feature.name}"
                                 alt="Feature icon" />
                        </div>
                        <div class="card__body">
                            <h3 class="card__title" th:text="${feature.name}">Feature Name</h3>
                            <p class="card__text" th:text="${feature.description}">
                                Feature description goes here.
                            </p>
                            <a class="btn btn--secondary btn--sm"
                               th:if="${feature.link != null}"
                               th:href="@{${feature.link}}"
                               href="#">
                                Learn More
                            </a>
                        </div>
                    </article>
                </div>

                <!-- Static fallback cards shown when no dynamic data is provided -->
                <div class="card-grid" th:if="${features == null or features.isEmpty()}">
                    <article class="card">
                        <div class="card__icon card__icon--placeholder" aria-hidden="true">⚡</div>
                        <div class="card__body">
                            <h3 class="card__title">Lightning Fast</h3>
                            <p class="card__text">Optimised for performance so your users never wait.</p>
                        </div>
                    </article>
                    <article class="card">
                        <div class="card__icon card__icon--placeholder" aria-hidden="true">🔒</div>
                        <div class="card__body">
                            <h3 class="card__title">Secure by Default</h3>
                            <p class="card__text">Industry-standard security baked in from day one.</p>
                        </div>
                    </article>
                    <article class="card">
                        <div class="card__icon card__icon--placeholder" aria-hidden="true">📱</div>
                        <div class="card__body">
                            <h3 class="card__title">Fully Responsive</h3>
                            <p class="card__text">Looks great on every device, from mobile to desktop.</p>
                        </div>
                    </article>
                    <article class="card">
                        <div class="card__icon card__icon--placeholder" aria-hidden="true">🛠</div>
                        <div class="card__body">
                            <h3 class="card__title">Easy to Customise</h3>
                            <p class="card__text">Flexible architecture that grows with your needs.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── SECONDARY / INFO SECTION ── -->
        <section class="info-section section section--alt" aria-labelledby="info-heading">
            <div class="container info-section__grid">
                <div class="info-section__text">
                    <h2 id="info-heading" class="section__title"
                        th:text="${infoTitle != null} ? ${infoTitle} : 'Ready to Get Started?'">
                        Ready to Get Started?
                    </h2>
                    <p class="section__body"
                       th:text="${infoBody != null} ? ${infoBody} : 'Join thousands of users who trust MyApp every day. Sign up in minutes — no credit card required.'">
                        Join thousands of users who trust MyApp every day.
                        Sign up in minutes — no credit card required.
                    </p>
                    <div class="info-section__actions">
                        <a class="btn btn--primary"
                           th:href="@{/register}"
                           href="/register">
                            Create Free Account
                        </a>
                        <a class="btn btn--ghost"
                           th:href="@{/login}"
                           href="/login">
                            Sign In
                        </a>
                    </div>
                </div>
                <div class="info-section__visual" aria-hidden="true">
                    <div class="info-section__illustration">
                        <span class="illustration-emoji">🚀</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── ANNOUNCEMENTS / DYNAMIC CONTENT (preserved th:if / th:each) ── -->
        <section class="announcements section"
                 th:if="${announcements != null and !announcements.isEmpty()}"
                 aria-labelledby="announcements-heading">
            <div class="container">
                <h2 id="announcements-heading" class="section__title">Latest News</h2>
                <ul class="announcements__list">
                    <li class="announcements__item" th:each="item : ${announcements}">
                        <span class="announcements__date"
                              th:text="${#temporals.format(item.publishedAt, 'dd MMM yyyy')}"
                              th:if="${item.publishedAt != null}">
                            01 Jan 2024
                        </span>
                        <a class="announcements__link"
                           th:href="@{${item.url}}"
                           th:text="${item.title}"
                           href="#">
                            Announcement Title
                        </a>
                    </li>
                </ul>
            </div>
        </section>

    </main>

    <!-- ===================== FOOTER ===================== -->
    <footer th:replace="~{fragments/layout :: footer}" class="site-footer">
        <!-- Replaced by layout fragment at runtime -->
        <div class="footer__inner container">
            <p class="footer__copy">
                &copy; <span th:text="${#dates.year(#dates.createNow())}">2024</span> MyApp.
                All rights reserved.
            </p>
            <nav class="footer__nav" aria-label="Footer navigation">
                <a class="footer__link" th:href="@{/privacy}" href="/privacy">Privacy Policy</a>
                <a class="footer__link" th:href="@{/terms}" href="/terms">Terms of Service</a>
                <a class="footer__link" th:href="@{/contact}" href="/contact">Contact</a>
            </nav>
        </div>
    </footer>

    <!-- ===================== SCRIPTS ===================== -->
    <script th:src="@{/js/main.js}" src="/js/main.js" defer></script>
</body>
</html>
/**
 * home.js - Mobile navigation toggle and interactive enhancements
 * Vanilla JS only — no external libraries or frameworks.
 */

document.addEventListener('DOMContentLoaded', function () {

  // ── Mobile Navigation Toggle ──────────────────────────────────────────────

  var menuToggle = document.querySelector('.nav-toggle');
  var navMenu    = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    // Ensure initial ARIA state is set
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('nav-open');

      // Keep aria-expanded in sync with the menu state
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the menu when the user clicks outside of it
    document.addEventListener('click', function (event) {
      var clickedInsideNav = navMenu.contains(event.target) ||
                             menuToggle.contains(event.target);

      if (!clickedInsideNav && navMenu.classList.contains('nav-open')) {
        navMenu.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close the menu when the Escape key is pressed
    document.addEventListener('keydown', function (event) {
      if ((event.key === 'Escape' || event.key === 'Esc') &&
          navMenu.classList.contains('nav-open')) {
        navMenu.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        // Return focus to the toggle button for accessibility
        menuToggle.focus();
      }
    });
  }

  // ── Future enhancements can be added below this line ─────────────────────

});