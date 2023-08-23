export const sampleData = {
  access_token: "1cHTPkHVIUQMkOa",
  model_version: "plant_id:3.1.3",
  custom_id: null,
  input: {
    latitude: null,
    longitude: null,
    similar_images: true,
    health: "only",
    images: [
      "https://plant.id/media/imgs/f939a4dbb5024bd5921e87ac2b631953.jpg",
    ],
    datetime: "2023-08-23T05:44:08.088627+00:00",
  },
  result: {
    is_plant: {
      probability: 0.9999186,
      binary: true,
      threshold: 0.5,
    },
    is_healthy: {
      probability: 1.0728836059570312e-6,
      binary: false,
      threshold: 0.63,
    },
    disease: {
      suggestions: [
        {
          id: "7f22438065988f95",
          name: "Fungi",
          probability: 0.99999976,
          similar_images: [
            {
              id: "2f1c4c73dba8144c8db9479cbc64c35a87cc883b",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/2f1/c4c73dba8144c8db9479cbc64c35a87cc883b.jpeg",
              license_name: "CC BY 3.0",
              license_url: "https://creativecommons.org/licenses/by/3.0/",
              citation:
                "Gerald Holmes, Strawberry Center, Cal Poly San Luis Obispo, Bugwood.org ",
              similarity: 0.87,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/2f1/c4c73dba8144c8db9479cbc64c35a87cc883b.small.jpeg",
            },
            {
              id: "71a393215a51121da991d2f812749b7edfae45be",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/71a/393215a51121da991d2f812749b7edfae45be.jpeg",
              license_name: "CC BY 3.0",
              license_url: "https://creativecommons.org/licenses/by/3.0/",
              citation:
                "Jonas Janner Hamann, Universidade Federal de Santa Maria (UFSM), Bugwood.org ",
              similarity: 0.658,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/71a/393215a51121da991d2f812749b7edfae45be.small.jpeg",
            },
          ],
          redundant: true,
          details: {
            language: "en",
            entity_id: "7f22438065988f95",
          },
        },
        {
          id: "489fd19063e93c81",
          name: "Alternaria",
          probability: 0.5170877,
          similar_images: [
            {
              id: "b93bf98af0fe3263d29da9b67bfe6e6852652ec8",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/b93/bf98af0fe3263d29da9b67bfe6e6852652ec8.jpeg",
              license_name: "CC BY 3.0",
              license_url: "https://creativecommons.org/licenses/by/3.0/",
              citation:
                "Gerald Holmes, Strawberry Center, Cal Poly San Luis Obispo, Bugwood.org ",
              similarity: 0.844,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/b93/bf98af0fe3263d29da9b67bfe6e6852652ec8.small.jpeg",
            },
            {
              id: "c8396a0364319bf780b3a28ac31a7cee46d29d6d",
              url: "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/c83/96a0364319bf780b3a28ac31a7cee46d29d6d.jpeg",
              license_name: "CC BY 3.0",
              license_url: "https://creativecommons.org/licenses/by/3.0/",
              citation:
                "Gerald Holmes, Strawberry Center, Cal Poly San Luis Obispo, Bugwood.org ",
              similarity: 0.84,
              url_small:
                "https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/3/c83/96a0364319bf780b3a28ac31a7cee46d29d6d.small.jpeg",
            },
          ],
          details: {
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
  created: 1692769448.088627,
  completed: 1692769448.379792,
}
