import { Flex, Heading, Box } from "@chakra-ui/react"

export default function Home() {
  return (
      <>
        <Flex display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box height={"20vh"}>
                <Heading>Lennard</Heading>
            </Box>
        </Flex>
      </>
  )
}

