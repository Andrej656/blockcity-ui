import Preloader from "@/components/elements/Preloader";
import AddClassBody from "@/components/elements/AddClassBody";
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import { useEffect, useState } from "react";

// CSS imports remain unchanged
import "/public/assets/css/style.css";
import "/public/assets/css/responsive.css";
import "/public/assets/css/popupstyle.css";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <ChakraProvider> {/* Wrap your app with ChakraProvider */}
            {!loading ? (
                <>
                    <AddClassBody />
                    <Component {...pageProps} />
                </>
            ) : (
                <Preloader />
            )}
        </ChakraProvider>
    );
}

export default MyApp;
