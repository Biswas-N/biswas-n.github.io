module.exports = {
    siteMetadata: {
        title: "Biswas Portfolio",
        description: "A piece of the internet showing Biswas Nandamuri's projects and experience",
        url: "https://biswas-n.github.io",
        image: "/office.jpg",
        twitterUsername: "@biswasbin2",
        author: "Biswas Nandamuri",
        keywords: [
            "Biswas Nandamuri", "software engineer", "software developer",
            "gatsby", "portfolio", "full stack developer", "dotnet", "java",
            "python", "docker", "csharp", "c#", "web developer"
        ]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`muli\:400,400i,700,700i`],
                display: "swap"
            }
        }
    ]
}