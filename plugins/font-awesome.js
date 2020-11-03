import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faSignInAlt,
  faFolderPlus
} from "@fortawesome/free-solid-svg-icons";

config.showMissingIcons = true;

library.add(
  faBars,

  faSignInAlt,
  faFolderPlus
);

Vue.component("fa-icon", FontAwesomeIcon);
