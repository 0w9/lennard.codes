import { Flex, Heading, Box, HStack, Link, Center } from "@chakra-ui/react"
import { Twitter, Discord } from "./components/Icons"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
      <div className={styles.bg}>
          <Flex display="flex" justifyContent={"center"} alignItems={"center"} height={"100vh"}>
              <Box bg={"#d5cabd"} borderRadius={"100px"} width={"400px"} height={"100px"}>
                  <div style={{ padding: "10px" }}>
                      <Heading color={"white"} display="flex" weight="bold" justifyContent={"center"} alignContent={"center"}>Lennard</Heading>

                      <Center>
                          <HStack marginTop={"8px"}>
                              <Link href={"https://www.twitter.com/lennardeth"}><Twitter width={"2px"} height={"2px"} /></Link>
                              <Link href={"https://discord.gg/HQbCArtzzz"} target="_parent"><Discord width={"2px"} height={"2px"} /></Link>
                          </HStack>
                      </Center>
                  </div>
              </Box>
          </Flex>
      </div>
  )
}

