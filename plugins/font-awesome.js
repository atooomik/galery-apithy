import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import {
  faBars,
  faSignInAlt,
  faFolderPlus,
  faCaretSquareRight,
  faCaretSquareLeft
} from "@fortawesome/free-solid-svg-icons";

config.showMissingIcons = true;

library.add(
  faBars,
  faSignInAlt,
  faFolderPlus,
  faCaretSquareRight,
  faCaretSquareLeft
);

Vue.component("fa-icon", FontAwesomeIcon);
