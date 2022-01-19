import { mode } from "@chakra-ui/theme";

export const Boxy = {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        abc:(props) => ({
            bg: mode('whiteAlpha.500', 'whiteAlpha.200')(props),
                    mb:'6',
                    p:'3',      
        }),
        
    },
    defaultProps: {},
};