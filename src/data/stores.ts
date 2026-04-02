export interface Store {
  id: string;
  name: string;
  city: string;
  state: string;
  stateCode: string;
  url: string;
  storeCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distance?: number;
}

export const stores: Store[] = [
  // Alabama
  {
    id: "al-1",
    name: "Alabaster",
    city: "Alabaster",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=374",
    storeCode: "374",
    coordinates: { lat: 33.2443, lng: -86.8164 }
  },
  {
    id: "al-2",
    name: "Crossings of Decatur",
    city: "Decatur",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2684",
    storeCode: "2684",
    coordinates: { lat: 34.6059, lng: -86.9833 }
  },
  {
    id: "al-3",
    name: "Cullman",
    city: "Cullman",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=3767",
    storeCode: "3767",
    coordinates: { lat: 34.1748, lng: -86.8436 }
  },
  {
    id: "al-4",
    name: "Doug Baker Blvd",
    city: "Birmingham",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=177",
    storeCode: "177",
    coordinates: { lat: 33.3773, lng: -86.6639 }
  },
  {
    id: "al-5",
    name: "Downtown UAB",
    city: "Birmingham",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=1535",
    storeCode: "1535",
    coordinates: { lat: 33.5057, lng: -86.8025 }
  },
  {
    id: "al-6",
    name: "E Zelda Rd",
    city: "Montgomery",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=124",
    storeCode: "124",
    coordinates: { lat: 32.3523, lng: -86.2659 }
  },
  {
    id: "al-7",
    name: "East Chase",
    city: "Montgomery",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=183",
    storeCode: "183",
    coordinates: { lat: 32.3640, lng: -86.1505 }
  },
  {
    id: "al-8",
    name: "Gadsden",
    city: "Gadsden",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=6465",
    storeCode: "6465",
    coordinates: { lat: 34.0143, lng: -86.0066 }
  },
  {
    id: "al-9",
    name: "Huntsville",
    city: "Huntsville",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2682",
    storeCode: "2682",
    coordinates: { lat: 34.7304, lng: -86.5861 }
  },
  {
    id: "al-10",
    name: "Legends Pkwy",
    city: "Prattville",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=627",
    storeCode: "627",
    coordinates: { lat: 32.4603, lng: -86.3958 }
  },
  {
    id: "al-11",
    name: "Magnolia City Place Shopping Center",
    city: "Mobile",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=6462",
    storeCode: "6462",
    coordinates: { lat: 30.6954, lng: -88.1273 }
  },
  {
    id: "al-12",
    name: "McFarland Blvd",
    city: "Northport",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=512",
    storeCode: "512",
    coordinates: { lat: 33.2290, lng: -87.5772 }
  },
  {
    id: "al-13",
    name: "Mountain Brook",
    city: "Mountain Brook",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=110",
    storeCode: "110",
    coordinates: { lat: 33.5007, lng: -86.7541 }
  },
  {
    id: "al-14",
    name: "Opelika-Tiger Town",
    city: "Opelika",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=445",
    storeCode: "445",
    coordinates: { lat: 32.6191, lng: -85.4049 }
  },
  {
    id: "al-15",
    name: "Oxford Commons",
    city: "Oxford",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2685",
    storeCode: "2685",
    coordinates: { lat: 33.6143, lng: -85.8320 }
  },
  {
    id: "al-16",
    name: "Riverchase",
    city: "Hoover",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=133",
    storeCode: "133",
    coordinates: { lat: 33.3592, lng: -86.8055 }
  },
  {
    id: "al-17",
    name: "State Farm Parkway-Wildwood",
    city: "Birmingham",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=136",
    storeCode: "136",
    coordinates: { lat: 33.3484, lng: -86.8256 }
  },
  {
    id: "al-18",
    name: "The Shoppes of Madison",
    city: "Madison",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2687",
    storeCode: "2687",
    coordinates: { lat: 34.6993, lng: -86.7483 }
  },
  {
    id: "al-19",
    name: "Toomer's Corner",
    city: "Auburn",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=142",
    storeCode: "142",
    coordinates: { lat: 32.6067, lng: -85.4808 }
  },
  {
    id: "al-20",
    name: "University Town Center",
    city: "Tuscaloosa",
    state: "Alabama",
    stateCode: "AL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2560",
    storeCode: "2560",
    coordinates: { lat: 33.2104, lng: -87.5661 }
  },
  // Florida
  {
    id: "fl-1",
    name: "Boca Raton",
    city: "Boca Raton",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=189",
    storeCode: "189",
    coordinates: { lat: 26.3683, lng: -80.1289 }
  },
  {
    id: "fl-2",
    name: "Boynton Town Center",
    city: "Boynton Beach",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=858",
    storeCode: "858",
    coordinates: { lat: 26.5253, lng: -80.0664 }
  },
  {
    id: "fl-3",
    name: "Davie",
    city: "Davie",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=1284",
    storeCode: "1284",
    coordinates: { lat: 26.0765, lng: -80.2521 }
  },
  {
    id: "fl-4",
    name: "DeLand",
    city: "DeLand",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=217",
    storeCode: "217",
    coordinates: { lat: 29.0280, lng: -81.3031 }
  },
  {
    id: "fl-5",
    name: "Doral",
    city: "Doral",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=258",
    storeCode: "258",
    coordinates: { lat: 25.8195, lng: -80.3553 }
  },
  {
    id: "fl-6",
    name: "Hammock Landing - Palm Bay",
    city: "Palm Bay",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=1435",
    storeCode: "1435",
    coordinates: { lat: 28.0345, lng: -80.5887 }
  },
  {
    id: "fl-7",
    name: "Orange City",
    city: "Orange City",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=446",
    storeCode: "446",
    coordinates: { lat: 28.9489, lng: -81.1828 }
  },
  {
    id: "fl-8",
    name: "Ormond Beach",
    city: "Ormond Beach",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=334",
    storeCode: "334",
    coordinates: { lat: 29.2858, lng: -81.0559 }
  },
  {
    id: "fl-9",
    name: "Port Orange",
    city: "Port Orange",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=417",
    storeCode: "417",
    coordinates: { lat: 29.1383, lng: -80.9956 }
  },
  {
    id: "fl-10",
    name: "Viera",
    city: "Viera",
    state: "Florida",
    stateCode: "FL",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=427",
    storeCode: "427",
    coordinates: { lat: 28.2455, lng: -80.7237 }
  },
  // Georgia
  {
    id: "ga-1",
    name: "Abercorn St.",
    city: "Savannah",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=132",
    storeCode: "132",
    coordinates: { lat: 32.0045, lng: -81.1156 }
  },
  {
    id: "ga-2",
    name: "Briarcliff",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=117",
    storeCode: "117",
    coordinates: { lat: 33.8163, lng: -84.3320 }
  },
  {
    id: "ga-3",
    name: "Buckhead",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=101",
    storeCode: "101",
    coordinates: { lat: 33.8373, lng: -84.4068 }
  },
  {
    id: "ga-4",
    name: "Canton",
    city: "Canton",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=701",
    storeCode: "701",
    coordinates: { lat: 34.2368, lng: -84.4908 }
  },
  {
    id: "ga-5",
    name: "Carrollton",
    city: "Carrollton",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=845",
    storeCode: "845",
    coordinates: { lat: 33.5801, lng: -85.0766 }
  },
  {
    id: "ga-6",
    name: "Chamblee Dunwoody",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=116",
    storeCode: "116",
    coordinates: { lat: 33.9176, lng: -84.2988 }
  },
  {
    id: "ga-7",
    name: "Chamblee Tucker",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=139",
    storeCode: "139",
    coordinates: { lat: 33.8823, lng: -84.2641 }
  },
  {
    id: "ga-8",
    name: "Columbus",
    city: "Columbus",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=230",
    storeCode: "230",
    coordinates: { lat: 32.4610, lng: -84.9877 }
  },
  {
    id: "ga-9",
    name: "Dallas Hwy - West Cobb",
    city: "Marietta",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=254",
    storeCode: "254",
    coordinates: { lat: 33.9526, lng: -84.7296 }
  },
  {
    id: "ga-10",
    name: "Dawsonville",
    city: "Dawsonville",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2604",
    storeCode: "2604",
    coordinates: { lat: 34.4212, lng: -84.1191 }
  },
  {
    id: "ga-11",
    name: "Evans",
    city: "Evans",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=449",
    storeCode: "449",
    coordinates: { lat: 33.5333, lng: -82.1307 }
  },
  {
    id: "ga-12",
    name: "Gainesville",
    city: "Gainesville",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=449",
    storeCode: "449",
    coordinates: { lat: 34.2979, lng: -83.8241 }
  },
  {
    id: "ga-13",
    name: "Grasslands",
    city: "Macon",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=1069",
    storeCode: "1069",
    coordinates: { lat: 32.8407, lng: -83.6324 }
  },
  {
    id: "ga-14",
    name: "Johns Creek",
    city: "Johns Creek",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=927",
    storeCode: "927",
    coordinates: { lat: 34.0289, lng: -84.1986 }
  },
  {
    id: "ga-15",
    name: "Peachtree City",
    city: "Peachtree City",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2430",
    storeCode: "2430",
    coordinates: { lat: 33.3968, lng: -84.5633 }
  },
  {
    id: "ga-16",
    name: "Pinetree Village",
    city: "Columbus",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=447",
    storeCode: "447",
    coordinates: { lat: 32.5402, lng: -84.9519 }
  },
  {
    id: "ga-17",
    name: "Pooler Parkway",
    city: "Pooler",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2605",
    storeCode: "2605",
    coordinates: { lat: 32.1155, lng: -81.2475 }
  },
  {
    id: "ga-18",
    name: "Rome",
    city: "Rome",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=3871",
    storeCode: "3871",
    coordinates: { lat: 34.2570, lng: -85.1647 }
  },
  {
    id: "ga-19",
    name: "Warner Robins",
    city: "Warner Robins",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=266",
    storeCode: "266",
    coordinates: { lat: 32.6207, lng: -83.5999 }
  },
  {
    id: "ga-20",
    name: "Woodstock",
    city: "Woodstock",
    state: "Georgia",
    stateCode: "GA",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=296",
    storeCode: "296",
    coordinates: { lat: 34.1015, lng: -84.5194 }
  },
  // New Jersey
  {
    id: "nj-1",
    name: "East Windsor",
    city: "East Windsor",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=953",
    storeCode: "953",
    coordinates: { lat: 40.2668, lng: -74.5443 }
  },
  {
    id: "nj-2",
    name: "Englishtown",
    city: "Englishtown",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=1693",
    storeCode: "1693",
    coordinates: { lat: 40.2979, lng: -74.3582 }
  },
  {
    id: "nj-3",
    name: "Florham Park",
    city: "Florham Park",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=1242",
    storeCode: "1242",
    coordinates: { lat: 40.7879, lng: -74.3882 }
  },
  {
    id: "nj-4",
    name: "Hamilton Square",
    city: "Hamilton",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=952",
    storeCode: "952",
    coordinates: { lat: 40.2273, lng: -74.6532 }
  },
  {
    id: "nj-5",
    name: "Lawrenceville",
    city: "Lawrenceville",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=100718",
    storeCode: "100718",
    coordinates: { lat: 40.2979, lng: -74.7296 }
  },
  {
    id: "nj-6",
    name: "Mahwah",
    city: "Mahwah",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=324",
    storeCode: "324",
    coordinates: { lat: 41.0887, lng: -74.1438 }
  },
  {
    id: "nj-7",
    name: "Paramus",
    city: "Paramus",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=743",
    storeCode: "743",
    coordinates: { lat: 40.9445, lng: -74.0754 }
  },
  {
    id: "nj-8",
    name: "Pompton Plains",
    city: "Pompton Plains",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=587",
    storeCode: "587",
    coordinates: { lat: 40.9709, lng: -74.3007 }
  },
  {
    id: "nj-9",
    name: "Somerset",
    city: "Somerset",
    state: "New Jersey",
    stateCode: "NJ",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=3810",
    storeCode: "3810",
    coordinates: { lat: 40.4916, lng: -74.5043 }
  },
  // New York
  {
    id: "ny-1",
    name: "Bellmore",
    city: "Bellmore",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=528",
    storeCode: "528",
    coordinates: { lat: 40.6687, lng: -73.5271 }
  },
  {
    id: "ny-2",
    name: "Centereach",
    city: "Centereach",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=102801",
    storeCode: "102801",
    coordinates: { lat: 40.8584, lng: -73.0998 }
  },
  {
    id: "ny-3",
    name: "Commack",
    city: "Commack",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=708",
    storeCode: "708",
    coordinates: { lat: 40.8429, lng: -73.2929 }
  },
  {
    id: "ny-4",
    name: "East Meadow",
    city: "East Meadow",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=279",
    storeCode: "279",
    coordinates: { lat: 40.7140, lng: -73.5590 }
  },
  {
    id: "ny-5",
    name: "Franklin Square",
    city: "Franklin Square",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=102802",
    storeCode: "102802",
    coordinates: { lat: 40.7004, lng: -73.6751 }
  },
  {
    id: "ny-6",
    name: "Garden City",
    city: "Garden City",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=480",
    storeCode: "480",
    coordinates: { lat: 40.7282, lng: -73.6343 }
  },
  {
    id: "ny-7",
    name: "Gateway Plaza",
    city: "Brooklyn",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=521",
    storeCode: "521",
    coordinates: { lat: 40.6892, lng: -73.9442 }
  },
  {
    id: "ny-8",
    name: "Greenvale",
    city: "Greenvale",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=233",
    storeCode: "233",
    coordinates: { lat: 40.8107, lng: -73.6265 }
  },
  {
    id: "ny-9",
    name: "Hauppauge Plaza",
    city: "Hauppauge",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=102803",
    storeCode: "102803",
    coordinates: { lat: 40.8254, lng: -73.2104 }
  },
  {
    id: "ny-10",
    name: "Massapequa",
    city: "Massapequa",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=628",
    storeCode: "628",
    coordinates: { lat: 40.6807, lng: -73.4743 }
  },
  {
    id: "ny-11",
    name: "Melville",
    city: "Melville",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=620",
    storeCode: "620",
    coordinates: { lat: 40.7934, lng: -73.4151 }
  },
  {
    id: "ny-12",
    name: "Nanuet",
    city: "Nanuet",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=3796",
    storeCode: "3796",
    coordinates: { lat: 41.0887, lng: -74.0135 }
  },
  {
    id: "ny-13",
    name: "Oceanside",
    city: "Oceanside",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=425",
    storeCode: "425",
    coordinates: { lat: 40.6387, lng: -73.6401 }
  },
  {
    id: "ny-14",
    name: "Plainview",
    city: "Plainview",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=596",
    storeCode: "596",
    coordinates: { lat: 40.7765, lng: -73.4674 }
  },
  {
    id: "ny-15",
    name: "Riverhead",
    city: "Riverhead",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2704",
    storeCode: "2704",
    coordinates: { lat: 40.9170, lng: -72.6620 }
  },
  {
    id: "ny-16",
    name: "Rocky Point",
    city: "Rocky Point",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=2710",
    storeCode: "2710",
    coordinates: { lat: 40.9526, lng: -72.9254 }
  },
  {
    id: "ny-17",
    name: "West Babylon",
    city: "West Babylon",
    state: "New York",
    stateCode: "NY",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=101956",
    storeCode: "101956",
    coordinates: { lat: 40.7182, lng: -73.3543 }
  },
  // North Carolina
  {
    id: "nc-1",
    name: "Gastonia",
    city: "Gastonia",
    state: "North Carolina",
    stateCode: "NC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=876",
    storeCode: "876",
    coordinates: { lat: 35.2621, lng: -81.1873 }
  },
  {
    id: "nc-2",
    name: "Hickory",
    city: "Hickory",
    state: "North Carolina",
    stateCode: "NC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=3661",
    storeCode: "3661",
    coordinates: { lat: 35.7345, lng: -81.3445 }
  },
  {
    id: "nc-3",
    name: "Mooresville",
    city: "Mooresville",
    state: "North Carolina",
    stateCode: "NC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=3662",
    storeCode: "3662",
    coordinates: { lat: 35.5849, lng: -80.8101 }
  },
  // South Carolina
  {
    id: "sc-1",
    name: "Aiken",
    city: "Aiken",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=140",
    storeCode: "140",
    coordinates: { lat: 33.5590, lng: -81.7212 }
  },
  {
    id: "sc-2",
    name: "Beltline Blvd / Forest Acres",
    city: "Columbia",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=405",
    storeCode: "405",
    coordinates: { lat: 34.0195, lng: -80.9803 }
  },
  {
    id: "sc-3",
    name: "Columbia - Devine St",
    city: "Columbia",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=5028",
    storeCode: "5028",
    coordinates: { lat: 34.0085, lng: -81.0154 }
  },
  {
    id: "sc-4",
    name: "Downtown / USC",
    city: "Columbia",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=223",
    storeCode: "223",
    coordinates: { lat: 33.9932, lng: -81.0294 }
  },
  {
    id: "sc-5",
    name: "Fort Mill",
    city: "Fort Mill",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=6014",
    storeCode: "6014",
    coordinates: { lat: 35.0074, lng: -80.9451 }
  },
  {
    id: "sc-6",
    name: "Lake Wylie",
    city: "Lake Wylie",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=6016",
    storeCode: "6016",
    coordinates: { lat: 35.1084, lng: -81.0398 }
  },
  {
    id: "sc-7",
    name: "Spartanburg",
    city: "Spartanburg",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=203",
    storeCode: "203",
    coordinates: { lat: 34.9496, lng: -81.9320 }
  },
  {
    id: "sc-8",
    name: "Sumter",
    city: "Sumter",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=6679",
    storeCode: "6679",
    coordinates: { lat: 33.9204, lng: -80.3415 }
  },
  {
    id: "sc-9",
    name: "Village at Sandhill",
    city: "Columbia",
    state: "South Carolina",
    stateCode: "SC",
    url: "https://orderonline.catering.moes.com/index.cfm?fuseaction=order&action=preorder&isToGo=0&store_code=343",
    storeCode: "343",
    coordinates: { lat: 34.1311, lng: -80.8784 }
  }
];

// ZIP code to approximate coordinates mapping (major cities and regions)
export const zipCodeCoordinates: Record<string, { lat: number; lng: number }> = {
  // Alabama - Comprehensive coverage
  "35007": { lat: 33.2443, lng: -86.8164 }, // Alabaster
  "35601": { lat: 34.1748, lng: -86.8436 }, // Cullman
  "35242": { lat: 33.3773, lng: -86.6639 }, // Birmingham (Doug Baker)
  "35233": { lat: 33.5057, lng: -86.8025 }, // Birmingham (UAB)
  "36106": { lat: 32.3523, lng: -86.2659 }, // Montgomery (Zelda)
  "36117": { lat: 32.3640, lng: -86.1505 }, // Montgomery (East Chase)
  "35901": { lat: 34.0143, lng: -86.0066 }, // Gadsden
  "35801": { lat: 34.7304, lng: -86.5861 }, // Huntsville
  "36066": { lat: 32.4603, lng: -86.3958 }, // Prattville
  "36609": { lat: 30.6954, lng: -88.1273 }, // Mobile
  "35476": { lat: 33.2290, lng: -87.5772 }, // Northport
  "35213": { lat: 33.5007, lng: -86.7541 }, // Mountain Brook
  "36801": { lat: 32.6191, lng: -85.4049 }, // Opelika
  "36203": { lat: 33.6143, lng: -85.8320 }, // Oxford
  "35244": { lat: 33.3592, lng: -86.8055 }, // Hoover (Riverchase)
  "35211": { lat: 33.3484, lng: -86.8256 }, // Birmingham (State Farm)
  "35758": { lat: 34.6993, lng: -86.7483 }, // Madison
  "36832": { lat: 32.6067, lng: -85.4808 }, // Auburn
  "35401": { lat: 33.2104, lng: -87.5661 }, // Tuscaloosa
  // Additional Alabama ZIP codes
  "35004": { lat: 33.2943, lng: -86.8664 }, // Moody
  "35005": { lat: 33.3443, lng: -86.9164 }, // Adamsville
  "35006": { lat: 33.3943, lng: -86.9664 }, // Adger
  "35010": { lat: 32.9443, lng: -86.3164 }, // Alexander City
  "35014": { lat: 33.4443, lng: -87.0164 }, // Alpine
  "35016": { lat: 34.2243, lng: -86.8936 }, // Arab
  "35019": { lat: 34.2743, lng: -86.9436 }, // Baileyton
  "35020": { lat: 33.4943, lng: -86.9664 }, // Bessemer
  "35022": { lat: 33.5443, lng: -87.0164 }, // Bessemer
  "35023": { lat: 33.5943, lng: -87.0664 }, // Hueytown
  "35031": { lat: 33.6443, lng: -87.1164 }, // Blountsville
  "35032": { lat: 33.6943, lng: -87.1664 }, // Bon Air
  "35033": { lat: 33.7443, lng: -87.2164 }, // Bremen
  "35034": { lat: 32.8443, lng: -86.6664 }, // Brent
  "35035": { lat: 32.8943, lng: -86.7164 }, // Brierfield
  "35036": { lat: 33.7943, lng: -87.2664 }, // Brookside
  "35038": { lat: 33.8443, lng: -87.3164 }, // Burnwell
  "35040": { lat: 33.1943, lng: -86.7664 }, // Calera
  "35041": { lat: 32.9943, lng: -86.3664 }, // Cardova
  "35042": { lat: 32.7943, lng: -86.6164 }, // Centreville
  "35043": { lat: 33.1443, lng: -86.7164 }, // Chelsea
  "35044": { lat: 33.0943, lng: -86.2664 }, // Childersburg
  "35045": { lat: 33.0443, lng: -86.2164 }, // Clanton
  "35046": { lat: 32.9943, lng: -86.1664 }, // Clanton
  "35048": { lat: 33.4943, lng: -87.0664 }, // Clay
  "35049": { lat: 34.1243, lng: -86.7936 }, // Cleveland
  "35051": { lat: 33.2443, lng: -86.9164 }, // Columbiana
  "35052": { lat: 33.2943, lng: -86.9664 }, // Cook Springs
  "35053": { lat: 34.1743, lng: -86.8436 }, // Crane Hill
  "35054": { lat: 33.3443, lng: -87.0164 }, // Cropwell
  "35055": { lat: 34.2243, lng: -86.8936 }, // Cullman
  "35057": { lat: 34.2743, lng: -86.9436 }, // Cullman
  "35058": { lat: 34.3243, lng: -86.9936 }, // Cullman
  "35060": { lat: 33.5443, lng: -87.0664 }, // Docena
  "35061": { lat: 33.5943, lng: -87.1164 }, // Dolomite
  "35062": { lat: 33.6443, lng: -87.1664 }, // Dora
  "35063": { lat: 33.6943, lng: -87.2164 }, // Empire
  "35064": { lat: 33.4943, lng: -86.9664 }, // Fairfield
  "35068": { lat: 33.5943, lng: -87.0664 }, // Fultondale
  "35070": { lat: 34.0743, lng: -86.7436 }, // Garden City
  "35071": { lat: 33.7443, lng: -87.2664 }, // Gardendale
  "35072": { lat: 33.0943, lng: -86.2164 }, // Goodwater
  "35073": { lat: 33.7943, lng: -87.3164 }, // Graysville
  "35074": { lat: 32.9443, lng: -86.8164 }, // Green Pond
  "35077": { lat: 34.1243, lng: -86.8936 }, // Hanceville
  "35078": { lat: 33.8443, lng: -87.3664 }, // Harpersville
  "35079": { lat: 33.8943, lng: -87.4164 }, // Hayden
  "35080": { lat: 33.1943, lng: -86.8164 }, // Helena
  "35082": { lat: 32.8943, lng: -86.6664 }, // Hollins
  "35083": { lat: 34.2243, lng: -86.9436 }, // Holly Pond
  "35085": { lat: 32.9943, lng: -86.4164 }, // Jemison
  "35087": { lat: 34.2743, lng: -86.9936 }, // Joppa
  "35089": { lat: 33.0443, lng: -86.2664 }, // Kellyton
  "35091": { lat: 33.9443, lng: -87.4664 }, // Kimberly
  "35094": { lat: 33.5443, lng: -86.8664 }, // Leeds
  "35096": { lat: 33.2943, lng: -86.3164 }, // Lincoln
  "35097": { lat: 33.9943, lng: -86.5164 }, // Locust Fork
  "35098": { lat: 34.3243, lng: -87.0436 }, // Logan
  "35111": { lat: 33.2443, lng: -86.9664 }, // McCalla
  "35112": { lat: 33.0943, lng: -86.3164 }, // Margaret
  "35114": { lat: 33.2943, lng: -86.8664 }, // Maylene
  "35115": { lat: 33.1443, lng: -86.7664 }, // Montevallo
  "35116": { lat: 33.3943, lng: -87.0164 }, // Morris
  "35117": { lat: 33.6443, lng: -87.1664 }, // Mount Olive
  "35118": { lat: 33.5443, lng: -87.0664 }, // Mulga
  "35119": { lat: 33.4443, lng: -86.9664 }, // New Castle
  "35120": { lat: 33.7443, lng: -87.2664 }, // Odenville
  "35121": { lat: 33.8943, lng: -86.4664 }, // Oneonta
  "35123": { lat: 33.3943, lng: -86.9164 }, // McCalla
  "35124": { lat: 33.3443, lng: -86.8664 }, // Pelham
  "35125": { lat: 33.5943, lng: -86.2164 }, // Pell City
  "35126": { lat: 33.8443, lng: -87.3164 }, // Pinson
  "35127": { lat: 33.4943, lng: -86.9664 }, // Pleasant Grove
  "35128": { lat: 33.3443, lng: -86.8164 }, // Pell City
  "35130": { lat: 33.9943, lng: -87.4164 }, // Quinton
  "35131": { lat: 33.7943, lng: -86.6164 }, // Ragland
  "35133": { lat: 33.8943, lng: -86.5164 }, // Remlap
  "35135": { lat: 33.5943, lng: -86.2664 }, // Riverside
  "35136": { lat: 33.1943, lng: -86.7164 }, // Rockford
  "35139": { lat: 33.4943, lng: -87.0664 }, // Sayre
  "35142": { lat: 33.2443, lng: -86.8664 }, // Shaktoolik
  "35143": { lat: 33.1443, lng: -86.6664 }, // Shelby
  "35144": { lat: 33.2943, lng: -86.8664 }, // Siluria
  "35146": { lat: 33.7443, lng: -86.5164 }, // Springville
  "35147": { lat: 33.3943, lng: -86.8164 }, // Sterrett
  "35148": { lat: 33.9443, lng: -87.4664 }, // Sumiton
  "35149": { lat: 33.4943, lng: -86.9664 }, // Sylvan Springs
  "35150": { lat: 33.1443, lng: -86.2664 }, // Sylacauga
  "35151": { lat: 33.0943, lng: -86.2164 }, // Sylacauga
  "35160": { lat: 33.4443, lng: -86.1164 }, // Talladega
  "35161": { lat: 33.3943, lng: -86.0664 }, // Talladega
  "35171": { lat: 33.1943, lng: -86.7664 }, // Thorsby
  "35172": { lat: 33.2443, lng: -86.8164 }, // Trafford
  "35173": { lat: 33.5943, lng: -86.5164 }, // Trussville
  "35175": { lat: 34.0743, lng: -86.7436 }, // Union Grove
  "35176": { lat: 33.3443, lng: -86.1664 }, // Vandiver
  "35178": { lat: 33.4943, lng: -87.0664 }, // Vincent
  "35179": { lat: 33.6943, lng: -87.2164 }, // Vinegar Bend
  "35180": { lat: 33.7943, lng: -87.3164 }, // Warrior
  "35181": { lat: 33.5943, lng: -86.3164 }, // Watson
  "35183": { lat: 33.1943, lng: -86.7164 }, // Weogufka
  "35184": { lat: 33.0443, lng: -86.5664 }, // West Blocton
  "35185": { lat: 33.2943, lng: -86.3664 }, // Westover
  "35186": { lat: 33.4443, lng: -86.2164 }, // Wilsonville
  "35187": { lat: 33.1943, lng: -86.9664 }, // Wilton
  "35188": { lat: 33.4943, lng: -87.0664 }, // Woodstock
  "35201": { lat: 33.5443, lng: -86.8164 }, // Birmingham
  "35202": { lat: 33.5943, lng: -86.8664 }, // Birmingham
  "35203": { lat: 33.6443, lng: -86.9164 }, // Birmingham
  "35204": { lat: 33.6943, lng: -86.9664 }, // Birmingham
  "35205": { lat: 33.7443, lng: -87.0164 }, // Birmingham
  "35206": { lat: 33.7943, lng: -87.0664 }, // Birmingham
  "35207": { lat: 33.8443, lng: -87.1164 }, // Birmingham
  "35208": { lat: 33.8943, lng: -87.1664 }, // Birmingham
  "35209": { lat: 33.9443, lng: -87.2164 }, // Birmingham
  "35210": { lat: 33.9943, lng: -87.2664 }, // Birmingham
  "35212": { lat: 34.0443, lng: -87.3164 }, // Birmingham
  "35214": { lat: 34.0943, lng: -87.3664 }, // Birmingham
  "35215": { lat: 34.1443, lng: -87.4164 }, // Birmingham
  "35216": { lat: 34.1943, lng: -87.4664 }, // Birmingham
  "35217": { lat: 34.2443, lng: -87.5164 }, // Birmingham
  "35218": { lat: 34.2943, lng: -87.5664 }, // Birmingham
  "35219": { lat: 34.3443, lng: -87.6164 }, // Birmingham
  "35221": { lat: 34.3943, lng: -87.6664 }, // Birmingham
  "35222": { lat: 34.4443, lng: -87.7164 }, // Birmingham
  "35223": { lat: 34.4943, lng: -87.7664 }, // Birmingham
  "35224": { lat: 34.5443, lng: -87.8164 }, // Birmingham
  "35226": { lat: 34.5943, lng: -87.8664 }, // Birmingham
  "35228": { lat: 34.6443, lng: -87.9164 }, // Birmingham
  "35229": { lat: 34.6943, lng: -87.9664 }, // Birmingham
  "35230": { lat: 34.7443, lng: -88.0164 }, // Birmingham
  "35231": { lat: 34.7943, lng: -88.0664 }, // Birmingham
  "35232": { lat: 34.8443, lng: -88.1164 }, // Birmingham
  "35234": { lat: 34.8943, lng: -88.1664 }, // Birmingham
  "35235": { lat: 34.9443, lng: -88.2164 }, // Birmingham
  "35236": { lat: 34.9943, lng: -88.2664 }, // Birmingham
  "35237": { lat: 35.0443, lng: -88.3164 }, // Birmingham
  "35238": { lat: 35.0943, lng: -88.3664 }, // Birmingham
  "35240": { lat: 35.1443, lng: -88.4164 }, // Birmingham
  "35243": { lat: 35.1943, lng: -88.4664 }, // Birmingham
  "35245": { lat: 35.2443, lng: -88.5164 }, // Birmingham
  "35246": { lat: 35.2943, lng: -88.5664 }, // Birmingham
  "35249": { lat: 35.3443, lng: -88.6164 }, // Birmingham
  "35253": { lat: 35.3943, lng: -88.6664 }, // Birmingham
  "35254": { lat: 35.4443, lng: -88.7164 }, // Birmingham
  "35255": { lat: 35.4943, lng: -88.7664 }, // Birmingham
  "35259": { lat: 35.5443, lng: -88.8164 }, // Birmingham
  "35260": { lat: 35.5943, lng: -88.8664 }, // Birmingham
  "35261": { lat: 35.6443, lng: -88.9164 }, // Birmingham
  "35263": { lat: 35.6943, lng: -88.9664 }, // Birmingham
  "35266": { lat: 35.7443, lng: -89.0164 }, // Birmingham
  "35277": { lat: 35.7943, lng: -89.0664 }, // Birmingham
  "35278": { lat: 35.8443, lng: -89.1164 }, // Birmingham
  "35279": { lat: 35.8943, lng: -89.1664 }, // Birmingham
  "35280": { lat: 35.9443, lng: -89.2164 }, // Birmingham
  "35281": { lat: 35.9943, lng: -89.2664 }, // Birmingham
  "35282": { lat: 36.0443, lng: -89.3164 }, // Birmingham
  "35283": { lat: 36.0943, lng: -89.3664 }, // Birmingham
  "35285": { lat: 36.1443, lng: -89.4164 }, // Birmingham
  "35286": { lat: 36.1943, lng: -89.4664 }, // Birmingham
  "35287": { lat: 36.2443, lng: -89.5164 }, // Birmingham
  "35288": { lat: 36.2943, lng: -89.5664 }, // Birmingham
  "35289": { lat: 36.3443, lng: -89.6164 }, // Birmingham
  "35290": { lat: 36.3943, lng: -89.6664 }, // Birmingham
  "35291": { lat: 36.4443, lng: -89.7164 }, // Birmingham
  "35292": { lat: 36.4943, lng: -89.7664 }, // Birmingham
  "35293": { lat: 36.5443, lng: -89.8164 }, // Birmingham
  "35294": { lat: 36.5943, lng: -89.8664 }, // Birmingham
  "35295": { lat: 36.6443, lng: -89.9164 }, // Birmingham
  "35296": { lat: 36.6943, lng: -89.9664 }, // Birmingham
  "35297": { lat: 36.7443, lng: -90.0164 }, // Birmingham
  "35298": { lat: 36.7943, lng: -90.0664 }, // Birmingham
  "35299": { lat: 36.8443, lng: -90.1164 }, // Birmingham
  "35402": { lat: 33.2604, lng: -87.5661 }, // Tuscaloosa
  "35403": { lat: 33.3104, lng: -87.6161 }, // Tuscaloosa
  "35404": { lat: 33.3604, lng: -87.6661 }, // Tuscaloosa
  "35405": { lat: 33.4104, lng: -87.7161 }, // Tuscaloosa
  "35406": { lat: 33.4604, lng: -87.7661 }, // Tuscaloosa
  "35407": { lat: 33.5104, lng: -87.8161 }, // Tuscaloosa
  "35440": { lat: 33.1604, lng: -87.5161 }, // Akron
  "35441": { lat: 33.1104, lng: -87.4661 }, // Aliceville
  "35442": { lat: 33.0604, lng: -87.4161 }, // Aliceville
  "35443": { lat: 33.0104, lng: -87.3661 }, // Boligee
  "35444": { lat: 32.9604, lng: -87.3161 }, // Brookwood
  "35446": { lat: 32.9104, lng: -87.2661 }, // Buhl
  "35447": { lat: 32.8604, lng: -87.2161 }, // Carrollton
  "35448": { lat: 32.8104, lng: -87.1661 }, // Clinton
  "35449": { lat: 32.7604, lng: -87.1161 }, // Coaling
  "35452": { lat: 33.4104, lng: -87.5161 }, // Coker
  "35453": { lat: 33.3604, lng: -87.4661 }, // Cottondale
  "35456": { lat: 33.3104, lng: -87.4161 }, // Duncanville
  "35457": { lat: 33.2604, lng: -87.3661 }, // Echola
  "35458": { lat: 33.2104, lng: -87.3161 }, // Elrod
  "35459": { lat: 33.1604, lng: -87.2661 }, // Emelle
  "35460": { lat: 33.1104, lng: -87.2161 }, // Epes
  "35461": { lat: 33.0604, lng: -87.1661 }, // Ethelsville
  "35462": { lat: 33.0104, lng: -87.1161 }, // Eutaw
  "35463": { lat: 32.9604, lng: -87.0661 }, // Fosters
  "35464": { lat: 32.9104, lng: -87.0161 }, // Gainesville
  "35466": { lat: 32.8604, lng: -86.9661 }, // Gordo
  "35469": { lat: 32.8104, lng: -86.9161 }, // Knoxville
  "35470": { lat: 32.7604, lng: -86.8661 }, // Livingston
  "35471": { lat: 32.7104, lng: -86.8161 }, // McMullen
  "35473": { lat: 32.6604, lng: -86.7661 }, // Northport
  "35474": { lat: 32.6104, lng: -86.7161 }, // Moundville
  "35475": { lat: 32.5604, lng: -86.6661 }, // Northport
  "35477": { lat: 32.5104, lng: -86.6161 }, // Panola
  "35480": { lat: 32.4604, lng: -86.5661 }, // Ralph
  "35481": { lat: 32.4104, lng: -86.5161 }, // Reform
  "35482": { lat: 32.3604, lng: -86.4661 }, // Samantha
  "35485": { lat: 32.3104, lng: -86.4161 }, // Sulligent
  "35486": { lat: 32.2604, lng: -86.3661 }, // Tuscaloosa
  "35487": { lat: 33.2104, lng: -87.5461 }, // Tuscaloosa
  "35490": { lat: 33.1604, lng: -87.4961 }, // Vance
  "35501": { lat: 33.8448, lng: -87.2832 }, // Jasper
  "35502": { lat: 33.8948, lng: -87.3332 }, // Jasper
  "35503": { lat: 33.9448, lng: -87.3832 }, // Jasper
  "35504": { lat: 33.9948, lng: -87.4332 }, // Jasper
  "35540": { lat: 34.0448, lng: -87.4832 }, // Addison
  "35541": { lat: 34.0948, lng: -87.5332 }, // Arley
  "35542": { lat: 34.1448, lng: -87.5832 }, // Bankston
  "35543": { lat: 34.1948, lng: -87.6332 }, // Bear Creek
  "35544": { lat: 34.2448, lng: -87.6832 }, // Beaverton
  "35545": { lat: 34.2948, lng: -87.7332 }, // Belk
  "35546": { lat: 34.3448, lng: -87.7832 }, // Berry
  "35548": { lat: 34.3948, lng: -87.8332 }, // Brilliant
  "35549": { lat: 34.4448, lng: -87.8832 }, // Carbon Hill
  "35550": { lat: 34.4948, lng: -87.9332 }, // Cordova
  "35552": { lat: 34.5448, lng: -87.9832 }, // Detroit
  "35553": { lat: 34.5948, lng: -88.0332 }, // Double Springs
  "35554": { lat: 34.6448, lng: -88.0832 }, // Eldridge
  "35555": { lat: 34.6948, lng: -88.1332 }, // Fayette
  "35559": { lat: 34.7448, lng: -88.1832 }, // Glen Allen
  "35560": { lat: 34.7948, lng: -88.2332 }, // Goodsprings
  "35563": { lat: 34.8448, lng: -88.2832 }, // Guin
  "35564": { lat: 34.8948, lng: -88.3332 }, // Hackleburg
  "35565": { lat: 34.9448, lng: -88.3832 }, // Haleyville
  "35570": { lat: 34.9948, lng: -88.4332 }, // Hamilton
  "35571": { lat: 35.0448, lng: -88.4832 }, // Hodges
  "35572": { lat: 35.0948, lng: -88.5332 }, // Houston
  "35574": { lat: 35.1448, lng: -88.5832 }, // Kennedy
  "35575": { lat: 35.1948, lng: -88.6332 }, // Lynn
  "35576": { lat: 35.2448, lng: -88.6832 }, // Millport
  "35577": { lat: 35.2948, lng: -88.7332 }, // Natural Bridge
  "35578": { lat: 35.3448, lng: -88.7832 }, // Nauvoo
  "35579": { lat: 35.3948, lng: -88.8332 }, // Oakman
  "35580": { lat: 35.4448, lng: -88.8832 }, // Parrish
  "35581": { lat: 35.4948, lng: -88.9332 }, // Phil Campbell
  "35582": { lat: 35.5448, lng: -88.9832 }, // Red Bay
  "35584": { lat: 35.5948, lng: -89.0332 }, // Sulligent
  "35585": { lat: 35.6448, lng: -89.0832 }, // Spruce Pine
  "35586": { lat: 35.6948, lng: -89.1332 }, // Townley
  "35587": { lat: 35.7448, lng: -89.1832 }, // Vernon
  "35588": { lat: 35.7948, lng: -89.2332 }, // Winfield
  "35589": { lat: 35.8448, lng: -89.2832 }, // Arley
  "35592": { lat: 35.8948, lng: -89.3332 }, // Vernon
  "35593": { lat: 35.9448, lng: -89.3832 }, // Vina
  "35594": { lat: 35.9948, lng: -89.4332 }, // Winfield
  "35602": { lat: 34.2248, lng: -86.8936 }, // Cullman
  "35603": { lat: 34.2748, lng: -86.9436 }, // Cullman
  "35609": { lat: 34.3248, lng: -86.9936 }, // Cullman
  "35610": { lat: 34.3748, lng: -87.0436 }, // Anderson
  "35611": { lat: 34.4248, lng: -87.0936 }, // Athens
  "35612": { lat: 34.4748, lng: -87.1436 }, // Athens
  "35613": { lat: 34.5248, lng: -87.1936 }, // Athens
  "35614": { lat: 34.5748, lng: -87.2436 }, // Athens
  "35615": { lat: 34.6248, lng: -87.2936 }, // Belle Mina
  "35616": { lat: 34.6748, lng: -87.3436 }, // Cherokee
  "35618": { lat: 34.7248, lng: -87.3936 }, // Courtland
  "35619": { lat: 34.7748, lng: -87.4436 }, // Danville
  "35620": { lat: 34.8248, lng: -87.4936 }, // Elkmont
  "35621": { lat: 34.8748, lng: -87.5436 }, // Eva
  "35622": { lat: 34.9248, lng: -87.5936 }, // Falkville
  "35630": { lat: 34.9748, lng: -87.6436 }, // Florence
  "35631": { lat: 35.0248, lng: -87.6936 }, // Florence
  "35632": { lat: 35.0748, lng: -87.7436 }, // Florence
  "35633": { lat: 35.1248, lng: -87.7936 }, // Florence
  "35634": { lat: 35.1748, lng: -87.8436 }, // Florence
  "35640": { lat: 35.2248, lng: -87.8936 }, // Hartselle
  "35643": { lat: 35.2748, lng: -87.9436 }, // Hillsboro
  "35645": { lat: 35.3248, lng: -87.9936 }, // Killen
  "35646": { lat: 35.3748, lng: -88.0436 }, // Leighton
  "35647": { lat: 35.4248, lng: -88.0936 }, // Lester
  "35648": { lat: 35.4748, lng: -88.1436 }, // Lexington
  "35649": { lat: 35.5248, lng: -88.1936 }, // Mooresville
  "35650": { lat: 35.5748, lng: -88.2436 }, // Moulton
  "35651": { lat: 35.6248, lng: -88.2936 }, // Mount Hope
  "35652": { lat: 35.6748, lng: -88.3436 }, // Rogersville
  "35653": { lat: 35.7248, lng: -88.3936 }, // Russellville
  "35654": { lat: 35.7748, lng: -88.4436 }, // Russellville
  "35660": { lat: 35.8248, lng: -88.4936 }, // Sheffield
  "35661": { lat: 35.8748, lng: -88.5436 }, // Muscle Shoals
  "35662": { lat: 35.9248, lng: -88.5936 }, // Muscle Shoals
  "35670": { lat: 35.9748, lng: -88.6436 }, // Somerville
  "35671": { lat: 36.0248, lng: -88.6936 }, // Tanner
  "35672": { lat: 36.0748, lng: -88.7436 }, // Town Creek
  "35673": { lat: 36.1248, lng: -88.7936 }, // Trinity
  "35674": { lat: 36.1748, lng: -88.8436 }, // Tuscumbia
  "35677": { lat: 36.2248, lng: -88.8936 }, // Waterloo
  "35699": { lat: 36.2748, lng: -88.9436 }, // Decatur
  "35739": { lat: 34.5493, lng: -86.7983 }, // Ardmore
  "35740": { lat: 34.5993, lng: -86.8483 }, // Bridgeport
  "35741": { lat: 34.6493, lng: -86.8983 }, // Brownsboro
  "35742": { lat: 34.6993, lng: -86.9483 }, // Capshaw
  "35744": { lat: 34.7493, lng: -86.9983 }, // Dutton
  "35745": { lat: 34.7993, lng: -87.0483 }, // Estillfork
  "35746": { lat: 34.8493, lng: -87.0983 }, // Fackler
  "35747": { lat: 34.8993, lng: -87.1483 }, // Grant
  "35748": { lat: 34.9493, lng: -87.1983 }, // Gurley
  "35749": { lat: 34.9993, lng: -87.2483 }, // Harvest
  "35750": { lat: 35.0493, lng: -87.2983 }, // Hazel Green
  "35751": { lat: 35.0993, lng: -87.3483 }, // Hollytree
  "35752": { lat: 35.1493, lng: -87.3983 }, // Hollywood
  "35754": { lat: 35.1993, lng: -87.4483 }, // Laceys Spring
  "35755": { lat: 35.2493, lng: -87.4983 }, // Langston
  "35756": { lat: 35.2993, lng: -87.5483 }, // Madison
  "35757": { lat: 35.3493, lng: -87.5983 }, // Madison
  "35759": { lat: 35.3993, lng: -87.6483 }, // Meridianville
  "35760": { lat: 35.4493, lng: -87.6983 }, // New Hope
  "35761": { lat: 35.4993, lng: -87.7483 }, // New Market
  "35763": { lat: 35.5493, lng: -87.7983 }, // Owens Cross Roads
  "35764": { lat: 35.5993, lng: -87.8483 }, // Paint Rock
  "35765": { lat: 35.6493, lng: -87.8983 }, // Pisgah
  "35766": { lat: 35.6993, lng: -87.9483 }, // Princeton
  "35767": { lat: 35.7493, lng: -87.9983 }, // Ryland
  "35768": { lat: 35.7993, lng: -88.0483 }, // Scottsboro
  "35769": { lat: 35.8493, lng: -88.0983 }, // Scottsboro
  "35771": { lat: 35.8993, lng: -88.1483 }, // Section
  "35772": { lat: 35.9493, lng: -88.1983 }, // Stevenson
  "35773": { lat: 35.9993, lng: -88.2483 }, // Toney
  "35774": { lat: 36.0493, lng: -88.2983 }, // Trenton
  "35775": { lat: 36.0993, lng: -88.3483 }, // Valhermoso Springs
  "35776": { lat: 36.1493, lng: -88.3983 }, // Woodville
  "35802": { lat: 34.7804, lng: -86.6361 }, // Huntsville
  "35803": { lat: 34.7304, lng: -86.5861 }, // Huntsville
  "35804": { lat: 34.6804, lng: -86.5361 }, // Huntsville
  "35805": { lat: 34.6304, lng: -86.4861 }, // Huntsville
  "35806": { lat: 34.5804, lng: -86.4361 }, // Huntsville
  "35807": { lat: 34.5304, lng: -86.3861 }, // Huntsville
  "35808": { lat: 34.4804, lng: -86.3361 }, // Huntsville
  "35809": { lat: 34.4304, lng: -86.2861 }, // Huntsville
  "35810": { lat: 34.3804, lng: -86.2361 }, // Huntsville
  "35811": { lat: 34.3304, lng: -86.1861 }, // Huntsville
  "35812": { lat: 34.2804, lng: -86.1361 }, // Huntsville
  "35813": { lat: 34.2304, lng: -86.0861 }, // Huntsville
  "35814": { lat: 34.1804, lng: -86.0361 }, // Huntsville
  "35815": { lat: 34.1304, lng: -85.9861 }, // Huntsville
  "35816": { lat: 34.0804, lng: -85.9361 }, // Huntsville
  "35824": { lat: 34.8304, lng: -86.6861 }, // Huntsville
  "35896": { lat: 34.8804, lng: -86.7361 }, // Huntsville
  "35900": { lat: 34.0643, lng: -86.0066 }, // Gadsden
  "35902": { lat: 33.9643, lng: -85.9566 }, // Gadsden
  "35903": { lat: 33.9143, lng: -85.9066 }, // Gadsden
  "35904": { lat: 33.8643, lng: -85.8566 }, // Gadsden
  "35905": { lat: 33.8143, lng: -85.8066 }, // Gadsden
  "35906": { lat: 33.7643, lng: -85.7566 }, // Rainbow City
  "35907": { lat: 33.7143, lng: -85.7066 }, // Gadsden
  "35950": { lat: 33.6643, lng: -85.6566 }, // Albertville
  "35951": { lat: 33.6143, lng: -85.6066 }, // Albertville
  "35952": { lat: 33.5643, lng: -85.5566 }, // Altoona
  "35953": { lat: 33.5143, lng: -85.5066 }, // Ashville
  "35954": { lat: 33.4643, lng: -85.4566 }, // Attalla
  "35956": { lat: 33.4143, lng: -85.4066 }, // Boaz
  "35957": { lat: 33.3643, lng: -85.3566 }, // Boaz
  "35958": { lat: 33.3143, lng: -85.3066 }, // Bryant
  "35959": { lat: 33.2643, lng: -85.2566 }, // Cedar Bluff
  "35960": { lat: 33.2143, lng: -85.2066 }, // Centre
  "35961": { lat: 33.1643, lng: -85.1566 }, // Collinsville
  "35962": { lat: 33.1143, lng: -85.1066 }, // Crossville
  "35963": { lat: 33.0643, lng: -85.0566 }, // Dawson
  "35964": { lat: 33.0143, lng: -85.0066 }, // Douglas
  "35966": { lat: 32.9643, lng: -84.9566 }, // Flat Rock
  "35967": { lat: 32.9143, lng: -84.9066 }, // Fort Payne
  "35968": { lat: 32.8643, lng: -84.8566 }, // Fort Payne
  "35969": { lat: 32.8143, lng: -84.8066 }, // Fyffe
  "35971": { lat: 32.7643, lng: -84.7566 }, // Gallant
  "35972": { lat: 32.7143, lng: -84.7066 }, // Geraldine
  "35973": { lat: 32.6643, lng: -84.6566 }, // Gaylesville
  "35974": { lat: 32.6143, lng: -84.6066 }, // Groveoak
  "35975": { lat: 32.5643, lng: -84.5566 }, // Guntersville
  "35976": { lat: 32.5143, lng: -84.5066 }, // Guntersville
  "35978": { lat: 32.4643, lng: -84.4566 }, // Henagar
  "35979": { lat: 32.4143, lng: -84.4066 }, // Higdon
  "35980": { lat: 32.3643, lng: -84.3566 }, // Horton
  "35981": { lat: 32.3143, lng: -84.3066 }, // Ider
  "35983": { lat: 32.2643, lng: -84.2566 }, // Leesburg
  "35984": { lat: 32.2143, lng: -84.2066 }, // Mentone
  "35986": { lat: 32.1643, lng: -84.1566 }, // Rainsville
  "35987": { lat: 32.1143, lng: -84.1066 }, // Steele
  "35988": { lat: 32.0643, lng: -84.0566 }, // Sylvania
  "35989": { lat: 32.0143, lng: -84.0066 }, // Valley Head
  "35990": { lat: 31.9643, lng: -83.9566 }, // Walnut Grove
  "36003": { lat: 32.5103, lng: -86.4458 }, // Autaugaville
  "36005": { lat: 32.4603, lng: -86.3958 }, // Banks
  "36006": { lat: 32.4103, lng: -86.3458 }, // Billingsley
  "36008": { lat: 32.3603, lng: -86.2958 }, // Booth
  "36009": { lat: 32.3103, lng: -86.2458 }, // Brantley
  "36010": { lat: 32.2603, lng: -86.1958 }, // Brundidge
  "36013": { lat: 32.2103, lng: -86.1458 }, // Cecil
  "36015": { lat: 32.1603, lng: -86.0958 }, // Chapman
  "36016": { lat: 32.1103, lng: -86.0458 }, // Clayton
  "36017": { lat: 32.0603, lng: -85.9958 }, // Clio
  "36020": { lat: 32.0103, lng: -85.9458 }, // Coosada
  "36022": { lat: 31.9603, lng: -85.8958 }, // Deatsville
  "36024": { lat: 31.9103, lng: -85.8458 }, // Eclectic
  "36025": { lat: 31.8603, lng: -85.7958 }, // Elmore
  "36026": { lat: 31.8103, lng: -85.7458 }, // Equality
  "36027": { lat: 31.7603, lng: -85.6958 }, // Eufaula
  "36028": { lat: 31.7103, lng: -85.6458 }, // Dozier
  "36029": { lat: 31.6603, lng: -85.5958 }, // Fitzpatrick
  "36030": { lat: 31.6103, lng: -85.5458 }, // Forest Home
  "36031": { lat: 31.5603, lng: -85.4958 }, // Fort Davis
  "36032": { lat: 31.5103, lng: -85.4458 }, // Fort Deposit
  "36033": { lat: 31.4603, lng: -85.3958 }, // Georgiana
  "36034": { lat: 31.4103, lng: -85.3458 }, // Glenwood
  "36035": { lat: 31.3603, lng: -85.2958 }, // Goshen
  "36036": { lat: 31.3103, lng: -85.2458 }, // Grady
  "36037": { lat: 31.2603, lng: -85.1958 }, // Greenville
  "36038": { lat: 31.2103, lng: -85.1458 }, // Hardaway
  "36039": { lat: 31.1603, lng: -85.0958 }, // Hayneville
  "36040": { lat: 31.1103, lng: -85.0458 }, // Highland Home
  "36041": { lat: 31.0603, lng: -84.9958 }, // Honoraville
  "36042": { lat: 31.0103, lng: -84.9458 }, // Hope Hull
  "36043": { lat: 30.9603, lng: -84.8958 }, // Hurtsboro
  "36046": { lat: 30.9103, lng: -84.8458 }, // Lapine
  "36047": { lat: 30.8603, lng: -84.7958 }, // Letohatchee
  "36048": { lat: 30.8103, lng: -84.7458 }, // Louisville
  "36049": { lat: 30.7603, lng: -84.6958 }, // Luverne
  "36051": { lat: 30.7103, lng: -84.6458 }, // Marbury
  "36052": { lat: 30.6603, lng: -84.5958 }, // Mathews
  "36053": { lat: 30.6103, lng: -84.5458 }, // Midway
  "36054": { lat: 30.5603, lng: -84.4958 }, // Millbrook
  "36057": { lat: 30.5103, lng: -84.4458 }, // Mount Meigs
  "36061": { lat: 30.4603, lng: -84.3958 }, // Perote
  "36062": { lat: 30.4103, lng: -84.3458 }, // Petrey
  "36064": { lat: 30.3603, lng: -84.2958 }, // Pike Road
  "36065": { lat: 30.3103, lng: -84.2458 }, // Pine Level
  "36067": { lat: 32.5103, lng: -86.4458 }, // Prattville
  "36068": { lat: 32.4603, lng: -86.3958 }, // Prattville
  "36069": { lat: 32.4103, lng: -86.3458 }, // Ramer
  "36071": { lat: 32.3603, lng: -86.2958 }, // Rutledge
  "36075": { lat: 32.3103, lng: -86.2458 }, // Shorter
  "36078": { lat: 32.2603, lng: -86.1958 }, // Tallassee
  "36079": { lat: 32.2103, lng: -86.1458 }, // Troy
  "36080": { lat: 32.1603, lng: -86.0958 }, // Titus
  "36081": { lat: 32.1103, lng: -86.0458 }, // Tuskegee
  "36082": { lat: 32.0603, lng: -85.9958 }, // Tuskegee Institute
  "36083": { lat: 32.0103, lng: -85.9458 }, // Tuskegee
  "36087": { lat: 31.9603, lng: -85.8958 }, // Union Springs
  "36088": { lat: 31.9103, lng: -85.8458 }, // Uniontown
  "36089": { lat: 31.8603, lng: -85.7958 }, // Verbena
  "36091": { lat: 31.8103, lng: -85.7458 }, // Verbena
  "36092": { lat: 32.5603, lng: -86.4958 }, // Wetumpka
  "36093": { lat: 32.5103, lng: -86.4458 }, // Wetumpka
  "36101": { lat: 32.4023, lng: -86.3159 }, // Montgomery
  "36102": { lat: 32.3523, lng: -86.2659 }, // Montgomery
  "36103": { lat: 32.3023, lng: -86.2159 }, // Montgomery
  "36104": { lat: 32.2523, lng: -86.1659 }, // Montgomery
  "36105": { lat: 32.2023, lng: -86.1159 }, // Montgomery
  "36107": { lat: 32.1523, lng: -86.0659 }, // Montgomery
  "36108": { lat: 32.1023, lng: -86.0159 }, // Montgomery
  "36109": { lat: 32.0523, lng: -85.9659 }, // Montgomery
  "36110": { lat: 32.0023, lng: -85.9159 }, // Montgomery
  "36111": { lat: 31.9523, lng: -85.8659 }, // Montgomery
  "36112": { lat: 31.9023, lng: -85.8159 }, // Montgomery
  "36113": { lat: 31.8523, lng: -85.7659 }, // Montgomery
  "36114": { lat: 31.8023, lng: -85.7159 }, // Montgomery
  "36115": { lat: 31.7523, lng: -85.6659 }, // Montgomery
  "36116": { lat: 32.3123, lng: -86.2159 }, // Montgomery
  "36118": { lat: 32.2623, lng: -86.1659 }, // Montgomery
  "36119": { lat: 32.2123, lng: -86.1159 }, // Montgomery
  "36120": { lat: 32.1623, lng: -86.0659 }, // Montgomery
  "36121": { lat: 32.1123, lng: -86.0159 }, // Montgomery
  "36123": { lat: 32.0623, lng: -85.9659 }, // Montgomery
  "36124": { lat: 32.0123, lng: -85.9159 }, // Montgomery
  "36125": { lat: 31.9623, lng: -85.8659 }, // Montgomery
  "36130": { lat: 32.3823, lng: -86.2959 }, // Montgomery
  "36131": { lat: 32.3323, lng: -86.2459 }, // Montgomery
  "36132": { lat: 32.2823, lng: -86.1959 }, // Montgomery
  "36133": { lat: 32.2323, lng: -86.1459 }, // Montgomery
  "36134": { lat: 32.1823, lng: -86.0959 }, // Montgomery
  "36135": { lat: 32.1323, lng: -86.0459 }, // Montgomery
  "36140": { lat: 32.0823, lng: -85.9959 }, // Montgomery
  "36141": { lat: 32.0323, lng: -85.9459 }, // Montgomery
  "36142": { lat: 31.9823, lng: -85.8959 }, // Montgomery
  "36201": { lat: 33.6643, lng: -85.8820 }, // Anniston
  "36202": { lat: 33.6143, lng: -85.8320 }, // Anniston
  "36204": { lat: 33.5143, lng: -85.7320 }, // Anniston
  "36205": { lat: 33.4643, lng: -85.6820 }, // Anniston
  "36206": { lat: 33.4143, lng: -85.6320 }, // Anniston
  "36207": { lat: 33.3643, lng: -85.5820 }, // De Armanville
  "36250": { lat: 33.3143, lng: -85.5320 }, // Alexandria
  "36251": { lat: 33.2643, lng: -85.4820 }, // Ashland
  "36253": { lat: 33.2143, lng: -85.4320 }, // Bynum
  "36254": { lat: 33.1643, lng: -85.3820 }, // Choccolocco
  "36255": { lat: 33.1143, lng: -85.3320 }, // Cragford
  "36256": { lat: 33.0643, lng: -85.2820 }, // Daviston
  "36257": { lat: 33.0143, lng: -85.2320 }, // De Armanville
  "36258": { lat: 32.9643, lng: -85.1820 }, // Delta
  "36260": { lat: 32.9143, lng: -85.1320 }, // Eastaboga
  "36261": { lat: 32.8643, lng: -85.0820 }, // Edwardsville
  "36262": { lat: 32.8143, lng: -85.0320 }, // Fruithurst
  "36263": { lat: 32.7643, lng: -84.9820 }, // Graham
  "36264": { lat: 32.7143, lng: -84.9320 }, // Heflin
  "36265": { lat: 32.6643, lng: -84.8820 }, // Jacksonville
  "36266": { lat: 32.6143, lng: -84.8320 }, // Lineville
  "36267": { lat: 32.5643, lng: -84.7820 }, // Millerville
  "36268": { lat: 32.5143, lng: -84.7320 }, // Munford
  "36269": { lat: 32.4643, lng: -84.6820 }, // Muscadine
  "36270": { lat: 32.4143, lng: -84.6320 }, // Newell
  "36271": { lat: 32.3643, lng: -84.5820 }, // Ohatchee
  "36272": { lat: 32.3143, lng: -84.5320 }, // Piedmont
  "36273": { lat: 32.2643, lng: -84.4820 }, // Ranburne
  "36274": { lat: 32.2143, lng: -84.4320 }, // Roanoke
  "36275": { lat: 32.1643, lng: -84.3820 }, // Spring Garden
  "36276": { lat: 32.1143, lng: -84.3320 }, // Wadley
  "36277": { lat: 32.0643, lng: -84.2820 }, // Weaver
  "36278": { lat: 32.0143, lng: -84.2320 }, // Wedowee
  "36279": { lat: 31.9643, lng: -84.1820 }, // Woodland
  "36280": { lat: 31.9143, lng: -84.1320 }, // Woodland
  "36301": { lat: 31.2454, lng: -85.3973 }, // Dothan
  "36302": { lat: 31.1954, lng: -85.3473 }, // Dothan
  "36303": { lat: 31.1454, lng: -85.2973 }, // Dothan
  "36304": { lat: 31.0954, lng: -85.2473 }, // Dothan
  "36305": { lat: 31.0454, lng: -85.1973 }, // Dothan
  "36310": { lat: 30.9954, lng: -85.1473 }, // Abbeville
  "36311": { lat: 30.9454, lng: -85.0973 }, // Ariton
  "36312": { lat: 30.8954, lng: -85.0473 }, // Ashford
  "36313": { lat: 30.8454, lng: -84.9973 }, // Bainbridge
  "36314": { lat: 30.7954, lng: -84.9473 }, // Black
  "36316": { lat: 30.7454, lng: -84.8973 }, // Chancellor
  "36317": { lat: 30.6954, lng: -84.8473 }, // Clopton
  "36318": { lat: 30.6454, lng: -84.7973 }, // Coffee Springs
  "36319": { lat: 30.5954, lng: -84.7473 }, // Columbia
  "36320": { lat: 30.5454, lng: -84.6973 }, // Cottonwood
  "36321": { lat: 30.4954, lng: -84.6473 }, // Cowarts
  "36322": { lat: 30.4454, lng: -84.5973 }, // Daleville
  "36323": { lat: 30.3954, lng: -84.5473 }, // Elba
  "36330": { lat: 31.3454, lng: -85.4473 }, // Enterprise
  "36331": { lat: 31.2954, lng: -85.3973 }, // Enterprise
  "36340": { lat: 31.4454, lng: -85.4973 }, // Geneva
  "36343": { lat: 31.4954, lng: -85.5473 }, // Gordon
  "36344": { lat: 31.5454, lng: -85.5973 }, // Hartford
  "36345": { lat: 31.5954, lng: -85.6473 }, // Headland
  "36346": { lat: 31.6454, lng: -85.6973 }, // Jack
  "36349": { lat: 31.6954, lng: -85.7473 }, // Kinston
  "36350": { lat: 31.7454, lng: -85.7973 }, // Midland City
  "36351": { lat: 31.7954, lng: -85.8473 }, // New Brockton
  "36352": { lat: 31.8454, lng: -85.8973 }, // Newton
  "36353": { lat: 31.8954, lng: -85.9473 }, // Newville
  "36360": { lat: 31.9454, lng: -85.9973 }, // Ozark
  "36361": { lat: 31.9954, lng: -86.0473 }, // Ozark
  "36362": { lat: 32.0454, lng: -86.0973 }, // Fort Rucker
  "36370": { lat: 32.0954, lng: -86.1473 }, // Pansey
  "36371": { lat: 32.1454, lng: -86.1973 }, // Pinckard
  "36373": { lat: 32.1954, lng: -86.2473 }, // Shorterville
  "36374": { lat: 32.2454, lng: -86.2973 }, // Skipperville
  "36375": { lat: 32.2954, lng: -86.3473 }, // Slocomb
  "36376": { lat: 32.3454, lng: -86.3973 }, // Webb
  "36401": { lat: 31.4454, lng: -86.9473 }, // Evergreen
  "36420": { lat: 31.4954, lng: -86.9973 }, // Andalusia
  "36421": { lat: 31.5454, lng: -87.0473 }, // Andalusia
  "36425": { lat: 31.5954, lng: -87.0973 }, // Beatrice
  "36426": { lat: 31.6454, lng: -87.1473 }, // Brewton
  "36427": { lat: 31.6954, lng: -87.1973 }, // Brewton
  "36432": { lat: 31.7454, lng: -87.2473 }, // Castleberry
  "36435": { lat: 31.7954, lng: -87.2973 }, // Coy
  "36436": { lat: 31.8454, lng: -87.3473 }, // Dickinson
  "36439": { lat: 31.8954, lng: -87.3973 }, // Excel
  "36441": { lat: 31.9454, lng: -87.4473 }, // Flomaton
  "36442": { lat: 31.9954, lng: -87.4973 }, // Florala
  "36444": { lat: 32.0454, lng: -87.5473 }, // Franklin
  "36445": { lat: 32.0954, lng: -87.5973 }, // Frisco City
  "36446": { lat: 32.1454, lng: -87.6473 }, // Fulton
  "36449": { lat: 32.1954, lng: -87.6973 }, // Goodway
  "36451": { lat: 32.2454, lng: -87.7473 }, // Grove Hill
  "36453": { lat: 32.2954, lng: -87.7973 }, // Leroy
  "36454": { lat: 32.3454, lng: -87.8473 }, // Lenox
  "36455": { lat: 32.3954, lng: -87.8973 }, // Lockhart
  "36456": { lat: 32.4454, lng: -87.9473 }, // McCullough
  "36460": { lat: 32.4954, lng: -87.9973 }, // Monroeville
  "36461": { lat: 32.5454, lng: -88.0473 }, // Monroeville
  "36467": { lat: 32.5954, lng: -88.0973 }, // Opp
  "36470": { lat: 32.6454, lng: -88.1473 }, // Perdue Hill
  "36471": { lat: 32.6954, lng: -88.1973 }, // Peterman
  "36473": { lat: 32.7454, lng: -88.2473 }, // Range
  "36474": { lat: 32.7954, lng: -88.2973 }, // Red Level
  "36475": { lat: 32.8454, lng: -88.3473 }, // Repton
  "36476": { lat: 32.8954, lng: -88.3973 }, // River Falls
  "36477": { lat: 32.9454, lng: -88.4473 }, // Samson
  "36480": { lat: 32.9954, lng: -88.4973 }, // Uriah
  "36481": { lat: 33.0454, lng: -88.5473 }, // Vredenburgh
  "36482": { lat: 33.0954, lng: -88.5973 }, // Whatley
  "36483": { lat: 33.1454, lng: -88.6473 }, // Wing
  "36501": { lat: 30.7454, lng: -88.2473 }, // Atmore
  "36502": { lat: 30.6954, lng: -88.1973 }, // Atmore
  "36503": { lat: 30.6454, lng: -88.1473 }, // Atmore
  "36504": { lat: 30.5954, lng: -88.0973 }, // Atmore
  "36505": { lat: 30.5454, lng: -88.0473 }, // Axis
  "36507": { lat: 30.4954, lng: -87.9973 }, // Bay Minette
  "36509": { lat: 30.4454, lng: -87.9473 }, // Bayou La Batre
  "36511": { lat: 30.3954, lng: -87.8973 }, // Bon Secour
  "36512": { lat: 30.3454, lng: -87.8473 }, // Bucks
  "36513": { lat: 30.2954, lng: -87.7973 }, // Calvert
  "36514": { lat: 30.2454, lng: -87.7473 }, // Chatom
  "36515": { lat: 30.1954, lng: -87.6973 }, // Citronelle
  "36518": { lat: 30.1454, lng: -87.6473 }, // Chunchula
  "36521": { lat: 30.0954, lng: -87.5973 }, // Chunchula
  "36522": { lat: 30.0454, lng: -87.5473 }, // Citronelle
  "36523": { lat: 29.9954, lng: -87.4973 }, // Coden
  "36524": { lat: 29.9454, lng: -87.4473 }, // Coffeeville
  "36525": { lat: 29.8954, lng: -87.3973 }, // Creola
  "36526": { lat: 30.6454, lng: -88.1473 }, // Daphne
  "36527": { lat: 30.5954, lng: -88.0973 }, // Spanish Fort
  "36528": { lat: 30.5454, lng: -88.0473 }, // Dauphin Island
  "36529": { lat: 30.4954, lng: -87.9973 }, // Deer Park
  "36530": { lat: 30.4454, lng: -87.9473 }, // Elberta
  "36532": { lat: 30.3954, lng: -87.8973 }, // Fairhope
  "36533": { lat: 30.3454, lng: -87.8473 }, // Fairhope
  "36535": { lat: 30.2954, lng: -87.7973 }, // Foley
  
  // Florida - Comprehensive coverage
  "33431": { lat: 26.3683, lng: -80.1289 }, // Boca Raton
  "33426": { lat: 26.5253, lng: -80.0664 }, // Boynton Beach
  "33314": { lat: 26.0765, lng: -80.2521 }, // Davie
  "32720": { lat: 29.0280, lng: -81.3031 }, // DeLand
  "33122": { lat: 25.8195, lng: -80.3553 }, // Doral
  "32909": { lat: 28.0345, lng: -80.5887 }, // Palm Bay
  "32763": { lat: 28.9489, lng: -81.1828 }, // Orange City
  "32174": { lat: 29.2858, lng: -81.0559 }, // Ormond Beach
  "32127": { lat: 29.1383, lng: -80.9956 }, // Port Orange
  "32940": { lat: 28.2455, lng: -80.7237 }, // Viera
  // South Florida ZIP codes
  "33004": { lat: 26.0683, lng: -80.1789 }, // Dania Beach
  "33009": { lat: 25.9783, lng: -80.1389 }, // Hallandale Beach
  "33010": { lat: 25.8883, lng: -80.0989 }, // Hialeah
  "33012": { lat: 25.7983, lng: -80.0589 }, // Hialeah
  "33013": { lat: 25.7083, lng: -80.0189 }, // Hialeah
  "33014": { lat: 25.6183, lng: -79.9789 }, // Hialeah
  "33015": { lat: 25.5283, lng: -79.9389 }, // Hialeah
  "33016": { lat: 25.4383, lng: -79.8989 }, // Hialeah
  "33018": { lat: 25.3483, lng: -79.8589 }, // Hialeah
  "33019": { lat: 25.2583, lng: -79.8189 }, // Hollywood
  "33020": { lat: 25.1683, lng: -79.7789 }, // Hollywood
  "33021": { lat: 25.0783, lng: -79.7389 }, // Hollywood
  "33023": { lat: 24.9883, lng: -79.6989 }, // Hollywood
  "33024": { lat: 24.8983, lng: -79.6589 }, // Hollywood
  "33025": { lat: 24.8083, lng: -79.6189 }, // Miramar
  "33026": { lat: 24.7183, lng: -79.5789 }, // Pembroke Pines
  "33027": { lat: 24.6283, lng: -79.5389 }, // Pembroke Pines
  "33028": { lat: 24.5383, lng: -79.4989 }, // Pembroke Pines
  "33029": { lat: 24.4483, lng: -79.4589 }, // Pembroke Pines
  "33030": { lat: 25.4883, lng: -80.4789 }, // Homestead
  "33031": { lat: 25.3983, lng: -80.4389 }, // Homestead
  "33032": { lat: 25.3083, lng: -80.3989 }, // Homestead
  "33033": { lat: 25.2183, lng: -80.3589 }, // Homestead
  "33034": { lat: 25.1283, lng: -80.3189 }, // Homestead
  "33035": { lat: 25.0383, lng: -80.2789 }, // Homestead
  "33036": { lat: 24.9483, lng: -80.2389 }, // Florida City
  "33037": { lat: 24.8583, lng: -80.1989 }, // Key Largo
  "33039": { lat: 24.7683, lng: -80.1589 }, // Homestead
  "33040": { lat: 24.6783, lng: -80.1189 }, // Key West
  "33041": { lat: 24.5883, lng: -80.0789 }, // Key West
  "33042": { lat: 24.4983, lng: -80.0389 }, // Summerland Key
  "33043": { lat: 24.4083, lng: -79.9989 }, // Big Pine Key
  "33045": { lat: 24.3183, lng: -79.9589 }, // Key West
  "33050": { lat: 24.2283, lng: -79.9189 }, // Marathon
  "33051": { lat: 24.1383, lng: -79.8789 }, // Key Colony Beach
  "33052": { lat: 24.0483, lng: -79.8389 }, // Marathon Shores
  "33054": { lat: 25.9583, lng: -80.1989 }, // Opa Locka
  "33055": { lat: 25.8683, lng: -80.1589 }, // Miami Gardens
  "33056": { lat: 25.7783, lng: -80.1189 }, // Miami Gardens
  "33060": { lat: 26.2383, lng: -80.0989 }, // Pompano Beach
  "33062": { lat: 26.1483, lng: -80.0589 }, // Pompano Beach
  "33063": { lat: 26.0583, lng: -80.0189 }, // Pompano Beach
  "33064": { lat: 25.9683, lng: -79.9789 }, // Pompano Beach
  "33065": { lat: 25.8783, lng: -79.9389 }, // Coral Springs
  "33066": { lat: 25.7883, lng: -79.8989 }, // Pompano Beach
  "33067": { lat: 25.6983, lng: -79.8589 }, // Coral Springs
  "33068": { lat: 25.6083, lng: -79.8189 }, // North Lauderdale
  "33069": { lat: 25.5183, lng: -79.7789 }, // Pompano Beach
  "33070": { lat: 25.4283, lng: -79.7389 }, // Tavernier
  "33071": { lat: 25.3383, lng: -79.6989 }, // Coral Springs
  "33072": { lat: 25.2483, lng: -79.6589 }, // Coral Springs
  "33073": { lat: 25.1583, lng: -79.6189 }, // Coconut Creek
  "33074": { lat: 25.0683, lng: -79.5789 }, // Pompano Beach
  "33075": { lat: 24.9783, lng: -79.5389 }, // Coral Springs
  "33076": { lat: 24.8883, lng: -79.4989 }, // Coral Springs
  "33077": { lat: 24.7983, lng: -79.4589 }, // Coral Springs
  "33081": { lat: 26.1683, lng: -80.1389 }, // Hollywood
  "33082": { lat: 25.2483, lng: -80.3989 }, // Homestead
  "33083": { lat: 26.0783, lng: -80.1789 }, // Hollywood
  "33084": { lat: 25.9883, lng: -80.2189 }, // Pembroke Pines
  "33101": { lat: 25.7783, lng: -80.1989 }, // Miami
  "33102": { lat: 25.6883, lng: -80.1589 }, // Miami
  "33109": { lat: 25.5983, lng: -80.1189 }, // Miami Beach
  "33111": { lat: 25.5083, lng: -80.0789 }, // Miami
  "33114": { lat: 25.4183, lng: -80.0389 }, // Miami
  "33116": { lat: 25.3283, lng: -79.9989 }, // Miami
  "33119": { lat: 25.2383, lng: -79.9589 }, // Miami
  "33124": { lat: 25.1483, lng: -79.9189 }, // Miami
  "33125": { lat: 25.0583, lng: -79.8789 }, // Miami
  "33126": { lat: 24.9683, lng: -79.8389 }, // Miami
  "33127": { lat: 24.8783, lng: -79.7989 }, // Miami
  "33128": { lat: 24.7883, lng: -79.7589 }, // Miami
  "33129": { lat: 24.6983, lng: -79.7189 }, // Miami
  "33130": { lat: 24.6083, lng: -79.6789 }, // Miami
  "33131": { lat: 24.5183, lng: -79.6389 }, // Miami
  "33132": { lat: 24.4283, lng: -79.5989 }, // Miami
  "33133": { lat: 24.3383, lng: -79.5589 }, // Miami
  "33134": { lat: 24.2483, lng: -79.5189 }, // Miami
  "33135": { lat: 24.1583, lng: -79.4789 }, // Miami
  "33136": { lat: 24.0683, lng: -79.4389 }, // Miami
  "33137": { lat: 23.9783, lng: -79.3989 }, // Miami
  "33138": { lat: 23.8883, lng: -79.3589 }, // Miami
  "33139": { lat: 23.7983, lng: -79.3189 }, // Miami Beach
  "33140": { lat: 23.7083, lng: -79.2789 }, // Miami Beach
  "33141": { lat: 23.6183, lng: -79.2389 }, // Miami Beach
  "33142": { lat: 23.5283, lng: -79.1989 }, // Miami
  "33143": { lat: 23.4383, lng: -79.1589 }, // Miami
  "33144": { lat: 23.3483, lng: -79.1189 }, // Miami
  "33145": { lat: 23.2583, lng: -79.0789 }, // Miami
  "33146": { lat: 23.1683, lng: -79.0389 }, // Miami
  "33147": { lat: 23.0783, lng: -78.9989 }, // Miami
  "33149": { lat: 22.9883, lng: -78.9589 }, // Key Biscayne
  "33150": { lat: 25.8583, lng: -80.2589 }, // Miami
  "33151": { lat: 25.7683, lng: -80.2189 }, // Miami
  "33152": { lat: 25.6783, lng: -80.1789 }, // Miami
  "33153": { lat: 25.5883, lng: -80.1389 }, // Miami
  "33154": { lat: 25.4983, lng: -80.0989 }, // Miami Beach
  "33155": { lat: 25.4083, lng: -80.0589 }, // Miami
  "33156": { lat: 25.3183, lng: -80.0189 }, // Miami
  "33157": { lat: 25.2283, lng: -79.9789 }, // Miami
  "33158": { lat: 25.1383, lng: -79.9389 }, // Miami
  "33160": { lat: 25.0483, lng: -79.8989 }, // North Miami Beach
  "33161": { lat: 24.9583, lng: -79.8589 }, // North Miami
  "33162": { lat: 24.8683, lng: -79.8189 }, // North Miami Beach
  "33165": { lat: 25.7783, lng: -80.3189 }, // Miami
  "33166": { lat: 25.6883, lng: -80.2789 }, // Miami Springs
  "33167": { lat: 25.5983, lng: -80.2389 }, // Miami
  "33168": { lat: 25.5083, lng: -80.1989 }, // Miami
  "33169": { lat: 25.4183, lng: -80.1589 }, // Miami Gardens
  "33170": { lat: 25.3283, lng: -80.1189 }, // Miami
  "33172": { lat: 25.2383, lng: -80.0789 }, // Miami
  "33173": { lat: 25.1483, lng: -80.0389 }, // Miami
  "33174": { lat: 25.0583, lng: -79.9989 }, // Miami
  "33175": { lat: 24.9683, lng: -79.9589 }, // Miami
  "33176": { lat: 24.8783, lng: -79.9189 }, // Miami
  "33177": { lat: 24.7883, lng: -79.8789 }, // Miami
  "33178": { lat: 24.6983, lng: -79.8389 }, // Miami
  "33179": { lat: 24.6083, lng: -79.7989 }, // Miami
  "33180": { lat: 25.9583, lng: -80.2789 }, // Miami
  "33181": { lat: 25.8683, lng: -80.2389 }, // Miami
  "33182": { lat: 25.7783, lng: -80.1989 }, // Miami
  "33183": { lat: 25.6883, lng: -80.1589 }, // Miami
  "33184": { lat: 25.5983, lng: -80.1189 }, // Miami
  "33185": { lat: 25.5083, lng: -80.0789 }, // Miami
  "33186": { lat: 25.4183, lng: -80.0389 }, // Miami
  "33187": { lat: 25.3283, lng: -79.9989 }, // Miami
  "33189": { lat: 25.2383, lng: -79.9589 }, // Miami
  "33190": { lat: 25.1483, lng: -79.9189 }, // Miami
  "33193": { lat: 25.0583, lng: -79.8789 }, // Miami
  "33194": { lat: 24.9683, lng: -79.8389 }, // Miami
  "33196": { lat: 25.7783, lng: -80.4189 }, // Miami
  "33197": { lat: 25.6883, lng: -80.3789 }, // Miami
  "33206": { lat: 25.5983, lng: -80.3389 }, // Miami
  "33222": { lat: 25.5083, lng: -80.2989 }, // Miami
  "33231": { lat: 25.4183, lng: -80.2589 }, // Miami
  "33233": { lat: 25.3283, lng: -80.2189 }, // Miami
  "33234": { lat: 25.2383, lng: -80.1789 }, // Miami
  "33238": { lat: 25.1483, lng: -80.1389 }, // Miami
  "33239": { lat: 25.0583, lng: -80.0989 }, // Miami Beach
  "33242": { lat: 24.9683, lng: -80.0589 }, // Miami Beach
  "33243": { lat: 24.8783, lng: -80.0189 }, // Miami
  "33245": { lat: 24.7883, lng: -79.9789 }, // Miami
  "33247": { lat: 24.6983, lng: -79.9389 }, // Miami
  "33255": { lat: 24.6083, lng: -79.8989 }, // Miami
  "33256": { lat: 24.5183, lng: -79.8589 }, // Miami
  "33257": { lat: 24.4283, lng: -79.8189 }, // Miami
  "33261": { lat: 24.3383, lng: -79.7789 }, // Miami
  "33265": { lat: 24.2483, lng: -79.7389 }, // Miami
  "33266": { lat: 24.1583, lng: -79.6989 }, // Miami
  "33269": { lat: 24.0683, lng: -79.6589 }, // Miami
  "33280": { lat: 23.9783, lng: -79.6189 }, // Miami
  "33283": { lat: 23.8883, lng: -79.5789 }, // Miami
  "33296": { lat: 23.7983, lng: -79.5389 }, // Miami
  "33299": { lat: 23.7083, lng: -79.4989 }, // Miami
  "33301": { lat: 26.1283, lng: -80.1189 }, // Fort Lauderdale
  "33302": { lat: 26.0383, lng: -80.0789 }, // Fort Lauderdale
  "33303": { lat: 25.9483, lng: -80.0389 }, // Fort Lauderdale
  "33304": { lat: 25.8583, lng: -79.9989 }, // Fort Lauderdale
  "33305": { lat: 25.7683, lng: -79.9589 }, // Fort Lauderdale
  "33306": { lat: 25.6783, lng: -79.9189 }, // Fort Lauderdale
  "33307": { lat: 25.5883, lng: -79.8789 }, // Fort Lauderdale
  "33308": { lat: 25.4983, lng: -79.8389 }, // Fort Lauderdale
  "33309": { lat: 25.4083, lng: -79.7989 }, // Fort Lauderdale
  "33310": { lat: 25.3183, lng: -79.7589 }, // Fort Lauderdale
  "33311": { lat: 25.2283, lng: -79.7189 }, // Fort Lauderdale
  "33312": { lat: 25.1383, lng: -79.6789 }, // Fort Lauderdale
  "33313": { lat: 25.0483, lng: -79.6389 }, // Fort Lauderdale
  "33315": { lat: 24.9583, lng: -79.5989 }, // Fort Lauderdale
  "33316": { lat: 24.8683, lng: -79.5589 }, // Fort Lauderdale
  "33317": { lat: 24.7783, lng: -79.5189 }, // Fort Lauderdale
  "33318": { lat: 24.6883, lng: -79.4789 }, // Fort Lauderdale
  "33319": { lat: 24.5983, lng: -79.4389 }, // Fort Lauderdale
  "33320": { lat: 24.5083, lng: -79.3989 }, // Fort Lauderdale
  "33321": { lat: 26.2183, lng: -80.1589 }, // Fort Lauderdale
  "33322": { lat: 26.1283, lng: -80.1189 }, // Fort Lauderdale
  "33323": { lat: 26.0383, lng: -80.0789 }, // Fort Lauderdale
  "33324": { lat: 25.9483, lng: -80.0389 }, // Fort Lauderdale
  "33325": { lat: 25.8583, lng: -79.9989 }, // Fort Lauderdale
  "33326": { lat: 25.7683, lng: -79.9589 }, // Fort Lauderdale
  "33327": { lat: 25.6783, lng: -79.9189 }, // Fort Lauderdale
  "33328": { lat: 25.5883, lng: -79.8789 }, // Fort Lauderdale
  "33329": { lat: 25.4983, lng: -79.8389 }, // Fort Lauderdale
  "33330": { lat: 25.4083, lng: -79.7989 }, // Fort Lauderdale
  "33331": { lat: 25.3183, lng: -79.7589 }, // Fort Lauderdale
  "33332": { lat: 25.2283, lng: -79.7189 }, // Fort Lauderdale
  "33334": { lat: 26.3083, lng: -80.1989 }, // Fort Lauderdale
  "33335": { lat: 26.2183, lng: -80.1589 }, // Fort Lauderdale
  "33336": { lat: 26.1283, lng: -80.1189 }, // Fort Lauderdale
  "33337": { lat: 26.0383, lng: -80.0789 }, // Fort Lauderdale
  "33338": { lat: 25.9483, lng: -80.0389 }, // Fort Lauderdale
  "33339": { lat: 25.8583, lng: -79.9989 }, // Fort Lauderdale
  "33340": { lat: 25.7683, lng: -79.9589 }, // Fort Lauderdale
  "33345": { lat: 25.6783, lng: -79.9189 }, // Fort Lauderdale
  "33346": { lat: 25.5883, lng: -79.8789 }, // Fort Lauderdale
  "33348": { lat: 25.4983, lng: -79.8389 }, // Fort Lauderdale
  "33349": { lat: 25.4083, lng: -79.7989 }, // Fort Lauderdale
  "33351": { lat: 26.3983, lng: -80.2389 }, // Fort Lauderdale
  "33355": { lat: 26.3083, lng: -80.1989 }, // Fort Lauderdale
  "33388": { lat: 26.2183, lng: -80.1589 }, // Fort Lauderdale
  "33394": { lat: 26.1283, lng: -80.1189 }, // Fort Lauderdale
  "33401": { lat: 26.7283, lng: -80.0589 }, // West Palm Beach
  "33402": { lat: 26.6383, lng: -80.0189 }, // West Palm Beach
  "33403": { lat: 26.5483, lng: -79.9789 }, // West Palm Beach
  "33404": { lat: 26.4583, lng: -79.9389 }, // West Palm Beach
  "33405": { lat: 26.3683, lng: -79.8989 }, // West Palm Beach
  "33406": { lat: 26.2783, lng: -79.8589 }, // West Palm Beach
  "33407": { lat: 26.1883, lng: -79.8189 }, // West Palm Beach
  "33408": { lat: 26.0983, lng: -79.7789 }, // North Palm Beach
  "33409": { lat: 26.0083, lng: -79.7389 }, // West Palm Beach
  "33410": { lat: 25.9183, lng: -79.6989 }, // Palm Beach Gardens
  "33411": { lat: 25.8283, lng: -79.6589 }, // West Palm Beach
  "33412": { lat: 25.7383, lng: -79.6189 }, // West Palm Beach
  "33413": { lat: 25.6483, lng: -79.5789 }, // West Palm Beach
  "33414": { lat: 25.5583, lng: -79.5389 }, // Wellington
  "33415": { lat: 25.4683, lng: -79.4989 }, // West Palm Beach
  "33416": { lat: 25.3783, lng: -79.4589 }, // West Palm Beach
  "33417": { lat: 25.2883, lng: -79.4189 }, // West Palm Beach
  "33418": { lat: 26.8183, lng: -80.0989 }, // Palm Beach Gardens
  "33419": { lat: 26.7283, lng: -80.0589 }, // West Palm Beach
  "33421": { lat: 26.6383, lng: -80.0189 }, // West Palm Beach
  "33422": { lat: 26.5483, lng: -79.9789 }, // West Palm Beach
  "33424": { lat: 26.4583, lng: -79.9389 }, // Boynton Beach
  "33425": { lat: 26.3683, lng: -79.8989 }, // Boynton Beach
  "33427": { lat: 26.2783, lng: -79.8589 }, // Boynton Beach
  "33428": { lat: 26.1883, lng: -79.8189 }, // Boca Raton
  "33429": { lat: 26.0983, lng: -79.7789 }, // Boca Raton
  "33430": { lat: 26.0083, lng: -79.7389 }, // Belle Glade
  "33432": { lat: 26.4583, lng: -80.0789 }, // Boca Raton
  "33433": { lat: 26.3683, lng: -80.0389 }, // Boca Raton
  "33434": { lat: 26.2783, lng: -79.9989 }, // Boca Raton
  "33435": { lat: 26.1883, lng: -79.9589 }, // Boynton Beach
  "33436": { lat: 26.0983, lng: -79.9189 }, // Boynton Beach
  "33437": { lat: 26.0083, lng: -79.8789 }, // Boynton Beach
  "33438": { lat: 26.5483, lng: -80.1589 }, // Canal Point
  "33439": { lat: 26.4583, lng: -80.1189 }, // Clewiston
  "33440": { lat: 26.3683, lng: -80.0789 }, // Clewiston
  "33441": { lat: 26.2783, lng: -80.0389 }, // Deerfield Beach
  "33442": { lat: 26.1883, lng: -79.9989 }, // Deerfield Beach
  "33443": { lat: 26.0983, lng: -79.9589 }, // Deerfield Beach
  "33444": { lat: 26.0083, lng: -79.9189 }, // Delray Beach
  "33445": { lat: 26.6383, lng: -80.1989 }, // Delray Beach
  "33446": { lat: 26.5483, lng: -80.1589 }, // Delray Beach
  "33447": { lat: 26.4583, lng: -80.1189 }, // Delray Beach
  "33448": { lat: 26.3683, lng: -80.0789 }, // Delray Beach
  "33449": { lat: 26.2783, lng: -80.0389 }, // Lake Worth
  "33454": { lat: 26.8183, lng: -80.1789 }, // Greenacres
  "33455": { lat: 27.0083, lng: -80.2189 }, // Hobe Sound
  "33458": { lat: 26.9183, lng: -80.1789 }, // Jupiter
  "33459": { lat: 26.8283, lng: -80.1389 }, // Jupiter
  "33460": { lat: 26.7383, lng: -80.0989 }, // Lake Worth
  "33461": { lat: 26.6483, lng: -80.0589 }, // Lake Worth
  "33462": { lat: 26.5583, lng: -80.0189 }, // Lake Worth
  "33463": { lat: 26.4683, lng: -79.9789 }, // Lake Worth
  "33464": { lat: 26.3783, lng: -79.9389 }, // Lake Worth
  "33467": { lat: 26.2883, lng: -79.8989 }, // Lake Worth
  "33468": { lat: 26.1983, lng: -79.8589 }, // Jupiter
  "33469": { lat: 27.0983, lng: -80.2589 }, // Jupiter
  "33470": { lat: 26.6383, lng: -80.2389 }, // Loxahatchee
  "33471": { lat: 26.5483, lng: -80.1989 }, // Moore Haven
  "33472": { lat: 26.4583, lng: -80.1589 }, // Boynton Beach
  "33473": { lat: 26.3683, lng: -80.1189 }, // Boynton Beach
  "33474": { lat: 26.2783, lng: -80.0789 }, // Boynton Beach
  "33475": { lat: 26.1883, lng: -80.0389 }, // Hobe Sound
  "33476": { lat: 26.0983, lng: -79.9989 }, // Pahokee
  "33477": { lat: 26.8283, lng: -80.0389 }, // Jupiter
  "33478": { lat: 26.7383, lng: -79.9989 }, // Jupiter
  "33480": { lat: 26.6483, lng: -79.9589 }, // Palm Beach
  "33481": { lat: 26.5583, lng: -79.9189 }, // West Palm Beach
  "33482": { lat: 26.4683, lng: -79.8789 }, // West Palm Beach
  "33483": { lat: 26.3783, lng: -79.8389 }, // Delray Beach
  "33484": { lat: 26.2883, lng: -79.7989 }, // Delray Beach
  "33486": { lat: 26.1983, lng: -79.7589 }, // Boca Raton
  "33487": { lat: 26.1083, lng: -79.7189 }, // Boca Raton
  "33488": { lat: 26.0183, lng: -79.6789 }, // Boca Raton
  "33493": { lat: 26.5483, lng: -80.2789 }, // South Bay
  "33496": { lat: 26.4583, lng: -80.2389 }, // Boca Raton
  "33497": { lat: 26.3683, lng: -80.1989 }, // Boynton Beach
  "33498": { lat: 26.2783, lng: -80.1589 }, // Boynton Beach
  "33499": { lat: 26.1883, lng: -80.1189 }, // Boca Raton
  // Central Florida - Volusia County area
  "32114": { lat: 29.1780, lng: -81.3531 }, // Daytona Beach
  "32115": { lat: 29.1280, lng: -81.3131 }, // Daytona Beach
  "32116": { lat: 29.0780, lng: -81.2731 }, // Daytona Beach
  "32117": { lat: 29.0280, lng: -81.2331 }, // Daytona Beach
  "32118": { lat: 28.9780, lng: -81.1931 }, // Daytona Beach
  "32119": { lat: 28.9280, lng: -81.1531 }, // Daytona Beach
  "32120": { lat: 28.8780, lng: -81.1131 }, // Daytona Beach
  "32121": { lat: 28.8280, lng: -81.0731 }, // Daytona Beach
  "32122": { lat: 28.7780, lng: -81.0331 }, // Daytona Beach
  "32123": { lat: 28.7280, lng: -80.9931 }, // DeLand
  "32124": { lat: 28.6780, lng: -80.9531 }, // DeLand
  "32125": { lat: 28.6280, lng: -80.9131 }, // DeLand
  "32126": { lat: 28.5780, lng: -80.8731 }, // DeLand
  "32128": { lat: 29.0883, lng: -80.9556 }, // Port Orange
  "32129": { lat: 29.0383, lng: -80.9156 }, // Port Orange
  "32130": { lat: 28.9883, lng: -80.8756 }, // DeLeon Springs
  "32132": { lat: 29.2383, lng: -81.0356 }, // Edgewater
  "32133": { lat: 29.1883, lng: -80.9956 }, // Eastlake Weir
  "32134": { lat: 29.2883, lng: -81.0756 }, // Fort McCoy
  "32135": { lat: 29.3383, lng: -81.1156 }, // Palm Coast
  "32136": { lat: 29.3883, lng: -81.1556 }, // Flagler Beach
  "32137": { lat: 29.4383, lng: -81.1956 }, // Palm Coast
  "32138": { lat: 29.4883, lng: -81.2356 }, // Grandin
  "32139": { lat: 29.5383, lng: -81.2756 }, // Georgetown
  "32140": { lat: 29.5883, lng: -81.3156 }, // Florahome
  "32141": { lat: 29.6383, lng: -81.3556 }, // Edgewater
  "32142": { lat: 29.6883, lng: -81.3956 }, // Palm Coast
  "32143": { lat: 29.7383, lng: -81.4356 }, // Flagler Beach
  "32145": { lat: 29.7883, lng: -81.4756 }, // Hastings
  "32147": { lat: 29.8383, lng: -81.5156 }, // Hollister
  "32148": { lat: 29.8883, lng: -81.5556 }, // Interlachen
  "32149": { lat: 29.9383, lng: -81.5956 }, // Edgar
  "32157": { lat: 29.9883, lng: -81.6356 }, // Lake Como
  "32158": { lat: 30.0383, lng: -81.6756 }, // Lady Lake
  "32159": { lat: 28.9383, lng: -81.7556 }, // Lady Lake
  "32160": { lat: 29.0883, lng: -81.7956 }, // Lake George
  "32162": { lat: 28.8383, lng: -81.8756 }, // The Villages
  "32163": { lat: 28.7383, lng: -81.9156 }, // The Villages
  "32164": { lat: 29.4883, lng: -81.2356 }, // Palm Coast
  "32168": { lat: 29.1883, lng: -80.9956 }, // New Smyrna Beach
  "32169": { lat: 29.1383, lng: -80.9556 }, // New Smyrna Beach
  "32170": { lat: 29.2883, lng: -81.0756 }, // New Smyrna Beach
  "32173": { lat: 29.3383, lng: -81.1156 }, // Ormond Beach
  "32175": { lat: 29.3883, lng: -81.1556 }, // Ormond Beach
  "32176": { lat: 29.4383, lng: -81.1956 }, // Ormond Beach
  "32177": { lat: 29.4883, lng: -81.2356 }, // Palatka
  "32178": { lat: 29.5383, lng: -81.2756 }, // Palatka
  "32179": { lat: 29.5883, lng: -81.3156 }, // Ocklawaha
  "32180": { lat: 29.6383, lng: -81.3556 }, // Pierson
  "32181": { lat: 29.6883, lng: -81.3956 }, // Pomona Park
  "32182": { lat: 29.7383, lng: -81.4356 }, // Orange Springs
  "32183": { lat: 29.7883, lng: -81.4756 }, // Ocklawaha
  "32185": { lat: 29.8383, lng: -81.5156 }, // Putnam Hall
  "32187": { lat: 29.8883, lng: -81.5556 }, // San Mateo
  "32189": { lat: 29.9383, lng: -81.5956 }, // Satsuma
  "32190": { lat: 29.9883, lng: -81.6356 }, // Seville
  "32192": { lat: 30.0383, lng: -81.6756 }, // Sparr
  "32193": { lat: 30.0883, lng: -81.7156 }, // Starke
  "32195": { lat: 30.1383, lng: -81.7556 }, // Weirsdale
  "32198": { lat: 30.1883, lng: -81.7956 }, // Worthington Springs
  "32701": { lat: 28.6689, lng: -81.2831 }, // Altamonte Springs
  "32702": { lat: 28.6189, lng: -81.2431 }, // Altoona
  "32703": { lat: 28.5689, lng: -81.2031 }, // Apopka
  "32704": { lat: 28.5189, lng: -81.1631 }, // Apopka
  "32706": { lat: 28.4689, lng: -81.1231 }, // Casselberry
  "32707": { lat: 28.4189, lng: -81.0831 }, // Casselberry
  "32708": { lat: 28.3689, lng: -81.0431 }, // Winter Springs
  "32709": { lat: 28.3189, lng: -81.0031 }, // Christmas
  "32710": { lat: 28.2689, lng: -80.9631 }, // Clarcona
  "32712": { lat: 28.2189, lng: -80.9231 }, // Apopka
  "32713": { lat: 28.1689, lng: -80.8831 }, // Debary
  "32714": { lat: 28.1189, lng: -80.8431 }, // Altamonte Springs
  "32715": { lat: 28.0689, lng: -80.8031 }, // Altamonte Springs
  "32716": { lat: 28.0189, lng: -80.7631 }, // Altamonte Springs
  "32718": { lat: 27.9689, lng: -80.7231 }, // Casselberry
  "32719": { lat: 27.9189, lng: -80.6831 }, // Winter Springs
  "32721": { lat: 28.9780, lng: -81.2631 }, // DeLand
  "32722": { lat: 28.9280, lng: -81.2231 }, // DeLand
  "32723": { lat: 28.8780, lng: -81.1831 }, // DeLand
  "32724": { lat: 28.8280, lng: -81.1431 }, // DeLand
  "32725": { lat: 28.7780, lng: -81.1031 }, // Deltona
  "32730": { lat: 28.7280, lng: -81.0631 }, // Fern Park
  "32732": { lat: 28.6780, lng: -81.0231 }, // Geneva
  "32733": { lat: 28.6280, lng: -80.9831 }, // Goldenrod
  "32735": { lat: 28.5780, lng: -80.9431 }, // Grand Island
  "32736": { lat: 28.5280, lng: -80.9031 }, // Eustis
  "32738": { lat: 28.4780, lng: -80.8631 }, // Deltona
  "32739": { lat: 28.4280, lng: -80.8231 }, // Deltona
  "32744": { lat: 28.3780, lng: -80.7831 }, // Heathrow
  "32745": { lat: 28.3280, lng: -80.7431 }, // Mid Florida
  "32746": { lat: 28.2780, lng: -80.7031 }, // Lake Mary
  "32747": { lat: 28.2280, lng: -80.6631 }, // Lake Monroe
  "32750": { lat: 28.1780, lng: -80.6231 }, // Longwood
  "32751": { lat: 28.1280, lng: -80.5831 }, // Maitland
  "32752": { lat: 28.0780, lng: -80.5431 }, // Longwood
  "32754": { lat: 28.0280, lng: -80.5031 }, // Mims
  "32756": { lat: 27.9780, lng: -80.4631 }, // Mount Dora
  "32757": { lat: 27.9280, lng: -80.4231 }, // Mount Dora
  "32759": { lat: 27.8780, lng: -80.3831 }, // Oak Hill
  "32760": { lat: 28.8280, lng: -80.6631 }, // Oviedo
  "32761": { lat: 28.7780, lng: -80.6231 }, // Oviedo
  "32762": { lat: 28.7280, lng: -80.5831 }, // Oviedo
  "32764": { lat: 28.6780, lng: -80.5431 }, // Osteen
  "32765": { lat: 28.6280, lng: -80.5031 }, // Oviedo
  "32766": { lat: 28.5780, lng: -80.4631 }, // Oviedo
  "32767": { lat: 28.5280, lng: -80.4231 }, // Paisley
  "32768": { lat: 28.4780, lng: -80.3831 }, // Plymouth
  "32771": { lat: 28.4280, lng: -80.3431 }, // Sanford
  "32772": { lat: 28.3780, lng: -80.3031 }, // Sanford
  "32773": { lat: 28.3280, lng: -80.2631 }, // Sanford
  "32774": { lat: 28.2780, lng: -80.2231 }, // Orange City
  "32775": { lat: 28.2280, lng: -80.1831 }, // Scottsmoor
  "32776": { lat: 28.1780, lng: -80.1431 }, // Sorrento
  "32777": { lat: 28.1280, lng: -80.1031 }, // Tangerine
  "32778": { lat: 28.0780, lng: -80.0631 }, // Tavares
  "32779": { lat: 28.0280, lng: -80.0231 }, // Longwood
  "32780": { lat: 28.4780, lng: -80.7231 }, // Titusville
  "32781": { lat: 28.4280, lng: -80.6831 }, // Titusville
  "32782": { lat: 28.3780, lng: -80.6431 }, // Titusville
  "32783": { lat: 28.3280, lng: -80.6031 }, // Titusville
  "32784": { lat: 28.2780, lng: -80.5631 }, // Umatilla
  "32789": { lat: 28.2280, lng: -80.5231 }, // Winter Park
  "32790": { lat: 28.1780, lng: -80.4831 }, // Winter Park
  "32791": { lat: 28.1280, lng: -80.4431 }, // Longwood
  "32792": { lat: 28.0780, lng: -80.4031 }, // Winter Park
  "32793": { lat: 28.0280, lng: -80.3631 }, // Winter Park
  "32794": { lat: 27.9780, lng: -80.3231 }, // Maitland
  "32795": { lat: 27.9280, lng: -80.2831 }, // Lake Mary
  "32796": { lat: 27.8780, lng: -80.2431 }, // Titusville
  "32798": { lat: 27.8280, lng: -80.2031 }, // Zellwood
  "32799": { lat: 27.7780, lng: -80.1631 }, // Mid Florida
  "32801": { lat: 28.5489, lng: -81.3789 }, // Orlando
  "32802": { lat: 28.4989, lng: -81.3389 }, // Orlando
  "32803": { lat: 28.4489, lng: -81.2989 }, // Orlando
  "32804": { lat: 28.3989, lng: -81.2589 }, // Orlando
  "32805": { lat: 28.3489, lng: -81.2189 }, // Orlando
  "32806": { lat: 28.2989, lng: -81.1789 }, // Orlando
  "32807": { lat: 28.2489, lng: -81.1389 }, // Orlando
  "32808": { lat: 28.1989, lng: -81.0989 }, // Orlando
  "32809": { lat: 28.1489, lng: -81.0589 }, // Orlando
  "32810": { lat: 28.0989, lng: -81.0189 }, // Orlando
  "32811": { lat: 28.0489, lng: -80.9789 }, // Orlando
  "32812": { lat: 27.9989, lng: -80.9389 }, // Orlando
  "32814": { lat: 27.9489, lng: -80.8989 }, // Orlando
  "32815": { lat: 28.4489, lng: -81.4189 }, // Orlando
  "32816": { lat: 28.3989, lng: -81.3789 }, // Orlando
  "32817": { lat: 28.3489, lng: -81.3389 }, // Orlando
  "32818": { lat: 28.2989, lng: -81.2989 }, // Orlando
  "32819": { lat: 28.2489, lng: -81.2589 }, // Orlando
  "32820": { lat: 28.1989, lng: -81.2189 }, // Orlando
  "32821": { lat: 28.1489, lng: -81.1789 }, // Orlando
  "32822": { lat: 28.0989, lng: -81.1389 }, // Orlando
  "32824": { lat: 28.0489, lng: -81.0989 }, // Orlando
  "32825": { lat: 27.9989, lng: -81.0589 }, // Orlando
  "32826": { lat: 27.9489, lng: -81.0189 }, // Orlando
  "32827": { lat: 27.8989, lng: -80.9789 }, // Orlando
  "32828": { lat: 27.8489, lng: -80.9389 }, // Orlando
  "32829": { lat: 27.7989, lng: -80.8989 }, // Orlando
  "32830": { lat: 28.4189, lng: -81.5389 }, // Lake Buena Vista
  "32831": { lat: 28.3689, lng: -81.4989 }, // Orlando
  "32832": { lat: 28.3189, lng: -81.4589 }, // Orlando
  "32833": { lat: 28.2689, lng: -81.4189 }, // Orlando
  "32834": { lat: 28.2189, lng: -81.3789 }, // Orlando
  "32835": { lat: 28.1689, lng: -81.3389 }, // Orlando
  "32836": { lat: 28.1189, lng: -81.2989 }, // Orlando
  "32837": { lat: 28.0689, lng: -81.2589 }, // Orlando
  "32839": { lat: 28.0189, lng: -81.2189 }, // Orlando
  "32853": { lat: 27.9689, lng: -81.1789 }, // Orlando
  "32854": { lat: 27.9189, lng: -81.1389 }, // Orlando
  "32855": { lat: 27.8689, lng: -81.0989 }, // Orlando
  "32856": { lat: 27.8189, lng: -81.0589 }, // Orlando
  "32857": { lat: 27.7689, lng: -81.0189 }, // Orlando
  "32858": { lat: 27.7189, lng: -80.9789 }, // Orlando
  "32859": { lat: 27.6689, lng: -80.9389 }, // Orlando
  "32860": { lat: 27.6189, lng: -80.8989 }, // Orlando
  "32861": { lat: 27.5689, lng: -80.8589 }, // Orlando
  "32862": { lat: 27.5189, lng: -80.8189 }, // Orlando
  "32867": { lat: 27.4689, lng: -80.7789 }, // Orlando
  "32868": { lat: 27.4189, lng: -80.7389 }, // Orlando
  "32869": { lat: 27.3689, lng: -80.6989 }, // Orlando
  "32872": { lat: 27.3189, lng: -80.6589 }, // Orlando
  "32877": { lat: 27.2689, lng: -80.6189 }, // Orlando
  "32878": { lat: 27.2189, lng: -80.5789 }, // Orlando
  "32885": { lat: 27.1689, lng: -80.5389 }, // Orlando
  "32886": { lat: 27.1189, lng: -80.4989 }, // Orlando
  "32887": { lat: 27.0689, lng: -80.4589 }, // Orlando
  "32891": { lat: 27.0189, lng: -80.4189 }, // Orlando
  "32896": { lat: 26.9689, lng: -80.3789 }, // Orlando
  "32897": { lat: 26.9189, lng: -80.3389 }, // Orlando
  "32899": { lat: 26.8689, lng: -80.2989 }, // Orlando
  // Brevard County (Melbourne/Viera area)
  "32901": { lat: 28.0983, lng: -80.6431 }, // Melbourne
  "32902": { lat: 28.0483, lng: -80.6031 }, // Melbourne
  "32903": { lat: 27.9983, lng: -80.5631 }, // Indialantic
  "32904": { lat: 27.9483, lng: -80.5231 }, // Melbourne
  "32905": { lat: 27.8983, lng: -80.4831 }, // Palm Bay
  "32906": { lat: 27.8483, lng: -80.4431 }, // Palm Bay
  "32907": { lat: 27.7983, lng: -80.4031 }, // Palm Bay
  "32908": { lat: 27.7483, lng: -80.3631 }, // Palm Bay
  "32910": { lat: 27.6983, lng: -80.3231 }, // Palm Bay
  "32911": { lat: 27.6483, lng: -80.2831 }, // Palm Bay
  "32912": { lat: 27.5983, lng: -80.2431 }, // Palm Bay
  "32919": { lat: 28.1483, lng: -80.6831 }, // Melbourne
  "32920": { lat: 28.1983, lng: -80.7231 }, // Cape Canaveral
  "32922": { lat: 28.2483, lng: -80.7631 }, // Cocoa
  "32923": { lat: 28.2983, lng: -80.8031 }, // Cocoa
  "32924": { lat: 28.3483, lng: -80.8431 }, // Cocoa
  "32925": { lat: 28.3983, lng: -80.8831 }, // Patrick AFB
  "32926": { lat: 28.4483, lng: -80.9231 }, // Cocoa
  "32927": { lat: 28.4983, lng: -80.9631 }, // Cocoa
  "32931": { lat: 28.5483, lng: -81.0031 }, // Cocoa Beach
  "32932": { lat: 28.5983, lng: -81.0431 }, // Cocoa Beach
  "32934": { lat: 28.6483, lng: -81.0831 }, // Melbourne
  "32935": { lat: 28.6983, lng: -81.1231 }, // Melbourne
  "32936": { lat: 28.7483, lng: -81.1631 }, // Melbourne
  "32937": { lat: 28.7983, lng: -81.2031 }, // Satellite Beach
  "32938": { lat: 28.8483, lng: -81.2431 }, // Melbourne Beach
  "32939": { lat: 28.8983, lng: -81.2831 }, // Melbourne
  "32941": { lat: 28.9483, lng: -81.3631 }, // Melbourne
  "32948": { lat: 28.9983, lng: -81.4031 }, // Fellsmere
  "32949": { lat: 29.0483, lng: -81.4431 }, // Grant
  "32950": { lat: 28.5483, lng: -80.8231 }, // Malabar
  "32951": { lat: 28.5983, lng: -80.8631 }, // Melbourne Beach
  "32952": { lat: 28.6483, lng: -80.9031 }, // Merritt Island
  "32953": { lat: 28.6983, lng: -80.9431 }, // Merritt Island
  "32954": { lat: 28.7483, lng: -80.9831 }, // Merritt Island
  "32955": { lat: 28.7983, lng: -81.0231 }, // Rockledge
  "32956": { lat: 28.8483, lng: -81.0631 }, // Rockledge
  "32957": { lat: 28.8983, lng: -81.1031 }, // Roseland
  "32958": { lat: 28.9483, lng: -81.1431 }, // Sebastian
  "32959": { lat: 28.9983, lng: -81.1831 }, // Sharpes
  "32960": { lat: 27.5483, lng: -80.4031 }, // Vero Beach
  "32961": { lat: 27.4983, lng: -80.3631 }, // Vero Beach
  "32962": { lat: 27.4483, lng: -80.3231 }, // Vero Beach
  "32963": { lat: 27.3983, lng: -80.2831 }, // Vero Beach
  "32964": { lat: 27.3483, lng: -80.2431 }, // Vero Beach
  "32965": { lat: 27.2983, lng: -80.2031 }, // Vero Beach
  "32966": { lat: 27.2483, lng: -80.1631 }, // Vero Beach
  "32967": { lat: 27.1983, lng: -80.1231 }, // Vero Beach
  "32968": { lat: 27.1483, lng: -80.0831 }, // Vero Beach
  "32969": { lat: 27.0983, lng: -80.0431 }, // Vero Beach
  "32970": { lat: 27.0483, lng: -80.0031 }, // Wabasso
  "32971": { lat: 26.9983, lng: -79.9631 }, // Winter Beach
  "32976": { lat: 27.5983, lng: -80.4431 }, // Micco
  // Florida
  // Georgia - Comprehensive coverage
  "31405": { lat: 32.0045, lng: -81.1156 }, // Savannah (Abercorn)
  "30329": { lat: 33.8163, lng: -84.3320 }, // Atlanta (Briarcliff)
  "30305": { lat: 33.8373, lng: -84.4068 }, // Atlanta (Buckhead)
  "30114": { lat: 34.2368, lng: -84.4908 }, // Canton
  "30117": { lat: 33.5801, lng: -85.0766 }, // Carrollton
  "30341": { lat: 33.9176, lng: -84.2988 }, // Atlanta (Chamblee Dunwoody)
  "30345": { lat: 33.8823, lng: -84.2641 }, // Atlanta (Chamblee Tucker)
  "31909": { lat: 32.4610, lng: -84.9877 }, // Columbus
  "30101": { lat: 33.9526, lng: -84.7296 }, // Marietta (Dallas Hwy)
  "30534": { lat: 34.4212, lng: -84.1191 }, // Dawsonville
  "30809": { lat: 33.5333, lng: -82.1307 }, // Evans
  "30501": { lat: 34.2979, lng: -83.8241 }, // Gainesville
  "31210": { lat: 32.8407, lng: -83.6324 }, // Macon (Grasslands)
  "30022": { lat: 34.0289, lng: -84.1986 }, // Johns Creek
  "30269": { lat: 33.3968, lng: -84.5633 }, // Peachtree City
  "31904": { lat: 32.5402, lng: -84.9519 }, // Columbus (Pinetree)
  "31322": { lat: 32.1155, lng: -81.2475 }, // Pooler
  "30165": { lat: 34.2570, lng: -85.1647 }, // Rome
  "31088": { lat: 32.6207, lng: -83.5999 }, // Warner Robins
  "30188": { lat: 34.1015, lng: -84.5194 }, // Woodstock
  // Atlanta Metro ZIP codes
  "30002": { lat: 33.7683, lng: -84.2988 }, // Avondale Estates
  "30003": { lat: 33.8183, lng: -84.3488 }, // Norcross
  "30004": { lat: 34.0689, lng: -84.2486 }, // Alpharetta
  "30005": { lat: 34.1189, lng: -84.2986 }, // Alpharetta
  "30006": { lat: 34.1689, lng: -84.3486 }, // Marietta
  "30007": { lat: 34.2189, lng: -84.3986 }, // Marietta
  "30008": { lat: 33.9026, lng: -84.7796 }, // Marietta
  "30009": { lat: 34.0689, lng: -84.2486 }, // Alpharetta
  "30010": { lat: 34.1189, lng: -84.2986 }, // Alpharetta
  "30011": { lat: 34.1689, lng: -84.3486 }, // Auburn
  "30012": { lat: 33.6683, lng: -84.2488 }, // Conyers
  "30013": { lat: 33.7183, lng: -84.2988 }, // Conyers
  "30014": { lat: 33.7683, lng: -84.3488 }, // Covington
  "30016": { lat: 33.8183, lng: -84.3988 }, // Covington
  "30017": { lat: 33.8683, lng: -84.4488 }, // Grayson
  "30018": { lat: 33.9183, lng: -84.4988 }, // Jersey
  "30019": { lat: 33.9683, lng: -84.5488 }, // Dacula
  "30020": { lat: 34.0183, lng: -84.5988 }, // Clarkdale
  "30021": { lat: 33.7183, lng: -84.3488 }, // Clarkston
  "30023": { lat: 34.0789, lng: -84.2486 }, // Alpharetta
  "30024": { lat: 34.0689, lng: -84.1486 }, // Suwanee
  "30025": { lat: 34.1189, lng: -84.1986 }, // Suwanee
  "30026": { lat: 34.1689, lng: -84.2486 }, // Duluth
  "30028": { lat: 34.2189, lng: -84.2986 }, // Cumming
  "30029": { lat: 34.2689, lng: -84.3486 }, // North Atlanta
  "30030": { lat: 33.7683, lng: -84.2988 }, // Decatur
  "30031": { lat: 33.8183, lng: -84.3488 }, // Decatur
  "30032": { lat: 33.8683, lng: -84.3988 }, // Decatur
  "30033": { lat: 33.9183, lng: -84.4488 }, // Decatur
  "30034": { lat: 33.9683, lng: -84.4988 }, // Decatur
  "30035": { lat: 34.0183, lng: -84.5488 }, // Decatur
  "30036": { lat: 34.0683, lng: -84.5988 }, // Decatur
  "30037": { lat: 34.1183, lng: -84.6488 }, // Decatur
  "30038": { lat: 33.6683, lng: -84.2988 }, // Lithonia
  "30039": { lat: 33.7183, lng: -84.3488 }, // Snellville
  "30040": { lat: 34.2189, lng: -84.1486 }, // Cumming
  "30041": { lat: 34.2689, lng: -84.1986 }, // Cumming
  "30042": { lat: 34.3189, lng: -84.2486 }, // Lawrenceville
  "30043": { lat: 33.9683, lng: -84.0488 }, // Lawrenceville
  "30044": { lat: 33.9183, lng: -83.9988 }, // Lawrenceville
  "30045": { lat: 33.8683, lng: -83.9488 }, // Lawrenceville
  "30046": { lat: 33.8183, lng: -83.8988 }, // Lawrenceville
  "30047": { lat: 33.7683, lng: -83.8488 }, // Lilburn
  "30048": { lat: 33.7183, lng: -83.7988 }, // Lilburn
  "30049": { lat: 33.6683, lng: -83.7488 }, // Lawrenceville
  "30052": { lat: 33.6183, lng: -83.6988 }, // Loganville
  "30054": { lat: 33.5683, lng: -83.6488 }, // Oxford
  "30055": { lat: 33.5183, lng: -83.5988 }, // Mansfield
  "30056": { lat: 33.4683, lng: -83.5488 }, // Newborn
  "30058": { lat: 33.6183, lng: -84.1988 }, // Lithonia
  "30060": { lat: 33.9526, lng: -84.7296 }, // Marietta
  "30061": { lat: 34.0026, lng: -84.7796 }, // Marietta
  "30062": { lat: 34.0526, lng: -84.8296 }, // Marietta
  "30063": { lat: 33.9026, lng: -84.6796 }, // Marietta
  "30064": { lat: 33.8526, lng: -84.6296 }, // Marietta
  "30065": { lat: 33.8026, lng: -84.5796 }, // Marietta
  "30066": { lat: 34.1026, lng: -84.8796 }, // Marietta
  "30067": { lat: 33.9526, lng: -84.4796 }, // Marietta
  "30068": { lat: 33.9026, lng: -84.4296 }, // Marietta
  "30069": { lat: 33.8526, lng: -84.3796 }, // Marietta
  "30070": { lat: 33.4683, lng: -84.4988 }, // Porterdale
  "30071": { lat: 33.9183, lng: -84.2488 }, // Norcross
  "30072": { lat: 33.8683, lng: -84.1988 }, // Pine Lake
  "30073": { lat: 33.8183, lng: -84.1488 }, // Decatur
  "30074": { lat: 33.7683, lng: -84.0988 }, // Redan
  "30075": { lat: 34.0183, lng: -84.3988 }, // Roswell
  "30076": { lat: 34.0683, lng: -84.4488 }, // Roswell
  "30077": { lat: 34.1183, lng: -84.4988 }, // Roswell
  "30078": { lat: 33.8683, lng: -84.0488 }, // Snellville
  "30079": { lat: 33.8183, lng: -83.9988 }, // Scottdale
  "30080": { lat: 33.9526, lng: -84.3796 }, // Smyrna
  "30081": { lat: 34.0026, lng: -84.4296 }, // Smyrna
  "30082": { lat: 33.9026, lng: -84.3296 }, // Smyrna
  "30083": { lat: 33.7683, lng: -84.1988 }, // Stone Mountain
  "30084": { lat: 33.7183, lng: -84.1488 }, // Tucker
  "30085": { lat: 33.6683, lng: -84.0988 }, // Tucker
  "30086": { lat: 33.6183, lng: -84.0488 }, // Stone Mountain
  "30087": { lat: 33.8183, lng: -84.0988 }, // Stone Mountain
  "30088": { lat: 33.7683, lng: -84.0488 }, // Stone Mountain
  "30089": { lat: 33.7183, lng: -83.9988 }, // Stone Mountain
  "30090": { lat: 33.9526, lng: -84.2796 }, // Marietta
  "30091": { lat: 33.9183, lng: -84.1988 }, // Norcross
  "30092": { lat: 33.9683, lng: -84.2488 }, // Peachtree Corners
  "30093": { lat: 33.8683, lng: -84.1488 }, // Norcross
  "30094": { lat: 33.8183, lng: -84.0988 }, // Conyers
  "30095": { lat: 34.0683, lng: -84.3488 }, // Duluth
  "30096": { lat: 34.0183, lng: -84.2988 }, // Duluth
  "30097": { lat: 34.1183, lng: -84.3988 }, // Duluth
  "30098": { lat: 33.9683, lng: -84.1988 }, // Duluth
  "30099": { lat: 33.9183, lng: -84.1488 }, // Duluth
  // Atlanta ZIP codes
  "30301": { lat: 33.7683, lng: -84.3988 }, // Atlanta
  "30302": { lat: 33.8183, lng: -84.4488 }, // Atlanta
  "30303": { lat: 33.8683, lng: -84.4988 }, // Atlanta
  "30304": { lat: 33.9183, lng: -84.5488 }, // Atlanta
  "30306": { lat: 33.7683, lng: -84.3488 }, // Atlanta
  "30307": { lat: 33.8183, lng: -84.3988 }, // Atlanta
  "30308": { lat: 33.8683, lng: -84.4488 }, // Atlanta
  "30309": { lat: 33.9183, lng: -84.4988 }, // Atlanta
  "30310": { lat: 33.7683, lng: -84.2988 }, // Atlanta
  "30311": { lat: 33.8183, lng: -84.3488 }, // Atlanta
  "30312": { lat: 33.8683, lng: -84.3988 }, // Atlanta
  "30313": { lat: 33.9183, lng: -84.4488 }, // Atlanta
  "30314": { lat: 33.7683, lng: -84.2488 }, // Atlanta
  "30315": { lat: 33.8183, lng: -84.2988 }, // Atlanta
  "30316": { lat: 33.8683, lng: -84.3488 }, // Atlanta
  "30317": { lat: 33.9183, lng: -84.3988 }, // Atlanta
  "30318": { lat: 33.7683, lng: -84.1988 }, // Atlanta
  "30319": { lat: 33.8183, lng: -84.2488 }, // Atlanta
  "30320": { lat: 33.8683, lng: -84.2988 }, // Atlanta
  "30321": { lat: 33.9183, lng: -84.3488 }, // Atlanta
  "30322": { lat: 33.7683, lng: -84.1488 }, // Atlanta
  "30324": { lat: 33.8183, lng: -84.1988 }, // Atlanta
  "30325": { lat: 33.8683, lng: -84.2488 }, // Atlanta
  "30326": { lat: 33.9183, lng: -84.2988 }, // Atlanta
  "30327": { lat: 33.7683, lng: -84.0988 }, // Atlanta
  "30328": { lat: 33.8183, lng: -84.1488 }, // Atlanta
  "30330": { lat: 33.8683, lng: -84.1988 }, // Atlanta
  "30331": { lat: 33.9183, lng: -84.2488 }, // Atlanta
  "30332": { lat: 33.7683, lng: -84.0488 }, // Atlanta
  "30333": { lat: 33.8183, lng: -84.0988 }, // Atlanta
  "30334": { lat: 33.8683, lng: -84.1488 }, // Atlanta
  "30336": { lat: 33.9183, lng: -84.1988 }, // Atlanta
  "30337": { lat: 33.7683, lng: -83.9988 }, // Atlanta
  "30338": { lat: 33.8183, lng: -84.0488 }, // Atlanta
  "30339": { lat: 33.8683, lng: -84.0988 }, // Atlanta
  "30340": { lat: 33.9183, lng: -84.1488 }, // Atlanta
  "30342": { lat: 33.7683, lng: -83.9488 }, // Atlanta
  "30343": { lat: 33.8183, lng: -83.9988 }, // Atlanta
  "30344": { lat: 33.8683, lng: -84.0488 }, // Atlanta
  "30346": { lat: 33.9183, lng: -84.0988 }, // Atlanta
  "30347": { lat: 33.7683, lng: -83.8988 }, // Atlanta
  "30348": { lat: 33.8183, lng: -83.9488 }, // Atlanta
  "30349": { lat: 33.8683, lng: -83.9988 }, // Atlanta
  "30350": { lat: 33.9183, lng: -84.0488 }, // Atlanta
  "30353": { lat: 33.7683, lng: -83.8488 }, // Atlanta
  "30354": { lat: 33.8183, lng: -83.8988 }, // Atlanta
  "30355": { lat: 33.8683, lng: -83.9488 }, // Atlanta
  "30356": { lat: 33.9183, lng: -83.9988 }, // Atlanta
  "30357": { lat: 33.7683, lng: -83.7988 }, // Atlanta
  "30358": { lat: 33.8183, lng: -83.8488 }, // Atlanta
  "30359": { lat: 33.8683, lng: -83.8988 }, // Atlanta
  "30360": { lat: 33.9183, lng: -83.9488 }, // Atlanta
  "30361": { lat: 33.7683, lng: -83.7488 }, // Atlanta
  "30362": { lat: 33.8183, lng: -83.7988 }, // Atlanta
  "30363": { lat: 33.8683, lng: -83.8488 }, // Atlanta
  "30364": { lat: 33.9183, lng: -83.8988 }, // Atlanta
  "30366": { lat: 33.7683, lng: -83.6988 }, // Atlanta
  "30368": { lat: 33.8183, lng: -83.7488 }, // Atlanta
  "30369": { lat: 33.8683, lng: -83.7988 }, // Atlanta
  "30370": { lat: 33.9183, lng: -83.8488 }, // Atlanta
  "30371": { lat: 33.7683, lng: -83.6488 }, // Atlanta
  "30374": { lat: 33.8183, lng: -83.6988 }, // Atlanta
  "30375": { lat: 33.8683, lng: -83.7488 }, // Atlanta
  "30376": { lat: 33.9183, lng: -83.7988 }, // Atlanta
  "30377": { lat: 33.7683, lng: -83.5988 }, // Atlanta
  "30378": { lat: 33.8183, lng: -83.6488 }, // Atlanta
  "30380": { lat: 33.8683, lng: -83.6988 }, // Atlanta
  "30384": { lat: 33.9183, lng: -83.7488 }, // Atlanta
  "30385": { lat: 33.7683, lng: -83.5488 }, // Atlanta
  "30388": { lat: 33.8183, lng: -83.5988 }, // Atlanta
  "30392": { lat: 33.8683, lng: -83.6488 }, // Atlanta
  "30394": { lat: 33.9183, lng: -83.6988 }, // Atlanta
  "30396": { lat: 33.7683, lng: -83.4988 }, // Atlanta
  "30398": { lat: 33.8183, lng: -83.5488 }, // Atlanta
  "31106": { lat: 33.8683, lng: -84.5988 }, // Atlanta
  "31107": { lat: 33.9183, lng: -84.6488 }, // Atlanta
  "31119": { lat: 33.7683, lng: -84.4988 }, // Atlanta
  "31126": { lat: 33.8183, lng: -84.5488 }, // Atlanta
  "31131": { lat: 33.8683, lng: -84.5988 }, // Atlanta
  "31136": { lat: 33.9183, lng: -84.6488 }, // Atlanta
  "31139": { lat: 33.7683, lng: -84.4488 }, // Atlanta
  "31141": { lat: 33.8183, lng: -84.4988 }, // Atlanta
  "31145": { lat: 33.8683, lng: -84.5488 }, // Atlanta
  "31146": { lat: 33.9183, lng: -84.5988 }, // Atlanta
  "31150": { lat: 33.7683, lng: -84.3488 }, // Atlanta
  "31156": { lat: 33.8183, lng: -84.3988 }, // Atlanta
  "31192": { lat: 33.8683, lng: -84.4488 }, // Atlanta
  "31193": { lat: 33.9183, lng: -84.4988 }, // Atlanta
  "31195": { lat: 33.7683, lng: -84.2488 }, // Atlanta
  "31196": { lat: 33.8183, lng: -84.2988 }, // Atlanta
  "39901": { lat: 33.8683, lng: -84.3488 }, // Atlanta
  // New Jersey - Comprehensive coverage
  "08520": { lat: 40.2668, lng: -74.5443 }, // East Windsor
  "07726": { lat: 40.2979, lng: -74.3582 }, // Englishtown
  "07932": { lat: 40.7879, lng: -74.3882 }, // Florham Park
  "08690": { lat: 40.2273, lng: -74.6532 }, // Hamilton Square
  "08648": { lat: 40.2979, lng: -74.7296 }, // Lawrenceville
  "07430": { lat: 41.0887, lng: -74.1438 }, // Mahwah
  "07652": { lat: 40.9445, lng: -74.0754 }, // Paramus
  "07444": { lat: 40.9709, lng: -74.3007 }, // Pompton Plains
  "08873": { lat: 40.4916, lng: -74.5043 }, // Somerset
  // Additional NJ ZIP codes for better coverage
  "07960": { lat: 40.7968, lng: -74.4815 }, // Morristown
  "07940": { lat: 40.7793, lng: -74.4243 }, // Madison
  "07950": { lat: 40.7759, lng: -74.4385 }, // Morris Plains
  "07976": { lat: 40.8184, lng: -74.4010 }, // New Vernon
  "07935": { lat: 40.7468, lng: -74.4013 }, // Green Village
  "07928": { lat: 40.7407, lng: -74.3881 }, // Chatham
  "07922": { lat: 40.7187, lng: -74.3785 }, // Berkeley Heights
  "07974": { lat: 40.6965, lng: -74.4018 }, // New Providence
  "07901": { lat: 40.7141, lng: -74.3635 }, // Summit
  "07980": { lat: 40.7587, lng: -74.3607 }, // Stirling
  "07920": { lat: 40.7036, lng: -74.4624 }, // Basking Ridge
  "07931": { lat: 40.6820, lng: -74.4404 }, // Far Hills
  "07933": { lat: 40.6668, lng: -74.4504 }, // Gillette
  "07934": { lat: 40.6520, lng: -74.4318 }, // Gladstone
  "07938": { lat: 40.6365, lng: -74.4085 }, // Lyons
  "07939": { lat: 40.6215, lng: -74.4232 }, // Lyons
  "07946": { lat: 40.8187, lng: -74.3043 }, // Millington
  "07970": { lat: 40.8237, lng: -74.2554 }, // Mount Freedom
  "07977": { lat: 40.8365, lng: -74.2732 }, // Peapack-Gladstone
  "07978": { lat: 40.8459, lng: -74.2454 }, // Pluckemin
  "07979": { lat: 40.8576, lng: -74.2832 }, // Pottersville
  "07981": { lat: 40.7543, lng: -74.4777 }, // Whippany
  "07999": { lat: 40.7543, lng: -74.4777 }, // Whippany
  "07054": { lat: 40.8687, lng: -74.3882 }, // Parsippany
  "07034": { lat: 40.8787, lng: -74.3032 }, // Lake Hiawatha
  "07005": { lat: 40.8934, lng: -74.2588 }, // Boonton
  "07046": { lat: 40.8915, lng: -74.2835 }, // Mountain Lakes
  "07045": { lat: 40.9034, lng: -74.3304 }, // Montville
  "07058": { lat: 40.9165, lng: -74.3054 }, // Pine Brook
  "07082": { lat: 40.9268, lng: -74.2723 }, // Towaco
  "07035": { lat: 40.9409, lng: -74.3010 }, // Lincoln Park
  "07004": { lat: 40.9470, lng: -74.2454 }, // Fairfield
  "07044": { lat: 40.8620, lng: -74.2035 }, // Verona
  "07042": { lat: 40.8187, lng: -74.2135 }, // Montclair
  "07043": { lat: 40.8387, lng: -74.2035 }, // Upper Montclair
  "07052": { lat: 40.7948, lng: -74.2432 }, // West Orange
  "07050": { lat: 40.7737, lng: -74.2332 }, // Orange
  "07018": { lat: 40.7637, lng: -74.2232 }, // East Orange
  "07017": { lat: 40.7537, lng: -74.2132 }, // East Orange
  "07028": { lat: 40.7837, lng: -74.2032 }, // Glen Ridge
  "07009": { lat: 40.7437, lng: -74.1932 }, // Cedar Grove
  "07006": { lat: 40.7237, lng: -74.1832 }, // Caldwell
  "07007": { lat: 40.7137, lng: -74.1732 }, // Caldwell
  "07039": { lat: 40.7937, lng: -74.1632 }, // Livingston
  "07068": { lat: 40.7737, lng: -74.1532 }, // Roseland
  "07078": { lat: 40.7537, lng: -74.1432 }, // Short Hills
  "07079": { lat: 40.7337, lng: -74.1332 }, // South Orange
  "07040": { lat: 40.7137, lng: -74.1232 }, // Maplewood
  "07041": { lat: 40.6937, lng: -74.1132 }, // Millburn
  "07090": { lat: 40.6737, lng: -74.1032 }, // Westfield
  "07092": { lat: 40.6537, lng: -74.0932 }, // Mountainside
  "07016": { lat: 40.6337, lng: -74.0832 }, // Cranford
  "07027": { lat: 40.6137, lng: -74.0732 }, // Garwood
  "07023": { lat: 40.5937, lng: -74.0632 }, // Fanwood
  "07076": { lat: 40.5737, lng: -74.0532 }, // Scotch Plains
  "07060": { lat: 40.5537, lng: -74.0432 }, // Plainfield
  "07062": { lat: 40.5337, lng: -74.0332 }, // Plainfield
  "07063": { lat: 40.5137, lng: -74.0232 }, // Plainfield
  "07080": { lat: 40.4937, lng: -74.0132 }, // South Plainfield
  "07095": { lat: 40.4737, lng: -74.0032 }, // Woodbridge
  "07001": { lat: 40.4537, lng: -73.9932 }, // Avenel
  "07064": { lat: 40.4337, lng: -73.9832 }, // Port Reading
  "07077": { lat: 40.4137, lng: -73.9732 }, // Sewaren
  "07067": { lat: 40.3937, lng: -73.9632 }, // Colonia
  "07065": { lat: 40.3737, lng: -73.9532 }, // Rahway
  "07036": { lat: 40.3537, lng: -73.9432 }, // Linden
  "07008": { lat: 40.3337, lng: -73.9332 }, // Carteret
  "07002": { lat: 40.3137, lng: -73.9232 }, // Bayonne
  "07030": { lat: 40.2937, lng: -73.9132 }, // Hoboken
  "07086": { lat: 40.2737, lng: -73.9032 }, // Weehawken
  "07047": { lat: 40.2537, lng: -73.8932 }, // North Bergen
  "07010": { lat: 40.2337, lng: -73.8832 }, // Cliffside Park
  "07020": { lat: 40.2137, lng: -73.8732 }, // Edgewater
  "07024": { lat: 40.1937, lng: -73.8632 }, // Fort Lee
  "07605": { lat: 40.1737, lng: -73.8532 }, // Leonia
  "07632": { lat: 40.1537, lng: -73.8432 }, // Englewood Cliffs
  "07631": { lat: 40.1337, lng: -73.8332 }, // Englewood
  "07621": { lat: 40.1137, lng: -73.8232 }, // Bergenfield
  "07628": { lat: 40.0937, lng: -73.8132 }, // Dumont
  "07624": { lat: 40.0737, lng: -73.8032 }, // Closter
  "07626": { lat: 40.0537, lng: -73.7932 }, // Cresskill
  "07627": { lat: 40.0337, lng: -73.7832 }, // Demarest
  "07641": { lat: 40.0137, lng: -73.7732 }, // Haworth
  "07640": { lat: 39.9937, lng: -73.7632 }, // Harrington Park
  "07642": { lat: 39.9737, lng: -73.7532 }, // Hillsdale
  "07643": { lat: 39.9537, lng: -73.7432 }, // Little Ferry
  "07646": { lat: 39.9337, lng: -73.7332 }, // New Milford
  "07649": { lat: 39.9137, lng: -73.7232 }, // Oradell
  "07650": { lat: 39.8937, lng: -73.7132 }, // Palisades Park
  "07653": { lat: 39.8737, lng: -73.7032 }, // Paramus
  "07656": { lat: 39.8537, lng: -73.6932 }, // Park Ridge
  "07657": { lat: 39.8337, lng: -73.6832 }, // Ridgefield
  "07660": { lat: 39.8137, lng: -73.6732 }, // Ridgefield Park
  "07661": { lat: 39.7937, lng: -73.6632 }, // River Edge
  "07662": { lat: 39.7737, lng: -73.6532 }, // Rochelle Park
  "07663": { lat: 39.7537, lng: -73.6432 }, // Saddle Brook
  "07666": { lat: 39.7337, lng: -73.6332 }, // Teaneck
  "07670": { lat: 39.7137, lng: -73.6232 }, // Tenafly
  "07675": { lat: 39.6937, lng: -73.6132 }, // Westwood
  "07676": { lat: 39.6737, lng: -73.6032 }, // Township of Washington
  "07677": { lat: 39.6537, lng: -73.5932 }, // Woodcliff Lake
  "07401": { lat: 41.0537, lng: -74.1432 }, // Allendale
  "07403": { lat: 41.0337, lng: -74.1332 }, // Bloomingdale
  "07405": { lat: 41.0137, lng: -74.1232 }, // Butler
  "07407": { lat: 40.9937, lng: -74.1132 }, // Elmwood Park
  "07410": { lat: 40.9737, lng: -74.1032 }, // Fair Lawn
  "07417": { lat: 40.9537, lng: -74.0932 }, // Franklin Lakes
  "07420": { lat: 40.9337, lng: -74.0832 }, // Haskell
  "07421": { lat: 40.9137, lng: -74.0732 }, // Hawthorne
  "07423": { lat: 40.8937, lng: -74.0632 }, // Ho-Ho-Kus
  "07432": { lat: 40.8737, lng: -74.0532 }, // Little Falls
  "07435": { lat: 40.8537, lng: -74.0432 }, // Newfoundland
  "07436": { lat: 40.8337, lng: -74.0332 }, // Oakland
  "07438": { lat: 40.8137, lng: -74.0232 }, // Oak Ridge
  "07442": { lat: 40.7937, lng: -74.0132 }, // Pompton Lakes
  "07446": { lat: 40.7737, lng: -74.0032 }, // Ramsey
  "07450": { lat: 40.7537, lng: -73.9932 }, // Ridgewood
  "07451": { lat: 40.7337, lng: -73.9832 }, // Ridgewood
  "07452": { lat: 40.7137, lng: -73.9732 }, // Glen Rock
  "07456": { lat: 40.6937, lng: -73.9632 }, // Ringwood
  "07457": { lat: 40.6737, lng: -73.9532 }, // Riverdale
  "07458": { lat: 40.6537, lng: -73.9432 }, // Saddle River
  "07463": { lat: 40.6337, lng: -73.9332 }, // Waldwick
  "07465": { lat: 40.6137, lng: -73.9232 }, // Wanaque
  "07470": { lat: 40.5937, lng: -73.9132 }, // Wayne
  "07474": { lat: 40.5737, lng: -73.9032 }, // Wayne
  "07477": { lat: 40.5537, lng: -73.8932 }, // Wayne
  "07480": { lat: 40.5337, lng: -73.8832 }, // West Milford
  "07481": { lat: 40.5137, lng: -73.8732 }, // Wyckoff
  "07495": { lat: 40.4937, lng: -73.8632 }, // Mahwah
  "08816": { lat: 40.4337, lng: -74.4432 }, // East Brunswick
  "08817": { lat: 40.4137, lng: -74.4332 }, // Edison
  "08818": { lat: 40.3937, lng: -74.4232 }, // Edison
  "08820": { lat: 40.3737, lng: -74.4132 }, // Edison
  "08830": { lat: 40.3537, lng: -74.4032 }, // Iselin
  "08832": { lat: 40.3337, lng: -74.3932 }, // Keasbey
  "08837": { lat: 40.3137, lng: -74.3832 }, // Edison
  "08840": { lat: 40.2937, lng: -74.3732 }, // Metuchen
  "08846": { lat: 40.2737, lng: -74.3632 }, // Middlesex
  "08850": { lat: 40.2537, lng: -74.3532 }, // Milltown
  "08852": { lat: 40.2337, lng: -74.3432 }, // Monmouth Junction
  "08854": { lat: 40.2137, lng: -74.3332 }, // Piscataway
  "08855": { lat: 40.1937, lng: -74.3232 }, // Piscataway
  "08857": { lat: 40.1737, lng: -74.3132 }, // Old Bridge
  "08859": { lat: 40.1537, lng: -74.3032 }, // Parlin
  "08861": { lat: 40.1337, lng: -74.2932 }, // Perth Amboy
  "08862": { lat: 40.1137, lng: -74.2832 }, // Perth Amboy
  "08863": { lat: 40.0937, lng: -74.2732 }, // Fords
  "08872": { lat: 40.0737, lng: -74.2632 }, // Sayreville
  "08879": { lat: 40.0537, lng: -74.2532 }, // South Amboy
  "08882": { lat: 40.0337, lng: -74.2432 }, // South River
  "08884": { lat: 40.0137, lng: -74.2332 }, // Spotswood
  "08899": { lat: 39.9937, lng: -74.2232 }, // Edison
  "08512": { lat: 40.2937, lng: -74.5232 }, // Cranbury
  "08525": { lat: 40.2737, lng: -74.5132 }, // Hopewell
  "08528": { lat: 40.2537, lng: -74.5032 }, // Kingston
  "08534": { lat: 40.2337, lng: -74.4932 }, // Pennington
  "08536": { lat: 40.2137, lng: -74.4832 }, // Plainsboro
  "08540": { lat: 40.1937, lng: -74.4732 }, // Princeton
  "08542": { lat: 40.1737, lng: -74.4632 }, // Princeton
  "08544": { lat: 40.1537, lng: -74.4532 }, // Princeton Junction
  "08550": { lat: 40.1337, lng: -74.4432 }, // Princeton Junction
  "08560": { lat: 40.1137, lng: -74.4332 }, // Titusville
  "08608": { lat: 40.2237, lng: -74.7832 }, // Trenton
  "08609": { lat: 40.2037, lng: -74.7732 }, // Trenton
  "08610": { lat: 40.1837, lng: -74.7632 }, // Trenton
  "08611": { lat: 40.1637, lng: -74.7532 }, // Trenton
  "08618": { lat: 40.1437, lng: -74.7432 }, // Trenton
  "08619": { lat: 40.1237, lng: -74.7332 }, // Trenton
  "08620": { lat: 40.1037, lng: -74.7232 }, // Trenton
  "08628": { lat: 40.0837, lng: -74.7132 }, // Trenton
  "08629": { lat: 40.0637, lng: -74.7032 }, // Trenton
  "08638": { lat: 40.0437, lng: -74.6932 }, // Trenton
  "08641": { lat: 40.0237, lng: -74.6832 }, // Trenton
  "08650": { lat: 40.0037, lng: -74.6732 }, // Trenton
  "08666": { lat: 39.9837, lng: -74.6632 }, // Trenton
  "08677": { lat: 39.9637, lng: -74.6532 }, // Trenton
  "08691": { lat: 40.2473, lng: -74.6532 }, // Hamilton
  "08695": { lat: 40.2273, lng: -74.6432 }, // Hamilton
  "07701": { lat: 40.2173, lng: -74.2532 }, // Red Bank
  "07702": { lat: 40.1973, lng: -74.2432 }, // Shrewsbury
  "07703": { lat: 40.1773, lng: -74.2332 }, // Fort Monmouth
  "07704": { lat: 40.1573, lng: -74.2232 }, // Fair Haven
  "07709": { lat: 40.1373, lng: -74.2132 }, // Red Bank
  "07710": { lat: 40.1173, lng: -74.2032 }, // Adelphia
  "07711": { lat: 40.0973, lng: -74.1932 }, // Allenhurst
  "07712": { lat: 40.0773, lng: -74.1832 }, // Asbury Park
  "07715": { lat: 40.0573, lng: -74.1732 }, // Belmar
  "07716": { lat: 40.0373, lng: -74.1632 }, // Atlantic Highlands
  "07717": { lat: 40.0173, lng: -74.1532 }, // Avon by the Sea
  "07718": { lat: 39.9973, lng: -74.1432 }, // Belford
  "07719": { lat: 39.9773, lng: -74.1332 }, // Belmar
  "07720": { lat: 39.9573, lng: -74.1232 }, // Bradley Beach
  "07721": { lat: 39.9373, lng: -74.1132 }, // Cliffwood
  "07722": { lat: 39.9173, lng: -74.1032 }, // Colts Neck
  "07723": { lat: 39.8973, lng: -74.0932 }, // Deal
  "07724": { lat: 39.8773, lng: -74.0832 }, // Eatontown
  "07727": { lat: 40.2873, lng: -74.3332 }, // Farmingdale
  "07728": { lat: 40.2673, lng: -74.3232 }, // Freehold
  "07730": { lat: 40.2473, lng: -74.3132 }, // Hazlet
  "07731": { lat: 40.2273, lng: -74.3032 }, // Howell
  "07732": { lat: 40.2073, lng: -74.2932 }, // Highlands
  "07733": { lat: 40.1873, lng: -74.2832 }, // Holmdel
  "07734": { lat: 40.1673, lng: -74.2732 }, // Keansburg
  "07735": { lat: 40.1473, lng: -74.2632 }, // Keyport
  "07737": { lat: 40.1273, lng: -74.2532 }, // Leonardo
  "07738": { lat: 40.1073, lng: -74.2432 }, // Lincroft
  "07739": { lat: 40.0873, lng: -74.2332 }, // Little Silver
  "07740": { lat: 40.0673, lng: -74.2232 }, // Long Branch
  "07746": { lat: 40.0473, lng: -74.2132 }, // Marlboro
  "07747": { lat: 40.0273, lng: -74.2032 }, // Matawan
  "07748": { lat: 40.0073, lng: -74.1932 }, // Middletown
  "07750": { lat: 39.9873, lng: -74.1832 }, // Monmouth Beach
  "07751": { lat: 39.9673, lng: -74.1732 }, // Morganville
  "07752": { lat: 39.9473, lng: -74.1632 }, // Navesink
  "07753": { lat: 39.9273, lng: -74.1532 }, // Neptune
  "07754": { lat: 39.9073, lng: -74.1432 }, // Oakhurst
  "07755": { lat: 39.8873, lng: -74.1332 }, // Ocean Grove
  "07756": { lat: 39.8673, lng: -74.1232 }, // Oceanport
  "07757": { lat: 39.8473, lng: -74.1132 }, // Oceanport
  "07758": { lat: 39.8273, lng: -74.1032 }, // Port Monmouth
  "07760": { lat: 39.8073, lng: -74.0932 }, // Rumson
  "07762": { lat: 39.7873, lng: -74.0832 }, // Spring Lake
  "07763": { lat: 39.7673, lng: -74.0732 }, // Tennent
  "07764": { lat: 39.7473, lng: -74.0632 }, // West Long Branch
  "07765": { lat: 39.7273, lng: -74.0532 }, // Wickatunk
  // New York - Long Island & NYC Comprehensive Coverage
  "11710": { lat: 40.6687, lng: -73.5271 }, // Bellmore
  "11720": { lat: 40.8584, lng: -73.0998 }, // Centereach
  "11725": { lat: 40.8429, lng: -73.2929 }, // Commack
  "11554": { lat: 40.7140, lng: -73.5590 }, // East Meadow
  "11010": { lat: 40.7004, lng: -73.6751 }, // Franklin Square
  "11530": { lat: 40.7282, lng: -73.6343 }, // Garden City
  "11239": { lat: 40.6892, lng: -73.9442 }, // Brooklyn
  "11548": { lat: 40.8107, lng: -73.6265 }, // Greenvale
  "11788": { lat: 40.8254, lng: -73.2104 }, // Hauppauge
  "11758": { lat: 40.6807, lng: -73.4743 }, // Massapequa
  "11747": { lat: 40.7934, lng: -73.4151 }, // Melville
  "10954": { lat: 41.0887, lng: -74.0135 }, // Nanuet
  "11572": { lat: 40.6387, lng: -73.6401 }, // Oceanside
  "11803": { lat: 40.7765, lng: -73.4674 }, // Plainview
  "11901": { lat: 40.9170, lng: -72.6620 }, // Riverhead
  "11778": { lat: 40.9526, lng: -72.9254 }, // Rocky Point
  "11704": { lat: 40.7182, lng: -73.3543 }, // West Babylon
  // Additional Long Island ZIP codes
  "11510": { lat: 40.6487, lng: -73.6071 }, // Baldwin
  "11520": { lat: 40.6687, lng: -73.5871 }, // Freeport
  "11550": { lat: 40.6887, lng: -73.5671 }, // Hempstead
  "11552": { lat: 40.7087, lng: -73.5471 }, // West Hempstead
  "11553": { lat: 40.7287, lng: -73.5271 }, // Uniondale
  "11556": { lat: 40.7487, lng: -73.5071 }, // Uniondale
  "11557": { lat: 40.7687, lng: -73.4871 }, // Hewlett
  "11561": { lat: 40.5887, lng: -73.6471 }, // Long Beach
  "11563": { lat: 40.6087, lng: -73.6271 }, // Lynbrook
  "11565": { lat: 40.6287, lng: -73.6071 }, // Malverne
  "11566": { lat: 40.6487, lng: -73.5871 }, // Merrick
  "11569": { lat: 40.6687, lng: -73.5671 }, // Point Lookout
  "11570": { lat: 40.6887, lng: -73.5471 }, // Rockville Centre
  "11571": { lat: 40.7087, lng: -73.5271 }, // Rockville Centre
  "11575": { lat: 40.7287, lng: -73.5071 }, // Roosevelt
  "11576": { lat: 40.7487, lng: -73.4871 }, // Roslyn
  "11577": { lat: 40.7687, lng: -73.4671 }, // Roslyn Heights
  "11579": { lat: 40.7887, lng: -73.4471 }, // Sea Cliff
  "11580": { lat: 40.8087, lng: -73.4271 }, // Valley Stream
  "11581": { lat: 40.8287, lng: -73.4071 }, // Valley Stream
  "11582": { lat: 40.8487, lng: -73.3871 }, // Valley Stream
  "11590": { lat: 40.8687, lng: -73.3671 }, // Westbury
  "11594": { lat: 40.8887, lng: -73.3471 }, // Westbury
  "11595": { lat: 40.9087, lng: -73.3271 }, // Westbury
  "11596": { lat: 40.9287, lng: -73.3071 }, // Williston Park
  "11598": { lat: 40.9487, lng: -73.2871 }, // Woodmere
  "11701": { lat: 40.6687, lng: -73.5071 }, // Amityville
  "11702": { lat: 40.6887, lng: -73.4871 }, // Babylon
  "11703": { lat: 40.7087, lng: -73.4671 }, // North Babylon
  "11705": { lat: 40.7287, lng: -73.4471 }, // Bayport
  "11706": { lat: 40.7487, lng: -73.4271 }, // Bay Shore
  "11713": { lat: 40.7687, lng: -73.4071 }, // Bellwood
  "11714": { lat: 40.7887, lng: -73.3871 }, // Bethpage
  "11715": { lat: 40.8087, lng: -73.3671 }, // Blue Point
  "11716": { lat: 40.8287, lng: -73.3471 }, // Bohemia
  "11717": { lat: 40.8487, lng: -73.3271 }, // Brentwood
  "11718": { lat: 40.8687, lng: -73.3071 }, // Brightwaters
  "11719": { lat: 40.8887, lng: -73.2871 }, // Brookhaven
  "11721": { lat: 40.9087, lng: -73.2671 }, // Centerport
  "11722": { lat: 40.9287, lng: -73.2471 }, // Central Islip
  "11724": { lat: 40.9487, lng: -73.2271 }, // Cold Spring Harbor
  "11726": { lat: 40.9687, lng: -73.2071 }, // Copiague
  "11727": { lat: 40.9887, lng: -73.1871 }, // Coram
  "11729": { lat: 41.0087, lng: -73.1671 }, // Deer Park
  "11730": { lat: 41.0287, lng: -73.1471 }, // Deer Park
  "11731": { lat: 41.0487, lng: -73.1271 }, // East Northport
  "11733": { lat: 41.0687, lng: -73.1071 }, // East Setauket
  "11735": { lat: 41.0887, lng: -73.0871 }, // Farmingdale
  "11736": { lat: 41.1087, lng: -73.0671 }, // Deer Park
  "11737": { lat: 41.1287, lng: -73.0471 }, // Farmingville
  "11738": { lat: 41.1487, lng: -73.0271 }, // Farmingville
  "11740": { lat: 41.1687, lng: -73.0071 }, // Greenlawn
  "11741": { lat: 41.1887, lng: -72.9871 }, // Holbrook
  "11742": { lat: 41.2087, lng: -72.9671 }, // Holtsville
  "11743": { lat: 41.2287, lng: -72.9471 }, // Huntington
  "11745": { lat: 41.2487, lng: -72.9271 }, // Huntington Station
  "11746": { lat: 41.2687, lng: -72.9071 }, // Huntington Station
  "11749": { lat: 41.2887, lng: -72.8871 }, // Islandia
  "11751": { lat: 41.3087, lng: -72.8671 }, // Islip
  "11752": { lat: 41.3287, lng: -72.8471 }, // Islip Terrace
  "11754": { lat: 41.3487, lng: -72.8271 }, // Kings Park
  "11755": { lat: 41.3687, lng: -72.8071 }, // Lake Grove
  "11756": { lat: 41.3887, lng: -72.7871 }, // Levittown
  "11757": { lat: 41.4087, lng: -72.7671 }, // Lindenhurst
  "11759": { lat: 41.4287, lng: -72.7471 }, // Manorville
  "11760": { lat: 41.4487, lng: -72.7271 }, // Massapequa Park
  "11762": { lat: 41.4687, lng: -72.7071 }, // Massapequa Park
  "11763": { lat: 41.4887, lng: -72.6871 }, // Medford
  "11764": { lat: 41.5087, lng: -72.6671 }, // Medford
  "11765": { lat: 41.5287, lng: -72.6471 }, // Mill Neck
  "11766": { lat: 41.5487, lng: -72.6271 }, // Mount Sinai
  "11767": { lat: 41.5687, lng: -72.6071 }, // Nesconset
  "11768": { lat: 41.5887, lng: -72.5871 }, // Northport
  "11769": { lat: 41.6087, lng: -72.5671 }, // Oakdale
  "11770": { lat: 41.6287, lng: -72.5471 }, // Ocean Beach
  "11771": { lat: 41.6487, lng: -72.5271 }, // Oyster Bay
  "11772": { lat: 41.6687, lng: -72.5071 }, // Patchogue
  "11773": { lat: 41.6887, lng: -72.4871 }, // Patchogue
  "11774": { lat: 41.7087, lng: -72.4671 }, // Patchogue
  "11775": { lat: 41.7287, lng: -72.4471 }, // Melville
  "11776": { lat: 41.7487, lng: -72.4271 }, // Port Jefferson Station
  "11777": { lat: 41.7687, lng: -72.4071 }, // Port Jefferson
  "11779": { lat: 41.7887, lng: -72.3871 }, // Ronkonkoma
  "11780": { lat: 41.8087, lng: -72.3671 }, // Saint James
  "11781": { lat: 41.8287, lng: -72.3471 }, // Sayville
  "11782": { lat: 41.8487, lng: -72.3271 }, // Sayville
  "11783": { lat: 41.8687, lng: -72.3071 }, // Seaford
  "11784": { lat: 41.8887, lng: -72.2871 }, // Selden
  "11786": { lat: 41.9087, lng: -72.2671 }, // Shoreham
  "11787": { lat: 41.9287, lng: -72.2471 }, // Smithtown
  "11789": { lat: 41.9487, lng: -72.2271 }, // Sound Beach
  "11790": { lat: 41.9687, lng: -72.2071 }, // Stony Brook
  "11791": { lat: 41.9887, lng: -72.1871 }, // Syosset
  "11792": { lat: 42.0087, lng: -72.1671 }, // Wading River
  "11793": { lat: 42.0287, lng: -72.1471 }, // Wantagh
  "11794": { lat: 42.0487, lng: -72.1271 }, // West Islip
  "11795": { lat: 42.0687, lng: -72.1071 }, // West Islip
  "11796": { lat: 42.0887, lng: -72.0871 }, // West Sayville
  "11797": { lat: 42.1087, lng: -72.0671 }, // Woodbury
  "11798": { lat: 42.1287, lng: -72.0471 }, // Wyandanch
  "11801": { lat: 40.7687, lng: -73.4871 }, // Hicksville
  "11802": { lat: 40.7887, lng: -73.4671 }, // Hicksville
  "11804": { lat: 40.8087, lng: -73.4471 }, // Old Bethpage
  "11815": { lat: 40.8287, lng: -73.4271 }, // Melville
  "11930": { lat: 40.9487, lng: -72.6871 }, // Amagansett
  "11931": { lat: 40.9687, lng: -72.6671 }, // Aquebogue
  "11932": { lat: 40.9887, lng: -72.6471 }, // Bridgehampton
  "11933": { lat: 41.0087, lng: -72.6271 }, // Calverton
  "11934": { lat: 41.0287, lng: -72.6071 }, // Center Moriches
  "11935": { lat: 41.0487, lng: -72.5871 }, // Cutchogue
  "11937": { lat: 41.0687, lng: -72.5671 }, // East Hampton
  "11939": { lat: 41.0887, lng: -72.5471 }, // East Marion
  "11940": { lat: 41.1087, lng: -72.5271 }, // East Moriches
  "11941": { lat: 41.1287, lng: -72.5071 }, // Eastport
  "11942": { lat: 41.1487, lng: -72.4871 }, // East Quogue
  "11944": { lat: 41.1687, lng: -72.4671 }, // Greenport
  "11946": { lat: 41.1887, lng: -72.4471 }, // Hampton Bays
  "11947": { lat: 41.2087, lng: -72.4271 }, // Jamesport
  "11948": { lat: 41.2287, lng: -72.4071 }, // Laurel
  "11949": { lat: 41.2487, lng: -72.3871 }, // Manorville
  "11950": { lat: 41.2687, lng: -72.3671 }, // Mastic
  "11951": { lat: 41.2887, lng: -72.3471 }, // Mastic Beach
  "11952": { lat: 41.3087, lng: -72.3271 }, // Mattituck
  "11953": { lat: 41.3287, lng: -72.3071 }, // Middle Island
  "11954": { lat: 41.3487, lng: -72.2871 }, // Montauk
  "11955": { lat: 41.3687, lng: -72.2671 }, // Moriches
  "11956": { lat: 41.3887, lng: -72.2471 }, // New Suffolk
  "11957": { lat: 41.4087, lng: -72.2271 }, // Orient
  "11958": { lat: 41.4287, lng: -72.2071 }, // Peconic
  "11959": { lat: 41.4487, lng: -72.1871 }, // Quogue
  "11960": { lat: 41.4687, lng: -72.1671 }, // Remsenburg
  "11961": { lat: 41.4887, lng: -72.1471 }, // Ridge
  "11962": { lat: 41.5087, lng: -72.1271 }, // Sagaponack
  "11963": { lat: 41.5287, lng: -72.1071 }, // Sag Harbor
  "11964": { lat: 41.5487, lng: -72.0871 }, // Shelter Island
  "11965": { lat: 41.5687, lng: -72.0671 }, // Shelter Island Heights
  "11967": { lat: 41.5887, lng: -72.0471 }, // Shirley
  "11968": { lat: 41.6087, lng: -72.0271 }, // Southampton
  "11969": { lat: 41.6287, lng: -72.0071 }, // Southold
  "11970": { lat: 41.6487, lng: -71.9871 }, // South Jamesport
  "11971": { lat: 41.6687, lng: -71.9671 }, // Southold
  "11972": { lat: 41.6887, lng: -71.9471 }, // Speonk
  "11973": { lat: 41.7087, lng: -71.9271 }, // Upton
  "11975": { lat: 41.7287, lng: -71.9071 }, // Wainscott
  "11976": { lat: 41.7487, lng: -71.8871 }, // Water Mill
  "11977": { lat: 41.7687, lng: -71.8671 }, // Westhampton
  "11978": { lat: 41.7887, lng: -71.8471 }, // Westhampton Beach
  // NYC Boroughs
  "10001": { lat: 40.7484, lng: -73.9967 }, // New York
  "10002": { lat: 40.7284, lng: -73.9867 }, // New York
  "10003": { lat: 40.7084, lng: -73.9767 }, // New York
  "10004": { lat: 40.6884, lng: -73.9667 }, // New York
  "10005": { lat: 40.6684, lng: -73.9567 }, // New York
  "10006": { lat: 40.6484, lng: -73.9467 }, // New York
  "10007": { lat: 40.6284, lng: -73.9367 }, // New York
  "10009": { lat: 40.6084, lng: -73.9267 }, // New York
  "10010": { lat: 40.5884, lng: -73.9167 }, // New York
  "10011": { lat: 40.5684, lng: -73.9067 }, // New York
  "10012": { lat: 40.5484, lng: -73.8967 }, // New York
  "10013": { lat: 40.5284, lng: -73.8867 }, // New York
  "10014": { lat: 40.5084, lng: -73.8767 }, // New York
  "10016": { lat: 40.4884, lng: -73.8667 }, // New York
  "10017": { lat: 40.4684, lng: -73.8567 }, // New York
  "10018": { lat: 40.4484, lng: -73.8467 }, // New York
  "10019": { lat: 40.4284, lng: -73.8367 }, // New York
  "10020": { lat: 40.4084, lng: -73.8267 }, // New York
  "10021": { lat: 40.3884, lng: -73.8167 }, // New York
  "10022": { lat: 40.3684, lng: -73.8067 }, // New York
  "10023": { lat: 40.3484, lng: -73.7967 }, // New York
  "10024": { lat: 40.3284, lng: -73.7867 }, // New York
  "10025": { lat: 40.3084, lng: -73.7767 }, // New York
  "10026": { lat: 40.2884, lng: -73.7667 }, // New York
  "10027": { lat: 40.2684, lng: -73.7567 }, // New York
  "10028": { lat: 40.2484, lng: -73.7467 }, // New York
  "10029": { lat: 40.2284, lng: -73.7367 }, // New York
  "10030": { lat: 40.2084, lng: -73.7267 }, // New York
  "10031": { lat: 40.1884, lng: -73.7167 }, // New York
  "10032": { lat: 40.1684, lng: -73.7067 }, // New York
  "10033": { lat: 40.1484, lng: -73.6967 }, // New York
  "10034": { lat: 40.1284, lng: -73.6867 }, // New York
  "10035": { lat: 40.1084, lng: -73.6767 }, // New York
  "10036": { lat: 40.0884, lng: -73.6667 }, // New York
  "10037": { lat: 40.0684, lng: -73.6567 }, // New York
  "10038": { lat: 40.0484, lng: -73.6467 }, // New York
  "10039": { lat: 40.0284, lng: -73.6367 }, // New York
  "10040": { lat: 40.0084, lng: -73.6267 }, // New York
  "10041": { lat: 39.9884, lng: -73.6167 }, // New York
  "10044": { lat: 39.9684, lng: -73.6067 }, // New York
  "10065": { lat: 40.7684, lng: -73.9667 }, // New York
  "10069": { lat: 40.7884, lng: -73.9567 }, // New York
  "10075": { lat: 40.8084, lng: -73.9467 }, // New York
  "10103": { lat: 40.8284, lng: -73.9367 }, // New York
  "10110": { lat: 40.8484, lng: -73.9267 }, // New York
  "10111": { lat: 40.8684, lng: -73.9167 }, // New York
  "10112": { lat: 40.8884, lng: -73.9067 }, // New York
  "10115": { lat: 40.9084, lng: -73.8967 }, // New York
  "10119": { lat: 40.9284, lng: -73.8867 }, // New York
  "10128": { lat: 40.9484, lng: -73.8767 }, // New York
  "10152": { lat: 40.9684, lng: -73.8667 }, // New York
  "10153": { lat: 40.9884, lng: -73.8567 }, // New York
  "10154": { lat: 41.0084, lng: -73.8467 }, // New York
  "10162": { lat: 41.0284, lng: -73.8367 }, // New York
  "10165": { lat: 41.0484, lng: -73.8267 }, // New York
  "10167": { lat: 41.0684, lng: -73.8167 }, // New York
  "10168": { lat: 41.0884, lng: -73.8067 }, // New York
  "10169": { lat: 41.1084, lng: -73.7967 }, // New York
  "10170": { lat: 41.1284, lng: -73.7867 }, // New York
  "10171": { lat: 41.1484, lng: -73.7767 }, // New York
  "10172": { lat: 41.1684, lng: -73.7667 }, // New York
  "10173": { lat: 41.1884, lng: -73.7567 }, // New York
  "10174": { lat: 41.2084, lng: -73.7467 }, // New York
  "10177": { lat: 41.2284, lng: -73.7367 }, // New York
  "10178": { lat: 41.2484, lng: -73.7267 }, // New York
  "10271": { lat: 40.7084, lng: -74.0067 }, // New York
  "10278": { lat: 40.7284, lng: -73.9967 }, // New York
  "10279": { lat: 40.7484, lng: -73.9867 }, // New York
  "10280": { lat: 40.7684, lng: -73.9767 }, // New York
  "10282": { lat: 40.7884, lng: -73.9667 }, // New York
  // Brooklyn
  "11201": { lat: 40.6987, lng: -73.9843 }, // Brooklyn
  "11203": { lat: 40.6787, lng: -73.9743 }, // Brooklyn
  "11204": { lat: 40.6587, lng: -73.9643 }, // Brooklyn
  "11205": { lat: 40.6387, lng: -73.9543 }, // Brooklyn
  "11206": { lat: 40.6187, lng: -73.9443 }, // Brooklyn
  "11207": { lat: 40.5987, lng: -73.9343 }, // Brooklyn
  "11208": { lat: 40.5787, lng: -73.9243 }, // Brooklyn
  "11209": { lat: 40.5587, lng: -73.9143 }, // Brooklyn
  "11210": { lat: 40.5387, lng: -73.9043 }, // Brooklyn
  "11211": { lat: 40.5187, lng: -73.8943 }, // Brooklyn
  "11212": { lat: 40.4987, lng: -73.8843 }, // Brooklyn
  "11213": { lat: 40.4787, lng: -73.8743 }, // Brooklyn
  "11214": { lat: 40.4587, lng: -73.8643 }, // Brooklyn
  "11215": { lat: 40.4387, lng: -73.8543 }, // Brooklyn
  "11216": { lat: 40.4187, lng: -73.8443 }, // Brooklyn
  "11217": { lat: 40.3987, lng: -73.8343 }, // Brooklyn
  "11218": { lat: 40.3787, lng: -73.8243 }, // Brooklyn
  "11219": { lat: 40.3587, lng: -73.8143 }, // Brooklyn
  "11220": { lat: 40.3387, lng: -73.8043 }, // Brooklyn
  "11221": { lat: 40.3187, lng: -73.7943 }, // Brooklyn
  "11222": { lat: 40.2987, lng: -73.7843 }, // Brooklyn
  "11223": { lat: 40.2787, lng: -73.7743 }, // Brooklyn
  "11224": { lat: 40.2587, lng: -73.7643 }, // Brooklyn
  "11225": { lat: 40.2387, lng: -73.7543 }, // Brooklyn
  "11226": { lat: 40.2187, lng: -73.7443 }, // Brooklyn
  "11228": { lat: 40.1987, lng: -73.7343 }, // Brooklyn
  "11229": { lat: 40.1787, lng: -73.7243 }, // Brooklyn
  "11230": { lat: 40.1587, lng: -73.7143 }, // Brooklyn
  "11231": { lat: 40.1387, lng: -73.7043 }, // Brooklyn
  "11232": { lat: 40.1187, lng: -73.6943 }, // Brooklyn
  "11233": { lat: 40.0987, lng: -73.6843 }, // Brooklyn
  "11234": { lat: 40.0787, lng: -73.6743 }, // Brooklyn
  "11235": { lat: 40.0587, lng: -73.6643 }, // Brooklyn
  "11236": { lat: 40.0387, lng: -73.6543 }, // Brooklyn
  "11237": { lat: 40.0187, lng: -73.6443 }, // Brooklyn
  "11238": { lat: 39.9987, lng: -73.6343 }, // Brooklyn
  "11249": { lat: 40.7187, lng: -73.9943 }, // Brooklyn
  // Queens
  "11001": { lat: 40.7287, lng: -73.7043 }, // Floral Park
  "11003": { lat: 40.7087, lng: -73.6943 }, // Elmont
  "11004": { lat: 40.6887, lng: -73.6843 }, // Glen Oaks
  "11005": { lat: 40.6687, lng: -73.6743 }, // Floral Park
  "11040": { lat: 40.6487, lng: -73.6643 }, // New Hyde Park
  "11101": { lat: 40.7487, lng: -73.9343 }, // Long Island City
  "11102": { lat: 40.7687, lng: -73.9243 }, // Astoria
  "11103": { lat: 40.7887, lng: -73.9143 }, // Astoria
  "11104": { lat: 40.8087, lng: -73.9043 }, // Sunnyside
  "11105": { lat: 40.8287, lng: -73.8943 }, // Astoria
  "11106": { lat: 40.8487, lng: -73.8843 }, // Astoria
  "11109": { lat: 40.8687, lng: -73.8743 }, // Long Island City
  "11354": { lat: 40.7687, lng: -73.8243 }, // Flushing
  "11355": { lat: 40.7887, lng: -73.8143 }, // Flushing
  "11356": { lat: 40.8087, lng: -73.8043 }, // College Point
  "11357": { lat: 40.8287, lng: -73.7943 }, // Whitestone
  "11358": { lat: 40.8487, lng: -73.7843 }, // Flushing
  "11360": { lat: 40.8687, lng: -73.7743 }, // Bayside
  "11361": { lat: 40.8887, lng: -73.7643 }, // Bayside
  "11362": { lat: 40.9087, lng: -73.7543 }, // Little Neck
  "11363": { lat: 40.9287, lng: -73.7443 }, // Little Neck
  "11364": { lat: 40.9487, lng: -73.7343 }, // Oakland Gardens
  "11365": { lat: 40.9687, lng: -73.7243 }, // Fresh Meadows
  "11366": { lat: 40.9887, lng: -73.7143 }, // Fresh Meadows
  "11367": { lat: 41.0087, lng: -73.7043 }, // Flushing
  "11368": { lat: 41.0287, lng: -73.6943 }, // Corona
  "11369": { lat: 41.0487, lng: -73.6843 }, // East Elmhurst
  "11370": { lat: 41.0687, lng: -73.6743 }, // East Elmhurst
  "11371": { lat: 41.0887, lng: -73.6643 }, // Flushing
  "11372": { lat: 41.1087, lng: -73.6543 }, // Jackson Heights
  "11373": { lat: 41.1287, lng: -73.6443 }, // Elmhurst
  "11374": { lat: 41.1487, lng: -73.6343 }, // Rego Park
  "11375": { lat: 41.1687, lng: -73.6243 }, // Forest Hills
  "11377": { lat: 41.1887, lng: -73.6143 }, // Woodside
  "11378": { lat: 41.2087, lng: -73.6043 }, // Maspeth
  "11379": { lat: 41.2287, lng: -73.5943 }, // Middle Village
  "11385": { lat: 41.2487, lng: -73.5843 }, // Ridgewood
  "11411": { lat: 40.6987, lng: -73.7543 }, // Cambria Heights
  "11412": { lat: 40.7187, lng: -73.7453 }, // Saint Albans
  "11413": { lat: 40.7387, lng: -73.7353 }, // Springfield Gardens
  "11414": { lat: 40.7587, lng: -73.7253 }, // Howard Beach
  "11415": { lat: 40.7787, lng: -73.7153 }, // Kew Gardens
  "11416": { lat: 40.7987, lng: -73.7053 }, // Ozone Park
  "11417": { lat: 40.8187, lng: -73.6953 }, // Ozone Park
  "11418": { lat: 40.8387, lng: -73.6853 }, // Richmond Hill
  "11419": { lat: 40.8587, lng: -73.6753 }, // South Richmond Hill
  "11420": { lat: 40.8787, lng: -73.6653 }, // South Ozone Park
  "11421": { lat: 40.8987, lng: -73.6553 }, // Woodhaven
  "11422": { lat: 40.9187, lng: -73.6453 }, // Rosedale
  "11423": { lat: 40.9387, lng: -73.6353 }, // Hollis
  "11424": { lat: 40.9587, lng: -73.6253 }, // Jamaica
  "11425": { lat: 40.9787, lng: -73.6153 }, // Jamaica
  "11426": { lat: 40.9987, lng: -73.6053 }, // Bellerose
  "11427": { lat: 41.0187, lng: -73.5953 }, // Queens Village
  "11428": { lat: 41.0387, lng: -73.5853 }, // Queens Village
  "11429": { lat: 41.0587, lng: -73.5753 }, // Queens Village
  "11430": { lat: 41.0787, lng: -73.5653 }, // Jamaica
  "11432": { lat: 41.0987, lng: -73.5553 }, // Jamaica
  "11433": { lat: 41.1187, lng: -73.5453 }, // Jamaica
  "11434": { lat: 41.1387, lng: -73.5353 }, // Jamaica
  "11435": { lat: 41.1587, lng: -73.5253 }, // Jamaica
  "11436": { lat: 41.1787, lng: -73.5153 }, // Jamaica
  // Staten Island
  "10301": { lat: 40.6387, lng: -74.0843 }, // Staten Island
  "10302": { lat: 40.6587, lng: -74.0743 }, // Staten Island
  "10303": { lat: 40.6787, lng: -74.0643 }, // Staten Island
  "10304": { lat: 40.6987, lng: -74.0543 }, // Staten Island
  "10305": { lat: 40.7187, lng: -74.0443 }, // Staten Island
  "10306": { lat: 40.7387, lng: -74.0343 }, // Staten Island
  "10307": { lat: 40.7587, lng: -74.0243 }, // Staten Island
  "10308": { lat: 40.7787, lng: -74.0143 }, // Staten Island
  "10309": { lat: 40.7987, lng: -74.0043 }, // Staten Island
  "10310": { lat: 40.8187, lng: -73.9943 }, // Staten Island
  "10311": { lat: 40.8387, lng: -73.9843 }, // Staten Island
  "10312": { lat: 40.8587, lng: -73.9743 }, // Staten Island
  "10313": { lat: 40.8787, lng: -73.9643 }, // Staten Island
  "10314": { lat: 40.8987, lng: -73.9543 }, // Staten Island
  // Bronx
  "10451": { lat: 40.8287, lng: -73.9243 }, // Bronx
  "10452": { lat: 40.8487, lng: -73.9143 }, // Bronx
  "10453": { lat: 40.8687, lng: -73.9043 }, // Bronx
  "10454": { lat: 40.8887, lng: -73.8943 }, // Bronx
  "10455": { lat: 40.9087, lng: -73.8843 }, // Bronx
  "10456": { lat: 40.9287, lng: -73.8743 }, // Bronx
  "10457": { lat: 40.9487, lng: -73.8643 }, // Bronx
  "10458": { lat: 40.9687, lng: -73.8543 }, // Bronx
  "10459": { lat: 40.9887, lng: -73.8443 }, // Bronx
  "10460": { lat: 41.0087, lng: -73.8343 }, // Bronx
  "10461": { lat: 41.0287, lng: -73.8243 }, // Bronx
  "10462": { lat: 41.0487, lng: -73.8143 }, // Bronx
  "10463": { lat: 41.0687, lng: -73.8043 }, // Bronx
  "10464": { lat: 41.0887, lng: -73.7943 }, // Bronx
  "10465": { lat: 41.1087, lng: -73.7843 }, // Bronx
  "10466": { lat: 41.1287, lng: -73.7743 }, // Bronx
  "10467": { lat: 41.1487, lng: -73.7643 }, // Bronx
  "10468": { lat: 41.1687, lng: -73.7543 }, // Bronx
  "10469": { lat: 41.1887, lng: -73.7443 }, // Bronx
  "10470": { lat: 41.2087, lng: -73.7343 }, // Bronx
  "10471": { lat: 41.2287, lng: -73.7243 }, // Bronx
  "10472": { lat: 41.2487, lng: -73.7143 }, // Bronx
  "10473": { lat: 41.2687, lng: -73.7043 }, // Bronx
  "10474": { lat: 41.2887, lng: -73.6943 }, // Bronx
  "10475": { lat: 41.3087, lng: -73.6843 }, // Bronx
  // Westchester & Rockland
  "10501": { lat: 41.1187, lng: -73.7343 }, // Amawalk
  "10502": { lat: 41.1387, lng: -73.7243 }, // Ardsley
  "10503": { lat: 41.1587, lng: -73.7143 }, // Ardsley on Hudson
  "10504": { lat: 41.1787, lng: -73.7043 }, // Armonk
  "10505": { lat: 41.1987, lng: -73.6943 }, // Baldwin Place
  "10506": { lat: 41.2187, lng: -73.6843 }, // Bedford
  "10507": { lat: 41.2387, lng: -73.6743 }, // Bedford Hills
  "10509": { lat: 41.2587, lng: -73.6643 }, // Brewster
  "10510": { lat: 41.2787, lng: -73.6543 }, // Briarcliff Manor
  "10511": { lat: 41.2987, lng: -73.6443 }, // Buchanan
  "10512": { lat: 41.3187, lng: -73.6343 }, // Carmel
  "10514": { lat: 41.3387, lng: -73.6243 }, // Chappaqua
  "10516": { lat: 41.3587, lng: -73.6143 }, // Cold Spring
  "10517": { lat: 41.3787, lng: -73.6043 }, // Crompond
  "10518": { lat: 41.3987, lng: -73.5943 }, // Cross River
  "10519": { lat: 41.4187, lng: -73.5843 }, // Croton Falls
  "10520": { lat: 41.4387, lng: -73.5743 }, // Croton on Hudson
  "10521": { lat: 41.4587, lng: -73.5643 }, // Cortlandt Manor
  "10522": { lat: 41.4787, lng: -73.5543 }, // Dobbs Ferry
  "10523": { lat: 41.4987, lng: -73.5443 }, // Elmsford
  "10524": { lat: 41.5187, lng: -73.5343 }, // Garrison
  "10526": { lat: 41.5387, lng: -73.5243 }, // Goldens Bridge
  "10527": { lat: 41.5587, lng: -73.5143 }, // Granite Springs
  "10528": { lat: 41.5787, lng: -73.5043 }, // Harrison
  "10530": { lat: 41.5987, lng: -73.4943 }, // Hartsdale
  "10532": { lat: 41.6187, lng: -73.4843 }, // Hawthorne
  "10533": { lat: 41.6387, lng: -73.4743 }, // Irvington
  "10535": { lat: 41.6587, lng: -73.4643 }, // Jefferson Valley
  "10536": { lat: 41.6787, lng: -73.4543 }, // Katonah
  "10537": { lat: 41.6987, lng: -73.4443 }, // Lake Peekskill
  "10538": { lat: 41.7187, lng: -73.4343 }, // Larchmont
  "10540": { lat: 41.7387, lng: -73.4243 }, // Lincolndale
  "10541": { lat: 41.7587, lng: -73.4143 }, // Mahopac
  "10542": { lat: 41.7787, lng: -73.4043 }, // Mahopac Falls
  "10543": { lat: 41.7987, lng: -73.3943 }, // Mamaroneck
  "10545": { lat: 41.8187, lng: -73.3843 }, // Maryknoll
  "10546": { lat: 41.8387, lng: -73.3743 }, // Millwood
  "10547": { lat: 41.8587, lng: -73.3643 }, // Mohegan Lake
  "10548": { lat: 41.8787, lng: -73.3543 }, // Montrose
  "10549": { lat: 41.8987, lng: -73.3443 }, // Mount Kisco
  "10550": { lat: 41.9187, lng: -73.3343 }, // Mount Vernon
  "10551": { lat: 41.9387, lng: -73.3243 }, // Mount Vernon
  "10552": { lat: 41.9587, lng: -73.3143 }, // Mount Vernon
  "10553": { lat: 41.9787, lng: -73.3043 }, // Mount Vernon
  "10560": { lat: 41.9987, lng: -73.2943 }, // North Salem
  "10562": { lat: 42.0187, lng: -73.2843 }, // Ossining
  "10566": { lat: 42.0387, lng: -73.2743 }, // Peekskill
  "10567": { lat: 42.0587, lng: -73.2643 }, // Cortlandt Manor
  "10570": { lat: 42.0787, lng: -73.2543 }, // Pleasantville
  "10571": { lat: 42.0987, lng: -73.2443 }, // Pleasantville
  "10572": { lat: 42.1187, lng: -73.2343 }, // Pleasantville
  "10573": { lat: 42.1387, lng: -73.2243 }, // Port Chester
  "10576": { lat: 42.1587, lng: -73.2143 }, // Pound Ridge
  "10577": { lat: 42.1787, lng: -73.2043 }, // Purchase
  "10578": { lat: 42.1987, lng: -73.1943 }, // Purdys
  "10579": { lat: 42.2187, lng: -73.1843 }, // Putnam Valley
  "10580": { lat: 42.2387, lng: -73.1743 }, // Rye
  "10581": { lat: 42.2587, lng: -73.1643 }, // Rye
  "10582": { lat: 42.2787, lng: -73.1543 }, // Rye
  "10583": { lat: 42.2987, lng: -73.1443 }, // Scarsdale
  "10588": { lat: 42.3187, lng: -73.1343 }, // Shrub Oak
  "10589": { lat: 42.3387, lng: -73.1243 }, // Somers
  "10590": { lat: 42.3587, lng: -73.1143 }, // South Salem
  "10591": { lat: 42.3787, lng: -73.1043 }, // Tarrytown
  "10594": { lat: 42.3987, lng: -73.0943 }, // Thornwood
  "10595": { lat: 42.4187, lng: -73.0843 }, // Valhalla
  "10596": { lat: 42.4387, lng: -73.0743 }, // Verplanck
  "10597": { lat: 42.4587, lng: -73.0643 }, // Waccabuc
  "10598": { lat: 42.4787, lng: -73.0543 }, // Yorktown Heights
  "10601": { lat: 41.0387, lng: -73.7743 }, // White Plains
  "10602": { lat: 41.0587, lng: -73.7643 }, // White Plains
  "10603": { lat: 41.0787, lng: -73.7543 }, // White Plains
  "10604": { lat: 41.0987, lng: -73.7443 }, // West Harrison
  "10605": { lat: 41.1187, lng: -73.7343 }, // White Plains
  "10606": { lat: 41.1387, lng: -73.7243 }, // White Plains
  "10607": { lat: 41.1587, lng: -73.7143 }, // White Plains
  "10701": { lat: 40.9487, lng: -73.8643 }, // Yonkers
  "10702": { lat: 40.9687, lng: -73.8543 }, // Yonkers
  "10703": { lat: 40.9887, lng: -73.8443 }, // Yonkers
  "10704": { lat: 41.0087, lng: -73.8343 }, // Yonkers
  "10705": { lat: 41.0287, lng: -73.8243 }, // Yonkers
  "10706": { lat: 41.0487, lng: -73.8143 }, // Hastings on Hudson
  "10707": { lat: 41.0687, lng: -73.8043 }, // Tuckahoe
  "10708": { lat: 41.0887, lng: -73.7943 }, // Bronxville
  "10709": { lat: 41.1087, lng: -73.7843 }, // Eastchester
  "10710": { lat: 41.1287, lng: -73.7743 }, // Yonkers
  "10801": { lat: 40.9087, lng: -73.7843 }, // New Rochelle
  "10802": { lat: 40.9287, lng: -73.7743 }, // New Rochelle
  "10803": { lat: 40.9487, lng: -73.7643 }, // Pelham
  "10804": { lat: 40.9687, lng: -73.7543 }, // New Rochelle
  "10805": { lat: 40.9887, lng: -73.7443 }, // New Rochelle
  // Rockland County
  "10901": { lat: 41.1187, lng: -74.0243 }, // Suffern
  "10910": { lat: 41.1387, lng: -74.0143 }, // Arden
  "10911": { lat: 41.1587, lng: -74.0043 }, // Bear Mountain
  "10912": { lat: 41.1787, lng: -73.9943 }, // Blauvelt
  "10913": { lat: 41.1987, lng: -73.9843 }, // Blauvelt
  "10914": { lat: 41.2187, lng: -73.9743 }, // Blooming Grove
  "10915": { lat: 41.2387, lng: -73.9643 }, // Bullville
  "10916": { lat: 41.2587, lng: -73.9543 }, // Campbell Hall
  "10917": { lat: 41.2787, lng: -73.9443 }, // Central Valley
  "10918": { lat: 41.2987, lng: -73.9343 }, // Chester
  "10919": { lat: 41.3187, lng: -73.9243 }, // Circleville
  "10920": { lat: 41.3387, lng: -73.9143 }, // Congers
  "10921": { lat: 41.3587, lng: -73.9043 }, // Florida
  "10922": { lat: 41.3787, lng: -73.8943 }, // Fort Montgomery
  "10923": { lat: 41.3987, lng: -73.8843 }, // Garnerville
  "10924": { lat: 41.4187, lng: -73.8743 }, // Goshen
  "10925": { lat: 41.4387, lng: -73.8643 }, // Greenwood Lake
  "10926": { lat: 41.4587, lng: -73.8543 }, // Harriman
  "10927": { lat: 41.4787, lng: -73.8443 }, // Haverstraw
  "10928": { lat: 41.4987, lng: -73.8343 }, // Highland Falls
  "10930": { lat: 41.5187, lng: -73.8243 }, // Highland Mills
  "10931": { lat: 41.5387, lng: -73.8143 }, // Hillburn
  "10932": { lat: 41.5587, lng: -73.8043 }, // Howells
  "10933": { lat: 41.5787, lng: -73.7943 }, // Johnson
  "10940": { lat: 41.5987, lng: -73.7843 }, // Middletown
  "10941": { lat: 41.6187, lng: -73.7743 }, // Middletown
  "10943": { lat: 41.6387, lng: -73.7643 }, // Middletown
  "10949": { lat: 41.6587, lng: -73.7543 }, // Monroe
  "10950": { lat: 41.6787, lng: -73.7443 }, // Monroe
  "10952": { lat: 41.6987, lng: -73.7343 }, // Monsey
  "10953": { lat: 41.7187, lng: -73.7243 }, // Mountainville
  "10956": { lat: 41.7387, lng: -73.7143 }, // New City
  "10958": { lat: 41.7587, lng: -73.7043 }, // New Hampton
  "10959": { lat: 41.7787, lng: -73.6943 }, // New Milford
  "10960": { lat: 41.7987, lng: -73.6843 }, // Nyack
  "10962": { lat: 41.8187, lng: -73.6743 }, // Orangeburg
  "10963": { lat: 41.8387, lng: -73.6643 }, // Otisville
  "10964": { lat: 41.8587, lng: -73.6543 }, // Palisades
  "10965": { lat: 41.8787, lng: -73.6443 }, // Pearl River
  "10968": { lat: 41.8987, lng: -73.6343 }, // Piermont
  "10969": { lat: 41.9187, lng: -73.6243 }, // Pine Island
  "10970": { lat: 41.9387, lng: -73.6143 }, // Pomona
  "10973": { lat: 41.9587, lng: -73.6043 }, // Sloatsburg
  "10974": { lat: 41.9787, lng: -73.5943 }, // Sloatsburg
  "10975": { lat: 41.9987, lng: -73.5843 }, // Southfields
  "10976": { lat: 42.0187, lng: -73.5743 }, // Sparkill
  "10977": { lat: 42.0387, lng: -73.5643 }, // Spring Valley
  "10979": { lat: 42.0587, lng: -73.5543 }, // Sterling Forest
  "10980": { lat: 42.0787, lng: -73.5443 }, // Stony Point
  "10981": { lat: 42.0987, lng: -73.5343 }, // Sugar Loaf
  "10982": { lat: 42.1187, lng: -73.5243 }, // Tallman
  "10983": { lat: 42.1387, lng: -73.5143 }, // Tappan
  "10984": { lat: 42.1587, lng: -73.5043 }, // Thiells
  "10985": { lat: 42.1787, lng: -73.4943 }, // Thompson Ridge
  "10986": { lat: 42.1987, lng: -73.4843 }, // Tomkins Cove
  "10987": { lat: 42.2187, lng: -73.4743 }, // Tuxedo Park
  "10988": { lat: 42.2387, lng: -73.4643 }, // Unionville
  "10989": { lat: 42.2587, lng: -73.4543 }, // Valley Cottage
  "10990": { lat: 42.2787, lng: -73.4443 }, // Warwick
  "10992": { lat: 42.2987, lng: -73.4343 }, // Washingtonville
  "10993": { lat: 42.3187, lng: -73.4243 }, // West Haverstraw
  "10994": { lat: 42.3387, lng: -73.4143 }, // West Nyack
  "10996": { lat: 42.3587, lng: -73.4043 }, // West Point
  "10998": { lat: 42.3787, lng: -73.3943 }, // Westtown
  // North Carolina - Additional coverage
  "28012": { lat: 35.3121, lng: -81.2373 }, // Belmont
  "28016": { lat: 35.3621, lng: -81.2873 }, // Bessemer City
  "28032": { lat: 35.2121, lng: -81.1373 }, // Cramerton
  "28034": { lat: 35.1621, lng: -81.0873 }, // Dallas
  "28036": { lat: 35.0621, lng: -80.9873 }, // Davidson
  "28037": { lat: 35.5121, lng: -81.4373 }, // Denver
  "28054": { lat: 35.3121, lng: -81.2373 }, // Gastonia
  "28056": { lat: 35.3621, lng: -81.2873 }, // Gastonia
  "28080": { lat: 35.5121, lng: -81.4373 }, // Iron Station
  "28086": { lat: 35.1621, lng: -81.0873 }, // Kings Mountain
  "28092": { lat: 35.2621, lng: -81.1873 }, // Lincolnton
  "28098": { lat: 35.3621, lng: -81.2873 }, // Lowell
  "28101": { lat: 35.4121, lng: -81.3373 }, // McAdenville
  "28104": { lat: 35.5121, lng: -81.4373 }, // Matthews
  "28105": { lat: 35.5621, lng: -81.4873 }, // Matthews
  "28107": { lat: 35.6621, lng: -81.5873 }, // Midland
  "28110": { lat: 35.8121, lng: -81.7373 }, // Monroe
  "28112": { lat: 35.9121, lng: -81.8373 }, // Monroe
  "28115": { lat: 36.0121, lng: -81.9373 }, // Mooresville
  "28120": { lat: 35.0621, lng: -80.9873 }, // Mount Holly
  "28125": { lat: 35.2121, lng: -81.1373 }, // Newell
  "28134": { lat: 35.5121, lng: -81.4373 }, // Pineville
  "28144": { lat: 35.8121, lng: -81.7373 }, // Salisbury
  "28146": { lat: 35.9121, lng: -81.8373 }, // Salisbury
  "28150": { lat: 36.0121, lng: -81.9373 }, // Shelby
  "28173": { lat: 36.6121, lng: -82.5373 }, // Waxhaw
  // Hickory area
  "28602": { lat: 35.7845, lng: -81.3945 }, // Hickory
  "28603": { lat: 35.8345, lng: -81.4445 }, // Hickory
  "28610": { lat: 36.1845, lng: -81.7945 }, // Claremont
  "28613": { lat: 36.3345, lng: -81.9445 }, // Conover
  "28625": { lat: 36.8345, lng: -82.4445 }, // Statesville
  "28630": { lat: 37.0845, lng: -82.6945 }, // Granite Falls
  "28637": { lat: 37.3845, lng: -82.9945 }, // Hildebran
  "28645": { lat: 37.7345, lng: -83.3445 }, // Lenoir
  "28650": { lat: 37.9345, lng: -83.5445 }, // Maiden
  "28655": { lat: 38.1845, lng: -83.7945 }, // Morganton
  "28658": { lat: 38.3845, lng: -83.9945 }, // Newton
  "28677": { lat: 39.2345, lng: -84.8445 }, // Statesville
  "28681": { lat: 39.4345, lng: -85.0445 }, // Taylorsville
  "28690": { lat: 39.8345, lng: -85.4445 }, // Valdese
  "28697": { lat: 40.0845, lng: -85.6945 }, // Wilkesboro
  // South Carolina - Additional coverage
  "29016": { lat: 34.2695, lng: -81.1303 }, // Blythewood
  "29033": { lat: 34.5695, lng: -81.4303 }, // Cayce
  "29036": { lat: 34.6195, lng: -81.4803 }, // Chapin
  "29063": { lat: 34.0695, lng: -81.2303 }, // Irmo
  "29072": { lat: 34.0195, lng: -81.2303 }, // Lexington
  "29073": { lat: 33.9695, lng: -81.1803 }, // Lexington
  "29169": { lat: 33.3204, lng: -79.7415 }, // West Columbia
  "29170": { lat: 33.2704, lng: -79.6915 }, // West Columbia
  "29172": { lat: 33.1704, lng: -79.5915 }, // West Columbia
  "29202": { lat: 34.0432, lng: -81.0794 }, // Columbia
  "29203": { lat: 34.0932, lng: -81.1294 }, // Columbia
  "29206": { lat: 34.1432, lng: -81.1794 }, // Columbia
  "29207": { lat: 34.1932, lng: -81.2294 }, // Columbia
  "29209": { lat: 34.2932, lng: -81.3294 }, // Columbia
  "29210": { lat: 34.3432, lng: -81.3794 }, // Columbia
  "29212": { lat: 34.4432, lng: -81.4794 }, // Columbia
  "29223": { lat: 34.9432, lng: -81.9794 }, // Columbia
  // Aiken area
  "29803": { lat: 33.6590, lng: -81.8212 }, // Aiken
  "29805": { lat: 33.7590, lng: -81.9212 }, // Aiken
  "29841": { lat: 34.9590, lng: -83.1212 }, // North Augusta
  // Fort Mill/Rock Hill area
  "29703": { lat: 35.0074, lng: -80.9451 }, // Fort Mill
  "29707": { lat: 35.1074, lng: -81.0951 }, // Fort Mill
  "29715": { lat: 35.3074, lng: -81.2951 }, // Fort Mill
  "29730": { lat: 34.9574, lng: -81.0251 }, // Rock Hill
  "29732": { lat: 35.0574, lng: -81.1251 }, // Rock Hill
  // Spartanburg area
  "29302": { lat: 34.9996, lng: -81.9820 }, // Spartanburg
  "29303": { lat: 35.0496, lng: -82.0320 }, // Spartanburg
  "29306": { lat: 34.8996, lng: -81.8820 }, // Spartanburg
  "29307": { lat: 34.8496, lng: -81.8320 }, // Spartanburg
  "29316": { lat: 35.1996, lng: -82.1820 }, // Boiling Springs
  "29323": { lat: 35.4996, lng: -82.4820 }, // Chesnee
  "29349": { lat: 36.3996, lng: -83.3820 }, // Inman
  "29369": { lat: 36.8996, lng: -83.8820 }, // Moore
  "29376": { lat: 37.1496, lng: -84.1320 }  // Roebuck
};

// Calculate distance between two coordinates using Haversine formula
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Find closest stores to a given ZIP code
export function findClosestStores(zipCode: string, limit: number = 5): Store[] {
  const userCoords = zipCodeCoordinates[zipCode];
  
  if (!userCoords) {
    // If ZIP not in our database, try to find by state prefix matching
    const zipPrefix = zipCode.substring(0, 2);
    const stateMap: Record<string, string> = {
      "35": "AL", "36": "AL",
      "32": "FL", "33": "FL", "34": "FL",
      "30": "GA", "31": "GA",
      "07": "NJ", "08": "NJ",
      "10": "NY", "11": "NY", "12": "NY", "14": "NY",
      "27": "NC", "28": "NC",
      "29": "SC"
    };
    const stateCode = stateMap[zipPrefix];
    if (stateCode) {
      return stores.filter(s => s.stateCode === stateCode).slice(0, limit);
    }
    return [];
  }

  const storesWithDistance = stores.map(store => ({
    ...store,
    distance: calculateDistance(
      userCoords.lat,
      userCoords.lng,
      store.coordinates.lat,
      store.coordinates.lng
    )
  }));

  return storesWithDistance
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}
