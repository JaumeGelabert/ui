export const config = {
  navigation: {
    navbar: [
      { text: "Components", href: "/components" },
      { text: "Docs", href: "/docs" },
      { text: "Roadmap", href: "/roadmap" },
    ],
    sidebar: [
      {
        groupName: "Getting started",
        elements: [
          {
            text: "shadcn/ui",
            href: "/docs/shadcnui",
          },
          {
            text: "Introduction",
            href: "/docs/introduction",
          },
        ],
      },
      {
        groupName: "Components",
        elements: [
          {
            text: "Breadcrumb",
            href: "/components/breadcrumb",
          },
          {
            text: "Button",
            href: "/components/button",
          },
        ],
      },
    ],
  },
  links: {
    github: "https://github.com/JaumeGelabert/ui",
  },
  components: {
    breadcrumb: {
      name: "Breadcrumb",
      description: "A simple breadcrumb component",
      buttons: [
        {
          text: "shadcn/ui",
          href: "https://ui.shadcn.com/docs/components/breadcrumb",
          type: "external",
        },
      ],
      preview: {
        
      }
    },
    button: {
      name: "Button",
      description: "A simple button component",
      buttons: [
        {
          text: "shadcn/ui",
          href: "https://ui.shadcn.com/docs/components/button",
          type: "external",
        },
      ],
    },
  },
};
