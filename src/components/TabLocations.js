import React from 'react'
import { Box, Badge, Spinner, Flex } from "@chakra-ui/react"


const Tablocation = ({locations}) => {
    return (
        <Flex w="100vw" m="10px" justify="space-around" align="center"  boxSizing="border-box" h="100vh" wrap="wrap" direction="row">
            {locations.length === 0 ? <Spinner/> : locations?.map((location, index)=>{
                return(
                    <Box boxSizing="border-box" mb="10px" key={location.id} w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Box p="6">
                            <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                {location.type}
                            </Badge>
                            </Box>

                            <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            >
                            {location.name}
                            </Box>

                            <Box>
                            {location.dimension}
                            <Box as="span" color="gray.600" fontSize="sm">
                                / wk
                            </Box>
                            </Box>
                            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                {location.residents?.length} residents
                            </Box>
                        </Box>
                    </Box>
                )
            })}
            </Flex>
    )
}

export default Tablocation
