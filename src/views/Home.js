import {useState, useEffect} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from '../services/rick_morty'
import TabCharacter from '../components/TabCharacter'
import Tablocation from '../components/TabLocations'
import { TabEpisodes } from '../components/TabEpisodes'



export const Home = () => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])
    const [episodes, setEpisodes] = useState([])
    useEffect(()=>{
        GET_CHARACTERS()
        .then(({data})=> setCharacters([...data.results]))
        .catch(e=> console.log(e))
        GET_LOCATIONS()
        .then(({data})=> setLocations([...data.results]))
        .catch(e=> console.log(e))
        GET_EPISODES()
        .then(({data})=> setEpisodes([...data.results]))
        .catch(e=> console.log(e))
    },[])

    return (
        <>
        <Tabs>
        <TabList>
            <Tab>Characters</Tab>
            <Tab>Locations</Tab>
            <Tab>Episodes</Tab>
        </TabList>

        <TabPanels>
            <TabPanel p="0">
                <TabCharacter characters={characters}/>
            </TabPanel>

            <TabPanel>
                <Tablocation locations={locations} />
            </TabPanel>
            <TabPanel>
                <TabEpisodes episodes={episodes}/>
            </TabPanel>
        </TabPanels>
        </Tabs>
        </>
    )
}
