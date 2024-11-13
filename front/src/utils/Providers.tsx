import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface ProvidersProps {
    children: JSX.Element;
}

const Providers = ({ children }: ProvidersProps) => {
    const queryClient = new QueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GoogleOAuthProvider clientId="768820001639-h43kibiqvvbvhhhu179sfdukgppkd276.apps.googleusercontent.com">
                    {children};
                </GoogleOAuthProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default Providers;
