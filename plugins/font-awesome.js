import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faFacebookSquare,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

import {
  faBars,
  faSignInAlt,
  faFolderPlus,
  faCaretSquareRight,
  faCaretSquareLeft,
  faEnvelope,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

config.showMissingIcons = true;

library.add(
  faBars,
  faSignInAlt,
  faFolderPlus,
  faCaretSquareRight,
  faCaretSquareLeft,
  faEnvelope,
  faMapMarkedAlt,
  faFacebookSquare,
  faDiscord
);

Vue.component("fa-icon", FontAwesomeIcon);
