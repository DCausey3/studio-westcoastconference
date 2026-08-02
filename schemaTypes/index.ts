import district from './district';
import officer from './officer';
import event from './event';
import church from './church';
import siteSettings from './siteSettings';
import servedCounty from './servedCounty';
import aboutPage from './aboutPage';
import missionPage from './missionPage';
import historyPage from './historyPage';
import leadershipPage from './leadershipPage';
import bylawsPage from './bylawsPage';
import resourceCategory from './resourceCategory';
import {scholarship} from "./scholarship";
import {districtDocument} from "./districtdocument";
import galleryImage from "./GalleryImage";

export const schemaTypes = [
  // Collections
  district,
  officer,
  event,
  church,
  servedCounty,
  resourceCategory,
  // Singletons
  siteSettings,
  aboutPage,
  missionPage,
  historyPage,
  leadershipPage,
  bylawsPage,
    scholarship,
    districtDocument,
    galleryImage
];
