function addClassToggle(o, a, b, c) {
    new ScrollMagic.Scene(o).setClassToggle(a, b).addTo(c);
}

window.controller = new ScrollMagic.Controller();
addClassToggle({ offset: 20 }, ".dgw-nav", "dgw-nav-border", window.controller);

addClassToggle({ triggerElement: "#work-header" }, ".dgw-nav-primary", "dgw-opacity-0", window.controller);
addClassToggle({ triggerElement: "#work-header" }, "#nav-work", "dgw-opacity-1", window.controller);

addClassToggle({ triggerElement: "#tech-header" }, "#nav-work", "dgw-opacity-0", window.controller);
addClassToggle({ triggerElement: "#tech-header" }, "#nav-tech", "dgw-opacity-1", window.controller);

addClassToggle({ triggerElement: "#portfolio-header" }, "#nav-tech", "dgw-opacity-0", window.controller);
addClassToggle({ triggerElement: "#portfolio-header" }, "#nav-port", "dgw-opacity-1", window.controller);

addClassToggle({ triggerElement: "#contact-header" }, "#nav-port", "dgw-opacity-0", window.controller);
addClassToggle({ triggerElement: "#contact-header" }, "#nav-contact", "dgw-opacity-1", window.controller);