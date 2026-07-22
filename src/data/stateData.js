export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

export const CANADA_PROVINCES = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
  "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island",
  "Quebec", "Saskatchewan", "Yukon"
];

export const AUSTRALIA_STATES = [
  "Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland",
  "South Australia", "Tasmania", "Victoria", "Western Australia"
];

export const UK_REGIONS = [
  "England", "Scotland", "Wales", "Northern Ireland", "Greater London", "West Midlands",
  "Greater Manchester", "Yorkshire"
];

export const UAE_EMIRATES = [
  "Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"
];

export const GERMANY_STATES = [
  "Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse",
  "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate",
  "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"
];

export const STATES_BY_COUNTRY = {
  "india": INDIAN_STATES,
  "united states": US_STATES,
  "usa": US_STATES,
  "us": US_STATES,
  "canada": CANADA_PROVINCES,
  "australia": AUSTRALIA_STATES,
  "united kingdom": UK_REGIONS,
  "uk": UK_REGIONS,
  "united arab emirates": UAE_EMIRATES,
  "uae": UAE_EMIRATES,
  "germany": GERMANY_STATES,
};

export const ALL_STATES = Array.from(new Set([
  ...INDIAN_STATES,
  ...US_STATES,
  ...CANADA_PROVINCES,
  ...AUSTRALIA_STATES,
  ...UK_REGIONS,
  ...UAE_EMIRATES,
  ...GERMANY_STATES,
]));

export function getStatesByCountry(countryName) {
  if (!countryName || typeof countryName !== 'string') {
    return ALL_STATES;
  }
  const cleanCountry = countryName.trim().toLowerCase();

  for (const key in STATES_BY_COUNTRY) {
    if (cleanCountry === key || cleanCountry.includes(key) || key.includes(cleanCountry)) {
      return STATES_BY_COUNTRY[key];
    }
  }

  return ALL_STATES;
}
