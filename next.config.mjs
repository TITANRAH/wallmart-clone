/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "links.papareact.com",
          
          
        },
        {
          protocol: "https",
          hostname: "i.imgur.com",
          
          
        },
        
      ],
    },
  };
  
  export default nextConfig;
  