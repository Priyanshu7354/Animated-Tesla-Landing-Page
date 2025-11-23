function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const { TransitionGroup, CSSTransition } = ReactTransitionGroup;

/* Slides data (Updated for 2025 specs)
-------------------------------------------------------------- */
const roadsterFloorImg =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/roadster-floor.png",
  roadsterImg =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/roadster-car.png",
  truckFloorImg =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/truck-floor.png",
  truckImg =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/truck-car.png",
  cybertruckImg = "https://pngimg.com/uploads/tesla_cybertruck/tesla_cybertruck_PNG18.png",
  modelYImg = "https://www.pngkey.com/png/full/947-9476483_tesla-model-y-png.png"; // New: 2025 Model Y side view PNG

const slides = [
  {
    id: 1,
    name: "Model S",
    desc: "Redesigned for 2025 with Plaid power and unmatched luxury. The ultimate electric sedan.",
    color: "#0047fd",
    imgFloorUrl: truckFloorImg,
    imgUrl: truckImg,
    topSpeed: 200, // Updated 2025 Plaid
    mph: 1.99, // Updated
    mileRange: 368, // Updated
    bckgHeight: 300,
    carShadowHeight: 300,
    shadowOpacity: 0.2,
  },

  {
    id: 2,
    name: "Model X",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "#ee0101",
    imgFloorUrl: roadsterFloorImg,
    imgUrl: roadsterImg,
    topSpeed: 255,
    mph: 3,
    mileRange: 520,
    bckgHeight: 250,
    carShadowHeight: 0,
    shadowOpacity: 0.5,
  },

  {
    id: 3,
    name: "Model 3",
    desc: "The 2025 Highland refresh: Sleek, efficient, and now with even better range.",
    color: "#0047fd",
    imgFloorUrl: truckFloorImg,
    imgUrl: truckImg,
    topSpeed: 162, // Updated 2025
    mph: 2.9, // Updated Performance
    mileRange: 341, // Updated
    bckgHeight: 300,
    carShadowHeight: 250,
    shadowOpacity: 0.2,
  },

  {
    id: 4,
    name: "Roadster",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "#ee0101",
    imgFloorUrl: roadsterFloorImg,
    imgUrl: roadsterImg,
    topSpeed: 250,
    mph: 1.9,
    mileRange: 620,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5,
  },

  {
    id: 5,
    name: "Semi truck",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    color: "#0047fd",
    imgFloorUrl: truckFloorImg,
    imgUrl: truckImg,
    topSpeed: 65,
    mph: 5,
    mileRange: 500,
    bckgHeight: 390,
    carShadowHeight: 400,
    shadowOpacity: 0.2,
  },

  {
    id: 6,
    name: "Cybertruck",
    desc: "The apocalypse-proof electric pickup with bulletproof exoskeleton and 500+ mile range.",
    color: "#c0c0c0",
    imgFloorUrl: truckFloorImg,
    imgUrl: cybertruckImg,
    topSpeed: 112,
    mph: 2.9,
    mileRange: 340, // Updated 2025 dual-motor
    bckgHeight: 350,
    carShadowHeight: 320,
    shadowOpacity: 0.3,
  },

  // New: Model Y Juniper 2025
  {
    id: 7,
    name: "Model Y",
    desc: "The refreshed 2025 Juniper: More range, sharper design, and family-friendly versatility.",
    color: "#0066cc", // Electric blue
    imgFloorUrl: roadsterFloorImg, // Suitable for SUV
    imgUrl: modelYImg,
    topSpeed: 135,
    mph: 4.6,
    mileRange: 327, // Updated 2025 Long Range
    bckgHeight: 320,
    carShadowHeight: 280,
    shadowOpacity: 0.25,
  },
];

/* Set CSS Variables (unchanged) */
class SetCSSVariables extends React.Component {
  componentWillReceiveProps(props) {
    Object.keys(props.cssVariables).forEach(function (key) {
      document.documentElement.style.setProperty(key, props.cssVariables[key]);
    });
  }

  render() {
    return this.props.children;
  }
}

_defineProperty(
  SetCSSVariables,
  "PropTypes",
  { cssVariables: PropTypes.object.isRequired, className: PropTypes.string },
);

/* Slide aside (unchanged) */
function SlideAside(props) {
  const activeCar = props.activeCar;
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "tesla-slide-aside" },
    React.createElement(
      "h1",
      { className: "tesla-slide-aside__wholename" },
      React.createElement("span", null, "Tesla"),
      React.createElement(
        TransitionGroup,
        {
          component: "span",
          className: "tesla-slide-aside__name",
        },
        React.createElement(
          CSSTransition,
          {
            key: activeCar.name,
            timeout: { enter: 700, exit: 900 }, // Snappier: Reduced timeouts
            className: "tesla-slide-aside__name-part",
            classNames: "tesla-slide-aside__name-part-",
            mountOnEnter: true,
            unmountOnExit: true,
          },
          React.createElement("span", null, activeCar.name),
        ),
      ),
    ),

    React.createElement(
      TransitionGroup,
      { className: "tesla-slide-aside__desc" },
      React.createElement(
        CSSTransition,
        {
          key: activeCar.desc,
          timeout: { enter: 800, exit: 1100 }, // Snappier
          className: "tesla-slide-aside__desc-text",
          classNames: "tesla-slide-aside__desc-text-",
          mountOnEnter: true,
          unmountOnExit: true,
        },
        React.createElement("p", null, activeCar.desc),
      ),
    ),

    React.createElement(
      "div",
      { className: "tesla-slide-aside__button" },
      React.createElement(
        "button",
        { className: "button" },
        "Reserve now",
      ),

      React.createElement(
        TransitionGroup,
        null,
        React.createElement(
          CSSTransition,
          {
            key: activeCar.color,
            timeout: { enter: 700, exit: 900 }, // Snappier
            mountOnEnter: true,
            unmountOnExit: true,
            classNames: "button__border-",
          },
          React.createElement(
            SetCSSVariables,
            { cssVariables: { "--btn-color": activeCar.color } },
            React.createElement("span", { className: "button__border" }),
          ),
        ),
      ),
    ),
  );
}

SlideAside.PropTypes = {
  activeCar: PropTypes.object.isRequired,
};

/* Slide animate values (unchanged, but delays tweaked in SlideParams) */
function animate(render, duration, easing, next = () => null) {
  const start = Date.now();

  (function loop() {
    const current = Date.now(),
      delta = current - start,
      step = delta / duration;

    if (step > 1) {
      render(1);
      next();
    } else {
      requestAnimationFrame(loop);
      render(easing(step * 2));
    }
  })();
}

const myEasing = BezierEasing(0.4, -0.7, 0.1, 1.5);

class AnimValue extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "node", null);
    _defineProperty(this, "timeout", null);
    _defineProperty(
      this,
      "setValue",
      (value, step) => {
        if (!this.node) {
          return;
        }

        if (step === 1) {
          this.node.style.opacity = 1;
        } else {
          this.node.style.opacity = 0.7;
        }

        this.node.innerHTML = value;
      },
    );
  }
  animate(previousValue, newValue, applyFn) {
    window.clearTimeout(this.timeout);
    const diff = newValue - previousValue;
    const renderFunction = (step) => {
      this.timeout = setTimeout(() => {
        applyFn(
          this.props.transformFn(previousValue + diff * step, step),
          step,
        );
      }, this.props.delay);
    };
    animate(renderFunction, this.props.duration, myEasing);
  }

  componentDidMount() {
    this.animate(0, this.props.value, this.setValue);
  }

  componentWillReceiveProps(props) {
    let previousValue = this.props.value;

    if (previousValue !== props.value) {
      this.animate(previousValue, props.value, this.setValue);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }

  render() {
    return /*#__PURE__*/ React.createElement("span", {
      className: this.props.className,
      children: "0",
      ref: (node) => (this.node = node),
    });
  }
}
_defineProperty(AnimValue, "defaultProps", {
  delay: 0,
  duration: 700, // Snappier default
  transformFn: (value) => Math.floor(value),
});

class AnimateValue extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(AnimValue, {
      className: this.props.className,
      delay: this.props.delay,
      value: this.props.value,
      transformFn: (value, step) =>
        step === 1
          ? value % 1 != 0
            ? value.toFixed(1)
            : value
          : Math.abs(Math.floor(value)),
    });
  }
}

let DELAY_TOP_SPEED = 150, // Snappier
  DELAY_MPH = 500,
  DELAY_MILE_RANG = 900;

class SlideParams extends React.Component {
  componentWillReceiveProps(props) {
    if (!props.animationForward) {
      DELAY_TOP_SPEED = 900;
      DELAY_MILE_RANG = 150;
    } else {
      DELAY_TOP_SPEED = 150;
      DELAY_MILE_RANG = 900;
    }
  }

  render() {
    const { activeCar } = this.props;

    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "tesla-slide-params" },
      React.createElement(
        "ul",
        { className: "tesla-slide-params__list" },
        React.createElement(
          "li",
          { className: "tesla-slide-params__item" },
          React.createElement(
            "div",
            { className: "tesla-slide-params__wrapper" },
            React.createElement(
              "span",
              { className: "tesla-slide-params__prefix" },
              "+",
            ),
            React.createElement(AnimateValue, {
              className: "tesla-slide-params__value",
              value: activeCar.topSpeed,
              delay: DELAY_TOP_SPEED,
            }),
            React.createElement(
              "span",
              { className: "tesla-slide-params__sufix" },
              "mph",
            ),
          ),

          React.createElement(
            "p",
            { className: "tesla-slide-params__name" },
            "Top speed",
          ),
        ),

        React.createElement(
          "li",
          { className: "tesla-slide-params__item" },
          React.createElement(
            "div",
            { className: "tesla-slide-params__wrapper" },
            React.createElement(AnimateValue, {
              className: "tesla-slide-params__value",
              value: activeCar.mph,
              delay: DELAY_MPH,
            }),
            React.createElement(
              "span",
              { className: "tesla-slide-params__sufix" },
              "s",
            ),
          ),

          React.createElement(
            "p",
            { className: "tesla-slide-params__name" },
            "0-60 mph",
          ),
        ),

        React.createElement(
          "li",
          { className: "tesla-slide-params__item" },
          React.createElement(
            "div",
            { className: "tesla-slide-params__wrapper" },
            React.createElement(AnimateValue, {
              className: "tesla-slide-params__value",
              value: activeCar.mileRange,
              delay: DELAY_MILE_RANG,
            }),
            React.createElement(
              "span",
              { className: "tesla-slide-params__sufix" },
              "mi",
            ),
          ),

          React.createElement(
            "p",
            { className: "tesla-slide-params__name" },
            "Mile Range",
          ),
        ),
      ),
    );
  }
}
_defineProperty(SlideParams, "PropTypes", {
  activeCar: PropTypes.object.isRequired,
  animationForward: PropTypes.bool.isRequired,
});

class Slide extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(
      this,
      "handleEnter",
      (e) => {
        this.props.setAnimationState(this.props.ANIMATION_PHASES.STOP);
      },
    );
  }

  render() {
    const { activeSlide, animationForward } = this.props;

    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: `tesla-slide ${animationForward ? "animation-forward" : "animation-back"}`,
      },
      React.createElement(SlideAside, { activeCar: activeSlide }),

      React.createElement(
        TransitionGroup,
        null,
        React.createElement(
          CSSTransition,
          {
            key: activeSlide.name,
            timeout: { enter: 700, exit: 900 }, // Snappier
            classNames: "tesla-slide__bckg-",
            mountOnEnter: true,
            unmountOnExit: true,
          },
          React.createElement(
            SetCSSVariables,
            {
              cssVariables: {
                "--car-color": activeSlide.color,
                "--bckg-height": activeSlide.bckgHeight + "px",
                "--shadow-opacity": activeSlide.shadowOpacity,
                "--car-shadow-height": activeSlide.carShadowHeight + "px",
              },
            },
            React.createElement(
              "div",
              { className: "tesla-slide__bckg" },
              React.createElement("div", {
                className: "tesla-slide__bckg-fill",
              }),
            ),
          ),
        ),
      ),

      React.createElement(
        TransitionGroup,
        null,
        React.createElement(
          CSSTransition,
          {
            key: activeSlide.name,
            timeout: { enter: 600, exit: 1000 }, // Snappier enter
            classNames: "tesla-slide__img-",
            mountOnEnter: true,
            unmountOnExit: true,
            onEntered: this.handleEnter,
          },
          React.createElement(
            "div",
            { className: "tesla-slide__img" },
            React.createElement("img", {
              className: "tesla-slide__img-floor",
              src: activeSlide.imgFloorUrl,
              alt: "",
            }),
            React.createElement("img", {
              className: "tesla-slide__img-car",
              src: activeSlide.imgUrl,
              alt: "",
            }),
          ),
        ),
      ),

      React.createElement(SlideParams, {
        activeCar: activeSlide,
        animationForward: animationForward,
      }),
    );
  }
}
_defineProperty(Slide, "PropTypes", {
  activeSlide: PropTypes.object.isRequired,
  animationForward: PropTypes.bool.isRequired,
  setAnimationState: PropTypes.func.isRequired,
  ANIMATION_PHASES: PropTypes.object.isRequired,
});

class SliderNavigation extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "tesla-slider-navigation" },
      React.createElement(
        "ul",
        { className: "tesla-slider-navigation__list" },
        this.props.carsNames.map((car) =>
          React.createElement(
            "li",
            {
              key: car.id,
              className: "tesla-slider-navigation__item",
            },
            React.createElement(
              "a",
              {
                href: "#",
                onClick: (event) => {
                  event.preventDefault();
                  this.props.setActiveSlide(this.props.carsNames.indexOf(car));
                },
                className: `tesla-slider-navigation__link ${
                  this.props.carsNames[this.props.activeSlide] === car
                    ? "tesla-slider-navigation__link--active"
                    : ""
                }`,
                style: {
                  color:
                    this.props.carsNames[this.props.activeSlide] === car
                      ? car.color
                      : "",
                },
              },
              car.name,
            ),
          ),
        ),
      ),
    );
  }
}
_defineProperty(SliderNavigation, "PropTypes", {
  setActiveSlide: PropTypes.func.isRequired,
  carsNames: PropTypes.array.isRequired,
});

const logoTesla =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/logoTesla.svg",
  mouseImg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/mouse.svg",
  hamburger =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/hamburger.svg";

/* Slider (Initial active: Model Y) */
const ANIMATION_PHASES = {
  PENDING: "PENDING",
  STOP: "STOP",
};

class Slider extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      activeSlide: 6, // Start with Model Y
      animationForward: true,
      slidesCount: slides.length,
      animationState: null,
    });
    _defineProperty(
      this,
      "slider",
      {
        header: "",
        content: "",
      },
    );
    _defineProperty(
      this,
      "setAnimationState",
      (animationState) => this.setState({ animationState }),
    );
    _defineProperty(
      this,
      "setActiveSlide",
      (slideId) => {
        this.setState({
          activeSlide: slideId,
          animationForward: this.state.activeSlide < slideId ? true : false,
        });

        this.setAnimationState(ANIMATION_PHASES.PENDING);
      },
    );
    _defineProperty(this, "timeout", null);
    _defineProperty(
      this,
      "handleScroll",
      (e) => {
        let sliderHeight = this.slider.content.clientHeight,
          headerHeight = this.slider.header.clientHeight;

        if (window.innerHeight < sliderHeight + headerHeight) {
          return;
        }

        e.preventDefault();

        window.clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          if (e.deltaY < 0 && this.state.activeSlide !== 0) {
            this.setActiveSlide(this.state.activeSlide - 1);
          }
          if (
            e.deltaY > 0 &&
            this.state.activeSlide !== this.state.slidesCount - 1
          ) {
            this.setActiveSlide(this.state.activeSlide + 1);
          }
        }, 50);
      },
    );
  }
  componentDidMount() {
    this.setAnimationState(ANIMATION_PHASES.PENDING);
    this.slider.header = document.querySelector(".tesla-header");
    this.slider.content = document.querySelector(".tesla-slider");
    document.body.addEventListener("wheel", this.handleScroll, { passive: false }); // Better for touch
  }

  componentWillUnmount() {
    document.body.removeEventListener("wheel", this.handleScroll);
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "tesla-slider" },
      React.createElement(SliderNavigation, {
        activeSlide: this.state.activeSlide,
        setActiveSlide: this.setActiveSlide,
        carsNames: slides.map((slide) => ({
          id: slide.id,
          name: slide.name,
          color: slide.color,
        })),
      }),

      React.createElement(Slide, {
        animationForward: this.state.animationForward,
        activeSlide: slides[this.state.activeSlide],
        animationState: this.state.animationState,
        setAnimationState: this.setAnimationState,
        ANIMATION_PHASES: ANIMATION_PHASES,
      }),

      React.createElement(
        "div",
        { className: "tesla-slider__scroll" },
        React.createElement("img", { src: mouseImg, alt: "" }),
      ),
    );
  }
}

/* Header (unchanged) */
function Header() {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "tesla-header" },
    React.createElement(
      "div",
      { className: "tesla-header__logo" },
      React.createElement("img", { src: logoTesla, alt: "" }),
    ),

    React.createElement(
      "div",
      { className: "tesla-header__nav" },
      React.createElement("img", { src: hamburger, alt: "" }),
    ),
  );
}

/* New: Footer Component */
function Footer() {
  return /*#__PURE__*/ React.createElement(
    "footer",
    { className: "tesla-footer" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "p",
        null,
        "© 2025 Tesla, Inc. All rights reserved.",
      ),
      React.createElement(
        "ul",
        { className: "tesla-footer__links" },
        React.createElement(
          "li",
          null,
          React.createElement("a", { href: "#", style: { color: "#fff" } }, "Privacy"),
        ),
        React.createElement(
          "li",
          null,
          React.createElement("a", { href: "#", style: { color: "#fff" } }, "Terms"),
        ),
        React.createElement(
          "li",
          null,
          React.createElement("a", { href: "#", style: { color: "#fff" } }, "Contact"),
        ),
      ),
    ),
  );
}

/* App (Added Footer) */
class App extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "container" },
      React.createElement(Header, null),
      React.createElement(Slider, null),
      React.createElement(Footer, null), // New
    );
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("root"),
);