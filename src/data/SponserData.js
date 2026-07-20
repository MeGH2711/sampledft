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
