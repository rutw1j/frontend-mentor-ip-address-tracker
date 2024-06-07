import { Box } from '@chakra-ui/react';

type Props = {
    location: string;
    height: number;
    zoom: number;
}

export default function MapComponent({height, location, zoom}: Props) {

    const mapSrc = `https://maps.google.com/maps?q=${location}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

    return (
        <Box>
            <iframe
                width="100%"
                height={height}
                src={mapSrc}
            />
        </Box>
    )
}