'use client'
import FormComponent from "@/components/FormComponent";
import InfoComponent from "@/components/InfoComponent";
import MapComponent from "@/components/MapComponent";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {

    const [inputQuery, setInputQuery] = useState<string>('');
    const [ipInfo, setIpInfo] = useState({
        "ip": "",
        "hostname": "",
        "city": "",
        "region": "",
        "country": "",
        "loc": "",
        "org": "",
        "postal": "",
        "timezone": ""
    });   

    async function handleSubmit(inputQuery: string) {
        try {
            const response = await fetch(`https://ipinfo.io/${inputQuery}/json?token=${process.env.NEXT_PUBLIC_API_KEY}`);
            const data = await response.json();
            console.log(data);
            setIpInfo(data);
        } catch(error) {
            console.error("Error fetching IP information:", error);
        }
    }

    const [remainingHeight, setRemainingHeight] = useState(0);
    useEffect(() => {
        const viewportHeight = window.innerHeight;
        const subtractHeight = viewportHeight * 0.32;
        const calculatedHeight = viewportHeight - subtractHeight;
        setRemainingHeight(calculatedHeight);
    }, []);

    useEffect(() => {
        handleSubmit('');
    }, []);

    return (
        <Flex flexDir={'column'} justifyContent={'flex-start'} alignItems={'center'} position={'relative'}>
            
            <Box flexDir={'column'} as={Flex} w={'100%'} h={'32vh'} justifyContent={'center'} alignItems={'center'} bgImage={'/pattern-bg-desktop.png'} >
            </Box>

            <Box as={Flex} flexDir={'column'} alignItems={'center'} position={'absolute'} rowGap={6} zIndex={1} >
                <Heading as={'h1'} size={'lg'} color={'white'} mt={4}>IP Address Tracker</Heading>
                <FormComponent inputQuery={inputQuery} setInputQuery={setInputQuery} handleSubmit={handleSubmit}></FormComponent>
                <InfoComponent ipInfo={ipInfo}></InfoComponent>
            </Box>

            <Box width={'100%'}>
                {
                    ipInfo?.loc ? (
                        <MapComponent 
                            height={remainingHeight}
                            location={ipInfo?.loc}
                            zoom={13}
                        />
                    ) : (
                        <MapComponent 
                            height={remainingHeight}
                            location={"0,0"}
                            zoom={2}
                        />
                    )
                }
            </Box>

        </Flex>
    );
}
