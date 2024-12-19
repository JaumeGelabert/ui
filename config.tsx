import BreadcrumbComponent from "./components/lib/breadcrumb/breadcrumb";
import CustomLink from "./components/navigation/CustomLink";
import Command from "./components/utils/Command";
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
      description:
        "A simple breadcrumb component that can do some magic. You just need a base url and a current path. It's specially useful for NextJS projects due to the way paths are handled.",
      buttons: [
        {
          text: "shadcn/ui",
          href: "https://ui.shadcn.com/docs/components/breadcrumb",
          type: "external",
        },
      ],
      preview: {
        example: (
          <BreadcrumbComponent
            path="/components/breadcrumb"
            baseUrl="http://localhost:3000"
          />
        ),
        code: "CodeOfComponent",
      },
      examples: [
        {
          title: "Basic Breadcrumb",
          id: "basic-breadcrumb",
          description: (
            <>
              No secret on this one. It looks like the{" "}
              <CustomLink
                href="https://ui.shadcn.com/docs/components/breadcrumb"
                text="shadcn base component"
              />
              , but has some differences on how it works. You just need to pass
              the base url and the current path. It will divide the path based
              on <Command>/</Command>
              and show each element as an item in the component.
            </>
          ),

          example: (
            <BreadcrumbComponent
              path="/components/breadcrumb"
              baseUrl="http://localhost:3000"
            />
          ),
          code: "CodeOfExample1",
        },
        {
          title: "N last elements",
          id: "n-last-elements",
          description:
            "You can pass an optional prop named nLast and it will only show the n last elements of the path as items of the component. If a higher value than the length of the path is passed, it will be set to the length of the path.",
          example: (
            <BreadcrumbComponent
              path="/components/breadcrumb/examples/basic"
              baseUrl="http://localhost:3000"
              nLast={3}
            />
          ),
          code: "CodeOfExample2",
        },
        {
          title: "N last elements and first",
          id: "n-last-elements-and-first",
          description:
            "If you use nLast and want to show also the first element of the Breadcrumb, you can pass showFirst",
          example: (
            <BreadcrumbComponent
              path="/components/breadcrumb/examples/basic"
              baseUrl="http://localhost:3000"
              nLast={1}
              showFirst
            />
          ),
          code: "CodeOfExample2",
        },
      ],
    },
  },
};
