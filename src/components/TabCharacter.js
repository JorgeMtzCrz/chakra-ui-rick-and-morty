import React from 'react'
import { Box, Image, Badge, Spinner, Flex } from "@chakra-ui/react"


const TabCharacter = ({characters}) => {
    return (
        <Flex w="100vw" m="10px" justify="space-around" align="center"  boxSizing="border-box" h="100vh" wrap="wrap" direction="row">
            {characters.length === 0 ? <Spinner/> : characters?.map((character, index)=>{
                return(
                    <Box boxSizing="border-box" mb="10px" key={character.id} w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image w="100%" h="300px" src={character.image} alt={character.name} />

                        <Box p="6">
                            <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                {character.gender}
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {character.origin?.name} &bull; {character.species}
                            </Box>
                            </Box>

                            <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            >
                            {character.name}
                            </Box>

                            <Box>
                            {character.status}
                            <Box as="span" color="gray.600" fontSize="sm">
                                / wk
                            </Box>
                            </Box>
                            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                {character.episode?.length} episodes
                            </Box>
                        </Box>
                    </Box>
                )
            })}
            </Flex>
    )
}

export default TabCharacter
