/**
 * ============================================================================
 * DGC FINDER — OFFICIAL PORT HARCOURT ROUTE DATA (routes.js)
 * Dual-Language Edition: English (`en`) & Port Harcourt Street Pidgin (`pcm`)
 * Pure Vanilla JavaScript — No bundler or build step required.
 * ============================================================================
 */

const FOLLOW_UP_WHATSAPP = "2348165992846";

const CHURCH_DETAILS = {
  name: "Davidic Generation Church",
  shortName: "DGC Port Harcourt",
  address: "No. 42 Elioparanwo Road, By Car Wash Junction, Port Harcourt, Nigeria, 500272",
  shortAddress: "No. 42 Elioparanwo Rd, By Car Wash Junction",
  finalDropoffLandmark: "Car Wash Junction -> No. 42 Elioparanwo Road",
  boltUberSearchQuery: "No. 42 Elioparanwo Road, By Car Wash Junction, Port Harcourt",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=42+Elioparanwo+Road+Car+Wash+Junction+Port+Harcourt",
  logoUrl: "logo.webp",
  fallbackLogoUrl: "/assets/aistudio/DGC-all-white-logo_1.5x-1-e1683712340276__2__7783e50f.webp",
};

const QUICK_SELECT_HUBS = [
  { id: "choba", label: "Choba" },
  { id: "artillery", label: "Artillery" },
  { id: "rumuokoro", label: "Rumuokoro" },
  { id: "eleme", label: "Eleme / Oil Mill" },
  { id: "mile3", label: "Mile 3 / Town" },
  { id: "waterlines", label: "Waterlines" },
  { id: "ozuoba", label: "Ozuoba" },
  { id: "rumuji", label: "Rumuji" },
  { id: "slaughter", label: "Slaughter / Woji" },
  { id: "wimpy", label: "Wimpy / Iwofe" },
];

const routesData = [
  {
    id: "choba",
    area: "Choba / Uniport / Alakahia",
    traffic: "slow",
    trafficNoteEn: "Moderate flow around Choba & Location Junction",
    trafficNotePcm: "Moving small-small for Choba & Location side",
    keywords: ["choba", "uniport", "alakahia", "rumuosi", "abuja campus", "east west road"],
    routes: [
      {
        titleEn: "Option 1: Via Gateway Junction (Ada George)",
        titlePcm: "Option 1: Pass Gateway Junction (Ada George Side — No Cap, Sharp Movement)",
        steps: [
          {
            en: "From Choba Junction, enter a shuttle or bus heading to Mile 3 (via Location / Ada George Road).",
            pcm: "As you reach Choba Junction, stand well make bus load. Enter shuttle or bus wey conductor dey shout 'Location! Ada George! Mile 3!' sharp sharp (make sure say na through Location / Ada George road e dey go, na true true)."
          },
          {
            en: "Tell the driver to drop you at Gateway Junction (along Ada George Road).",
            pcm: "Once you pass Mgbuoba/Location, no be say I say make you sleep oo, shine your eye well for junction! Even if passengers dey argue over fifty naira change, tell driver loud and clear: 'Oga, drop me for Gateway Junction!' No let them carry you pass o."
          },
          {
            en: "At Gateway Junction, take a Keke going to Car Wash.",
            pcm: "As you land for Gateway Junction, waka well small make you join Keke line sharp sharp. Tell the Keke driver: 'Car Wash!' (Make sure na the one wey dey go inside Elioparanwo)."
          },
          {
            en: "Drop at Car Wash Junction and walk down to No. 42 Elioparanwo Road (Davidic Generation Church).",
            pcm: "When Keke drop you for Car Wash Junction gba, bring down your legs and waka well small enter No. 42 Elioparanwo Road. Omo, you don land DGC be that! Port Harcourt boy / girl no dey carry last — welcome home!"
          }
        ]
      },
      {
        titleEn: "Option 2: Via St. John's (Ikwerre Road)",
        titlePcm: "Option 2: Pass St. John's (Ikwerre Road Side — Sharp Sharp)",
        steps: [
          {
            en: "From Choba, take a shuttle heading to St. John's (along Ikwerre Road).",
            pcm: "From Choba park or junction, enter motor wey conductor dey shout St. John's along Ikwerre Road sharp sharp. Hold your change ready make conductor drama no hold you."
          },
          {
            en: "Once you drop at St. John's, enter a Keke heading into Elioparanwo / Car Wash.",
            pcm: "As you drop for St. John's junction, no waste time at all. Waka well enter Keke wey dey enter Elioparanwo / Car Wash."
          },
          {
            en: "Tell the Keke driver to drop you at Davidic Generation Church (No. 42 Elioparanwo Road, by Car Wash Junction).",
            pcm: "Tell the Keke rider make e negotiate traffic sharp sharp and drop you straight for Davidic Generation Church gate (No. 42 Elioparanwo Road, near Car Wash). Na true true, you don reach!"
          }
        ]
      }
    ]
  },
  {
    id: "artillery",
    area: "Artillery / Rumuola / Rumuobiakani",
    traffic: "slow",
    trafficNoteEn: "Slow movement around Rumuola Flyover",
    trafficNotePcm: "Motor plenty small for Rumuola junction",
    keywords: ["artillery", "rumuola", "rumuobiakani", "okporo", "aba road", "airforce"],
    routes: [
      {
        titleEn: "Standard Route via Rumuola & Location",
        titlePcm: "Normal Way: Pass Rumuola and Location Junction (No Cap)",
        steps: [
          {
            en: "From Artillery, enter a bus heading to Rumuola.",
            pcm: "From Artillery junction, join queue or enter bus wey conductor dey shout 'Rumuola! Rumuola!' sharp sharp."
          },
          {
            en: "From Rumuola, board a bus heading to Location Junction (Mgbuoba).",
            pcm: "As you drop for Rumuola flyover/junction, waka well cross enter another bus wey dey go Location Junction (Mgbuoba). E choke small for Rumuola sometimes, so move sharp sharp."
          },
          {
            en: "From Location Junction, take a bus or shuttle heading down Ada George Road (toward Mile 3/Agip) and drop at Gateway Junction.",
            pcm: "When you reach Location Junction, enter shuttle wey dey go down Ada George (toward Agip/Mile 3). No be say I say make you sleep oo, shine your eye for junction and tell driver make e drop you for Gateway Junction."
          },
          {
            en: "At Gateway Junction, take a Keke going to Car Wash Junction, then walk down to No. 42 Elioparanwo Road (DGC).",
            pcm: "From Gateway Junction, enter Keke gba go Car Wash Junction, then waka well small reach No. 42 Elioparanwo Road (DGC). You don land sharp sharp!"
          }
        ]
      }
    ]
  },
  {
    id: "rumuokoro",
    area: "Rumuokoro / Eliozu / Rukpokwu",
    traffic: "choke",
    trafficNoteEn: "Heavy traffic at Rumuokoro Roundabout",
    trafficNotePcm: "E choke for Rumuokoro Roundabout — shine eye",
    keywords: ["rumuokoro", "eliozu", "rukpokwu", "igwuruta", "airport", "nkpolu", "eneka"],
    routes: [
      {
        titleEn: "Rumuokoro Interchange Route",
        titlePcm: "Rumuokoro Roundabout Wahala Free Route (E Choke But We Move!)",
        steps: [
          {
            en: "Get to Rumuokoro Roundabout and board a shuttle heading to Mile 3 (either via Location/Ada George OR via Ikwerre Road to St. John's).",
            pcm: "Omo, Rumuokoro fit busy o — e choke for traffic sometimes! If traffic hold you for Rumuokoro, just buy gala and chill. Stand well for motor loading point, enter shuttle wey dey go Mile 3 (you fit follow Ada George side or follow Ikwerre Road go St. John's)."
          },
          {
            en: "If going through Ada George, drop at Gateway Junction. If going through Ikwerre Road, drop at St. John's.",
            pcm: "No be say I say make you sleep oo, shine your eye for junction! If na Ada George motor you enter, tell conductor loud make e drop you for Gateway Junction. If na Ikwerre Road bus, drop for St. John's sharp sharp."
          },
          {
            en: "Enter a Keke heading to Car Wash Junction and drop at Davidic Generation Church (No. 42 Elioparanwo Road).",
            pcm: "From there, enter Keke wey dey go Car Wash. Watch how the Keke rider dey negotiate corner gba, and tell am say you dey drop for Davidic Generation Church (No. 42 Elioparanwo Road). Na true true, you don land!"
          }
        ]
      }
    ]
  },
  {
    id: "eleme",
    area: "Eleme Junction / Oil Mill / Oyigbo",
    traffic: "choke",
    trafficNoteEn: "Heavy traffic along Oil Mill & Eleme axis",
    trafficNotePcm: "E choke small for Oil Mill / Eleme park side",
    keywords: ["eleme", "oil mill", "oyigbo", "akpajo", "igbo etche", "elelenwo"],
    routes: [
      {
        titleEn: "From Aba Road Axis to Ada George",
        titlePcm: "From Aba Road / Oil Mill Axis Connect go Ada George",
        steps: [
          {
            en: "From Eleme Junction or Oil Mill, board a bus heading to Rumuola (or Rumuokoro).",
            pcm: "From Eleme Junction or Oil Mill busy park (e choke small for market day, no cap!), shine your eye enter bus wey conductor dey shout Rumuola or Rumuokoro."
          },
          {
            en: "From Rumuola, take a bus to Location Junction (Ada George).",
            pcm: "As you reach Rumuola, waka well cross enter motor wey dey go Location Junction (Ada George) sharp sharp."
          },
          {
            en: "From Location Junction, enter a shuttle going down Ada George Road and stop at Gateway Junction.",
            pcm: "From Location, enter shuttle wey dey go down Ada George Road. Before passengers finish arguing over change, tell driver loud: 'Gateway Junction I drop o!'"
          },
          {
            en: "Take a Keke from Gateway Junction to Car Wash Junction, then walk down to No. 42 Elioparanwo Road (DGC).",
            pcm: "From Gateway Junction, enter Keke go Car Wash Junction, then waka well down small enter No. 42 Elioparanwo Road (DGC). Sharp movement, welcome home!"
          }
        ]
      }
    ]
  },
  {
    id: "mile3",
    area: "Mile 3 / Mile 1 / Diobu / Borokiri",
    traffic: "slow",
    trafficNoteEn: "Moderate loading traffic at Mile 3 Park",
    trafficNotePcm: "Slow small for Mile 3 bus stop loading point",
    keywords: ["mile 3", "mile 1", "mile 2", "diobu", "borokiri", "town", "d-line", "dline", "ust", "rsu", "ikoku"],
    routes: [
      {
        titleEn: "From Diobu & Mile 3 Axis",
        titlePcm: "From Diobu & Mile 3 Axis (Sharp Sharp Movement)",
        steps: [
          {
            en: "Take a bus to Mile 3 Park / Bus Stop.",
            pcm: "First, enter motor or Keke come out straight for Mile 3 Park / Bus Stop sharp sharp."
          },
          {
            en: "From Mile 3, board a bus or shuttle going up Ada George Road (heading toward Location) and tell the driver to stop you at Gateway Junction.",
            pcm: "From Mile 3 loading spot where conductors dey shout 'Ada George! Location!', enter bus or shuttle going up Ada George, and tell driver make e drop you for Gateway Junction. No be say I say make you sleep oo, shine your eye for junction!"
          },
          {
            en: "From Gateway Junction, enter a Keke going to Car Wash Junction and walk down to No. 42 Elioparanwo Road (DGC).",
            pcm: "Once you drop for Gateway Junction gba, enter Keke go Car Wash Junction, then waka well reach No. 42 Elioparanwo Road (DGC). No cap, you don land!"
          }
        ]
      }
    ]
  },
  {
    id: "waterlines",
    area: "Waterlines / Garrison / GRA",
    traffic: "free",
    trafficNoteEn: "Smooth flow via Waterlines & Ada George",
    trafficNotePcm: "Road free well for Waterlines / GRA axis",
    keywords: ["waterlines", "garrison", "gra", "new gra", "old gra", "presidential", "ororo", "agip"],
    routes: [
      {
        titleEn: "From Aba Road / Waterlines",
        titlePcm: "From Aba Road / Waterlines (Waka Well Route)",
        steps: [
          {
            en: "From Waterlines or Garrison, board a bus heading to Agip / Ada George (or via Rumuola to Location Junction).",
            pcm: "From Waterlines or Garrison bus stop, enter bus wey conductor dey call Agip / Ada George (or follow Rumuola go Location Junction) sharp sharp."
          },
          {
            en: "Take a shuttle along Ada George Road and stop at Gateway Junction.",
            pcm: "Follow shuttle wey dey run Ada George Road. Shine your eye well and tell driver make e drop you for Gateway Junction."
          },
          {
            en: "Enter a Keke going to Car Wash Junction and walk down to No. 42 Elioparanwo Road (DGC).",
            pcm: "From Gateway Junction, enter Keke go Car Wash Junction, then waka well down small reach No. 42 Elioparanwo Road (DGC). Na true true, easy movement!"
          }
        ]
      }
    ]
  },
  {
    id: "ozuoba",
    area: "Ozuoba / Rumualogu / NTA Road",
    traffic: "free",
    trafficNoteEn: "Clear road along NTA & Location axis",
    trafficNotePcm: "Road free — waka well sharp sharp",
    keywords: ["ozuoba", "nta", "rumualogu", "choba", "obiri ikwerre", "mgbuoba", "location"],
    routes: [
      {
        titleEn: "From NTA / Ozuoba Axis",
        titlePcm: "From NTA / Ozuoba Axis (Sharp Connect)",
        steps: [
          {
            en: "Take a bus or Keke out to Location Junction (Mgbuoba).",
            pcm: "Enter Keke or short bus come out straight for Location Junction (Mgbuoba) sharp sharp."
          },
          {
            en: "From Location Junction, enter a shuttle heading toward Agip / Mile 3 along Ada George Road and drop at Gateway Junction.",
            pcm: "From Location Junction (even if traffic choke small for flyover side), enter shuttle wey dey go Agip / Mile 3 side on Ada George Road, make driver drop you for Gateway Junction."
          },
          {
            en: "Take a Keke from Gateway Junction to Car Wash Junction, then walk down to No. 42 Elioparanwo Road (DGC).",
            pcm: "Enter Keke from Gateway Junction gba go Car Wash Junction, then waka well reach No. 42 Elioparanwo Road (DGC). Na true true, welcome home!"
          }
        ]
      }
    ]
  },
  {
    id: "rumuji",
    area: "Rumuji / Emohua / Ahoada (East-West Road)",
    traffic: "free",
    trafficNoteEn: "Steady highway flow into Choba Junction",
    trafficNotePcm: "East-West Road free well enter Choba",
    keywords: ["rumuji", "emohua", "ibaa", "nvele", "ahoada", "east west"],
    routes: [
      {
        titleEn: "From East-West Road Entry",
        titlePcm: "From East-West Road Coming In (No Cap)",
        steps: [
          {
            en: "Board an East-West Road bus heading into Port Harcourt and drop at Choba Junction.",
            pcm: "Enter East-West Road bus wey dey enter PH. Journey fit far small (e choke!), so relax well, then tell driver make e drop you for Choba Junction."
          },
          {
            en: "From Choba, take a shuttle heading to Mile 3 (stop at Gateway Junction on Ada George) OR take a shuttle to St. John's on Ikwerre Road.",
            pcm: "From Choba, no be say I say make you sleep oo, shine your eye enter Mile 3 shuttle wey dey follow Ada George (drop for Gateway Junction) OR enter St. John's shuttle for Ikwerre Road sharp sharp."
          },
          {
            en: "Take a Keke going to Car Wash Junction and drop at Davidic Generation Church (No. 42 Elioparanwo Road).",
            pcm: "From there, enter Keke wey dey go Car Wash Junction, drop straight for DGC (No. 42 Elioparanwo Road). Port Harcourt boy / girl no dey carry last!"
          }
        ]
      }
    ]
  },
  {
    id: "slaughter",
    area: "Slaughter / Trans-Amadi / Peter Odili / Woji",
    traffic: "slow",
    trafficNoteEn: "Moderate flow around Slaughter Bridge",
    trafficNotePcm: "Slow small for Slaughter / Trans-Amadi side",
    keywords: ["slaughter", "trans amadi", "peter odili", "woji", "odili road", "oginigba", "stadium road"],
    routes: [
      {
        titleEn: "From Trans-Amadi / Slaughter Axis",
        titlePcm: "From Trans-Amadi / Slaughter & Woji Axis",
        steps: [
          {
            en: "Take a bus or Keke out to Artillery Junction or Garrison/Rumuola.",
            pcm: "Enter bus or Keke come out for Artillery Junction or Garrison / Rumuola sharp sharp."
          },
          {
            en: "From Rumuola, board a bus to Location Junction, then connect a shuttle down Ada George Road to Gateway Junction.",
            pcm: "From Rumuola, enter motor go Location Junction, then connect shuttle wey dey go down Ada George and tell conductor make e drop you for Gateway Junction. Shine your eye well!"
          },
          {
            en: "From Gateway Junction, enter a Keke to Car Wash Junction and walk down to No. 42 Elioparanwo Road (DGC).",
            pcm: "At Gateway Junction, enter Keke gba go Car Wash Junction, then waka well small reach No. 42 Elioparanwo Road (DGC). Na true true, you don arrive!"
          }
        ]
      }
    ]
  },
  {
    id: "wimpy",
    area: "Wimpy / Iwofe / Rumuolumeni",
    traffic: "free",
    trafficNoteEn: "Clear movement via Wimpy & St. John's",
    trafficNotePcm: "Road free for Wimpy & St. John's axis",
    keywords: ["wimpy", "iwofe", "rumuolumeni", "rumuepirikom", "iaue", "st johns", "agip"],
    routes: [
      {
        titleEn: "From Iwofe / Wimpy Axis",
        titlePcm: "From Iwofe / Wimpy Axis (Sharp Gba Movement)",
        steps: [
          {
            en: "Take a Keke or bus to Wimpy Junction / St. John's (or come out to Ada George Road and head to Gateway Junction).",
            pcm: "Enter Keke or bus come out for Wimpy Junction / St. John's (or burst out for Ada George Road go Gateway Junction) sharp sharp."
          },
          {
            en: "From St. John's or Gateway Junction, board a Keke going directly to Car Wash Junction / Elioparanwo.",
            pcm: "From St. John's or Gateway Junction, enter Keke wey dey negotiate traffic go straight to Car Wash Junction / Elioparanwo."
          },
          {
            en: "Drop at Car Wash Junction and walk to No. 42 Elioparanwo Road (Davidic Generation Church).",
            pcm: "Drop for Car Wash Junction gba and waka well small enter No. 42 Elioparanwo Road. No cap, welcome to DGC!"
          }
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.FOLLOW_UP_WHATSAPP = FOLLOW_UP_WHATSAPP;
  window.CHURCH_DETAILS = CHURCH_DETAILS;
  window.QUICK_SELECT_HUBS = QUICK_SELECT_HUBS;
  window.routesData = routesData;
}
