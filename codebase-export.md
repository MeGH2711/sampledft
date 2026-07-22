# 📁 dft-alumni — Codebase Export

> Generated on: 7/22/2026, 11:14:43 PM

> Root: `c:\Users\meghp\Desktop\DFT Alumni\DFTWebsite\New_Website\dft-alumni`

---

## 📋 Table of Contents

1. [`.oxlintrc.json`](#file-1)
2. [`index.html`](#file-2)
3. [`package-lock.json`](#file-3)
4. [`package.json`](#file-4)
5. [`README.md`](#file-5)
6. [`src\App.css`](#file-6)
7. [`src\App.jsx`](#file-7)
8. [`src\components\CityAutocomplete.jsx`](#file-8)
9. [`src\components\CompanyAutocomplete.css`](#file-9)
10. [`src\components\CompanyAutocomplete.jsx`](#file-10)
11. [`src\components\CountryAutocomplete.css`](#file-11)
12. [`src\components\CountryAutocomplete.jsx`](#file-12)
13. [`src\components\Footer.css`](#file-13)
14. [`src\components\Footer.jsx`](#file-14)
15. [`src\components\ImageWithSkeleton.css`](#file-15)
16. [`src\components\ImageWithSkeleton.jsx`](#file-16)
17. [`src\components\Navbar.css`](#file-17)
18. [`src\components\Navbar.jsx`](#file-18)
19. [`src\components\StateAutocomplete.jsx`](#file-19)
20. [`src\data\cityData.js`](#file-20)
21. [`src\data\committeeData.js`](#file-21)
22. [`src\data\countryData.js`](#file-22)
23. [`src\data\formdata.js`](#file-23)
24. [`src\data\newslettersData.js`](#file-24)
25. [`src\data\SponserData.js`](#file-25)
26. [`src\data\stateData.js`](#file-26)
27. [`src\firebase.js`](#file-27)
28. [`src\hooks\useVisitorCount.js`](#file-28)
29. [`src\index.css`](#file-29)
30. [`src\main.jsx`](#file-30)
31. [`src\pages\About.css`](#file-31)
32. [`src\pages\About.jsx`](#file-32)
33. [`src\pages\Admin.css`](#file-33)
34. [`src\pages\Admin.jsx`](#file-34)
35. [`src\pages\AlumniSpotlight.css`](#file-35)
36. [`src\pages\AlumniSpotlight.jsx`](#file-36)
37. [`src\pages\Committee.css`](#file-37)
38. [`src\pages\Committee.jsx`](#file-38)
39. [`src\pages\Contact.css`](#file-39)
40. [`src\pages\Contact.jsx`](#file-40)
41. [`src\pages\DftAlumniMeet2023.css`](#file-41)
42. [`src\pages\DftAlumniMeet2023.jsx`](#file-42)
43. [`src\pages\Events.css`](#file-43)
44. [`src\pages\Events.jsx`](#file-44)
45. [`src\pages\FounderDesk.css`](#file-45)
46. [`src\pages\FounderDesk.jsx`](#file-46)
47. [`src\pages\Gallery.css`](#file-47)
48. [`src\pages\Gallery.jsx`](#file-48)
49. [`src\pages\Hero.css`](#file-49)
50. [`src\pages\Hero.jsx`](#file-50)
51. [`src\pages\Login.css`](#file-51)
52. [`src\pages\Login.jsx`](#file-52)
53. [`src\pages\NewsletterSection.jsx`](#file-53)
54. [`src\pages\Newsroom.css`](#file-54)
55. [`src\pages\Newsroom.jsx`](#file-55)
56. [`src\pages\Profile.css`](#file-56)
57. [`src\pages\Profile.jsx`](#file-57)
58. [`src\pages\Sangaath2024.jsx`](#file-58)
59. [`src\pages\Sangam2026.css`](#file-59)
60. [`src\pages\Sangam2026.jsx`](#file-60)
61. [`src\pages\Stats.css`](#file-61)
62. [`src\pages\Stats.jsx`](#file-62)
63. [`src\pages\TermsAndConditions.css`](#file-63)
64. [`src\pages\TermsAndConditions.jsx`](#file-64)
65. [`src\pages\VisionMission.css`](#file-65)
66. [`src\pages\VisionMission.jsx`](#file-66)
67. [`src\utils\hash.js`](#file-67)
68. [`vercel.json`](#file-68)
69. [`vite.config.js`](#file-69)

---

## File 1 {#file-1}

**📄 Path:** `.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}

```

---

## File 2 {#file-2}

**📄 Path:** `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#e32124" />
    <meta name="description" content="DFT Alumni Association — A proud community of DFT graduates connected by legacy, united for tomorrow. Join thousands of alumni in our thriving network." />
    <meta name="keywords" content="DFT Alumni, Alumni Association, Graduates, Reunion, Networking, Mentorship" />
    <meta property="og:title" content="DFT Alumni Association" />
    <meta property="og:description" content="Connected by Legacy, United for Tomorrow. Join the DFT Alumni community." />
    <meta property="og:type" content="website" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css" />
    <title>DFT | Alumni Association</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

## File 3 {#file-3}

**📄 Path:** `package-lock.json`

```json
{
  "name": "dft-alumni",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "dft-alumni",
      "version": "0.0.0",
      "dependencies": {
        "@emailjs/browser": "^4.4.1",
        "firebase": "^12.16.0",
        "react": "^19.2.7",
        "react-dom": "^19.2.7",
        "react-icons": "^5.7.0",
        "react-router-dom": "^7.18.1",
        "react-scroll": "^1.9.3"
      },
      "devDependencies": {
        "@types/react": "^19.2.17",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^6.0.3",
        "oxlint": "^1.71.0",
        "vite": "^8.1.1"
      }
    },
    "node_modules/@emailjs/browser": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/@emailjs/browser/-/browser-4.4.1.tgz",
      "integrity": "sha512-DGSlP9sPvyFba3to2A50kDtZ+pXVp/0rhmqs2LmbMS3I5J8FSOgLwzY2Xb4qfKlOVHh29EAutLYwe5yuEZmEFg==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.11.1.tgz",
      "integrity": "sha512-RSvbQmHzdKzNsLYa/wHrbc3KN4sYLKAdPZxqiM2HATqv/SBk2/ENSHpvXGaLOMcsAyz0poEGqkmmKYG3OWiJEQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.2",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.1.tgz",
      "integrity": "sha512-vgj7R3y3Wgx24IQaGPA/R6YFXLHVMOZ0uVEyIQPaWs+rd1AzfEMXlAC22FYwO1XkKR6NPsq7mUandH8oIRdZFw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.2.tgz",
      "integrity": "sha512-c95qOXkHdydNKhscBTebqEC1CVAZpyqOfVfBzQ1qgzyl3gfeldUjIggDbIZgDKsHLgnsM+igH7TJ/eAasaVuMA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@firebase/ai": {
      "version": "2.13.1",
      "resolved": "https://registry.npmjs.org/@firebase/ai/-/ai-2.13.1.tgz",
      "integrity": "sha512-RhT/VViTPBSplhQSuEp62HhLvfsV+LowMh8ZUo5MMRDzG7oFtSget4Kmg5oHP50hDVyWQuQj6to9iPFEZk08Tw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check-interop-types": "0.3.4",
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@firebase/app-types": "0.x"
      }
    },
    "node_modules/@firebase/analytics": {
      "version": "0.10.22",
      "resolved": "https://registry.npmjs.org/@firebase/analytics/-/analytics-0.10.22.tgz",
      "integrity": "sha512-8BSaq/QRGU1+xyi8L2PTLTJU7MH9aMA72RQdIxrbhWFauOZY9OXo8f2YDN/972xA8d588tlnNVEQ2Mo69pT9Ow==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/installations": "0.6.22",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/analytics-compat": {
      "version": "0.2.28",
      "resolved": "https://registry.npmjs.org/@firebase/analytics-compat/-/analytics-compat-0.2.28.tgz",
      "integrity": "sha512-lIAlqUUbBu93FJMlQfslryQtBwwzdzvp23ePC6FNgymXk6Ook5v4Uvc0vdutvoIeqmyA3LfP0ZeRFK8+11kOOQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/analytics": "0.10.22",
        "@firebase/analytics-types": "0.8.4",
        "@firebase/component": "0.7.3",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/analytics-types": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/@firebase/analytics-types/-/analytics-types-0.8.4.tgz",
      "integrity": "sha512-zQ+XTgkwH6CY/eUSHJRP7e4LxM30RCxlCmob5sy2axs25GE3Ny0XdgpDscMTHHQIGqWkxPXad4w2Mw9sCgT8zQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/app": {
      "version": "0.15.1",
      "resolved": "https://registry.npmjs.org/@firebase/app/-/app-0.15.1.tgz",
      "integrity": "sha512-iD9+Z5HcPo0Uop5f72/VYMeXwKucBhW7iFrISkJFvQ+lSZikTNgTz0FgAtaaTkAG0pEZSnCymA2Fu49n0rcufQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "idb": "7.1.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/app-check": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/@firebase/app-check/-/app-check-0.12.0.tgz",
      "integrity": "sha512-wMeT6HLWRAuW7Cp/5UjWBGKgjPNxWNOoNf4PRIv0weljoGMZVeqbUY7wNBWTI2/31cX1NlXx8gQruDLsUShB3Q==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/app-check-compat": {
      "version": "0.4.5",
      "resolved": "https://registry.npmjs.org/@firebase/app-check-compat/-/app-check-compat-0.4.5.tgz",
      "integrity": "sha512-JI17mVcZs34zO6ZeSCrw4U2iohqy+n6GIzkbmsA+TbVjmvFLkUKt3bs5M+qRBteQm/0IWzqSHYFzEQLzDTQebg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check": "0.12.0",
        "@firebase/app-check-types": "0.5.4",
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/app-check-interop-types": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/@firebase/app-check-interop-types/-/app-check-interop-types-0.3.4.tgz",
      "integrity": "sha512-zz3i6e13B8BfWiLy8MABtTh8aGIACgKbf9UVnyHcWs+yQzJXgQcl8A46b0zfaiJHdQ+niF0ouAfcpuf+3LMPQg==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/app-check-types": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/@firebase/app-check-types/-/app-check-types-0.5.4.tgz",
      "integrity": "sha512-xV7JsIyzVr15aA7f3Pi0rB9gdBuVubs89FGA8VkRYA4g0l78poADgdfrScgf7NndSg9mm7cR7PJyY0+t22KaGw==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/app-compat": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@firebase/app-compat/-/app-compat-0.5.15.tgz",
      "integrity": "sha512-HaiSM9TwbGIR4b7F6+UncHWlqdH89eeY7VUskaOGOlI2PxHS5Z+6hHsYGvNLy0SHDE6zyXO+3QSA6a4aqQxsqA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app": "0.15.1",
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/app-types": {
      "version": "0.9.5",
      "resolved": "https://registry.npmjs.org/@firebase/app-types/-/app-types-0.9.5.tgz",
      "integrity": "sha512-YevqTjvo7Iujsa9Dwowmd6dSoElhzmD63ZSrq6bzjvQ6POjYgNjOFHLmNIgJs48eNO093NCERibuFnxbfOvU7A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/logger": "0.5.1"
      }
    },
    "node_modules/@firebase/auth": {
      "version": "1.13.3",
      "resolved": "https://registry.npmjs.org/@firebase/auth/-/auth-1.13.3.tgz",
      "integrity": "sha512-bqiq4uubDN2YyQkdvSWPQeJyXAv2O76ImF41En9b6UhV5JuBVYDoHYrrrE3NzIuGkpFMKagfhMRP4Vz6t+yQSQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x",
        "@react-native-async-storage/async-storage": "^2.2.0 || ^3.0.0"
      },
      "peerDependenciesMeta": {
        "@react-native-async-storage/async-storage": {
          "optional": true
        }
      }
    },
    "node_modules/@firebase/auth-compat": {
      "version": "0.6.8",
      "resolved": "https://registry.npmjs.org/@firebase/auth-compat/-/auth-compat-0.6.8.tgz",
      "integrity": "sha512-llcBREUC4iSNKZ6rvwud7Oz9Q7aAWU6KuQLa6pdu7Q+QAQsy4JLw6yFgxwtmzabsgznHmmcsX2UjHLLzqUxi3Q==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/auth": "1.13.3",
        "@firebase/auth-types": "0.13.1",
        "@firebase/component": "0.7.3",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/auth-interop-types": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/@firebase/auth-interop-types/-/auth-interop-types-0.2.5.tgz",
      "integrity": "sha512-1Li/YuBDBAXcKv7BzY4U28gontUmAaw53sYiqbaVOMCFb2lFKK/c3CGMUWqtwe7+TXrl3poWnTCL5umYBg85Eg==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/auth-types": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/@firebase/auth-types/-/auth-types-0.13.1.tgz",
      "integrity": "sha512-0c1Mnid0uMDfGJHeUS4zfvBa4/CedJXotGy/n/NZJnBjwiJawt0ZYU+wH2VAVLiRCEfG2ncCkAX3yd1/2nrB7g==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x",
        "@firebase/util": "1.x"
      }
    },
    "node_modules/@firebase/component": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/@firebase/component/-/component-0.7.3.tgz",
      "integrity": "sha512-wFofIaa2879ogD/WvkjYXJxRmfnL0scen6ORgaC3na1FNOR9ASIUANQdhqQcmWu/h77/pVHY7ch5flewa5Bcew==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/data-connect": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/@firebase/data-connect/-/data-connect-0.7.1.tgz",
      "integrity": "sha512-2LbUU8mmSA63HknxQMmWHjpzuNLBKflvVwQc2tpoVKg0biWleNEJX031ELks0vzFs+dDjOUkCJR72RP6mQHFOg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/auth-interop-types": "0.2.5",
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/database": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@firebase/database/-/database-1.1.3.tgz",
      "integrity": "sha512-XwWCa+E4TvNGpGwXrycLRNfdogADwFcvuhyow6wDWma9W54roaQIhe+4PM0KiLsIftBdSCGI7OKCXrdSRHbIhw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check-interop-types": "0.3.4",
        "@firebase/auth-interop-types": "0.2.5",
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "faye-websocket": "0.11.4",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/database-compat": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@firebase/database-compat/-/database-compat-2.1.4.tgz",
      "integrity": "sha512-3pK35F1MAgmqFJQlf2nhQl44vtAXQO1uaCaQOEUI9kCRtLFqi7N+QRKR7lFZPg+xIZIyubgxQaxY69YgfZRZWg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/database": "1.1.3",
        "@firebase/database-types": "1.0.20",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/database-types": {
      "version": "1.0.20",
      "resolved": "https://registry.npmjs.org/@firebase/database-types/-/database-types-1.0.20.tgz",
      "integrity": "sha512-kegbOk/w8iU64pr0q6k2ItyNGjnQBMHFhwS7ohdWI4W+pc0/zhhdGXTdFj6X1oxItRjPoYOsSQmERgBkn/ihxw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-types": "0.9.5",
        "@firebase/util": "1.15.1"
      }
    },
    "node_modules/@firebase/firestore": {
      "version": "4.16.0",
      "resolved": "https://registry.npmjs.org/@firebase/firestore/-/firestore-4.16.0.tgz",
      "integrity": "sha512-qdHMHMvMr0nRMuZyWNR/ArWa0YlPE3C4eAbmxTASJMYXAesKPL0Y54p70moggrNPzaK7MSIIq5RDJJyntQyIYA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "@firebase/webchannel-wrapper": "1.0.6",
        "@grpc/grpc-js": "~1.9.0",
        "@grpc/proto-loader": "^0.7.8",
        "re2js": "^0.4.2",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/firestore-compat": {
      "version": "0.4.11",
      "resolved": "https://registry.npmjs.org/@firebase/firestore-compat/-/firestore-compat-0.4.11.tgz",
      "integrity": "sha512-W7o1WdwWq5aABK5Up2ncSvTQs/QGLR/fy7cVpFBNqhsXtxoMtflHf2xBIG6+aoptcuGAobddq4g2Sq27wqHaYw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/firestore": "4.16.0",
        "@firebase/firestore-types": "3.0.4",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/firestore-types": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@firebase/firestore-types/-/firestore-types-3.0.4.tgz",
      "integrity": "sha512-jGn+JSS4X9zZsrfu7Yw66v5YRdOLD1oyQh4USR0xWl4CUqV/DA6bNIXRPpxH/cUl3iVTNiP6MN7g+EL42A4qfA==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x",
        "@firebase/util": "1.x"
      }
    },
    "node_modules/@firebase/functions": {
      "version": "0.13.5",
      "resolved": "https://registry.npmjs.org/@firebase/functions/-/functions-0.13.5.tgz",
      "integrity": "sha512-bWCx713f4kE/uFV7gdFOLBS7lDoiZj48MRkbAqe35gkXcCeWF4QjRNO07Jhmve7EJIoQOBczL29y2r8VRuN1kw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/app-check-interop-types": "0.3.4",
        "@firebase/auth-interop-types": "0.2.5",
        "@firebase/component": "0.7.3",
        "@firebase/messaging-interop-types": "0.2.5",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/functions-compat": {
      "version": "0.4.5",
      "resolved": "https://registry.npmjs.org/@firebase/functions-compat/-/functions-compat-0.4.5.tgz",
      "integrity": "sha512-10qlUXGY25G5/1g9UihqksPp2po+ZqSE7LEizsrdUP7vrTmkysXxGSZCDyojSEp6mQe/ecRDdDDI+z4XRdb4wQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/functions": "0.13.5",
        "@firebase/functions-types": "0.6.4",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/functions-types": {
      "version": "0.6.4",
      "resolved": "https://registry.npmjs.org/@firebase/functions-types/-/functions-types-0.6.4.tgz",
      "integrity": "sha512-zV6kgqtduR4rUAdC/ilS7kmb93XD7bEZoJDlVBZqlOw2uGGGCNBQBuleww2rr0Ulr3L9o2TDjumEt68/l1f9DQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/installations": {
      "version": "0.6.22",
      "resolved": "https://registry.npmjs.org/@firebase/installations/-/installations-0.6.22.tgz",
      "integrity": "sha512-ef6nn3GGQTdReCfotRMG77PJZu8CqEbiK5pEoBnM0gTu/Z9v0i/az2p3HABsa/1beQmmyh1OsOjf7P5+pgwdZw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/util": "1.15.1",
        "idb": "7.1.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/installations-compat": {
      "version": "0.2.22",
      "resolved": "https://registry.npmjs.org/@firebase/installations-compat/-/installations-compat-0.2.22.tgz",
      "integrity": "sha512-C/zpAuTP5S9OgKSPvXRupw3hoY/JZSlA1wFjD/Sb7LIQE0FNbcMdO8Y4KXVEkjVzma/DDDDIAzxEXqKMAzc88w==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/installations": "0.6.22",
        "@firebase/installations-types": "0.5.4",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/installations-types": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/@firebase/installations-types/-/installations-types-0.5.4.tgz",
      "integrity": "sha512-U2eFapdHwjb43Vx9o+Pmj4dFfvcHEK1IirEFLqMtWrTHvmdrS3gBpBD1kmJk/9HjsOtoHZxJ2Paoe79e+L1ZPg==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x"
      }
    },
    "node_modules/@firebase/logger": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/@firebase/logger/-/logger-0.5.1.tgz",
      "integrity": "sha512-vZKLsqE1ABOy8OjQiE7cUTFn4gvaqlk88yp8N94Pk/sDpq61YqZGqmVFZTvOyflTwuYFcWirBdYGoJgbDaXKYQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/messaging": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@firebase/messaging/-/messaging-0.13.0.tgz",
      "integrity": "sha512-GZoo0uGRvEbszo83xcgbjJp4FpkmBEr4l8Z4hi8gl+P1Spn/MTK3HapanMzSX4yUHuTEiF5hasWRxOaz+o5sxQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/installations": "0.6.22",
        "@firebase/messaging-interop-types": "0.2.5",
        "@firebase/util": "1.15.1",
        "idb": "7.1.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/messaging-compat": {
      "version": "0.2.27",
      "resolved": "https://registry.npmjs.org/@firebase/messaging-compat/-/messaging-compat-0.2.27.tgz",
      "integrity": "sha512-JNOiu1PPgdHzEPEtoFiNxQuu0x9bm4bfETSQCpGfcTlgWkhlSK7uh7nlsjC10TQLUNgYetLmuutaYTh8aeYLVA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/messaging": "0.13.0",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/messaging-interop-types": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/@firebase/messaging-interop-types/-/messaging-interop-types-0.2.5.tgz",
      "integrity": "sha512-tUEKnaAP2Y/MNIqgnriPpV6e5l13Vs/+p2yrd6NGlncPJT9O3a8muYZtdnWe+IJ4fgKLHJVC79n/asxk/N5Msw==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/performance": {
      "version": "0.7.12",
      "resolved": "https://registry.npmjs.org/@firebase/performance/-/performance-0.7.12.tgz",
      "integrity": "sha512-fe7nV8teUU3OBHlMUZ9Lw4gLhCW2k4m5Uc3pfWGV+fl8uwJQBGp9Q3lqsJ+HSrFu3Q2pJyLAgrClPGSKyDeYgQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/installations": "0.6.22",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0",
        "web-vitals": "^4.2.4"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/performance-compat": {
      "version": "0.2.25",
      "resolved": "https://registry.npmjs.org/@firebase/performance-compat/-/performance-compat-0.2.25.tgz",
      "integrity": "sha512-q6NjTXpIPoFuUmCmMN/maCdTgzT6aExs9xZo+PxfVLj6uLVGvpyAD6XWjmcrb7jChsFBYbq7E5dyNDF7Zhy9kA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/performance": "0.7.12",
        "@firebase/performance-types": "0.2.4",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/performance-types": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/@firebase/performance-types/-/performance-types-0.2.4.tgz",
      "integrity": "sha512-kJSEk7b0uhpcPRyL4SQ/GPujLqk52XNKcXlnsKDbWGAb9vugcLvOU3u6zfEdwd+d8hWJb5S5ZizV1JFFI0nkKg==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/remote-config": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/@firebase/remote-config/-/remote-config-0.9.0.tgz",
      "integrity": "sha512-aNn6/eJhsSC+gXSToiXiYPv3ypLP9lFtzl+/q9kSOBPB7D6rae0Rt2uENZZLXGYbEgHYKQblOhijJAXGbbJjtQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/installations": "0.6.22",
        "@firebase/logger": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/remote-config-compat": {
      "version": "0.2.27",
      "resolved": "https://registry.npmjs.org/@firebase/remote-config-compat/-/remote-config-compat-0.2.27.tgz",
      "integrity": "sha512-FYwYWwSbUdza/pRX4NpSBm/Pimntum3jEIBpnDn5Ey1jHNWgjxrE8Z5SB4mCHd5wGCoYd3koJzxARl/VWIEx0Q==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/logger": "0.5.1",
        "@firebase/remote-config": "0.9.0",
        "@firebase/remote-config-types": "0.5.1",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/remote-config-types": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/@firebase/remote-config-types/-/remote-config-types-0.5.1.tgz",
      "integrity": "sha512-cX/1LT6KQwkXzck2eSzeKnuvXZCyr8qaPpDcikoJs7jmI+oBOXixpDLeDtWj1U6GNMkIoXrEDNoyT2Ypcyp5/A==",
      "license": "Apache-2.0"
    },
    "node_modules/@firebase/storage": {
      "version": "0.14.3",
      "resolved": "https://registry.npmjs.org/@firebase/storage/-/storage-0.14.3.tgz",
      "integrity": "sha512-YX4/YL6P6/fufSSeGnVhjWddcIXbFq2cWIhMKFTZo1E/Rtcl2mJj/BYUQTwJfcE1Tl8un1FOya4L05jcSLN/Eg==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app": "0.x"
      }
    },
    "node_modules/@firebase/storage-compat": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@firebase/storage-compat/-/storage-compat-0.4.3.tgz",
      "integrity": "sha512-gruVqjtUGX8tEoeNbaWXZm0Zfcfcb7fvmDmBxV8yPAbWvExRnZYLO2+qw9idxNE7BvPXt5csyjSYHy//dAizxw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/component": "0.7.3",
        "@firebase/storage": "0.14.3",
        "@firebase/storage-types": "0.8.4",
        "@firebase/util": "1.15.1",
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@firebase/app-compat": "0.x"
      }
    },
    "node_modules/@firebase/storage-types": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/@firebase/storage-types/-/storage-types-0.8.4.tgz",
      "integrity": "sha512-BT7cwxJOx8SWwlQfrlC+bD/Sk3Cw+1odCi8UZNFNWTVZoPsBnA5W+mqtZzVnvsdJpXCFGSGQ7R7vOR6dtM/BRA==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@firebase/app-types": "0.x",
        "@firebase/util": "1.x"
      }
    },
    "node_modules/@firebase/util": {
      "version": "1.15.1",
      "resolved": "https://registry.npmjs.org/@firebase/util/-/util-1.15.1.tgz",
      "integrity": "sha512-LUdM4Wg7YM9Pq/49nGYySJA0CSQEKnGffFzWV8+6gXN7mGxn+FL1IqvFbuZUtAQcfZgHYDwCE1wwlK7rB7gl2g==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@firebase/webchannel-wrapper": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@firebase/webchannel-wrapper/-/webchannel-wrapper-1.0.6.tgz",
      "integrity": "sha512-Vr/Mqu79dMwGRAyGbJ4uN4+BtXB3/mRTdzetD1daWNeG8QaWuzhhbG77GltO5c0yYmYls8i250iX73624GJd7Q==",
      "license": "Apache-2.0"
    },
    "node_modules/@grpc/grpc-js": {
      "version": "1.9.16",
      "resolved": "https://registry.npmjs.org/@grpc/grpc-js/-/grpc-js-1.9.16.tgz",
      "integrity": "sha512-wE4Ut/olIzfKqp631XrG+wbF0v1vWFN4YL9FyXC2LJiG33DsV7PLzURjrCvY/6je2ntdRkeLpPDluzSRGaVltQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@grpc/proto-loader": "^0.7.8",
        "@types/node": ">=12.12.47"
      },
      "engines": {
        "node": "^8.13.0 || >=10.10.0"
      }
    },
    "node_modules/@grpc/proto-loader": {
      "version": "0.7.15",
      "resolved": "https://registry.npmjs.org/@grpc/proto-loader/-/proto-loader-0.7.15.tgz",
      "integrity": "sha512-tMXdRCfYVixjuFK+Hk0Q1s38gV9zDiDJfWL3h1rv4Qc39oILCu1TRTDt7+fGUI8K4G1Fj125Hx/ru3azECWTyQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "lodash.camelcase": "^4.3.0",
        "long": "^5.0.0",
        "protobufjs": "^7.2.5",
        "yargs": "^17.7.2"
      },
      "bin": {
        "proto-loader-gen-types": "build/bin/proto-loader-gen-types.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.6.tgz",
      "integrity": "sha512-ZLv/JdUfkvOy9eCnnBaGfiO+XimbjebAeO+MRQqD/B+FR1tnRN0tpKSJHRbE8sFfS6aqsXZ67TQjfwfsxULVbg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.139.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.139.0.tgz",
      "integrity": "sha512-r9gHphtCs+1M7J0pw6Sn/hh/Wpa/iQrOOkrNAlVLF/gHq+/CJmHIWKKUUhdWjcD6CIa8idarspCsASiXCXvFUw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@oxlint/binding-android-arm-eabi": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm-eabi/-/binding-android-arm-eabi-1.74.0.tgz",
      "integrity": "sha512-+gHd12muVI9ZLBaWLPkHt3Fj7jihFjgQ1MGtBaRL8vWrWrI0P7dLUty/cHrHS0oqPYIRgQUJsPu2CExQuMcwNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-android-arm64": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm64/-/binding-android-arm64-1.74.0.tgz",
      "integrity": "sha512-xjKdoMB+H+RCOByv/7l7nfIGW9mlOisqYdcyC75UqYuQecLpReAeEYUf2CNeDEI3KtmUgxpRw/+c63y4AeF/Bw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-arm64": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-arm64/-/binding-darwin-arm64-1.74.0.tgz",
      "integrity": "sha512-iUK7wvc6sejMKsC+Pt67mntoF5weFcyEunhZfLJceU6gL419mexz5wBkSx/EnkFBExMLNtOi9fnDSc5xfK0IzQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-x64": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-x64/-/binding-darwin-x64-1.74.0.tgz",
      "integrity": "sha512-ggKc/tn5SJ1u2yG2izC6VKODfYKV8MQ2AicJlNzOjuyrC29udvOef6/JzK2r32xqCnBDLFouR1VCkjzEI0/N9Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-freebsd-x64": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-freebsd-x64/-/binding-freebsd-x64-1.74.0.tgz",
      "integrity": "sha512-u++dH/43jy9hTLbneaWlS0gla/Bp1JdwJ2zgevCl8nDFUh6qRCGMxcL0f0lb7By3A9p/LfFr+7cG4HU1hG856g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-gnueabihf": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.74.0.tgz",
      "integrity": "sha512-Sj1zmtFDVTPeIbIz4ZfcXAbFHqCmKCXdCUlAJzvTF7I20NTH1RDpoF2PhkqNODutJzVhJYmm3oz0GwgY+tvE2g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-musleabihf": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-musleabihf/-/binding-linux-arm-musleabihf-1.74.0.tgz",
      "integrity": "sha512-//PKyQb/tQXcHArx2f7z+oVI/eMS2Jpv+edNuAtOrgIhWdGcpHxogveAxzmF2rpH1AIHp4Hq04RF/rgJdiICnQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-gnu": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.74.0.tgz",
      "integrity": "sha512-/k1Me+aX2tjuH10K62mLS0y8cLkJBHX6Ce0xPK+eWeel4bSdEGZ8dv4+hYMzg0GrSmjwy4yAYsDPeEeKBft/2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-musl": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.74.0.tgz",
      "integrity": "sha512-3tFSjBxc5D8/zvjEuLvOqcA8ZXKD0+6NuaVO/edeamNc49MoAsbfaC9s1UiwODwgF6slGaF8yJA2TPkukd77tg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-ppc64-gnu": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.74.0.tgz",
      "integrity": "sha512-9QggtPkSPXOCTu8Szis7auOK/sC7KdQaN+/TujP7YVVhzCAOhgdRfgv8uEz0r2tk5xdgus5rLYUrCDoZNtiRUw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-gnu": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-gnu/-/binding-linux-riscv64-gnu-1.74.0.tgz",
      "integrity": "sha512-VM5VPUJ4DJIWiK+AZn8FScUqMr6OFrCAYybMYjEEi7W13ParI64MByiXTkKMqZpBmvQ9zxl9Ebq2VUOiZRJYUg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-musl": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-musl/-/binding-linux-riscv64-musl-1.74.0.tgz",
      "integrity": "sha512-SaDY1gh9rOA592J54g+gu5hkOFFQBZsMmIYHs+NRHG+Uq0OxtuuCXMWQ3vu1830Eugv5uMXyjG+bv2Z9y4IXjw==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-s390x-gnu": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.74.0.tgz",
      "integrity": "sha512-ZATQeHZCyr6MbDveg0obD5sxLHFOghtOdC5jwVwYlvFWqtFOxctgFEG6Ef/64hYvZrWyhyCckB10AelqLopeDA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-gnu": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.74.0.tgz",
      "integrity": "sha512-+aIvJyrdeD7LwCQ2WYLMUWNmnbeDRSPb40aBYtPjD9+PTqUwgJnk+HK5yLfSMeqXrMrDhE9uTmtt2y50tvjhHw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-musl": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-musl/-/binding-linux-x64-musl-1.74.0.tgz",
      "integrity": "sha512-XyktaR8lhK2qWiCK0Tk8oYD+/cgn+oHA6ddRnxSSXUKkkojkV78CmShZUxQF+yrBFs0SuW+JBOPG6hecyc/iZg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-openharmony-arm64": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-openharmony-arm64/-/binding-openharmony-arm64-1.74.0.tgz",
      "integrity": "sha512-mzbjrPl4neaVUiJ1fUiEUxTGaSZBoiKtaoB6jmIpz9S+VOA2vDYmJpihQ82w6178V5jxziclTg8Cgj5yF6tTDg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-arm64-msvc": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.74.0.tgz",
      "integrity": "sha512-vUAe9okpS2Oa5+lX67lqHMuNUvfkleRKwrUDJ/WJBsgmddvZ1mrsh2HVmuFDRzqFELhaJhFaCNOuR6a7L3rtIA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-ia32-msvc": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.74.0.tgz",
      "integrity": "sha512-yyXXJyYYSXL4I8K8jAWjJs+J3fa9gH2JmEbo4f5adm+1tNC9itseicBNuwK7BDHvqQ5J534s+yDULu89vYL2ZQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-x64-msvc": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.74.0.tgz",
      "integrity": "sha512-VTC9IYTIMrVUk/i6Ms1ohzzDKZFkWn0KU2OBbPBzgmVZ2V30165T/zK4LztTr0Xgp9fZ1qQZ1rsZAu/rEmySlA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@protobufjs/aspromise": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",
      "integrity": "sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/base64": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz",
      "integrity": "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/codegen": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.5.tgz",
      "integrity": "sha512-zgXFLzW3Ap33e6d0Wlj4MGIm6Ce8O89n/apUaGNB/jx+hw+ruWEp7EwGUshdLKVRCxZW12fp9r40E1mQrf/34g==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/eventemitter": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.1.tgz",
      "integrity": "sha512-vW1GmwMZNnL+gMRaovlh9yZX74kc+TTU3FObkkurpMaRtBfLP3ldjS9KQWlwZgraRE0+dheEEoAxdzcJQ8eXZg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/fetch": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.1.tgz",
      "integrity": "sha512-GpptLrs57adMSuHi3VNj0mAF8dwh36LMaYF6XyJ6JMWlVsc+t42tm1HSEDmOs3A8fC9yyeisgLhsTVQokOZ0zw==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.1"
      }
    },
    "node_modules/@protobufjs/float": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz",
      "integrity": "sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/path": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz",
      "integrity": "sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/pool": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz",
      "integrity": "sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/utf8": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.2.tgz",
      "integrity": "sha512-b1UQwcEZ4yCnMCD8DAL1VlbvBJE9/IX4FTIp7BG1xYpf29SLazLSrqUkj4w7Y5y7cCVP6E5tcqqcI0xemPkHug==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.1.5.tgz",
      "integrity": "sha512-lZg8fqIv2v7FF237bwMgzGZEJvGL79/s5knJ/i6FmsGF4XXlzccZ4jb+TrFIxtSSxFtIpdsgrPZeMk1I9AFcyQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.1.5.tgz",
      "integrity": "sha512-51Bnx9pNiMRKSUNtBfySkNJ9vMU9Hh3I1ozDd6gyPPYzaXCfnptUcEZxXGYFn+ul2dtcMUiqGR1Yai2K10uoTw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.1.5.tgz",
      "integrity": "sha512-Tm+gbfC0aHu1tBA/JvKQh32S0K6YgCHkiAF4/W6xX0K0RmNuc94VeK419dJoE65R5aRxmo+noZQSWrAMF6yb6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.1.5.tgz",
      "integrity": "sha512-JMzDKCCXq93YccG5gz3hvOs1oXRKAf0XYpfOS88e+wZrC8Iugj6j68867vrYZkvpDDpKn/KoKORThmchMpF6TA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.1.5.tgz",
      "integrity": "sha512-uML21j2K5TfPGutKxub+M+nLjZIrWjXQ5Grx4lCe/nimTj9B4L63zHpjXLl4y0L3mcm2htEQIb06oCG/szerNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.1.5.tgz",
      "integrity": "sha512-navSiuTMogvnQoZoM/v+l3ZWo50/NTwSHSzheABx/RCnmUPaKwq9qSo4Br2OYRs21+Fz8uFqITZM3H4opOB0/Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.1.5.tgz",
      "integrity": "sha512-lAryqH7IteztmCXQXk0etKj4wBQ7Gx5S6LjKhsgp9zb8I5bsuvU/2llH1hDQcjsFeqIsovMVN339/8pUDDBXxA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.1.5.tgz",
      "integrity": "sha512-fsK/sNBnxzBlL4O1JNrZakVQxPspqpED5dLtNsZS9oOKmtSpdNIzxH2kkol5HYTWJN47sE20ztMJPxfZ89qGOg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.1.5.tgz",
      "integrity": "sha512-gLYb4BIadlfTOYT5gO503n8zQjXflgzpD0FcyKh0Mzx3rqCZKnHoJWV9xe1KXUJ5lx2JfcSHr/mhzS0PC/McAA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.1.5.tgz",
      "integrity": "sha512-FjcpEKUyJygHgs1o50VYNvkt5+7Le/VEdYt0AkRpkL33MnyQfwr8l5mXwMmfmTbyMPr5vJLC+8/Gd9gXnwU1QQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.1.5.tgz",
      "integrity": "sha512-Me+PfPI2TMeOQk0gYWfLQZtTktrmzbr8cDboqX83XKc7UrgAi55gF+2dUkWdxd19n55Essp2yeca+O9N5rBxHg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.1.5.tgz",
      "integrity": "sha512-yc5WrLzXks6zCQfn9Oxr8pORKyl/pF+QjHmW/Qx3qu0oyrrNC+y2JLTU1E2rcWYAmzlnqngWXHQjy51VzW70Vw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.1.5.tgz",
      "integrity": "sha512-VbQGPX2b4r48TAMIM2cjgluIM1HYutm4pcTEJsle7iEP7sB1dFqtPLBVbdLAZCxy1txCcPxf4QFf4v8uvltPqA==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.11.1",
        "@emnapi/runtime": "1.11.1",
        "@napi-rs/wasm-runtime": "^1.1.6"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.1.5.tgz",
      "integrity": "sha512-gHv82k63z4qpV5+Q1y/12KrK0ltWBukVDI8nZcbT7Tt/ZlOIVwppazneq0F93oDxTo3IgAMEDIoQh3E2n6mVsw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.1.5.tgz",
      "integrity": "sha512-tTZuDBPw85tEN5PQi1pnEBzDy0Z49HtScLAbD5t6hyeU92A95pRWaSMw1GZZi/RwgSgUIl0xrSlXIT/9QzvYSA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.3.tgz",
      "integrity": "sha512-F3fo1MYrRJYL3zER0OUOmkutjr1Vp23m7OsSgp7nq4SP6OqX6C/56XFIPAl5bt3zaBRjmW7SGz3u/6LwFpYcOg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/node": {
      "version": "26.1.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.1.1.tgz",
      "integrity": "sha512-nxAkRSVkN1Y0JC1W8ky/fTfkGsMmcrRsbx+3XoZE+rMOX71kLYTV7fLXpqud1GpbpP5TuffXFqfX7fH2GgZREw==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.17",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.17.tgz",
      "integrity": "sha512-MXfmqaVPEVgkBT/aY0aGCkRWWtByiYQXo3xdQ8r5RzuFrPiRn8Gar2tQdXSUQ2GKV3bkXckek89V8wQBY2Q/Aw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.3.tgz",
      "integrity": "sha512-vmFvco5/QuC2f9Oj+wTk0+9XeDFkHxSamwZKYc7MxYwKICfvUvlMhqKI0VuICPltGqh1neqBKDvO4kes1ya8vg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/faye-websocket": {
      "version": "0.11.4",
      "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.4.tgz",
      "integrity": "sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==",
      "license": "Apache-2.0",
      "dependencies": {
        "websocket-driver": ">=0.5.1"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/firebase": {
      "version": "12.16.0",
      "resolved": "https://registry.npmjs.org/firebase/-/firebase-12.16.0.tgz",
      "integrity": "sha512-CNw6hFBdONkzF8UGLDx/RDRY9gVa5VmJNHd7qi4gdmA3ZuLkuOrhmWefB2l+FN+OxFpN77Itq7aO6zlTi780ag==",
      "license": "Apache-2.0",
      "dependencies": {
        "@firebase/ai": "2.13.1",
        "@firebase/analytics": "0.10.22",
        "@firebase/analytics-compat": "0.2.28",
        "@firebase/app": "0.15.1",
        "@firebase/app-check": "0.12.0",
        "@firebase/app-check-compat": "0.4.5",
        "@firebase/app-compat": "0.5.15",
        "@firebase/app-types": "0.9.5",
        "@firebase/auth": "1.13.3",
        "@firebase/auth-compat": "0.6.8",
        "@firebase/data-connect": "0.7.1",
        "@firebase/database": "1.1.3",
        "@firebase/database-compat": "2.1.4",
        "@firebase/firestore": "4.16.0",
        "@firebase/firestore-compat": "0.4.11",
        "@firebase/functions": "0.13.5",
        "@firebase/functions-compat": "0.4.5",
        "@firebase/installations": "0.6.22",
        "@firebase/installations-compat": "0.2.22",
        "@firebase/messaging": "0.13.0",
        "@firebase/messaging-compat": "0.2.27",
        "@firebase/performance": "0.7.12",
        "@firebase/performance-compat": "0.2.25",
        "@firebase/remote-config": "0.9.0",
        "@firebase/remote-config-compat": "0.2.27",
        "@firebase/storage": "0.14.3",
        "@firebase/storage-compat": "0.4.3",
        "@firebase/util": "1.15.1"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/http-parser-js": {
      "version": "0.5.10",
      "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.5.10.tgz",
      "integrity": "sha512-Pysuw9XpUq5dVc/2SMHpuTY01RFl8fttgcyunjL7eEMhGM3cI4eOmiCycJDVCo/7O7ClfQD3SaI6ftDzqOXYMA==",
      "license": "MIT"
    },
    "node_modules/idb": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/idb/-/idb-7.1.1.tgz",
      "integrity": "sha512-gchesWBzyvGHRO9W8tzUWFDycow5gwjvFKfyV9FF32Y7F50yZMp7mP+T2mJIWFx49zicqyC4uefHM17o6xKIVQ==",
      "license": "ISC"
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lodash.camelcase": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz",
      "integrity": "sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==",
      "license": "MIT"
    },
    "node_modules/lodash.throttle": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
      "integrity": "sha512-wIkUCfVKpVsWo3JSZlc+8MB5it+2AN5W8J7YVMST30UrvcQNZ1Okbj+rbVniijTWE6FGYy4XJq/rHkas8qJMLQ==",
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "license": "Apache-2.0"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.16",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.16.tgz",
      "integrity": "sha512-bzlKTyNJ7+LdGIIwy8ijFpIqEQIvafahV7eYykJ8Cvh42EdJeODoJ6gUJXpQJvej1BddH8OqTXZNE/KfbWAu8Q==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/oxlint": {
      "version": "1.74.0",
      "resolved": "https://registry.npmjs.org/oxlint/-/oxlint-1.74.0.tgz",
      "integrity": "sha512-odGl2s2x5IOJoj3A0v1k0PGBXVFBZeZ2+AK/+K2MJur7Ghi3bkyX5NuLUWHKqa4js1wjep3hJeuTQJOlr+4+dA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxlint": "bin/oxlint"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      },
      "optionalDependencies": {
        "@oxlint/binding-android-arm-eabi": "1.74.0",
        "@oxlint/binding-android-arm64": "1.74.0",
        "@oxlint/binding-darwin-arm64": "1.74.0",
        "@oxlint/binding-darwin-x64": "1.74.0",
        "@oxlint/binding-freebsd-x64": "1.74.0",
        "@oxlint/binding-linux-arm-gnueabihf": "1.74.0",
        "@oxlint/binding-linux-arm-musleabihf": "1.74.0",
        "@oxlint/binding-linux-arm64-gnu": "1.74.0",
        "@oxlint/binding-linux-arm64-musl": "1.74.0",
        "@oxlint/binding-linux-ppc64-gnu": "1.74.0",
        "@oxlint/binding-linux-riscv64-gnu": "1.74.0",
        "@oxlint/binding-linux-riscv64-musl": "1.74.0",
        "@oxlint/binding-linux-s390x-gnu": "1.74.0",
        "@oxlint/binding-linux-x64-gnu": "1.74.0",
        "@oxlint/binding-linux-x64-musl": "1.74.0",
        "@oxlint/binding-openharmony-arm64": "1.74.0",
        "@oxlint/binding-win32-arm64-msvc": "1.74.0",
        "@oxlint/binding-win32-ia32-msvc": "1.74.0",
        "@oxlint/binding-win32-x64-msvc": "1.74.0"
      },
      "peerDependencies": {
        "oxlint-tsgolint": ">=0.24.0",
        "vite-plus": "*"
      },
      "peerDependenciesMeta": {
        "oxlint-tsgolint": {
          "optional": true
        },
        "vite-plus": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.19",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.19.tgz",
      "integrity": "sha512-Mz8SaolMd8nB+G13WkORcxQKHZ/NE4xXevtkJHVuG+guo9/wYKlIMTKAqGdEmYOXR2ijPjTYNHssizdaVSUNdQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.12",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/protobufjs": {
      "version": "7.6.5",
      "resolved": "https://registry.npmjs.org/protobufjs/-/protobufjs-7.6.5.tgz",
      "integrity": "sha512-/FPD0nUc9jH6rfFjji9IBqOz4pcSE3CsT1m7Ep6Mdb0LxSUMj8hgl6GomOvZzpNpAqqGaXA0P3VSrZLFzIhQrw==",
      "hasInstallScript": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.2",
        "@protobufjs/base64": "^1.1.2",
        "@protobufjs/codegen": "^2.0.5",
        "@protobufjs/eventemitter": "^1.1.1",
        "@protobufjs/fetch": "^1.1.1",
        "@protobufjs/float": "^1.0.2",
        "@protobufjs/path": "^1.1.2",
        "@protobufjs/pool": "^1.1.0",
        "@protobufjs/utf8": "^1.1.1",
        "@types/node": ">=13.7.0",
        "long": "^5.3.2"
      },
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/re2js": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/re2js/-/re2js-0.4.3.tgz",
      "integrity": "sha512-EuNmh7jurhHEE8Ge/lBo9JuMLb3qf866Xjjfyovw3wPc7+hlqDkZq4LwhrCQMEI+ARWfrKrHozEndzlpNT0WDg==",
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.7.tgz",
      "integrity": "sha512-HNe9WslTbXmFK8o8cmwgAeJFSBvt1bPdHCVKtaaV+WlAN36mpT4hcRpwbf3fY56ar2oIXzsBpOAiIRHAdY0OlQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.7.tgz",
      "integrity": "sha512-t0BRVXvbiE/o20Hfw669rLbMCDWtYZLvmJigy2f0MxsXF+71pxhR3xOkspmsO8h3ZlNzyibAmtCa3l4lYKk6gQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.7"
      }
    },
    "node_modules/react-icons": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/react-icons/-/react-icons-5.7.0.tgz",
      "integrity": "sha512-LBLy340Rzqy6+/yVhZKT3B/QpP1BZaesGqasf09HPOBzRarcDIFH0WwXlXQfE7q7ipxK4MSiC5DIBWURCny6fw==",
      "license": "MIT",
      "peerDependencies": {
        "react": "*"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/react-router": {
      "version": "7.18.1",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.18.1.tgz",
      "integrity": "sha512-GDLgg3i3uM0aeJO3Fm+TCS+sDQ7gu12T6x0qdTEzcwqEfleci7JwugVNIF3U//0FWKnJT7ptG+20B2jfDqnZAg==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.18.1",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.18.1.tgz",
      "integrity": "sha512-KaZh+X/6UtEp28x51AUYZDMg9NGoz2ja3dNHa+ta/tk40vCzKhQ/RypCWBMLbmDr6//E24Vv5uPsrqXFozdkAg==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.18.1"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/react-scroll": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/react-scroll/-/react-scroll-1.9.3.tgz",
      "integrity": "sha512-xv7FXqF3k63aSLNu4/NjFvRNI0ge7DmmmsbeGarP7LZVAlJMSjUuW3dTtLxp1Afijyv0lS2qwC0GiFHvx1KBHQ==",
      "license": "MIT",
      "dependencies": {
        "lodash.throttle": "^4.1.1",
        "prop-types": "^15.7.2"
      },
      "peerDependencies": {
        "react": "^15.5.4 || ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^15.5.4 || ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/rolldown": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.1.5.tgz",
      "integrity": "sha512-t9z29cJjXf/vxQ8dyhCSpt6H6aSwHTk8cT5I3iy6SMXuFpk5mB6PL6XfC8PCwrPTx93udwKUm9HRteAlTGBLiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.139.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.1.5",
        "@rolldown/binding-darwin-arm64": "1.1.5",
        "@rolldown/binding-darwin-x64": "1.1.5",
        "@rolldown/binding-freebsd-x64": "1.1.5",
        "@rolldown/binding-linux-arm-gnueabihf": "1.1.5",
        "@rolldown/binding-linux-arm64-gnu": "1.1.5",
        "@rolldown/binding-linux-arm64-musl": "1.1.5",
        "@rolldown/binding-linux-ppc64-gnu": "1.1.5",
        "@rolldown/binding-linux-s390x-gnu": "1.1.5",
        "@rolldown/binding-linux-x64-gnu": "1.1.5",
        "@rolldown/binding-linux-x64-musl": "1.1.5",
        "@rolldown/binding-openharmony-arm64": "1.1.5",
        "@rolldown/binding-wasm32-wasi": "1.1.5",
        "@rolldown/binding-win32-arm64-msvc": "1.1.5",
        "@rolldown/binding-win32-x64-msvc": "1.1.5"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "8.1.4",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.1.4.tgz",
      "integrity": "sha512-bTT9PsdWO+MQMNG9ZXIP/qM9wGh37DFxTV/sPq9cFpHr3w4jkgef032PkAL9jAqhk3Nz8NQw3O8n6/xFkqO4QQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.32.0",
        "picomatch": "^4.0.5",
        "postcss": "^8.5.16",
        "rolldown": "~1.1.4",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.3.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/web-vitals": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/web-vitals/-/web-vitals-4.2.4.tgz",
      "integrity": "sha512-r4DIlprAGwJ7YM11VZp4R884m0Vmgr6EAKe3P+kO0PPj3Unqyvv59rczf6UiGcb9Z8QxZVcqKNwv/g0WNdWwsw==",
      "license": "Apache-2.0"
    },
    "node_modules/websocket-driver": {
      "version": "0.7.5",
      "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.5.tgz",
      "integrity": "sha512-ZL2+3c7kMBdIRCMz6l8jQMHyGVxj+UL+xVk74Ombiciboca8rHa15L86B19E5oh1pL9Ii/uj54gtsIrZGMo6zA==",
      "license": "Apache-2.0",
      "dependencies": {
        "http-parser-js": ">=0.5.1",
        "safe-buffer": ">=5.1.0",
        "websocket-extensions": ">=0.1.1"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/websocket-extensions": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
      "integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs": {
      "version": "17.7.3",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.3.tgz",
      "integrity": "sha512-GZtjxm/J/4TSxuL3FNYjCmLktBTnIw/rVmKSIyKeYAZpmJB2ig9VauCC5xsa82GNKVKDAqpOn3KVzNt0zmrU0g==",
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    }
  }
}

```

---

## File 4 {#file-4}

**📄 Path:** `package.json`

```json
{
  "name": "dft-alumni",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "firebase": "^12.16.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-icons": "^5.7.0",
    "react-router-dom": "^7.18.1",
    "react-scroll": "^1.9.3"
  },
  "devDependencies": {
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "oxlint": "^1.71.0",
    "vite": "^8.1.1"
  }
}
```

---

## File 5 {#file-5}

**📄 Path:** `README.md`

```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

```

---

## File 6 {#file-6}

**📄 Path:** `src\App.css`

```css
/* App.css — intentionally empty, styles live in index.css and component CSS files */

```

---

## File 7 {#file-7}

**📄 Path:** `src\App.jsx`

```jsx
import { useEffect, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import VisionMission from './pages/VisionMission'
import Stats from './pages/Stats'
import AlumniSpotlight from './pages/AlumniSpotlight'
import Committee from './pages/Committee'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Sangam2026 from './pages/Sangam2026'

import FounderDesk from './pages/FounderDesk'
import DftAlumniMeet2023 from './pages/DftAlumniMeet2023'
import Sangaath2024 from './pages/Sangaath2024'
import NewsletterSection from './pages/NewsletterSection'
import Newsroom from './pages/Newsroom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import TermsAndConditions from './pages/TermsAndConditions'
import { auth, isFirebaseConfigured } from './firebase'
import { signOut } from 'firebase/auth'

function App() {
  const location = useLocation()
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('alumniUser')
    try {
      if (saved) {
        const parsed = JSON.parse(saved)
        if (isFirebaseConfigured && parsed.uid && String(parsed.uid).startsWith('mock-')) {
          localStorage.removeItem('alumniUser')
          return null
        }
        return parsed
      }
      return null
    } catch (e) {
      return null
    }
  })

  // Scroll behavior: scroll to top on path change, or scroll to section if state.scrollTo is set
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const target = location.state.scrollTo
      const scrollTimer = setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 600,
          offset: -80,
        })
        window.history.replaceState({}, document.title)
      }, 150)
      return () => clearTimeout(scrollTimer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.state])

  // Global scroll-reveal: observe every .reveal* element and add 'visible' when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // fire once
          }
        }),
      { threshold: 0.12 }
    )

    // Small timeout so all components have mounted before we query
    const timer = setTimeout(() => {
      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach((el) => observer.observe(el))
    }, 150)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [location.pathname])

  const handleLoginSuccess = (userData) => {
    setUser(userData)
    localStorage.setItem('alumniUser', JSON.stringify(userData))
  }

  const handleUpdateUser = (updatedData) => {
    setUser(prev => {
      const merged = { ...prev, ...updatedData }
      localStorage.setItem('alumniUser', JSON.stringify(merged))
      return merged
    })
  }

  const handleLogout = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signOut(auth)
      } catch (err) {
        console.error("Firebase SignOut Error:", err)
      }
    }
    setUser(null)
    localStorage.removeItem('alumniUser')
  }

  const showHeaderFooter = location.pathname !== '/login' && location.pathname !== '/admin'

  return (
    <>
      {showHeaderFooter && <Navbar user={user} onLogout={handleLogout} />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <VisionMission />
              <FounderDesk />
              <Stats />
              <AlumniSpotlight />
              <Committee />
              <Gallery />
              <Events />
              <NewsletterSection />
              <Contact />
            </>
          } />
          <Route path="/sangam2026" element={<Sangam2026 />} />

          <Route path="/dftalumnimeet2023" element={<DftAlumniMeet2023 />} />
          <Route path="/sangaath2024" element={<Sangaath2024 />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/login" element={<Login user={user} onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/profile" element={<Profile user={user} onUpdateUser={handleUpdateUser} />} />
          <Route path="/admin" element={<Admin user={user} onUpdateUser={handleUpdateUser} />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>
      {showHeaderFooter && <Footer />}
    </>
  )
}

export default App

```

---

## File 8 {#file-8}

**📄 Path:** `src\components\CityAutocomplete.jsx`

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaCity, FaChevronDown } from 'react-icons/fa';
import { getCitiesByState } from '../data/cityData';
import './CountryAutocomplete.css';

export default function CityAutocomplete({
  id,
  name,
  value = '',
  onChange,
  state = '',
  placeholder = 'Select or type city',
  disabled = false,
  wrapClassName = '',
  icon: Icon = FaCity,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const availableCities = getCitiesByState(state);
  const searchValue = (value || '').trim().toLowerCase();

  const filteredCities = availableCities.filter((ct) =>
    ct.toLowerCase().includes(searchValue)
  ).sort((a, b) => {
    const aStartsWith = a.toLowerCase().startsWith(searchValue);
    const bStartsWith = b.toLowerCase().startsWith(searchValue);
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    return a.localeCompare(b);
  });

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelectCity = (cityName) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: cityName,
        },
      });
    }
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex((prev) =>
          prev < filteredCities.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCities.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredCities.length) {
        e.preventDefault();
        handleSelectCity(filteredCities[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const highlightedEl = listRef.current.children[highlightedIndex];
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div className={`country-autocomplete-wrap ${wrapClassName}`} ref={wrapperRef}>
      {Icon && <Icon className="country-autocomplete__icon login-field__icon profile-field__icon" />}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={() => !disabled && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className="country-autocomplete__input"
      />
      <button
        type="button"
        className="country-autocomplete__arrow-btn"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        tabIndex={-1}
        aria-label="Toggle city dropdown"
      >
        <FaChevronDown
          className={`country-autocomplete__arrow ${
            isOpen ? 'country-autocomplete__arrow--open' : ''
          }`}
        />
      </button>

      {isOpen && !disabled && (
        <ul className="country-autocomplete__dropdown" ref={listRef}>
          {filteredCities.length > 0 ? (
            filteredCities.map((ct, index) => {
              const isSelected = ct.toLowerCase() === (value || '').trim().toLowerCase();
              const isHighlighted = index === highlightedIndex;
              return (
                <li
                  key={ct}
                  className={`country-autocomplete__item ${
                    isHighlighted ? 'country-autocomplete__item--highlighted' : ''
                  } ${isSelected ? 'country-autocomplete__item--selected' : ''}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelectCity(ct);
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {ct}
                </li>
              );
            })
          ) : (
            <li className="country-autocomplete__no-results">No cities found</li>
          )}
        </ul>
      )}
    </div>
  );
}

```

---

## File 9 {#file-9}

**📄 Path:** `src\components\CompanyAutocomplete.css`

```css
.company-autocomplete-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.company-autocomplete__input {
  width: 100%;
  padding-right: 38px !important;
}

.company-autocomplete__arrow-btn {
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--slate, #64748b);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  z-index: 3;
  transition: transform 0.2s ease, color 0.2s ease;
}

.company-autocomplete__arrow-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.company-autocomplete__arrow-btn:disabled .company-autocomplete__arrow {
  transform: none !important;
  color: var(--slate, #64748b) !important;
}

.company-autocomplete__arrow {
  font-size: 0.75rem;
  transition: transform 0.25s ease, color 0.25s ease;
}

.company-autocomplete__arrow--open {
  transform: rotate(180deg);
  color: var(--signal-red, #e8302a);
}

.company-autocomplete__dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 220px;
  overflow-y: auto;
  background: var(--paper-white, #ffffff);
  border: 1px solid var(--line-grey, #e2e8f0);
  border-radius: 6px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin: 0;
  padding: 4px 0;
  list-style: none;
}

.company-autocomplete__dropdown::-webkit-scrollbar {
  width: 6px;
}

.company-autocomplete__dropdown::-webkit-scrollbar-track {
  background: var(--fog-grey, #f8fafc);
  border-radius: 0 6px 6px 0;
}

.company-autocomplete__dropdown::-webkit-scrollbar-thumb {
  background: var(--slate, #cbd5e1);
  border-radius: 3px;
}

.company-autocomplete__dropdown::-webkit-scrollbar-thumb:hover {
  background: var(--navy-mid, #94a3b8);
}

.company-autocomplete__item {
  padding: 9px 14px;
  font-size: 0.82rem;
  font-family: var(--font-body, inherit);
  color: var(--navy-deep, #0b1b3f);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.company-autocomplete__item--highlighted {
  background: rgba(232, 48, 42, 0.08);
  color: var(--signal-red, #e8302a);
  font-weight: 600;
}

.company-autocomplete__item--selected {
  background: rgba(11, 27, 63, 0.06);
  font-weight: 700;
}

.company-autocomplete__no-results {
  padding: 12px 14px;
  font-size: 0.82rem;
  color: var(--slate, #64748b);
  font-style: italic;
  text-align: center;
}

```

---

## File 10 {#file-10}

**📄 Path:** `src\components\CompanyAutocomplete.jsx`

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaChevronDown } from 'react-icons/fa';
import { COMPANY_OPTIONS } from '../data/formdata';
import { db, isFirebaseConfigured } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './CompanyAutocomplete.css';

export default function CompanyAutocomplete({
  id,
  name,
  value = '',
  onChange,
  placeholder = 'Select or type company name',
  disabled = false,
  wrapClassName = '',
  icon: Icon = FaBuilding,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [allCompanies, setAllCompanies] = useState(COMPANY_OPTIONS);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  // Fetch dynamic companies from Firebase collection if configured
  useEffect(() => {
    let isMounted = true;
    async function fetchDynamicCompanies() {
      if (!isFirebaseConfigured || !db) return;
      try {
        const querySnapshot = await getDocs(collection(db, 'companies'));
        const dynamicList = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data && data.name && typeof data.name === 'string') {
            dynamicList.push(data.name.trim());
          }
        });

        if (dynamicList.length > 0 && isMounted) {
          const combined = Array.from(new Set([...COMPANY_OPTIONS, ...dynamicList])).sort((a, b) =>
            a.localeCompare(b)
          );
          setAllCompanies(combined);
        }
      } catch (err) {
        // Silently fallback to static COMPANY_OPTIONS if firestore rules or network restrict reading
        if (err?.code !== 'permission-denied') {
          console.warn('Failed to fetch dynamic companies list:', err);
        }
      }
    }

    fetchDynamicCompanies();
    return () => {
      isMounted = false;
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const searchValue = (value || '').trim().toLowerCase();

  const filteredCompanies = allCompanies.filter((company) =>
    company.toLowerCase().includes(searchValue)
  ).sort((a, b) => {
    const aStartsWith = a.toLowerCase().startsWith(searchValue);
    const bStartsWith = b.toLowerCase().startsWith(searchValue);
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    return a.localeCompare(b);
  });

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelectCompany = (companyName) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: companyName,
        },
      });
    }
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex((prev) =>
          prev < filteredCompanies.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCompanies.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredCompanies.length) {
        e.preventDefault();
        handleSelectCompany(filteredCompanies[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const highlightedEl = listRef.current.children[highlightedIndex];
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div className={`company-autocomplete-wrap ${wrapClassName}`} ref={wrapperRef}>
      {Icon && <Icon className="company-autocomplete__icon login-field__icon profile-field__icon" />}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={() => !disabled && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className="company-autocomplete__input"
      />
      <button
        type="button"
        className="company-autocomplete__arrow-btn"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        tabIndex={-1}
        aria-label="Toggle company dropdown"
      >
        <FaChevronDown
          className={`company-autocomplete__arrow ${isOpen ? 'company-autocomplete__arrow--open' : ''
            }`}
        />
      </button>

      {isOpen && !disabled && (
        <ul className="company-autocomplete__dropdown" ref={listRef}>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, index) => {
              const isSelected = company.toLowerCase() === (value || '').trim().toLowerCase();
              const isHighlighted = index === highlightedIndex;
              return (
                <li
                  key={company}
                  className={`company-autocomplete__item ${isHighlighted ? 'company-autocomplete__item--highlighted' : ''
                    } ${isSelected ? 'company-autocomplete__item--selected' : ''}`}
                  onClick={() => handleSelectCompany(company)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {company}
                </li>
              );
            })
          ) : (
            <li className="company-autocomplete__no-results">
              No matching company found.<br /> You can keep typing to enter a new company.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

```

---

## File 11 {#file-11}

**📄 Path:** `src\components\CountryAutocomplete.css`

```css
.country-autocomplete-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.country-autocomplete__input {
  width: 100%;
  padding-right: 38px !important;
}

.country-autocomplete__arrow-btn {
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--slate, #64748b);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  z-index: 3;
  transition: transform 0.2s ease, color 0.2s ease;
}

.country-autocomplete__arrow-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.country-autocomplete__arrow-btn:disabled .country-autocomplete__arrow {
  transform: none !important;
  color: var(--slate, #64748b) !important;
}

.country-autocomplete__arrow {
  font-size: 0.75rem;
  transition: transform 0.25s ease, color 0.25s ease;
}

.country-autocomplete__arrow--open {
  transform: rotate(180deg);
  color: var(--signal-red, #e8302a);
}

.country-autocomplete__dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 220px;
  overflow-y: auto;
  background: var(--paper-white, #ffffff);
  border: 1px solid var(--line-grey, #e2e8f0);
  border-radius: 6px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin: 0;
  padding: 4px 0;
  list-style: none;
}

.country-autocomplete__dropdown::-webkit-scrollbar {
  width: 6px;
}

.country-autocomplete__dropdown::-webkit-scrollbar-track {
  background: var(--fog-grey, #f8fafc);
  border-radius: 0 6px 6px 0;
}

.country-autocomplete__dropdown::-webkit-scrollbar-thumb {
  background: var(--slate, #cbd5e1);
  border-radius: 3px;
}

.country-autocomplete__dropdown::-webkit-scrollbar-thumb:hover {
  background: var(--navy-mid, #94a3b8);
}

.country-autocomplete__item {
  padding: 9px 14px;
  font-size: 0.82rem;
  font-family: var(--font-body, inherit);
  color: var(--navy-deep, #0b1b3f);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.country-autocomplete__item--highlighted {
  background: rgba(232, 48, 42, 0.08);
  color: var(--signal-red, #e8302a);
  font-weight: 600;
}

.country-autocomplete__item--selected {
  background: rgba(11, 27, 63, 0.06);
  font-weight: 700;
}

.country-autocomplete__no-results {
  padding: 12px 14px;
  font-size: 0.82rem;
  color: var(--slate, #64748b);
  text-align: center;
  font-style: italic;
}

```

---

## File 12 {#file-12}

**📄 Path:** `src\components\CountryAutocomplete.jsx`

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { COUNTRIES } from '../data/countryData';
import './CountryAutocomplete.css';

export default function CountryAutocomplete({
  id,
  name,
  value = '',
  onChange,
  placeholder = 'Select or type country',
  disabled = false,
  wrapClassName = '',
  icon: Icon = FaGlobe,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const searchValue = (value || '').trim().toLowerCase();

  const filteredCountries = COUNTRIES.filter((country) =>
    country.toLowerCase().includes(searchValue)
  ).sort((a, b) => {
    if (a === 'India') return -1;
    if (b === 'India') return 1;
    const aStartsWith = a.toLowerCase().startsWith(searchValue);
    const bStartsWith = b.toLowerCase().startsWith(searchValue);
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    return a.localeCompare(b);
  });

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelectCountry = (countryName) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: countryName,
        },
      });
    }
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex((prev) =>
          prev < filteredCountries.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCountries.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredCountries.length) {
        e.preventDefault();
        handleSelectCountry(filteredCountries[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const highlightedEl = listRef.current.children[highlightedIndex];
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div className={`country-autocomplete-wrap ${wrapClassName}`} ref={wrapperRef}>
      {Icon && <Icon className="country-autocomplete__icon login-field__icon profile-field__icon" />}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={() => !disabled && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className="country-autocomplete__input"
      />
      <button
        type="button"
        className="country-autocomplete__arrow-btn"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        tabIndex={-1}
        aria-label="Toggle country dropdown"
      >
        <FaChevronDown
          className={`country-autocomplete__arrow ${
            isOpen ? 'country-autocomplete__arrow--open' : ''
          }`}
        />
      </button>

      {isOpen && !disabled && (
        <ul className="country-autocomplete__dropdown" ref={listRef}>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => {
              const isSelected = country.toLowerCase() === (value || '').trim().toLowerCase();
              const isHighlighted = index === highlightedIndex;
              return (
                <li
                  key={country}
                  className={`country-autocomplete__item ${
                    isHighlighted ? 'country-autocomplete__item--highlighted' : ''
                  } ${isSelected ? 'country-autocomplete__item--selected' : ''}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelectCountry(country);
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {country}
                </li>
              );
            })
          ) : (
            <li className="country-autocomplete__no-results">No countries found</li>
          )}
        </ul>
      )}
    </div>
  );
}

```

---

## File 13 {#file-13}

**📄 Path:** `src\components\Footer.css`

```css
.footer {
  background: var(--navy-deep);
  color: #C7CEE0;
  position: relative;
}

/* Signal-red top accent bar */
.footer__top-bar {
  height: 4px;
  background: var(--signal-red);
  width: 100%;
}

.footer__body {
  padding: 70px 0 50px;
  /* Repeating line texture from design-system masthead */
  background-image: repeating-linear-gradient(115deg,
      rgba(255, 255, 255, 0.03) 0px,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px,
      transparent 26px);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
}

.footer__brand {
  max-width: 460px;
  flex: 1 1 350px;
}

.footer__col {
  min-width: 160px;
}

/* Brand */
.footer__logo {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.footer__logo-img {
  height: 42px;
  width: auto;
  object-fit: contain;
  display: block;
}

.footer__logo-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--paper-white);
  letter-spacing: 2px;
}

.footer__logo-sub {
  font-family: var(--font-body);
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.footer__brand-text {
  font-size: 0.88rem;
  color: #C7CEE0;
  line-height: 1.75;
  margin-bottom: 22px;
}

.footer__socials {
  display: flex;
  gap: 8px;
}

.footer__social {
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  transition: var(--transition);
}

.footer__social:hover {
  background: var(--signal-red);
  color: var(--paper-white);
  border-color: var(--signal-red);
  transform: translateY(-3px);
}

/* Link columns */
.footer__col-heading {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--paper-white);
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--signal-red);
  display: inline-block;
}

.footer__col-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  font-size: 0.88rem;
  color: #C7CEE0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition);
  font-weight: 500;
}

.footer__link-arrow {
  color: var(--signal-red);
  font-size: 1rem;
  line-height: 1;
}

.footer__link:hover {
  color: var(--paper-white);
  padding-left: 4px;
}

/* Newsletter */
.footer__newsletter-text {
  font-size: 0.85rem;
  color: #C7CEE0;
  line-height: 1.7;
  margin-bottom: 16px;
}

.footer__newsletter-form {
  display: flex;
  gap: 0;
}

.footer__newsletter-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-right: none;
  padding: 11px 14px;
  color: var(--paper-white);
  font-family: var(--font-body);
  font-size: 0.85rem;
  outline: none;
  border-radius: 0;
  transition: var(--transition);
}

.footer__newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.footer__newsletter-input:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
}

.footer__newsletter-btn {
  background: var(--signal-red);
  color: var(--paper-white);
  border: none;
  padding: 11px 20px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: var(--transition);
  border-radius: 0;
}

.footer__newsletter-btn:hover {
  background: var(--red-deep);
}

/* Bottom bar */
.footer__bottom {
  padding: 18px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--navy-mid);
}

.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer__copy,
.footer__design {
  font-size: 0.78rem;
  color: rgba(199, 206, 224, 0.6);
  font-family: var(--font-body);
}

.footer__design a {
  color: var(--paper-white);
  font-weight: 600;
  transition: var(--transition);
}

.footer__design a:hover {
  color: var(--signal-red);
}

.footer__visitor-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 4px 14px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.footer__visitor-badge:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.footer__visitor-icon {
  color: var(--signal-red);
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .footer__inner {
    flex-wrap: wrap;
    gap: 40px;
  }

  .footer__brand {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .footer__inner {
    flex-direction: column;
    gap: 32px;
  }

  .footer__bottom-inner {
    flex-direction: column;
    text-align: center;
    gap: 6px;
  }
}
```

---

## File 14 {#file-14}

**📄 Path:** `src\components\Footer.jsx`

```jsx
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEye } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.avif'
import useVisitorCount from '../hooks/useVisitorCount'
import './Footer.css'

const footerLinks = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', to: 'home' },
      { label: 'About', to: 'about' },
      { label: 'Vision & Mission', to: 'vision' },
      { label: 'Committee', to: 'committee' },
      { label: 'Newsletter', to: 'newsletter' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'Gallery', to: 'gallery' },
      { label: 'Sangam 2026', to: '/sangam2026', isRouter: true },
      { label: 'Contact Us', to: 'contact' },
    ],
  },
]

const socials = [
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/dftalumnifamily' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/dftalumnifamily/' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/dft-alumni/posts/?feedView=all' },
  { icon: <FaYoutube />, label: 'YouTube', href: 'https://www.youtube.com/@DFTAlumniFamily' },
]

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const visitorCount = useVisitorCount()

  return (
    <footer className="footer">
      {/* Red accent top line */}
      <div className="footer__top-bar" />

      <div className="footer__body">
        <div className="container footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={dftLogo} alt="DFT Logo" className="footer__logo-img" />
              <div>
                <div className="footer__logo-title">DFT ALUMNI</div>
                <div className="footer__logo-sub">Sir Bhavsinhji Polytechnic, Bhavnagar</div>
              </div>
            </div>
            <p className="footer__brand-text">
              A proud community of graduates united by the legacy of the Diploma in Fabrication
              Technology — connecting, inspiring, and giving back generation after generation.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="footer__social" target='__blank' aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer__col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.isRouter ? (
                      <RouterLink to={link.to} className="footer__link">
                        <span className="footer__link-arrow">›</span>
                        {link.label}
                      </RouterLink>
                    ) : isHome ? (
                      <ScrollLink to={link.to} smooth duration={600} offset={-80} className="footer__link">
                        <span className="footer__link-arrow">›</span>
                        {link.label}
                      </ScrollLink>
                    ) : (
                      <RouterLink to="/" state={{ scrollTo: link.to }} className="footer__link">
                        <span className="footer__link-arrow">›</span>
                        {link.label}
                      </RouterLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} DFT Alumni Association · Bhavnagar · Gujarat · <RouterLink to="/terms" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', transition: 'color 0.2s', marginLeft: '6px' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}>Terms & Conditions</RouterLink>
          </p>
          {visitorCount > 0 && (
            <div className="footer__visitor-badge">
              <FaEye className="footer__visitor-icon" />
              <span>Total Visits: <strong>{visitorCount.toLocaleString()}</strong></span>
            </div>
          )}
          <p className="footer__design">
            Designed and Developed with 💙 by <a href="https://meghpatel.vercel.app" target="_blank" rel="noopener noreferrer">Megh Patel</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

```

---

## File 15 {#file-15}

**📄 Path:** `src\components\ImageWithSkeleton.css`

```css
.image-skeleton-wrapper {
  position: relative;
  overflow: hidden;
}

/* Base Shimmer for light themes (covers most page sections) */
.image-skeleton-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(215, 219, 227, 0.4) 25%,
    rgba(243, 244, 247, 0.7) 37%,
    rgba(215, 219, 227, 0.4) 63%
  );
  background-size: 400% 100%;
  animation: image-skeleton-pulse 1.4s ease infinite;
  z-index: 1;
}

/* Dark Theme Shimmer for dark sections (like Hero) */
.image-skeleton-wrapper--dark .image-skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgba(19, 42, 86, 0.5) 25%,
    rgba(27, 58, 115, 0.7) 37%,
    rgba(19, 42, 86, 0.5) 63%
  );
  background-size: 400% 100%;
}

@keyframes image-skeleton-pulse {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Image styles inside wrapper */
.image-skeleton-img {
  width: 100%;
  height: 100%;
  object-fit: inherit;
  object-position: inherit;
  display: block;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-skeleton-img--loaded {
  opacity: 1;
}

```

---

## File 16 {#file-16}

**📄 Path:** `src\components\ImageWithSkeleton.jsx`

```jsx
import { useState, useEffect, useRef } from 'react'
import './ImageWithSkeleton.css'

export default function ImageWithSkeleton({
  src,
  alt,
  className,
  wrapperClassName,
  style,
  theme = 'light',
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Reset state for new src
    setLoaded(false)
    setError(false)

    // Check cached state
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true)
    }
  }, [src])

  const handleLoad = () => {
    setLoaded(true)
  }

  const handleError = () => {
    setError(true)
  }

  const isLoaded = loaded && !error;

  return (
    <div
      className={`image-skeleton-wrapper ${theme === 'dark' ? 'image-skeleton-wrapper--dark' : ''} ${className || ''} ${wrapperClassName || ''}`}
      style={style}
    >
      {!isLoaded && (
        <div className="image-skeleton-shimmer" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`image-skeleton-img ${isLoaded ? 'image-skeleton-img--loaded' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoaded ? undefined : 0, // inline opacity overrides stylesheet while loading
          ...props.style
        }}
        {...props}
      />
    </div>
  )
}

```

---

## File 17 {#file-17}

**📄 Path:** `src\components\Navbar.css`

```css
/* ============================================
   NAVBAR — PREMIUM FULL-WIDTH GLASS HEADER
   ============================================ */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── Edge-to-Edge Container ── */
.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  padding: 0 max(16px, 2.5%);
  max-width: 1600px;
  margin: 0 auto;
  background: var(--navy-deep);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.navbar--scrolled .navbar__container {
  height: 88px;
  background: rgba(11, 27, 63, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

/* ── Brand / Logo ── */
.navbar__brand {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.navbar__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.navbar__logo:hover {
  transform: scale(1.02);
}

.navbar__logo-img {
  height: 95px;
  width: auto;
  object-fit: contain;
  transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar--scrolled .navbar__logo-img {
  height: 75px;
}

/* ── Desktop Navigation (Center/Center-Left) ── */
.navbar__nav {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(14px, 1.8vw, 32px);
  padding: 0 12px;
  min-width: 0;
}

.navbar__link {
  position: relative;
  font-family: var(--font-body);
  font-size: clamp(0.78rem, 0.9vw, 0.92rem);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--signal-red);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(232, 48, 42, 0.6);
}

.navbar__link:hover,
.navbar__link.active {
  color: var(--paper-white);
}

.navbar__link:hover::after,
.navbar__link.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* ── Actions & CTA ── */
.navbar__actions {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.1vw, 14px);
  white-space: nowrap;
}

.navbar__cta {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  background: linear-gradient(135deg, var(--signal-red), var(--red-deep));
  border-radius: 100px;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(232, 48, 42, 0.25);
  white-space: nowrap;
}

.navbar__cta-text {
  position: relative;
  z-index: 2;
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 1.2px;
}

.navbar__cta-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ff4d4d, var(--signal-red));
  opacity: 0;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.navbar__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(232, 48, 42, 0.4);
}

.navbar__cta:hover .navbar__cta-glow {
  opacity: 1;
}

.navbar--scrolled .navbar__cta {
  padding: 8px 20px;
}

/* ── Hamburger Icon ── */
.navbar__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  color: var(--paper-white);
  font-size: 1.25rem;
  transition: background 0.3s ease, transform 0.2s ease;
}

.navbar__hamburger:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: scale(1.05);
}

.navbar__hamburger:active {
  transform: scale(0.95);
}

/* ── Mobile Overlay & Drawer ── */
.navbar__mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(11, 27, 63, 0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
}

.navbar__mobile-overlay--open {
  opacity: 1;
  visibility: visible;
}

.navbar__mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 340px;
  max-width: 85vw;
  background: var(--navy-deep);
  z-index: 999;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.navbar__mobile-drawer--open {
  transform: translateX(0);
}

.navbar__mobile-drawer-inner {
  padding: 100px 40px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.navbar__mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.navbar__mobile-item {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__mobile-drawer--open .navbar__mobile-item {
  opacity: 1;
  transform: translateX(0);
}

.navbar__mobile-link {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease, padding-left 0.3s ease;
  display: inline-block;
  letter-spacing: 1px;
}

.navbar__mobile-link:hover,
.navbar__mobile-link.active {
  color: var(--paper-white);
  padding-left: 6px;
}

.navbar__mobile-footer {
  margin-top: auto;
  padding-top: 40px;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__mobile-drawer--open .navbar__mobile-footer {
  opacity: 1;
  transform: translateY(0);
}

.navbar__mobile-cta-btn {
  display: block;
  text-align: center;
  padding: 14px;
  background: var(--signal-red);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  clip-path: polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%);
  transition: background 0.3s ease;
}

.navbar__mobile-cta-btn:hover {
  background: var(--red-deep);
}

/* ── Dropdown Box (Desktop) ── */
.navbar__dropdown-container {
  position: relative;
  display: flex;
  align-items: center;
}

.navbar__link--dropdown {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.navbar__dropdown-icon {
  font-size: 0.65rem;
  transition: transform 0.3s ease;
  color: inherit;
}

.navbar__dropdown-container:hover .navbar__dropdown-icon {
  transform: rotate(180deg);
}

.navbar__dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(15px);
  background: rgba(11, 27, 63, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 0;
  width: 260px;
  box-shadow: 0 12px 36px rgba(11, 27, 63, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  z-index: 1010;
}

/* Hover safe-zone bridge to prevent closing on gap transition */
.navbar__dropdown-menu::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  height: 15px;
}

.navbar__dropdown-container:hover .navbar__dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

.navbar__dropdown-item {
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.3s ease;
}

.navbar__dropdown-item:last-child {
  border-bottom: none;
}

.navbar__dropdown-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.navbar__dropdown-item-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--paper-white);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.navbar__dropdown-item-desc {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
}

.navbar__dropdown-item:hover .navbar__dropdown-item-title {
  color: var(--signal-red);
}

/* ── Mobile Submenu ── */
.navbar__mobile-submenu {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0 10px 16px;
  margin-top: 8px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar__mobile-sublink {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease, padding-left 0.2s ease;
}

.navbar__mobile-sublink:hover {
  color: var(--signal-red);
  padding-left: 4px;
}

/* ============================================
   RESPONSIVE BREAKPOINTS (PREVENT OVERLAPPING)
   ============================================ */

/* Laptop Resolution Optimization (1200px - 1400px) */
@media (max-width: 1400px) {
  .navbar__container {
    padding: 0 16px;
  }

  .navbar__nav {
    gap: clamp(10px, 1.3vw, 22px);
    padding: 0 6px;
  }

  .navbar__link {
    font-size: 0.78rem;
    letter-spacing: 0.5px;
  }

  .navbar__cta {
    padding: 8px 14px;
  }

  .navbar__cta-text {
    font-size: 0.72rem;
    letter-spacing: 0.8px;
  }

  .navbar__login-btn {
    padding: 8px 14px;
    font-size: 0.72rem;
    letter-spacing: 0.8px;
    white-space: nowrap;
  }
}

/* Trigger Hamburger earlier to avoid squeezing large list of links */
@media (max-width: 1200px) {
  .navbar__nav {
    display: none;
  }

  .navbar__cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__container {
    height: 88px;
    padding: 0 24px;
  }

  .navbar--scrolled .navbar__container {
    height: 72px;
  }

  .navbar__logo-img {
    height: 70px;
  }

  .navbar--scrolled .navbar__logo-img {
    height: 56px;
  }
}

@media (max-width: 480px) {
  .navbar__container {
    height: 76px;
    padding: 0 16px;
  }

  .navbar--scrolled .navbar__container {
    height: 64px;
  }

  .navbar__logo-img {
    height: 60px;
  }

  .navbar--scrolled .navbar__logo-img {
    height: 48px;
  }

  .navbar__mobile-drawer {
    width: 100%;
    max-width: 100%;
  }

  .navbar__mobile-drawer-inner {
    padding: 90px 24px 30px;
  }

  .navbar__mobile-link {
    font-size: 1.2rem;
  }
}

/* ── Secondary Portal Login Button ── */
.navbar__login-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.navbar__login-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--signal-red);
  color: var(--paper-white);
  transform: translateY(-1px);
}

.navbar--scrolled .navbar__login-btn {
  padding: 8px 18px;
}

/* ── Desktop User Profile Dropdown Menu ── */
.navbar__user-menu {
  position: relative;
}

.navbar__user-btn {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--paper-white);
  outline: none;
}

.navbar__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--signal-red), var(--red-deep));
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(232, 48, 42, 0.3);
  transition: transform 0.3s ease;
}

.navbar__user-btn:hover .navbar__avatar {
  transform: scale(1.05);
}

.navbar__user-name {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.3s ease;
}

.navbar__user-btn:hover .navbar__user-name {
  color: var(--paper-white);
}

.navbar__dropdown-arrow {
  font-size: 0.65rem;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  color: rgba(255, 255, 255, 0.6);
}

.navbar__dropdown-arrow.open {
  transform: rotate(180deg);
  color: var(--paper-white);
}

.navbar__user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  transform: translateY(15px);
  background: linear-gradient(135deg, rgba(15, 32, 67, 0.98) 0%, rgba(11, 27, 63, 0.99) 100%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 18px;
  width: 250px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  z-index: 1020;
}

.navbar__user-dropdown--open {
  opacity: 1;
  visibility: visible;
  transform: translateY(10px);
  pointer-events: auto;
}

.navbar__dropdown-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
}

.navbar__dropdown-name {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--paper-white);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.navbar__dropdown-sub {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: #a0aec0;
  font-weight: 500;
  line-height: 1.4;
}

.navbar__user-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 3px 8px;
  border-radius: 20px;
  width: fit-content;
  margin-top: 6px;
  margin-bottom: 4px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.navbar__user-badge:hover {
  transform: translateY(-1px);
}

.navbar__user-badge--verified {
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.1) 0%, rgba(46, 204, 113, 0.2) 100%);
  color: #2ecc71;
  border: 1px solid rgba(46, 204, 113, 0.35);
}

.navbar__user-badge--unverified {
  background: linear-gradient(135deg, rgba(241, 196, 15, 0.08) 0%, rgba(241, 196, 15, 0.16) 100%);
  color: #f1c40f;
  border: 1px solid rgba(241, 196, 15, 0.3);
}

.navbar__user-badge-icon {
  font-size: 0.68rem;
}

/* Tooltip container */
.navbar__user-badge-tooltip {
  visibility: hidden;
  width: 200px;
  background-color: rgba(15, 32, 67, 0.99);
  color: var(--paper-white);
  text-align: center;
  border-radius: 8px;
  padding: 10px 14px;
  position: absolute;
  z-index: 1050;
  bottom: 135%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 500;
  line-height: 1.4;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  pointer-events: none;
  text-transform: none;
  letter-spacing: 0px;
}

/* Tooltip arrow */
.navbar__user-badge-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(15, 32, 67, 0.99) transparent transparent transparent;
}

/* Show the tooltip on hover */
.navbar__user-badge:hover .navbar__user-badge-tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(-2px);
}

.navbar__dropdown-divider {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2px 0;
}

.navbar__user-dropdown-item {
  display: block;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  outline: none;
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
}

.navbar__user-dropdown-item:hover {
  color: var(--paper-white);
  background: rgba(255, 255, 255, 0.06);
  border-left-color: var(--signal-red);
}

.navbar__user-dropdown-logout {
  background: none;
  border: none;
  padding: 8px 12px;
  margin: 0;
  width: 100%;
  text-align: left;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  outline: none;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-sizing: border-box;
  border-radius: 6px;
}

.navbar__user-dropdown-logout:hover {
  color: var(--signal-red);
  background: rgba(232, 48, 42, 0.08);
  border-left-color: var(--signal-red);
}

/* Hide desktop auth features at responsive breakpoint */
@media (max-width: 1200px) {

  .navbar__login-btn,
  .navbar__user-menu {
    display: none;
  }
}

/* ── Mobile User session elements ── */
.navbar__mobile-user {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  margin-bottom: 20px;
}

.navbar__mobile-user-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.navbar__mobile-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--signal-red), var(--red-deep));
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(232, 48, 42, 0.3);
}

.navbar__mobile-user-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.88rem;
  color: var(--paper-white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.navbar__mobile-user-class {
  font-family: var(--font-body);
  font-size: 0.74rem;
  color: var(--slate);
  margin-top: 2px;
}

.navbar__mobile-profile-btn {
  display: block;
  text-align: center;
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.76rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  margin-bottom: -4px;
}

.navbar__mobile-profile-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.navbar__mobile-logout-btn {
  width: 100%;
  padding: 10px;
  background: rgba(232, 48, 42, 0.1);
  border: 1px solid var(--signal-red);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.76rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.navbar__mobile-logout-btn:hover {
  background: var(--signal-red);
}

.navbar__mobile-login-btn {
  display: block;
  text-align: center;
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.navbar__mobile-login-btn:hover {
  border-color: var(--signal-red);
  background: rgba(255, 255, 255, 0.02);
}
```

---

## File 18 {#file-18}

**📄 Path:** `src\components\Navbar.jsx`

```jsx
import { useState, useEffect } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes, FaChevronDown, FaCheckCircle, FaClock } from 'react-icons/fa'
import dftLogo from '../assets/Logo/dft-logo.avif'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'about' },
  { label: 'Alumni Spotlight', to: 'spotlight' },
  { label: 'Committee', to: 'committee' },
  { label: 'Gallery', to: 'gallery' },
  { label: 'Events', to: 'events' },
  { label: 'Newsletter', to: 'newsletter' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar({ user, onLogout }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const getDropdownDisplayName = () => {
    if (!user) return '';
    if (user.firstName || user.lastName) {
      return `${user.firstName || ''} ${user.lastName || ''}`.trim();
    }
    const parts = (user.name || '').trim().split(/\s+/);
    if (parts.length <= 2) return user.name;
    const titles = ['dr', 'dr.', 'prof', 'prof.', 'mr', 'mr.', 'ms', 'ms.', 'mrs', 'mrs.'];
    let startIndex = 0;
    if (titles.includes(parts[0].toLowerCase()) && parts.length > 2) {
      startIndex = 1;
    }
    const prefix = startIndex === 1 ? parts[0] + ' ' : '';
    const first = parts[startIndex];
    const last = parts[parts.length - 1];
    return `${prefix}${first} ${last}`.trim();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    if (!userMenuOpen) return
    const closeMenu = () => setUserMenuOpen(false)
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [userMenuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">

          {/* Left: Logo */}
          <div className="navbar__brand">
            <RouterLink to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
              <img src={dftLogo} alt="DFT Alumni Logo" className="navbar__logo-img" />
            </RouterLink>
          </div>

          {/* Center: Desktop nav */}
          <nav className="navbar__nav">
            {navLinks.map((link) => {
              const isAbout = link.label === 'About Us';
              if (isAbout) {
                return (
                  <div key={link.to} className="navbar__dropdown-container">
                    {isHome ? (
                      <ScrollLink
                        to="about"
                        smooth
                        duration={600}
                        offset={-90}
                        spy
                        activeClass="active"
                        className="navbar__link navbar__link--dropdown"
                      >
                        About Us <FaChevronDown className="navbar__dropdown-icon" />
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        state={{ scrollTo: 'about' }}
                        className="navbar__link navbar__link--dropdown"
                      >
                        About Us <FaChevronDown className="navbar__dropdown-icon" />
                      </RouterLink>
                    )}
                    <div className="navbar__dropdown-menu">
                      {isHome ? (
                        <ScrollLink
                          to="about"
                          smooth
                          duration={600}
                          offset={-90}
                          className="navbar__dropdown-item"
                        >
                          <span className="navbar__dropdown-item-title">About DFT</span>
                          <span className="navbar__dropdown-item-desc">Learn about our association</span>
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to="/"
                          state={{ scrollTo: 'about' }}
                          className="navbar__dropdown-item"
                        >
                          <span className="navbar__dropdown-item-title">About DFT</span>
                          <span className="navbar__dropdown-item-desc">Learn about our association</span>
                        </RouterLink>
                      )}

                      {isHome ? (
                        <ScrollLink
                          to="vision"
                          smooth
                          duration={600}
                          offset={-90}
                          className="navbar__dropdown-item"
                        >
                          <span className="navbar__dropdown-item-title">Vision & Mission</span>
                          <span className="navbar__dropdown-item-desc">Our goals & vision statements</span>
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to="/"
                          state={{ scrollTo: 'vision' }}
                          className="navbar__dropdown-item"
                        >
                          <span className="navbar__dropdown-item-title">Vision & Mission</span>
                          <span className="navbar__dropdown-item-desc">Our goals & vision statements</span>
                        </RouterLink>
                      )}

                      {isHome ? (
                        <ScrollLink
                          to="founder-desk"
                          smooth
                          duration={600}
                          offset={-90}
                          className="navbar__dropdown-item"
                        >
                          <span className="navbar__dropdown-item-title">Founder Desk</span>
                          <span className="navbar__dropdown-item-desc">A message from our founder</span>
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to="/"
                          state={{ scrollTo: 'founder-desk' }}
                          className="navbar__dropdown-item"
                        >
                          <span className="navbar__dropdown-item-title">Founder Desk</span>
                          <span className="navbar__dropdown-item-desc">A message from our founder</span>
                        </RouterLink>
                      )}
                    </div>
                  </div>
                );
              }

              const isEvents = link.label === 'Events';
              if (isEvents) {
                return (
                  <div key={link.to} className="navbar__dropdown-container">
                    {isHome ? (
                      <ScrollLink
                        to={link.to}
                        smooth
                        duration={600}
                        offset={-90}
                        spy
                        activeClass="active"
                        className="navbar__link navbar__link--dropdown"
                      >
                        {link.label} <FaChevronDown className="navbar__dropdown-icon" />
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        state={{ scrollTo: link.to }}
                        className="navbar__link navbar__link--dropdown"
                      >
                        {link.label} <FaChevronDown className="navbar__dropdown-icon" />
                      </RouterLink>
                    )}
                    <div className="navbar__dropdown-menu">
                      <RouterLink to="/sangam2026" className="navbar__dropdown-item">
                        <span className="navbar__dropdown-item-title">Sangam 2026</span>
                        <span className="navbar__dropdown-item-desc">Vadodara (Upcoming)</span>
                        <span className="navbar__dropdown-item-status"></span>
                      </RouterLink>
                      <RouterLink to="/sangaath2024" className="navbar__dropdown-item">
                        <span className="navbar__dropdown-item-title">Sangaath 2024</span>
                        <span className="navbar__dropdown-item-desc">Surat</span>
                      </RouterLink>
                      <RouterLink to="/dftalumnimeet2023" className="navbar__dropdown-item">
                        <span className="navbar__dropdown-item-title">DFT Alumni Meet 2023</span>
                        <span className="navbar__dropdown-item-desc">Ahmedabad</span>
                      </RouterLink>
                    </div>
                  </div>
                );
              }
              return isHome ? (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-90}
                  spy
                  activeClass="active"
                  className="navbar__link"
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.to}
                  to="/"
                  state={{ scrollTo: link.to }}
                  className="navbar__link"
                >
                  {link.label}
                </RouterLink>
              );
            })}
          </nav>

          {/* Right: CTA & Hamburger */}
          <div className="navbar__actions">
            <RouterLink to="/sangam2026" className="navbar__cta">
              <span className="navbar__cta-text">SANGAM 2026</span>
              <div className="navbar__cta-glow"></div>
            </RouterLink>

            {user ? (
              <div className="navbar__user-menu">
                <button
                  className="navbar__user-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    setUserMenuOpen(!userMenuOpen)
                  }}
                  aria-label="User menu"
                >
                  <span className="navbar__avatar">{user.name.charAt(0).toUpperCase()}</span>
                  <span className="navbar__user-name">Hi, {user.name.split(' ')[0]}</span>
                  <FaChevronDown className={`navbar__dropdown-arrow ${userMenuOpen ? 'open' : ''}`} />
                </button>
                <div className={`navbar__user-dropdown ${userMenuOpen ? 'navbar__user-dropdown--open' : ''}`}>
                  <div className="navbar__dropdown-header">
                    <strong className="navbar__dropdown-name">{getDropdownDisplayName()}</strong>
                    <div className={`navbar__user-badge ${user.verification_status ? 'navbar__user-badge--verified' : 'navbar__user-badge--unverified'}`}>
                      {user.verification_status ? (
                        <>
                          <FaCheckCircle className="navbar__user-badge-icon" /> Verified Alumni
                          <span className="navbar__user-badge-tooltip">Your account has been successfully verified by the Administrator.</span>
                        </>
                      ) : (
                        <>
                          <FaClock className="navbar__user-badge-icon" /> Pending Verification
                          <span className="navbar__user-badge-tooltip">Admin will verify the account, this might take 1-2 days</span>
                        </>
                      )}
                    </div>
                    <span className="navbar__dropdown-sub">Class of {user.degree ? `${user.degree} · ` : ''}{user.passoutYear || user.batch}</span>
                  </div>
                  <hr className="navbar__dropdown-divider" />
                  <RouterLink
                    to="/profile"
                    className="navbar__user-dropdown-item"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    My Profile
                  </RouterLink>
                  {/* <hr className="navbar__dropdown-divider" /> */}
                  {(user.account_type === 'admin' || user.account_type === 'developer') && (
                    <>
                      <RouterLink
                        to="/admin"
                        className="navbar__user-dropdown-item navbar__user-dropdown-admin"
                        onClick={() => setUserMenuOpen(false)}
                        style={{ color: 'var(--signal-red)', fontWeight: 'bold' }}
                      >
                        Admin Dashboard
                      </RouterLink>
                      {/* <hr className="navbar__dropdown-divider" /> */}
                    </>
                  )}
                  <button
                    onClick={() => {
                      onLogout()
                      setUserMenuOpen(false)
                    }}
                    className="navbar__user-dropdown-item navbar__user-dropdown-logout"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <RouterLink to="/login" className="navbar__login-btn">
                Alumni Portal
              </RouterLink>
            )}

            <button
              className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`navbar__mobile-overlay ${menuOpen ? 'navbar__mobile-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile-drawer ${menuOpen ? 'navbar__mobile-drawer--open' : ''}`}>
        <div className="navbar__mobile-drawer-inner">
          <nav className="navbar__mobile-nav">
            {navLinks.map((link, index) => (
              <div
                key={link.to}
                className="navbar__mobile-item"
                style={{ transitionDelay: `${0.05 + (index * 0.05)}s` }}
              >
                {link.label === 'About Us' ? (
                  <>
                    {isHome ? (
                      <ScrollLink
                        to="about"
                        smooth
                        duration={600}
                        offset={-90}
                        className="navbar__mobile-link"
                        activeClass="active"
                        spy
                        onClick={() => setMenuOpen(false)}
                      >
                        About Us
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        state={{ scrollTo: 'about' }}
                        className="navbar__mobile-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        About Us
                      </RouterLink>
                    )}
                    <div className="navbar__mobile-submenu">
                      {isHome ? (
                        <ScrollLink
                          to="about"
                          smooth
                          duration={600}
                          offset={-90}
                          className="navbar__mobile-sublink"
                          onClick={() => setMenuOpen(false)}
                        >
                          About DFT
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to="/"
                          state={{ scrollTo: 'about' }}
                          className="navbar__mobile-sublink"
                          onClick={() => setMenuOpen(false)}
                        >
                          About DFT
                        </RouterLink>
                      )}

                      {isHome ? (
                        <ScrollLink
                          to="vision"
                          smooth
                          duration={600}
                          offset={-90}
                          className="navbar__mobile-sublink"
                          onClick={() => setMenuOpen(false)}
                        >
                          Vision & Mission
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to="/"
                          state={{ scrollTo: 'vision' }}
                          className="navbar__mobile-sublink"
                          onClick={() => setMenuOpen(false)}
                        >
                          Vision & Mission
                        </RouterLink>
                      )}

                      {isHome ? (
                        <ScrollLink
                          to="founder-desk"
                          smooth
                          duration={600}
                          offset={-90}
                          className="navbar__mobile-sublink"
                          onClick={() => setMenuOpen(false)}
                        >
                          Founder Desk
                        </ScrollLink>
                      ) : (
                        <RouterLink
                          to="/"
                          state={{ scrollTo: 'founder-desk' }}
                          className="navbar__mobile-sublink"
                          onClick={() => setMenuOpen(false)}
                        >
                          Founder Desk
                        </RouterLink>
                      )}
                    </div>
                  </>
                ) : link.label === 'Events' ? (
                  <>
                    {isHome ? (
                      <ScrollLink
                        to={link.to}
                        smooth
                        duration={600}
                        offset={-90}
                        className="navbar__mobile-link"
                        activeClass="active"
                        spy
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        state={{ scrollTo: link.to }}
                        className="navbar__mobile-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </RouterLink>
                    )}
                    <div className="navbar__mobile-submenu">
                      <RouterLink
                        to="/sangam2026"
                        className="navbar__mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        Sangam 2026
                      </RouterLink>
                      <RouterLink
                        to="/sangaath2024"
                        className="navbar__mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        Sangaath 2024
                      </RouterLink>
                      <RouterLink
                        to="/dftalumnimeet2023"
                        className="navbar__mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        DFT Alumni Meet 2023
                      </RouterLink>
                    </div>
                  </>
                ) : isHome ? (
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-90}
                    className="navbar__mobile-link"
                    activeClass="active"
                    spy
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/"
                    state={{ scrollTo: link.to }}
                    className="navbar__mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </RouterLink>
                )}
              </div>
            ))}
          </nav>

          <div
            className="navbar__mobile-footer"
            style={{ transitionDelay: `${0.05 + (navLinks.length * 0.05)}s` }}
          >
            {user ? (
              <div className="navbar__mobile-user">
                <div className="navbar__mobile-user-info">
                  <span className="navbar__mobile-avatar">{user.name.charAt(0).toUpperCase()}</span>
                  <div style={{ textAlign: 'left' }}>
                    <div className="navbar__mobile-user-name">{getDropdownDisplayName()}</div>
                    <div className={`navbar__user-badge ${user.verification_status ? 'navbar__user-badge--verified' : 'navbar__user-badge--unverified'}`}>
                      {user.verification_status ? (
                        <>
                          <FaCheckCircle className="navbar__user-badge-icon" /> Verified Alumni
                          <span className="navbar__user-badge-tooltip">Your account has been successfully verified by the Administrator.</span>
                        </>
                      ) : (
                        <>
                          <FaClock className="navbar__user-badge-icon" /> Pending Verification
                          <span className="navbar__user-badge-tooltip">Admin will verify the account, this might take 1-2 days</span>
                        </>
                      )}
                    </div>
                    <div className="navbar__mobile-user-class">{user.passoutYear || user.batch}</div>
                  </div>
                </div>
                <RouterLink
                  to="/profile"
                  className="navbar__mobile-profile-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  My Profile
                </RouterLink>
                {(user.account_type === 'admin' || user.account_type === 'developer') && (
                  <RouterLink
                    to="/admin"
                    className="navbar__mobile-profile-btn"
                    onClick={() => setMenuOpen(false)}
                    style={{ background: 'var(--navy-deep)', color: 'var(--paper-white)', border: 'none', marginTop: '8px', marginBottom: '8px' }}
                  >
                    Admin Dashboard
                  </RouterLink>
                )}
                <button
                  onClick={() => {
                    onLogout()
                    setMenuOpen(false)
                  }}
                  className="navbar__mobile-logout-btn"
                >
                  Logout
                </button>
              </div>
            ) : (
              <RouterLink
                to="/login"
                className="navbar__mobile-login-btn"
                onClick={() => setMenuOpen(false)}
              >
                Alumni Portal
              </RouterLink>
            )}

            <RouterLink
              to="/sangam2026"
              className="navbar__mobile-cta-btn"
              onClick={() => setMenuOpen(false)}
            >
              SANGAM 2026
            </RouterLink>
          </div>
        </div>
      </div>
    </>
  )
}
```

---

## File 19 {#file-19}

**📄 Path:** `src\components\StateAutocomplete.jsx`

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { getStatesByCountry } from '../data/stateData';
import './CountryAutocomplete.css';

export default function StateAutocomplete({
  id,
  name,
  value = '',
  onChange,
  country = '',
  placeholder = 'Select or type state',
  disabled = false,
  wrapClassName = '',
  icon: Icon = FaMapMarkerAlt,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const availableStates = getStatesByCountry(country);
  const searchValue = (value || '').trim().toLowerCase();

  const filteredStates = availableStates.filter((st) =>
    st.toLowerCase().includes(searchValue)
  ).sort((a, b) => {
    const aStartsWith = a.toLowerCase().startsWith(searchValue);
    const bStartsWith = b.toLowerCase().startsWith(searchValue);
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    return a.localeCompare(b);
  });

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelectState = (stateName) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: stateName,
        },
      });
    }
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex((prev) =>
          prev < filteredStates.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredStates.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredStates.length) {
        e.preventDefault();
        handleSelectState(filteredStates[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const highlightedEl = listRef.current.children[highlightedIndex];
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div className={`country-autocomplete-wrap ${wrapClassName}`} ref={wrapperRef}>
      {Icon && <Icon className="country-autocomplete__icon login-field__icon profile-field__icon" />}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={() => !disabled && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className="country-autocomplete__input"
      />
      <button
        type="button"
        className="country-autocomplete__arrow-btn"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        tabIndex={-1}
        aria-label="Toggle state dropdown"
      >
        <FaChevronDown
          className={`country-autocomplete__arrow ${
            isOpen ? 'country-autocomplete__arrow--open' : ''
          }`}
        />
      </button>

      {isOpen && !disabled && (
        <ul className="country-autocomplete__dropdown" ref={listRef}>
          {filteredStates.length > 0 ? (
            filteredStates.map((st, index) => {
              const isSelected = st.toLowerCase() === (value || '').trim().toLowerCase();
              const isHighlighted = index === highlightedIndex;
              return (
                <li
                  key={st}
                  className={`country-autocomplete__item ${
                    isHighlighted ? 'country-autocomplete__item--highlighted' : ''
                  } ${isSelected ? 'country-autocomplete__item--selected' : ''}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelectState(st);
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {st}
                </li>
              );
            })
          ) : (
            <li className="country-autocomplete__no-results">No states found</li>
          )}
        </ul>
      )}
    </div>
  );
}

```

---

## File 20 {#file-20}

**📄 Path:** `src\data\cityData.js`

```javascript
export const CITIES_BY_STATE = {
  // Gujarat
  "gujarat": [
    "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh",
    "Gandhinagar", "Anand", "Navsari", "Morbi", "Nadiad", "Surendranagar", "Bharuch",
    "Mehsana", "Bhuj", "Porbandar", "Vapi", "Veraval", "Godhra", "Patan", "Dahod",
    "Botad", "Amreli", "Deesa", "Jetpur", "Somnath", "Ankleshwar", "Bardoli", "Gandhidham"
  ],
  // Maharashtra
  "maharashtra": [
    "Mumbai", "Pune", "Nagpur", "Thane", "Pimpri-Chinchwad", "Nashik", "Kalyan-Dombivli",
    "Vasai-Virar", "Aurangabad", "Navi Mumbai", "Solapur", "Mira-Bhayandar", "Bhiwandi",
    "Amravati", "Nanded", "Kolhapur", "Ulhasnagar", "Sangli", "Malegaon", "Jalgaon",
    "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Ichalkaranji",
    "Jalna", "Ambarnath", "Bhusawal", "Panvel", "Satara", "Beed", "Yavatmal", "Gondia"
  ],
  // Delhi
  "delhi": [
    "New Delhi", "Central Delhi", "East Delhi", "North Delhi", "North East Delhi",
    "North West Delhi", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi", "Dwarka", "Rohini"
  ],
  // Karnataka
  "karnataka": [
    "Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi", "Kalaburagi",
    "Davanagere", "Ballari", "Vijayapura", "Shivamogga", "Tumakuru", "Raichur",
    "Bidar", "Udupi", "Hospet", "Gadag-Betageri", "Robertsonpet", "Hassan", "Bhadravati"
  ],
  // Tamil Nadu
  "tamil nadu": [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Tiruppur", "Salem",
    "Erode", "Tirunelveli", "Vellore", "Thoothukudi", "Nagercoil", "Thanjavur",
    "Dindigul", "Kanchipuram", "Cuddalore", "Tiruvannamalai", "Kumbakonam"
  ],
  // Telangana
  "telangana": [
    "Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam",
    "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet", "Siddipet", "Miryalaguda"
  ],
  // Uttar Pradesh
  "uttar pradesh": [
    "Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut", "Varanasi", "Noida", "Prayagraj",
    "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Greater Noida",
    "Jhansi", "Muzaffarnagar", "Mathura", "Rampur", "Shahjahanpur", "Farrukhabad", "Firozabad"
  ],
  // Rajasthan
  "rajasthan": [
    "Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar",
    "Bharatpur", "Sikar", "Pali", "Sri Ganganagar", "Churu", "Jhunjhunu", "Barmer"
  ],
  // West Bengal
  "west bengal": [
    "Kolkata", "Howrah", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Malda",
    "Baharampur", "Habra", "Kharagpur", "Shantipur", "Dankuni", "Dhulian", "Ranaghat"
  ],
  // Madhya Pradesh
  "madhya pradesh": [
    "Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna",
    "Ratlam", "Rewa", "Katni", "Singrauli", "Burhanpur", "Khandwa", "Morena", "Bhind"
  ],
  // Punjab
  "punjab": [
    "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur",
    "Batala", "Pathankot", "Moga", "Abohar", "Malerkotla", "Khanna", "Phagwara"
  ],
  // Haryana
  "haryana": [
    "Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar",
    "Karnal", "Sonipat", "Panchkula", "Bhiwani", "Sirsa", "Bahadurgarh", "Jind"
  ],
  // Kerala
  "kerala": [
    "Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Kannur",
    "Alappuzha", "Kottayam", "Palakkad", "Manjeri", "Thalassery", "Ponnani"
  ],
  // Bihar
  "bihar": [
    "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif",
    "Arrah", "Begusarai", "Katihar", "Munger", "Chhapra", "Danapur", "Bettiah"
  ],
  // Andhra Pradesh
  "andhra pradesh": [
    "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kakinada",
    "Rajahmundry", "Tirupati", "Kadapa", "Anantapur", "Vizianagaram", "Eluru"
  ],
  // Goa
  "goa": [
    "Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem"
  ],
  // Odisha
  "odisha": [
    "Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore",
    "Bhadrak", "Baripada", "Jharsuguda"
  ],
  // Uttarakhand
  "uttarakhand": [
    "Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudraprayag", "Kashipur", "Rishikesh", "Nainital"
  ],
  // Jharkhand
  "jharkhand": [
    "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Deoghar", "Phusro", "Hazaribagh", "Giridih"
  ],
  // Assam
  "assam": [
    "Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur"
  ],
  // Major International Cities
  "california": ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Fresno", "Sacramento", "Long Beach", "Oakland"],
  "new york": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany"],
  "texas": ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington"],
  "florida": ["Miami", "Orlando", "Tampa", "Jacksonville", "St. Petersburg", "Hialeah"],
  "illinois": ["Chicago", "Aurora", "Joliet", "Naperville", "Rockford", "Springfield"],
  "ontario": ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham"],
  "british columbia": ["Vancouver", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Victoria"],
  "england": ["London", "Birmingham", "Manchester", "Liverpool", "Leeds", "Sheffield", "Bristol"],
  "dubai": ["Dubai", "Jebel Ali", "Deira", "Bur Dubai", "Dubai Marina"],
  "abu dhabi": ["Abu Dhabi", "Al Ain", "Al Dhafra"],
  "sharjah": ["Sharjah", "Khor Fakkan", "Kalba"],
  "bavaria": ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Ingolstadt"],
  "berlin": ["Berlin"],
  "new south wales": ["Sydney", "Newcastle", "Central Coast", "Wollongong", "Maitland"],
  "victoria": ["Melbourne", "Geelong", "Ballarat", "Bendigo"]
};

export const ALL_CITIES = Array.from(new Set(
  Object.values(CITIES_BY_STATE).flat()
)).sort((a, b) => a.localeCompare(b));

export function getCitiesByState(stateName) {
  if (!stateName || typeof stateName !== 'string') {
    return ALL_CITIES;
  }
  const cleanState = stateName.trim().toLowerCase();

  for (const key in CITIES_BY_STATE) {
    if (cleanState === key || cleanState.includes(key) || key.includes(cleanState)) {
      return CITIES_BY_STATE[key];
    }
  }

  return ALL_CITIES;
}

import { getCountryByState } from './stateData';

export const STATE_NAME_FORMATTED = {
  "gujarat": "Gujarat",
  "maharashtra": "Maharashtra",
  "delhi": "Delhi",
  "karnataka": "Karnataka",
  "tamil nadu": "Tamil Nadu",
  "telangana": "Telangana",
  "uttar pradesh": "Uttar Pradesh",
  "rajasthan": "Rajasthan",
  "west bengal": "West Bengal",
  "madhya pradesh": "Madhya Pradesh",
  "punjab": "Punjab",
  "haryana": "Haryana",
  "kerala": "Kerala",
  "bihar": "Bihar",
  "andhra pradesh": "Andhra Pradesh",
  "goa": "Goa",
  "odisha": "Odisha",
  "uttarakhand": "Uttarakhand",
  "jharkhand": "Jharkhand",
  "assam": "Assam",
  "california": "California",
  "new york": "New York",
  "texas": "Texas",
  "florida": "Florida",
  "illinois": "Illinois",
  "ontario": "Ontario",
  "british columbia": "British Columbia",
  "england": "England",
  "dubai": "Dubai",
  "abu dhabi": "Abu Dhabi",
  "sharjah": "Sharjah",
  "bavaria": "Bavaria",
  "berlin": "Berlin",
  "new south wales": "New South Wales",
  "victoria": "Victoria"
};

export function getStateAndCountryByCity(cityName) {
  if (!cityName || typeof cityName !== 'string') {
    return { state: '', country: '' };
  }
  const cleanCity = cityName.trim().toLowerCase();

  for (const [stateKey, cityList] of Object.entries(CITIES_BY_STATE)) {
    const foundCity = cityList.find(c => c.toLowerCase() === cleanCity);
    if (foundCity) {
      const state = STATE_NAME_FORMATTED[stateKey] || stateKey.charAt(0).toUpperCase() + stateKey.slice(1);
      const country = getCountryByState(state);
      return { state, country };
    }
  }

  if (cleanCity.length >= 3) {
    for (const [stateKey, cityList] of Object.entries(CITIES_BY_STATE)) {
      const foundCity = cityList.find(c => c.toLowerCase().startsWith(cleanCity));
      if (foundCity) {
        const state = STATE_NAME_FORMATTED[stateKey] || stateKey.charAt(0).toUpperCase() + stateKey.slice(1);
        const country = getCountryByState(state);
        return { state, country };
      }
    }
  }

  return { state: '', country: '' };
}

```

---

## File 21 {#file-21}

**📄 Path:** `src\data\committeeData.js`

```javascript
import member1 from '../assets/CoreTeam/Haresh_Mandaliya.avif'
import member2 from '../assets/CoreTeam/Ashok_Pansuriya.avif'
import member3 from '../assets/CoreTeam/Mahesh_Patel.avif'
import sangam1 from '../assets/Sangam_Team/Darshak_Maru.avif'
import sangam2 from '../assets/Sangam_Team/Keyur_Darji.avif'
import sangam3 from '../assets/Sangam_Team/Pratik_Patel.avif'
import sangam4 from '../assets/Sangam_Team/Ramdevsinh_Gohil.avif'
import sangam5 from '../assets/Sangam_Team/Tarak_Pandya.avif'

export const sangamCoreTeam = [
  { name: 'Darshak Maru', role: 'Core Committee Member', batch: 'Batch of 2002', img: sangam1, gmail: 'darshakmaru@yahoo.co.in', linkedin: 'https://www.linkedin.com/in/darshak-maru-b588b878' },
  { name: 'Keyur Darji', role: 'Core Committee Member', batch: 'Batch of 2003', img: sangam2, gmail: 'keyurjdarji@gmail.com', linkedin: 'https://www.linkedin.com/in/keyur-darji-23255973/' },
  { name: 'Pratik Patel', role: 'Core Committee Member', batch: 'Batch of 2008', img: sangam3, gmail: 'pdpatel07@gmail.com', linkedin: 'https://www.linkedin.com/in/pratik-patel-32957317/' },
  { name: 'Ramdevsinh Gohil', role: 'Core Committee Member', batch: 'Batch of 2014', img: sangam4, gmail: 'ramdevsinh.gohil007@yahoo.com', linkedin: 'https://www.linkedin.com/in/ramdevsinh-gohil-9b7b63105/' },
  { name: 'Tarak Pandya', role: 'Core Committee Member', batch: 'Batch of 2004', img: sangam5, gmail: 'tarak@indotecheng.com', linkedin: 'https://www.linkedin.com/in/tarak-pandya-14a50419a/' },
]

export const members = [
  { name: 'Haresh Mandaliya', role: 'PRESIDENT', batch: 'Batch of 1987', img: member1, gmail: 'haresh.dd@yahoo.com', linkedin: 'https://www.linkedin.com/in/haresh-mandalia-b83854242?' },
  { name: 'Mahesh Patel', role: 'SECRETARY', batch: 'Batch of 1995', img: member3, gmail: 'pmaheshpatel@gmail.com', linkedin: 'https://www.linkedin.com/in/mahesh-patel-b34aa87/' },
  { name: 'Ashok Pansuriya', role: 'Treasurer', batch: 'Batch of 1993', img: member2, gmail: 'Akpansuriya26@gmail.com', linkedin: '' },
]

```

---

## File 22 {#file-22}

**📄 Path:** `src\data\countryData.js`

```javascript
export const countryCodes = [
  { code: '+91', label: '🇮🇳 +91 (India)' },
  { code: '+93', label: '🇦🇫 +93 (Afghanistan)' },
  { code: '+355', label: '🇦🇱 +355 (Albania)' },
  { code: '+213', label: '🇩🇿 +213 (Algeria)' },
  { code: '+376', label: '🇦🇩 +376 (Andorra)' },
  { code: '+244', label: '🇦🇴 +244 (Angola)' },
  { code: '+1', label: '🇦🇬 +1 (Antigua and Barbuda)' },
  { code: '+54', label: '🇦🇷 +54 (Argentina)' },
  { code: '+374', label: '🇦🇲 +374 (Armenia)' },
  { code: '+61', label: '🇦🇺 +61 (Australia)' },
  { code: '+43', label: '🇦🇹 +43 (Austria)' },
  { code: '+994', label: '🇦🇿 +994 (Azerbaijan)' },
  { code: '+1', label: '🇧🇸 +1 (Bahamas)' },
  { code: '+973', label: '🇧🇭 +973 (Bahrain)' },
  { code: '+880', label: '🇧🇩 +880 (Bangladesh)' },
  { code: '+1', label: '🇧🇧 +1 (Barbados)' },
  { code: '+375', label: '🇧🇾 +375 (Belarus)' },
  { code: '+32', label: '🇧🇪 +32 (Belgium)' },
  { code: '+501', label: '🇧🇿 +501 (Belize)' },
  { code: '+229', label: '🇧🇯 +229 (Benin)' },
  { code: '+975', label: '🇧🇹 +975 (Bhutan)' },
  { code: '+591', label: '🇧🇴 +591 (Bolivia)' },
  { code: '+387', label: '🇧🇦 +387 (Bosnia and Herzegovina)' },
  { code: '+267', label: '🇧🇼 +267 (Botswana)' },
  { code: '+55', label: '🇧🇷 +55 (Brazil)' },
  { code: '+673', label: '🇧🇳 +673 (Brunei)' },
  { code: '+359', label: '🇧🇬 +359 (Bulgaria)' },
  { code: '+226', label: '🇧🇫 +226 (Burkina Faso)' },
  { code: '+257', label: '🇧🇮 +257 (Burundi)' },
  { code: '+238', label: '🇨🇻 +238 (Cabo Verde)' },
  { code: '+855', label: '🇰🇭 +855 (Cambodia)' },
  { code: '+237', label: '🇨🇲 +237 (Cameroon)' },
  { code: '+1', label: '🇨🇦 +1 (Canada)' },
  { code: '+236', label: '🇨🇫 +236 (Central African Republic)' },
  { code: '+235', label: '🇹🇩 +235 (Chad)' },
  { code: '+56', label: '🇨🇱 +56 (Chile)' },
  { code: '+86', label: '🇨🇳 +86 (China)' },
  { code: '+57', label: '🇨🇴 +57 (Colombia)' },
  { code: '+269', label: '🇰🇲 +269 (Comoros)' },
  { code: '+242', label: '🇨🇬 +242 (Congo (Republic of the))' },
  { code: '+506', label: '🇨🇷 +506 (Costa Rica)' },
  { code: '+385', label: '🇭🇷 +385 (Croatia)' },
  { code: '+53', label: '🇨🇺 +53 (Cuba)' },
  { code: '+357', label: '🇨🇾 +357 (Cyprus)' },
  { code: '+420', label: '🇨🇿 +420 (Czechia)' },
  { code: '+225', label: '🇨🇮 +225 (Côte d\'Ivoire) ' },
  { code: '+243', label: '🇨🇩 +243 (DR Congo)' },
  { code: '+45', label: '🇩🇰 +45 (Denmark)' },
  { code: '+253', label: '🇩🇯 +253 (Djibouti)' },
  { code: '+1', label: '🇩🇲 +1 (Dominica)' },
  { code: '+1', label: '🇩🇴 +1 (Dominican Republic)' },
  { code: '+593', label: '🇪🇨 +593 (Ecuador)' },
  { code: '+20', label: '🇪🇬 +20 (Egypt)' },
  { code: '+503', label: '🇸🇻 +503 (El Salvador)' },
  { code: '+240', label: '🇬🇶 +240 (Equatorial Guinea)' },
  { code: '+291', label: '🇪🇷 +291 (Eritrea)' },
  { code: '+372', label: '🇪🇪 +372 (Estonia)' },
  { code: '+268', label: '🇸🇿 +268 (Eswatini)' },
  { code: '+251', label: '🇪🇹 +251 (Ethiopia)' },
  { code: '+679', label: '🇫🇯 +679 (Fiji)' },
  { code: '+358', label: '🇫🇮 +358 (Finland)' },
  { code: '+33', label: '🇫🇷 +33 (France)' },
  { code: '+241', label: '🇬🇦 +241 (Gabon)' },
  { code: '+220', label: '🇬🇲 +220 (Gambia)' },
  { code: '+995', label: '🇬🇪 +995 (Georgia)' },
  { code: '+49', label: '🇩🇪 +49 (Germany)' },
  { code: '+233', label: '🇬🇭 +233 (Ghana)' },
  { code: '+30', label: '🇬🇷 +30 (Greece)' },
  { code: '+1', label: '🇬🇩 +1 (Grenada)' },
  { code: '+502', label: '🇬🇹 +502 (Guatemala)' },
  { code: '+224', label: '🇬🇳 +224 (Guinea)' },
  { code: '+245', label: '🇬🇼 +245 (Guinea-Bissau)' },
  { code: '+592', label: '🇬🇾 +592 (Guyana)' },
  { code: '+509', label: '🇭🇹 +509 (Haiti)' },
  { code: '+504', label: '🇭🇳 +504 (Honduras)' },
  { code: '+36', label: '🇭🇺 +36 (Hungary)' },
  { code: '+354', label: '🇮🇸 +354 (Iceland)' },
  { code: '+62', label: '🇮🇩 +62 (Indonesia)' },
  { code: '+98', label: '🇮🇷 +98 (Iran)' },
  { code: '+964', label: '🇮🇶 +964 (Iraq)' },
  { code: '+353', label: '🇮🇪 +353 (Ireland)' },
  { code: '+972', label: '🇮🇱 +972 (Israel)' },
  { code: '+39', label: '🇮🇹 +39 (Italy)' },
  { code: '+1', label: '🇯🇲 +1 (Jamaica)' },
  { code: '+81', label: '🇯🇵 +81 (Japan)' },
  { code: '+962', label: '🇯🇴 +962 (Jordan)' },
  { code: '+7', label: '🇰🇿 +7 (Kazakhstan)' },
  { code: '+254', label: '🇰🇪 +254 (Kenya)' },
  { code: '+686', label: '🇰🇮 +686 (Kiribati)' },
  { code: '+965', label: '🇰🇼 +965 (Kuwait)' },
  { code: '+996', label: '🇰🇬 +996 (Kyrgyzstan)' },
  { code: '+856', label: '🇱🇦 +856 (Laos)' },
  { code: '+371', label: '🇱🇻 +371 (Latvia)' },
  { code: '+961', label: '🇱🇧 +961 (Lebanon)' },
  { code: '+266', label: '🇱🇸 +266 (Lesotho)' },
  { code: '+231', label: '🇱🇷 +231 (Liberia)' },
  { code: '+218', label: '🇱🇾 +218 (Libya)' },
  { code: '+423', label: '🇱🇮 +423 (Liechtenstein)' },
  { code: '+370', label: '🇱🇹 +370 (Lithuania)' },
  { code: '+352', label: '🇱🇺 +352 (Luxembourg)' },
  { code: '+261', label: '🇲🇬 +261 (Madagascar)' },
  { code: '+265', label: '🇲🇼 +265 (Malawi)' },
  { code: '+60', label: '🇲🇾 +60 (Malaysia)' },
  { code: '+960', label: '🇲🇻 +960 (Maldives)' },
  { code: '+223', label: '🇲🇱 +223 (Mali)' },
  { code: '+356', label: '🇲🇹 +356 (Malta)' },
  { code: '+692', label: '🇲🇭 +692 (Marshall Islands)' },
  { code: '+222', label: '🇲🇷 +222 (Mauritania)' },
  { code: '+230', label: '🇲🇺 +230 (Mauritius)' },
  { code: '+52', label: '🇲🇽 +52 (Mexico)' },
  { code: '+691', label: '🇫🇲 +691 (Micronesia)' },
  { code: '+373', label: '🇲🇩 +373 (Moldova)' },
  { code: '+377', label: '🇲🇨 +377 (Monaco)' },
  { code: '+976', label: '🇲🇳 +976 (Mongolia)' },
  { code: '+382', label: '🇲🇪 +382 (Montenegro)' },
  { code: '+212', label: '🇲🇦 +212 (Morocco)' },
  { code: '+258', label: '🇲🇿 +258 (Mozambique)' },
  { code: '+95', label: '🇲🇲 +95 (Myanmar)' },
  { code: '+264', label: '🇳🇦 +264 (Namibia)' },
  { code: '+674', label: '🇳🇷 +674 (Nauru)' },
  { code: '+977', label: '🇳🇵 +977 (Nepal)' },
  { code: '+31', label: '🇳🇱 +31 (Netherlands)' },
  { code: '+64', label: '🇳🇿 +64 (New Zealand)' },
  { code: '+505', label: '🇳🇮 +505 (Nicaragua)' },
  { code: '+227', label: '🇳🇪 +227 (Niger)' },
  { code: '+234', label: '🇳🇬 +234 (Nigeria)' },
  { code: '+850', label: '🇰🇵 +850 (North Korea)' },
  { code: '+389', label: '🇲🇰 +389 (North Macedonia)' },
  { code: '+47', label: '🇳🇴 +47 (Norway)' },
  { code: '+968', label: '🇴🇲 +968 (Oman)' },
  { code: '+92', label: '🇵🇰 +92 (Pakistan)' },
  { code: '+680', label: '🇵🇼 +680 (Palau)' },
  { code: '+970', label: '🇵🇸 +970 (Palestine)' },
  { code: '+507', label: '🇵🇦 +507 (Panama)' },
  { code: '+675', label: '🇵🇬 +675 (Papua New Guinea)' },
  { code: '+595', label: '🇵🇾 +595 (Paraguay)' },
  { code: '+51', label: '🇵🇪 +51 (Peru)' },
  { code: '+63', label: '🇵🇭 +63 (Philippines)' },
  { code: '+48', label: '🇵🇱 +48 (Poland)' },
  { code: '+351', label: '🇵🇹 +351 (Portugal)' },
  { code: '+974', label: '🇶🇦 +974 (Qatar)' },
  { code: '+40', label: '🇷🇴 +40 (Romania)' },
  { code: '+7', label: '🇷🇺 +7 (Russia)' },
  { code: '+250', label: '🇷🇼 +250 (Rwanda)' },
  { code: '+1', label: '🇰🇳 +1 (Saint Kitts and Nevis)' },
  { code: '+1', label: '🇱🇨 +1 (Saint Lucia)' },
  { code: '+1', label: '🇻🇨 +1 (Saint Vincent and the Grenadines)' },
  { code: '+685', label: '🇼🇸 +685 (Samoa)' },
  { code: '+378', label: '🇸🇲 +378 (San Marino)' },
  { code: '+239', label: '🇸🇹 +239 (Sao Tome and Principe)' },
  { code: '+966', label: '🇸🇦 +966 (Saudi Arabia)' },
  { code: '+221', label: '🇸🇳 +221 (Senegal)' },
  { code: '+381', label: '🇷🇸 +381 (Serbia)' },
  { code: '+248', label: '🇸🇨 +248 (Seychelles)' },
  { code: '+232', label: '🇸🇱 +232 (Sierra Leone)' },
  { code: '+65', label: '🇸🇬 +65 (Singapore)' },
  { code: '+421', label: '🇸🇰 +421 (Slovakia)' },
  { code: '+386', label: '🇸🇮 +386 (Slovenia)' },
  { code: '+677', label: '🇸🇧 +677 (Solomon Islands)' },
  { code: '+252', label: '🇸🇴 +252 (Somalia)' },
  { code: '+27', label: '🇿🇦 +27 (South Africa)' },
  { code: '+82', label: '🇰🇷 +82 (South Korea)' },
  { code: '+211', label: '🇸🇸 +211 (South Sudan)' },
  { code: '+34', label: '🇪🇸 +34 (Spain)' },
  { code: '+94', label: '🇱🇰 +94 (Sri Lanka)' },
  { code: '+249', label: '🇸🇩 +249 (Sudan)' },
  { code: '+597', label: '🇸🇷 +597 (Suriname)' },
  { code: '+46', label: '🇸🇪 +46 (Sweden)' },
  { code: '+41', label: '🇨🇭 +41 (Switzerland)' },
  { code: '+963', label: '🇸🇾 +963 (Syria)' },
  { code: '+992', label: '🇹🇯 +992 (Tajikistan)' },
  { code: '+255', label: '🇹🇿 +255 (Tanzania)' },
  { code: '+66', label: '🇹🇭 +66 (Thailand)' },
  { code: '+670', label: '🇹🇱 +670 (Timor-Leste)' },
  { code: '+228', label: '🇹🇬 +228 (Togo)' },
  { code: '+676', label: '🇹🇴 +676 (Tonga)' },
  { code: '+1', label: '🇹🇹 +1 (Trinidad and Tobago)' },
  { code: '+216', label: '🇹🇳 +216 (Tunisia)' },
  { code: '+90', label: '🇹🇷 +90 (Turkey)' },
  { code: '+993', label: '🇹🇲 +993 (Turkmenistan)' },
  { code: '+688', label: '🇹🇻 +688 (Tuvalu)' },
  { code: '+256', label: '🇺🇬 +256 (Uganda)' },
  { code: '+380', label: '🇺🇦 +380 (Ukraine)' },
  { code: '+971', label: '🇦🇪 +971 (United Arab Emirates)' },
  { code: '+44', label: '🇬🇧 +44 (United Kingdom)' },
  { code: '+1', label: '🇺🇸 +1 (United States)' },
  { code: '+598', label: '🇺🇾 +598 (Uruguay)' },
  { code: '+998', label: '🇺🇿 +998 (Uzbekistan)' },
  { code: '+678', label: '🇻🇺 +678 (Vanuatu)' },
  { code: '+39', label: '🇻🇦 +39 (Vatican City)' },
  { code: '+58', label: '🇻🇪 +58 (Venezuela)' },
  { code: '+84', label: '🇻🇳 +84 (Vietnam)' },
  { code: '+967', label: '🇾🇪 +967 (Yemen)' },
  { code: '+260', label: '🇿🇲 +260 (Zambia)' },
  { code: '+263', label: '🇿🇼 +263 (Zimbabwe)' }
]

export const COUNTRIES = Array.from(new Set(
  countryCodes.map(c => {
    const start = c.label.indexOf('(');
    const end = c.label.lastIndexOf(')');
    if (start !== -1 && end !== -1 && end > start) {
      return c.label.substring(start + 1, end).trim();
    }
    return '';
  }).filter(Boolean)
)).sort((a, b) => {
  if (a === 'India') return -1;
  if (b === 'India') return 1;
  return a.localeCompare(b);
});

```

---

## File 23 {#file-23}

**📄 Path:** `src\data\formdata.js`

```javascript
export const ACADEMIC_YEARS = Array.from({ length: 2040 - 1983 + 1 }, (_, i) => String(1983 + i))

export const DEGREE_OPTIONS = [
  "Associate Degree",
  "Bachelor’s Degree",
  "Master’s Degree",
  "Doctoral Degree (PhD / Ed.D.)",
  "Other"
]

export const GENDER_OPTIONS = [
  "Male",
  "Female",
  "Other",
  "Prefer not to say"
]

export const CERTIFICATION_OPTIONS = [
  "Non-Destructive Testing (NDT)",
  "Welding",
  "Corrosion Protection",
  "Piping",
  "Project Management",
  "Quality",
  "Other"
]

export const PRODUCT_SERVICE_OPTIONS = [
  "Process Equipments, Heat Exchanger, Piping",
  "Skid Mounted Equipments",
  "Renewable Energy Products",
  "Cryogenic Equipments",
  "Boiler / Steam Products",
  "Daily / Cold Storage Products",
  "Structural Fabrication / PEB",
  "Defence Products",
  "Pharma Equipments",
  "Automobile Products",
  "Manpower Supplier / Job Work",
  "Inspection & Certification Services",
  "Electrical Equipment",
  "Food / Beverage Equipment",
  "NDT Services",
  "Others",
]

export const PLACEHOLDERS = {
  loginEmail: 'your@email.com',
  loginPassword: '••••••••',
  firstName: 'First Name',
  middleName: 'Middle Name',
  lastName: 'Last Name',
  regEmail: 'Email Address',
  phone: 'Contact Number',
  secondaryPhone: 'Secondary Contact Number',
  whatsapp: 'Whatsapp Number',
  city: 'City',
  state: 'State',
  country: 'Country',
  degreeDomain: 'Degree Domain',
  company: 'Company Name',
  department: 'Department',
  division: 'Division',
  jobTitle: 'Designation',
  companyWebsite: 'https://example.com',
  linkedin: 'https://linkedin.com/in/username',
  companyCity: 'City',
  companyState: 'State',
  companyCountry: 'Country',
  otherProductServices: 'Enter details of other products/services offered',
  lastPromotionDesignation: 'e.g. Team Lead',
  certificationDetail: 'Detail about Certifications / Qualifications',
  awardDetail: 'Award Details (e.g. Best Employee 2025)',
  regPassword: 'Min 6 characters',
  confirmPassword: 'Re-type password',
  captcha: 'Type the characters shown above (case-sensitive)',
  verifyPhone: 'Enter phone number',
  otherHobbies: 'Enter other interests (comma-separated)',
  workExperience: 'e.g. 5'
}

export const HOBBY_OPTIONS = [
  "Art & Craft",
  "Camping / Trekking",
  "Cooking",
  "Dancing",
  "Music Instrument",
  "Photography & Videography",
  "Playing Sports",
  "Poetry",
  "Reading",
  "Singing",
  "Social Media Content Creation",
  "Social Work",
  "Yoga / Fitness",
  "Others"
]

export const COMPANY_OPTIONS = [
  "AARTI INDUSTRIES LIMITED",
  "ACCENTURE INDIA PVT LIMITED",
  "ACME INDUSTRIES",
  "ADANI ENTERPRISE LIMITED",
  "ADANI KUTCH COPPER LIMITED",
  "ADANI NEW INDUSTRIES LIMITED",
  "ADANI SOLAR PVT LIMITED",
  "ADNOC OFFSHORE",
  "AERO ENGINEERS PVT LIMITED",
  "AEROTHERM PRODUCTS",
  "AGARWAL TANKS AND ALLIED WORKS",
  "AIA ENGINEERING LIMITED",
  "AIROIL FLAREGAS PVT LIMITED",
  "AKURAI PEB LLP",
  "AL ZAMIL HEAVY INDUSTRIES LIMITED",
  "ALLMARC INDUSTRIES PVT LIMITED",
  "ALSTOM RAIL TRANSPORTATION INDIA PVT LIMITED",
  "AMMANN INDIA PVT LIMITED",
  "AMNEX INFOTECHNOLODGIES PVT LIMITED",
  "AMNS INDIA LIMITED",
  "ANUP ENGINEERING LIMITED",
  "ARC ENGINEERS",
  "ARD SYSTEMS INC",
  "ASC TECHNOLOGY SOLUTIONS LLC",
  "ASHTAVINAYAKA TECHNO CRAFT PVT LIMITED",
  "ASIAN ENERGY LIMITED",
  "ATE ENTERPRISES PVT LIMITED",
  "AXTEL INDUSTRIES LIMITED",
  "BAHRAIN PETROLEUM COMPANY",
  "BAJAJ FINANCE LIMITED",
  "BAJAJ FINSERV LIMITED",
  "BALAJI WAFERS PVT LIMITED",
  "BAPU'S SHIPPING JAMNAGAR PVT LIMITED",
  "BARODA EQUIPMENT AND VESSELS PVT LIMITED",
  "BELFROST INTERNATIONAL LLP",
  "BEW ENGINEERING LIMITED",
  "BIOSTADT INDIA LIMITED",
  "BITSCAPE INFOTECH PRIVATE LIMITED",
  "BLUE STAR LIMITED",
  "BRADY AND MORRIS ENGINEERING CO LIMITED",
  "BRIGHTECH CONTROL VALVE PRIVATE LIMITED",
  "BUREAU VERITAS (I) PVT LIMITED",
  "BUREAU VERITAS INDIA PVT LIMITED",
  "CARYSIL STEEL PVT LIMITED",
  "CB DOCTOR VENTILATORS PVT LIMITED",
  "CHEM PROCESS SYSTEMS PVT LIMITED",
  "COMFIT & VALVE PVT LIMITED",
  "CREATIVE PRODUCT PVT LIMITED",
  "CRYOGAS EQUIPMENT PVT LIMITED",
  "CU-BUILT RENEWABLE ENERGY PVTLIMITED",
  "DEE FABRICOM PVT LIMITED",
  "DEEPAK PHENOLICS LIMITED",
  "DHYEY CONSULTING SERVICES PVT LIMITED",
  "DNV",
  "EAST PIPES",
  "EHES LIMITED",
  "ELCO INTERNATIONAL ENGINEERING CO LLC",
  "ELECON ENGG PVT LIMITED",
  "ELECTROTHERM INDIA LIMITED",
  "EPSILON ENGINEERING PVT LIMITED",
  "ESAB INDIA LIMITED",
  "ETS KIVU KWETU LIMITED",
  "FABTECH INTERNATIONAL LIMITED",
  "FILSEP EQUIPMENT PRIVATE LIMITED",
  "FLEXICO ENGITECH",
  "FLIPKART INDIA PRIVATE LIMITED",
  "FLOURISH CREATIONS PVT LIMITED",
  "GE RENEWABLE ENERGY",
  "GEA PROCESS ENGINEERING INDIA PVT LIMITED",
  "GMM PFAUDLER LIMITED",
  "GODREJ & BOYCE MFG CO LIMITED",
  "GUJARAT FLOUROCHEMICALS LIMITED",
  "GUJARAT GAS LIMITED",
  "GUJARAT INFRAPIPES  PVT LIMITED",
  "GUJARAT NARMADA VALLY FERTILIZER AND CHEMICALS LIMITED",
  "GULF LLOYED INDUSTRIAL SERVICES PVT LIMITED",
  "HARSHA ENGINEERS INTERNATIONAL LIMITED",
  "HI TECH ELASTOMERS LIMITED",
  "HI TECH INVESTMENT CASTINGS PRIVATE LIMITED",
  "HIGHLY INDIA PVT LIMITED",
  "HLE GLASCOAT LIMITED",
  "HOLTECASIA PVT LIMITED",
  "HOOPER WELDING ENTERPRISES",
  "HUANXUN SUPERHARD MATERIAL PRIVATE LIMITED",
  "HYDCO ENGINEERING PVT LIMITED",
  "I TECH PLAST INDIA LIMITED",
  "IDMC LIMITED",
  "INARCO PVT LIMITED",
  "INFINITY QUALITY",
  "INOX CVA LIMITED",
  "INOX INDIA LIMITED",
  "INOX WIND LIMITED",
  "INTEGRA ENGINEERING INDIA LIMITED",
  "IPCL",
  "IRM OFFSHORE & MARINE ENGINEERS PVT LIMITED",
  "ISGEC HITACHI ZOSEN LIMITED",
  "ISHAN EQUIPMENTS PVT LIMITED",
  "ISOTEX CORPORATION PVT LIMITED",
  "JORD INTERNATIONAL PTY LIMITED",
  "JOULE ENGINEERING WORKS",
  "KAESER COMPRESSORS INDIA PVT LIMITED",
  "KALPATARU POWER TRANSMISSION LIMITED",
  "KEPCO PLANT SERVICE AND ENGINEERING CO LIMITED",
  "KEVIN PROCESS TECHNOLOGY PVT LIMITED",
  "KHS MACHINERY PVT LIMITED",
  "KOCH FERTILIZER",
  "KRISLUR CASTOMECH PVT LIMITED",
  "LAKSHYA POWERTECH PVT LIMITED",
  "LALIT ENGINEERS",
  "LARSEN & TOUBRO LIMITED",
  "LAXMIPATI ENGINEERING WORKS LIMITED",
  "LINDE ENGINEERING INDIA PVT LIMITED",
  "LOYAL EQUIPMENTS LIMITED",
  "MADHAV COPPER LIMITED",
  "MADHUSILICA PVT LIMITED",
  "MAGNAM NETLINK PVT LIMITED",
  "MAN INDUSTRIES INDIA LIMITED",
  "MAZDA LIMITED",
  "MCDERMOTT INTERNATIONAL",
  "MODEST INFRASTRUCTURE PVT LIMITED",
  "NARANLALA PRIVATE LIMITED",
  "NATURAL STORAGE SOLUTIONS PVTLIMITED",
  "NEEL METAL PRODUCTS LIMITED",
  "NOBLE ELEVATOR GUJRAT PVT LIMITED",
  "NUBERG ENGINEERING LIMITED",
  "ONACTUATE CONSULTING PVT LIMITED",
  "OSWAL INFRASTRUCTURE LIMITED",
  "PATELS AIRTEMP INDIA LIMITED",
  "PHARMATECH PROCESS EQUIPMENTS",
  "PHILLIPS MACHINE TOOLS INDIA PVT, LIMITED",
  "PINAKIN TECHNOLOGY SOLUTIONS",
  "PLASSER INDIA PVT LIMITED",
  "POWER BUILD PVT LIMITED",
  "PRAJ INDUSTRIES LIMITED",
  "PRASHANT GROUP OF INDUSTRIES",
  "PRECISION GASIFICATION SERVICE PVT LIMITED",
  "PRITI MARINE PVT LIMITED",
  "PRIYA BLUE INDUSTRIES PRIVATE LIMITED",
  "QATAR ENERGY",
  "RATNAMANI METAL & TUBES LIMITED",
  "RELAY ENGINEERING",
  "RELIANCE INDUSTRIES LIMITED",
  "RINA GLOBAL PVT LIMITED",
  "RISHI LASER LIMITED",
  "RITESH ENGINEERING WORKS",
  "ROLEX FABRICATOR",
  "ROTEX AUTOMATION PRIVATE LIMITED",
  "RUPARAIL PVT LIMITED",
  "S K ENGINEERING",
  "SAHJANAND TECHNOLOGY PVT LIMITED",
  "SAJJAN INDIA LIMITED",
  "SAMARPAN CONSTRUCTION",
  "SAVANNAH TANK & EQUIPMENT",
  "SCHNEIDER ELECTRIC",
  "SCORPIO ENGINEERING CO",
  "SEFORGE LIMITED",
  "SEPTECHNIK ENGINEERS",
  "SERAP INDIA PVT LIMITED",
  "SGS INDIA PVT LIMITED",
  "SHAKTICHEM PVT LIMITED",
  "SHELL ENERGY INDIA PVT LIMITED",
  "SHPERO HEALTH LLP",
  "SHREE PREFAB STEEL PVT LIMITED",
  "SHREEJI ENGINEERING",
  "SHRENO ENGINEERING LIMITED",
  "SIR BHAVSINHJI POLYTECHNIC INSTITUTE",
  "SMITH STRUCTURE INDIA PVT LIMITED",
  "SOPAN O & M CO PVT LIMITED",
  "STAR ENGINEERING WORKS",
  "STEEL CAST LIMITED",
  "STEELFIT ENGINEERING CO",
  "STOVEC INDUSTRIES LIMITED",
  "SUPREME TREON PVT LIMITED",
  "SUZLON ENERGY LIMITED",
  "SUZUKI MOTOR GUJRAT PVT LIMITED",
  "SYNERGY ENGINEERING",
  "TAMBOLI CASTINGS LIMITED",
  "TATA MOTORS LIMITED",
  "TATA PROJECTS LIMITED",
  "TEADIT INDIA",
  "TECHNIP ENERGIES INDIA LIMITED",
  "TECHNITHON TECHNOLOGIES PVT LIMITED",
  "TEGA INDUSTRY LIMITED",
  "TEMA INDIA LIMITED",
  "TEXSPIN BEARINGS LIMITED",
  "THEMAX LIMITED",
  "TIRTH AGRO INDUSTRIES",
  "TOYOTA FORMS INDIA PVT LIMITED",
  "TRUSHAP PRECISION CASTING PVT LIMITED",
  "TUV INDIA PVT LIMITED",
  "TUV NORD",
  "TUV RHEINLAND INDIA PVT LIMITED",
  "TUV SUD SOUTH ASIA PVT LIMITED",
  "UNIMECH INDUSTRIES",
  "VASANT FABRICATORS PVT LIMITED",
  "VEGAZVA ENGINEERING PVT LIMITED",
  "VESTAS WIND TECHNOLOGY",
  "VIVIDH HI FAB PVT LIMITED",
  "VOITH HYDRO",
  "VOLTA ENGINEERING DESIGN PVT LIMITED",
  "VOLTAS BEKO",
  "WALTER PACK INDIA",
  "WELSPUN CORP LIMITED",
  "WINDAR RENEWABLE ENERGY PVT LIMITED",
  "YESHA ENGINEERING",
  "ZEECO INDIA PRIVATE LIMITED",
  "ZION ENGINEERING WORKS"
]

```

---

## File 24 {#file-24}

**📄 Path:** `src\data\newslettersData.js`

```javascript
import newsletterJanMar2025 from '../assets/Newsletter/Newsletter Jan-Mar 2025.pdf'
import newsletterAugust2024 from '../assets/Newsletter/Newsletter August 2024.pdf'
import newsletterJuly2024 from '../assets/Newsletter/Newsletter July 2024.pdf'
import newsletterJune2024 from '../assets/Newsletter/Newsletter June 2024.pdf'

export const newsletters = [
  {
    title: 'DFT Alumni Newsletter - Reunion 2025',
    date: 'January - March 2025',
    description: 'Highlights from the recent alumni meetups, an interview with our distinguished alumni, and updates on the Sangam 2026 preparations. Discover the future of our expanding network.',
    link: newsletterJanMar2025,
  },
  {
    title: 'DFT Alumni Newsletter - Reunion 2024',
    date: 'August 2024',
    description: 'Insights from the monsoon season, highlights of key alumni milestones, and preparations for upcoming networking events. Read about our community’s latest accomplishments.',
    link: newsletterAugust2024,
  },
  {
    title: 'DFT Alumni Newsletter - Reunion 2024',
    date: 'July 2024',
    description: 'A detailed recap of the mid-year alumni meetups, professional growth stories, and announcements on regional chapter expansion plans.',
    link: newsletterJuly2024,
  },
  {
    title: 'DFT Alumni Newsletter - Reunion 2024',
    date: 'June 2024',
    description: 'Launch of the summer initiatives, showcasing prominent alumni entrepreneurs, and memories shared during the local city get-togethers.',
    link: newsletterJune2024,
  }
]

```

---

## File 25 {#file-25}

**📄 Path:** `src\data\SponserData.js`

```javascript
import indotechLogo from '../assets/Sponser_Logo/Indotech_Logo.png'

export const sponsorTiers = [
  // Future Expansion tiers can be added here easily:
  /*
  {
    id: 'diamond',
    name: 'DIAMOND SPONSOR',
    className: 'diamond-tier',
    badgeClass: 'diamond',
    sponsors: []
  },
  {
    id: 'gold',
    name: 'GOLD SPONSOR',
    className: 'gold-tier',
    badgeClass: 'gold',
    sponsors: []
  },
  */
  {
    id: 'silver',
    name: 'SILVER SPONSOR',
    className: 'silver-tier',
    badgeClass: 'silver',
    sponsors: [
      {
        id: 'indotech',
        name: 'Indotech Logo',
        logo: indotechLogo,
        cardClass: 'silver'
      }
    ]
  }
]

```

---

## File 26 {#file-26}

**📄 Path:** `src\data\stateData.js`

```javascript
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

export const STATE_TO_COUNTRY_MAP = {};
INDIAN_STATES.forEach(st => { STATE_TO_COUNTRY_MAP[st.toLowerCase()] = "India"; });
US_STATES.forEach(st => { STATE_TO_COUNTRY_MAP[st.toLowerCase()] = "United States"; });
CANADA_PROVINCES.forEach(st => { STATE_TO_COUNTRY_MAP[st.toLowerCase()] = "Canada"; });
AUSTRALIA_STATES.forEach(st => { STATE_TO_COUNTRY_MAP[st.toLowerCase()] = "Australia"; });
UK_REGIONS.forEach(st => { STATE_TO_COUNTRY_MAP[st.toLowerCase()] = "United Kingdom"; });
UAE_EMIRATES.forEach(st => { STATE_TO_COUNTRY_MAP[st.toLowerCase()] = "United Arab Emirates"; });
GERMANY_STATES.forEach(st => { STATE_TO_COUNTRY_MAP[st.toLowerCase()] = "Germany"; });

export function getCountryByState(stateName) {
  if (!stateName || typeof stateName !== 'string') return '';
  const cleanState = stateName.trim().toLowerCase();
  for (const key in STATE_TO_COUNTRY_MAP) {
    if (cleanState === key || cleanState.includes(key) || key.includes(cleanState)) {
      return STATE_TO_COUNTRY_MAP[key];
    }
  }
  return '';
}

```

---

## File 27 {#file-27}

**📄 Path:** `src\firebase.js`

```javascript
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Check if Firebase keys are provided and not placeholders
export const isFirebaseConfigured =
  import.meta.env.VITE_FIREBASE_API_KEY &&
  import.meta.env.VITE_FIREBASE_API_KEY !== 'YOUR_FIREBASE_API_KEY_HERE'

let app
let auth
let db

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    db = initializeFirestore(app, {
      experimentalAutoDetectLongPolling: true
    })
  } catch (error) {
    console.error('Failed to initialize Firestore with long-polling autodetect, falling back to default:', error)
    if (app) {
      db = getFirestore(app)
    }
  }
}

export { auth, db }

```

---

## File 28 {#file-28}

**📄 Path:** `src\hooks\useVisitorCount.js`

```javascript
import { useEffect, useState } from 'react'
import { doc, setDoc, onSnapshot, increment } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase'

// Global in-memory lock to prevent concurrent component mounts from double-incrementing
let hasIncrementedInSession = typeof window !== 'undefined' && !!sessionStorage.getItem('dft_session_visited')
let isIncrementingLock = false

function recordVisitOnce() {
  if (hasIncrementedInSession || isIncrementingLock || !isFirebaseConfigured || !db) {
    return
  }

  // Acquire lock synchronously before any async call
  isIncrementingLock = true
  hasIncrementedInSession = true
  try {
    sessionStorage.setItem('dft_session_visited', 'true')
  } catch (e) {
    console.warn('sessionStorage error:', e)
  }

  const statDocRef = doc(db, 'stats', 'site_visits')
  setDoc(statDocRef, { count: increment(1) }, { merge: true })
    .catch((err) => {
      console.warn('Failed to increment visitor count:', err)
    })
    .finally(() => {
      isIncrementingLock = false
    })
}

export default function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    if (!isFirebaseConfigured || !db) return

    // Record visit ONCE per browser session globally
    recordVisitOnce()

    const statDocRef = doc(db, 'stats', 'site_visits')

    // Subscribe to real-time updates from Firestore
    const unsubscribe = onSnapshot(
      statDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data()
          if (typeof data.count === 'number') {
            setVisitorCount(data.count)
          }
        }
      },
      (error) => {
        console.warn('Visitor counter subscription warning:', error)
      }
    )

    return () => unsubscribe()
  }, [])

  return visitorCount
}

```

---

## File 29 {#file-29}

**📄 Path:** `src\index.css`

```css
/* ============================================
   DFT ALUMNI — DESIGN SYSTEM
   Based on: design-system.html
   Navy Authority · Signal Red Accent · Diagonal Confidence
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600&display=swap');

/* ── CSS Custom Properties (from design-system.html) ── */
:root {
  /* Brand Colours */
  --navy-deep: #0B1B3F;
  --navy-mid: #132A56;
  --signal-red: #E8302A;
  --red-deep: #B71F1F;
  --paper-white: #FFFFFF;
  --fog-grey: #F3F4F7;
  --slate: #5B6478;
  --line-grey: #D7DBE3;

  /* Typography */
  --font-display: 'Montserrat', sans-serif;
  --font-display-weight: 800;
  --font-body: 'Poppins', sans-serif;

  /* Spacing */
  --section-px: 8vw;

  /* Geometry */
  --diagonal-clip: polygon(0 0, 100% 0, 94% 100%, 0 100%);
  --ribbon-clip: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);

  /* Shadows */
  --shadow-card: 0 6px 18px rgba(11, 27, 63, 0.08);
  --shadow-elevated: 0 12px 36px rgba(11, 27, 63, 0.14);

  /* Transitions */
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* ── Reset ── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 18px;
  overflow-x: hidden;
}

body {
  font-family: var(--font-body);
  background: var(--fog-grey);
  color: var(--navy-deep);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* ── Global Select Dropdown Styling ── */
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none !important;
  padding-right: 36px;
  cursor: pointer;
  transition: border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
}

/* Add this to src/App.css or src/index.css */

html,
body {
  overflow-x: hidden;
  width: 100%;
}

/* Optional: You can also restrict it strictly to the main wrapper */
@media (max-width: 768px) {

  #root,
  main {
    overflow-x: hidden;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

/* ── Scrollbar ── */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--fog-grey);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--signal-red), var(--navy-deep));
  border-radius: 10px;
}

/* ── Layout ── */
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 var(--section-px);
}

.section {
  padding: 80px 0;
}

/* ── Section Header ── */
.section-head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 36px;
}

.section-num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 40px;
  color: var(--line-grey);
  line-height: 1;
}

.section-head h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.6rem, 2.8vw, 2.1rem);
  letter-spacing: 0.5px;
  color: var(--navy-deep);
  position: relative;
  padding-bottom: 12px;
}

.section-head h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--signal-red);
  border-radius: 2px;
}

.section-head h2 span {
  color: var(--signal-red);
}

.section-sub {
  color: var(--slate);
  font-size: 14px;
  margin: 16px 0 36px 0;
  max-width: 640px;
  line-height: 1.7;
}

/* ── Typography Scale (from design-system) ── */
.display-title {
  font-family: var(--font-display);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.5px;
}

.label-text {
  font-family: var(--font-body);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.body-text {
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--slate);
}

.caption-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--slate);
}

/* ── Eyebrow / Tag ── */
.eyebrow {
  color: var(--signal-red);
  font-family: var(--font-body);
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 12px;
  text-transform: uppercase;
}

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  text-transform: uppercase;
  border-radius: 0;
}

.btn-primary {
  background: var(--signal-red);
  color: var(--paper-white);
  clip-path: var(--diagonal-clip);
  padding-right: 42px;
}

.btn-primary:hover {
  background: var(--red-deep);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(232, 48, 42, 0.35);
}

.btn-outline {
  background: transparent;
  color: var(--navy-deep);
  border: 2px solid var(--navy-deep);
}

.btn-outline:hover {
  background: var(--navy-deep);
  color: var(--paper-white);
  transform: translateY(-2px);
}

.btn-navy {
  background: var(--navy-deep);
  color: var(--paper-white);
  clip-path: var(--diagonal-clip);
  padding-right: 42px;
}

.btn-navy:hover {
  background: var(--navy-mid);
  transform: translateY(-2px);
}

/* ── Card ── */
.card {
  background: var(--paper-white);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--shadow-card);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-elevated);
  transform: translateY(-3px);
}

/* ── Diagonal Divider Line ── */
.diagonal-line {
  width: 60px;
  height: 4px;
  background: var(--signal-red);
  margin-bottom: 20px;
  clip-path: var(--diagonal-clip);
}

/* ── Ribbon Banner Component (from design-system) ── */
.ribbon {
  background: var(--navy-deep);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 26px;
  clip-path: var(--ribbon-clip);
  color: var(--paper-white);
}

.ribbon .icon-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--paper-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ribbon .labels .l1 {
  font-size: 12px;
  font-weight: 500;
  color: var(--line-grey);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ribbon .labels .l2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  color: var(--signal-red);
  letter-spacing: 0.3px;
}

/* ── Stat Block Component (from design-system) ── */
.stat-block {
  display: flex;
  width: 100%;
}

.stat-col {
  flex: 1;
  text-align: center;
  padding: 0 16px;
}

.stat-col .stat-num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 52px;
  color: var(--signal-red);
  line-height: 1;
}

.stat-col .stat-lbl {
  font-family: var(--font-body);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 4px;
  color: var(--navy-deep);
  letter-spacing: 0.5px;
}

.stat-col .stat-sub {
  font-size: 12px;
  color: var(--slate);
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  background: var(--line-grey);
  margin: 0 8px;
}

/* ── Waypoint Divider (from design-system) ── */
.waypoint {
  background: var(--navy-deep);
  border-radius: 0;
  padding: 50px 40px;
  color: var(--paper-white);
  text-align: center;
  position: relative;
}

.wp-line {
  position: relative;
  height: 2px;
  background: var(--signal-red);
  width: 60%;
  margin: 0 auto;
}

.wp-node {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 3px solid var(--paper-white);
  background: var(--navy-deep);
}

.wp-node::after {
  content: "";
  position: absolute;
  inset: 5px;
  background: var(--signal-red);
  border-radius: 50%;
}

.wp-dash {
  width: 2px;
  height: 50px;
  margin: 0 auto;
  background-image: linear-gradient(var(--paper-white) 60%, transparent 40%);
  background-size: 2px 12px;
  background-repeat: repeat-y;
  opacity: 0.5;
}

.wp-city {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--signal-red);
  font-size: 28px;
  margin-top: 14px;
  letter-spacing: 2px;
}

.wp-date {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 1px;
  color: var(--paper-white);
  opacity: 0.85;
}

/* ── Ticket / Boarding Pass Component ── */
.ticket {
  border: 2px dashed var(--navy-deep);
  padding: 18px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  background: var(--paper-white);
}

.ticket::before,
.ticket::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background: var(--fog-grey);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.ticket::before {
  left: -10px;
}

.ticket::after {
  right: -10px;
}

/* ── Diagonal Cover Panel ── */
.diagonal-panel {
  background: var(--navy-deep);
  clip-path: polygon(0 0, 100% 0, 78% 100%, 0 100%);
  color: var(--paper-white);
  padding: 32px;
}

/* ── Grid Utilities ── */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }

  .grid-3 {
    grid-template-columns: 1fr;
  }

  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .section {
    padding: 60px 0;
  }

  .section-sub {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .grid-4 {
    grid-template-columns: 1fr;
  }
}

/* ── Masthead repeating-line background ── */
.masthead-bg-lines {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(115deg,
      rgba(255, 255, 255, 0.05) 0px,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px,
      transparent 26px);
  pointer-events: none;
}

/* ── Section alternate bg ── */
.section-white {
  background: var(--paper-white);
}

.section-navy {
  background: var(--navy-deep);
  color: var(--paper-white);
}

.section-fog {
  background: var(--fog-grey);
}

/* ── Animations ── */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-28px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(28px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes countUp {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* ── Scroll-reveal helpers ── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* ── Red accent line ── */
.red-accent-bar {
  display: block;
  width: 50px;
  height: 4px;
  background: var(--signal-red);
  margin-bottom: 16px;
}
```

---

## File 30 {#file-30}

**📄 Path:** `src\main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

```

---

## File 31 {#file-31}

**📄 Path:** `src\pages\About.css`

```css
.about__inner {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* Image */
.about__image-wrap {
  position: sticky;
  top: 110px;
}

.about__image-frame {
  position: relative;
  overflow: hidden;
  border: none;
}

.about__image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.about__image-frame:hover .about__image {
  transform: scale(1.03);
}

/* Red diagonal overlay accent */
.about__image-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--signal-red);
}

/* Est badge — design-system diagonal panel */
.about__badge {
  position: absolute;
  bottom: 24px;
  right: -16px;
  background: var(--navy-deep);
  clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%);
  padding: 14px 20px 14px 28px;
  text-align: center;
  box-shadow: -4px 4px 20px rgba(11, 27, 63, 0.25);
}

.about__badge-year {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 2rem;
  color: var(--signal-red);
  line-height: 1;
}

.about__badge-label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
}


.about__section-head {
  margin-bottom: 24px;
}

.about__para {
  font-size: 0.95rem;
  line-height: 1.85;
  margin-bottom: 14px;
}

/* Checklist */
.about__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  padding-top: 20px;
  border-top: 1px solid var(--line-grey);
}

.about__list-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 0.9rem;
  color: var(--navy-deep);
  font-weight: 500;
}

.about__check {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: var(--signal-red);
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 900px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about__image-wrap {
    position: static;
    max-width: 480px;
    margin: 0 auto;
  }

  .about__image {
    height: 300px;
  }

  .about__badge {
    right: 0;
  }
}
```

---

## File 32 {#file-32}

**📄 Path:** `src\pages\About.jsx`

```jsx
import aboutImg from '../assets/About.avif'
import './About.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

const highlights = [
  'Connecting alumni across India and the world',
  'Organizing annual Sangam reunions and family meets',
  'Mentorship programs for current DFT students',
  'Preserving the legacy and culture of Sir Bhavsinhji Polytechnic',
]

export default function About() {
  return (
    <section className="section section-white about" id="about">
      <div className="container about__inner">

        {/* Image side */}
        <div className="about__image-wrap reveal-left">
          <div className="about__image-frame">
            <ImageWithSkeleton src={aboutImg} alt="DFT Alumni gathering" className="about__image" />
            {/* Diagonal overlay accent */}
            <div className="about__image-accent" />
          </div>
          {/* Est badge — diagonal panel style */}
          <div className="about__badge">
            <div className="about__badge-year">1983</div>
            <div className="about__badge-label">EST.</div>
          </div>
        </div>

        {/* Text side */}
        <div className="about__text reveal-right">

          <div className="section-head about__section-head">
            <h2>About <span>the Association</span></h2>
          </div>

          <p className="about__para body-text">
            The DFT Alumni Family is more than an alumni association, it is a lifelong bond that connects generations of students, alumni, faculty, and industry professionals from the Diploma in Fabrication Technology (DFT), Sir Bhavsinhji Polytechnic Institute, Bhavnagar.
          </p>
          <p className="about__para body-text">
            Built on the values of friendship, learning, and mutual support, our community continues to strengthen the legacy of DFT by bringing alumni together across industries and across the world.
          </p>
          <p className="about__para body-text">
            Our aim is to unite generations of DFTians on a single platform where knowledge, experience, opportunities, and friendships can be shared for the collective growth of our community & to serve society through meaningful social initiatives, community service, and collective efforts that create a positive and lasting impact.
          </p>

          <ul className="about__list">
            {highlights.map((item, i) => (
              <li key={i} className="about__list-item">
                <span className="about__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

```

---

## File 33 {#file-33}

**📄 Path:** `src\pages\Admin.css`

```css
/* ==========================================================================
   DFT ALUMNI — ADMIN DASHBOARD STYLES
   ========================================================================== */

:root {
  --admin-color-dev: #6366f1;
  --admin-color-admin: #ef4444;
  --admin-color-alumni: #64748b;
  --admin-color-success: #10b981;
  --admin-color-warning: #f59e0b;
}

.admin-page {
  padding: 30px 60px;
  background-color: var(--fog-grey);
  min-height: 100vh;
  font-family: var(--font-body);
}

.admin-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Header section --- */
.admin-header {
  margin-bottom: 40px;
}

.admin-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
}

.admin-title-row h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: var(--navy-deep);
  position: relative;
  padding-bottom: 8px;
}

.admin-title-row h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--signal-red);
  border-radius: 2px;
}

.admin-user-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--paper-white);
  padding: 8px 16px;
  border-radius: 50px;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--line-grey);
}

.admin-user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--navy-deep);
  color: var(--paper-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

.admin-user-role-badge {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 3px 8px;
  border-radius: 12px;
}

.admin-user-role-badge.developer {
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--admin-color-dev);
}

.admin-user-role-badge.admin {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--admin-color-admin);
}

/* --- Stats Grid --- */
.admin-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.admin-stat-card {
  background: var(--paper-white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--line-grey);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: var(--transition);
}

.admin-stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-elevated);
}

.admin-stat-icon-wrapper {
  width: 54px;
  height: 54px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.admin-stat-icon-wrapper.blue {
  background-color: rgba(19, 42, 86, 0.1);
  color: var(--navy-mid);
}

.admin-stat-icon-wrapper.red {
  background-color: rgba(232, 48, 42, 0.1);
  color: var(--signal-red);
}

.admin-stat-icon-wrapper.green {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--admin-color-success);
}

.admin-stat-info {
  display: flex;
  flex-direction: column;
}

.admin-stat-num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 28px;
  color: var(--navy-deep);
  line-height: 1.2;
}

.admin-stat-label {
  font-size: 13px;
  color: var(--slate);
}

/* --- Navigation Tabs --- */
.admin-tabs {
  display: flex;
  gap: 8px;
  border-bottom: 2px solid var(--line-grey);
  margin-bottom: 30px;
  overflow-x: auto;
  scrollbar-width: none;
}

.admin-tabs::-webkit-scrollbar {
  display: none;
}

.admin-tab-btn {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  color: var(--slate);
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
  transition: var(--transition);
  white-space: nowrap;
}

.admin-tab-btn:hover {
  color: var(--navy-deep);
}

.admin-tab-btn.active {
  color: var(--signal-red);
}

.admin-tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--signal-red);
  border-radius: 2px;
}

.admin-tab-btn-icon {
  margin-right: 8px;
  vertical-align: -2px;
}

/* --- Controls Row (Filters, Search) --- */
.admin-controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
}

.admin-search-wrapper {
  position: relative;
  flex: 1;
  min-width: 280px;
  max-width: 450px;
}

.admin-search-input {
  width: 100%;
  padding: 12px 16px 12px 42px;
  border-radius: 8px;
  border: 1px solid var(--line-grey);
  background: var(--paper-white);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--navy-deep);
  outline: none;
  transition: var(--transition);
}

.admin-search-input:focus {
  border-color: var(--navy-mid);
  box-shadow: 0 0 0 3px rgba(19, 42, 86, 0.1);
}

.admin-search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--slate);
  font-size: 16px;
}

.admin-filters {
  display: flex;
  gap: 10px;
}

.admin-filter-btn {
  background: var(--paper-white);
  border: 1px solid var(--line-grey);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--slate);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
}

.admin-filter-btn:hover {
  border-color: var(--slate);
  color: var(--navy-deep);
}

.admin-filter-btn.active {
  background: var(--navy-deep);
  border-color: var(--navy-deep);
  color: var(--paper-white);
}

/* --- Table Styles --- */
.admin-table-container {
  background: var(--paper-white);
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--line-grey);
  overflow-x: auto;
  margin-bottom: 30px;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  min-width: 800px;
}

.admin-table th {
  background-color: var(--fog-grey);
  color: var(--navy-deep);
  font-weight: 700;
  font-size: 14px;
  padding: 16px 20px;
  border-bottom: 2px solid var(--line-grey);
}

.admin-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--fog-grey);
  vertical-align: middle;
  font-size: 14px;
  color: var(--navy-deep);
}

.admin-table tbody tr {
  transition: var(--transition);
}

.admin-table tbody tr:hover {
  background-color: rgba(243, 244, 247, 0.5);
}

/* User Info Layout */
.admin-table-user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.admin-table-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--fog-grey);
  color: var(--navy-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  border: 1px solid var(--line-grey);
}

.admin-table-user-details {
  display: flex;
  flex-direction: column;
}

.admin-table-name {
  font-weight: 600;
  color: var(--navy-deep);
}

.admin-table-email {
  font-size: 12px;
  color: var(--slate);
}

/* Badges */
.admin-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 50px;
}

.admin-badge.verified {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--admin-color-success);
}

.admin-badge.pending {
  background-color: rgba(245, 158, 11, 0.1);
  color: var(--admin-color-warning);
}

.admin-badge-icon {
  font-size: 12px;
}

/* Action Buttons */
.admin-btn-verify,
.admin-btn-revoke,
.admin-btn-delete-confirm {
  border: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.admin-btn-verify {
  background-color: var(--admin-color-success);
  color: var(--paper-white);
}

.admin-btn-verify:hover {
  background-color: #0d9488;
  transform: translateY(-1px);
}

.admin-btn-revoke {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--admin-color-admin);
}

.admin-btn-revoke:hover {
  background-color: rgba(239, 68, 68, 0.2);
  transform: translateY(-1px);
}

.admin-btn-delete-confirm {
  background-color: var(--signal-red);
  color: var(--paper-white);
}

.admin-btn-delete-confirm:hover {
  background-color: #bd0000;
  transform: translateY(-1px);
}

/* Select element styling inside table */
.admin-role-select {
  padding: 6px 32px 6px 12px !important;
  border-radius: 6px;
  border: 1px solid var(--line-grey);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--navy-deep);
  background: var(--paper-white);
  outline: none;
  cursor: pointer;
  transition: var(--transition);
}

.admin-role-select:focus {
  border-color: var(--navy-mid);
}

.admin-role-select.developer {
  border-color: var(--admin-color-dev);
  color: var(--admin-color-dev);
}

.admin-role-select.admin {
  border-color: var(--admin-color-admin);
  color: var(--admin-color-admin);
}

.admin-role-select.alumni {
  border-color: var(--slate);
  color: var(--slate);
}

/* --- Job Postings Section --- */
.admin-jobs-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

@media (min-width: 992px) {
  .admin-jobs-layout {
    grid-template-columns: 2fr 3fr;
  }
}

.admin-job-form-card,
.admin-jobs-list-card {
  background: var(--paper-white);
  border-radius: 12px;
  padding: 30px;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--line-grey);
}

.admin-card-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  color: var(--navy-deep);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--line-grey);
  padding-bottom: 12px;
}

.admin-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 576px) {
  .admin-form-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}

.admin-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.admin-form-group label {
  font-size: 13px;
  font-weight: 600;
  color: var(--navy-deep);
}

.admin-form-input,
.admin-form-textarea {
  width: 100%;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid var(--line-grey);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--navy-deep);
  background: var(--paper-white);
  outline: none;
  transition: var(--transition);
}

.admin-form-input:focus,
.admin-form-textarea:focus {
  border-color: var(--navy-mid);
  box-shadow: 0 0 0 3px rgba(19, 42, 86, 0.08);
}

.admin-select-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: max-content;
}

.admin-select-wrap::after {
  content: '';
  position: absolute;
  right: 12px;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%) rotate(0deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
  z-index: 3;
  transition: transform 0.25s ease, background-image 0.25s ease;
}

.admin-select-wrap:has(select:enabled:focus)::after,
.admin-select-wrap:has(select:enabled:active)::after {
  transform: translateY(-50%) rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%23e8302a'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
}

.admin-select-wrap:has(select:disabled)::after {
  transform: translateY(-50%) rotate(0deg) !important;
  opacity: 0.5 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E") !important;
}

.admin-form-textarea {
  resize: vertical;
  min-height: 100px;
}

.admin-btn-primary {
  background: linear-gradient(135deg, var(--signal-red), var(--red-deep));
  color: var(--paper-white);
  border: none;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.admin-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(232, 48, 42, 0.3);
}

.admin-btn-primary:disabled {
  background: var(--line-grey);
  color: var(--slate);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Job Listings */
.admin-jobs-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 8px;
}

.admin-job-item {
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  transition: var(--transition);
}

.admin-job-item:hover {
  border-color: var(--navy-mid);
  box-shadow: var(--shadow-card);
}

.admin-job-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.admin-job-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy-deep);
  margin: 0;
}

.admin-job-company {
  font-weight: 600;
  color: var(--signal-red);
  font-size: 14px;
}

.admin-job-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 12px;
  color: var(--slate);
}

.admin-job-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.admin-job-desc {
  font-size: 13px;
  color: var(--navy-mid);
  margin: 8px 0 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.admin-job-actions {
  display: flex;
  align-items: flex-start;
}

.admin-btn-delete-job {
  background: none;
  border: none;
  color: var(--admin-color-admin);
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  font-size: 16px;
}

.admin-btn-delete-job:hover {
  background-color: rgba(239, 68, 68, 0.1);
  transform: scale(1.1);
}

.admin-no-jobs {
  text-align: center;
  color: var(--slate);
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.admin-no-jobs-icon {
  font-size: 48px;
  color: var(--line-grey);
}

/* Loading & Toast States */
.admin-loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 20px;
}

.admin-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--line-grey);
  border-top: 4px solid var(--signal-red);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.admin-toast-message {
  position: fixed;
  bottom: 24px;
  right: 24px;
  left: auto;
  padding: 14px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--navy-deep);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  z-index: 2000;
  max-width: min(380px, calc(100vw - 32px));
  border-left: 4px solid transparent;
  animation: toastLifecycle 4.5s ease-in-out forwards;
}

@media (max-width: 600px) {
  .admin-toast-message {
    bottom: 16px;
    right: 16px;
    left: 16px;
    max-width: none;
  }
}

.admin-toast-message span {
  flex: 1;
  line-height: 1.4;
}

.admin-toast-message__close {
  background: none;
  border: none;
  color: inherit;
  opacity: 0.6;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.admin-toast-message__close:hover {
  opacity: 1;
}

.admin-toast-message.success {
  border-left-color: #2ecc71;
  color: #6fe3a1;
}

.admin-toast-message.error {
  border-left-color: var(--signal-red);
  color: #ff8a80;
}

@keyframes toastLifecycle {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }

  9% {
    opacity: 1;
    transform: translateX(0);
  }

  92% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(40px);
  }
}

/* Access Denied */
.admin-denied-page {
  padding: 150px 0 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--fog-grey);
  font-family: var(--font-body);
}

.admin-denied-card {
  background: var(--paper-white);
  border-radius: 16px;
  padding: 50px 40px;
  box-shadow: var(--shadow-elevated);
  max-width: 500px;
  text-align: center;
  border: 1px solid var(--line-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.admin-denied-icon {
  font-size: 72px;
  color: var(--signal-red);
  margin-bottom: 10px;
}

.admin-denied-card h2 {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--navy-deep);
  font-size: 26px;
}

.admin-denied-card p {
  color: var(--slate);
  font-size: 15px;
  line-height: 1.6;
}

/* Animations */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==========================================================================
   USER PROFILE MODAL
   ========================================================================== */
.admin-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 27, 63, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  animation: modalFadeIn 0.3s ease;
  overflow-y: auto;
  padding: 40px 20px;
}

.admin-modal-container {
  background: var(--paper-white);
  border-radius: 16px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--line-grey);
  animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.admin-modal-header {
  padding: 24px;
  background: var(--navy-deep);
  color: var(--paper-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-modal-header h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  margin: 0;
}

.admin-modal-close-btn {
  background: transparent;
  border: none;
  color: var(--paper-white);
  font-size: 24px;
  cursor: pointer;
  opacity: 0.8;
  transition: var(--transition);
}

.admin-modal-close-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}

.admin-modal-body {
  padding: 30px;
  overflow-y: auto;
  flex-grow: 1;
}

.admin-modal-section {
  margin-bottom: 30px;
}

.admin-modal-section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  color: var(--navy-deep);
  margin-bottom: 16px;
  border-bottom: 1px solid var(--line-grey);
  padding-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.admin-modal-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 600px) {
  .admin-modal-grid-2 {
    grid-template-columns: 1fr;
  }
}

.admin-modal-info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.admin-modal-info-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--slate);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.admin-modal-info-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy-deep);
  word-break: break-word;
}

.admin-modal-user-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--fog-grey);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.admin-modal-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--navy-deep);
  color: var(--paper-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 800;
  flex-shrink: 0;
}

.admin-modal-user-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.admin-modal-user-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--navy-deep);
  margin: 0;
}

.admin-modal-user-email {
  font-size: 14px;
  color: var(--slate);
}

.admin-modal-footer {
  padding: 20px 24px;
  background: var(--fog-grey);
  border-top: 1px solid var(--line-grey);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.admin-modal-badge-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.admin-modal-badge-tag {
  background: rgba(19, 42, 86, 0.08);
  color: var(--navy-deep);
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
}

.admin-btn-view {
  background-color: transparent;
  border: 1px solid var(--navy-mid);
  color: var(--navy-mid);
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}

.admin-btn-view:hover {
  background-color: var(--navy-mid);
  color: var(--paper-white);
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modalSlideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ==========================================================================
   DELETION CONFIRMATION MODAL
   ========================================================================== */
.admin-delete-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 27, 63, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  animation: modalFadeIn 0.2s ease;
}

.admin-delete-modal-card {
  background: var(--paper-white);
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--line-grey);
  padding: 24px;
  animation: modalSlideUp 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.admin-delete-modal-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  color: var(--navy-deep);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.admin-delete-modal-desc {
  color: var(--slate);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.admin-delete-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
```

---

## File 34 {#file-34}

**📄 Path:** `src\pages\Admin.jsx`

```jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaUserShield,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaBriefcase,
  FaTrash,
  FaExclamationTriangle,
  FaClock,
  FaSearch,
  FaArrowLeft,
  FaPlus,
  FaMapMarkerAlt,
  FaCopy,
  FaEye,
  FaFilePdf
} from 'react-icons/fa'
import { db } from '../firebase'
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore'
import useVisitorCount from '../hooks/useVisitorCount'
import './Admin.css'

const formatDateFormatted = (dateStr) => {
  if (!dateStr) return 'N/A'
  try {
    const cleanStr = String(dateStr).trim()
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    // Match YYYY-MM-DD
    const match = cleanStr.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (match) {
      const year = parseInt(match[1], 10)
      const monthIndex = parseInt(match[2], 10) - 1
      const day = parseInt(match[3], 10)
      if (monthIndex >= 0 && monthIndex < 12) {
        return `${day} ${months[monthIndex]} ${year}`
      }
    }

    // Match DD-MM-YYYY or DD/MM/YYYY
    const matchAlt = cleanStr.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/)
    if (matchAlt) {
      const day = parseInt(matchAlt[1], 10)
      const monthIndex = parseInt(matchAlt[2], 10) - 1
      const year = parseInt(matchAlt[3], 10)
      if (monthIndex >= 0 && monthIndex < 12) {
        return `${day} ${months[monthIndex]} ${year}`
      }
    }

    // Standard ISO parse fallback
    const d = new Date(cleanStr)
    if (!isNaN(d.getTime())) {
      return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    }
  } catch (e) {
    console.warn("Date formatting error:", e)
  }
  return dateStr
}

export default function Admin({ user, onUpdateUser }) {
  const navigate = useNavigate()
  const visitorCount = useVisitorCount()
  const [activeTab, setActiveTab] = useState('verification')
  const [loading, setLoading] = useState(true)
  const [usersList, setUsersList] = useState([])
  const [jobsList, setJobsList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all') // all, pending, verified
  const [toast, setToast] = useState({ show: false, message: '', type: '' })
  const [permissionError, setPermissionError] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [deletingJobId, setDeletingJobId] = useState(null)

  // Job Posting Form State
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    experience: '',
    skills: '',
    applyUrl: ''
  })
  const [submittingJob, setSubmittingJob] = useState(false)

  // Setup toast notification helper
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' })
    }, 4500)
  }

  // Load dashboard data directly from Firestore
  const loadData = async () => {
    setLoading(true)
    setPermissionError(false)
    try {
      // Fetch users from Firestore collection 'users'
      const usersSnap = await getDocs(collection(db, 'users'))
      const fetchedUsers = []
      usersSnap.forEach((doc) => {
        const data = doc.data()
        fetchedUsers.push({
          uid: doc.id,
          ...data,
          name: data.name || (data.firstName ? `${data.firstName} ${data.lastName || ''}`.trim() : 'Unnamed User')
        })
      })
      setUsersList(fetchedUsers)
      console.log("Admin Loaded Firestore Users:", fetchedUsers.length, fetchedUsers)

      // Fetch jobs from Firestore collection 'jobs'
      const jobsSnap = await getDocs(collection(db, 'jobs'))
      const fetchedJobs = []
      jobsSnap.forEach((doc) => {
        fetchedJobs.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setJobsList(fetchedJobs)
    } catch (err) {
      console.error("Firestore loading error:", err)
      if (err.code === 'permission-denied' || String(err).includes('permission')) {
        setPermissionError(true)
        showToast("Database Permission Denied. Check Firestore security rules.", "error")
      } else {
        showToast("Failed to fetch database records.", "error")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!user || (user.account_type !== 'admin' && user.account_type !== 'developer')) {
      setLoading(false)
      return
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid])

  // --- Account Verification Handlers ---
  const handleToggleVerification = async (uid, currentStatus) => {
    const newStatus = !currentStatus
    try {
      await updateDoc(doc(db, 'users', uid), {
        verification_status: newStatus
      })

      // Sync if the admin/dev just modified their own status
      if (uid === user.uid) {
        onUpdateUser({ verification_status: newStatus })
      }

      setUsersList(prev => prev.map(u => u.uid === uid ? { ...u, verification_status: newStatus } : u))
      if (selectedUser && selectedUser.uid === uid) {
        setSelectedUser(prev => ({ ...prev, verification_status: newStatus }))
      }
      showToast(newStatus ? "Account verified successfully!" : "Verification revoked.")
    } catch (err) {
      console.error("Error updating user verification:", err)
      showToast("Error updating verification status in database.", "error")
    }
  }

  // --- Access Management Handlers (Developer Only) ---
  const handleRoleChange = async (uid, newRole) => {
    try {
      await updateDoc(doc(db, 'users', uid), {
        account_type: newRole
      })

      // Sync if the logged-in dev modifies their own role
      if (uid === user.uid) {
        onUpdateUser({ account_type: newRole })
      }

      setUsersList(prev => prev.map(u => u.uid === uid ? { ...u, account_type: newRole } : u))
      showToast(`User role updated to ${newRole.toUpperCase()}.`)
    } catch (err) {
      console.error("Error updating user role in database:", err)
      showToast("Error updating user role in database.", "error")
    }
  }

  // --- Job Posting Handlers ---
  const handleJobFormChange = (e) => {
    const { name, value } = e.target
    setJobForm(prev => ({ ...prev, [name]: value }))
  }

  const handlePostJob = async (e) => {
    e.preventDefault()
    if (!jobForm.title.trim() || !jobForm.company.trim() || !jobForm.location.trim()) {
      showToast("Please fill in Job Title, Company, and Location.", "error")
      return
    }

    setSubmittingJob(true)
    try {
      const newJob = {
        title: jobForm.title.trim(),
        company: jobForm.company.trim(),
        location: jobForm.location.trim(),
        description: jobForm.description.trim(),
        experience: jobForm.experience.trim() || 'Not Specified',
        skills: jobForm.skills.trim() || 'Not Specified',
        applyUrl: jobForm.applyUrl.trim() || '#',
        postedAt: new Date().toISOString()
      }

      const docRef = await addDoc(collection(db, 'jobs'), newJob)
      setJobsList(prev => [{ id: docRef.id, ...newJob }, ...prev])

      showToast("Job opportunity posted successfully!")
      setJobForm({
        title: '',
        company: '',
        location: '',
        description: '',
        experience: '',
        skills: '',
        applyUrl: ''
      })
    } catch (err) {
      console.error("Error posting job to Firestore:", err)
      showToast("Error saving job vacancy in database.", "error")
    } finally {
      setSubmittingJob(false)
    }
  }

  const handleConfirmDeleteJob = async () => {
    if (!deletingJobId) return

    try {
      await deleteDoc(doc(db, 'jobs', deletingJobId))
      setJobsList(prev => prev.filter(j => j.id !== deletingJobId))
      showToast("Job vacancy deleted successfully!")
    } catch (err) {
      console.error("Error deleting job posting:", err)
      showToast("Error deleting job vacancy.", "error")
    } finally {
      setDeletingJobId(null)
    }
  }

  const copyRulesToClipboard = () => {
    const rules = `rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    function isLoggedIn() {\n      return request.auth != null;\n    }\n    function getUserData() {\n      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data;\n    }\n    function isAdminOrDev() {\n      return isLoggedIn() && (getUserData().account_type == 'admin' || getUserData().account_type == 'developer');\n    }\n    match /users/{userId} {\n      allow read, write: if isLoggedIn() && request.auth.uid == userId;\n      allow read, write: if isAdminOrDev();\n    }\n    match /jobs/{jobId} {\n      allow read: if true;\n      allow write: if isAdminOrDev();\n    }\n  }\n}`;
    navigator.clipboard.writeText(rules)
    showToast("Firestore rules copied to clipboard!")
  }

  // Auth/Role Guard Rendering
  if (!user || (user.account_type !== 'admin' && user.account_type !== 'developer')) {
    return (
      <div className="admin-denied-page">
        <div className="admin-denied-card">
          <FaExclamationTriangle className="admin-denied-icon" />
          <h2>Access Restricted</h2>
          <p>
            This portal is strictly reserved for DFT website Administrators and Developers.
            If you believe this is an error, please contact support or re-authenticate.
          </p>
          <button className="admin-btn-primary" onClick={() => navigate('/')}>
            <FaArrowLeft style={{ marginRight: '8px' }} /> Return to Home
          </button>
        </div>
      </div>
    )
  }

  // Loading indicator
  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-loading-container">
          <div className="admin-spinner"></div>
          <p style={{ color: 'var(--navy-deep)', fontWeight: '600' }}>Loading Dashboard Data...</p>
        </div>
      </div>
    )
  }

  // Filtering and Searching Users
  const filteredUsers = usersList.filter(u => {
    const query = searchQuery.toLowerCase().trim()
    const nameMatch = String(u.name || '').toLowerCase().includes(query)
    const emailMatch = String(u.email || '').toLowerCase().includes(query)
    const batchMatch = String(u.batch || u.passoutYear || '').toLowerCase().includes(query)
    const genderMatch = String(u.gender || '').toLowerCase().includes(query)

    // Check degrees array safely or fallback to degree string comparison
    const degreeMatch = Array.isArray(u.degrees)
      ? u.degrees.some(d => {
        if (d && typeof d === 'object') {
          return String(d.degree || '').toLowerCase().includes(query) ||
            String(d.domain || '').toLowerCase().includes(query);
        }
        return String(d || '').toLowerCase().includes(query);
      })
      : String(u.degree || '').toLowerCase().includes(query)

    const searchMatch = !query || nameMatch || emailMatch || batchMatch || degreeMatch || genderMatch

    let statusMatch = true
    if (filterStatus === 'pending') statusMatch = !u.verification_status
    if (filterStatus === 'verified') statusMatch = u.verification_status

    return searchMatch && statusMatch
  })

  // Access Management tab: same filtered set, ordered developer -> admin -> alumni
  const ROLE_ORDER = { developer: 0, admin: 1, alumni: 2 }
  const accessManagementUsers = [...filteredUsers].sort((a, b) => {
    const roleA = ROLE_ORDER[a.account_type] ?? ROLE_ORDER.alumni
    const roleB = ROLE_ORDER[b.account_type] ?? ROLE_ORDER.alumni
    return roleA - roleB
  })

  // Count helper statistics
  const totalUsers = usersList.length
  const pendingCount = usersList.filter(u => !u.verification_status).length
  const verifiedCount = usersList.filter(u => u.verification_status).length
  const activeJobsCount = jobsList.length

  return (
    <div className="admin-page">
      <div className="admin-container">

        {/* Toast notification banner */}
        {toast.show && (
          <div className={`admin-toast-message ${toast.type}`} role={toast.type === 'error' ? 'alert' : 'status'}>
            {toast.type === 'error' ? <FaTimesCircle /> : <FaCheckCircle />}
            <span>{toast.message}</span>
            <button
              type="button"
              className="admin-toast-message__close"
              onClick={() => setToast({ show: false, message: '', type: '' })}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}

        {/* Dashboard Title & Meta */}
        <div className="admin-header">
          <div style={{ marginBottom: '20px' }}>
            <button
              type="button"
              className="admin-btn-view"
              style={{ padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line-grey)' }}
              onClick={() => navigate('/')}
            >
              <FaArrowLeft /> Return to Website
            </button>
          </div>
          <div className="admin-title-row">
            <h1>Admin Control Panel</h1>
            <div className="admin-user-pill">
              <span className="admin-user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy-deep)' }}>
                {user.name}
              </span>
              <span className={`admin-user-role-badge ${user.account_type}`}>
                {user.account_type}
              </span>
            </div>
          </div>
          <p style={{ color: 'var(--slate)', fontSize: '15px', marginTop: '-15px', maxWidth: '700px' }}>
            Manage DFT Alumni user verifications, post job opportunities for the network, and config account access policies.
          </p>
        </div>

        {/* Database Permission Issue Card */}
        {permissionError && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.05)',
            borderLeft: '4px solid var(--admin-color-admin)',
            padding: '24px',
            borderRadius: '8px',
            marginBottom: '30px',
            color: 'var(--navy-deep)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--signal-red)', fontWeight: '700' }}>
              <FaExclamationTriangle /> Database Permission Denied (Missing Firestore Rules)
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '16px', lineHeight: '1.6' }}>
              Firestore rejected the load request because your current security rules restrict administrative queries on collections.
              To authorize admins to verify alumni profiles and post jobs, configure the following rules in your **Firebase Console &gt; Firestore Database &gt; Rules** tab:
            </p>

            <pre style={{
              background: '#0B1B3F',
              color: '#F3F4F7',
              padding: '16px',
              borderRadius: '6px',
              fontSize: '12px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              marginBottom: '16px',
              lineHeight: '1.5'
            }}>
              {`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isLoggedIn() {
      return request.auth != null;
    }
    function getUserData() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data;
    }
    function isAdminOrDev() {
      return isLoggedIn() && (getUserData().account_type == 'admin' || getUserData().account_type == 'developer');
    }

    match /users/{userId} {
      allow read, write: if isLoggedIn() && request.auth.uid == userId;
      allow read, write: if isAdminOrDev();
    }

    match /jobs/{jobId} {
      allow read: if true;
      allow write: if isAdminOrDev();
    }
  }
}`}
            </pre>

            <button
              className="admin-btn-primary"
              style={{ marginTop: 0, padding: '8px 16px', fontSize: '13px' }}
              onClick={copyRulesToClipboard}
            >
              <FaCopy style={{ marginRight: '6px' }} /> Copy Rules to Clipboard
            </button>
          </div>
        )}

        {/* Stats Summary Cards */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-icon-wrapper blue">
              <FaUsers />
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-num">{totalUsers}</span>
              <span className="admin-stat-label">Total Registered</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon-wrapper red">
              <FaClock />
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-num">{pendingCount}</span>
              <span className="admin-stat-label">Pending Verification</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon-wrapper green">
              <FaBriefcase />
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-num">{activeJobsCount}</span>
              <span className="admin-stat-label">Job Opportunities</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon-wrapper" style={{ background: 'rgba(155, 89, 182, 0.12)', color: '#9b59b6' }}>
              <FaEye />
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-num">{visitorCount.toLocaleString()}</span>
              <span className="admin-stat-label">Total Site Visits</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab-btn ${activeTab === 'verification' ? 'active' : ''}`}
            onClick={() => setActiveTab('verification')}
          >
            <FaCheckCircle className="admin-tab-btn-icon" /> Account Verification
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            <FaBriefcase className="admin-tab-btn-icon" /> Job Postings
          </button>

          {/* Strictly Gated: Access Management is Developer Only */}
          {user.account_type === 'developer' && (
            <button
              className={`admin-tab-btn ${activeTab === 'access' ? 'active' : ''}`}
              onClick={() => setActiveTab('access')}
            >
              <FaUserShield className="admin-tab-btn-icon" /> Access Management
            </button>
          )}
        </div>

        {/* --- TAB CONTENT: ACCOUNT VERIFICATION --- */}
        {activeTab === 'verification' && (
          <div className="admin-tab-content">

            {/* Search & Filter Controls */}
            <div className="admin-controls-row">
              <div className="admin-search-wrapper">
                <FaSearch className="admin-search-icon" />
                <input
                  type="text"
                  placeholder="Search by name, email, degree or batch..."
                  className="admin-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="admin-filters">
                <button
                  className={`admin-filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('all')}
                >
                  All ({totalUsers})
                </button>
                <button
                  className={`admin-filter-btn ${filterStatus === 'pending' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('pending')}
                >
                  Pending ({pendingCount})
                </button>
                <button
                  className={`admin-filter-btn ${filterStatus === 'verified' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('verified')}
                >
                  Verified ({verifiedCount})
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Alumni User</th>
                    <th>Contact Number</th>
                    <th>Batch</th>
                    <th>Registration Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((item) => (
                      <tr key={item.uid}>
                        <td>
                          <div className="admin-table-user-info">
                            <div className="admin-table-avatar">
                              {(item.name || 'U').charAt(0).toUpperCase()}
                            </div>
                            <div className="admin-table-user-details">
                              <span className="admin-table-name">{item.name || 'Unnamed User'}</span>
                              <span className="admin-table-email">{item.email}</span>
                            </div>
                          </div>
                        </td>
                        <td>{item.phone || 'N/A'}</td>
                        <td>{item.batch || item.passoutYear || 'N/A'}</td>
                        <td style={{ fontSize: '13px', color: 'var(--navy-mid)' }}>{formatDateFormatted(item.createdAt)}</td>
                        <td>
                          <span className={`admin-badge ${item.verification_status ? 'verified' : 'pending'}`}>
                            {item.verification_status ? (
                              <><FaCheckCircle className="admin-badge-icon" /> Verified</>
                            ) : (
                              <><FaClock className="admin-badge-icon" /> Pending</>
                            )}
                          </span>
                        </td>
                        <td style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'nowrap' }}>
                          <button
                            type="button"
                            className="admin-btn-view"
                            onClick={() => setSelectedUser(item)}
                          >
                            View Profile
                          </button>
                          {item.verification_status ? (
                            <button
                              type="button"
                              className="admin-btn-revoke"
                              onClick={() => handleToggleVerification(item.uid, true)}
                            >
                              Revoke Approval
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="admin-btn-verify"
                              onClick={() => handleToggleVerification(item.uid, false)}
                            >
                              Verify Account
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '40px 0', color: 'var(--slate)' }}>
                        No user matching filters found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* --- TAB CONTENT: JOB POSTINGS --- */}
        {activeTab === 'jobs' && (
          <div className="admin-tab-content">
            <div className="admin-jobs-layout">

              {/* Job Posting Form */}
              <div className="admin-job-form-card">
                <h3 className="admin-card-title">
                  <FaPlus /> Post a Job Vacancy
                </h3>

                <form onSubmit={handlePostJob}>
                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label htmlFor="job-title">Job Title *</label>
                      <input
                        type="text"
                        id="job-title"
                        name="title"
                        className="admin-form-input"
                        placeholder="e.g. Lead Textile Merchandiser"
                        value={jobForm.title}
                        onChange={handleJobFormChange}
                        required
                      />
                    </div>

                    <div className="admin-form-grid-2">
                      <div className="admin-form-group">
                        <label htmlFor="job-company">Company *</label>
                        <input
                          type="text"
                          id="job-company"
                          name="company"
                          className="admin-form-input"
                          placeholder="e.g. Reliance Retail"
                          value={jobForm.company}
                          onChange={handleJobFormChange}
                          required
                        />
                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="job-location">Location *</label>
                        <input
                          type="text"
                          id="job-location"
                          name="location"
                          className="admin-form-input"
                          placeholder="e.g. Mumbai, India"
                          value={jobForm.location}
                          onChange={handleJobFormChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="admin-form-grid-2">
                      <div className="admin-form-group">
                        <label htmlFor="job-exp">Experience Required</label>
                        <input
                          type="text"
                          id="job-exp"
                          name="experience"
                          className="admin-form-input"
                          placeholder="e.g. 3-5 years"
                          value={jobForm.experience}
                          onChange={handleJobFormChange}
                        />
                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="job-skills">Key Skills (comma separated)</label>
                        <input
                          type="text"
                          id="job-skills"
                          name="skills"
                          className="admin-form-input"
                          placeholder="e.g. Merchandising, Sourcing, Excel"
                          value={jobForm.skills}
                          onChange={handleJobFormChange}
                        />
                      </div>
                    </div>

                    <div className="admin-form-group">
                      <label htmlFor="job-desc">Job Description</label>
                      <textarea
                        id="job-desc"
                        name="description"
                        className="admin-form-textarea"
                        placeholder="Enter key details about the role, duties, salary details..."
                        value={jobForm.description}
                        onChange={handleJobFormChange}
                      ></textarea>
                    </div>

                    <div className="admin-form-group">
                      <label htmlFor="job-apply">Apply Link or Email Address</label>
                      <input
                        type="text"
                        id="job-apply"
                        name="applyUrl"
                        className="admin-form-input"
                        placeholder="e.g. careers@reliance.com or http://company.com/apply"
                        value={jobForm.applyUrl}
                        onChange={handleJobFormChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="admin-btn-primary"
                      disabled={submittingJob}
                    >
                      {submittingJob ? "Posting Opportunity..." : "Publish Job Post"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Active Jobs List */}
              <div className="admin-jobs-list-card">
                <h3 className="admin-card-title">
                  <FaBriefcase /> Active Job Board ({activeJobsCount})
                </h3>

                <div className="admin-jobs-list">
                  {jobsList.length > 0 ? (
                    jobsList.map((job) => (
                      <div className="admin-job-item" key={job.id}>
                        <div className="admin-job-details">
                          <h4 className="admin-job-title">{job.title}</h4>
                          <span className="admin-job-company">{job.company}</span>
                          <div className="admin-job-meta">
                            <span><FaMapMarkerAlt /> {job.location}</span>
                            <span>Experience: {job.experience}</span>
                          </div>
                          <p className="admin-job-desc">{job.description || "No description provided."}</p>
                          <div style={{ marginTop: '8px', fontSize: '12px' }}>
                            <strong style={{ color: 'var(--navy-deep)' }}>Key Skills:</strong>
                            <span style={{ marginLeft: '6px', color: 'var(--slate)' }}>{job.skills}</span>
                          </div>
                          {job.applyUrl && job.applyUrl !== '#' && (
                            <a
                              href={job.applyUrl.startsWith('http') || job.applyUrl.startsWith('mailto') ? job.applyUrl : `http://${job.applyUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                marginTop: '12px',
                                fontSize: '13px',
                                fontWeight: '600',
                                color: 'var(--signal-red)',
                                textDecoration: 'underline'
                              }}
                            >
                              Application Link
                            </a>
                          )}
                        </div>
                        <div className="admin-job-actions">
                          <button
                            className="admin-btn-delete-job"
                            onClick={() => setDeletingJobId(job.id)}
                            title="Delete vacancy post"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="admin-no-jobs">
                      <FaBriefcase className="admin-no-jobs-icon" />
                      <p>No job postings currently listed.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- TAB CONTENT: ACCESS MANAGEMENT (Dev-Only) --- */}
        {activeTab === 'access' && user.account_type === 'developer' && (
          <div className="admin-tab-content">
            <div className="admin-controls-row">
              <div className="admin-search-wrapper" style={{ maxWidth: '100%' }}>
                <FaSearch className="admin-search-icon" />
                <input
                  type="text"
                  placeholder="Search users to modify database access roles..."
                  className="admin-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Current Permission Role</th>
                    <th>Change Access Level</th>
                    <th>User ID</th>
                  </tr>
                </thead>
                <tbody>
                  {accessManagementUsers.length > 0 ? (
                    accessManagementUsers.map((item) => (
                      <tr key={item.uid}>
                        <td>
                          <div className="admin-table-user-info">
                            <div className="admin-table-avatar">
                              {(item.name || 'U').charAt(0).toUpperCase()}
                            </div>
                            <div className="admin-table-user-details">
                              <span className="admin-table-name">{item.name || 'Unnamed User'}</span>
                              <span className="admin-table-email">{item.email}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`admin-user-role-badge ${item.account_type || 'alumni'}`}>
                            {item.account_type || 'alumni'}
                          </span>
                        </td>
                        <td>
                          <div className="admin-select-wrap">
                            <select
                              value={item.account_type || 'alumni'}
                              onChange={(e) => handleRoleChange(item.uid, e.target.value)}
                              className={`admin-role-select ${item.account_type || 'alumni'}`}
                              disabled={String(item.email || '').toLowerCase() === 'patelmeghmahesh2701@gmail.com'}
                            >
                              <option value="alumni">Alumni (Normal User)</option>
                              <option value="admin">Admin</option>
                              <option value="developer">Developer</option>
                            </select>
                          </div>
                        </td>
                        <td style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--slate)' }}>
                          {item.uid}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '40px 0', color: 'var(--slate)' }}>
                        No user match found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div style={{
              backgroundColor: 'rgba(99, 102, 241, 0.05)',
              borderLeft: '4px solid var(--admin-color-dev)',
              padding: '16px',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'var(--navy-mid)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '20px'
            }}>
              <FaUserShield style={{ fontSize: '20px', color: 'var(--admin-color-dev)', flexShrink: 0 }} />
              <div>
                <strong>Developer Notice:</strong> Modifying account permissions changes security rules globally.
                Setting a user's role to <strong>Admin</strong> grants them authorization to verify user accounts and post/delete vacancies.
                Setting a user to <strong>Developer</strong> additionally grants access to this Access Management panel.
              </div>
            </div>
          </div>
        )}

      </div>

      {/* User Profile Details Modal */}
      {selectedUser && (
        <div className="admin-modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="admin-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Alumni Profile Details</h2>
              <button className="admin-modal-close-btn" onClick={() => setSelectedUser(null)}>&times;</button>
            </div>

            <div className="admin-modal-body">
              {/* Profile Avatar Banner */}
              <div className="admin-modal-user-card">
                <div className="admin-modal-avatar">
                  {(selectedUser.name || 'U').charAt(0).toUpperCase()}
                </div>
                <div className="admin-modal-user-meta">
                  <h3 className="admin-modal-user-name">{selectedUser.name || 'Unnamed User'}</h3>
                  <span className="admin-modal-user-email">{selectedUser.email}</span>
                  <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span className={`admin-badge ${selectedUser.verification_status ? 'verified' : 'pending'}`}>
                      {selectedUser.verification_status ? "Verified Account" : "Pending Verification"}
                    </span>
                    <span className={`admin-user-role-badge ${selectedUser.account_type || 'alumni'}`}>
                      {selectedUser.account_type || 'alumni'}
                    </span>
                  </div>
                  <div style={{ marginTop: '6px', fontSize: '0.8rem', color: 'var(--slate)', fontWeight: '500' }}>
                    Registered: {formatDateFormatted(selectedUser.createdAt)}
                  </div>
                </div>
              </div>

              {/* General Info */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Personal & Contact Info</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Full Name</span>
                    <span className="admin-modal-info-value">{selectedUser.name || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">First / Middle / Last Name</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.firstName, selectedUser.middleName, selectedUser.lastName].filter(Boolean).join(' ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Email Address</span>
                    <span className="admin-modal-info-value">{selectedUser.email || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Gender</span>
                    <span className="admin-modal-info-value">{selectedUser.gender || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Phone Number</span>
                    <span className="admin-modal-info-value">{selectedUser.phone || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Secondary Phone</span>
                    <span className="admin-modal-info-value">{selectedUser.secondaryPhone || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">WhatsApp Number</span>
                    <span className="admin-modal-info-value">{selectedUser.whatsapp || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Date of Birth</span>
                    <span className="admin-modal-info-value">{formatDateFormatted(selectedUser.dob)}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Date of Marriage / Anniversary</span>
                    <span className="admin-modal-info-value">{formatDateFormatted(selectedUser.dom)}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Blood Group</span>
                    <span className="admin-modal-info-value">{selectedUser.bloodGroup || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Location</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.city, selectedUser.state, selectedUser.country].filter(Boolean).join(', ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Directory Search Consent</span>
                    <span className="admin-modal-info-value">
                      {[
                        selectedUser.consentEmail && 'Email ID',
                        selectedUser.consentPhone && 'Mobile Number',
                        selectedUser.consentWhatsapp && 'WhatsApp Number'
                      ].filter(Boolean).join(', ') || 'No Consent Given'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Academic Details */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Academic Details</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2' }}>
                    <span className="admin-modal-info-label">Degrees Completed</span>
                    <div className="admin-modal-info-value" style={{ marginTop: '6px' }}>
                      {Array.isArray(selectedUser.degrees) && selectedUser.degrees.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.degrees
                            .map(d => d && typeof d === 'object' ? `${d.degree || ''} ${d.domain ? `(${d.domain})` : ''}`.trim() : String(d))
                            .filter(Boolean)
                            .map((degText, idx) => (
                              <li key={idx} style={{ marginBottom: '4px', fontWeight: '600' }}>{degText}</li>
                            ))}
                        </ul>
                      ) : (
                        <span>{selectedUser.degree || 'N/A'}</span>
                      )}
                    </div>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Admission Year</span>
                    <span className="admin-modal-info-value">{selectedUser.admissionYear || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Passout / Graduation Year</span>
                    <span className="admin-modal-info-value">{selectedUser.passoutYear || selectedUser.batch || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Course Completion Status</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.diplomaNotCompleted ? 'Diploma / Course Not Completed' : 'Completed / Graduated'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Student Type / Classification</span>
                    <span className="admin-modal-info-value">{selectedUser.userType || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Professional Details</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Job Title / Designation</span>
                    <span className="admin-modal-info-value">{selectedUser.jobTitle || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Company / Employer</span>
                    <span className="admin-modal-info-value">{selectedUser.company || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Industry / Profession</span>
                    <span className="admin-modal-info-value">{selectedUser.profession || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Department</span>
                    <span className="admin-modal-info-value">{selectedUser.department || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Division</span>
                    <span className="admin-modal-info-value">{selectedUser.division || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Working Since</span>
                    <span className="admin-modal-info-value">{formatDateFormatted(selectedUser.workingSince)}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Total Work Experience</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.workExperience ? `${selectedUser.workExperience} ${parseInt(selectedUser.workExperience, 10) === 1 ? 'Year' : 'Years'}` : 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Last Promotion Designation</span>
                    <span className="admin-modal-info-value">{selectedUser.lastPromotionDesignation || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Date of Last Promotion</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.lastPromotionMonth, selectedUser.lastPromotionYear].filter(Boolean).join(' ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">LinkedIn Profile</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.linkedin ? (
                        <a href={selectedUser.linkedin.startsWith('http') ? selectedUser.linkedin : `https://${selectedUser.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy-mid)', textDecoration: 'underline' }}>
                          {selectedUser.linkedin}
                        </a>
                      ) : 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Resume / CV (PDF)</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.cvBase64 ? (
                        <a
                          href={selectedUser.cvBase64}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={selectedUser.cvFileName || `${selectedUser.name || 'Alumni'}_CV.pdf`}
                          style={{ color: '#dc2626', fontWeight: '600', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        >
                          <FaFilePdf style={{ color: '#dc2626' }} /> Download / View PDF CV
                        </a>
                      ) : 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Company Location</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.companyCity, selectedUser.companyState, selectedUser.companyCountry].filter(Boolean).join(', ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Company Website</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.companyWebsite ? (
                        <a href={selectedUser.companyWebsite.startsWith('http') ? selectedUser.companyWebsite : `http://${selectedUser.companyWebsite}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy-mid)', textDecoration: 'underline' }}>
                          {selectedUser.companyWebsite}
                        </a>
                      ) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications, Awards & Skills */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Certifications & Skills</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Areas of Certification</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.certifications) && selectedUser.certifications.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.certifications.map((c, i) => {
                            const certText = c && typeof c === 'object'
                              ? `${c.area || ''} ${c.detail ? `(${c.detail})` : ''}`.trim()
                              : String(c);
                            return <li key={i} style={{ marginBottom: '4px', fontWeight: '600' }}>{certText}</li>;
                          })}
                        </ul>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No certifications listed.</span>
                      )}
                    </div>
                  </div>

                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Products & Services / Skills</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.productServices) && selectedUser.productServices.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.productServices.map((p, i) => (
                            <li key={i} style={{ marginBottom: '4px', fontWeight: '600' }}>{p}</li>
                          ))}
                        </ul>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No skills listed.</span>
                      )}
                    </div>
                  </div>

                  {selectedUser.otherProductServices && (
                    <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                      <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Details of Other Products & Services</span>
                      <div className="admin-modal-info-value" style={{ fontSize: '13px', color: 'var(--navy-deep)', background: 'var(--fog-grey)', padding: '10px 14px', borderRadius: '6px' }}>
                        {selectedUser.otherProductServices}
                      </div>
                    </div>
                  )}

                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Awards & Achievements</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.awards) && selectedUser.awards.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.awards.map((a, i) => (
                            <li key={i} style={{ marginBottom: '4px', fontWeight: '600' }}>{a}</li>
                          ))}
                        </ul>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No achievements listed.</span>
                      )}
                    </div>
                  </div>

                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Interest / Hobbies</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.hobbies) && selectedUser.hobbies.length > 0 ? (
                        <div className="admin-modal-badge-list">
                          {selectedUser.hobbies.map((hobby, i) => (
                            <span key={i} className="admin-modal-badge-tag">
                              {hobby === 'Others' && selectedUser.otherHobbies ? `Others (${selectedUser.otherHobbies})` : hobby}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No hobbies listed.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-modal-footer">
              <button
                type="button"
                className="admin-btn-primary"
                style={{ background: 'var(--slate)', border: 'none', marginTop: 0 }}
                onClick={() => setSelectedUser(null)}
              >
                Close Profile
              </button>
              {selectedUser.verification_status ? (
                <button
                  type="button"
                  className="admin-btn-revoke"
                  style={{ padding: '10px 20px' }}
                  onClick={() => handleToggleVerification(selectedUser.uid, true)}
                >
                  Revoke Approval
                </button>
              ) : (
                <button
                  type="button"
                  className="admin-btn-verify"
                  style={{ padding: '10px 20px' }}
                  onClick={() => handleToggleVerification(selectedUser.uid, false)}
                >
                  Verify Account
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Deletion Confirmation Modal */}
      {deletingJobId && (
        <div className="admin-delete-modal-overlay" onClick={() => setDeletingJobId(null)}>
          <div className="admin-delete-modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="admin-delete-modal-title">
              <FaTrash style={{ color: 'var(--signal-red)' }} /> Confirm Deletion
            </h3>
            <p className="admin-delete-modal-desc">
              Are you sure you want to delete this job vacancy from the Job Board? This action is permanent and cannot be undone.
            </p>
            <div className="admin-delete-modal-footer">
              <button
                type="button"
                className="admin-btn-primary"
                style={{ background: 'var(--slate)', border: 'none', margin: 0, padding: '10px 18px' }}
                onClick={() => setDeletingJobId(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="admin-btn-delete-confirm"
                style={{ margin: 0, padding: '10px 18px' }}
                onClick={handleConfirmDeleteJob}
              >
                Delete Opportunity
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
```

---

## File 35 {#file-35}

**📄 Path:** `src\pages\AlumniSpotlight.css`

```css
.spotlight__intro {
  max-width: 900px;
  margin-bottom: 48px;
  color: var(--slate);
  font-size: 1.05rem;
  line-height: 1.7;
}

/* Grid Layout */
.spotlight__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Card */
.spotlight__card {
  background: var(--paper-white);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  height: 100%;
}

.spotlight__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-elevated);
}

/* Image section */
.spotlight__img-wrap {
  position: relative;
  height: 350px;
  overflow: hidden;
  background: var(--fog-grey);
}

.spotlight__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.spotlight__card:hover .spotlight__img {
  transform: scale(1.04);
}

/* Award Tag styling - premium ribbon look */
.spotlight__award-tag {
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--signal-red);
  color: var(--paper-white);
  padding: 8px 16px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
  clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.spotlight__award-icon {
  font-size: 0.85rem;
}

/* Card Info */
.spotlight__info {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.spotlight__meta {
  margin-bottom: 8px;
}

.spotlight__batch {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--slate);
  letter-spacing: 0.5px;
}

.spotlight__name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--navy-deep);
  margin-bottom: 4px;
  letter-spacing: 0.2px;
}

.spotlight__role {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy-mid);
  line-height: 1.4;
  margin-bottom: 12px;
}

.spotlight__divider {
  width: 40px;
  height: 3px;
  background: var(--signal-red);
  margin-bottom: 14px;
}

.spotlight__desc {
  font-size: 0.9rem;
  color: var(--slate);
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

/* Card Footer */
.spotlight__footer {
  margin-top: auto;
  border-top: 1px solid var(--line-grey);
  padding-top: 16px;
}

.spotlight__social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy-deep);
  transition: color 0.2s ease;
}

.spotlight__social svg {
  color: #0077b5;
  /* LinkedIn brand blue */
  font-size: 1.1rem;
  transition: transform 0.2s ease;
}

.spotlight__social:hover {
  color: var(--signal-red);
}

.spotlight__social:hover svg {
  transform: scale(1.1);
}

/* Responsive grid */
@media (max-width: 992px) {
  .spotlight__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 650px) {
  .spotlight__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .spotlight__intro {
    font-size: 1rem;
  }
}
```

---

## File 36 {#file-36}

**📄 Path:** `src\pages\AlumniSpotlight.jsx`

```jsx
import { FaLinkedin, FaAward } from 'react-icons/fa'
import './AlumniSpotlight.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

import prakashVaghImg from '../assets/Alumni_Spotlight/Prakash_Vagh.png'
import snehaImg from '../assets/spotlight_sneha.png'
import vikramImg from '../assets/spotlight_vikram.png'

const spotlightAlumni = [
  {
    name: 'Prakash Vagh',
    role: 'Assitant General Manager, Head QA/QC Welding, INOXCVA',
    batch: 'Batch of 2006',
    award: '',
    desc: 'Pioneered advanced fabrication processes in heavy manufacturing and established a state-of-the-art facility employing over 300+ technicians and engineers.',
    img: prakashVaghImg,
    linkedin: 'https://www.linkedin.com/in/prakash-vagh-531096100/'
  },
  {
    name: 'Dr. Sneha Patel',
    role: 'Senior Materials Scientist, National Research Laboratory',
    batch: 'Batch of 2008',
    award: '',
    desc: 'Holds multiple patents in stress-resistant material design and published international research papers on high-strength alloy weld integrity.',
    img: snehaImg,
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Vikram Shah',
    role: 'Director of Community Projects, Sewa Foundation',
    batch: 'Batch of 1995',
    award: '',
    desc: 'Dedicated to community upliftment, spearheading technical skill development workshops and vocational training programs that empowered 2,000+ rural youth.',
    img: vikramImg,
    linkedin: 'https://linkedin.com'
  }
]

export default function AlumniSpotlight() {
  return (
    <section className="section section-fog spotlight" id="spotlight">
      <div className="container">

        {/* Section Header */}
        <div className="section-head reveal">
          <h2>Alumni <span>Spotlight</span></h2>
        </div>

        {/* Description intro */}
        <p className="spotlight__intro reveal body-text">
          Alumni Spotlight (Awards & Recognition) celebrates the outstanding achievements of DFT graduates who have made a significant impact in industry, entrepreneurship, research, and society. This section honors their professional milestones, leadership, innovations, and community contributions, inspiring current students and fellow alumni to strive for excellence. Every success story reflects the strength, values, and legacy of the DFT Alumni Family.
        </p>

        {/* Cards Grid */}
        <div className="spotlight__grid">
          {spotlightAlumni.map((alumnus, i) => (
            <div
              key={i}
              className="spotlight__card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image wrap with award ribbon */}
              <div className="spotlight__img-wrap">
                <ImageWithSkeleton src={alumnus.img} alt={alumnus.name} className="spotlight__img" />
                <div className="spotlight__award-tag">
                  <FaAward className="spotlight__award-icon" />
                  <span>{alumnus.award}</span>
                </div>
              </div>

              {/* Card Content Info */}
              <div className="spotlight__info">
                <div className="spotlight__meta">
                  <span className="spotlight__batch">{alumnus.batch}</span>
                </div>
                <h3 className="spotlight__name">{alumnus.name}</h3>
                <p className="spotlight__role">{alumnus.role}</p>
                <div className="spotlight__divider" />
                <p className="spotlight__desc">{alumnus.desc}</p>

                <div className="spotlight__footer">
                  {alumnus.linkedin && (
                    <a
                      href={alumnus.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spotlight__social"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin /> Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

```

---

## File 37 {#file-37}

**📄 Path:** `src\pages\Committee.css`

```css
.committee__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 8px;
}

/* Card */
.committee__card {
  background: var(--paper-white);
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.committee__card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-elevated);
}

/* Image */
.committee__img-wrap {
  position: relative;
  height: 240px;
  overflow: hidden;
  background: var(--fog-grey);
}

.committee__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease;
}

.committee__card:hover .committee__img {
  transform: scale(1.05);
}

/* Role Text */
.committee__role-text {
  display: block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: var(--signal-red);
  text-transform: uppercase;
  margin-top: 2px;
}

/* Info */
.committee__info {
  padding: 18px 20px 22px;
  border-top: 3px solid var(--signal-red);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.committee__name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  color: var(--navy-deep);
  letter-spacing: 0.3px;
}

.committee__batch {
  display: block;
  margin-top: 2px;
  margin-bottom: 12px;
}

/* Socials */
.committee__socials {
  display: flex;
  gap: 8px;
}

.committee__social {
  width: 32px;
  height: 32px;
  background: var(--fog-grey);
  border: 1px solid var(--line-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--slate);
  font-size: 0.85rem;
  transition: var(--transition);
  border-radius: 0;
}

.committee__social:hover {
  background: var(--signal-red);
  color: var(--paper-white);
  border-color: var(--signal-red);
}

/* Subsections */
.committee__subsection {
  margin-top: 50px;
}

.committee__subhead {
  margin-bottom: 24px;
}

.committee__subtitle {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--navy-deep);
  margin-bottom: 6px;
  letter-spacing: 0.3px;
}

.committee__subtitle span {
  color: var(--signal-red);
}

.committee__subtext {
  font-size: 0.95rem;
  color: var(--slate);
  max-width: 800px;
}

.committee .section-sub {
  max-width: 100%;
  font-size: 16px;
}

/* 5 members: 3+2 layout */
.committee__grid > :nth-child(4),
.committee__grid > :nth-child(5) {
  grid-column: auto;
}

@media (max-width: 900px) {
  .committee__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .committee__grid {
    grid-template-columns: 1fr;
  }
}

```

---

## File 38 {#file-38}

**📄 Path:** `src\pages\Committee.jsx`

```jsx
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Committee.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

import { sangamCoreTeam, members } from '../data/committeeData'

export default function Committee() {
  return (
    <section className="section section-white committee" id="committee">
      <div className="container">

        {/* Section Header */}
        <div className="section-head reveal">
          <h2>Our <span>Committee</span></h2>
        </div>
        <p className="section-sub reveal">
          The Committee Members of the DFT Alumni Family are passionate volunteers who dedicate their time, expertise, and leadership to strengthening the alumni community. Together, they serve as the backbone of the DFT Alumni Family, fostering lifelong connections and a spirit of giving back.
          he dedicated committee members below have been the heart of the DFT Alumni Family since its inception. Their selfless efforts continue to strengthen relationships, inspire new initiatives, and shape the legacy of our growing alumni community.
        </p>

        {/* Subsection: Executive Committee */}
        <div className="committee__subsection reveal">
          <div className="committee__subhead">
            <h3 className="committee__subtitle">Executive <span>Committee</span></h3>
            <p className="committee__subtext">
              Meet the passionate alumni who lead our association with integrity, vision, and commitment to the DFT community.
            </p>
          </div>
          <div className="committee__grid">
            {members.map((member, i) => (
              <div
                key={i}
                className="committee__card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Photo */}
                <div className="committee__img-wrap">
                  <ImageWithSkeleton src={member.img} alt={member.name} className="committee__img" />
                </div>

                {/* Info */}
                <div className="committee__info">
                  <h3 className="committee__name">{member.name}</h3>
                  <span className="committee__role-text">{member.role}</span>
                  <span className="committee__batch caption-text">{member.batch}</span>
                  <div className="committee__socials">
                    <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    {member.gmail && (
                      <a href={`mailto:${member.gmail}`} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="Email">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection: Core Team for Sangam 2026 */}
        <div className="committee__subsection reveal">
          <div className="committee__subhead">
            <h3 className="committee__subtitle">Core Team for <span>Sangam 2026</span></h3>
            <p className="committee__subtext">
              The dedicated task force driving the planning, coordination, and execution of our grand homecoming reunion.
            </p>
          </div>
          <div className="committee__grid">
            {sangamCoreTeam.map((member, i) => (
              <div
                key={i}
                className="committee__card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Photo */}
                <div className="committee__img-wrap">
                  <ImageWithSkeleton src={member.img} alt={member.name} className="committee__img" />
                </div>

                {/* Info */}
                <div className="committee__info">
                  <h3 className="committee__name">{member.name}</h3>
                  <span className="committee__role-text">{member.role}</span>
                  <span className="committee__batch caption-text">{member.batch}</span>
                  <div className="committee__socials">
                    <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    {member.gmail && (
                      <a href={`mailto:${member.gmail}`} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="Email">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


```

---

## File 39 {#file-39}

**📄 Path:** `src\pages\Contact.css`

```css
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.7fr;
  gap: 48px;
  align-items: start;
  margin-top: 8px;
}

/* Info */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact__info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: var(--paper-white);
  border: 1px solid var(--line-grey);
  border-left: 4px solid var(--signal-red);
  box-shadow: var(--shadow-card);
}

.contact__info-icon {
  width: 36px;
  height: 36px;
  background: var(--navy-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--paper-white);
  font-size: 0.95rem;
  flex-shrink: 0;
}

.contact__info-icon--flip {
  transform: scaleX(-1);
}

.contact__info-label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--signal-red);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.contact__info-value {
  font-size: 0.9rem;
  color: var(--navy-deep);
  font-weight: 500;
  line-height: 1.5;
}

.contact__socials {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.contact__info-link {
  text-decoration: none;
  cursor: pointer;
}

.contact__info-link:hover {
  color: var(--signal-red);
  text-decoration: underline;
}

.contact__social {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--fog-grey);
  border: 1px solid var(--line-grey);
  color: var(--navy-deep);
  font-size: 0.9rem;
  transition: var(--transition);
}

.contact__social:hover {
  background: var(--signal-red);
  border-color: var(--signal-red);
  color: var(--paper-white);
}

/* Ticket CTA (from design-system) */
.contact__ticket {
  margin-top: 4px;
}

.contact__ticket-plane {
  font-size: 1.5rem;
  color: var(--signal-red);
  flex-shrink: 0;
}

.contact__ticket-txt {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  color: var(--navy-deep);
  line-height: 1.2;
}

.contact__ticket-red {
  color: var(--signal-red);
}

/* Form wrap */
.contact__form-wrap {
  background: var(--paper-white);
  border: 1px solid var(--line-grey);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

/* Ribbon override */
.contact__form-ribbon {
  width: 100%;
  border-radius: 0;
}

/* Form */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px 30px 32px;
  width: 100%;
  box-sizing: border-box;
}

.contact__form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  width: 100%;
  box-sizing: border-box;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-width: 0;
  /* min-width:0 lets a flex/grid child shrink below
     its content size instead of forcing the row to
     overflow the container */
  box-sizing: border-box;
}

.contact__field label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--slate);
}

.contact__field input,
.contact__field textarea {
  width: 100%;
  box-sizing: border-box;
  /* without border-box, the field's padding + border
     add on top of its 100% width and get clipped by
     .contact__form-wrap's overflow:hidden, which is
     what makes the right edge look cut off/overlapping */
  background: var(--fog-grey);
  border: 1px solid var(--line-grey);
  border-radius: 0;
  padding: 12px 14px;
  color: var(--navy-deep);
  font-size: 0.9rem;
  font-family: var(--font-body);
  font-weight: 500;
  transition: var(--transition);
  outline: none;
  resize: none;
}

.contact__field input::placeholder,
.contact__field textarea::placeholder {
  color: var(--slate);
  font-weight: 400;
}

.contact__field input:focus,
.contact__field textarea:focus {
  border-color: var(--navy-deep);
  background: var(--paper-white);
  border-left-color: var(--signal-red);
  border-left-width: 3px;
}

/* Submit button */
.contact__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 44px 14px 24px;
  background: var(--signal-red);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: none;
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
  cursor: pointer;
  transition: var(--transition);
  width: fit-content;
}

.contact__btn:hover {
  background: var(--red-deep);
}

.contact__btn.loading {
  opacity: 0.8;
  cursor: not-allowed;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.contact__spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

/* Success state */
.contact__success {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 40px 30px;
  min-height: 280px;
}

.contact__success-icon {
  font-size: 2.5rem;
  color: var(--signal-red);
}

.contact__success h3 {
  font-size: 1.8rem;
  color: var(--navy-deep);
}

.contact__success p {
  max-width: 340px;
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }

  .contact__btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 540px) {
  .contact__form {
    padding: 20px;
  }

  .contact__form-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
```

---

## File 40 {#file-40}

**📄 Path:** `src\pages\Contact.jsx`

```jsx
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaCheckCircle, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { IoShareSocial } from "react-icons/io5"
import './Contact.css'

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: 'ADDRESS', value: 'Sir Bhavsinhji Polytechnic Institute, Waghawadi Road, Bhavnagar, Gujarat — 364001' },
  { icon: <FaPhone />, label: 'PHONE', value: 'To Be Added!', flip: true },
  { icon: <FaEnvelope />, label: 'EMAIL', value: 'dftalumnifamily@gmail.com', href: 'mailto:dftalumnifamily@gmail.com' },
]

const socialLinks = [
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/dftalumnifamily' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/dftalumnifamily/' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/dft-alumni/posts/?feedView=all' },
  { icon: <FaYoutube />, label: 'YouTube', href: 'https://www.youtube.com/@DFTAlumniFamily' },
]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', batch: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Using import.meta.env to get environment variables in Vite
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not set in the .env file.");
      setLoading(false);
      setError("Email service is not configured. Please try again later.");
      return;
    }

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    )
      .then((result) => {
        console.log(result.text)
        setLoading(false)
        setSubmitted(true)
      }, (err) => {
        console.error(err.text)
        setLoading(false)
        setError('An error occurred while sending the message. Please try again later.')
      })
  }

  return (
    <section className="section section-white contact" id="contact">
      <div className="container">

        {/* Section header */}
        <div className="section-head reveal">
          <h2>Get In <span>Touch</span></h2>
        </div>
        <p className="section-sub reveal">
          Whether you want to join our community, reconnect with batchmates, or contribute —
          we&apos;d love to hear from you.
        </p>

        <div className="contact__grid">

          {/* Info column */}
          <div className="contact__info">
            {contactInfo.map((info, i) => (
              <div key={i} className="contact__info-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={`contact__info-icon${info.flip ? ' contact__info-icon--flip' : ''}`}>{info.icon}</div>
                <div>
                  <div className="contact__info-label">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="contact__info-value contact__info-link">{info.value}</a>
                  ) : (
                    <div className="contact__info-value">{info.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Social media handles */}
            <div className="contact__info-item contact__socials-item reveal" style={{ transitionDelay: `${contactInfo.length * 0.1}s` }}>
              <div className="contact__info-icon">
                <IoShareSocial />
              </div>
              <div>
                <div className="contact__info-label">FOLLOW US</div>
                <div className="contact__socials">
                  {socialLinks.map((s) => (

                    <a key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket CTA component from design-system */}
            <div className="ticket contact__ticket reveal" style={{ transitionDelay: '0.35s' }}>
              <div className="contact__ticket-plane">✈</div>
              <div>
                <div className="contact__ticket-txt">JOIN YOUR</div>
                <div className="contact__ticket-txt contact__ticket-red">ALUMNI NETWORK!</div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact__form-wrap reveal-right">
            {/* Ribbon at top */}
            <div className="ribbon contact__form-ribbon">
              <div className="icon-circle">
                <FaEnvelope size={20} color="#0B1B3F" />
              </div>
              <div className="labels">
                <div className="l1">SEND US A</div>
                <div className="l2">MESSAGE</div>
              </div>
            </div>

            {submitted ? (
              <div className="contact__success">
                <FaCheckCircle className="contact__success-icon" />
                <h3 className="display-title">Message Sent!</h3>
                <p className="body-text">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                <button
                  className="contact__btn"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', batch: '', subject: '', message: '' }) }}
                >
                  SEND ANOTHER <FaArrowRight />
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
                {error && <div className="contact__error" style={{ color: 'var(--signal-red)', marginBottom: '1rem', fontWeight: 'bold' }}>{error}</div>}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="c-name">Full Name *</label>
                    <input id="c-name" type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="c-email">Email Address *</label>
                    <input id="c-email" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="c-batch">Batch Year</label>
                    <input id="c-batch" type="text" name="batch" placeholder="e.g. 2005" value={form.batch} onChange={handleChange} />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="c-subject">Subject *</label>
                    <input id="c-subject" type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="c-message">Message *</label>
                  <textarea id="c-message" name="message" rows={5} placeholder="Write your message here..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className={`contact__btn ${loading ? 'loading' : ''}`} disabled={loading}>
                  {loading ? <span className="contact__spinner" /> : <><FaArrowRight /> SEND MESSAGE</>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

```

---

## File 41 {#file-41}

**📄 Path:** `src\pages\DftAlumniMeet2023.css`

```css
/* ============================================
   DFT ALUMNI MEET 2023 GALLERY — STYLING
   ============================================ */

.meet-page {
  background: var(--fog-grey);
  color: var(--navy-deep);
  min-height: 100vh;
}

/* ── Hero Banner ── */
.meet-hero {
  position: relative;
  background: var(--navy-deep);
  color: var(--paper-white);
  padding: 140px 0 80px;
  overflow: hidden;
}

.meet-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(115deg,
      rgba(255, 255, 255, 0.03) 0px,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px,
      transparent 26px);
  pointer-events: none;
}

.meet-hero__inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.back-link-gallerypage {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  color: var(--paper-white) !important;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 24px;
  transition: var(--transition);
}

.back-link-gallerypage:hover {
  color: var(--signal-red) !important;
  transform: translateX(-4px);
}

.meet-hero__eyebrow {
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: var(--signal-red);
  margin-bottom: 12px;
}

.meet-hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  line-height: 1;
  margin-bottom: 18px;
  letter-spacing: -0.5px;
}

.meet-hero__title span {
  color: var(--signal-red);
}

.meet-hero__sub {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
}

/* Meta Details Bar */
.meet-hero__meta {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 24px;
  margin-top: 24px;
  width: 100%;
}

.meet-meta-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.meet-meta-icon {
  font-size: 1.4rem;
  color: var(--signal-red);
}

.meet-meta-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

.meet-meta-val {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--paper-white);
}

/* ── Gallery Info Bar ── */
.meet-gallery__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--line-grey);
  padding-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.meet-gallery__count {
  font-size: 0.95rem;
  color: var(--slate);
}

.meet-gallery__count strong {
  color: var(--navy-deep);
}

.meet-gallery__res-badge {
  background: var(--navy-deep);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 1px;
  padding: 6px 14px;
  border-bottom: 3px solid var(--signal-red);
}

/* ── Gallery Grid ── */
.meet-gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 992px) {
  .meet-gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .meet-gallery__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.meet-gallery__item {
  background: var(--paper-white);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.meet-gallery__item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-elevated);
}

.meet-gallery__img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3/2;
  overflow: hidden;
}

.meet-gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.meet-gallery__img--loaded {
  opacity: 1;
}

.meet-gallery__item:hover .meet-gallery__img {
  transform: scale(1.08);
}

/* ── Hover Overlay ── */
.meet-gallery__overlay {
  position: absolute;
  inset: 0;
  background: rgba(11, 27, 63, 0.82);
  opacity: 0;
  transition: opacity 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.meet-gallery__item:hover .meet-gallery__overlay {
  opacity: 1;
}

.meet-gallery__zoom-icon {
  color: var(--paper-white);
  background: var(--signal-red);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(232, 48, 42, 0.35);
  transform: scale(0.7);
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.meet-gallery__item:hover .meet-gallery__zoom-icon {
  transform: scale(1);
}

.meet-gallery__zoom-icon:hover {
  background: var(--red-deep);
}

/* ── Lightbox Caption Styles ── */
.lightbox__text-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.lightbox__res-tag {
  background: var(--navy-mid);
  color: var(--signal-red);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-left: 2px solid var(--signal-red);
  margin-left: auto;
  align-self: center;
}

.lightbox__img-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__skeleton {
  position: absolute;
  width: 320px;
  height: 240px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 75%);
  background-color: rgba(255, 255, 255, 0.06);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 8px;
}

.lightbox__img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.lightbox__img--loaded {
  opacity: 1;
}

/* ── Skeleton Shimmer Animation ── */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

.meet-gallery__skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 75%);
  background-color: rgba(255, 255, 255, 0.06);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

/* ── Lightbox Modal Structure ── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(11, 27, 63, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInUp 0.2s ease;
}

.lightbox__content {
  max-width: 80vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background: var(--signal-red);
  border: none;
  color: var(--paper-white);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.lightbox__close:hover {
  background: var(--red-deep);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: var(--navy-mid);
  border: 2px solid rgba(255, 255, 255, 0.15);
  color: var(--paper-white);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.lightbox__nav:hover {
  background: var(--signal-red);
  border-color: var(--signal-red);
}

.lightbox__nav--prev {
  left: 20px;
}

.lightbox__nav--next {
  right: 20px;
}
```

---

## File 42 {#file-42}

**📄 Path:** `src\pages\DftAlumniMeet2023.jsx`

```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './DftAlumniMeet2023.css'

// Dynamically import all images starting with 'img' inside Meet2023 folder
const imageModules = import.meta.glob('../assets/Meet2023/img*.{png,jpg,jpeg,webp,avif}', { eager: true })

const items = Object.entries(imageModules)
  .map(([path, module]) => {
    const filename = path.split('/').pop()
    const match = filename.match(/^img(\d+)/)
    const num = match ? parseInt(match[1], 10) : 999
    return {
      src: module.default,
      num,
      title: `Alumni Meet Photo ${num}`
    }
  })
  .sort((a, b) => a.num - b.num)
  .map(item => ({
    src: item.src,
    title: item.title,
    category: 'REUNION',
    resolution: '5568x3712'
  }))

// GalleryCard component to handle skeleton loaders and load states
function GalleryCard({ item, index, onClick }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="meet-gallery__item reveal"
      style={{ transitionDelay: `${index * 0.05}s` }}
      onClick={onClick}
    >
      <div className="meet-gallery__img-wrap">
        {!loaded && <div className="meet-gallery__skeleton" />}
        <img
          src={item.src}
          alt={item.title}
          className={`meet-gallery__img ${loaded ? 'meet-gallery__img--loaded' : ''}`}
          onLoad={() => setLoaded(true)}
        />
        <div className="meet-gallery__overlay">
          <svg className="meet-gallery__zoom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// LightboxImage component to handle skeleton loading in lightbox
function LightboxImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [src])

  return (
    <div className="lightbox__img-container">
      {!loaded && <div className="lightbox__skeleton" />}
      <img
        src={src}
        alt={alt}
        className={`lightbox__img ${loaded ? 'lightbox__img--loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function DftAlumniMeet2023() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className="meet-page">
      {/* Hero header area */}
      <section className="meet-hero">
        <div className="container meet-hero__inner">
          <Link to="/" className="back-link-gallerypage">
            <FaArrowLeft /> BACK TO HOME
          </Link>
          <span className="meet-hero__eyebrow">GALLERY EXCLUSIVE</span>
          <h1 className="meet-hero__title">
            DFT Alumni <span>Meet 2023</span>
          </h1>
          <p className="meet-hero__sub">
            Relive the memories and professional milestones from our historic 2023 gathering.
          </p>

          {/* Quick Details Bar */}
          <div className="meet-hero__meta">
            <div className="meet-meta-item">
              <FaCalendarAlt className="meet-meta-icon" />
              <div>
                <div className="meet-meta-label">DATE</div>
                <div className="meet-meta-val">18 June 2023</div>
              </div>
            </div>
            <div className="meet-meta-item">
              <FaMapMarkerAlt className="meet-meta-icon" />
              <div>
                <div className="meet-meta-label">LOCATION</div>
                <div className="meet-meta-val">Ahmedabad, Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery grid section */}
      <section className="section meet-gallery">
        <div className="container">
          <div className="meet-gallery__info">
            <p className="meet-gallery__count">Showing <strong>{items.length}</strong> Images</p>
          </div>

          <div className="meet-gallery__grid">
            {items.map((item, i) => (
              <GalleryCard
                key={i}
                item={item}
                index={i}
                onClick={() => setLightbox(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <FaTimes />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i - 1 + items.length) % items.length)
            }}
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <LightboxImage src={items[lightbox].src} alt={items[lightbox].title} />
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i + 1) % items.length)
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

```

---

## File 43 {#file-43}

**📄 Path:** `src\pages\Events.css`

```css
/* ============================================
   EVENTS — ALUMNI GATHERINGS TIMELINE
   ============================================ */

/* ── Timeline connector ── */
.events__timeline {
  position: relative;
  height: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

.events__timeline-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--line-grey),
    var(--signal-red),
    var(--line-grey)
  );
  transform: translateY(-50%);
}

.events__timeline-node {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--paper-white);
  border: 3px solid var(--signal-red);
  z-index: 1;
  transition: all 0.3s ease;
}

.events__timeline-node::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--signal-red);
}

/* ── Card grid ── */
.events__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* ── Card ── */
.events__card {
  background: var(--paper-white);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  display: flex;
  flex-direction: column;
}

.events__card:hover {
  box-shadow: var(--shadow-elevated);
  transform: translateY(-6px);
}

/* ── Upcoming card glow ── */
.events__card--upcoming {
  border: 2px solid rgba(232, 48, 42, 0.2);
}

.events__card--upcoming::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(
    135deg,
    rgba(232, 48, 42, 0.08),
    transparent 50%
  );
  z-index: 0;
  pointer-events: none;
}

/* ── Card image ── */
.events__card-img-wrap {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.events__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.events__card:hover .events__card-img {
  transform: scale(1.08);
}

.events__card-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(11, 27, 63, 0.7) 100%
  );
  pointer-events: none;
}

/* ── Year badge ── */
.events__card-year {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--navy-deep);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  padding: 6px 16px;
  letter-spacing: 1px;
  z-index: 1;
}

/* ── Upcoming badge ── */
.events__card-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--signal-red);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  padding: 6px 14px;
  border-radius: 4px;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(232, 48, 42, 0.35);
}

/* ── Card body ── */
.events__card-body {
  padding: 24px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;
  flex: 1;
}

/* ── Meta row ── */
.events__card-meta {
  display: flex;
  align-items: center;
  gap: 20px;
}

.events__card-city,
.events__card-date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--slate);
}

.events__card-city svg,
.events__card-date svg {
  color: var(--signal-red);
  font-size: 0.7rem;
}

/* ── Title ── */
.events__card-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.35rem;
  color: var(--navy-deep);
  letter-spacing: 0.3px;
  line-height: 1.2;
}

/* ── Description ── */
.events__card-desc {
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: var(--slate);
  line-height: 1.7;
}

/* ── Footer CTA ── */
.events__card-footer {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--line-grey);
}

.events__card-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--navy-deep);
  cursor: pointer;
  transition: all 0.3s ease;
}

.events__card-cta:hover {
  color: var(--signal-red);
  gap: 12px;
}

.events__card-cta--upcoming {
  color: var(--signal-red);
  animation: ctaPulse 2s ease-in-out infinite;
}

@keyframes ctaPulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.6; }
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .events__grid {
    grid-template-columns: 1fr 1fr;
  }

  .events__timeline {
    display: none;
  }
}

@media (max-width: 768px) {
  .events__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .events__card-img-wrap {
    height: 200px;
  }

  .events__card-body {
    padding: 18px 18px 16px;
  }

  .events__card-title {
    font-size: 1.15rem;
  }
}

```

---

## File 44 {#file-44}

**📄 Path:** `src\pages\Events.jsx`

```jsx
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import eventAhmedabad from '../assets/Meet2023/img79.dcf15f8c3bf07d813ed0.avif'
import eventSurat from '../assets/Sangaath2024/AJY_6380.avif'
import eventVadodara from '../assets/event-vadodara.avif'
import './Events.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

const events = [
  {
    image: eventAhmedabad,
    name: 'DFT Alumni Meet 2023',
    city: 'Ahmedabad',
    year: '2023',
    description:
      'The inaugural DFT Alumni Meet brought together graduates from across Gujarat for a day of networking, nostalgia, and forging new connections in the vibrant city of Ahmedabad.',
    status: 'past',
    link: '/dftalumnimeet2023',
  },
  {
    image: eventSurat,
    name: 'Sangaath 2024',
    city: 'Surat',
    year: '2024',
    description:
      'Sangath united DFT alumni in Surat with cultural performances, industry talks, and heartfelt reunions — a celebration of our shared bond and professional growth.',
    status: 'past',
    link: '/sangaath2024',
  },
  {
    image: eventVadodara,
    name: 'Sangam 2026',
    city: 'Vadodara',
    year: '2026',
    description:
      'The grandest alumni reunion yet — Sangam 2026 in Vadodara promises an unforgettable evening of legacy, celebration, and the spirit of DFT excellence.',
    status: 'upcoming',
  },
]

export default function Events() {
  return (
    <section className="section section-white events" id="events">
      <div className="container">
        {/* Section header */}
        <div className="section-head reveal">
          <h2>
            Our <span>Events</span>
          </h2>
        </div>
        <p className="section-sub reveal">
          From Ahmedabad to Vadodara — every gathering strengthens the DFT
          alumni network. Here's a look at our journey so far and what's coming
          next.
        </p>

        {/* Timeline connector (desktop) */}
        <div className="events__timeline" aria-hidden="true">
          <div className="events__timeline-line" />
          {events.map((_, i) => (
            <div
              key={i}
              className="events__timeline-node"
              style={{ left: `${((i + 0.5) / events.length) * 100}%` }}
            />
          ))}
        </div>

        {/* Event cards */}
        <div className="events__grid">
          {events.map((evt, i) => (
            <div
              key={i}
              className={`events__card reveal ${evt.status === 'upcoming' ? 'events__card--upcoming' : ''
                }`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Image */}
              <div className="events__card-img-wrap">
                <ImageWithSkeleton
                  src={evt.image}
                  alt={evt.name}
                  className="events__card-img"
                />
                <div className="events__card-img-overlay" />
                {/* Year badge */}
                <div className="events__card-year">
                  <span>{evt.year}</span>
                </div>
                {/* Status badge */}
                {evt.status === 'upcoming' && (
                  <div className="events__card-badge">UPCOMING</div>
                )}
              </div>

              {/* Content */}
              <div className="events__card-body">
                <div className="events__card-meta">
                  <span className="events__card-city">
                    <FaMapMarkerAlt /> {evt.city}
                  </span>
                  <span className="events__card-date">
                    <FaCalendarAlt /> {evt.year}
                  </span>
                </div>

                <h3 className="events__card-title">{evt.name}</h3>
                <p className="events__card-desc">{evt.description}</p>

                <div className="events__card-footer">
                  {evt.status === 'upcoming' ? (
                    <Link to="/sangam2026" className="events__card-cta events__card-cta--upcoming">
                      COMING SOON <FaArrowRight />
                    </Link>
                  ) : evt.link ? (
                    <Link to={evt.link} className="events__card-cta">
                      VIEW MEMORIES <FaArrowRight />
                    </Link>
                  ) : (
                    <span className="events__card-cta">
                      VIEW MEMORIES <FaArrowRight />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

---

## File 45 {#file-45}

**📄 Path:** `src\pages\FounderDesk.css`

```css
.founder-desk {
  background: var(--paper-white);
  padding: 100px 0;
  border-top: 1px solid var(--line-grey);
}

.founder-desk__inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 80px;
  align-items: start;
}

/* Text side */
.founder-desk__text {
  position: relative;
}

.founder-desk__section-head {
  margin-bottom: 32px;
}

.founder-desk__para {
  margin-bottom: 20px;
}

.founder-desk__para--lead {
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.8;
  color: var(--navy-deep);
}

/* Quote highlight block */
.founder-desk__quote {
  position: relative;
  background: rgba(232, 48, 42, 0.03);
  border-left: 4px solid var(--signal-red);
  padding: 24px 30px;
  margin: 32px 0;
  border-radius: 0 8px 8px 0;
}

.founder-desk__quote p {
  font-size: 0.98rem;
  line-height: 1.8;
  color: var(--navy-mid);
  margin: 0;
  font-weight: 500;
  font-style: italic;
}

.founder-desk__quote .highlight-red {
  color: var(--signal-red);
  font-weight: 700;
  font-style: normal;
}

.quote-mark {
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 5rem;
  color: rgba(232, 48, 42, 0.08);
  font-family: serif;
  line-height: 1;
  pointer-events: none;
}

/* Slogan box */
.founder-desk__slogan-box {
  background: var(--navy-deep);
  color: var(--paper-white);
  padding: 28px 32px;
  border-radius: 8px;
  margin-top: 36px;
  box-shadow: 0 8px 24px rgba(11, 27, 63, 0.15);
  position: relative;
  overflow: hidden;
}

.founder-desk__slogan-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--signal-red);
}

.slogan-text {
  font-size: 1.02rem;
  line-height: 1.75;
  margin: 0;
}

.slogan-highlight {
  color: #ff4742;
  font-weight: 700;
  font-family: var(--font-display);
}

/* Image wrap */
.founder-desk__image-wrap {
  position: sticky;
  top: 110px;
  text-align: center;
}

.founder-desk__image-frame {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 16px 36px rgba(11, 27, 63, 0.12);
  margin-bottom: 24px;
}

.founder-desk__image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.founder-desk__image-frame:hover .founder-desk__image {
  transform: scale(1.03);
}

.founder-desk__image-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--signal-red);
}

.founder-desk__info {
  background: rgba(11, 27, 63, 0.02);
  border: 1px solid rgba(11, 27, 63, 0.05);
  border-radius: 8px;
  padding: 16px 24px;
  display: inline-block;
  min-width: 280px;
}

.founder-desk__name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--navy-deep);
  margin-bottom: 4px;
}

.founder-desk__role {
  font-size: 0.88rem;
  color: var(--slate);
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Responsive adjustment */
@media (max-width: 1024px) {
  .founder-desk__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .founder-desk__image-wrap {
    position: static;
    max-width: 480px;
    margin: 0 auto;
  }

  .founder-desk__image {
    height: 420px;
  }
}

@media (max-width: 768px) {
  .founder-desk {
    padding: 60px 0;
  }

  .founder-desk__para--lead {
    font-size: 1.05rem;
  }

  .founder-desk__quote {
    padding: 20px 24px;
    margin: 24px 0;
  }

  .founder-desk__slogan-box {
    padding: 20px 24px;
    margin-top: 28px;
  }
}
```

---

## File 46 {#file-46}

**📄 Path:** `src\pages\FounderDesk.jsx`

```jsx
import founderImg from '../assets/G_D_Acharya.avif'
import './FounderDesk.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

export default function FounderDesk() {
  return (
    <section className="section section-white founder-desk" id="founder-desk">
      <div className="container founder-desk__inner">

        {/* Text side */}
        <div className="founder-desk__text reveal-left">
          <div className="section-head founder-desk__section-head">
            <h2>From the Desk of <span>Founder</span></h2>
          </div>

          <p className="founder-desk__para body-text founder-desk__para--lead">
            Welcome to the Fabrication Family! We're all about continuous growth, a positive mindset,
            technology advancement, sustainable living, and personal well-being.
          </p>

          <p className="founder-desk__para body-text">
            We constantly upgrade ourselves to stay ahead in the industry, adopting innovative techniques
            and investing in R&D. With a positive attitude, we embrace challenges, foster collaboration,
            and celebrate achievements. Our success is a result of our united efforts.
          </p>

          {/* Special Quote Highlight Block */}
          <div className="founder-desk__quote">
            <span className="quote-mark">“</span>
            <p>
              Technology is at the heart of what we do. We keep up with the latest advancements,
              ensuring we deliver cutting-edge solutions to our clients. We as a Fabrication family
              members I quote <strong className="highlight-red">"Never say CHALSE to quality"</strong>.
            </p>
          </div>

          <p className="founder-desk__para body-text">
            Learning is a lifelong journey, and we're committed to it. Through training programs and
            knowledge sharing, we empower our team to grow and excel. We care about your well-being.
            We promote work-life balance and provide resources for physical and mental health support.
          </p>

          {/* Hindi Slogan Highlight Box */}
          <div className="founder-desk__slogan-box">
            <p className="slogan-text">
              Join us as we embark on an exciting journey of growth, innovation, and personal strength
              because <span className="slogan-highlight">सर्व के शुभ में स्व शुभ समाया हुआ है।</span> Together,
              we'll shape a brighter future of Fabrication industries.
            </p>
          </div>
        </div>

        {/* Image side */}
        <div className="founder-desk__image-wrap reveal-right">
          <div className="founder-desk__image-frame">
            <ImageWithSkeleton src={founderImg} alt="Dr. G. D. Acharya" className="founder-desk__image" />
            {/* Diagonal confidence accent block matching the design system */}
            <div className="founder-desk__image-accent" />
          </div>
          <div className="founder-desk__info">
            <h3 className="founder-desk__name">Dr. G. D. Acharya</h3>
            <p className="founder-desk__role">Founder, DFT Department</p>
          </div>
        </div>

      </div>
    </section>
  )
}

```

---

## File 47 {#file-47}

**📄 Path:** `src\pages\Gallery.css`

```css
.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 8px;
}

/* Item */
.gallery__item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
  background: var(--line-grey);
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.gallery__item:hover .gallery__img {
  transform: scale(1.08);
}

/* Diagonal overlay panel (design-system footer pattern) */
.gallery__overlay {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s ease;
  display: flex;
  align-items: flex-end;
}

.gallery__item:hover .gallery__overlay {
  opacity: 1;
}

.gallery__overlay-panel {
  width: 100%;
  background: var(--navy-deep);
  clip-path: polygon(0 18%, 100% 0, 100% 100%, 0 100%);
  padding: 30px 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.gallery__category {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--signal-red);
  text-transform: uppercase;
}

.gallery__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--paper-white);
  letter-spacing: 0.5px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(11, 27, 63, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInUp 0.2s ease;
}

.lightbox__content {
  max-width: 80vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.lightbox__img {
  max-width: 100%;
  max-height: 72vh;
  object-fit: contain;
  display: block;
  border-bottom: 4px solid var(--signal-red);
}

.lightbox__caption {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lightbox__cat {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--signal-red);
}

.lightbox__lbl {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  color: var(--paper-white);
  letter-spacing: 0.5px;
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background: var(--signal-red);
  border: none;
  color: var(--paper-white);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.lightbox__close:hover { background: var(--red-deep); }

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: var(--navy-mid);
  border: 2px solid rgba(255,255,255,0.15);
  color: var(--paper-white);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.lightbox__nav:hover { background: var(--signal-red); border-color: var(--signal-red); }
.lightbox__nav--prev { left: 20px; }
.lightbox__nav--next { right: 20px; }

@media (max-width: 768px) {
  .gallery__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .gallery__grid { grid-template-columns: 1fr; }
}

```

---

## File 48 {#file-48}

**📄 Path:** `src\pages\Gallery.jsx`

```jsx
import { useState, useEffect, useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import gallery1 from '../assets/Gallery_Images/Gallery_4.avif'
import gallery2 from '../assets/Gallery_Images/Gallery_2.avif'
import gallery3 from '../assets/Gallery_Images/Gallery_6.avif'
import gallery4 from '../assets/Gallery_Images/Gallery_3.avif'
import gallery5 from '../assets/Gallery_Images/Gallery_5.avif'
import gallery6 from '../assets/Gallery_Images/Gallery_1.avif'
import './Gallery.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

const items = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
]

function LightboxImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    setLoaded(false)
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true)
    }
  }, [src])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`lightbox__img ${loaded ? 'lightbox__img--loaded' : ''}`}
      onLoad={() => setLoaded(true)}
    />
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section className="section section-fog gallery" id="gallery">
      <div className="container">

        <div className="section-head reveal">
          <h2>Our <span>Gallery</span></h2>
        </div>
        <p className="section-sub reveal">
          A visual journey through years of celebrations, achievements, and cherished memories
          with the DFT family — from Sangam to Surat Sangaath and beyond.
        </p>

        <div className="gallery__grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="gallery__item reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(i)}
            >
              <ImageWithSkeleton src={item.src} alt={`Gallery item ${i + 1}`} className="gallery__img" />
              {/* Dark overlay on hover for subtle visual feedback */}
              <div className="gallery__overlay">
                <div className="gallery__overlay-panel-clean" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <FaTimes />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + items.length) % items.length) }}
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <LightboxImage src={items[lightbox].src} alt={`Gallery enlarged ${lightbox + 1}`} />
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % items.length) }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}

```

---

## File 49 {#file-49}

**📄 Path:** `src\pages\Hero.css`

```css
/* ============================================
   HERO — REDESIGNED LANDING SECTION
   Split layout · Image showcase · Floating stats
   ============================================ */

/* ── Section wrapper ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--navy-deep);
  overflow: hidden;
  padding-top: 110px;
}

/* ── Full-bleed background images (crossfade) ── */
.hero__bg-slide {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
}

.hero__bg-slide--active {
  opacity: 1;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) brightness(0.35);
  transform: scale(1.05);
}

.hero__bg-slide--active .hero__bg-img {
  animation: heroZoom 8s ease forwards;
}

@keyframes heroZoom {
  from {
    transform: scale(1.05);
  }

  to {
    transform: scale(1.0);
  }
}

.hero__bg-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(110deg,
      rgba(11, 27, 63, 0.97) 0%,
      rgba(11, 27, 63, 0.88) 35%,
      rgba(11, 27, 63, 0.55) 65%,
      rgba(11, 27, 63, 0.35) 100%);
}

/* ── Geometric accent elements ── */
.hero__accent-grid {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  background-image:
    radial-gradient(circle, rgba(232, 48, 42, 0.08) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.hero__accent-diagonal {
  position: absolute;
  right: -5%;
  top: -20%;
  width: 40%;
  height: 140%;
  background: var(--signal-red);
  opacity: 0.04;
  transform: rotate(-12deg);
  z-index: 1;
  pointer-events: none;
}

.hero__accent-corner {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(232, 48, 42, 0.06), transparent 70%);
  z-index: 1;
  pointer-events: none;
}

/* ── Inner layout ── */
.hero__inner {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 60px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

/* ── Left: Content ── */
.hero__content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* ── Text block container ── */
.hero__text-container {
  display: grid;
  grid-template-columns: 1fr;
}

.hero__text {
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-height: 340px;
}

.hero__text--inactive {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.hero__text--active {
  visibility: visible;
  pointer-events: auto;
}

.hero__text--in>*:not(.hero__badge) {
  animation: heroSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero__text--in .hero__badge-text {
  animation: heroBadgeFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero__text--out>*:not(.hero__badge) {
  animation: heroSlideOut 0.4s ease forwards;
}

.hero__text--out .hero__badge-text {
  animation: heroBadgeFadeOut 0.4s ease forwards;
}

@keyframes heroSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes heroSlideOut {
  from {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  to {
    opacity: 0;
    transform: translateY(-20px);
    filter: blur(4px);
  }
}

@keyframes heroBadgeFadeIn {
  from {
    opacity: 0;
    filter: blur(4px);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes heroBadgeFadeOut {
  from {
    opacity: 1;
    filter: blur(0);
  }

  to {
    opacity: 0;
    filter: blur(4px);
  }
}

/* ── Badge / Eyebrow ── */
.hero__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  width: fit-content;
}

.hero__badge-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 2px;
}

.hero__badge-text {
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.65rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}

/* ── Title ── */
.hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.2rem, 3.8vw, 3.5rem);
  color: var(--paper-white);
  line-height: 0.95;
  letter-spacing: -1.5px;
}

.hero__title-accent {
  display: block;
  color: var(--signal-red);
  position: relative;
}

/* ── Subtitle ── */
.hero__sub {
  font-size: 1.05rem;
  color: rgba(199, 206, 224, 0.85);
  line-height: 1.75;
  max-width: 520px;
  font-weight: 400;
}

/* ── Action buttons ── */
.hero__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.hero__btn--primary {
  padding: 16px 48px 16px 28px;
  background: linear-gradient(135deg, var(--signal-red), #c41f1f);
  color: var(--paper-white);
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
  box-shadow: 0 4px 24px rgba(232, 48, 42, 0.3);
}

.hero__btn--primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.15));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hero__btn--primary:hover {
  transform: translateX(4px) scale(1.02);
  box-shadow: 0 8px 32px rgba(232, 48, 42, 0.45);
}

.hero__btn--primary:hover::before {
  opacity: 1;
}

.hero__btn-icon {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.hero__btn--primary:hover .hero__btn-icon {
  transform: translateX(3px);
}

.hero__btn--outline {
  padding: 15px 32px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  color: var(--paper-white);
  background: transparent;
  backdrop-filter: blur(4px);
}

.hero__btn--outline:hover {
  border-color: var(--paper-white);
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}



/* ── Right: Image showcase ── */
.hero__showcase {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__showcase-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  max-height: 520px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.hero__showcase-frame .hero__showcase-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.1);
  transition: opacity 0.8s ease, transform 6s ease;
}

.hero__showcase-frame .hero__showcase-img--active {
  opacity: 1;
  transform: scale(1.0);
}

.hero__showcase-border {
  position: absolute;
  inset: -12px;
  border: 2px solid rgba(232, 48, 42, 0.25);
  pointer-events: none;
  z-index: -1;
}

/* ── Floating year badge ── */
.hero__showcase-badge {
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 90px;
  height: 90px;
  background: var(--signal-red);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
  animation: badgePulse 3s ease-in-out infinite;
}

.hero__showcase-badge-year {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.6rem;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.7);
}

.hero__showcase-badge-num {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 1.6rem;
  color: var(--paper-white);
  line-height: 1;
}

@keyframes badgePulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(232, 48, 42, 0.4);
  }

  50% {
    box-shadow: 0 0 0 12px rgba(232, 48, 42, 0);
  }
}

/* ── Slide controls ── */
.hero__controls {
  position: absolute;
  bottom: 40px;
  right: var(--section-px);
  display: flex;
  align-items: center;
  gap: 24px;
  z-index: 5;
}

.hero__progress {
  display: flex;
  gap: 8px;
  align-items: center;
}

.hero__dot {
  position: relative;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.3s ease;
}

.hero__dot-fill {
  position: absolute;
  inset: 8px;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.hero__dot--active .hero__dot-fill {
  background: var(--signal-red);
  inset: 4px;
  box-shadow: 0 0 12px rgba(232, 48, 42, 0.4);
}

.hero__dot-num {
  position: relative;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.55rem;
  color: rgba(255, 255, 255, 0.5);
  z-index: 1;
}

.hero__dot--active .hero__dot-num {
  color: var(--paper-white);
}

.hero__slide-counter {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
}

.hero__slide-current {
  color: var(--paper-white);
  font-size: 1.4rem;
}

.hero__slide-sep {
  margin: 0 4px;
  color: var(--signal-red);
}

/* ── Scroll indicator ── */
.hero__scroll {
  position: absolute;
  bottom: 40px;
  left: var(--section-px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 5;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero__scroll:hover {
  transform: translateY(3px);
}

.hero__scroll-text {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.6rem;
  letter-spacing: 4px;
  color: rgba(255, 255, 255, 0.35);
  writing-mode: vertical-lr;
  text-orientation: mixed;
}

.hero__scroll-line {
  width: 1px;
  height: 45px;
  background: linear-gradient(to bottom, var(--signal-red), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

.hero__scroll-chevron {
  color: var(--signal-red);
  font-size: 0.6rem;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollPulse {

  0%,
  100% {
    opacity: 1;
    transform: scaleY(1);
  }

  50% {
    opacity: 0.3;
    transform: scaleY(0.6);
  }
}

@keyframes scrollBounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1150px) {
  .hero {
    min-height: auto;
    padding-top: 130px;
    padding-bottom: 60px;
    align-items: flex-start;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 0;
  }

  .hero__showcase {
    display: none;
  }


}

@media (max-width: 768px) {
  .hero__text {
    min-height: auto;
  }

  .hero__title {
    font-size: 2.2rem;
  }



  .hero__controls {
    right: 16px;
    bottom: 24px;
  }

  .hero__scroll {
    display: none;
  }

  .hero__badge-text {
    font-size: 0.55rem;
    letter-spacing: 1.5px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 100px;
  }

  .hero__text {
    min-height: auto;
  }

  .hero__title {
    font-size: 1.8rem;
  }

  .hero__sub {
    font-size: 0.95rem;
  }

  .hero__actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero__btn--primary,
  .hero__btn--outline {
    width: 100%;
    justify-content: center;
  }

  .hero__slide-counter {
    display: none;
  }
}
```

---

## File 50 {#file-50}

**📄 Path:** `src\pages\Hero.jsx`

```jsx
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-scroll'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa'
import heroSlide1 from '../assets/Meet2023/img90.7da26a7b0531a14f219e.avif'
import heroSlide2 from '../assets/Sangaath2024/AJY_6412.avif'
import heroSlide3 from '../assets/Meet2023/img34.9ab305e8ae48ca6fb887.avif'
import './Hero.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

const slides = [
  {
    image: heroSlide1,
    eyebrow: 'DFT ALUMNI · SIR BHAVSINHJI POLYTECHNIC, BHAVNAGAR',
    title: 'CONNECTED',
    titleAccent: 'BY LEGACY.',
    sub: 'Thousands of DFT graduates united across India and beyond. Relive your memories, reconnect with batchmates, and carry the torch forward.',
    cta1: { label: 'EXPLORE MORE', to: 'about' },
    cta2: { label: 'OUR COMMITTEE', to: 'committee' },
  },
  {
    image: heroSlide2,
    eyebrow: 'DFT ALUMNI · GIVING BACK TO ALMA MATER',
    title: 'EMPOWER THE',
    titleAccent: 'NEXT BATCH.',
    sub: 'Mentor students, share your journey, and invest in the future of Fabrication Technology. Your experience is their blueprint.',
    cta1: { label: 'JOIN NOW', to: 'contact' },
    cta2: { label: 'VIEW GALLERY', to: 'gallery' },
  },
  {
    image: heroSlide3,
    eyebrow: 'DFT ALUMNI · SANGAM 2026 · VADODARA',
    title: 'WHERE MEMORIES',
    titleAccent: 'COME ALIVE.',
    sub: 'From convocation halls to annual Sangam — we celebrate every milestone, every reunion, every achievement together.',
    cta1: { label: 'GET IN TOUCH', to: 'contact' },
    cta2: { label: 'SEE GALLERY', to: 'gallery' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animState, setAnimState] = useState('in') // 'in' | 'out'

  const goTo = useCallback(
    (i) => {
      if (i === current || animState === 'out') return
      setAnimState('out')
      setTimeout(() => {
        setCurrent(i)
        setAnimState('in')
      }, 400)
    },
    [current, animState]
  )

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimState('out')
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length)
        setAnimState('in')
      }, 400)
    }, 7000)
    return () => clearInterval(timer)
  }, [])



  return (
    <section className="hero" id="home">
      {/* ── Full-bleed background images with crossfade ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero__bg-slide ${i === current ? 'hero__bg-slide--active' : ''}`}
        >
          <ImageWithSkeleton src={s.image} alt="" className="hero__bg-img" theme="dark" />
        </div>
      ))}
      <div className="hero__bg-overlay" />

      {/* ── Geometric accents ── */}
      <div className="hero__accent-grid" />
      <div className="hero__accent-diagonal" />
      <div className="hero__accent-corner" />

      {/* ── Repeating line texture ── */}
      <div className="masthead-bg-lines" />

      {/* ── Main content ── */}
      <div className="container hero__inner">
        {/* Left: Text content */}
        <div className="hero__content">
          <div className="hero__text-container">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`hero__text ${i === current ? `hero__text--active hero__text--${animState}` : 'hero__text--inactive'}`}
              >
                <div className="hero__badge">
                  <span className="hero__badge-text">{s.eyebrow}</span>
                </div>

                <h1 className="hero__title">
                  {s.title}
                  <span className="hero__title-accent">{s.titleAccent}</span>
                </h1>

                <p className="hero__sub">{s.sub}</p>

                <div className="hero__actions">
                  <Link
                    to={s.cta1.to}
                    smooth
                    duration={700}
                    offset={-80}
                    className="hero__btn hero__btn--primary"
                  >
                    <span>{s.cta1.label}</span>
                    <FaArrowRight className="hero__btn-icon" />
                  </Link>
                  <Link
                    to={s.cta2.to}
                    smooth
                    duration={700}
                    offset={-80}
                    className="hero__btn hero__btn--outline"
                  >
                    {s.cta2.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image showcase */}
        <div className="hero__showcase">
          <div className="hero__showcase-frame">
            {slides.map((s, i) => (
              <ImageWithSkeleton
                key={i}
                src={s.image}
                alt="DFT Alumni"
                className={`hero__showcase-img ${i === current ? 'hero__showcase-img--active' : ''}`}
                theme="dark"
              />
            ))}
            <div className="hero__showcase-border" />
          </div>
          {/* Decorative floating badge */}
          <div className="hero__showcase-badge">
            <span className="hero__showcase-badge-year">EST.</span>
            <span className="hero__showcase-badge-num">1983</span>
          </div>
        </div>
      </div>

      {/* ── Slide progress & dots ── */}
      <div className="hero__controls">
        <div className="hero__progress">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            >
              <span className="hero__dot-fill" />
              <span className="hero__dot-num">{String(i + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
        <div className="hero__slide-counter">
          <span className="hero__slide-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="hero__slide-sep">/</span>
          <span className="hero__slide-total">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <Link to="about" smooth duration={700} offset={-80} className="hero__scroll">
        <span className="hero__scroll-text">SCROLL</span>
        <div className="hero__scroll-line" />
        <FaChevronDown className="hero__scroll-chevron" />
      </Link>
    </section>
  )
}

```

---

## File 51 {#file-51}

**📄 Path:** `src\pages\Login.css`

```css
/* ============================================
   DFT ALUMNI — ALUMNI PORTAL LOGIN & REGISTRATION
   Navy Authority · Signal Red Accent · Split-Screen Responsive Design
   ============================================ */

.login-page {
  position: relative;
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--navy-deep);
  padding: 24px;
  overflow: hidden;
}

/* Decorative Background Glows */
.login-page__decor-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  opacity: 0.2;
  z-index: 1;
}

.login-page__decor-circle--1 {
  width: 450px;
  height: 450px;
  background: var(--signal-red);
  top: -10%;
  left: -10%;
}

.login-page__decor-circle--2 {
  width: 500px;
  height: 500px;
  background: var(--navy-mid);
  bottom: -15%;
  right: -5%;
}

/* Container & Actions */
.login-container {
  position: relative;
  width: 100%;
  max-width: 75vw;
  max-height: calc(100vh - 48px);
  max-height: calc(100dvh - 48px);
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login-container__back-btn {
  background: none;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.65);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  transition: color 0.3s ease;
}

.login-container__back-btn:hover {
  color: var(--signal-red);
}

/* Redesigned Grid Login Card */
.login-card {
  position: relative;
  background: var(--paper-white);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 25% 75%;
  width: 100%;
  height: 640px;
  max-height: 100%;
}

/* --- Left Pane: Brand Panel --- */
.login-card__brand-panel {
  position: relative;
  background: linear-gradient(135deg, var(--navy-deep), var(--navy-mid));
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.login-card__brand-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 30%, rgba(232, 48, 42, 0.15), transparent 60%);
  z-index: 1;
}

.login-card__brand-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 340px;
}

.login-card__brand-logo-wrap {
  width: 100px;
  height: 100px;
  background: var(--paper-white);
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;
  animation: logoFloat 6s ease-in-out infinite;
}

@keyframes logoFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.login-card__brand-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.login-card__brand-title {
  color: var(--paper-white);
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  line-height: 1.2;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.login-card__brand-divider {
  width: 50px;
  height: 4px;
  background: var(--signal-red);
  margin: 16px 0;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(232, 48, 42, 0.6);
}

.login-card__brand-tagline {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--signal-red);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.login-card__brand-desc {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-top: 18px;
}

/* --- Right Pane: Form Panel --- */
.login-card__form-panel {
  display: flex;
  flex-direction: column;
  background: var(--paper-white);
  overflow: hidden;
  height: 100%;
}

/* Sliding Tab Selector */
.login-tabs {
  position: relative;
  display: flex;
  background: var(--fog-grey);
  border-bottom: 1px solid var(--line-grey);
  height: 56px;
  flex-shrink: 0;
}

.login-tabs__btn {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.82rem;
  text-transform: uppercase;
  color: var(--navy-deep);
  cursor: pointer;
  letter-spacing: 1px;
  z-index: 3;
  transition: color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.login-tabs__btn.active {
  color: var(--paper-white);
}

.login-tabs__indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--navy-mid);
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.login-tabs__indicator.slide {
  transform: translateX(100%);
  background: var(--red-deep);
}

/* Scrollable Form Body */
.login-card__body {
  padding: 36px 40px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.login-card__body::-webkit-scrollbar {
  width: 5px;
}

.login-card__body::-webkit-scrollbar-track {
  background: var(--fog-grey);
}

.login-card__body::-webkit-scrollbar-thumb {
  background: var(--navy-mid);
  border-radius: 4px;
}

/* Compact Brand header on mobile (hidden on desktop) */
.login-card__mobile-brand {
  display: none;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Form Input Layout Grid */
.login-form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 20px;
}

.login-form__grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px 20px;
}

.previous-degree-row {
  display: grid;
  grid-template-columns: 45fr 45fr 10fr;
  gap: 16px 20px;
}

.login-field--full {
  grid-column: span 2;
}

.login-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Fields & Labels */
.login-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.login-field label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--slate);
}

.login-field__required {
  color: var(--signal-red);
  margin-left: 2px;
}

.login-field__input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.login-field__icon {
  position: absolute;
  left: 14px;
  color: var(--slate);
  font-size: 0.85rem;
  pointer-events: none;
  transition: color 0.3s ease;
}

.login-field input:not([type="checkbox"]),
.login-field select {
  width: 100%;
  background: var(--fog-grey);
  border: 1px solid var(--line-grey);
  border-left: 3px solid transparent;
  padding: 12px 14px 12px 42px;
  color: var(--navy-deep);
  font-size: 0.85rem;
  font-family: var(--font-body);
  font-weight: 500;
  transition: all 0.3s ease;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}

.login-field select {
  cursor: pointer;
  background-image: none !important;
}

.login-field__input-wrap:not(.phone-input-wrap):has(select)::after {
  content: '';
  position: absolute;
  right: 14px;
  top: 50%;
  width: 12px;
  height: 12px;
  transform: translateY(-50%) rotate(0deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
  z-index: 3;
  transition: transform 0.25s ease, background-image 0.25s ease;
}

.login-field__input-wrap:not(.phone-input-wrap):has(select:enabled:focus)::after,
.login-field__input-wrap:not(.phone-input-wrap):has(select:enabled:active)::after {
  transform: translateY(-50%) rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%23e8302a'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
}

.login-field__input-wrap:not(.phone-input-wrap):has(select:disabled)::after {
  transform: translateY(-50%) rotate(0deg) !important;
  opacity: 0.5 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E") !important;
}

.login-field input:focus,
.login-field select:focus {
  border-color: var(--navy-deep);
  border-left-color: var(--signal-red);
  background-color: var(--paper-white);
  box-shadow: 0 4px 10px rgba(11, 27, 63, 0.05);
}

.login-field input:focus+.login-field__icon,
.login-field select:focus+.login-field__icon {
  color: var(--signal-red);
}

/* Password Toggle Icon */
.login-field__toggle-pw {
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  color: var(--slate);
  cursor: pointer;
  padding: 0;
  outline: none;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
}

.login-field__toggle-pw:hover {
  color: var(--navy-deep);
}

/* Form Action Links (Remember & Forgot) */
.login-form__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
}

/* Custom Checkbox */
.login-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.login-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.login-checkbox__box {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  background: var(--fog-grey);
  border: 1px solid var(--line-grey);
  display: inline-block;
  position: relative;
  transition: all 0.2s ease;
}

.login-checkbox input:checked~.login-checkbox__box {
  background: var(--navy-deep);
  border-color: var(--navy-deep);
}

.login-checkbox__box::after {
  content: '';
  position: absolute;
  display: none;
  left: 5px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid var(--paper-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.login-checkbox input:checked~.login-checkbox__box::after {
  display: block;
}

.login-checkbox__label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--slate);
  font-weight: 500;
  line-height: 1.5;
  flex: 1;
}

/* Error Banner Styling */
.login-error-banner {
  padding: 14px 18px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  color: #dc2626;
  font-size: 0.88rem;
  font-weight: 500;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.08);
}

.login-error-banner__icon {
  color: #dc2626;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.login-forgot-link {
  background: none;
  border: none;
  padding: 0;
  color: var(--slate);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: color 0.2s ease;
}

.login-forgot-link:hover {
  color: var(--signal-red);
}

/* Error Alerts */
.login-error-alert {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(232, 48, 42, 0.08);
  border: 1px solid rgba(232, 48, 42, 0.2);
  border-left: 4px solid var(--signal-red);
  padding: 12px 18px;
  color: var(--red-deep);
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 18px;
  animation: shake 0.35s ease;
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-6px);
  }

  75% {
    transform: translateX(6px);
  }
}

.login-error-alert__icon {
  font-size: 1rem;
  flex-shrink: 0;
}

/* Submit Action Button */
.login-submit-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--signal-red), var(--red-deep));
  border: none;
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(232, 48, 42, 0.2);
  margin-top: 6px;
  outline: none;
  transition: all 0.3s ease;
}

.login-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(232, 48, 42, 0.35);
}

.login-submit-btn:active {
  transform: translateY(0);
}

.login-submit-btn:disabled {
  background: var(--slate);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Loading Spinners */
.login-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--paper-white);
  animation: spin 0.8s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Help Note */
.login-help-note {
  margin-top: 18px;
  padding: 10px 14px;
  background: var(--fog-grey);
  border-left: 2px solid var(--navy-deep);
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: var(--slate);
  line-height: 1.4;
}

.login-help-note code {
  font-family: monospace;
  background: rgba(11, 27, 63, 0.08);
  padding: 2px 4px;
  border-radius: 2px;
  color: var(--navy-deep);
  font-weight: 600;
}

/* Successful Auth Overlay */
.login-success-overlay {
  position: absolute;
  inset: 0;
  background: var(--navy-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: slideDown 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
}

.login-success-overlay__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--paper-white);
  text-align: center;
  padding: 30px;
}

.login-success-overlay__content p {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--line-grey);
  max-width: 300px;
  line-height: 1.4;
}

.login-success-overlay__content .display-title {
  color: var(--paper-white);
  font-size: 1.6rem;
  letter-spacing: 2px;
}

.success-icon-anim {
  font-size: 4rem;
  color: var(--signal-red);
  animation: popScale 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  filter: drop-shadow(0 0 15px rgba(232, 48, 42, 0.5));
}

@keyframes popScale {
  from {
    transform: scale(0);
    rotate: -45deg;
  }

  to {
    transform: scale(1);
    rotate: 0;
  }
}

/* ============================================
   RESPONSIVE DESIGN OVERRIDES
   ============================================ */

/* Medium Devices (Tablets, landscape phones) */
@media (max-width: 900px) {
  .login-card {
    grid-template-columns: 25% 75%;
    height: 580px;
  }

  .login-card__brand-panel {
    padding: 30px 15px;
  }

  .login-card__brand-logo-wrap {
    width: 80px;
    height: 80px;
    padding: 8px;
    margin-bottom: 16px;
  }

  .login-card__brand-title {
    font-size: 1.4rem;
  }
}

/* Small Devices (Portrait Phones, small tablets) */
@media (max-width: 768px) {
  .login-card {
    grid-template-columns: 1fr;
    height: 100%;
    /* let it fill container heights */
  }

  /* Collapse desktop brand panel */
  .login-card__brand-panel {
    display: none;
  }

  /* Display mobile header brand content instead */
  .login-card__mobile-brand {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 24px;
    border-bottom: 1px solid var(--line-grey);
    flex-shrink: 0;
  }

  .login-card__mobile-logo-wrap {
    width: 52px;
    height: 52px;
    background: var(--fog-grey);
    border: 1px solid var(--line-grey);
    border-radius: 50%;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-card);
  }

  .login-card__mobile-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .login-card__mobile-title {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.3rem;
    color: var(--navy-deep);
    line-height: 1.1;
  }

  .login-card__mobile-tagline {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.58rem;
    color: var(--signal-red);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .login-card__body {
    padding: 24px;
  }

  .login-form__grid,
  .login-form__grid-3,
  .login-form__row,
  .previous-degree-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .login-field--full {
    grid-column: span 1;
  }
}

@media (max-height: 540px) {
  .login-container {
    max-height: 100%;
  }

  .login-container__back-btn {
    display: none;
    /* conserve vertical space */
  }
}

/* ============================================
   TRUE MOBILE — Full-Screen App-Style Layout
   Deliberately distinct from the Desktop split-card
   and the Tablet stacked-card: no card chrome at all,
   the UI bleeds edge-to-edge with a hero banner up top
   and a floating tab sheet below it.
   ============================================ */
@media (max-width: 640px) {

  .login-page {
    height: 100vh;
    height: 100dvh;
    padding: 0;
    align-items: stretch;
    justify-content: stretch;
    overflow: hidden;
  }

  /* Decorative blur circles read as "card" polish — drop them for the flat, full-bleed mobile look */
  .login-page__decor-circle {
    display: none;
  }

  .login-container {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    height: 100dvh;
    max-height: none;
    gap: 0;
  }

  /* Back button becomes a floating circular icon over the hero banner instead of a text link above the card */
  .login-container__back-btn {
    position: absolute;
    top: max(14px, env(safe-area-inset-top));
    left: 14px;
    z-index: 20;
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .login-container__back-btn-text {
    display: none;
    /* icon-only on mobile to keep the hero uncluttered */
  }

  /* No card box at all — it IS the screen */
  .login-card {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    max-height: none;
    display: flex;
    flex-direction: column;
    border-radius: 0;
    box-shadow: none;
    border: none;
  }

  .login-card__brand-panel {
    display: none;
  }

  .login-card__form-panel {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* Hero banner replaces the plain horizontal mobile-brand bar used on tablet */
  .login-card__mobile-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    margin: 0;
    padding: calc(env(safe-area-inset-top) + 44px) 24px 32px;
    background: linear-gradient(135deg, var(--navy-deep), var(--navy-mid));
    border-bottom: none;
    border-radius: 0 0 28px 28px;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  .login-card__mobile-brand::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 82% 15%, rgba(232, 48, 42, 0.28), transparent 55%);
    pointer-events: none;
  }

  .login-card__mobile-logo-wrap {
    width: 68px;
    height: 68px;
    background: var(--paper-white);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
  }

  .login-card__mobile-title {
    color: var(--paper-white);
    font-size: 1.4rem;
    position: relative;
    z-index: 2;
  }

  .login-card__mobile-tagline {
    color: var(--signal-red);
    position: relative;
    z-index: 2;
  }

  /* Tabs float as a rounded pill sheet overlapping the hero, rather than a flush top bar */
  .login-tabs {
    margin: -18px 16px 0;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
    position: relative;
    z-index: 5;
    border-bottom: none;
    flex-shrink: 0;
  }

  .login-card__body {
    padding: 24px 20px 32px;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

/* Composite Phone Input Wrap as a unified Input Group */
.phone-input-wrap {
  display: grid !important;
  grid-template-columns: 110px 1fr !important;
  width: 100% !important;
  background: var(--fog-grey) !important;
  border: 1px solid var(--line-grey) !important;
  border-radius: 4px !important;
  position: relative !important;
  transition: all 0.3s ease !important;
  align-items: center !important;
  overflow: hidden !important;
}

.phone-input-wrap:focus-within {
  border-color: var(--navy-deep) !important;
  background: var(--paper-white) !important;
  box-shadow: 0 0 0 4px rgba(11, 27, 63, 0.08) !important;
}

.phone-country-select {
  padding: 12px 20px 12px 38px !important;
  border: none !important;
  border-right: 1px solid var(--line-grey) !important;
  border-radius: 0 !important;
  background: transparent !important;
  background-image: none !important;
  height: 100% !important;
  outline: none !important;
  box-shadow: none !important;
  transition: border-color 0.3s ease !important;
}

.phone-input-wrap::after {
  content: '';
  position: absolute;
  left: 92px;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%) rotate(0deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
  z-index: 4;
  transition: transform 0.25s ease, background-image 0.25s ease;
}

.phone-input-wrap:has(.phone-country-select:enabled:focus)::after,
.phone-input-wrap:has(.phone-country-select:enabled:active)::after {
  transform: translateY(-50%) rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%23e8302a'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
}

.phone-input-wrap:has(.phone-country-select:disabled)::after {
  transform: translateY(-50%) rotate(0deg) !important;
  opacity: 0.5 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E") !important;
}

.phone-input-wrap:focus-within .phone-country-select {
  border-color: var(--navy-deep) !important;
}

.phone-input-wrap input {
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  padding: 12px 14px !important;
  width: 100% !important;
  outline: none !important;
  box-shadow: none !important;
  height: 100% !important;
}

/* Flag Icon position adjustments for unified container */
.phone-input-wrap .login-field__icon.fi,
.phone-input-wrap .profile-field__icon.fi {
  position: absolute !important;
  left: 14px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 3 !important;
}

/* Form Section Titles */
.login-section-title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--navy-deep);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  border-bottom: 2px solid var(--signal-red);
  padding-bottom: 4px;
  width: fit-content;
}

/* Flag Icon sizes */
.login-field__icon.fi {
  width: 18px !important;
  height: 14px !important;
  font-size: 1rem !important;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  background-size: cover !important;
}

/* Checkbox Grid Container — Product & Services offered by Company */
.product-services-checkbox-group {
  background: var(--paper-white);
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  padding: 20px;
  max-height: 250px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.product-services-checkbox-group:hover,
.product-services-checkbox-group:focus-within {
  border-color: var(--slate);
}

.checkbox-option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy-deep);
  transition: color 0.2s ease;
  user-select: none;
  line-height: 1.3;
}

.checkbox-option:hover {
  color: var(--signal-red);
}

.checkbox-option input[type="checkbox"] {
  margin-top: 1px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  accent-color: var(--navy-deep);
  flex-shrink: 0;
}

/* Forgot Password Verification Modal styles */
.login-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeInModalOverlay 0.3s ease forwards;
}

.login-modal-content {
  background: var(--paper-white);
  width: 100%;
  max-width: 480px;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid var(--line-grey);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  animation: scaleInModal 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.login-modal-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--navy-deep);
  margin-bottom: 12px;
}

.login-modal-description {
  font-size: 0.9rem;
  color: var(--slate);
  line-height: 1.5;
  margin-bottom: 20px;
}

@keyframes fadeInModalOverlay {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes scaleInModal {
  from {
    transform: scale(0.9) translateY(10px);
    opacity: 0;
  }

  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  pointer-events: none;
  /* Allows clicking through the empty container space */
  max-width: min(380px, calc(100vw - 32px));
}

@media (max-width: 600px) {
  .toast-container {
    bottom: 16px;
    right: 16px;
    left: 16px;
    max-width: none;
    align-items: stretch;
  }
}

.toast {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--navy-deep);
  border-radius: 6px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  width: 100%;
  animation: toastLifecycle 10s ease-in-out forwards;
  border-left: 4px solid transparent;
}

.toast__icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.toast span {
  flex: 1;
  line-height: 1.4;
}

.toast__close {
  background: none;
  border: none;
  color: inherit;
  opacity: 0.6;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.toast__close:hover {
  opacity: 1;
}

.toast--error {
  border-left-color: var(--signal-red);
  color: #ff8a80;
}

.toast--error .toast__icon {
  color: var(--signal-red);
  font-size: 1.1rem;
}

.toast--success {
  border-left-color: #2ecc71;
}

.toast--success .toast__icon {
  color: #2ecc71;
  font-size: 1.1rem;
}

@keyframes toastLifecycle {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }

  4% {
    opacity: 1;
    transform: translateX(0);
  }

  92% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(40px);
  }
}

/* ============================================
   PHONE CODE DISPLAY FIX
   ============================================ */
/* Hide the text (and emoji) in the selected state of the select field */
.phone-country-select {
  color: transparent !important;
}

/* Ensure options inside the dropdown menu remain visible */
.phone-country-select option {
  color: var(--navy-deep) !important;
}

/* Overlay the raw country code text without the emoji */
.phone-selected-text {
  position: absolute;
  left: 42px;
  /* Places text right after the flag icon */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  /* Allows clicks to pass through to the select field */
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--navy-deep);
  z-index: 2;
}
```

---

## File 52 {#file-52}

**📄 Path:** `src\pages\Login.jsx`

```jsx
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
  FaHome,
  FaCalendarAlt,
  FaPhone,
  FaWhatsapp,
  FaSync,
  FaHeart,
  FaBuilding,
  FaLinkedin,
  FaPlus,
  FaTrash,
  FaCertificate,
  FaGlobe,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaSitemap,
  FaAward,
  FaExclamationTriangle,
  FaFilePdf
} from 'react-icons/fa'
import alumniLogo from '../assets/Logo/dft-logo-dark.avif'
import CountryAutocomplete from '../components/CountryAutocomplete'
import StateAutocomplete from '../components/StateAutocomplete'
import CityAutocomplete from '../components/CityAutocomplete'
import CompanyAutocomplete from '../components/CompanyAutocomplete'
import './Login.css'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { countryCodes } from '../data/countryData'
import { getCountryByState } from '../data/stateData'
import { getStateAndCountryByCity } from '../data/cityData'
import {
  ACADEMIC_YEARS,
  DEGREE_OPTIONS,
  GENDER_OPTIONS,
  CERTIFICATION_OPTIONS,
  PRODUCT_SERVICE_OPTIONS,
  HOBBY_OPTIONS,
  PLACEHOLDERS
} from '../data/formdata'
import { hashEmail, hashPhoneDigits } from '../utils/hash'

const MONTH_OPTIONS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const PROMOTION_YEAR_OPTIONS = Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => String(new Date().getFullYear() - i));

const parsePhoneNumber = (fullPhone) => {
  if (!fullPhone) return { code: '+91', number: '' }
  const clean = fullPhone.trim()
  const match = clean.match(/^(\+\d+)\s*(.*)$/)
  if (match) {
    return { code: match[1], number: match[2] }
  }
  if (clean.length === 10 && /^\d+$/.test(clean)) {
    return { code: '+91', number: clean }
  }
  if (clean.startsWith('+')) {
    if (clean.startsWith('+91')) {
      return { code: '+91', number: clean.slice(3) }
    }
    return { code: clean.slice(0, 3), number: clean.slice(3) }
  }
  return { code: '+91', number: clean }
}

const getCountryIso = (code) => {
  const map = {
    '+1': 'us',
    '+7': 'ru',
    '+20': 'eg',
    '+27': 'za',
    '+30': 'gr',
    '+31': 'nl',
    '+32': 'be',
    '+33': 'fr',
    '+34': 'es',
    '+36': 'hu',
    '+39': 'it',
    '+40': 'ro',
    '+41': 'ch',
    '+43': 'at',
    '+44': 'gb',
    '+45': 'dk',
    '+46': 'se',
    '+47': 'no',
    '+48': 'pl',
    '+49': 'de',
    '+51': 'pe',
    '+52': 'mx',
    '+53': 'cu',
    '+54': 'ar',
    '+55': 'br',
    '+56': 'cl',
    '+57': 'co',
    '+58': 've',
    '+60': 'my',
    '+61': 'au',
    '+62': 'id',
    '+63': 'ph',
    '+64': 'nz',
    '+65': 'sg',
    '+66': 'th',
    '+81': 'jp',
    '+82': 'kr',
    '+84': 'vn',
    '+86': 'cn',
    '+90': 'tr',
    '+91': 'in',
    '+92': 'pk',
    '+93': 'af',
    '+94': 'lk',
    '+95': 'mm',
    '+98': 'ir',
    '+211': 'ss',
    '+212': 'ma',
    '+213': 'dz',
    '+216': 'tn',
    '+218': 'ly',
    '+220': 'gm',
    '+221': 'sn',
    '+222': 'mr',
    '+223': 'ml',
    '+224': 'gn',
    '+225': 'ci',
    '+226': 'bf',
    '+227': 'ne',
    '+228': 'tg',
    '+229': 'bj',
    '+230': 'mu',
    '+231': 'lr',
    '+232': 'sl',
    '+233': 'gh',
    '+234': 'ng',
    '+235': 'td',
    '+236': 'cf',
    '+237': 'cm',
    '+238': 'cv',
    '+239': 'st',
    '+240': 'gq',
    '+241': 'ga',
    '+242': 'cg',
    '+243': 'cd',
    '+244': 'ao',
    '+245': 'gw',
    '+248': 'sc',
    '+249': 'sd',
    '+250': 'rw',
    '+251': 'et',
    '+252': 'so',
    '+253': 'dj',
    '+254': 'ke',
    '+255': 'tz',
    '+256': 'ug',
    '+257': 'bi',
    '+258': 'mz',
    '+260': 'zm',
    '+261': 'mg',
    '+263': 'zw',
    '+264': 'na',
    '+265': 'mw',
    '+266': 'ls',
    '+267': 'bw',
    '+268': 'sz',
    '+269': 'km',
    '+291': 'er',
    '+351': 'pt',
    '+352': 'lu',
    '+353': 'ie',
    '+354': 'is',
    '+355': 'al',
    '+356': 'mt',
    '+357': 'cy',
    '+358': 'fi',
    '+359': 'bg',
    '+370': 'lt',
    '+371': 'lv',
    '+372': 'ee',
    '+373': 'md',
    '+374': 'am',
    '+375': 'by',
    '+376': 'ad',
    '+377': 'mc',
    '+378': 'sm',
    '+380': 'ua',
    '+381': 'rs',
    '+382': 'me',
    '+385': 'hr',
    '+386': 'si',
    '+387': 'ba',
    '+389': 'mk',
    '+420': 'cz',
    '+421': 'sk',
    '+423': 'li',
    '+501': 'bz',
    '+502': 'gt',
    '+503': 'sv',
    '+504': 'hn',
    '+505': 'ni',
    '+506': 'cr',
    '+507': 'pa',
    '+509': 'ht',
    '+591': 'bo',
    '+592': 'gy',
    '+593': 'ec',
    '+595': 'py',
    '+597': 'sr',
    '+598': 'uy',
    '+670': 'tl',
    '+673': 'bn',
    '+674': 'nr',
    '+675': 'pg',
    '+676': 'to',
    '+677': 'sb',
    '+678': 'vu',
    '+679': 'fj',
    '+680': 'pw',
    '+685': 'ws',
    '+686': 'ki',
    '+688': 'tv',
    '+691': 'fm',
    '+692': 'mh',
    '+850': 'kp',
    '+855': 'kh',
    '+856': 'la',
    '+880': 'bd',
    '+960': 'mv',
    '+961': 'lb',
    '+962': 'jo',
    '+963': 'sy',
    '+964': 'iq',
    '+965': 'kw',
    '+966': 'sa',
    '+967': 'ye',
    '+968': 'om',
    '+970': 'ps',
    '+971': 'ae',
    '+972': 'il',
    '+973': 'bh',
    '+974': 'qa',
    '+975': 'bt',
    '+976': 'mn',
    '+977': 'np',
    '+992': 'tj',
    '+993': 'tm',
    '+994': 'az',
    '+995': 'ge',
    '+996': 'kg',
    '+998': 'uz'
  }
  return map[code] || 'in'
}

// Form options imported from src/data/formdata.js

export default function Login({ user, onLoginSuccess }) {
  const navigate = useNavigate()

  // Tab control: 'login' | 'register'
  const [activeTab, setActiveTab] = useState('login')

  // Common states
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Show/Hide password toggles
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showRegPassword, setShowRegPassword] = useState(false)
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false)

  // Login form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  // Registration form states
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    gender: '',
    dob: '',
    phoneCode: '+91',
    phone: '',
    secondaryPhoneCode: '+91',
    secondaryPhone: '',
    whatsappCode: '+91',
    whatsapp: '',
    userType: '',
    bloodGroup: '',
    password: '',
    confirmPassword: '',
    admissionYear: '',
    passoutYear: '',
    diplomaNotCompleted: false,
    jobTitle: '',
    company: '',
    linkedin: '',
    dom: '',
    degrees: [],
    profession: '',
    companyWebsite: '',

    // New/replaced fields:
    city: '',
    state: '',
    country: '',
    certifications: [],
    productServices: [],
    otherProductServices: '',
    department: '',
    division: '',
    workingSince: '',
    workingSinceMonth: '',
    workingSinceYear: '',
    companyCity: '',
    companyState: '',
    companyCountry: '',
    lastPromotionDesignation: '',
    lastPromotionMonth: '',
    lastPromotionYear: '',
    awards: [],
    hobbies: [],
    otherHobbies: '',
    workExperience: '',
    consentEmail: false,
    consentPhone: false,
    consentWhatsapp: false,
    cvBase64: '',
    cvFileName: ''
  })

  const [showPhoneModal, setShowPhoneModal] = useState(false)
  const [verifyPhoneInput, setVerifyPhoneInput] = useState('')
  const [verifyPhoneError, setVerifyPhoneError] = useState('')

  const [showRegSuccessModal, setShowRegSuccessModal] = useState(false)
  const [registeredUserObj, setRegisteredUserObj] = useState(null)

  const handleCloseRegSuccessModal = () => {
    if (registeredUserObj) {
      onLoginSuccess(registeredUserObj)
    }
    setShowRegSuccessModal(false)
    setRegisteredUserObj(null)
    navigate('/')
  }

  const [captchaCode, setCaptchaCode] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')
  const canvasRef = useRef(null)

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'
    let code = ''
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaCode(code)
    setCaptchaInput('')
  }

  // Auto-hide general errors after 10 seconds & scroll to top to show error banner
  useEffect(() => {
    if (error) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const timer = setTimeout(() => {
        setError('');
      }, 10000);
      return () => clearTimeout(timer); // Cleanup if the error changes or component unmounts
    }
  }, [error]);

  // Auto-hide phone verification errors after 10 seconds
  useEffect(() => {
    if (verifyPhoneError) {
      const timer = setTimeout(() => {
        setVerifyPhoneError('');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [verifyPhoneError]);

  // Auto-hide success messages after 10 seconds 
  // (Note: Some of your existing success actions redirect the user before this timer finishes)
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setSuccessMessage('');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  // Draw captcha on canvas whenever captchaCode changes
  useEffect(() => {
    if (captchaCode && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background noise
      ctx.fillStyle = '#f3f4f6'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add text styling
      ctx.font = 'bold 24px monospace'
      ctx.textBaseline = 'middle'

      // Draw random lines to distort
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`
        ctx.beginPath()
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
        ctx.stroke()
      }

      // Draw random dots
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`
        ctx.beginPath()
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw the characters with random rotations and colors
      for (let i = 0; i < captchaCode.length; i++) {
        ctx.save()
        const x = 15 + i * 22
        const y = canvas.height / 2 + (Math.random() * 10 - 5)
        const angle = (Math.random() * 30 - 15) * Math.PI / 180
        ctx.translate(x, y)
        ctx.rotate(angle)

        ctx.fillStyle = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`
        ctx.fillText(captchaCode.charAt(i), 0, 0)
        ctx.restore()
      }
    }
  }, [captchaCode])

  // Redirect if already logged in
  useEffect(() => {
    if (user && !showSuccess) {
      navigate('/')
    }
  }, [user, navigate, showSuccess])

  // Initialize CAPTCHA whenever activeTab changes to register (only if not already set)
  useEffect(() => {
    if (activeTab === 'register' && !captchaCode) {
      generateCaptcha()
    }
  }, [activeTab, captchaCode])

  // Clear errors when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setError('')
  }

  // Handle inputs
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const capitalizeWords = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(/\b[a-zA-Z]+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  };

  const handleCvFileChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setError('Only PDF files are allowed for CV upload.')
      e.target.value = ''
      return
    }

    if (file.size > 700 * 1024) {
      setError('PDF file size must be less than 700 KB for direct storage.')
      e.target.value = ''
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setRegisterForm(prev => ({
        ...prev,
        cvBase64: reader.result,
        cvFileName: file.name
      }))
    }
    reader.onerror = () => {
      setError('Failed to read the uploaded PDF file.')
    }
    reader.readAsDataURL(file)
  }

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target
    let cleanValue = ['phone', 'secondaryPhone', 'whatsapp', 'workExperience'].includes(name)
      ? value.replace(/\D/g, '')
      : value;

    if (['firstName', 'middleName', 'lastName'].includes(name) && typeof cleanValue === 'string') {
      cleanValue = capitalizeWords(cleanValue);
    }

    setRegisterForm(prev => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : cleanValue
      }

      // Auto populate state & country when personal city changes
      if (name === 'city' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const { state: autoState, country: autoCountry } = getStateAndCountryByCity(cleanValue);
        if (autoState) updated.state = autoState;
        if (autoCountry) updated.country = autoCountry;
      }

      // Auto populate country when personal state changes
      if (name === 'state' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const autoCountry = getCountryByState(cleanValue);
        if (autoCountry) updated.country = autoCountry;
      }

      // Auto populate state & country when company city changes
      if (name === 'companyCity' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const { state: autoState, country: autoCountry } = getStateAndCountryByCity(cleanValue);
        if (autoState) updated.companyState = autoState;
        if (autoCountry) updated.companyCountry = autoCountry;
      }

      // Auto populate country when company state changes
      if (name === 'companyState' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const autoCountry = getCountryByState(cleanValue);
        if (autoCountry) updated.companyCountry = autoCountry;
      }

      if (name === 'admissionYear' && cleanValue && !prev.diplomaNotCompleted) {
        const parsedYear = parseInt(cleanValue, 10)
        if (!isNaN(parsedYear)) {
          const targetPassout = parsedYear + 3
          if (targetPassout <= 2040) {
            updated.passoutYear = String(targetPassout)
          } else {
            updated.passoutYear = '2040'
          }
        }
      }
      if (name === 'diplomaNotCompleted' && checked) {
        updated.passoutYear = ''
      }
      return updated
    })
  }

  const handleAddDegree = () => {
    setRegisterForm(prev => ({
      ...prev,
      degrees: [...(prev.degrees || []), { degree: '', domain: '' }]
    }))
  }

  const handleRemoveDegree = (index) => {
    setRegisterForm(prev => ({
      ...prev,
      degrees: (prev.degrees || []).filter((_, i) => i !== index)
    }))
  }

  const handleDegreeChange = (index, field, val) => {
    setRegisterForm(prev => {
      const updatedDegrees = [...(prev.degrees || [])]
      updatedDegrees[index] = { ...updatedDegrees[index], [field]: val }
      return {
        ...prev,
        degrees: updatedDegrees
      }
    })
  }

  const handleAddCertification = () => {
    setRegisterForm(prev => ({
      ...prev,
      certifications: [...(prev.certifications || []), { area: '', detail: '' }]
    }))
  }

  const handleRemoveCertification = (index) => {
    setRegisterForm(prev => ({
      ...prev,
      certifications: (prev.certifications || []).filter((_, i) => i !== index)
    }))
  }

  const handleCertificationChange = (index, field, val) => {
    setRegisterForm(prev => {
      const updated = [...(prev.certifications || [])]
      updated[index] = { ...updated[index], [field]: val }
      return {
        ...prev,
        certifications: updated
      }
    })
  }

  const handleMultiSelectChange = (name, val) => {
    setRegisterForm(prev => {
      const current = prev[name] || []
      const updated = current.includes(val)
        ? current.filter(item => item !== val)
        : [...current, val]
      return {
        ...prev,
        [name]: updated
      }
    })
  }

  const handleAddAward = () => {
    setRegisterForm(prev => ({
      ...prev,
      awards: [...(prev.awards || []), '']
    }))
  }

  const handleRemoveAward = (index) => {
    setRegisterForm(prev => ({
      ...prev,
      awards: (prev.awards || []).filter((_, i) => i !== index)
    }))
  }

  const handleAwardChange = (index, val) => {
    setRegisterForm(prev => {
      const updated = [...(prev.awards || [])]
      updated[index] = val
      return {
        ...prev,
        awards: updated
      }
    })
  }

  // Login Submit Handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (isFirebaseConfigured) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
        const user = userCredential.user

        // Retrieve user profile data from Firestore
        const userDocRef = doc(db, 'users', user.uid)
        const userDocSnap = await getDoc(userDocRef)

        let userToLogin = null
        if (userDocSnap.exists()) {
          const profileData = userDocSnap.data()
          const parsedPhone = parsePhoneNumber(profileData.phone)
          const parsedSecPhone = parsePhoneNumber(profileData.secondaryPhone)
          const parsedWhatsapp = parsePhoneNumber(profileData.whatsapp)

          // Let's parse productServices
          let loadedProductServices = [];
          if (Array.isArray(profileData.productServices)) {
            loadedProductServices = profileData.productServices;
          } else if (profileData.productServices) {
            loadedProductServices = [profileData.productServices];
          }

          // Let's parse certifications
          let loadedCertifications = [];
          if (Array.isArray(profileData.certifications)) {
            loadedCertifications = profileData.certifications;
          } else if (profileData.areaOfCertification) {
            loadedCertifications = [{ area: profileData.areaOfCertification, detail: '' }];
          }

          userToLogin = {
            uid: user.uid,
            name: profileData.name || user.displayName || 'Alumni Member',
            email: user.email,
            dob: profileData.dob || '',
            middleName: profileData.middleName || '',
            userType: profileData.userType || '',
            bloodGroup: profileData.bloodGroup || '',
            phoneCode: parsedPhone.code,
            phone: parsedPhone.number,
            secondaryPhoneCode: parsedSecPhone.code,
            secondaryPhone: parsedSecPhone.number,
            whatsappCode: parsedWhatsapp.code,
            whatsapp: parsedWhatsapp.number,
            batch: profileData.batch || profileData.passoutYear || '',
            passoutYear: profileData.passoutYear || profileData.batch || '',
            degree: profileData.degree || '',
            jobTitle: profileData.jobTitle || '',
            company: profileData.company || '',
            linkedin: profileData.linkedin || '',
            verification_status: profileData.verification_status !== undefined ? profileData.verification_status : false,
            account_type: profileData.account_type || 'alumni',
            // New fields
            city: profileData.city || '',
            state: profileData.state || '',
            country: profileData.country || '',
            certifications: loadedCertifications,
            productServices: loadedProductServices,
            otherProductServices: profileData.otherProductServices || '',
            department: profileData.department || '',
            division: profileData.division || '',
            workingSince: profileData.workingSince || '',
            workingSinceMonth: profileData.workingSinceMonth || '',
            workingSinceYear: profileData.workingSinceYear || '',
            companyCity: profileData.companyCity || '',
            companyState: profileData.companyState || '',
            companyCountry: profileData.companyCountry || '',
            lastPromotionDesignation: profileData.lastPromotionDesignation || '',
            lastPromotionMonth: profileData.lastPromotionMonth || '',
            lastPromotionYear: profileData.lastPromotionYear || '',
            awards: profileData.awards || [],
            hobbies: profileData.hobbies || []
          }
        } else {
          userToLogin = {
            uid: user.uid,
            name: user.displayName || 'Alumni Member',
            email: user.email,
            dob: '',
            middleName: '',
            userType: '',
            bloodGroup: '',
            phoneCode: '+91',
            phone: '',
            secondaryPhoneCode: '+91',
            secondaryPhone: '',
            whatsappCode: '+91',
            whatsapp: '',
            batch: '',
            degree: '',
            jobTitle: '',
            company: '',
            linkedin: '',
            verification_status: false,
            account_type: 'alumni',
            // New fields
            city: '',
            state: '',
            country: '',
            certifications: [],
            productServices: [],
            department: '',
            division: '',
            workingSince: '',
            workingSinceMonth: '',
            workingSinceYear: '',
            companyCity: '',
            companyState: '',
            companyCountry: '',
            lastPromotionDesignation: '',
            lastPromotionMonth: '',
            lastPromotionYear: '',
            awards: [],
            hobbies: []
          }
        }

        setSuccessMessage(`Welcome back, ${userToLogin.name.split(' ')[0]}! Redirecting to Alumni Portal...`)
        setShowSuccess(true)
        setLoading(false)

        setTimeout(() => {
          onLoginSuccess(userToLogin)
          navigate('/')
        }, 1500)
      } catch (err) {
        setLoading(false)
        console.error("Firebase Login Error:", err)
        if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
          setError('Invalid email address or password.')
        } else if (err.code === 'auth/invalid-email') {
          setError('Please enter a valid email address.')
        } else {
          setError(err.message || 'An error occurred during sign in. Please try again.')
        }
      }
    } else {
      // Fallback Mock Authentication
      setTimeout(() => {
        const registeredUser = localStorage.getItem('mockRegisteredAlumni')
        let matchedUser = null

        if (registeredUser) {
          const parsed = JSON.parse(registeredUser)
          if (parsed.email === loginForm.email && loginForm.password === 'password123') {
            matchedUser = parsed
          } else if (parsed.email === loginForm.email && parsed.password === loginForm.password) {
            matchedUser = parsed
          }
        }

        const defaultMockAlumni = [
          { uid: 'mock-uid-sid', email: 'alumni@dft.edu', name: 'Dr. Siddharth Patel', batch: '1998', degree: 'Ph.D. Textile', password: 'password123' },
          { uid: 'mock-uid-john', email: 'john.doe@example.com', name: 'John Doe', batch: '2015', degree: 'B.Tech Textile', password: 'password123' }
        ]

        const defaultMatch = defaultMockAlumni.find(u => u.email === loginForm.email && u.password === loginForm.password)
        const userToLogin = matchedUser || defaultMatch

        if (userToLogin) {
          setSuccessMessage(`Welcome back, ${userToLogin.name.split(' ')[0]}! Redirecting to Alumni Portal... (Mock Mode)`)
          setShowSuccess(true)
          setLoading(false)

          setTimeout(() => {
            const parsedPhone = parsePhoneNumber(userToLogin.phone)
            const parsedSecPhone = parsePhoneNumber(userToLogin.secondaryPhone)
            const parsedWhatsapp = parsePhoneNumber(userToLogin.whatsapp)

            onLoginSuccess({
              uid: userToLogin.uid || 'mock-uid-unspecified',
              name: userToLogin.name,
              email: userToLogin.email,
              middleName: userToLogin.middleName || '',
              userType: userToLogin.userType || '',
              bloodGroup: userToLogin.bloodGroup || '',
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              batch: userToLogin.batch || userToLogin.passoutYear || '',
              passoutYear: userToLogin.passoutYear || userToLogin.batch || '',
              degree: userToLogin.degree,
              linkedin: userToLogin.linkedin || '',
              verification_status: userToLogin.verification_status !== undefined ? userToLogin.verification_status : false,
              account_type: userToLogin.account_type || 'alumni',
              otherProductServices: userToLogin.otherProductServices || ''
            })
            navigate('/')
          }, 1500)
        } else {
          setLoading(false)
          setError('Invalid email address or password. (Hint: Use alumni@dft.edu / password123)')
        }
      }, 1200)
    }
  }

  // Registration Submit Handler
  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validations
    if (!registerForm.middleName.trim()) {
      setError('Middle name is compulsory.')
      return
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (registerForm.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (!registerForm.phone.trim()) {
      setError('Primary Contact number is compulsory.')
      return
    }

    if (!registerForm.whatsapp.trim()) {
      setError('WhatsApp number is compulsory.')
      return
    }

    if (!registerForm.gender) {
      setError('Gender is compulsory.')
      return
    }

    if (!registerForm.consentEmail && !registerForm.consentPhone && !registerForm.consentWhatsapp) {
      setError('Please select at least one detail (Email ID, Mobile Number, or WhatsApp Number) to show on the Alumni Portal.')
      return
    }

    if (!registerForm.userType) {
      setError('Please select whether you are a DFT Alumni or Student.')
      return
    }

    if (captchaInput !== captchaCode) {
      setError('Incorrect security verification code. Please try again.')
      return
    }

    const admYear = parseInt(registerForm.admissionYear, 10)
    const passYear = parseInt(registerForm.passoutYear, 10)
    const currentYear = new Date().getFullYear()

    if (isNaN(admYear) || admYear < 1970 || admYear > currentYear + 6) {
      setError(`Please enter a valid DFT Admission Year (1970 - ${currentYear + 6}).`)
      return
    }

    if (!registerForm.diplomaNotCompleted) {
      if (isNaN(passYear) || passYear < 1970 || passYear > currentYear + 6) {
        setError(`Please enter a valid DFT Passout Year (1970 - ${currentYear + 6}).`)
        return
      }

      if (admYear > passYear) {
        setError('DFT Admission Year cannot be after DFT Passout Year.')
        return
      }
    }

    setLoading(true)

    const cleanFirstName = capitalizeWords(registerForm.firstName.trim());
    const cleanMiddleName = capitalizeWords(registerForm.middleName.trim());
    const cleanLastName = capitalizeWords(registerForm.lastName.trim());
    const cleanFullName = [cleanFirstName, cleanMiddleName, cleanLastName].filter(Boolean).join(' ');

    if (isFirebaseConfigured) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)
        const user = userCredential.user

        // Save additional profile details to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          firstName: cleanFirstName,
          middleName: cleanMiddleName,
          lastName: cleanLastName,
          name: cleanFullName,
          email: registerForm.email,
          gender: registerForm.gender || '',
          dob: registerForm.dob,
          dom: registerForm.dom || '',
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          diplomaNotCompleted: registerForm.diplomaNotCompleted || false,
          degrees: registerForm.degrees || [],
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          linkedin: registerForm.linkedin || '',
          profession: registerForm.profession || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',
          createdAt: new Date().toISOString(),

          // New fields
          city: registerForm.city || '',
          state: registerForm.state || '',
          country: registerForm.country || '',
          certifications: registerForm.certifications || [],
          productServices: registerForm.productServices || [],
          otherProductServices: registerForm.productServices.includes('Others') ? registerForm.otherProductServices || '' : '',
          department: registerForm.department || '',
          division: registerForm.division || '',
          workingSinceMonth: registerForm.workingSinceMonth || '',
          workingSinceYear: registerForm.workingSinceYear || '',
          workingSince: (registerForm.workingSinceMonth && registerForm.workingSinceYear) ? `${registerForm.workingSinceMonth} ${registerForm.workingSinceYear}` : (registerForm.workingSince || ''),
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || [],
          otherHobbies: registerForm.hobbies.includes('Others') ? registerForm.otherHobbies || '' : '',
          workExperience: registerForm.workExperience || '',
          consentEmail: registerForm.consentEmail || false,
          consentPhone: registerForm.consentPhone || false,
          consentWhatsapp: registerForm.consentWhatsapp || false,
          cvBase64: registerForm.cvBase64 || '',
          cvFileName: registerForm.cvFileName || ''
        })

        if (registerForm.company && registerForm.company.trim()) {
          try {
            await setDoc(doc(db, 'companies', registerForm.company.trim().toLowerCase()), {
              name: registerForm.company.trim()
            }, { merge: true })
          } catch (compErr) {
            console.warn('Failed to save company name to collection:', compErr)
          }
        }

        // Write the password-reset lookup doc (hashes only, no plaintext phone data)
        try {
          const emailHashKey = await hashEmail(registerForm.email)
          const phoneHash = await hashPhoneDigits(`${registerForm.phoneCode} ${registerForm.phone}`)
          const secPhoneHash = registerForm.secondaryPhone
            ? await hashPhoneDigits(`${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`)
            : ''
          const whatsappHash = await hashPhoneDigits(`${registerForm.whatsappCode} ${registerForm.whatsapp}`)

          await setDoc(doc(db, 'passwordResetLookup', emailHashKey), {
            uid: user.uid,
            phoneHash: phoneHash || '',
            secPhoneHash: secPhoneHash || '',
            whatsappHash: whatsappHash || ''
          })
        } catch (lookupErr) {
          console.warn('Failed to save passwordResetLookup doc:', lookupErr)
        }

        const newUser = {
          uid: user.uid,
          firstName: cleanFirstName,
          middleName: cleanMiddleName,
          lastName: cleanLastName,
          name: cleanFullName,
          email: registerForm.email,
          gender: registerForm.gender || '',
          dob: registerForm.dob,
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          diplomaNotCompleted: registerForm.diplomaNotCompleted || false,
          batch: registerForm.passoutYear,
          degrees: registerForm.degrees || [],
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          linkedin: registerForm.linkedin || '',
          dom: registerForm.dom || '',
          profession: registerForm.profession || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',

          // New fields
          city: registerForm.city || '',
          state: registerForm.state || '',
          country: registerForm.country || '',
          certifications: registerForm.certifications || [],
          productServices: registerForm.productServices || [],
          otherProductServices: registerForm.productServices.includes('Others') ? registerForm.otherProductServices || '' : '',
          department: registerForm.department || '',
          division: registerForm.division || '',
          workingSinceMonth: registerForm.workingSinceMonth || '',
          workingSinceYear: registerForm.workingSinceYear || '',
          workingSince: (registerForm.workingSinceMonth && registerForm.workingSinceYear) ? `${registerForm.workingSinceMonth} ${registerForm.workingSinceYear}` : (registerForm.workingSince || ''),
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || [],
          otherHobbies: registerForm.hobbies.includes('Others') ? registerForm.otherHobbies || '' : '',
          workExperience: registerForm.workExperience || '',
          consentEmail: registerForm.consentEmail || false,
          consentPhone: registerForm.consentPhone || false,
          consentWhatsapp: registerForm.consentWhatsapp || false,
          cvBase64: registerForm.cvBase64 || '',
          cvFileName: registerForm.cvFileName || ''
        }

        setRegisteredUserObj(newUser)
        setShowRegSuccessModal(true)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.error("Firebase Registration Error:", err)
        if (err.code === 'auth/email-already-in-use') {
          setError('An account with this email address already exists.')
        } else if (err.code === 'auth/invalid-email') {
          setError('Please enter a valid email address.')
        } else if (err.code === 'permission-denied' || (err.message && err.message.toLowerCase().includes('permission'))) {
          setError('Database permission denied. Please verify your Firestore Security Rules in Firebase Console.')
        } else {
          setError(err.message || 'An error occurred during registration. Please try again.')
        }
      }
    } else {
      // Fallback Mock Registration
      setTimeout(() => {
        const newUser = {
          uid: 'mock-uid-registered',
          firstName: cleanFirstName,
          middleName: cleanMiddleName,
          lastName: cleanLastName,
          name: cleanFullName,
          email: registerForm.email,
          dob: registerForm.dob,
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          password: registerForm.password,
          middleName: registerForm.middleName,
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          diplomaNotCompleted: registerForm.diplomaNotCompleted || false,
          degrees: registerForm.degrees || [],
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          linkedin: registerForm.linkedin || '',
          dom: registerForm.dom || '',
          profession: registerForm.profession || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',

          // New fields
          city: registerForm.city || '',
          state: registerForm.state || '',
          country: registerForm.country || '',
          certifications: registerForm.certifications || [],
          productServices: registerForm.productServices || [],
          otherProductServices: registerForm.productServices.includes('Others') ? registerForm.otherProductServices || '' : '',
          department: registerForm.department || '',
          division: registerForm.division || '',
          workingSinceMonth: registerForm.workingSinceMonth || '',
          workingSinceYear: registerForm.workingSinceYear || '',
          workingSince: (registerForm.workingSinceMonth && registerForm.workingSinceYear) ? `${registerForm.workingSinceMonth} ${registerForm.workingSinceYear}` : (registerForm.workingSince || ''),
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || [],
          consentEmail: registerForm.consentEmail || false,
          consentPhone: registerForm.consentPhone || false,
          consentWhatsapp: registerForm.consentWhatsapp || false
        }

        localStorage.setItem('mockRegisteredAlumni', JSON.stringify(newUser))

        const mockCreatedUserObj = {
          uid: newUser.uid,
          name: newUser.name,
          email: newUser.email,
          dob: newUser.dob,
          phone: newUser.phone,
          secondaryPhone: newUser.secondaryPhone,
          whatsapp: newUser.whatsapp,
          middleName: newUser.middleName,
          userType: newUser.userType,
          bloodGroup: newUser.bloodGroup,
          admissionYear: newUser.admissionYear,
          passoutYear: newUser.passoutYear,
          batch: newUser.passoutYear,
          degrees: newUser.degrees || [],
          linkedin: newUser.linkedin || '',
          dom: newUser.dom || '',
          profession: newUser.profession || '',
          companyWebsite: newUser.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',

          // New fields
          city: newUser.city || '',
          state: newUser.state || '',
          country: newUser.country || '',
          certifications: newUser.certifications || [],
          productServices: newUser.productServices || [],
          otherProductServices: newUser.otherProductServices || '',
          department: newUser.department || '',
          division: newUser.division || '',
          workingSince: newUser.workingSince || '',
          companyCity: newUser.companyCity || '',
          companyState: newUser.companyState || '',
          companyCountry: newUser.companyCountry || '',
          lastPromotionDesignation: newUser.lastPromotionDesignation || '',
          lastPromotionMonth: newUser.lastPromotionMonth || '',
          lastPromotionYear: newUser.lastPromotionYear || '',
          awards: newUser.awards || [],
          hobbies: newUser.hobbies || []
        }

        setRegisteredUserObj(mockCreatedUserObj)
        setShowRegSuccessModal(true)
        setLoading(false)
      }, 1500)
    }
  }

  // Forgot Password Handler
  const handleForgotPassword = async () => {
    if (!loginForm.email) {
      setError('Please enter your email address in the Sign In form first.')
      return
    }
    setError('')
    setVerifyPhoneInput('')
    setVerifyPhoneError('')
    setShowPhoneModal(true)
  }

  // Verify Phone and send password reset link
  const handleVerifyAndResetPassword = async (e) => {
    if (e) e.preventDefault()
    setVerifyPhoneError('')

    if (!verifyPhoneInput.trim()) {
      setVerifyPhoneError('Please enter a phone number.')
      return
    }

    setLoading(true)

    const inputDigits = verifyPhoneInput.replace(/\D/g, '')
    if (!inputDigits) {
      setVerifyPhoneError('Please enter a valid phone number with digits.')
      setLoading(false)
      return
    }

    if (isFirebaseConfigured) {
      try {
        const emailHashKey = await hashEmail(loginForm.email)
        const lookupSnap = await getDoc(doc(db, 'passwordResetLookup', emailHashKey))

        if (!lookupSnap.exists()) {
          setVerifyPhoneError('No account found with that email/phone combination.')
          setLoading(false)
          return
        }

        const lookupData = lookupSnap.data()
        const inputPhoneHash = await hashPhoneDigits(verifyPhoneInput)

        const isMatch =
          (lookupData.phoneHash && lookupData.phoneHash === inputPhoneHash) ||
          (lookupData.secPhoneHash && lookupData.secPhoneHash === inputPhoneHash) ||
          (lookupData.whatsappHash && lookupData.whatsappHash === inputPhoneHash)

        if (!isMatch) {
          setVerifyPhoneError('No account found with that email/phone combination.')
          setLoading(false)
          return
        }

        // Match found! Send password reset email
        await sendPasswordResetEmail(auth, loginForm.email.trim())
        setShowPhoneModal(false)
        setError('')
        setSuccessMessage(`Password reset link sent to ${loginForm.email}! Check your inbox.`)
        setShowSuccess(true)
        setLoading(false)
        setTimeout(() => setShowSuccess(false), 4000)
      } catch (err) {
        setLoading(false)
        console.error("Firebase Password Reset/Verify Error:", err)
        if (err.code === 'auth/invalid-email') {
          setVerifyPhoneError('Please enter a valid email address.')
        } else {
          setVerifyPhoneError(err.message || 'Error processing request.')
        }
      }
    } else {
      // Fallback Mock Password Reset verification
      setTimeout(() => {
        const mockRegistered = localStorage.getItem('mockRegisteredAlumni')
        if (mockRegistered) {
          const parsed = JSON.parse(mockRegistered)
          if (parsed.email === loginForm.email.trim()) {
            const storedPhoneDigits = parsed.phone ? parsed.phone.replace(/\D/g, '') : ''
            const storedSecPhoneDigits = parsed.secondaryPhone ? parsed.secondaryPhone.replace(/\D/g, '') : ''
            const storedWhatsappDigits = parsed.whatsapp ? parsed.whatsapp.replace(/\D/g, '') : ''

            const isMatch = (
              (storedPhoneDigits && (storedPhoneDigits.endsWith(inputDigits) || inputDigits.endsWith(storedPhoneDigits))) ||
              (storedSecPhoneDigits && (storedSecPhoneDigits.endsWith(inputDigits) || inputDigits.endsWith(storedSecPhoneDigits))) ||
              (storedWhatsappDigits && (storedWhatsappDigits.endsWith(inputDigits) || inputDigits.endsWith(storedWhatsappDigits)))
            )

            if (!isMatch) {
              setVerifyPhoneError('Provided phone number does not match our mock records.')
              setLoading(false)
              return
            }

            // Match found! Mock success
            setShowPhoneModal(false)
            setSuccessMessage(`Password reset link has been mock-sent to ${loginForm.email}.`)
            setShowSuccess(true)
            setLoading(false)
            setTimeout(() => setShowSuccess(false), 4000)
          } else {
            setVerifyPhoneError('No account found with this email address in Mock records.')
            setLoading(false)
          }
        } else {
          setVerifyPhoneError('No accounts registered in Mock local storage.')
          setLoading(false)
        }
      }, 1000)
    }
  }

  return (
    <div className="login-page">
      {/* Background Decorative Blobs */}
      <div className="login-page__decor-circle login-page__decor-circle--1"></div>
      <div className="login-page__decor-circle login-page__decor-circle--2"></div>

      <div className="login-container">
        {/* Back Button */}
        <button className="login-container__back-btn" onClick={() => navigate('/')}>
          <FaHome /> <span className="login-container__back-btn-text">BACK TO HOME</span>
        </button>

        <div className="login-card">

          {/* Left: Brand Column (Visible on Desktop/Tablet, Collapses on Mobile) */}
          <div className="login-card__brand-panel">
            <div className="login-card__brand-overlay"></div>
            <div className="login-card__brand-content">
              <div className="login-card__brand-logo-wrap">
                <img src={alumniLogo} alt="Alumni Logo" className="login-card__brand-logo" />
              </div>
              <h1 className="login-card__brand-title display-title">Alumni Portal</h1>
              <div className="login-card__brand-divider"></div>
              <p className="login-card__brand-tagline">TOGETHER · UNITED · STRONGER</p>
              <p className="login-card__brand-desc">
                Connecting and empowering the DFT Alumni family worldwide. Access the Portal to connect with batchmates, participate in meets, and grow together.
              </p>
            </div>
          </div>

          {/* Right: Form Column */}
          <div className="login-card__form-panel">

            {/* Compact Header for Mobile/Portrait Screens (Hidden on Desktop) */}
            <div className="login-card__mobile-brand">
              <div className="login-card__mobile-logo-wrap">
                <img src={alumniLogo} alt="Alumni Logo" className="login-card__mobile-logo" />
              </div>
              <div>
                <h2 className="login-card__mobile-title">Alumni Portal</h2>
                <p className="login-card__mobile-tagline">Together · United · Stronger</p>
              </div>
            </div>

            {/* Sliding Tab Control */}
            <div className="login-tabs">
              <button
                className={`login-tabs__btn ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => handleTabChange('login')}
                disabled={loading || showSuccess}
              >
                Sign In
              </button>
              <button
                className={`login-tabs__btn ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => handleTabChange('register')}
                disabled={loading || showSuccess}
              >
                Create Account
              </button>
              <div className={`login-tabs__indicator ${activeTab === 'register' ? 'slide' : ''}`}></div>
            </div>

            {/* RESTORED: Success Animation Overlay */}
            {showSuccess && (
              <div className="login-success-overlay">
                <div className="login-success-overlay__content">
                  <FaCheckCircle className="success-icon-anim" />
                  <h3 className="display-title">SUCCESSFUL</h3>
                  <p>{successMessage}</p>
                </div>
              </div>
            )}

            {/* Card Body containing Form */}
            <div className="login-card__body">

              {error && (
                <div className="login-error-banner">
                  <FaExclamationTriangle className="login-error-banner__icon" />
                  <span>{error}</span>
                </div>
              )}

              {activeTab === 'login' ? (
                /* SIGN IN VIEW */
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <div className="login-field">
                    <label htmlFor="login-email">Email Address <span className="login-field__required">*</span></label>
                    <div className="login-field__input-wrap">
                      <FaEnvelope className="login-field__icon" />
                      <input
                        id="login-email"
                        type="email"
                        name="email"
                        placeholder={PLACEHOLDERS.loginEmail}
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="login-field">
                    <label htmlFor="login-password">Password <span className="login-field__required">*</span></label>
                    <div className="login-field__input-wrap">
                      <FaLock className="login-field__icon" />
                      <input
                        id="login-password"
                        type={showLoginPassword ? "text" : "password"}
                        name="password"
                        placeholder={PLACEHOLDERS.loginPassword}
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        className="login-field__toggle-pw"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        tabIndex="-1"
                      >
                        {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="login-form__actions">
                    <label className="login-checkbox">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={loginForm.rememberMe}
                        onChange={handleLoginChange}
                        disabled={loading}
                      />
                      <span className="login-checkbox__box"></span>
                      <span className="login-checkbox__label">Remember me</span>
                    </label>

                    <button
                      type="button"
                      className="login-forgot-link"
                      onClick={handleForgotPassword}
                      disabled={loading}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className={`login-submit-btn ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="login-spinner"></span>
                    ) : (
                      <>
                        SIGN IN <FaArrowRight />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* REGISTRATION VIEW */
                <form className="login-form" onSubmit={handleRegisterSubmit}>

                  <p style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '14px', fontWeight: '500' }}>
                    Fields marked with <span style={{ color: 'var(--signal-red)', fontWeight: 'bold' }}>*</span> are mandatory
                  </p>
                  <h4 className="login-section-title">Personal Details</h4>
                  <div className="login-form__grid-3">
                    <div className="login-field">
                      <label htmlFor="reg-first-name">First Name <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <input
                          id="reg-first-name"
                          type="text"
                          name="firstName"
                          placeholder={PLACEHOLDERS.firstName}
                          value={registerForm.firstName}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-middle-name">Middle Name <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <input
                          id="reg-middle-name"
                          type="text"
                          name="middleName"
                          placeholder={PLACEHOLDERS.middleName}
                          value={registerForm.middleName}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-last-name">Last Name <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <input
                          id="reg-last-name"
                          type="text"
                          name="lastName"
                          placeholder={PLACEHOLDERS.lastName}
                          value={registerForm.lastName}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-email">Email Address <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaEnvelope className="login-field__icon" />
                        <input
                          id="reg-email"
                          type="email"
                          name="email"
                          placeholder={PLACEHOLDERS.regEmail}
                          value={registerForm.email}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-gender">Gender <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <select
                          id="reg-gender"
                          name="gender"
                          value={registerForm.gender}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Select Gender</option>
                          {GENDER_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-bloodgroup">Blood Group</label>
                      <div className="login-field__input-wrap">
                        <FaHeart className="login-field__icon" />
                        <select
                          id="reg-bloodgroup"
                          name="bloodGroup"
                          value={registerForm.bloodGroup}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          <option value="">Select Blood Group</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-dob">Date of Birth <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <input
                          id="reg-dob"
                          type="date"
                          name="dob"
                          value={registerForm.dob}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-dom">Date of Marriage</label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <input
                          id="reg-dom"
                          type="date"
                          name="dom"
                          value={registerForm.dom}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field" style={{ visibility: 'hidden' }}></div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-phone">Primary Contact Number <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.phoneCode)} login-field__icon`}></span>

                        {/* ADD THIS SPAN */}
                        <span className="phone-selected-text">{registerForm.phoneCode}</span>

                        <select
                          className="phone-country-select"
                          name="phoneCode"
                          value={registerForm.phoneCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-phone"
                          type="tel"
                          name="phone"
                          placeholder={PLACEHOLDERS.phone}
                          value={registerForm.phone}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-sec-phone">Secondary Contact Number</label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.secondaryPhoneCode)} login-field__icon`}></span>

                        {/* ADD THIS SPAN */}
                        <span className="phone-selected-text">{registerForm.secondaryPhoneCode}</span>

                        <select
                          className="phone-country-select"
                          name="secondaryPhoneCode"
                          value={registerForm.secondaryPhoneCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-sec-phone"
                          type="tel"
                          name="secondaryPhone"
                          placeholder={PLACEHOLDERS.secondaryPhone}
                          value={registerForm.secondaryPhone}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-whatsapp">WhatsApp Number</label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.whatsappCode)} login-field__icon`}></span>

                        {/* ADD THIS SPAN */}
                        <span className="phone-selected-text">{registerForm.whatsappCode}</span>

                        <select
                          className="phone-country-select"
                          name="whatsappCode"
                          value={registerForm.whatsappCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-whatsapp"
                          type="tel"
                          name="whatsapp"
                          placeholder={PLACEHOLDERS.whatsapp}
                          value={registerForm.whatsapp}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field" style={{ visibility: 'hidden' }}></div>
                  </div>

                  <div className="login-form__grid-3" style={{ marginTop: '15px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-city">Native (City)</label>
                      <CityAutocomplete
                        id="reg-city"
                        name="city"
                        placeholder={PLACEHOLDERS.city}
                        value={registerForm.city}
                        state={registerForm.state}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-state">Native (State)</label>
                      <StateAutocomplete
                        id="reg-state"
                        name="state"
                        placeholder={PLACEHOLDERS.state}
                        value={registerForm.state}
                        country={registerForm.country}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-country">Native (Country)</label>
                      <CountryAutocomplete
                        id="reg-country"
                        name="country"
                        placeholder={PLACEHOLDERS.country}
                        value={registerForm.country}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                  </div>

                  <h4 className="login-section-title" style={{ marginTop: '20px' }}>Academic Details</h4>
                  <div className="login-form__grid">
                    <div className="login-field login-field--full">
                      <label htmlFor="reg-usertype">Are you DFT Alumni or Student <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <select
                          id="reg-usertype"
                          name="userType"
                          value={registerForm.userType}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Select Option</option>
                          <option value="Alumni">DFT Alumni</option>
                          <option value="Student">Student</option>
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-admission">DFT Admission Year <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <select
                          id="reg-admission"
                          name="admissionYear"
                          value={registerForm.admissionYear}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Select Year</option>
                          {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-passout">
                        DFT Passout Year
                        {!registerForm.diplomaNotCompleted && <span className="login-field__required"> *</span>}
                      </label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <select
                          id="reg-passout"
                          name="passoutYear"
                          value={registerForm.passoutYear}
                          onChange={handleRegisterChange}
                          required={!registerForm.diplomaNotCompleted}
                          disabled={loading || registerForm.diplomaNotCompleted}
                        >
                          <option value="">Select Year</option>
                          {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>

                      <label className="login-checkbox" style={{ marginTop: '10px' }}>
                        <input
                          type="checkbox"
                          name="diplomaNotCompleted"
                          checked={registerForm.diplomaNotCompleted}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label">
                          I have not yet completed my diploma / Passout Year is not applicable
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Previous Academic Details list */}
                  {((registerForm.degrees || []).length > 0) && (
                    <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                        Previous Academic Details
                      </label>
                      {(registerForm.degrees || []).map((deg, index) => (
                        <div key={index} className="previous-degree-row">
                          <div className="login-field">
                            <label htmlFor={`reg-deg-title-${index}`}>Degree <span className="login-field__required">*</span></label>
                            <div className="login-field__input-wrap">
                              <FaGraduationCap className="login-field__icon" />
                              <select
                                id={`reg-deg-title-${index}`}
                                name="degree"
                                value={deg.degree}
                                onChange={(e) => handleDegreeChange(index, 'degree', e.target.value)}
                                required
                                disabled={loading}
                              >
                                <option value="">Select Degree</option>
                                {DEGREE_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
                              </select>
                            </div>
                          </div>

                          <div className="login-field">
                            <label htmlFor={`reg-deg-domain-${index}`}>Domain <span className="login-field__required">*</span></label>
                            <div className="login-field__input-wrap">
                              <FaGraduationCap className="login-field__icon" />
                              <input
                                id={`reg-deg-domain-${index}`}
                                type="text"
                                placeholder={PLACEHOLDERS.degreeDomain}
                                value={deg.domain}
                                onChange={(e) => handleDegreeChange(index, 'domain', e.target.value)}
                                required
                                disabled={loading}
                              />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveDegree(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '100%',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)'
                            }}
                            title="Remove Degree"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Degree Button */}
                  <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-start' }}>
                    <button
                      type="button"
                      onClick={handleAddDegree}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Degree
                    </button>
                  </div>

                  <h4 className="login-section-title" style={{ marginTop: '20px' }}>Professional Details</h4>
                  <div className="login-form__grid">
                    <div className="login-field login-field--full">
                      <label htmlFor="reg-profession">Profession</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <select
                          id="reg-profession"
                          name="profession"
                          value={registerForm.profession}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          <option value="">Select Profession</option>
                          <option value="Business">Business</option>
                          <option value="Job">Job</option>
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-work-experience">Total Work Experience (Years)</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <input
                          id="reg-work-experience"
                          type="text"
                          inputMode="numeric"
                          name="workExperience"
                          placeholder={PLACEHOLDERS.workExperience}
                          value={registerForm.workExperience}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-linkedin">LinkedIn Profile Link</label>
                      <div className="login-field__input-wrap">
                        <FaLinkedin className="login-field__icon" style={{ color: '#0077b5' }} />
                        <input
                          id="reg-linkedin"
                          type="text"
                          name="linkedin"
                          placeholder={PLACEHOLDERS.linkedin}
                          value={registerForm.linkedin}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field login-field--full">
                      <label htmlFor="reg-cv">Upload Resume / CV (PDF - Max 700 KB)</label>
                      <div className="login-field__input-wrap">
                        <FaFilePdf className="login-field__icon" style={{ color: '#dc2626' }} />
                        <input
                          id="reg-cv"
                          type="file"
                          accept=".pdf,application/pdf"
                          onChange={handleCvFileChange}
                          disabled={loading}
                        />
                      </div>
                      {registerForm.cvFileName && (
                        <span style={{ fontSize: '0.78rem', color: 'var(--navy)', marginTop: '4px', display: 'block', fontWeight: '600' }}>
                          Attached CV: {registerForm.cvFileName}
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="login-section-title" style={{ marginTop: '24px' }}>Company Details</h4>
                  <div className="login-form__grid">
                    <div className="login-field login-field--full">
                      <label htmlFor="reg-company">Current Organization</label>
                      <CompanyAutocomplete
                        id="reg-company"
                        name="company"
                        value={registerForm.company}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        placeholder={PLACEHOLDERS.company || 'Select or type company name'}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-department">Department</label>
                      <div className="login-field__input-wrap">
                        <FaSitemap className="login-field__icon" />
                        <input
                          id="reg-department"
                          type="text"
                          name="department"
                          placeholder={PLACEHOLDERS.department}
                          value={registerForm.department}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-division">Division</label>
                      <div className="login-field__input-wrap">
                        <FaSitemap className="login-field__icon" />
                        <input
                          id="reg-division"
                          type="text"
                          name="division"
                          placeholder={PLACEHOLDERS.division}
                          value={registerForm.division}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-job">Current Job Title (Designation)</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <input
                          id="reg-job"
                          type="text"
                          name="jobTitle"
                          placeholder={PLACEHOLDERS.jobTitle}
                          value={registerForm.jobTitle}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label>Working Since (Month / Year)</label>
                      <div className="login-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                        <div className="login-field__input-wrap">
                          <FaCalendarAlt className="login-field__icon" />
                          <select
                            name="workingSinceMonth"
                            value={registerForm.workingSinceMonth}
                            onChange={handleRegisterChange}
                            disabled={loading}
                            style={{ paddingLeft: '42px' }}
                          >
                            <option value="">Select Month</option>
                            {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                          </select>
                        </div>
                        <div className="login-field__input-wrap">
                          <FaCalendarAlt className="login-field__icon" />
                          <select
                            name="workingSinceYear"
                            value={registerForm.workingSinceYear}
                            onChange={handleRegisterChange}
                            disabled={loading}
                            style={{ paddingLeft: '42px' }}
                          >
                            <option value="">Select Year</option>
                            {PROMOTION_YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="login-field login-field--full">
                      <label htmlFor="reg-company-website">Company Website</label>
                      <div className="login-field__input-wrap">
                        <FaGlobe className="login-field__icon" />
                        <input
                          id="reg-company-website"
                          type="text"
                          name="companyWebsite"
                          placeholder={PLACEHOLDERS.companyWebsite}
                          value={registerForm.companyWebsite}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid-3" style={{ marginTop: '10px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-company-city">Company Location (City)</label>
                      <CityAutocomplete
                        id="reg-company-city"
                        name="companyCity"
                        placeholder={PLACEHOLDERS.companyCity}
                        value={registerForm.companyCity}
                        state={registerForm.companyState}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-company-state">Company Location (State)</label>
                      <StateAutocomplete
                        id="reg-company-state"
                        name="companyState"
                        placeholder={PLACEHOLDERS.companyState}
                        value={registerForm.companyState}
                        country={registerForm.companyCountry}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-company-country">Company Location (Country)</label>
                      <CountryAutocomplete
                        id="reg-company-country"
                        name="companyCountry"
                        placeholder={PLACEHOLDERS.companyCountry}
                        value={registerForm.companyCountry}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                  </div>

                  <div className="login-form__grid" style={{ marginTop: '10px' }}>
                    <div className="login-field login-field--full">
                      <label>Detail of Product / Services offered by your Company</label>
                      <div className="product-services-checkbox-group">
                        {PRODUCT_SERVICE_OPTIONS.map(opt => {
                          const isChecked = (registerForm.productServices || []).includes(opt)
                          return (
                            <label key={opt} className="checkbox-option">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleMultiSelectChange('productServices', opt)}
                                disabled={loading}
                              />
                              <span>{opt}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {registerForm.productServices.includes('Others') && (
                      <div className="login-field login-field--full" style={{ marginTop: '5px' }}>
                        <label htmlFor="reg-other-product-services">Please specify other products/services <span className="login-field__required">*</span></label>
                        <div className="login-field__input-wrap">
                          <FaBoxOpen className="login-field__icon" />
                          <input
                            id="reg-other-product-services"
                            type="text"
                            name="otherProductServices"
                            placeholder={PLACEHOLDERS.otherProductServices}
                            value={registerForm.otherProductServices}
                            onChange={handleRegisterChange}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                    )}

                    <div className="login-field">
                      <label htmlFor="reg-last-promotion">Last Received Promotion (Designation)</label>
                      <div className="login-field__input-wrap">
                        <FaAward className="login-field__icon" />
                        <input
                          id="reg-last-promotion"
                          type="text"
                          name="lastPromotionDesignation"
                          placeholder={PLACEHOLDERS.lastPromotionDesignation}
                          value={registerForm.lastPromotionDesignation}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label>Last Promotion Received Date (Month / Year)</label>
                      <div className="login-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                        <div className="login-field__input-wrap">
                          <FaCalendarAlt className="login-field__icon" />
                          <select
                            name="lastPromotionMonth"
                            value={registerForm.lastPromotionMonth}
                            onChange={handleRegisterChange}
                            disabled={loading}
                            style={{ paddingLeft: '42px' }}
                          >
                            <option value="">Select Month</option>
                            {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                          </select>
                        </div>
                        <div className="login-field__input-wrap">
                          <FaCalendarAlt className="login-field__icon" />
                          <select
                            name="lastPromotionYear"
                            value={registerForm.lastPromotionYear}
                            onChange={handleRegisterChange}
                            disabled={loading}
                            style={{ paddingLeft: '42px' }}
                          >
                            <option value="">Select Year</option>
                            {PROMOTION_YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications list */}
                  <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                      Certifications / Qualifications
                    </label>
                    {((registerForm.certifications || []).length > 0) ? (
                      (registerForm.certifications || []).map((cert, index) => (
                        <div key={index} className="previous-degree-row">
                          <div className="login-field">
                            <label htmlFor={`reg-cert-area-${index}`}>Area of Certification / Qualification</label>
                            <div className="login-field__input-wrap">
                              <FaCertificate className="login-field__icon" style={{ color: 'var(--slate)' }} />
                              <select
                                id={`reg-cert-area-${index}`}
                                name="area"
                                value={cert.area}
                                onChange={(e) => handleCertificationChange(index, 'area', e.target.value)}
                                disabled={loading}
                              >
                                <option value="">Select Area</option>
                                {CERTIFICATION_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                              </select>
                            </div>
                          </div>

                          <div className="login-field">
                            <label htmlFor={`reg-cert-detail-${index}`}>About the Certification / Qualification Detail</label>
                            <div className="login-field__input-wrap">
                              <FaBriefcase className="login-field__icon" />
                              <input
                                id={`reg-cert-detail-${index}`}
                                type="text"
                                placeholder={PLACEHOLDERS.certificationDetail}
                                value={cert.detail}
                                onChange={(e) => handleCertificationChange(index, 'detail', e.target.value)}
                                disabled={loading}
                              />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveCertification(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '100%',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)'
                            }}
                            title="Remove Certification / Qualification"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Certifications / Qualifications added.</div>
                    )}
                  </div>

                  {/* Add Certification Button */}
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <button
                      type="button"
                      onClick={handleAddCertification}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Certification / Qualification
                    </button>
                  </div>

                  {/* Awards list */}
                  <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                      Details of Award received from Government, Company, Professional Association etc.
                    </label>
                    {((registerForm.awards || []).length > 0) ? (
                      (registerForm.awards || []).map((award, index) => (
                        <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <div className="login-field" style={{ flex: 1 }}>
                            <div className="login-field__input-wrap">
                              <FaAward className="login-field__icon" />
                              <input
                                type="text"
                                placeholder={PLACEHOLDERS.awardDetail}
                                value={award}
                                onChange={(e) => handleAwardChange(index, e.target.value)}
                                disabled={loading}
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveAward(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '44px',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)',
                              margin: 0
                            }}
                            title="Remove Award"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Awards added.</div>
                    )}
                  </div>

                  {/* Add Award Button */}
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <button
                      type="button"
                      onClick={handleAddAward}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Award
                    </button>
                  </div>

                  {/* Interest / Hobby checkbox grid */}
                  <div className="login-field login-field--full" style={{ marginTop: '15px', marginBottom: '20px' }}>
                    <label>Interest / Hobby</label>
                    <div className="product-services-checkbox-group">
                      {HOBBY_OPTIONS.map(opt => {
                        const isChecked = (registerForm.hobbies || []).includes(opt)
                        return (
                          <label key={opt} className="checkbox-option">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleMultiSelectChange('hobbies', opt)}
                              disabled={loading}
                            />
                            <span>{opt}</span>
                          </label>
                        )
                      })}
                    </div>
                    {(registerForm.hobbies || []).includes('Others') && (
                      <div className="login-field__input-wrap" style={{ marginTop: '12px' }}>
                        <FaHeart className="login-field__icon" />
                        <input
                          type="text"
                          name="otherHobbies"
                          placeholder={PLACEHOLDERS.otherHobbies}
                          value={registerForm.otherHobbies}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    )}
                  </div>

                  <div className="login-form__row">
                    <div className="login-field">
                      <label htmlFor="reg-password">Password <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaLock className="login-field__icon" />
                        <input
                          id="reg-password"
                          type={showRegPassword ? "text" : "password"}
                          name="password"
                          placeholder={PLACEHOLDERS.regPassword}
                          value={registerForm.password}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="login-field__toggle-pw"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                          tabIndex="-1"
                        >
                          {showRegPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-confirm">Confirm Password <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaLock className="login-field__icon" />
                        <input
                          id="reg-confirm"
                          type={showRegConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder={PLACEHOLDERS.confirmPassword}
                          value={registerForm.confirmPassword}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="login-field__toggle-pw"
                          onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                          tabIndex="-1"
                        >
                          {showRegConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="login-form__row" style={{ gridTemplateColumns: '1fr', marginTop: '15px', marginBottom: '15px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-captcha">Captcha Verification <span className="login-field__required">*</span></label>
                      <div className="login-captcha-container" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                        <canvas
                          ref={canvasRef}
                          width="160"
                          height="44"
                          style={{ border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: '#f3f4f6' }}
                        />
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="profile-btn profile-btn--secondary"
                          style={{ padding: '8px 16px', fontSize: '0.85rem', height: '44px', margin: 0 }}
                          title="Refresh Code"
                        >
                          <FaSync />
                        </button>
                      </div>
                      <div className="login-field__input-wrap">
                        <FaLock className="login-field__icon" />
                        <input
                          id="reg-captcha"
                          type="text"
                          name="captcha"
                          placeholder={PLACEHOLDERS.captcha}
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-field" style={{ margin: '20px 0', padding: '16px', backgroundColor: 'rgba(241, 245, 249, 0.6)', borderRadius: '12px', border: '1px solid var(--line-grey)' }}>
                    <label style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--navy)', display: 'block', marginBottom: '12px' }}>
                      I give my consent to show my below-mentioned details on the Alumni Portal (Click at least one) <span className="login-field__required">*</span>
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label className="login-checkbox">
                        <input
                          type="checkbox"
                          name="consentEmail"
                          checked={registerForm.consentEmail}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label" style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: '500' }}>Email ID</span>
                      </label>

                      <label className="login-checkbox">
                        <input
                          type="checkbox"
                          name="consentPhone"
                          checked={registerForm.consentPhone}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label" style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: '500' }}>Mobile Number</span>
                      </label>

                      <label className="login-checkbox">
                        <input
                          type="checkbox"
                          name="consentWhatsapp"
                          checked={registerForm.consentWhatsapp}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label" style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: '500' }}>WhatsApp Number</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`login-submit-btn ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="login-spinner"></span>
                    ) : (
                      <>
                        CREATE ACCOUNT <FaArrowRight />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
      {showPhoneModal && (
        <div className="login-modal-overlay" onClick={() => !loading && setShowPhoneModal(false)}>
          <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="login-modal-title">Verify Phone Number</h3>
            <p className="login-modal-description">
              Please enter the Primary, Secondary, or WhatsApp phone number associated with the account <strong>{loginForm.email}</strong> to verify your identity.
            </p>

            <form onSubmit={handleVerifyAndResetPassword}>
              <div className="login-field" style={{ margin: '15px 0' }}>
                <label htmlFor="verify-phone">Associated Phone Number</label>
                <div className="login-field__input-wrap">
                  <FaPhone className="login-field__icon" style={{ transform: 'rotate(90deg)' }} />
                  <input
                    id="verify-phone"
                    type="tel"
                    placeholder={PLACEHOLDERS.verifyPhone}
                    value={verifyPhoneInput}
                    onChange={(e) => setVerifyPhoneInput(e.target.value)}
                    disabled={loading}
                    required
                    style={{ paddingLeft: '42px' }}
                  />
                </div>
              </div>

              <div className="login-modal-actions" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
                <button
                  type="button"
                  className="profile-btn profile-btn--secondary"
                  style={{ margin: 0, padding: '10px 20px', fontSize: '0.85rem' }}
                  onClick={() => {
                    setShowPhoneModal(false)
                    setVerifyPhoneInput('')
                    setVerifyPhoneError('')
                  }}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="profile-btn profile-btn--primary"
                  style={{ margin: 0, padding: '10px 20px', fontSize: '0.85rem' }}
                  disabled={loading || !verifyPhoneInput.trim()}
                >
                  {loading ? <span className="login-spinner"></span> : 'Verify & Send Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showRegSuccessModal && (
        <div className="login-modal-overlay">
          <div className="login-modal-content" style={{ textAlign: 'center', padding: '40px' }}>
            <FaCheckCircle className="success-icon-anim" style={{ fontSize: '4.5rem', marginBottom: '20px' }} />
            <h3 className="login-modal-title" style={{ fontSize: '1.6rem', color: 'var(--navy-deep)', marginBottom: '15px' }}>Account Created!</h3>
            <p className="login-modal-description" style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--slate)', marginBottom: '24px' }}>
              You have successfully created your account!
              <br /><br />
              Please note that your account will be verified within <strong style={{ color: 'var(--signal-red)', fontWeight: '700' }}>1-2 days</strong> by the Administrator.
            </p>
            <button
              type="button"
              className="profile-btn profile-btn--primary"
              style={{ margin: '0 auto', width: 'auto', display: 'inline-flex', padding: '12px 30px', fontSize: '0.9rem' }}
              onClick={handleCloseRegSuccessModal}
            >
              Proceed to Portal
            </button>
          </div>
        </div>
      )}
      {/* Global Toast Notifications */}
      <div className="toast-container">
        {error && (
          <div className="toast toast--error" role="alert">
            <FaTimesCircle className="toast__icon" />
            <span>{error}</span>
            <button
              type="button"
              className="toast__close"
              onClick={() => setError('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}

        {verifyPhoneError && (
          <div className="toast toast--error" role="alert">
            <FaTimesCircle className="toast__icon" />
            <span>{verifyPhoneError}</span>
            <button
              type="button"
              className="toast__close"
              onClick={() => setVerifyPhoneError('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div> // This is the final closing div of the component
  )
}
```

---

## File 53 {#file-53}

**📄 Path:** `src\pages\NewsletterSection.jsx`

```jsx
import { Link } from 'react-router-dom'
import { FaFileAlt, FaArrowRight, FaDownload } from 'react-icons/fa'
import './Newsroom.css'

import { newsletters } from '../data/newslettersData'

export default function NewsletterSection() {
  const latestNewsletter = newsletters[0]

  if (!latestNewsletter) return null

  return (
    <section className="section section-fog newsletter-section" id="newsletter">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            Latest <span>Newsletter</span>
          </h2>
        </div>
        <p className="section-sub reveal">
          Stay updated with the latest happenings, alumni achievements, and upcoming events in our community.
        </p>

        <div className="newsletter__card reveal">
          <div className="newsletter__icon">
            <FaFileAlt />
          </div>
          <div className="newsletter__content">
            <h3 className="newsletter__title">{latestNewsletter.title}</h3>
            <p className="newsletter__date">{latestNewsletter.date}</p>
            <p className="newsletter__desc">{latestNewsletter.description}</p>
            <div className="newsletter__actions">
              <a href={latestNewsletter.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <FaDownload /> Download PDF
              </a>
              <Link to="/newsroom" className="newsletter__link">
                View All Newsletters <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

```

---

## File 54 {#file-54}

**📄 Path:** `src\pages\Newsroom.css`

```css
/* Newsletter Section on Homepage */
.newsletter-section {
  position: relative;
}

.newsletter__card {
  background: var(--paper-white);
  border: 1px solid var(--line-grey);
  border-radius: 1.5rem;
  padding: 3rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: var(--shadow-card);
  transition: var(--transition);
}

.newsletter__card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-elevated);
  border-color: rgba(232, 48, 42, 0.3);
  /* signal-red with opacity */
}

.newsletter__icon {
  font-size: 3rem;
  color: var(--signal-red);
  background: rgba(232, 48, 42, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter__content {
  flex: 1;
}

.newsletter__title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--navy-deep);
  margin-bottom: 0.5rem;
}

.newsletter__date {
  font-size: 0.9rem;
  color: var(--signal-red);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.newsletter__desc {
  color: var(--slate);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.newsletter__actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.newsletter__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--navy-deep);
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.newsletter__link:hover {
  color: var(--signal-red);
}

.newsletter__link svg {
  transition: transform 0.3s ease;
}

.newsletter__link:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .newsletter__card {
    flex-direction: column;
    padding: 2rem;
  }

  .newsletter__icon {
    font-size: 2.5rem;
    padding: 1rem;
  }
}

/* ================================
   Newsroom Page Redesign
   ================================ */

.newsroom-page {
  padding-top: 80px;
  /* navbar offset */
  min-height: 100vh;
  background-color: var(--fog-grey);
  position: relative;
  overflow: hidden;
}

/* Ambient Background Gradient for the page */
.newsroom-page::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 80vh;
  background: radial-gradient(circle, rgba(232, 48, 42, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: 0;
  pointer-events: none;
}

.newsroom-hero {
  padding: 6rem 0 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  color: var(--navy-deep);
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 24px;
  transition: var(--transition);
  align-self: center;
}

.back-link:hover {
  color: var(--signal-red);
  transform: translateX(-4px);
}

.newsroom-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.newsroom-hero__eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--signal-red);
  letter-spacing: 2px;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.newsroom-hero__title {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 900;
  color: var(--navy-deep);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -1px;
}

.newsroom-hero__title span {
  background: linear-gradient(135deg, var(--signal-red), #ff8a00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.newsroom-hero__sub {
  font-size: 1.25rem;
  color: var(--slate);
  line-height: 1.6;
  max-width: 650px;
}

/* Newsroom List */
.newsroom-list-section {
  padding: 4rem 0 8rem;
  position: relative;
  z-index: 1;
}

.newsroom-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.horizontal-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.horizontal-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.horizontal-card:hover {
  transform: translateY(-5px);
  border-color: rgba(232, 48, 42, 0.2);
  box-shadow: var(--shadow-elevated);
}

.horizontal-card:hover .newsroom-card__glow {
  opacity: 0.15;
}

.horizontal-card:hover .newsroom-card__icon {
  transform: scale(1.1) rotate(-5deg);
  background: var(--signal-red);
  color: white;
}

.newsroom-card__glow {
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--signal-red);
  bottom: -75px;
  right: -75px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.newsroom-card__icon-wrap {
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.newsroom-card__icon {
  font-size: 2.5rem;
  color: var(--signal-red);
  background: rgba(232, 48, 42, 0.08);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  transition: all 0.4s ease;
}

.newsroom-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}

.newsroom-card__badge {
  display: inline-block;
  background: rgba(232, 48, 42, 0.1);
  color: var(--signal-red);
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.newsroom-card__title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--navy-deep);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.newsroom-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--signal-red);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.newsroom-card__desc {
  color: var(--slate);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.newsroom-card__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: transparent;
  color: var(--navy-deep);
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-decoration: none;
  align-self: flex-start;
  border: 1px solid var(--line-grey);
}

.newsroom-card__btn:hover {
  background: var(--signal-red);
  border-color: var(--signal-red);
  color: white;
  transform: translateX(5px);
}

/* Featured Horizontal Card Styling */
.horizontal-card--featured {
  background: linear-gradient(135deg, var(--navy-deep), var(--navy-mid));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.horizontal-card--featured::before {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}

.horizontal-card--featured .newsroom-card__title {
  color: var(--paper-white);
}

.horizontal-card--featured .newsroom-card__desc {
  color: rgba(255, 255, 255, 0.75);
}

.horizontal-card--featured .newsroom-card__badge {
  background: var(--signal-red);
  color: var(--paper-white);
}

.horizontal-card--featured .newsroom-card__icon {
  background: rgba(255, 255, 255, 0.08);
  color: var(--signal-red);
}

.horizontal-card--featured .newsroom-card__btn {
  color: var(--paper-white);
  border-color: rgba(255, 255, 255, 0.3);
}

.horizontal-card--featured .newsroom-card__btn:hover {
  background: var(--signal-red);
  border-color: var(--signal-red);
  color: var(--paper-white);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .newsroom-hero__title {
    font-size: 3rem;
  }

  .horizontal-card {
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
  }

  .newsroom-card__icon {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
}
```

---

## File 55 {#file-55}

**📄 Path:** `src\pages\Newsroom.jsx`

```jsx
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaFileAlt, FaDownload, FaCalendarAlt } from 'react-icons/fa'
import './Newsroom.css'

import { newsletters } from '../data/newslettersData'

export default function Newsroom() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="newsroom-page">
      {/* Hero */}
      <section className="newsroom-hero">
        <div className="container newsroom-hero__inner">
          <Link to="/" className="back-link">
            <FaArrowLeft /> BACK TO HOME
          </Link>
          <span className="newsroom-hero__eyebrow">COMMUNITY UPDATES</span>
          <h1 className="newsroom-hero__title">
            Alumni <span>Newsroom</span>
          </h1>
          <p className="newsroom-hero__sub">
            The central hub for all our past newsletters, important publications, and major announcements. Stay connected with the DFT alumni journey.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="section newsroom-list-section">
        <div className="container">
          <div className="newsroom-list">
            {newsletters.map((nl, i) => (
              <div
                key={i}
                className={`newsroom-card reveal horizontal-card ${i === 0 ? 'horizontal-card--featured' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="newsroom-card__icon-wrap">
                  <div className="newsroom-card__icon">
                    <FaFileAlt />
                  </div>
                </div>
                <div className="newsroom-card__content">
                  {i === 0 && <span className="newsroom-card__badge">LATEST</span>}
                  <h3 className="newsroom-card__title">{nl.title}</h3>
                  <div className="newsroom-card__meta">
                    <FaCalendarAlt /> <span>{nl.date}</span>
                  </div>
                  <p className="newsroom-card__desc">{nl.description}</p>
                  <div className="newsroom-card__actions">
                    <a href={nl.link} className="newsroom-card__btn" target="_blank" rel="noopener noreferrer">
                      <FaDownload /> Download PDF
                    </a>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="newsroom-card__glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

```

---

## File 56 {#file-56}

**📄 Path:** `src\pages\Profile.css`

```css
/* ============================================
   DFT ALUMNI — PROFILE PAGE STYLING
   Glassmorphism · Premium Navy & Signal Red accents
   ============================================ */

.profile-page {
  position: relative;
  min-height: 100vh;
  background: var(--navy-deep);
  padding: 140px 4% 80px;
  /* offset scrolled navbar */
  overflow: hidden;
}

/* Decor circles */
.profile-page__decor {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  opacity: 0.12;
  z-index: 1;
}

.profile-page__decor--1 {
  width: 450px;
  height: 450px;
  background: var(--signal-red);
  top: 10%;
  left: -5%;
}

.profile-page__decor--2 {
  width: 500px;
  height: 500px;
  background: var(--navy-mid);
  bottom: 10%;
  right: -5%;
}

/* Page Container */
.profile-container {
  position: relative;
  width: 75vw;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: profileFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (max-width: 1024px) {
  .profile-container {
    width: 90vw;
  }
}

@keyframes profileFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Back Link */
.profile-back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 1px;
  cursor: pointer;
  width: fit-content;
  text-transform: uppercase;
  transition: color 0.3s ease, transform 0.3s ease;
  outline: none;
}

.profile-back-link:hover {
  color: var(--signal-red);
  transform: translateX(-4px);
}

/* Toast Container — fixed bottom-right */
.profile-toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  pointer-events: none;
  max-width: min(380px, calc(100vw - 32px));
}

@media (max-width: 600px) {
  .profile-toast-container {
    bottom: 16px;
    right: 16px;
    left: 16px;
    max-width: none;
    align-items: stretch;
  }
}

/* Error/Success Toasts */
.profile-alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 6px;
  width: 100%;
  background: var(--navy-deep);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  animation: toastLifecycle 5s ease-in-out forwards;
  pointer-events: auto;
}

@keyframes toastLifecycle {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }

  8% {
    opacity: 1;
    transform: translateX(0);
  }

  92% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(40px);
  }
}

.profile-alert--error {
  border-left: 4px solid var(--signal-red);
  color: #ff8a80;
}

.profile-alert--success {
  border-left: 4px solid #2ecc71;
  color: #6fe3a1;
}

.profile-alert__icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.profile-alert span {
  flex: 1;
  line-height: 1.4;
}

.profile-alert__close {
  background: none;
  border: none;
  color: inherit;
  opacity: 0.6;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.profile-alert__close:hover {
  opacity: 1;
}

/* Main Layout Grid */
.profile-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

@media (max-width: 850px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
}

/* Left Column: Avatar & Summary */
.profile-card-left {
  background: var(--paper-white);
  border-radius: 8px;
  padding: 40px 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-avatar-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--signal-red), var(--red-deep));
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(232, 48, 42, 0.35);
  margin-bottom: 20px;
}

.profile-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--navy-deep);
  text-transform: uppercase;
  margin-bottom: 8px;
  line-height: 1.2;
}

.profile-badge-row {
  margin-bottom: 12px;
}

.profile-class-sub {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--slate);
  font-weight: 600;
}

.profile-divider {
  width: 100%;
  height: 1px;
  background: var(--line-grey);
  margin: 24px 0;
  border: none;
}

.profile-meta-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
}

.profile-meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.profile-meta-label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--slate);
  letter-spacing: 0.5px;
}

.profile-meta-value {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--navy-deep);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 100%;
}

/* Right Column: Form details */
.profile-card-right {
  background: var(--paper-white);
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.profile-section-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--navy-deep);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--signal-red);
  padding-bottom: 8px;
  width: fit-content;
}

/* Form Styles */
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.profile-form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.profile-form__grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.previous-degree-row {
  display: grid;
  grid-template-columns: 45fr 45fr 10fr;
  gap: 20px;
  align-items: flex-end;
}

.profile-field--full {
  grid-column: span 2;
}

@media (max-width: 768px) {

  .profile-form__grid,
  .profile-form__grid-3,
  .previous-degree-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .profile-field--full {
    grid-column: span 1;
  }
}

.profile-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.profile-field label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--slate);
}

.profile-field__required {
  color: var(--signal-red);
  margin-left: 2px;
}

.profile-field__input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.profile-field__icon {
  position: absolute;
  left: 14px;
  color: var(--slate);
  font-size: 0.85rem;
  pointer-events: none;
}

.profile-field__input-wrap input,
.profile-field__input-wrap select {
  width: 100%;
  padding: 12px 14px 12px 42px;
  background: var(--fog-grey);
  border: 1px solid var(--line-grey);
  color: var(--navy-deep);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  outline: none;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.profile-field__input-wrap select {
  cursor: pointer;
  background-image: none !important;
}

.profile-field__input-wrap:not(.phone-input-wrap):has(select)::after {
  content: '';
  position: absolute;
  right: 14px;
  top: 50%;
  width: 12px;
  height: 12px;
  transform: translateY(-50%) rotate(0deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
  z-index: 3;
  transition: transform 0.25s ease, background-image 0.25s ease;
}

.profile-field__input-wrap:not(.phone-input-wrap):has(select:enabled:focus)::after,
.profile-field__input-wrap:not(.phone-input-wrap):has(select:enabled:active)::after {
  transform: translateY(-50%) rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%23e8302a'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
}

.profile-field__input-wrap:not(.phone-input-wrap):has(select:disabled)::after {
  transform: translateY(-50%) rotate(0deg) !important;
  opacity: 0.5 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E") !important;
}

.profile-field__input-wrap input:focus,
.profile-field__input-wrap select:focus {
  border-color: var(--navy-deep);
  background-color: var(--paper-white);
  box-shadow: 0 0 0 4px rgba(11, 27, 63, 0.08);
}

.profile-field__input-wrap input:disabled,
.profile-field__input-wrap select:disabled {
  background: var(--fog-grey);
  color: rgba(11, 27, 63, 0.5);
  cursor: not-allowed;
  border-color: var(--line-grey);
}

/* Actions panel */
.profile-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 10px;
}

.profile-btn {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.profile-btn--primary {
  background: linear-gradient(135deg, var(--signal-red), var(--red-deep));
  color: var(--paper-white);
  box-shadow: 0 4px 15px rgba(232, 48, 42, 0.2);
}

.profile-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(232, 48, 42, 0.35);
}

.profile-btn--secondary {
  background: transparent;
  border: 1px solid var(--line-grey);
  color: var(--navy-deep);
}

.profile-btn--secondary:hover {
  background: var(--fog-grey);
}

.profile-btn:disabled {
  background: var(--slate);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  color: var(--paper-white);
}

/* Spinner */
.profile-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--paper-white);
  animation: profileSpin 0.8s ease-in-out infinite;
}

@keyframes profileSpin {
  to {
    transform: rotate(360deg);
  }
}

/* Empty Profile Center State */
.profile-empty-state {
  text-align: center;
  padding: 60px 40px;
  background: var(--paper-white);
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.profile-empty-state__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--navy-deep);
  margin-bottom: 12px;
}

.profile-empty-state__desc {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--slate);
  margin-bottom: 24px;
}

/* Composite Phone Input Wrap as a unified Input Group */
.phone-input-wrap {
  display: grid !important;
  grid-template-columns: 110px 1fr !important;
  width: 100% !important;
  background: var(--fog-grey) !important;
  border: 1px solid var(--line-grey) !important;
  border-radius: 4px !important;
  position: relative !important;
  transition: all 0.3s ease !important;
  align-items: center !important;
  overflow: hidden !important;
}

.phone-input-wrap:focus-within {
  border-color: var(--navy-deep) !important;
  background: var(--paper-white) !important;
  box-shadow: 0 0 0 4px rgba(11, 27, 63, 0.08) !important;
}

.phone-country-select {
  padding: 12px 20px 12px 38px !important;
  border: none !important;
  border-right: 1px solid var(--line-grey) !important;
  border-radius: 0 !important;
  background: transparent !important;
  background-image: none !important;
  height: 100% !important;
  outline: none !important;
  box-shadow: none !important;
  transition: border-color 0.3s ease !important;
  z-index: 1;
}

.phone-input-wrap::after {
  content: '';
  position: absolute;
  left: 92px;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%) rotate(0deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
  z-index: 4;
  transition: transform 0.25s ease, background-image 0.25s ease;
}

.phone-input-wrap:has(.phone-country-select:enabled:focus)::after,
.phone-input-wrap:has(.phone-country-select:enabled:active)::after {
  transform: translateY(-50%) rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%23e8302a'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E");
}

.phone-input-wrap:has(.phone-country-select:disabled)::after {
  transform: translateY(-50%) rotate(0deg) !important;
  opacity: 0.5 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='%2364748b'%3E%3Cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/%3E%3C/svg%3E") !important;
}

.phone-input-wrap:focus-within .phone-country-select {
  border-color: var(--navy-deep) !important;
}

.phone-input-wrap input {
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  padding: 12px 14px !important;
  width: 100% !important;
  outline: none !important;
  box-shadow: none !important;
  height: 100% !important;
  z-index: 1;
}

/* Flag Icon position adjustments for unified container */
.phone-input-wrap .login-field__icon.fi,
.phone-input-wrap .profile-field__icon.fi {
  position: absolute !important;
  left: 14px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 3 !important;
}

/* Form Section Titles */
.profile-form__section-title {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--navy-deep);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 24px;
  margin-bottom: 12px;
  border-bottom: 2px solid var(--signal-red);
  padding-bottom: 4px;
  width: fit-content;
}

/* Flag Icon sizes */
.profile-field__icon.fi {
  width: 18px !important;
  height: 14px !important;
  font-size: 1rem !important;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  background-size: cover !important;
}

/* Checkbox Grid Container — Product & Services offered by Company */
.product-services-checkbox-group {
  background: var(--paper-white);
  border: 1px solid var(--line-grey);
  border-radius: 8px;
  padding: 20px;
  max-height: 250px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.product-services-checkbox-group:hover,
.product-services-checkbox-group:focus-within {
  border-color: var(--slate);
}

.checkbox-option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy-deep);
  transition: color 0.2s ease;
  user-select: none;
  line-height: 1.3;
}

.checkbox-option:hover {
  color: var(--signal-red);
}

.checkbox-option input[type="checkbox"] {
  margin-top: 1px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  accent-color: var(--navy-deep);
  flex-shrink: 0;
}

/* ============================================
   PHONE CODE DISPLAY FIX
   ============================================ */
/* Hide the text (and emoji) in the selected state of the select field */
.phone-country-select {
  color: transparent !important;
}

/* Ensure options inside the dropdown menu remain visible */
.phone-country-select option {
  color: var(--navy-deep) !important;
}

/* Overlay the raw country code text without the emoji */
.phone-selected-text {
  position: absolute;
  left: 42px;
  /* Places text right after the flag icon */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  /* Allows clicks to pass through to the select field */
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--navy-deep);
  z-index: 2;
}

/* ============================================
   MOBILE LAYOUT — FULL-SCREEN, CARD-FREE
   Distinct from the desktop/tablet card layout.
   Content runs edge-to-edge like a native app
   screen instead of floating white cards on
   the navy background.
   ============================================ */
@media (max-width: 640px) {

  /* Kill the ambient blur decor — not needed on a
     flat, full-bleed mobile surface and it hurts
     scroll performance on lower-end phones. */
  .profile-page__decor {
    display: none;
  }

  .profile-page {
    padding: 84px 0 96px;
    /* extra bottom padding reserves room for the
       fixed mobile action bar defined below */
    background: var(--fog-grey);
  }

  .profile-container {
    width: 100%;
    max-width: none;
    margin: 0;
    gap: 0;
    animation: none;
  }

  /* Back link becomes a slim in-flow header bar
     instead of a floating link above a card —
     stretched edge-to-edge as a full-width button */
  .profile-back-link {
    background: var(--paper-white);
    padding: 14px 16px;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
    color: var(--navy-deep);
    border-bottom: 1px solid var(--line-grey);
    font-size: 0.68rem;
  }

  .profile-back-link:hover {
    transform: none;
  }

  .profile-grid {
    display: block;
    gap: 0;
  }

  /* Cards lose all "card-ness": no radius, no
     shadow, no floating margins — they become
     stacked full-width panels separated by a
     hairline, like native app sections. */
  .profile-card-left,
  .profile-card-right {
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    box-sizing: border-box;
  }

  /* Left column becomes a compact profile header
     strip (avatar + name inline) rather than a
     tall centered card — a mobile-appropriate
     pattern distinct from desktop's sidebar card.
     Grid (not flex) so the avatar can span both
     the name row and the badge row and center
     against their combined height. */
  .profile-card-left {
    display: grid;
    grid-template-columns: 64px 1fr;
    column-gap: 16px;
    row-gap: 4px;
    text-align: left;
    padding: 20px 16px;
    border-bottom: 8px solid var(--fog-grey);
  }

  .profile-avatar-large {
    grid-column: 1;
    grid-row: 1 / span 2;
    align-self: center;
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .profile-name {
    grid-column: 2;
    grid-row: 1;
    font-size: 1.05rem;
    margin-bottom: 4px;
    text-align: left;
  }

  .profile-badge-row {
    grid-column: 2;
    grid-row: 2;
    margin: 0;
  }

  .profile-badge-row,
  .profile-class-sub {
    text-align: left;
  }

  .profile-badge-row .navbar__user-badge {
    margin: 0 !important;
    /* the component sets inline margin:0 auto to
       center it on desktop — force left alignment
       here so it sits flush under the name */
  }

  .profile-class-sub,
  .profile-divider,
  .profile-meta-info {
    grid-column: 1 / -1;
  }

  .profile-divider {
    margin: 16px 0;
  }

  .profile-meta-info {
    width: 100%;
  }

  .profile-card-right {
    padding: 20px 16px 24px;
  }

  /* Header row (title + Edit Profile button). The
     component renders title then button and sets
     inline display:flex/justify-content:space-between/
     align-items:center — override to a reversed
     column so the button renders above the title,
     stretched to full width. */
  .profile-card-right>div:first-child {
    flex-direction: column-reverse !important;
    align-items: stretch !important;
    gap: 12px;
  }

  .profile-card-right>div:first-child .profile-btn {
    width: 100%;
    justify-content: center;
  }

  .profile-section-title,
  .profile-form__section-title {
    width: 100%;
  }

  .profile-form__grid-3,
  .previous-degree-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .product-services-checkbox-group {
    grid-template-columns: 1fr;
    max-height: 220px;
  }

  /* Sticky, full-width mobile action bar — replaces
     the desktop's right-aligned inline buttons with
     a native-app-style bottom bar */
  .profile-actions {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    margin-top: 0;
    background: var(--paper-white);
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
    box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.12);
    gap: 12px;
  }

  .profile-actions .profile-btn {
    flex: 1;
    justify-content: center;
  }

  .profile-btn--primary:hover {
    transform: none;
  }
}

/* Profile Checkbox Styling */
.profile-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.profile-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.profile-checkbox__box {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: var(--fog-grey);
  border: 1px solid var(--line-grey);
  border-radius: 4px;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease;
}

.profile-checkbox input:checked ~ .profile-checkbox__box {
  background: var(--navy-deep);
  border-color: var(--navy-deep);
}

.profile-checkbox__box::after {
  content: '';
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 4px;
  height: 9px;
  border: solid var(--paper-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.profile-checkbox input:checked ~ .profile-checkbox__box::after {
  display: block;
}

.profile-checkbox__label {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--navy-deep);
  font-weight: 500;
  flex: 1;
}
```

---

## File 57 {#file-57}

**📄 Path:** `src\pages\Profile.jsx`

```jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaGraduationCap,
  FaBuilding,
  FaBriefcase,
  FaTimesCircle,
  FaCheckCircle,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaHeart,
  FaLinkedin,
  FaPlus,
  FaTrash,
  FaCertificate,
  FaGlobe,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaSitemap,
  FaAward,
  FaFilePdf
} from 'react-icons/fa'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import CountryAutocomplete from '../components/CountryAutocomplete'
import StateAutocomplete from '../components/StateAutocomplete'
import CityAutocomplete from '../components/CityAutocomplete'
import CompanyAutocomplete from '../components/CompanyAutocomplete'
import './Profile.css'
import { countryCodes } from '../data/countryData'
import { getCountryByState } from '../data/stateData'
import { getStateAndCountryByCity } from '../data/cityData'
import {
  ACADEMIC_YEARS,
  DEGREE_OPTIONS,
  GENDER_OPTIONS,
  CERTIFICATION_OPTIONS,
  PRODUCT_SERVICE_OPTIONS,
  HOBBY_OPTIONS,
  PLACEHOLDERS
} from '../data/formdata'
import { hashEmail, hashPhoneDigits } from '../utils/hash'

const MONTH_OPTIONS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const PROMOTION_YEAR_OPTIONS = Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => String(new Date().getFullYear() - i));

const parseWorkingSince = (dataObj) => {
  if (!dataObj) return { workingSinceMonth: '', workingSinceYear: '' };
  const m = dataObj.workingSinceMonth || '';
  const y = dataObj.workingSinceYear || '';
  if (m || y) {
    return { workingSinceMonth: m, workingSinceYear: y };
  }
  const str = dataObj.workingSince || '';
  if (!str) return { workingSinceMonth: '', workingSinceYear: '' };

  const parts = str.trim().split(/[\s\-]+/);
  if (parts.length >= 2) {
    if (/^\d{4}$/.test(parts[0])) {
      const year = parts[0];
      const mNum = parseInt(parts[1], 10);
      const month = (!isNaN(mNum) && mNum >= 1 && mNum <= 12) ? MONTH_OPTIONS[mNum - 1] : parts[1];
      return { workingSinceMonth: month, workingSinceYear: year };
    } else if (/^\d{4}$/.test(parts[1])) {
      return { workingSinceMonth: parts[0], workingSinceYear: parts[1] };
    }
  } else if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
    return { workingSinceMonth: '', workingSinceYear: parts[0] };
  }
  return { workingSinceMonth: '', workingSinceYear: '' };
};

const parsePhoneNumber = (fullPhone) => {
  if (!fullPhone) return { code: '+91', number: '' }
  const clean = fullPhone.trim()
  const match = clean.match(/^(\+\d+)\s*(.*)$/)
  if (match) {
    return { code: match[1], number: match[2] }
  }
  if (clean.length === 10 && /^\d+$/.test(clean)) {
    return { code: '+91', number: clean }
  }
  if (clean.startsWith('+')) {
    if (clean.startsWith('+91')) {
      return { code: '+91', number: clean.slice(3) }
    }
    return { code: clean.slice(0, 3), number: clean.slice(3) }
  }
  return { code: '+91', number: clean }
}

const getCountryIso = (code) => {
  const map = {
    '+1': 'us',
    '+7': 'ru',
    '+20': 'eg',
    '+27': 'za',
    '+30': 'gr',
    '+31': 'nl',
    '+32': 'be',
    '+33': 'fr',
    '+34': 'es',
    '+36': 'hu',
    '+39': 'it',
    '+40': 'ro',
    '+41': 'ch',
    '+43': 'at',
    '+44': 'gb',
    '+45': 'dk',
    '+46': 'se',
    '+47': 'no',
    '+48': 'pl',
    '+49': 'de',
    '+51': 'pe',
    '+52': 'mx',
    '+53': 'cu',
    '+54': 'ar',
    '+55': 'br',
    '+56': 'cl',
    '+57': 'co',
    '+58': 've',
    '+60': 'my',
    '+61': 'au',
    '+62': 'id',
    '+63': 'ph',
    '+64': 'nz',
    '+65': 'sg',
    '+66': 'th',
    '+81': 'jp',
    '+82': 'kr',
    '+84': 'vn',
    '+86': 'cn',
    '+90': 'tr',
    '+91': 'in',
    '+92': 'pk',
    '+93': 'af',
    '+94': 'lk',
    '+95': 'mm',
    '+98': 'ir',
    '+211': 'ss',
    '+212': 'ma',
    '+213': 'dz',
    '+216': 'tn',
    '+218': 'ly',
    '+220': 'gm',
    '+221': 'sn',
    '+222': 'mr',
    '+223': 'ml',
    '+224': 'gn',
    '+225': 'ci',
    '+226': 'bf',
    '+227': 'ne',
    '+228': 'tg',
    '+229': 'bj',
    '+230': 'mu',
    '+231': 'lr',
    '+232': 'sl',
    '+233': 'gh',
    '+234': 'ng',
    '+235': 'td',
    '+236': 'cf',
    '+237': 'cm',
    '+238': 'cv',
    '+239': 'st',
    '+240': 'gq',
    '+241': 'ga',
    '+242': 'cg',
    '+243': 'cd',
    '+244': 'ao',
    '+245': 'gw',
    '+248': 'sc',
    '+249': 'sd',
    '+250': 'rw',
    '+251': 'et',
    '+252': 'so',
    '+253': 'dj',
    '+254': 'ke',
    '+255': 'tz',
    '+256': 'ug',
    '+257': 'bi',
    '+258': 'mz',
    '+260': 'zm',
    '+261': 'mg',
    '+263': 'zw',
    '+264': 'na',
    '+265': 'mw',
    '+266': 'ls',
    '+267': 'bw',
    '+268': 'sz',
    '+269': 'km',
    '+291': 'er',
    '+351': 'pt',
    '+352': 'lu',
    '+353': 'ie',
    '+354': 'is',
    '+355': 'al',
    '+356': 'mt',
    '+357': 'cy',
    '+358': 'fi',
    '+359': 'bg',
    '+370': 'lt',
    '+371': 'lv',
    '+372': 'ee',
    '+373': 'md',
    '+374': 'am',
    '+375': 'by',
    '+376': 'ad',
    '+377': 'mc',
    '+378': 'sm',
    '+380': 'ua',
    '+381': 'rs',
    '+382': 'me',
    '+385': 'hr',
    '+386': 'si',
    '+387': 'ba',
    '+389': 'mk',
    '+420': 'cz',
    '+421': 'sk',
    '+423': 'li',
    '+501': 'bz',
    '+502': 'gt',
    '+503': 'sv',
    '+504': 'hn',
    '+505': 'ni',
    '+506': 'cr',
    '+507': 'pa',
    '+509': 'ht',
    '+591': 'bo',
    '+592': 'gy',
    '+593': 'ec',
    '+595': 'py',
    '+597': 'sr',
    '+598': 'uy',
    '+670': 'tl',
    '+673': 'bn',
    '+674': 'nr',
    '+675': 'pg',
    '+676': 'to',
    '+677': 'sb',
    '+678': 'vu',
    '+679': 'fj',
    '+680': 'pw',
    '+685': 'ws',
    '+686': 'ki',
    '+688': 'tv',
    '+691': 'fm',
    '+692': 'mh',
    '+850': 'kp',
    '+855': 'kh',
    '+856': 'la',
    '+880': 'bd',
    '+960': 'mv',
    '+961': 'lb',
    '+962': 'jo',
    '+963': 'sy',
    '+964': 'iq',
    '+965': 'kw',
    '+966': 'sa',
    '+967': 'ye',
    '+968': 'om',
    '+970': 'ps',
    '+971': 'ae',
    '+972': 'il',
    '+973': 'bh',
    '+974': 'qa',
    '+975': 'bt',
    '+976': 'mn',
    '+977': 'np',
    '+992': 'tj',
    '+993': 'tm',
    '+994': 'az',
    '+995': 'ge',
    '+996': 'kg',
    '+998': 'uz'
  }
  return map[code] || 'in'
}

const formatDob = (dobField) => {
  if (!dobField) return ''
  // If it's a Firestore Timestamp object
  if (typeof dobField.toDate === 'function') {
    try {
      const date = dobField.toDate()
      return date.toISOString().split('T')[0]
    } catch (e) {
      console.error(e)
    }
  }
  // If it's a JS Date object
  if (dobField instanceof Date) {
    return dobField.toISOString().split('T')[0]
  }
  // If it's a string, return it (ensure it is yyyy-MM-dd if it's an ISO timestamp)
  if (typeof dobField === 'string') {
    if (dobField.includes('T')) {
      return dobField.split('T')[0]
    }
    return dobField
  }
  return ''
}

// Form options imported from src/data/formdata.js

export default function Profile({ user, onUpdateUser }) {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Local state holding the profile values
  const [profileForm, setProfileForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    dob: '',
    phoneCode: '+91',
    phone: '',
    secondaryPhoneCode: '+91',
    secondaryPhone: '',
    whatsappCode: '+91',
    whatsapp: '',
    userType: '',
    bloodGroup: '',
    admissionYear: '',
    passoutYear: '',
    diplomaNotCompleted: false,
    jobTitle: '',
    company: '',
    linkedin: '',
    dom: '',
    verification_status: false,
    account_type: 'alumni',
    degrees: [],
    profession: '',
    companyWebsite: '',

    // New/replaced fields:
    city: '',
    state: '',
    country: '',
    certifications: [],
    productServices: [],
    otherProductServices: '',
    department: '',
    division: '',
    workingSince: '',
    workingSinceMonth: '',
    workingSinceYear: '',
    companyCity: '',
    companyState: '',
    companyCountry: '',
    lastPromotionDesignation: '',
    lastPromotionMonth: '',
    lastPromotionYear: '',
    awards: [],
    hobbies: [],
    otherHobbies: '',
    workExperience: '',
    consentEmail: false,
    consentPhone: false,
    consentWhatsapp: false,
    cvBase64: '',
    cvFileName: ''
  })

  const [originalForm, setOriginalForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    dob: '',
    phoneCode: '+91',
    phone: '',
    secondaryPhoneCode: '+91',
    secondaryPhone: '',
    whatsappCode: '+91',
    whatsapp: '',
    userType: '',
    bloodGroup: '',
    admissionYear: '',
    passoutYear: '',
    diplomaNotCompleted: false,
    jobTitle: '',
    company: '',
    linkedin: '',
    dom: '',
    verification_status: false,
    account_type: 'alumni',
    degrees: [],
    profession: '',
    companyWebsite: '',

    // New/replaced fields:
    city: '',
    state: '',
    country: '',
    certifications: [],
    productServices: [],
    otherProductServices: '',
    department: '',
    division: '',
    workingSince: '',
    workingSinceMonth: '',
    workingSinceYear: '',
    companyCity: '',
    companyState: '',
    companyCountry: '',
    lastPromotionDesignation: '',
    lastPromotionMonth: '',
    lastPromotionYear: '',
    awards: [],
    hobbies: [],
    otherHobbies: '',
    workExperience: '',
    consentEmail: false,
    consentPhone: false,
    consentWhatsapp: false,
    cvBase64: '',
    cvFileName: ''
  })

  // Load user data on mount
  useEffect(() => {
    if (!user) return

    const fetchLatestUserData = async () => {
      setFetching(true)
      setError('')

      const uid = user.uid || (auth.currentUser ? auth.currentUser.uid : null)

      if (isFirebaseConfigured && uid) {
        try {
          const userDocRef = doc(db, 'users', uid)
          const userDocSnap = await getDoc(userDocRef)

          if (userDocSnap.exists()) {
            const data = userDocSnap.data()
            // Retrieve first and last name from saved values, or split display name if missing
            const nameSplit = (data.name || user.name || '').split(' ')
            const defaultFirstName = data.firstName || nameSplit[0] || ''
            const defaultLastName = data.lastName || nameSplit.slice(1).join(' ') || ''

            const parsedPhone = parsePhoneNumber(data.phone)
            const parsedSecPhone = parsePhoneNumber(data.secondaryPhone)
            const parsedWhatsapp = parsePhoneNumber(data.whatsapp)

            // Let's parse productServices
            let loadedProductServices = [];
            if (Array.isArray(data.productServices)) {
              loadedProductServices = data.productServices;
            } else if (data.productServices) {
              loadedProductServices = [data.productServices];
            } else if (user.productServices) {
              loadedProductServices = Array.isArray(user.productServices) ? user.productServices : [user.productServices];
            }

            // Let's parse certifications
            let loadedCertifications = [];
            if (Array.isArray(data.certifications)) {
              loadedCertifications = data.certifications;
            } else if (data.areaOfCertification || user.areaOfCertification) {
              loadedCertifications = [{ area: data.areaOfCertification || user.areaOfCertification, detail: '' }];
            }

            const loadedData = {
              firstName: defaultFirstName,
              middleName: data.middleName || user.middleName || '',
              lastName: defaultLastName,
              email: data.email || user.email || '',
              gender: data.gender || user.gender || '',
              dob: formatDob(data.dob),
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              userType: data.userType || user.userType || '',
              bloodGroup: data.bloodGroup || user.bloodGroup || '',
              admissionYear: data.admissionYear || '',
              passoutYear: data.passoutYear || data.batch || '',
              diplomaNotCompleted: data.diplomaNotCompleted || false,
              jobTitle: data.jobTitle || '',
              company: data.company || '',
              linkedin: data.linkedin || '',
              dom: formatDob(data.dom),
              verification_status: data.verification_status !== undefined ? data.verification_status : false,
              account_type: data.account_type || 'alumni',
              degrees: data.degrees || [],
              profession: data.profession || user.profession || '',
              companyWebsite: data.companyWebsite || user.companyWebsite || '',

              // New fields
              city: data.city || user.city || '',
              state: data.state || user.state || '',
              country: data.country || user.country || '',
              certifications: loadedCertifications,
              productServices: loadedProductServices,
              otherProductServices: data.otherProductServices || user.otherProductServices || '',
              department: data.department || user.department || '',
              division: data.division || user.division || '',
              workingSince: data.workingSince || user.workingSince || '',
              workingSinceMonth: parseWorkingSince(data).workingSinceMonth || parseWorkingSince(user).workingSinceMonth || '',
              workingSinceYear: parseWorkingSince(data).workingSinceYear || parseWorkingSince(user).workingSinceYear || '',
              companyCity: data.companyCity || user.companyCity || '',
              companyState: data.companyState || user.companyState || '',
              companyCountry: data.companyCountry || user.companyCountry || '',
              lastPromotionDesignation: data.lastPromotionDesignation || user.lastPromotionDesignation || '',
              lastPromotionMonth: data.lastPromotionMonth || user.lastPromotionMonth || '',
              lastPromotionYear: data.lastPromotionYear || user.lastPromotionYear || '',
              awards: data.awards || user.awards || [],
              hobbies: data.hobbies || user.hobbies || [],
              otherHobbies: data.otherHobbies || user.otherHobbies || '',
              workExperience: data.workExperience || user.workExperience || '',
              consentEmail: (data.consentEmail !== undefined || data.consentPhone !== undefined || data.consentWhatsapp !== undefined) ? Boolean(data.consentEmail) : Boolean(data.consentAlumniSearch ?? user.consentAlumniSearch ?? false),
              consentPhone: (data.consentEmail !== undefined || data.consentPhone !== undefined || data.consentWhatsapp !== undefined) ? Boolean(data.consentPhone) : Boolean(data.consentAlumniSearch ?? user.consentAlumniSearch ?? false),
              consentWhatsapp: (data.consentEmail !== undefined || data.consentPhone !== undefined || data.consentWhatsapp !== undefined) ? Boolean(data.consentWhatsapp) : Boolean(data.consentAlumniSearch ?? user.consentAlumniSearch ?? false),
              cvBase64: data.cvBase64 || user.cvBase64 || '',
              cvFileName: data.cvFileName || user.cvFileName || ''
            }
            setProfileForm(loadedData)
            setOriginalForm(loadedData)
          } else {
            // Document doesn't exist yet, seed with basic login info
            const nameSplit = (user.name || '').split(' ')
            const parsedPhone = parsePhoneNumber(user.phone)
            const parsedSecPhone = parsePhoneNumber(user.secondaryPhone)
            const parsedWhatsapp = parsePhoneNumber(user.whatsapp)

            // Let's parse productServices
            let loadedProductServices = [];
            if (Array.isArray(user.productServices)) {
              loadedProductServices = user.productServices;
            } else if (user.productServices) {
              loadedProductServices = [user.productServices];
            }

            // Let's parse certifications
            let loadedCertifications = [];
            if (Array.isArray(user.certifications)) {
              loadedCertifications = user.certifications;
            } else if (user.areaOfCertification) {
              loadedCertifications = [{ area: user.areaOfCertification, detail: '' }];
            }

            const seedData = {
              firstName: nameSplit[0] || '',
              middleName: user.middleName || '',
              lastName: nameSplit.slice(1).join(' ') || '',
              email: user.email || '',
              gender: user.gender || '',
              dob: '',
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              userType: user.userType || '',
              bloodGroup: user.bloodGroup || '',
              admissionYear: user.admissionYear || '',
              passoutYear: user.passoutYear || user.batch || '',
              diplomaNotCompleted: user.diplomaNotCompleted || false,
              jobTitle: '',
              company: '',
              linkedin: '',
              dom: '',
              verification_status: false,
              account_type: 'alumni',
              degrees: user.degrees || [],
              profession: user.profession || '',
              companyWebsite: user.companyWebsite || '',

              // New fields
              city: user.city || '',
              state: user.state || '',
              country: user.country || '',
              certifications: loadedCertifications,
              productServices: loadedProductServices,
              otherProductServices: user.otherProductServices || '',
              department: user.department || '',
              division: user.division || '',
              workingSince: user.workingSince || '',
              workingSinceMonth: parseWorkingSince(user).workingSinceMonth || '',
              workingSinceYear: parseWorkingSince(user).workingSinceYear || '',
              companyCity: user.companyCity || '',
              companyState: user.companyState || '',
              companyCountry: user.companyCountry || '',
              lastPromotionDesignation: user.lastPromotionDesignation || '',
              lastPromotionMonth: user.lastPromotionMonth || '',
              lastPromotionYear: user.lastPromotionYear || '',
              awards: user.awards || [],
              hobbies: user.hobbies || [],
              otherHobbies: user.otherHobbies || '',
              workExperience: user.workExperience || '',
              consentEmail: (user.consentEmail !== undefined || user.consentPhone !== undefined || user.consentWhatsapp !== undefined) ? Boolean(user.consentEmail) : Boolean(user.consentAlumniSearch ?? false),
              consentPhone: (user.consentEmail !== undefined || user.consentPhone !== undefined || user.consentWhatsapp !== undefined) ? Boolean(user.consentPhone) : Boolean(user.consentAlumniSearch ?? false),
              consentWhatsapp: (user.consentEmail !== undefined || user.consentPhone !== undefined || user.consentWhatsapp !== undefined) ? Boolean(user.consentWhatsapp) : Boolean(user.consentAlumniSearch ?? false),
              cvBase64: user.cvBase64 || '',
              cvFileName: user.cvFileName || ''
            }
            setProfileForm(seedData)
            setOriginalForm(seedData)
          }
        } catch (err) {
          console.error("Error fetching latest user profile:", err)
          setError('Failed to fetch the latest profile details from the server.')
        } finally {
          setFetching(false)
        }
      } else {
        // Mock Mode fetch: read from localStorage mockRegisteredAlumni if email matches
        const mockRegistered = localStorage.getItem('mockRegisteredAlumni')
        if (mockRegistered) {
          const parsed = JSON.parse(mockRegistered)
          if (parsed.email === user.email) {
            const nameSplit = (parsed.name || '').split(' ')
            const parsedPhone = parsePhoneNumber(parsed.phone)
            const parsedSecPhone = parsePhoneNumber(parsed.secondaryPhone)
            const parsedWhatsapp = parsePhoneNumber(parsed.whatsapp)

            // Let's parse productServices
            let loadedProductServices = [];
            if (Array.isArray(parsed.productServices)) {
              loadedProductServices = parsed.productServices;
            } else if (parsed.productServices) {
              loadedProductServices = [parsed.productServices];
            }

            // Let's parse certifications
            let loadedCertifications = [];
            if (Array.isArray(parsed.certifications)) {
              loadedCertifications = parsed.certifications;
            } else if (parsed.areaOfCertification) {
              loadedCertifications = [{ area: parsed.areaOfCertification, detail: '' }];
            }

            const mockData = {
              firstName: parsed.firstName || nameSplit[0] || '',
              middleName: parsed.middleName || '',
              lastName: parsed.lastName || nameSplit.slice(1).join(' ') || '',
              email: parsed.email || '',
              gender: parsed.gender || '',
              dob: formatDob(parsed.dob),
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              userType: parsed.userType || '',
              bloodGroup: parsed.bloodGroup || '',
              admissionYear: parsed.admissionYear || '',
              passoutYear: parsed.passoutYear || parsed.batch || '',
              diplomaNotCompleted: parsed.diplomaNotCompleted || false,
              jobTitle: parsed.jobTitle || '',
              company: parsed.company || '',
              linkedin: parsed.linkedin || '',
              dom: formatDob(parsed.dom),
              verification_status: parsed.verification_status !== undefined ? parsed.verification_status : false,
              account_type: parsed.account_type || 'alumni',
              degrees: parsed.degrees || [],
              profession: parsed.profession || '',
              companyWebsite: parsed.companyWebsite || '',

              // New fields
              city: parsed.city || '',
              state: parsed.state || '',
              country: parsed.country || '',
              certifications: loadedCertifications,
              productServices: loadedProductServices,
              otherProductServices: parsed.otherProductServices || '',
              department: parsed.department || '',
              division: parsed.division || '',
              workingSince: parsed.workingSince || '',
              workingSinceMonth: parseWorkingSince(parsed).workingSinceMonth || '',
              workingSinceYear: parseWorkingSince(parsed).workingSinceYear || '',
              companyCity: parsed.companyCity || '',
              companyState: parsed.companyState || '',
              companyCountry: parsed.companyCountry || '',
              lastPromotionDesignation: parsed.lastPromotionDesignation || '',
              lastPromotionMonth: parsed.lastPromotionMonth || '',
              lastPromotionYear: parsed.lastPromotionYear || '',
              awards: parsed.awards || [],
              hobbies: parsed.hobbies || [],
              consentEmail: (parsed.consentEmail !== undefined || parsed.consentPhone !== undefined || parsed.consentWhatsapp !== undefined) ? Boolean(parsed.consentEmail) : Boolean(parsed.consentAlumniSearch ?? false),
              consentPhone: (parsed.consentEmail !== undefined || parsed.consentPhone !== undefined || parsed.consentWhatsapp !== undefined) ? Boolean(parsed.consentPhone) : Boolean(parsed.consentAlumniSearch ?? false),
              consentWhatsapp: (parsed.consentEmail !== undefined || parsed.consentPhone !== undefined || parsed.consentWhatsapp !== undefined) ? Boolean(parsed.consentWhatsapp) : Boolean(parsed.consentAlumniSearch ?? false),
              cvBase64: parsed.cvBase64 || '',
              cvFileName: parsed.cvFileName || ''
            }
            setProfileForm(mockData)
            setOriginalForm(mockData)
            setFetching(false)
            return
          }
        }

        // Default layout load fallback
        const nameSplit = (user.name || '').split(' ')
        const parsedPhone = parsePhoneNumber(user.phone)
        const parsedSecPhone = parsePhoneNumber(user.secondaryPhone)
        const parsedWhatsapp = parsePhoneNumber(user.whatsapp)

        // Let's parse productServices
        let loadedProductServices = [];
        if (Array.isArray(user.productServices)) {
          loadedProductServices = user.productServices;
        } else if (user.productServices) {
          loadedProductServices = [user.productServices];
        }

        // Let's parse certifications
        let loadedCertifications = [];
        if (Array.isArray(user.certifications)) {
          loadedCertifications = user.certifications;
        } else if (user.areaOfCertification) {
          loadedCertifications = [{ area: user.areaOfCertification, detail: '' }];
        }

        const fallbackData = {
          firstName: nameSplit[0] || '',
          middleName: user.middleName || '',
          lastName: nameSplit.slice(1).join(' ') || '',
          email: user.email || '',
          gender: user.gender || '',
          dob: formatDob(user.dob),
          phoneCode: parsedPhone.code,
          phone: parsedPhone.number,
          secondaryPhoneCode: parsedSecPhone.code,
          secondaryPhone: parsedSecPhone.number,
          whatsappCode: parsedWhatsapp.code,
          whatsapp: parsedWhatsapp.number,
          userType: user.userType || '',
          bloodGroup: user.bloodGroup || '',
          admissionYear: user.admissionYear || '',
          passoutYear: user.passoutYear || user.batch || '',
          diplomaNotCompleted: user.diplomaNotCompleted || false,
          jobTitle: user.jobTitle || '',
          company: user.company || '',
          linkedin: user.linkedin || '',
          dom: formatDob(user.dom),
          verification_status: user.verification_status || false,
          account_type: user.account_type || 'alumni',
          degrees: user.degrees || [],
          profession: user.profession || '',
          companyWebsite: user.companyWebsite || '',

          // New fields
          city: user.city || '',
          state: user.state || '',
          country: user.country || '',
          certifications: loadedCertifications,
          productServices: loadedProductServices,
          otherProductServices: user.otherProductServices || '',
          department: user.department || '',
          division: user.division || '',
          workingSince: formatDob(user.workingSince || ''),
          companyCity: user.companyCity || '',
          companyState: user.companyState || '',
          companyCountry: user.companyCountry || '',
          lastPromotionDesignation: user.lastPromotionDesignation || '',
          lastPromotionMonth: user.lastPromotionMonth || '',
          lastPromotionYear: user.lastPromotionYear || '',
          awards: user.awards || [],
          hobbies: user.hobbies || [],
          otherHobbies: user.otherHobbies || '',
          workExperience: user.workExperience || ''
        }
        setProfileForm(fallbackData)
        setOriginalForm(fallbackData)
        setFetching(false)
      }
    }

    fetchLatestUserData()
  }, [user])

  // Auto-clear success message after 5 seconds to match fade-out animation
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  // Auto-clear error toast after 5 seconds to match fade-out animation
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const capitalizeWords = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(/\b[a-zA-Z]+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target // Extract type and checked
    let cleanValue = ['phone', 'secondaryPhone', 'whatsapp', 'workExperience'].includes(name)
      ? value.replace(/\D/g, '')
      : value;

    if (['firstName', 'middleName', 'lastName'].includes(name) && typeof cleanValue === 'string') {
      cleanValue = capitalizeWords(cleanValue);
    }

    setProfileForm(prev => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : cleanValue // Handle checkbox
      }

      // Auto populate state & country when personal city changes
      if (name === 'city' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const { state: autoState, country: autoCountry } = getStateAndCountryByCity(cleanValue);
        if (autoState) updated.state = autoState;
        if (autoCountry) updated.country = autoCountry;
      }

      // Auto populate country when personal state changes
      if (name === 'state' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const autoCountry = getCountryByState(cleanValue);
        if (autoCountry) updated.country = autoCountry;
      }

      // Auto populate state & country when company city changes
      if (name === 'companyCity' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const { state: autoState, country: autoCountry } = getStateAndCountryByCity(cleanValue);
        if (autoState) updated.companyState = autoState;
        if (autoCountry) updated.companyCountry = autoCountry;
      }

      // Auto populate country when company state changes
      if (name === 'companyState' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const autoCountry = getCountryByState(cleanValue);
        if (autoCountry) updated.companyCountry = autoCountry;
      }

      // Calculate target passout year only if diploma is not checked
      if (name === 'admissionYear' && cleanValue && !prev.diplomaNotCompleted) {
        const parsedYear = parseInt(cleanValue, 10)
        if (!isNaN(parsedYear)) {
          const targetPassout = parsedYear + 3
          if (targetPassout <= 2040) {
            updated.passoutYear = String(targetPassout)
          } else {
            updated.passoutYear = '2040'
          }
        }
      }
      // Clear passout year if checkbox gets ticked
      if (name === 'diplomaNotCompleted' && checked) {
        updated.passoutYear = ''
      }
      return updated
    })
  }

  const handleAddDegree = () => {
    setProfileForm(prev => ({
      ...prev,
      degrees: [...(prev.degrees || []), { degree: '', domain: '' }]
    }))
  }

  const handleRemoveDegree = (index) => {
    setProfileForm(prev => ({
      ...prev,
      degrees: (prev.degrees || []).filter((_, i) => i !== index)
    }))
  }

  const handleDegreeChange = (index, field, val) => {
    setProfileForm(prev => {
      const updatedDegrees = [...(prev.degrees || [])]
      updatedDegrees[index] = { ...updatedDegrees[index], [field]: val }
      return {
        ...prev,
        degrees: updatedDegrees
      }
    })
  }

  const handleAddCertification = () => {
    setProfileForm(prev => ({
      ...prev,
      certifications: [...(prev.certifications || []), { area: '', detail: '' }]
    }))
  }

  const handleRemoveCertification = (index) => {
    setProfileForm(prev => ({
      ...prev,
      certifications: (prev.certifications || []).filter((_, i) => i !== index)
    }))
  }

  const handleCertificationChange = (index, field, val) => {
    setProfileForm(prev => {
      const updated = [...(prev.certifications || [])]
      updated[index] = { ...updated[index], [field]: val }
      return {
        ...prev,
        certifications: updated
      }
    })
  }

  const handleMultiSelectChange = (name, val) => {
    setProfileForm(prev => {
      const current = prev[name] || []
      const updated = current.includes(val)
        ? current.filter(item => item !== val)
        : [...current, val]
      return {
        ...prev,
        [name]: updated
      }
    })
  }

  const handleAddAward = () => {
    setProfileForm(prev => ({
      ...prev,
      awards: [...(prev.awards || []), '']
    }))
  }

  const handleRemoveAward = (index) => {
    setProfileForm(prev => ({
      ...prev,
      awards: (prev.awards || []).filter((_, i) => i !== index)
    }))
  }

  const handleAwardChange = (index, val) => {
    setProfileForm(prev => {
      const updated = [...(prev.awards || [])]
      updated[index] = val
      return {
        ...prev,
        awards: updated
      }
    })
  }

  const handleEditToggle = () => {
    if (isEditing) {
      setProfileForm(originalForm)
    }
    setIsEditing(!isEditing)
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Basic Validations
    if (!profileForm.firstName.trim() || !profileForm.middleName.trim() || !profileForm.lastName.trim()) {
      setError('First name, middle name, and last name fields are compulsory.')
      return
    }

    if (!profileForm.phone.trim()) {
      setError('Primary Contact number is compulsory.')
      return
    }

    if (!profileForm.gender) {
      setError('Gender is compulsory.')
      return
    }

    if (!profileForm.consentEmail && !profileForm.consentPhone && !profileForm.consentWhatsapp) {
      setError('Please select at least one detail (Email ID, Mobile Number, or WhatsApp Number) to show on the Alumni Portal.')
      return
    }

    if (!profileForm.userType) {
      setError('Please select whether you are a DFT Alumni or Student.')
      return
    }

    const admYear = parseInt(profileForm.admissionYear, 10)
    const passYear = parseInt(profileForm.passoutYear, 10)
    const currentYear = new Date().getFullYear()

    if (isNaN(admYear) || admYear < 1970 || admYear > currentYear + 6) {
      setError(`Please enter a valid DFT Admission Year (e.g. 1970 - ${currentYear + 6}).`)
      return
    }

    // Only validate passout year if the checkbox is NOT ticked
    if (!profileForm.diplomaNotCompleted) {
      if (isNaN(passYear) || passYear < 1970 || passYear > currentYear + 6) {
        setError(`Please enter a valid DFT Passout Year (e.g. 1970 - ${currentYear + 6}).`)
        return
      }

      if (admYear > passYear) {
        setError('DFT Admission Year cannot be after DFT Passout Year.')
        return
      }
    }

    setLoading(true)

    const cleanFirstName = capitalizeWords(profileForm.firstName.trim());
    const cleanMiddleName = capitalizeWords(profileForm.middleName.trim());
    const cleanLastName = capitalizeWords(profileForm.lastName.trim());
    const cleanFullName = [cleanFirstName, cleanMiddleName, cleanLastName].filter(Boolean).join(' ');

    const updatedProfile = {
      firstName: cleanFirstName,
      middleName: cleanMiddleName,
      lastName: cleanLastName,
      name: cleanFullName,
      gender: profileForm.gender || '',
      dob: profileForm.dob,
      phone: `${profileForm.phoneCode} ${profileForm.phone}`.trim(),
      secondaryPhone: profileForm.secondaryPhone ? `${profileForm.secondaryPhoneCode} ${profileForm.secondaryPhone}`.trim() : '',
      whatsapp: `${profileForm.whatsappCode} ${profileForm.whatsapp}`.trim(),
      userType: profileForm.userType,
      bloodGroup: profileForm.bloodGroup,
      admissionYear: profileForm.admissionYear,
      passoutYear: profileForm.passoutYear,
      diplomaNotCompleted: profileForm.diplomaNotCompleted || false,
      batch: profileForm.passoutYear,
      degrees: profileForm.degrees || [],
      jobTitle: profileForm.jobTitle.trim(),
      company: profileForm.company.trim(),
      linkedin: profileForm.linkedin.trim(),
      dom: profileForm.dom,
      profession: profileForm.profession || '',
      companyWebsite: profileForm.companyWebsite || '',

      // New fields
      city: profileForm.city.trim(),
      state: profileForm.state.trim(),
      country: profileForm.country.trim(),
      certifications: profileForm.certifications || [],
      productServices: profileForm.productServices || [],
      otherProductServices: profileForm.productServices.includes('Others') ? profileForm.otherProductServices || '' : '',
      department: profileForm.department.trim(),
      division: profileForm.division.trim(),
      workingSinceMonth: profileForm.workingSinceMonth || '',
      workingSinceYear: profileForm.workingSinceYear || '',
      workingSince: (profileForm.workingSinceMonth && profileForm.workingSinceYear) ? `${profileForm.workingSinceMonth} ${profileForm.workingSinceYear}` : (profileForm.workingSince || ''),
      companyCity: profileForm.companyCity.trim(),
      companyState: profileForm.companyState.trim(),
      companyCountry: profileForm.companyCountry.trim(),
      lastPromotionDesignation: profileForm.lastPromotionDesignation.trim(),
      lastPromotionMonth: profileForm.lastPromotionMonth,
      lastPromotionYear: profileForm.lastPromotionYear,
      awards: profileForm.awards || [],
      hobbies: profileForm.hobbies || [],
      otherHobbies: profileForm.hobbies.includes('Others') ? profileForm.otherHobbies || '' : '',
      workExperience: profileForm.workExperience ? profileForm.workExperience.trim() : '',
      consentEmail: profileForm.consentEmail || false,
      consentPhone: profileForm.consentPhone || false,
      consentWhatsapp: profileForm.consentWhatsapp || false,
      cvBase64: profileForm.cvBase64 || '',
      cvFileName: profileForm.cvFileName || ''
    }

    const uid = user.uid || (auth.currentUser ? auth.currentUser.uid : null)

    if (isFirebaseConfigured && uid) {
      try {
        const userDocRef = doc(db, 'users', uid)
        await setDoc(userDocRef, updatedProfile, { merge: true })

        if (isFirebaseConfigured && uid) {
          try {
            const userDocRef = doc(db, 'users', uid)
            await setDoc(userDocRef, updatedProfile, { merge: true })

            if (profileForm.company && profileForm.company.trim()) {
              try {
                await setDoc(doc(db, 'companies', profileForm.company.trim().toLowerCase()), {
                  name: profileForm.company.trim()
                }, { merge: true })
              } catch (compErr) {
                console.warn('Failed to save company name to collection:', compErr)
              }
            }

            // Keep the password-reset lookup doc in sync with any phone/email changes
            const emailHashKey = await hashEmail(user.email) // account email — not editable here
            const phoneHash = await hashPhoneDigits(updatedProfile.phone)
            const secPhoneHash = updatedProfile.secondaryPhone ? await hashPhoneDigits(updatedProfile.secondaryPhone) : ''
            const whatsappHash = await hashPhoneDigits(updatedProfile.whatsapp)

            await setDoc(doc(db, 'passwordResetLookup', emailHashKey), {
              uid,
              phoneHash,
              secPhoneHash,
              whatsappHash
            }, { merge: true })

            // Propagate updates up to the App session state
            onUpdateUser(updatedProfile)
            setOriginalForm(prev => ({ ...prev, ...updatedProfile }))

            setSuccess('Profile updated successfully!')
            setIsEditing(false)
          } catch (err) {
            console.error("Error updating user Firestore document:", err)
            setError('Failed to save changes. Please try again.')
          } finally {
            setLoading(false)
          }
        }

        // Propagate updates up to the App session state
        onUpdateUser(updatedProfile)
        setOriginalForm(prev => ({ ...prev, ...updatedProfile }))

        setSuccess('Profile updated successfully!')
        setIsEditing(false)
      } catch (err) {
        console.error("Error updating user Firestore document:", err)
        setError('Failed to save changes. Please try again.')
      } finally {
        setLoading(false)
      }
    } else {
      // Mock Mode save
      setTimeout(() => {
        const mockRegistered = localStorage.getItem('mockRegisteredAlumni')
        if (mockRegistered) {
          const parsed = JSON.parse(mockRegistered)
          if (parsed.email === user.email) {
            const updatedMock = {
              ...parsed,
              ...updatedProfile,
              // sync individual fields in root
              firstName: updatedProfile.firstName,
              middleName: updatedProfile.middleName,
              lastName: updatedProfile.lastName,
              name: updatedProfile.name,
              dob: updatedProfile.dob,
              phone: updatedProfile.phone,
              secondaryPhone: updatedProfile.secondaryPhone,
              whatsapp: updatedProfile.whatsapp,
              userType: updatedProfile.userType,
              bloodGroup: updatedProfile.bloodGroup,
              admissionYear: updatedProfile.admissionYear,
              passoutYear: updatedProfile.passoutYear,
              degrees: updatedProfile.degrees,
              jobTitle: updatedProfile.jobTitle,
              company: updatedProfile.company,
              linkedin: updatedProfile.linkedin,
              dom: updatedProfile.dom,
              profession: updatedProfile.profession || '',
              companyWebsite: updatedProfile.companyWebsite || '',

              // New fields
              city: updatedProfile.city,
              state: updatedProfile.state,
              country: updatedProfile.country,
              certifications: updatedProfile.certifications,
              productServices: updatedProfile.productServices,
              otherProductServices: updatedProfile.otherProductServices,
              department: updatedProfile.department,
              division: updatedProfile.division,
              workingSince: updatedProfile.workingSince,
              companyCity: updatedProfile.companyCity,
              companyState: updatedProfile.companyState,
              companyCountry: updatedProfile.companyCountry,
              lastPromotionDesignation: updatedProfile.lastPromotionDesignation,
              lastPromotionMonth: updatedProfile.lastPromotionMonth,
              lastPromotionYear: updatedProfile.lastPromotionYear,
              awards: updatedProfile.awards,
              hobbies: updatedProfile.hobbies
            }
            localStorage.setItem('mockRegisteredAlumni', JSON.stringify(updatedMock))
          }
        }

        // Propagate updates
        onUpdateUser(updatedProfile)
        setOriginalForm(prev => ({ ...prev, ...updatedProfile }))

        setSuccess('Profile updated successfully! (Mock Mode)')
        setIsEditing(false)
        setLoading(false)
      }, 1000)
    }
  }

  const hasChanges = originalForm ? (
    profileForm.firstName !== originalForm.firstName ||
    profileForm.middleName !== originalForm.middleName ||
    profileForm.lastName !== originalForm.lastName ||
    profileForm.gender !== originalForm.gender ||
    profileForm.dob !== originalForm.dob ||
    profileForm.phoneCode !== originalForm.phoneCode ||
    profileForm.phone !== originalForm.phone ||
    profileForm.secondaryPhoneCode !== originalForm.secondaryPhoneCode ||
    profileForm.secondaryPhone !== originalForm.secondaryPhone ||
    profileForm.whatsappCode !== originalForm.whatsappCode ||
    profileForm.whatsapp !== originalForm.whatsapp ||
    profileForm.userType !== originalForm.userType ||
    profileForm.bloodGroup !== originalForm.bloodGroup ||
    profileForm.admissionYear !== originalForm.admissionYear ||
    profileForm.passoutYear !== originalForm.passoutYear ||
    profileForm.diplomaNotCompleted !== originalForm.diplomaNotCompleted ||
    profileForm.jobTitle !== originalForm.jobTitle ||
    profileForm.company !== originalForm.company ||
    profileForm.linkedin !== originalForm.linkedin ||
    profileForm.dom !== originalForm.dom ||
    profileForm.profession !== originalForm.profession ||
    profileForm.companyWebsite !== originalForm.companyWebsite ||
    profileForm.city !== originalForm.city ||
    profileForm.state !== originalForm.state ||
    profileForm.country !== originalForm.country ||
    profileForm.department !== originalForm.department ||
    profileForm.division !== originalForm.division ||
    profileForm.workingSinceMonth !== originalForm.workingSinceMonth ||
    profileForm.workingSinceYear !== originalForm.workingSinceYear ||
    profileForm.companyCity !== originalForm.companyCity ||
    profileForm.companyState !== originalForm.companyState ||
    profileForm.companyCountry !== originalForm.companyCountry ||
    profileForm.lastPromotionDesignation !== originalForm.lastPromotionDesignation ||
    profileForm.lastPromotionMonth !== originalForm.lastPromotionMonth ||
    profileForm.lastPromotionYear !== originalForm.lastPromotionYear ||
    JSON.stringify(profileForm.degrees || []) !== JSON.stringify(originalForm.degrees || []) ||
    JSON.stringify(profileForm.certifications || []) !== JSON.stringify(originalForm.certifications || []) ||
    JSON.stringify(profileForm.productServices || []) !== JSON.stringify(originalForm.productServices || []) ||
    profileForm.otherProductServices !== originalForm.otherProductServices ||
    JSON.stringify(profileForm.awards || []) !== JSON.stringify(originalForm.awards || []) ||
    JSON.stringify(profileForm.hobbies || []) !== JSON.stringify(originalForm.hobbies || []) ||
    profileForm.otherHobbies !== originalForm.otherHobbies ||
    profileForm.consentEmail !== originalForm.consentEmail ||
    profileForm.consentPhone !== originalForm.consentPhone ||
    profileForm.consentWhatsapp !== originalForm.consentWhatsapp ||
    profileForm.cvBase64 !== originalForm.cvBase64 ||
    profileForm.workExperience !== originalForm.workExperience
  ) : false

  // Signed out check
  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-page__decor profile-page__decor--1"></div>
        <div className="profile-page__decor profile-page__decor--2"></div>
        <div className="profile-container">
          <div className="profile-empty-state">
            <h2 className="profile-empty-state__title">Access Restricted</h2>
            <p className="profile-empty-state__desc">
              Please sign in to the DFT Alumni Portal to view and update your profile details.
            </p>
            <button
              className="profile-btn profile-btn--primary"
              onClick={() => navigate('/login')}
            >
              GO TO SIGN IN
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="profile-page__decor profile-page__decor--1"></div>
      <div className="profile-page__decor profile-page__decor--2"></div>

      <div className="profile-toast-container">
        {error && (
          <div className="profile-alert profile-alert--error" role="alert">
            <FaTimesCircle className="profile-alert__icon" />
            <span>{error}</span>
            <button
              type="button"
              className="profile-alert__close"
              onClick={() => setError('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}

        {success && (
          <div className="profile-alert profile-alert--success" role="status">
            <FaCheckCircle className="profile-alert__icon" />
            <span>{success}</span>
            <button
              type="button"
              className="profile-alert__close"
              onClick={() => setSuccess('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      <div className="profile-container">
        {/* Back Link */}
        <button className="profile-back-link" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>

        <div className="profile-grid">
          {/* Left Column */}
          <div className="profile-card-left">
            <div className="profile-avatar-large">
              {((profileForm.firstName || user.name || 'U').charAt(0)).toUpperCase()}
            </div>
            <h2 className="profile-name">
              {profileForm.firstName || profileForm.lastName
                ? `${profileForm.firstName} ${profileForm.lastName}`
                : user.name
              }
            </h2>

            <div className="profile-badge-row">
              <span className={`navbar__user-badge ${profileForm.verification_status ? 'navbar__user-badge--verified' : 'navbar__user-badge--unverified'}`} style={{ margin: '0 auto', display: 'inline-flex' }}>
                {profileForm.verification_status ? (
                  <>
                    <FaCheckCircle className="navbar__user-badge-icon" /> Verified Alumni
                    <span className="navbar__user-badge-tooltip">Your account has been successfully verified by the Administrator.</span>
                  </>
                ) : (
                  <>
                    <FaClock className="navbar__user-badge-icon" /> Pending Verification
                    <span className="navbar__user-badge-tooltip">Admin will verify the account, this might take 1-2 days</span>
                  </>
                )}
              </span>
            </div>

            {profileForm.batch && (
              <span className="profile-class-sub">
                Class of {profileForm.batch}
              </span>
            )}

            <hr className="profile-divider" />

            <div className="profile-meta-info">
              <div className="profile-meta-item">
                <span className="profile-meta-label">Email Address</span>
                <span className="profile-meta-value" title={profileForm.email}>{profileForm.email}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Primary Contact Number</span>
                <span className="profile-meta-value">{profileForm.phone || 'Not Provided'}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Account Type</span>
                <span className="profile-meta-value" style={{ textTransform: 'capitalize' }}>
                  {profileForm.account_type}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="profile-card-right">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 className="profile-section-title" style={{ marginBottom: 0 }}>Profile Details</h3>
              {!isEditing && (
                <button
                  type="button"
                  className="profile-btn profile-btn--secondary"
                  onClick={handleEditToggle}
                  disabled={fetching}
                >
                  Edit Profile
                </button>
              )}
            </div>

            {fetching ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                <div className="profile-spinner" style={{ borderTopColor: 'var(--navy-deep)', width: '32px', height: '32px', borderWidth: '3px' }}></div>
              </div>
            ) : (
              <form className="profile-form" onSubmit={handleSubmit}>
                <p style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '14px', fontWeight: '500' }}>
                  Fields marked with <span style={{ color: 'var(--signal-red)', fontWeight: 'bold' }}>*</span> are mandatory
                </p>
                <h4 className="profile-form__section-title">Personal Details</h4>
                <div className="profile-form__grid-3">
                  <div className="profile-field">
                    <label htmlFor="prof-first-name">First Name <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <input
                        id="prof-first-name"
                        type="text"
                        name="firstName"
                        value={profileForm.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-middle-name">Middle Name <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <input
                        id="prof-middle-name"
                        type="text"
                        name="middleName"
                        value={profileForm.middleName}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-last-name">Last Name <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <input
                        id="prof-last-name"
                        type="text"
                        name="lastName"
                        value={profileForm.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-email">Email Address</label>
                    <div className="profile-field__input-wrap">
                      <FaEnvelope className="profile-field__icon" />
                      <input
                        id="prof-email"
                        type="email"
                        name="email"
                        value={profileForm.email}
                        disabled // email cannot be modified directly
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-gender">Gender <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <select
                        id="prof-gender"
                        name="gender"
                        value={profileForm.gender}
                        onChange={handleInputChange}
                        required
                        disabled={!isEditing || loading}
                      >
                        <option value="">Select Gender</option>
                        {GENDER_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-bloodgroup">Blood Group</label>
                    <div className="profile-field__input-wrap">
                      <FaHeart className="profile-field__icon" />
                      <select
                        id="prof-bloodgroup"
                        name="bloodGroup"
                        value={profileForm.bloodGroup}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-dob">Date of Birth</label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <input
                        id="prof-dob"
                        type="date"
                        name="dob"
                        value={profileForm.dob}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-dom">Date of Marriage</label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <input
                        id="prof-dom"
                        type="date"
                        name="dom"
                        value={profileForm.dom}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field" style={{ visibility: 'hidden' }}></div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-phone">Primary Contact Number <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap phone-input-wrap">
                      <span className={`fi fi-${getCountryIso(profileForm.phoneCode)} profile-field__icon`}></span>

                      {/* ADD THIS SPAN */}
                      <span className="phone-selected-text">{profileForm.phoneCode}</span>

                      <select
                        className="phone-country-select"
                        name="phoneCode"
                        value={profileForm.phoneCode}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                      </select>
                      <input
                        id="prof-phone"
                        type="tel"
                        name="phone"
                        value={profileForm.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-sec-phone">Secondary Contact Number</label>
                    <div className="profile-field__input-wrap phone-input-wrap">
                      <span className={`fi fi-${getCountryIso(profileForm.secondaryPhoneCode)} profile-field__icon`}></span>

                      {/* ADD THIS SPAN */}
                      <span className="phone-selected-text">{profileForm.secondaryPhoneCode}</span>

                      <select
                        className="phone-country-select"
                        name="secondaryPhoneCode"
                        value={profileForm.secondaryPhoneCode}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                      </select>
                      <input
                        id="prof-sec-phone"
                        type="tel"
                        name="secondaryPhone"
                        value={profileForm.secondaryPhone}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-whatsapp">WhatsApp Number</label>
                    <div className="profile-field__input-wrap phone-input-wrap">
                      <span className={`fi fi-${getCountryIso(profileForm.whatsappCode)} profile-field__icon`}></span>

                      {/* ADD THIS SPAN */}
                      <span className="phone-selected-text">{profileForm.whatsappCode}</span>

                      <select
                        className="phone-country-select"
                        name="whatsappCode"
                        value={profileForm.whatsappCode}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                      </select>
                      <input
                        id="prof-whatsapp"
                        type="tel"
                        name="whatsapp"
                        value={profileForm.whatsapp}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field" style={{ visibility: 'hidden' }}></div>
                </div>

                <div className="profile-form__grid-3" style={{ marginTop: '15px' }}>
                  <div className="profile-field">
                    <label htmlFor="prof-city">Native (City)</label>
                    <CityAutocomplete
                      id="prof-city"
                      name="city"
                      value={profileForm.city}
                      state={profileForm.state}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-state">Native (State)</label>
                    <StateAutocomplete
                      id="prof-state"
                      name="state"
                      value={profileForm.state}
                      country={profileForm.country}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-country">Native (Country)</label>
                    <CountryAutocomplete
                      id="prof-country"
                      name="country"
                      value={profileForm.country}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                </div>

                <h4 className="profile-form__section-title" style={{ marginTop: '20px' }}>Academic Details</h4>
                <div className="profile-form__grid">
                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-usertype">Are you DFT Alumni or Student <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <select
                        id="prof-usertype"
                        name="userType"
                        value={profileForm.userType}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                      >
                        <option value="">Select Option</option>
                        <option value="Alumni">DFT Alumni</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-admission">DFT Admission Year <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <select
                        id="prof-admission"
                        name="admissionYear"
                        value={profileForm.admissionYear}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                      >
                        <option value="">Select Year</option>
                        {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-passout">
                      DFT Passout Year
                      {!profileForm.diplomaNotCompleted && <span className="profile-field__required">*</span>}
                    </label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <select
                        id="prof-passout"
                        name="passoutYear"
                        value={profileForm.passoutYear}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading || profileForm.diplomaNotCompleted}
                        required={!profileForm.diplomaNotCompleted}
                      >
                        <option value="">Select Year</option>
                        {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>

                    <label className="checkbox-option" style={{ marginTop: '10px' }}>
                      <input
                        type="checkbox"
                        name="diplomaNotCompleted"
                        checked={profileForm.diplomaNotCompleted || false}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span>I have not yet completed my diploma / Passout Year is not applicable</span>
                    </label>
                  </div>
                </div>

                {/* Previous Academic Details list */}
                {((profileForm.degrees || []).length > 0) && (
                  <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                      Previous Academic Details
                    </label>
                    {(profileForm.degrees || []).map((deg, index) => (
                      <div key={index} className={isEditing ? "previous-degree-row" : "profile-form__grid"}>
                        <div className="profile-field">
                          <label htmlFor={`prof-deg-title-${index}`}>Degree <span className="profile-field__required">*</span></label>
                          <div className="profile-field__input-wrap">
                            <FaGraduationCap className="profile-field__icon" />
                            <select
                              id={`prof-deg-title-${index}`}
                              name="degree"
                              value={deg.degree}
                              onChange={(e) => handleDegreeChange(index, 'degree', e.target.value)}
                              required
                              disabled={!isEditing || loading}
                            >
                              <option value="">Select Degree</option>
                              {DEGREE_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="profile-field">
                          <label htmlFor={`prof-deg-domain-${index}`}>Domain <span className="profile-field__required">*</span></label>
                          <div className="profile-field__input-wrap">
                            <FaGraduationCap className="profile-field__icon" />
                            <input
                              id={`prof-deg-domain-${index}`}
                              type="text"
                              placeholder="Domain (e.g. Textile Technology)"
                              value={deg.domain}
                              onChange={(e) => handleDegreeChange(index, 'domain', e.target.value)}
                              required
                              disabled={!isEditing || loading}
                            />
                          </div>
                        </div>

                        {isEditing && (
                          <button
                            type="button"
                            onClick={() => handleRemoveDegree(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '100%',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)'
                            }}
                            title="Remove Degree"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Degree Button */}
                {isEditing && (
                  <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-start' }}>
                    <button
                      type="button"
                      onClick={handleAddDegree}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Degree
                    </button>
                  </div>
                )}

                <h4 className="profile-form__section-title" style={{ marginTop: '20px' }}>Professional Details</h4>
                <div className="profile-form__grid">
                  {/* Profession dropdown [Two-col] */}
                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-profession">Profession</label>
                    <div className="profile-field__input-wrap">
                      <FaBriefcase className="profile-field__icon" />
                      <select
                        id="prof-profession"
                        name="profession"
                        value={profileForm.profession}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        <option value="">Select Profession</option>
                        <option value="Business">Business</option>
                        <option value="Job">Job</option>
                      </select>
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-work-experience">Total Work Experience (Years)</label>
                    <div className="profile-field__input-wrap">
                      <FaBriefcase className="profile-field__icon" />
                      <input
                        id="prof-work-experience"
                        type="text"
                        inputMode="numeric"
                        name="workExperience"
                        value={profileForm.workExperience}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder={!isEditing && !profileForm.workExperience ? "No Data Provided" : PLACEHOLDERS.workExperience}
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-linkedin">LinkedIn Profile Link</label>
                    <div className="profile-field__input-wrap">
                      <FaLinkedin className="profile-field__icon" style={{ color: isEditing ? '#0077b5' : 'var(--slate)' }} />
                      <input
                        id="prof-linkedin"
                        type="text"
                        name="linkedin"
                        value={profileForm.linkedin}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-cv">Resume / CV (PDF - Max 700 KB)</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {profileForm.cvBase64 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <a
                            href={profileForm.cvBase64}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={profileForm.cvFileName || `${profileForm.firstName || 'Alumni'}_CV.pdf`}
                            className="profile-btn profile-btn--secondary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '0.85rem' }}
                          >
                            <FaFilePdf style={{ color: '#dc2626' }} /> View / Download Current CV
                          </a>
                        </div>
                      )}

                      {isEditing && (
                        <div className="profile-field__input-wrap">
                          <FaFilePdf className="profile-field__icon" style={{ color: '#dc2626' }} />
                          <input
                            id="prof-cv"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => {
                              const file = e.target.files && e.target.files[0]
                              if (!file) return

                              if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
                                setError('Only PDF files are allowed for CV upload.')
                                e.target.value = ''
                                return
                              }

                              if (file.size > 700 * 1024) {
                                setError('PDF file size must be less than 700 KB for direct storage.')
                                e.target.value = ''
                                return
                              }

                              const reader = new FileReader()
                              reader.onload = () => {
                                setProfileForm(prev => ({
                                  ...prev,
                                  cvBase64: reader.result,
                                  cvFileName: file.name
                                }))
                              }
                              reader.onerror = () => {
                                setError('Failed to read the uploaded PDF file.')
                              }
                              reader.readAsDataURL(file)
                            }}
                            disabled={loading}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <h4 className="profile-form__section-title" style={{ marginTop: '24px' }}>Company Details</h4>
                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-company">Company</label>
                    <CompanyAutocomplete
                      id="prof-company"
                      name="company"
                      value={profileForm.company}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder={!isEditing && !profileForm.company ? "No Data Provided" : "Select or type company name"}
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-department">Department</label>
                    <div className="profile-field__input-wrap">
                      <FaSitemap className="profile-field__icon" />
                      <input
                        id="prof-department"
                        type="text"
                        name="department"
                        value={profileForm.department}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-division">Division</label>
                    <div className="profile-field__input-wrap">
                      <FaSitemap className="profile-field__icon" />
                      <input
                        id="prof-division"
                        type="text"
                        name="division"
                        value={profileForm.division}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-job-title">Job Title</label>
                    <div className="profile-field__input-wrap">
                      <FaBriefcase className="profile-field__icon" />
                      <input
                        id="prof-job-title"
                        type="text"
                        name="jobTitle"
                        value={profileForm.jobTitle}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label>Working Since (Month / Year)</label>
                    <div className="profile-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="workingSinceMonth"
                          value={profileForm.workingSinceMonth}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading}
                          style={{ paddingLeft: '42px' }}
                        >
                          <option value="">Select Month</option>
                          {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="workingSinceYear"
                          value={profileForm.workingSinceYear}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading}
                          style={{ paddingLeft: '42px' }}
                        >
                          <option value="">Select Year</option>
                          {PROMOTION_YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-company-website">Company Website (Optional)</label>
                    <div className="profile-field__input-wrap">
                      <FaGlobe className="profile-field__icon" style={{ color: isEditing ? 'var(--slate)' : 'var(--line-grey)' }} />
                      <input
                        id="prof-company-website"
                        type="text"
                        name="companyWebsite"
                        value={profileForm.companyWebsite}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid-3" style={{ marginTop: '10px' }}>
                  <div className="profile-field">
                    <label htmlFor="prof-company-city">Company Location (City)</label>
                    <CityAutocomplete
                      id="prof-company-city"
                      name="companyCity"
                      value={profileForm.companyCity}
                      state={profileForm.companyState}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-company-state">Company Location (State)</label>
                    <StateAutocomplete
                      id="prof-company-state"
                      name="companyState"
                      value={profileForm.companyState}
                      country={profileForm.companyCountry}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-company-country">Company Location (Country)</label>
                    <CountryAutocomplete
                      id="prof-company-country"
                      name="companyCountry"
                      value={profileForm.companyCountry}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                </div>

                <div className="profile-form__grid" style={{ marginTop: '10px' }}>
                  <div className="profile-field profile-field--full">
                    <label>Detail of Product / Services offered by your Company</label>
                    <div className="profile-field__input-wrap">
                      {isEditing ? (
                        <div className="product-services-checkbox-group">
                          {PRODUCT_SERVICE_OPTIONS.map(opt => {
                            const isChecked = (profileForm.productServices || []).includes(opt)
                            return (
                              <label key={opt} className="checkbox-option">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleMultiSelectChange('productServices', opt)}
                                  disabled={loading}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                      ) : (
                        <div className="profile-field__view-value" style={{ minHeight: '44px', display: 'flex', alignItems: 'center', background: 'var(--fog-grey)', border: '1px solid var(--line-grey)', borderRadius: '4px', padding: '10px 14px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-deep)', width: '100%', boxSizing: 'border-box' }}>
                          {profileForm.productServices && profileForm.productServices.length > 0 ? (
                            profileForm.productServices.map((val) => val === 'Others' && profileForm.otherProductServices ? `Others (${profileForm.otherProductServices})` : val).join(', ')
                          ) : (
                            'No Data Provided'
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {profileForm.productServices.includes('Others') && (
                    <div className="profile-field profile-field--full" style={{ marginTop: '10px' }}>
                      <label htmlFor="prof-other-product-services">Please specify other products/services {isEditing && <span className="profile-field__required">*</span>}</label>
                      <div className="profile-field__input-wrap">
                        <FaBoxOpen className="profile-field__icon" style={{ color: isEditing ? 'var(--slate)' : 'var(--line-grey)' }} />
                        <input
                          id="prof-other-product-services"
                          type="text"
                          name="otherProductServices"
                          placeholder="Enter details of other products/services offered"
                          value={profileForm.otherProductServices}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading}
                          required={isEditing}
                          style={{
                            width: '100%',
                            padding: '10px 14px 10px 42px',
                            background: isEditing ? 'var(--paper-white)' : 'var(--fog-grey)',
                            border: '1px solid var(--line-grey)',
                            borderRadius: '4px',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.82rem',
                            fontWeight: '600',
                            color: 'var(--navy-deep)',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="profile-field">
                    <label htmlFor="prof-last-promotion">Last Received Promotion (Designation)</label>
                    <div className="profile-field__input-wrap">
                      <FaAward className="profile-field__icon" />
                      <input
                        id="prof-last-promotion"
                        type="text"
                        name="lastPromotionDesignation"
                        value={profileForm.lastPromotionDesignation}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label>Last Promotion Received Date (Month / Year)</label>
                    <div className="profile-form__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="lastPromotionMonth"
                          value={profileForm.lastPromotionMonth}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading}
                          style={{ paddingLeft: '42px' }}
                        >
                          <option value="">Select Month</option>
                          {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="lastPromotionYear"
                          value={profileForm.lastPromotionYear}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading}
                          style={{ paddingLeft: '42px' }}
                        >
                          <option value="">Select Year</option>
                          {PROMOTION_YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications list */}
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                    Certifications / Qualifications
                  </label>
                  {((profileForm.certifications || []).length > 0) ? (
                    (profileForm.certifications || []).map((cert, index) => (
                      <div key={index} className={isEditing ? "previous-degree-row" : "profile-form__grid"}>
                        <div className="profile-field">
                          <label htmlFor={`prof-cert-area-${index}`}>Area of Certification / Qualification</label>
                          <div className="profile-field__input-wrap">
                            <FaCertificate className="profile-field__icon" style={{ color: isEditing ? 'var(--slate)' : 'var(--line-grey)' }} />
                            <select
                              id={`prof-cert-area-${index}`}
                              name="area"
                              value={cert.area}
                              onChange={(e) => handleCertificationChange(index, 'area', e.target.value)}
                              disabled={!isEditing || loading}
                            >
                              <option value="">Select Area</option>
                              {CERTIFICATION_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="profile-field">
                          <label htmlFor={`prof-cert-detail-${index}`}>About the Certification / Qualification Detail</label>
                          <div className="profile-field__input-wrap">
                            <FaBriefcase className="profile-field__icon" />
                            <input
                              id={`prof-cert-detail-${index}`}
                              type="text"
                              value={cert.detail}
                              onChange={(e) => handleCertificationChange(index, 'detail', e.target.value)}
                              disabled={!isEditing || loading}
                              placeholder="No Data Provided"
                            />
                          </div>
                        </div>

                        {isEditing && (
                          <button
                            type="button"
                            onClick={() => handleRemoveCertification(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '100%',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)'
                            }}
                            title="Remove Certification"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Certifications / Qualifications added.</div>
                  )}
                </div>

                {/* Add Certification Button */}
                {isEditing && (
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <button
                      type="button"
                      onClick={handleAddCertification}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Certification / Qualification
                    </button>
                  </div>
                )}

                {/* Awards list */}
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                    Details of Award received from Government, Company, Professional Association etc.
                  </label>
                  {((profileForm.awards || []).length > 0) ? (
                    (profileForm.awards || []).map((award, index) => (
                      <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div className="profile-field" style={{ flex: 1 }}>
                          <div className="profile-field__input-wrap">
                            <FaAward className="profile-field__icon" />
                            <input
                              type="text"
                              value={award}
                              onChange={(e) => handleAwardChange(index, e.target.value)}
                              disabled={!isEditing || loading}
                              placeholder="No Data Provided"
                            />
                          </div>
                        </div>
                        {isEditing && (
                          <button
                            type="button"
                            onClick={() => handleRemoveAward(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '44px',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)',
                              margin: 0
                            }}
                            title="Remove Award"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Awards added.</div>
                  )}
                </div>

                {/* Add Award Button */}
                {isEditing && (
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <button
                      type="button"
                      onClick={handleAddAward}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Award
                    </button>
                  </div>
                )}

                {/* Interest / Hobby checkbox grid */}
                <div className="profile-field profile-field--full" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <label>Interest / Hobby</label>
                  <div className="profile-field__input-wrap" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    {isEditing ? (
                      <>
                        <div className="product-services-checkbox-group">
                          {HOBBY_OPTIONS.map(opt => {
                            const isChecked = (profileForm.hobbies || []).includes(opt)
                            return (
                              <label key={opt} className="checkbox-option">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleMultiSelectChange('hobbies', opt)}
                                  disabled={loading}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                        {(profileForm.hobbies || []).includes('Others') && (
                          <div className="profile-field__input-wrap" style={{ marginTop: '12px' }}>
                            <FaHeart className="profile-field__icon" />
                            <input
                              type="text"
                              name="otherHobbies"
                              placeholder={PLACEHOLDERS.otherHobbies}
                              value={profileForm.otherHobbies}
                              onChange={handleInputChange}
                              disabled={!isEditing || loading}
                            />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="profile-field__view-value" style={{ minHeight: '44px', display: 'flex', alignItems: 'center', background: 'var(--fog-grey)', border: '1px solid var(--line-grey)', borderRadius: '4px', padding: '10px 14px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-deep)', width: '100%', boxSizing: 'border-box' }}>
                        {profileForm.hobbies && profileForm.hobbies.length > 0 ? (
                          profileForm.hobbies.map(val => val === 'Others' && profileForm.otherHobbies ? `Others (${profileForm.otherHobbies})` : val).join(', ')
                        ) : (
                          'No Data Provided'
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Privacy Consent Section */}
                <h4 className="profile-form__section-title" style={{ marginTop: '24px' }}>Alumni Portal Privacy Consent</h4>
                <div className="profile-field" style={{ margin: '15px 0 20px', padding: '16px', backgroundColor: 'rgba(241, 245, 249, 0.6)', borderRadius: '12px', border: '1px solid var(--line-grey)' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--navy)', display: 'block', marginBottom: '12px' }}>
                    I give my consent to show my below-mentioned details on the Alumni Portal (Click at least one) <span className="profile-field__required">*</span>
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label className="profile-checkbox" style={{ cursor: (!isEditing || loading) ? 'not-allowed' : 'pointer' }}>
                      <input
                        type="checkbox"
                        name="consentEmail"
                        checked={profileForm.consentEmail}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span className="profile-checkbox__box"></span>
                      <span className="profile-checkbox__label">Email ID</span>
                    </label>

                    <label className="profile-checkbox" style={{ cursor: (!isEditing || loading) ? 'not-allowed' : 'pointer' }}>
                      <input
                        type="checkbox"
                        name="consentPhone"
                        checked={profileForm.consentPhone}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span className="profile-checkbox__box"></span>
                      <span className="profile-checkbox__label">Mobile Number</span>
                    </label>

                    <label className="profile-checkbox" style={{ cursor: (!isEditing || loading) ? 'not-allowed' : 'pointer' }}>
                      <input
                        type="checkbox"
                        name="consentWhatsapp"
                        checked={profileForm.consentWhatsapp}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span className="profile-checkbox__box"></span>
                      <span className="profile-checkbox__label">WhatsApp Number</span>
                    </label>
                  </div>
                </div>

                {isEditing && (
                  <div className="profile-actions">
                    <button
                      type="button"
                      className="profile-btn profile-btn--secondary"
                      onClick={handleEditToggle}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="profile-btn profile-btn--primary"
                      disabled={loading || !hasChanges}
                    >
                      {loading ? (
                        <span className="profile-spinner"></span>
                      ) : (
                        <>
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## File 58 {#file-58}

**📄 Path:** `src\pages\Sangaath2024.jsx`

```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './DftAlumniMeet2023.css'

// Dynamically import all images inside Sangaath2024 folder
const imageModules = import.meta.glob('../assets/Sangaath2024/*.{png,jpg,jpeg,webp,avif}', { eager: true })

const items = Object.entries(imageModules)
  .map(([path, module]) => {
    const filename = path.split('/').pop()
    const match = filename.match(/\d+/)
    const num = match ? parseInt(match[0], 10) : 999
    return {
      src: module.default,
      num,
      title: `Sangaath Photo ${num}`
    }
  })
  .sort((a, b) => a.num - b.num)
  .map(item => ({
    src: item.src,
    title: item.title,
    category: 'REUNION',
    resolution: '5568x3712'
  }))

// GalleryCard component to handle skeleton loaders and load states
function GalleryCard({ item, index, onClick }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="meet-gallery__item reveal"
      style={{ transitionDelay: `${index * 0.05}s` }}
      onClick={onClick}
    >
      <div className="meet-gallery__img-wrap">
        {!loaded && <div className="meet-gallery__skeleton" />}
        <img
          src={item.src}
          alt={item.title}
          className={`meet-gallery__img ${loaded ? 'meet-gallery__img--loaded' : ''}`}
          onLoad={() => setLoaded(true)}
        />
        <div className="meet-gallery__overlay">
          <svg className="meet-gallery__zoom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// LightboxImage component to handle skeleton loading in lightbox
function LightboxImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [src])

  return (
    <div className="lightbox__img-container">
      {!loaded && <div className="lightbox__skeleton" />}
      <img
        src={src}
        alt={alt}
        className={`lightbox__img ${loaded ? 'lightbox__img--loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function Sangaath2024() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className="meet-page">
      {/* Hero header area */}
      <section className="meet-hero">
        <div className="container meet-hero__inner">
          <Link to="/" className="back-link-gallerypage">
            <FaArrowLeft /> BACK TO HOME
          </Link>
          <span className="meet-hero__eyebrow">GALLERY EXCLUSIVE</span>
          <h1 className="meet-hero__title">
            Sangaath <span>2024</span>
          </h1>
          <p className="meet-hero__sub">
            Sangath united DFT alumni in Surat with cultural performances, industry talks, and heartfelt reunions — a celebration of our shared bond and professional growth.
          </p>

          {/* Quick Details Bar */}
          <div className="meet-hero__meta">
            <div className="meet-meta-item">
              <FaCalendarAlt className="meet-meta-icon" />
              <div>
                <div className="meet-meta-label">DATE</div>
                <div className="meet-meta-val">22 December 2024</div>
              </div>
            </div>
            <div className="meet-meta-item">
              <FaMapMarkerAlt className="meet-meta-icon" />
              <div>
                <div className="meet-meta-label">LOCATION</div>
                <div className="meet-meta-val">Surat, Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery grid section */}
      <section className="section meet-gallery">
        <div className="container">
          <div className="meet-gallery__info">
            <p className="meet-gallery__count">Showing <strong>{items.length}</strong> Images</p>
          </div>

          <div className="meet-gallery__grid">
            {items.map((item, i) => (
              <GalleryCard
                key={i}
                item={item}
                index={i}
                onClick={() => setLightbox(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <FaTimes />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i - 1 + items.length) % items.length)
            }}
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <LightboxImage src={items[lightbox].src} alt={items[lightbox].title} />
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i + 1) % items.length)
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

```

---

## File 59 {#file-59}

**📄 Path:** `src\pages\Sangam2026.css`

```css
/* ============================================
   SANGAM 2026 EVENT PAGE — STYLING
   ============================================ */

.sangam-page {
  background: var(--fog-grey);
  color: var(--navy-deep);
}

/* ── Hero Banner ── */
.sangam-hero {
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: var(--paper-white);
  padding: 145px 0 100px;
  overflow: hidden;
}

.sangam-hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

@media (min-width: 992px) {
  .sangam-hero__inner {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;
  }
}

.sangam-hero__content {
  max-width: 750px;
}

.sangam-hero__logo-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-card-inner {
  background: var(--paper-white);
  padding: 24px;
  border-radius: 12px;
  box-shadow: var(--shadow-elevated);
  border: 4px solid var(--navy-mid);
  position: relative;
  overflow: hidden;
  transition: var(--transition);
}

.logo-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--signal-red);
}

.logo-card-inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(11, 27, 63, 0.25);
}

.sangam-hero-logo {
  max-width: 100%;
  height: auto;
  display: block;
}

.sangam-hero__eyebrow {
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: var(--signal-red);
  margin-bottom: 12px;
}

.sangam-hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 0.95;
  margin-bottom: 24px;
}

.sangam-hero__title span {
  color: var(--signal-red);
}

.sangam-hero__sub {
  font-size: 0.9rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 24px;
}

.hero-register-btn {
  display: inline-block;
  background: var(--signal-red);
  color: var(--paper-white);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 2px;
  padding: 16px 36px;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  margin-bottom: 40px;
  box-shadow: 0 4px 14px rgba(232, 48, 42, 0.4);
  transition: all 0.3s ease;
}

.hero-register-btn:hover {
  background: var(--paper-white);
  color: var(--navy-deep);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
  transform: translateY(-3px);
}

/* Meta Details Bar */
.sangam-hero__meta {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 28px;
}

.sangam-meta-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.meta-icon {
  font-size: 1.6rem;
  color: var(--signal-red);
}

.meta-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

.meta-val {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.95rem;
  color: var(--paper-white);
}

.venue-map-btn {
  display: inline-block;
  margin-top: 8px;
  background: transparent;
  color: var(--signal-red);
  border: 1px solid var(--signal-red);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 1px;
  padding: 6px 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: var(--transition);
}

.venue-map-btn:hover {
  background: var(--signal-red);
  color: var(--paper-white);
  box-shadow: 0 4px 10px rgba(232, 48, 42, 0.3);
}

/* ── Countdown Section ── */
.countdown-section {
  margin-top: -50px;
  position: relative;
  z-index: 10;
}

.countdown-card {
  background: var(--navy-mid);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-elevated);
  padding: 40px 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.countdown-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: var(--signal-red);
}

.countdown-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 2px;
  color: var(--paper-white);
  margin-bottom: 24px;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 10px;
  transition: transform 0.3s ease;
}

.countdown-item:hover {
  transform: translateY(-2px);
  border-color: rgba(232, 48, 42, 0.3);
}

.countdown-num {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--paper-white);
  line-height: 1;
}

.countdown-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 8px;
}

/* ── Main Details Grid ── */
.details-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: start;
}

.details-card {
  background: var(--paper-white);
  border: 1px solid rgba(11, 27, 63, 0.06);
  box-shadow: var(--shadow-card);
  padding: 40px;
  margin-bottom: 32px;
}

.details-heading {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--navy-deep);
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 12px;
}

.details-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--signal-red);
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 0;
  width: 2px;
  background: var(--line-grey);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -24px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--paper-white);
  border: 2px solid var(--signal-red);
  z-index: 2;
  transition: background 0.3s ease;
}

.timeline-item:hover::before {
  background: var(--signal-red);
}

.timeline-time {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 1px;
  color: var(--signal-red);
  margin-bottom: 4px;
}

.timeline-content h3 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--navy-deep);
  margin-bottom: 6px;
}

.timeline-content p {
  font-size: 0.92rem;
  color: var(--slate);
  line-height: 1.6;
}

/* Highlights */
.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.hl-icon {
  font-size: 1.1rem;
  color: var(--signal-red);
  margin-top: 4px;
  flex-shrink: 0;
}

.highlights-list span {
  font-size: 0.95rem;
  color: var(--navy-deep);
  line-height: 1.6;
}

/* ── Ticket Info Card ── */
.ticket-info-card {
  background: var(--paper-white);
  border: 1px solid rgba(11, 27, 63, 0.06);
  box-shadow: var(--shadow-elevated);
  padding: 40px;
  position: sticky;
  top: 110px;
}

.ticket-card-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--navy-deep);
  margin-bottom: 8px;
}

.ticket-card-sub {
  font-size: 0.88rem;
  color: var(--slate);
  margin-bottom: 28px;
  line-height: 1.5;
}

.ticket-benefits-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.ticket-benefits-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.benefit-icon {
  font-size: 1rem;
  color: var(--signal-red);
  margin-top: 3px;
  flex-shrink: 0;
}

.ticket-benefits-list span {
  font-size: 0.88rem;
  color: var(--navy-deep);
  line-height: 1.5;
}

.register-now-btn {
  display: block;
  background: var(--signal-red);
  color: var(--paper-white) !important;
  border: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  padding: 16px 24px;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 16px;
}

.register-now-btn:hover {
  background: var(--navy-deep);
  box-shadow: 0 4px 16px rgba(11, 27, 63, 0.25);
  transform: translateY(-2px);
}

.ticket-note {
  font-size: 0.75rem;
  color: var(--slate);
  font-style: italic;
  line-height: 1.4;
}

/* ── Sponsors Section ── */
.sponsors-section {
  padding: 100px 0;
  background: radial-gradient(100% 100% at 50% 0%, rgba(243, 244, 247, 0.5) 0%, var(--paper-white) 100%);
  border-top: 1px solid var(--line-grey);
}

.sponsors-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 64px;
}

.sponsors-eyebrow {
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: var(--signal-red);
  margin-bottom: 14px;
  text-transform: uppercase;
}

.sponsors-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 2.5rem;
  color: var(--navy-deep);
  margin-bottom: 18px;
  line-height: 1.2;
}

.title-underline {
  width: 90px;
  height: 5px;
  background: linear-gradient(90deg, var(--signal-red) 50%, var(--navy-deep) 50%);
  margin: 0 auto 28px;
  border-radius: 4px;
}

.sponsors-subtitle {
  font-size: 1.1rem;
  color: var(--slate);
  line-height: 1.7;
}

.sponsors-container {
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;
}

.sponsor-tier {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.tier-badge {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 2px;
  padding: 8px 20px;
  border-radius: 50px;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.tier-badge.diamond {
  background: linear-gradient(135deg, rgba(30, 60, 114, 0.06) 0%, rgba(30, 60, 114, 0.12) 100%);
  color: #1e3c72;
  border: 1px solid rgba(30, 60, 114, 0.25);
}

.tier-badge.gold {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.16) 100%);
  color: #b8860b;
  border: 1px solid rgba(212, 175, 55, 0.35);
}

.tier-badge.silver {
  background: linear-gradient(135deg, rgba(91, 100, 120, 0.06) 0%, rgba(91, 100, 120, 0.12) 100%);
  color: #5b6478;
  border: 1px solid rgba(91, 100, 120, 0.25);
}

.sponsors-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.sponsor-card {
  background: var(--paper-white);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 24px rgba(11, 27, 63, 0.03);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.sponsor-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.sponsor-card.diamond {
  border: 1px solid rgba(30, 60, 114, 0.12);
  padding: 28px;
  width: 320px;
  max-width: 100%;
}

.sponsor-card.diamond::after {
  background: #1e3c72;
}

.sponsor-card.gold {
  border: 1px solid rgba(212, 175, 55, 0.15);
  width: 280px;
  max-width: 100%;
}

.sponsor-card.gold::after {
  background: #d4af37;
}

.sponsor-card.silver {
  border: 1px solid var(--line-grey);
  width: 240px;
  max-width: 100%;
}

.sponsor-card.silver::after {
  background: #5b6478;
}

.sponsor-logo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sponsor-logo svg,
.sponsor-logo img {
  width: 100%;
  max-height: 52px;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  filter: grayscale(10%) contrast(90%);
}

/* Hover effects */
.sponsor-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 36px rgba(11, 27, 63, 0.1);
}

.sponsor-card::after {
  transform-origin: center;
}

.sponsor-card:hover::after {
  transform: scaleX(1);
}

.sponsor-card.diamond:hover {
  border-color: rgba(30, 60, 114, 0.3);
  box-shadow: 0 16px 36px rgba(30, 60, 114, 0.12);
}

.sponsor-card.gold:hover {
  border-color: rgba(212, 175, 55, 0.3);
  box-shadow: 0 16px 36px rgba(212, 175, 55, 0.12);
}

.sponsor-card.silver:hover {
  border-color: rgba(91, 100, 120, 0.3);
  box-shadow: 0 16px 36px rgba(91, 100, 120, 0.1);
}

.sponsor-card:hover .sponsor-logo svg,
.sponsor-card:hover .sponsor-logo img {
  transform: scale(1.05);
  filter: grayscale(0%) contrast(100%);
}

/* Sponsors CTA call block */
.sponsors-cta {
  margin-top: 60px;
  background: var(--fog-grey);
  border: 1px dashed var(--line-grey);
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}

.sponsors-cta-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--navy-deep);
  margin-bottom: 12px;
}

.sponsors-cta-text {
  font-size: 0.95rem;
  color: var(--slate);
  line-height: 1.6;
  margin-bottom: 24px;
}

.sponsors-cta-btn {
  display: inline-block;
  background: var(--navy-deep);
  color: var(--paper-white) !important;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  padding: 14px 30px;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(11, 27, 63, 0.15);
}

.sponsors-cta-btn:hover {
  background: var(--signal-red);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(232, 48, 42, 0.25);
}

/* ── Responsive styling ── */
@media (max-width: 1024px) {
  .details-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .ticket-info-card {
    position: static;
  }
}

@media (max-width: 768px) {
  .sangam-hero {
    padding: 110px 0 60px;
    background-attachment: scroll;
    /* parallax disabled on mobile */
  }

  .sangam-hero__meta {
    flex-direction: column;
    gap: 16px;
  }

  .countdown-card {
    padding: 30px 24px;
  }

  .countdown-grid {
    gap: 12px;
  }

  .countdown-item {
    padding: 12px 6px;
  }

  .details-card,
  .ticket-info-card {
    padding: 24px;
  }

  /* Sponsors responsive adjust */
  .sponsors-section {
    padding: 60px 0;
  }

  .sponsors-title {
    font-size: 1.8rem;
  }

  .gold-tier .sponsors-grid {
    grid-template-columns: minmax(220px, 280px);
  }

  .silver-tier .sponsors-grid {
    grid-template-columns: repeat(2, minmax(160px, 200px));
    max-width: 440px;
  }

  .sponsors-cta {
    padding: 24px 20px;
    margin-top: 40px;
  }
}

@media (max-width: 480px) {
  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .silver-tier .sponsors-grid {
    grid-template-columns: 1fr;
    max-width: 220px;
  }
}
```

---

## File 60 {#file-60}

**📄 Path:** `src\pages\Sangam2026.jsx`

```jsx
import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
import eventImg from '../assets/event-vadodara.avif'
import sangamLogo from '../assets/Logo/sangam-logo.avif'
import './Sangam2026.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'
import { sponsorTiers } from '../data/SponserData'

export default function Sangam2026() {
  // Countdown timer calculations
  const calculateTimeLeft = () => {
    const eventDate = new Date('December 20, 2026 16:00:00').getTime()
    const now = new Date().getTime()
    const difference = eventDate - now

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Scroll to top on load
    window.scrollTo(0, 0)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="sangam-page">
      {/* ── Hero Banner ── */}
      <section className="sangam-hero" style={{ backgroundImage: `linear-gradient(rgba(11, 27, 63, 0.92), rgba(11, 27, 63, 0.85)), url(${eventImg})` }}>
        <div className="container sangam-hero__inner">
          <div className="sangam-hero__content">
            <span className="sangam-hero__eyebrow">GRAND HOMECOMING REUNION</span>
            <h1 className="sangam-hero__title">
              SANGAM <span>2026</span>
            </h1>
            <p className="sangam-hero__sub">
              Reconnect, relive, and celebrate the enduring legacy of the Diploma in Fabrication Technology.
              Join generations of DFT alumni in Vadodara for an evening of shared memories and future visions.
            </p>

            <span className="hero-register-btn hero-register-btn--disabled" style={{ opacity: 0.8, cursor: 'default' }}>
              REGISTRATIONS OPENING SOON
            </span>

            {/* Quick Details Bar */}
            <div className="sangam-hero__meta">
              <div className="sangam-meta-item">
                <FaCalendarAlt className="meta-icon" />
                <div>
                  <div className="meta-label">DATE</div>
                  <div className="meta-val">Dec 20, 2026</div>
                </div>
              </div>
              <div className="sangam-meta-item">
                <FaClock className="meta-icon" />
                <div>
                  <div className="meta-label">TIME</div>
                  <div className="meta-val">To Be Announced</div>
                </div>
              </div>
              <div className="sangam-meta-item">
                <FaMapMarkerAlt className="meta-icon" />
                <div>
                  <div className="meta-label">LOCATION</div>
                  <div className="meta-val">Shakti Greens and Banquet, Vadodara, Gujarat</div>
                  <a
                    href="https://maps.app.goo.gl/FumHN3J6gbZuJ8Rd9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="venue-map-btn"
                  >
                    Open in Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sangam-hero__logo-card reveal">
            <div className="logo-card-inner">
              <ImageWithSkeleton src={sangamLogo} alt="Sangam 2026 Logo" className="sangam-hero-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Countdown section ── */}
      <section className="countdown-section">
        <div className="container">
          <div className="countdown-card">
            <h2 className="countdown-title">COUNTDOWN TO SANGAM 2026</h2>
            <div className="countdown-grid">
              <div className="countdown-item">
                <span className="countdown-num">{timeLeft.days || '0'}</span>
                <span className="countdown-label">DAYS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0') || '00'}</span>
                <span className="countdown-label">HOURS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0') || '00'}</span>
                <span className="countdown-label">MINUTES</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-num">{String(timeLeft.seconds).padStart(2, '0') || '00'}</span>
                <span className="countdown-label">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Details Grid ── */}
      <section className="section sangam-details">
        <div className="container details-grid">

          {/* Left Column: Schedule & Highlights */}
          <div className="details-main">
            {/* Event Schedule commented out as it is not finalized yet
            <div className="details-card">
              <h2 className="details-heading">Event Schedule</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-time">04:00 PM</div>
                  <div className="timeline-content">
                    <h3>Registration & Welcome Reception</h3>
                    <p>Collect entry badges, alumni souvenirs, and enjoy high-tea while meeting batchmates.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">05:30 PM</div>
                  <div className="timeline-content">
                    <h3>Inaugural Ceremony & Legacy Talk</h3>
                    <p>Lamp lighting, address by distinguished professors, and special presentations highlighting DFT achievements.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">06:30 PM</div>
                  <div className="timeline-content">
                    <h3>Nostalgia & Interaction Panel</h3>
                    <p>Open mic session where alumni from different batches share their college memories and professional journeys.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">08:00 PM</div>
                  <div className="timeline-content">
                    <h3>Gala Dinner & Musical Night</h3>
                    <p>Indulge in a premium buffet dinner accompanied by live acoustic performances and networking sessions.</p>
                  </div>
                </div>
              </div>
            </div>
            */}

            <div className="details-card highlights-card">
              <h2 className="details-heading">Reunion Highlights</h2>
              <ul className="highlights-list">
                <li>
                  <FaCheckCircle className="hl-icon" />
                  <span><strong>Global Network:</strong> Connect with over 300+ alumni working in top fabrication, manufacturing, and design industries globally.</span>
                </li>
                <li>
                  <FaCheckCircle className="hl-icon" />
                  <span><strong>Faculty Interaction:</strong> Pay tribute to our beloved retired and current faculty members of Sir Bhavsinhji Polytechnic.</span>
                </li>
                <li>
                  <FaCheckCircle className="hl-icon" />
                  <span><strong>Commemorative Souvenir:</strong> Get a custom-designed DFT Alumni memorabilia pack at registration.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Ticket details and Register CTA */}
          <div className="details-sidebar">
            {/* Active Ticket / Registration info card commented out
            <div className="ticket-info-card">
              <h3 className="ticket-card-title">Entry Pass & Registration</h3>
              <p className="ticket-card-sub">Secure your place at the grandest homecoming. Paid registration is required for entry.</p>

              <ul className="ticket-benefits-list">
                <li>
                  <FaCheckCircle className="benefit-icon" />
                  <span>Full access to all event sessions & panel talks</span>
                </li>
                <li>
                  <FaCheckCircle className="benefit-icon" />
                  <span>Grand buffet dinner & high-tea reception</span>
                </li>
                <li>
                  <FaCheckCircle className="benefit-icon" />
                  <span>DFT Alumni kit (memorabilia, T-shirt & badge)</span>
                </li>
              </ul>

              <Link to="/sangam2026/register" className="register-now-btn">
                REGISTER NOW
              </Link>

              <p className="ticket-note">* Registration closes on December 10, 2026. Limited passes available.</p>
            </div>
            */}

            {/* Registration opening soon card */}
            <div className="ticket-info-card">
              <h3 className="ticket-card-title">Registration</h3>
              <p className="ticket-card-sub" style={{ marginBottom: '24px' }}>
                Details about entry passes and registration will be announced soon. Stay tuned!
              </p>
              <div className="register-opening-soon" style={{
                background: 'rgba(232, 48, 42, 0.1)',
                border: '1px dashed var(--signal-red)',
                color: 'var(--signal-red)',
                textAlign: 'center',
                padding: '12px 18px',
                fontWeight: '700',
                fontSize: '0.9rem',
                letterSpacing: '1px'
              }}>
                REGISTRATIONS OPENING SOON
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Sponsors Section ── */}
      <section className="sponsors-section">
        <div className="container">
          <div className="sponsors-header">
            <span className="sponsors-eyebrow">PARTNERS & SPONSORS</span>
            <h2 className="sponsors-title">Supporting Sangam 2026</h2>
            <div className="title-underline"></div>
            <p className="sponsors-subtitle">
              We extend our heartfelt gratitude to the leading companies and alumni-led enterprises
              championing this grand reunion.
            </p>
          </div>

          <div className="sponsors-container">
            {sponsorTiers.map((tier) => (
              <div key={tier.id} className={`sponsor-tier ${tier.className}`}>
                <div className={`tier-badge ${tier.badgeClass}`}>{tier.name}</div>
                <div className="sponsors-grid">
                  {tier.sponsors.map((sponsor) => (
                    <div key={sponsor.id} className={`sponsor-card ${sponsor.cardClass}`}>
                      <div className="sponsor-logo">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          style={{ maxWidth: '100%', maxHeight: '52px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


          {/* Call for Sponsors CTA */}
          <div className="sponsors-cta">
            <h3 className="sponsors-cta-title">Interested in Sponsoring?</h3>
            <p className="sponsors-cta-text">
              Support this grand homecoming reunion and connect your brand with 300+ elite DFT graduates globally.
              Get in touch to receive our sponsorship deck.
            </p>
            <a href="mailto:dftalumnifamily@gmail.com" className="sponsors-cta-btn">
              GET IN TOUCH
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}

```

---

## File 61 {#file-61}

**📄 Path:** `src\pages\Stats.css`

```css
.stats {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
}

.stats__header {
  text-align: center;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.stats__title {
  font-size: clamp(2.2rem, 4.2vw, 3.2rem);
  color: var(--paper-white);
  line-height: 1.05;
}

.stats__title-red {
  color: var(--signal-red);
}

.stats__subtitle {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 540px;
  margin-top: 4px;
  line-height: 1.6;
}

/* ── Asymmetric 12-Column Bento Grid Layout ── */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;
}

/* ── Individual Bento Cards ── */
.bento-card {
  position: relative;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.bento-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
}

/* ── Asymmetric Bento Card Spans ── */
.bento-card--hero {
  grid-column: span 7;
  border-color: rgba(232, 48, 42, 0.25);
  min-height: 280px;
}

.bento-card--hero:hover {
  border-color: rgba(232, 48, 42, 0.6);
  box-shadow: 0 20px 45px rgba(232, 48, 42, 0.25);
}

.bento-card--legacy {
  grid-column: span 5;
  border-color: rgba(241, 196, 15, 0.2);
  min-height: 280px;
}

.bento-card--legacy:hover {
  border-color: rgba(241, 196, 15, 0.5);
  box-shadow: 0 20px 45px rgba(241, 196, 15, 0.2);
}

.bento-card--sponsor {
  grid-column: span 4;
  min-height: 240px;
}

.bento-card--specialist {
  grid-column: span 4;
  min-height: 240px;
}

.bento-card--live {
  grid-column: span 4;
  border-color: rgba(46, 204, 113, 0.25);
  min-height: 240px;
}

.bento-card--live:hover {
  border-color: rgba(46, 204, 113, 0.6);
  box-shadow: 0 20px 45px rgba(46, 204, 113, 0.2);
}

/* ── Card Header & Badges ── */
.bento-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.bento-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 6px 14px;
  border-radius: 100px;
}

.bento-card__badge--red {
  background: rgba(232, 48, 42, 0.12);
  color: var(--signal-red);
  border: 1px solid rgba(232, 48, 42, 0.3);
}

.bento-card__badge--gold {
  background: rgba(241, 196, 15, 0.12);
  color: #f1c40f;
  border: 1px solid rgba(241, 196, 15, 0.3);
}

.bento-card__badge--blue {
  background: rgba(52, 152, 219, 0.12);
  color: #3498db;
  border: 1px solid rgba(52, 152, 219, 0.3);
}

.bento-card__badge--purple {
  background: rgba(155, 89, 182, 0.12);
  color: #9b59b6;
  border: 1px solid rgba(155, 89, 182, 0.3);
}

.bento-card__badge--green {
  background: rgba(46, 204, 113, 0.12);
  color: #2ecc71;
  border: 1px solid rgba(46, 204, 113, 0.3);
}

.bento-card__tag {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
}

.bento-card__pulse-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #2ecc71;
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.25);
  padding: 4px 10px;
  border-radius: 100px;
}

.bento-card__pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2ecc71;
  box-shadow: 0 0 8px #2ecc71;
  animation: livePulse 1.8s infinite ease-in-out;
}

@keyframes livePulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; box-shadow: 0 0 12px #2ecc71; }
  100% { transform: scale(0.95); opacity: 0.7; }
}

/* ── Typography & Stats ── */
.bento-card__stat-huge {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3.2rem, 5vw, 4.2rem);
  color: var(--paper-white);
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.bento-card__stat-large {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.8rem, 4vw, 3.5rem);
  color: var(--paper-white);
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.bento-card__stat-med {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.4rem, 3.5vw, 3rem);
  color: var(--paper-white);
  line-height: 1;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}

.bento-card__plus {
  color: var(--signal-red);
  margin-left: 2px;
}

.bento-card__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.88rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 4px;
}

.bento-card__desc {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
}

/* ── Radial Glow Accents ── */
.bento-card__accent-glow {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: 0.4;
}

.bento-card__accent-glow.red {
  background: radial-gradient(circle, rgba(232, 48, 42, 0.25) 0%, transparent 70%);
}

.bento-card__accent-glow.gold {
  background: radial-gradient(circle, rgba(241, 196, 15, 0.25) 0%, transparent 70%);
}

.bento-card__accent-glow.blue {
  background: radial-gradient(circle, rgba(52, 152, 219, 0.25) 0%, transparent 70%);
}

.bento-card__accent-glow.purple {
  background: radial-gradient(circle, rgba(155, 89, 182, 0.25) 0%, transparent 70%);
}

.bento-card__accent-glow.green {
  background: radial-gradient(circle, rgba(46, 204, 113, 0.25) 0%, transparent 70%);
}

.bento-card:hover .bento-card__accent-glow {
  opacity: 1;
  transform: scale(1.3);
}

/* ── Responsive Bento Spans ── */
@media (max-width: 1024px) {
  .bento-card--hero,
  .bento-card--legacy {
    grid-column: span 6;
  }

  .bento-card--sponsor,
  .bento-card--specialist,
  .bento-card--live {
    grid-column: span 4;
  }
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
  }

  .bento-card--hero,
  .bento-card--legacy {
    grid-column: span 6;
    min-height: auto;
  }

  .bento-card--sponsor,
  .bento-card--specialist,
  .bento-card--live {
    grid-column: span 6;
    min-height: auto;
  }

  .bento-card {
    padding: 24px;
  }
}
```

---

## File 62 {#file-62}

**📄 Path:** `src\pages\Stats.jsx`

```jsx
import { useEffect, useRef, useState } from 'react'
import { FaUserGraduate, FaCalendarCheck, FaHandshake, FaTrophy, FaChartLine } from 'react-icons/fa'
import useVisitorCount from '../hooks/useVisitorCount'
import './Stats.css'

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.max(1, target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const visitorCount = useVisitorCount()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [])

  const countAlumni = useCountUp(1700, 1800, active)
  const countYears = useCountUp(43, 1800, active)
  const countSponsors = useCountUp(120, 1800, active)
  const countQualified = useCountUp(500, 1800, active)
  const countVisits = useCountUp(visitorCount || 1, 1800, active)

  return (
    <section className="section stats section-navy" ref={ref}>
      <div className="masthead-bg-lines" style={{ position: 'absolute', inset: 0 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div className="stats__header reveal">
          <span className="eyebrow">BY THE NUMBERS</span>
          <h2 className="stats__title display-title">
            OUR IMPACT <span className="stats__title-red">IN NUMBERS</span>
          </h2>
          <p className="stats__subtitle">
            Celebrating decades of excellence, professional growth, and global fabrication leadership.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">

          {/* Bento Card 1: Hero Large (Alumni Members) */}
          <div className="bento-card bento-card--hero reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--red">
                <FaUserGraduate /> GLOBAL NETWORK
              </div>
              <span className="bento-card__tag">PIONEERS</span>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-huge">
                {countAlumni.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">ALUMNI MEMBERS WORLDWIDE</h3>
              <p className="bento-card__desc">
                Connecting graduates spanning across top engineering industries, fabrication MNCs, research, and academia globally.
              </p>
            </div>
            <div className="bento-card__accent-glow red" />
          </div>

          {/* Bento Card 2: Legacy (43+ Years) */}
          <div className="bento-card bento-card--legacy reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--gold">
                <FaCalendarCheck /> EST. 1983
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-large">
                {countYears.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">YEARS OF LEGACY</h3>
              <p className="bento-card__desc">Unbroken tradition of technical excellence and industry leadership.</p>
            </div>
            <div className="bento-card__accent-glow gold" />
          </div>

          {/* Bento Card 3: Trusted Sponsors */}
          <div className="bento-card bento-card--sponsor reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--blue">
                <FaHandshake /> PARTNERSHIPS
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-med">
                {countSponsors.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">TRUSTED SPONSORS</h3>
              <p className="bento-card__desc">Partnering across flagship alumni meets and industrial conventions.</p>
            </div>
            <div className="bento-card__accent-glow blue" />
          </div>

          {/* Bento Card 4: Qualified Alumni */}
          <div className="bento-card bento-card--specialist reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--purple">
                <FaTrophy /> EXPERTISE
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-med">
                {countQualified.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">QUALIFIED ALUMNI</h3>
              <p className="bento-card__desc">Specialized experts certified in NDT, welding, corrosion & piping domain.</p>
            </div>
            <div className="bento-card__accent-glow purple" />
          </div>

          {/* Bento Card 5: Real-time Site Traffic (Live) */}
          <div className="bento-card bento-card--live reveal" style={{ transitionDelay: '0.5s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--green">
                <FaChartLine /> REAL-TIME TRAFFIC
              </div>
              <div className="bento-card__pulse-pill">
                <span className="bento-card__pulse-dot" /> LIVE
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-med">
                {countVisits.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">TOTAL SITE VISITS</h3>
              <p className="bento-card__desc">Live platform visitors interacting across our portal till now.</p>
            </div>
            <div className="bento-card__accent-glow green" />
          </div>

        </div>

      </div>
    </section>
  )
}

```

---

## File 63 {#file-63}

**📄 Path:** `src\pages\TermsAndConditions.css`

```css
/* ==========================================================================
   DFT ALUMNI — TERMS & CONDITIONS STYLES
   ========================================================================== */

.terms-page {
  padding: 120px 0 80px;
  background-color: var(--fog-grey);
  min-height: 100vh;
  font-family: var(--font-body);
}

.terms-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.terms-back-btn {
  background: var(--paper-white);
  border: 1px solid var(--line-grey);
  border-radius: 6px;
  padding: 10px 20px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  color: var(--navy-deep);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.terms-back-btn:hover {
  border-color: var(--navy-deep);
  transform: translateX(-4px);
  box-shadow: 0 6px 15px rgba(11, 27, 63, 0.08);
}

.terms-header {
  text-align: center;
  margin-bottom: 40px;
}

.terms-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(11, 27, 63, 0.06);
  color: var(--navy-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.terms-header-icon {
  font-size: 1.8rem;
}

.terms-header h1 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 2.5rem;
  color: var(--navy-deep);
  margin: 0 0 8px;
}

.terms-last-updated {
  font-size: 0.85rem;
  color: var(--slate);
  font-weight: 600;
  margin: 0;
}

.terms-header .title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--signal-red) 50%, var(--navy-deep) 50%);
  margin: 16px auto 0;
  border-radius: 2px;
}

.terms-card {
  background: var(--paper-white);
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 10px 40px rgba(11, 27, 63, 0.04);
  border: 1px solid var(--line-grey);
}

.terms-section {
  margin-bottom: 36px;
}

.terms-section:last-child {
  margin-bottom: 0;
}

.terms-section h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--navy-deep);
  margin: 0 0 12px;
  border-bottom: 1px solid var(--line-grey);
  padding-bottom: 8px;
}

.terms-section p {
  font-size: 0.95rem;
  color: var(--slate);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 600px) {
  .terms-page {
    padding: 100px 0 60px;
  }

  .terms-card {
    padding: 24px;
    border-radius: 12px;
  }

  .terms-header h1 {
    font-size: 2rem;
  }
}

```

---

## File 64 {#file-64}

**📄 Path:** `src\pages\TermsAndConditions.jsx`

```jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaFileContract } from 'react-icons/fa'
import './TermsAndConditions.css'

export default function TermsAndConditions() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms-page">
      <div className="container terms-container">
        
        {/* Back Button */}
        <div style={{ marginBottom: '24px' }}>
          <button 
            type="button"
            className="terms-back-btn" 
            onClick={() => navigate('/')}
          >
            <FaArrowLeft /> Return to Website
          </button>
        </div>

        {/* Page Header */}
        <div className="terms-header">
          <div className="terms-icon-wrapper">
            <FaFileContract className="terms-header-icon" />
          </div>
          <h1>Terms &amp; Conditions</h1>
          <p className="terms-last-updated">Last Updated: July 2026</p>
          <div className="title-underline"></div>
        </div>

        {/* Content Card */}
        <div className="terms-card">
          <div className="terms-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to the DFT Alumni Association Portal ("Website", "Service"). These Terms and Conditions 
              govern your use of this Website. By accessing and registering on this portal, you accept these terms in full. 
              If you disagree with any part of these terms, you must not use this Website.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, the DFT Alumni Association and/or its licensors own the intellectual property rights 
              published on this website and materials used on the Service. Subject to the license below, all these intellectual 
              property rights are reserved. You may view, download for caching purposes only, and print pages for your personal use.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Acceptable Use Policy</h2>
            <p>
              You must not use this Website in any way that causes, or may cause, damage to the Website or impairment of the 
              availability or accessibility of the portal. You must not use the portal to copy, store, host, transmit, send, 
              use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan 
              horse, worm, keystroke logger, rootkit, or other malicious computer software.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. User Registration and Profiles</h2>
            <p>
              To access directories, job boards, and networking features, you must register as a verified alumnus. 
              You are solely responsible for maintaining the confidentiality of your credentials. The Administrator 
              reserves the right to review academic degree information, verify passout batches, and revoke approval 
              or restrict accounts that submit falsified academic records or contact numbers.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Rights Content &amp; Copyright</h2>
            <p>
              All community postings, spotlight articles, newsletter documents, and official imagery on this portal are 
              protected under copyright and intellectual property laws of India. Users retain ownership of individual job vacancy 
              postings and certifications uploaded to their profiles, but grant the DFT Alumni Association a perpetual, royalty-free, 
              worldwide license to display and distribute this content within the network.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              The materials on this Website are provided on an "as is" basis. DFT Alumni Association makes no warranties, 
              expressed or implied, and hereby disclaims all other warranties. In no event shall the association or its 
              development partners be liable for any damages (including, without limitation, damages for loss of data or profit, 
              or due to business interruption) arising out of the use or inability to use the portal resources.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Governing Law</h2>
            <p>
              These Terms and Conditions will be governed by and construed in accordance with the laws of the State of Gujarat, 
              India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of 
              the courts of Bhavnagar.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

```

---

## File 65 {#file-65}

**📄 Path:** `src\pages\VisionMission.css`

```css
.vm__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

/* Card */
.vm__card {
  background: var(--paper-white);
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vm__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-elevated);
}

/* Image */
.vm__card-img-wrap {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.vm__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.vm__card:hover .vm__card-img {
  transform: scale(1.05);
}

/* Diagonal panel over image (design-system style) */
.vm__card-img-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 65%;
  background: var(--navy-deep);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.vm__card-img-panel--mission {
  background: var(--signal-red);
}

.vm__card-icon {
  font-size: 1.1rem;
  color: var(--paper-white);
  flex-shrink: 0;
}

.vm__card-label {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  color: var(--paper-white);
}

/* Card body */
.vm__card-body {
  padding: 28px 30px 34px;
}

.vm__card-title {
  font-size: 1.5rem;
  color: var(--navy-deep);
  margin-bottom: 14px;
  line-height: 1.1;
}

.vm__card-text {
  font-size: 0.93rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .vm__cards { grid-template-columns: 1fr; }
}

```

---

## File 66 {#file-66}

**📄 Path:** `src\pages\VisionMission.jsx`

```jsx
import { FaEye, FaBullseye } from 'react-icons/fa'
import visionImg from '../assets/VisionMission/vision.avif'
import missionImg from '../assets/VisionMission/mission.avif'
import './VisionMission.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

export default function VisionMission() {
  return (
    <section className="section section-fog vm" id="vision">
      <div className="container">

        {/* Section header */}
        <div className="section-head reveal">
          <h2>Vision &amp; <span>Mission</span></h2>
        </div>
        <p className="section-sub reveal">
          Guided by a clear purpose — the DFT Alumni Association is committed to excellence,
          unity, and meaningful contribution to the institute and community.
        </p>

        {/* Cards */}
        <div className="vm__cards">
          {/* Vision card */}
          <div className="vm__card reveal-left">
            <div className="vm__card-img-wrap">
              <ImageWithSkeleton src={visionImg} alt="Our Vision" className="vm__card-img" />
              {/* Diagonal clip overlay */}
              <div className="vm__card-img-panel">
                <FaEye className="vm__card-icon" />
                <span className="vm__card-label">OUR VISION</span>
              </div>
            </div>
            <div className="vm__card-body">
              <div className="red-accent-bar" />
              <h3 className="vm__card-title display-title">A Global Community<br />of Excellence</h3>
              <p className="vm__card-text body-text">
                To build an enduring global network of DFT graduates who inspire each other, contribute
                to society, and uphold the values of integrity, innovation, and compassion that
                Sir Bhavsinhji Polytechnic is celebrated for.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="vm__card reveal-right">
            <div className="vm__card-img-wrap">
              <ImageWithSkeleton src={missionImg} alt="Our Mission" className="vm__card-img" />
              <div className="vm__card-img-panel vm__card-img-panel--mission">
                <FaBullseye className="vm__card-icon" />
                <span className="vm__card-label">OUR MISSION</span>
              </div>
            </div>
            <div className="vm__card-body">
              <div className="red-accent-bar" />
              <h3 className="vm__card-title display-title">Empower, Connect<br />&amp; Give Back</h3>
              <p className="vm__card-text body-text">
                To actively engage alumni in meaningful ways — fostering mentorship, enabling
                professional connections, celebrating shared heritage, and channeling collective
                energy toward the growth of DFT and its students.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

```

---

## File 67 {#file-67}

**📄 Path:** `src\utils\hash.js`

```javascript
// src/utils/hash.js
//
// Uses the browser's built-in Web Crypto API (crypto.subtle) — no extra
// dependency needed. Requires a secure context (HTTPS or localhost), which
// is already true for any deployed Vite/Firebase Hosting app.

export async function sha256Hex(input) {
    const encoder = new TextEncoder()
    const data = encoder.encode(input)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function normalizeEmail(email) {
    return (email || '').trim().toLowerCase()
}

// Country-code prefixes vary (e.g. "+91 9876543210" vs "9876543210"),
// which previously worked because the app did suffix-matching on raw
// digits. Hashes can't be suffix-matched, so instead we normalize to a
// canonical form BEFORE hashing: strip all non-digits, then keep only
// the last 10 digits (standard mobile number length). This makes
// "+91 9876543210" and "9876543210" hash identically.
export function canonicalPhoneDigits(phone) {
    const digits = (phone || '').replace(/\D/g, '')
    return digits.length > 10 ? digits.slice(-10) : digits
}

export async function hashEmail(email) {
    return sha256Hex(normalizeEmail(email))
}

export async function hashPhoneDigits(phone) {
    const canonical = canonicalPhoneDigits(phone)
    if (!canonical) return ''
    return sha256Hex(canonical)
}
```

---

## File 68 {#file-68}

**📄 Path:** `vercel.json`

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

---

## File 69 {#file-69}

**📄 Path:** `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

---
