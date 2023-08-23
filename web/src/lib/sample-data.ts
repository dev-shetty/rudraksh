export const sampleData = {
  access_token: "WeDyEPJVhN7Z0hc",
  model_version: "plant_id:3.1.3",
  custom_id: null,
  input: {
    latitude: null,
    longitude: null,
    similar_images: true,
    health: "only",
    images: [
      "https://plant.id/media/imgs/c18baaaff04942cca8b3963e868e2a65.jpg",
    ],
    datetime: "2023-08-23T16:24:09.530277+00:00",
  },
  result: {
    is_plant: {
      probability: 1.0,
      binary: true,
      threshold: 0.5,
    },
    is_healthy: {
      probability: 0.00011479854583740234,
      binary: false,
      threshold: 0.63,
    },
    disease: {
      suggestions: [
        {
          id: "7f22438065988f95",
          name: "Fungi",
          probability: 0.9976417,
          similar_images: [
            {
              id: "c2a873ddf5a6e05f84b24e66268f08e72c2db0d9",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/c2a/873ddf5a6e05f84b24e66268f08e72c2db0d9.jpg",
              similarity: 0.647,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/c2a/873ddf5a6e05f84b24e66268f08e72c2db0d9.small.jpg",
            },
            {
              id: "2f1c4c73dba8144c8db9479cbc64c35a87cc883b",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/2f1/c4c73dba8144c8db9479cbc64c35a87cc883b.jpeg",
              license_name: "CC BY 3.0",
              license_url: "https://creativecommons.org/licenses/by/3.0/",
              citation:
                "Gerald Holmes, Strawberry Center, Cal Poly San Luis Obispo, Bugwood.org ",
              similarity: 0.642,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/2f1/c4c73dba8144c8db9479cbc64c35a87cc883b.small.jpeg",
            },
          ],
          details: {
            local_name: "Fungi",
            description:
              "Fungi take energy from the plants on which they live, causing damage to the plant. Fungal infections are responsible for approximately two-thirds of infectious plant diseases and cause wilting, molding, rusts, scabs, rotted tissue, and other problems.",
            url: "https://en.wikipedia.org/wiki/Fungus",
            treatment: {
              chemical: [
                "If necessary, apply a fungicide. If you don' know the fungus species, choose fungicide based on the infected plant (e.g. house plant, garden plant, tree).",
              ],
              biological: [
                "If possible remove and destroy the infected parts of the plant. Burn it, toss it into the garbage, or bury it deeply. Do not compost.",
                "Apply ecological products for plant protection (e.g. neem oil, baking soda, soap).",
              ],
              prevention: [
                "Use resistant species and cultivars as well as healthy, certified seeds and seedlings.",
                "Ensure having good soil drainage to avoid overwatering.",
                "Improve the air circulation around the plant (e.g. by pruning excess foliage or increasing the spacing between plants).",
                "Avoid prolonged wetting of the leaves, which can be caused e.g. by overhead irrigation.",
                "Rotate crops. Avoid planting sensitive crops in infested soil.",
                "Disinfect tools, infected flower pots, and hands to avoid disease transmission.",
              ],
            },
            classification: [],
            common_names: null,
            cause: null,
            language: "en",
            entity_id: "7f22438065988f95",
          },
        },
        {
          id: "5410caa10cfea0f3",
          name: "Bacteria",
          probability: 0.040075865,
          similar_images: [
            {
              id: "fe0f1e6a9319310ba9707501156ce8080e2f7e2c",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/fe0/f1e6a9319310ba9707501156ce8080e2f7e2c.jpg",
              similarity: 0.653,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/fe0/f1e6a9319310ba9707501156ce8080e2f7e2c.small.jpg",
            },
            {
              id: "8b3209bdf3b329a328a4e7536405c5b33c3b23ec",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/8b3/209bdf3b329a328a4e7536405c5b33c3b23ec.jpg",
              similarity: 0.613,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/8b3/209bdf3b329a328a4e7536405c5b33c3b23ec.small.jpg",
            },
          ],
          details: {
            local_name: "Bacteria",
            description:
              "Bacterial infections cause damage to plant tissues and the symptoms include vascular wilt, necrosis, soft rot, and tumors. Bacterial pathogens enter the plant through wounds and the spread of infection is facilitated by stress conditions (e.g. by overwatering).",
            url: "https://en.wikipedia.org/wiki/Bacteria",
            treatment: {
              chemical: [
                "If necessary, apply bactericide. It will reduce the spreading of bacteria.",
              ],
              biological: [
                "If possible remove and destroy the infected plant. Burn it or toss it into the garbage. Do not compost.",
              ],
              prevention: [
                "Use resistant species and cultivars as well as healthy, certified seeds and seedlings.",
                "Disinfect tools, infected flower pots, and hands to avoid disease transmission.",
                "Keep the moisture low, avoid prolonged wetting of the leaves (e.g. by overhead irrigation) and ensure good soil drainage.",
                "Avoid mechanical damage to plants. Injuries provide a point of access for the bacterium.",
                "Use healthy, certified seeds and seedlings.",
              ],
            },
            classification: [],
            common_names: null,
            cause: null,
            language: "en",
            entity_id: "5410caa10cfea0f3",
          },
        },
        {
          id: "489fd19063e93c81",
          name: "Alternaria",
          probability: 0.021103274,
          similar_images: [
            {
              id: "c8396a0364319bf780b3a28ac31a7cee46d29d6d",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/c83/96a0364319bf780b3a28ac31a7cee46d29d6d.jpeg",
              license_name: "CC BY 3.0",
              license_url: "https://creativecommons.org/licenses/by/3.0/",
              citation:
                "Gerald Holmes, Strawberry Center, Cal Poly San Luis Obispo, Bugwood.org ",
              similarity: 0.846,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/c83/96a0364319bf780b3a28ac31a7cee46d29d6d.small.jpeg",
            },
            {
              id: "46011d24bb05814ecfe1b6588faf5dafb5923e0b",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/460/11d24bb05814ecfe1b6588faf5dafb5923e0b.jpg",
              similarity: 0.783,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/460/11d24bb05814ecfe1b6588faf5dafb5923e0b.small.jpg",
            },
          ],
          details: {
            local_name: "Alternaria",
            description:
              "Alternaria is a fungal pathogen affecting many important crops, such as oil crops, cereals, and vegetables. It typically causes spots on leaves or stem cankers.",
            url: "https://en.wikipedia.org/wiki/Alternaria",
            treatment: {
              chemical: [
                "If necessary, apply fungicide containing azoxystrobin (GHS06: Toxic, GHS09: Environmental hazard).",
                "If necessary, apply fungicide containing chlorothalonil (GHS05: Corrosive, GHS06: Toxic, GHS07: Harmful, GHS08: Health hazard, GHS09: Environmental hazard).",
              ],
              biological: [
                "Remove weeds as well as all dead plant tissue. They may be a source of infection.",
                "Apply ecological products for plant protection (e.g. copper-based spray).",
              ],
              prevention: [
                "Use resistant species and cultivars as well as healthy, certified seeds and seedlings.",
                "Avoid prolonged wetting of the leaves, which can be caused e.g. by overhead irrigation.",
                "Improve the air circulation around the plant (e.g. by pruning excess foliage or increasing the spacing between plants).",
                "Rotate crops. Avoid planting sensitive crops in infested soil.",
                "Disinfect tools, infected flower pots, and hands to avoid disease transmission.",
              ],
            },
            classification: [
              "Fungi",
              "Ascomycetes",
              "Pezizomycotina",
              "Dothideomycetes",
              "Pleosporaceae",
            ],
            common_names: null,
            cause: null,
            language: "en",
            entity_id: "489fd19063e93c81",
          },
        },
      ],
    },
  },
  status: "COMPLETED",
  sla_compliant_client: true,
  sla_compliant_system: true,
  created: 1692807849.530277,
  completed: 1692807849.841923,
}
