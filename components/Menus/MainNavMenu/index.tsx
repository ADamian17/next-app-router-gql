import { createApolloClient } from "@/libs/apolloClient";
import { gql } from "@apollo/client";

const MainNavMenu = async () => {
  const client = createApolloClient()

  const menuData = await client.query({
    query: gql`
    query MainMenu {
      menu(id: "main-menu", idType: SLUG) {
        menuItems {
          nodes {
            label
            uri
            id
          }
        }
      }
    }
  `
  });

  return (
    <header>
      logo
    </header>
  )
}

export default MainNavMenu;