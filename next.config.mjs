/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "links.papareact.com",
          
          
        },
        
      ],
    },
  };
  
  export default nextConfig;
  