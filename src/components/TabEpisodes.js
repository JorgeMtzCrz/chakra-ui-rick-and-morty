import React from 'react'
import { Box,  Badge, Spinner, Flex } from "@chakra-ui/react"

export const TabEpisodes = ({episodes}) => {
    return (
        <Flex w="100vw" m="10px" justify="space-around" align="center"  boxSizing="border-box" h="100vh" wrap="wrap" direction="row">
            {episodes.length === 0 ? <Spinner/> : episodes?.map((episode, index)=>{
                return(
                    <Box boxSizing="border-box" mb="10px" key={episode.id} w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Box p="6">
                            <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                {episode.episode}
                            </Badge>
                            </Box>

                            <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            >
                            {episode.name}
                            </Box>

                            <Box>
                            {episode.air_date} Air Date
                            <Box as="span" color="gray.600" fontSize="sm">
                                / wk
                            </Box>
                            </Box>
                            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                {episode.characters?.length} characters
                            </Box>
                        </Box>
                    </Box>
                )
            })}
            </Flex>
    )
}
