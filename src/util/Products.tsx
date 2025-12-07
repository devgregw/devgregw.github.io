import { Theme } from "@emotion/react"
import { GetApp, Apple, Android, OpenInNew, Language, GitHub, CategoryRounded, DoNotDisturbOnRounded, SchoolRounded } from "@mui/icons-material"
import { SvgIconTypeMap, SxProps } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { ReactElement, JSXElementConstructor } from "react"

type IconBaseType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }

export type MenuItem = {
    label: string,
    href?: string,
    rel?: string,
    target?: string,
    onClick?: () => void,
    Icon: IconBaseType
} | {
    divider: true
} | {
    header: true
    label: string
}

export type Action = {
    button: string,
    href?: string,
    rel?: string,
    target?: string,
    onClick?: () => void,
    EndIcon?: IconBaseType,
    StartIcon?: IconBaseType
} | {
    menu: string,
    items: MenuItem[],
    Icon: IconBaseType
}

export type PortfolioProduct = {
    sx?: SxProps<Theme>,
    name: string,
    description: string,
    technologies: string[],
    image: string,
    firstAction?: Action,
    secondAction?: Action
    moreActions?: MenuItem[],
    nameChip?: 'Retired' | 'Internal' | 'University' | 'Utility'
}

type PortfolioCollection = {
    name: string,
    icon: string | ReactElement<any, string | JSXElementConstructor<any>>,
    products: PortfolioProduct[]
}

const activeProducts: PortfolioProduct[] = [
    {
        name: 'Redzone',
        description: 'Redzone pulls publicly available convective (severe weather) outlook data from the National Weather Service\'s Storm Prediction Center and displays it on an interactive map. When location services are enabled, any outlook covering the user\'s location is highlighted. The iOS app is built with Swift/SwiftUI and MapKit. NextJS, through Firebase App Hosting, powers the web app and API layer. Firebase Realtime Database serves as a cache for fresh data to avoid repetitive requests to the SPC, and Cloud Functions routinely clears out stale data.',
        image: '/img/redzone.png',
        technologies: ['SwiftUI', 'NextJS', 'Firebase', 'MapKit'],
        firstAction: {
            menu: 'Try',
            Icon: GetApp,
            items: [
                {
                    label: 'Web',
                    Icon: Language,
                    href: "https://redzone.gregwhatley.dev",
                    target: "_blank",
                    rel: "noopener noreferrer"
                },
                {
                    label: 'iOS (TestFlight)',
                    Icon: Apple,
                    href: "https://testflight.apple.com/join/xvXrMetk",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            ]
        },
        secondAction: {
            button: 'Code',
            EndIcon: GitHub,
            href: "https://github.com/devgregw/Redzone",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        moreActions: [
            {
                label: 'Storm Prediction Center',
                Icon: Language,
                href: "https://spc.noaa.gov",
                target: "_blank",
                rel: "noopener noreferrer"
            }
        ]
    },
    {
        name: 'PD Fleet Live',
        sx: {
            background: 'linear-gradient(135deg, #003399, #ff3333)'
        },
        nameChip: 'Internal',
        description: 'PD Fleet Live was developed during my time at the UT Arlington Police Department. It is a fully web-based, live-updating vehicle management application that officers use to record vehicle usage and history. Historical records can be exported on demand into XLSX or HTML format. This is an internal product and source code is not publicly available.',
        image: '/img/pdfl-2.svg',
        technologies: ['React', 'TypeScript', 'Node', 'CouchDB']
    },
    {
        name: 'StrikeDistance',
        description: 'StrikeDistance was the first app I developed. It is a calculator that determines the distance between you and a lightning strike, given the current temperature and the time between the lightning and thunder. It was originally writted with C# for the Windows Phone platform, but I\'ve since rewritten it as a React web app.',
        image: '/img/strikedistance.png',
        technologies: ['React', 'TypeScript'],
        firstAction: {
            button: 'Try',
            EndIcon: OpenInNew,
            href: "https://gregwhatley.dev/StrikeDistance",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        secondAction: {
            button: 'Code',
            EndIcon: GitHub,
            href: "https://github.com/devgregw/StrikeDistance",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    },
    {
        name: 'upload-symbols.sh',
        nameChip: 'Utility',
        technologies: ['Shell'],
        image: '/img/terminal.png',
        sx: {
            background: 'black',
            objectFit: 'scale-down'
        },
        description: 'I wrote this Shell script to help upload my debugging symbols from Xcode archive files to Firebase Crashlytics (since archives usually contain multiple dSYMs). The script in this repository is a template, which needs to be completed before using. To use this script, you must be integrating Crashlytics into your app using CocoaPods.',
        firstAction: {
            button: 'Code',
            EndIcon: GitHub,
            href: "https://github.com/devgregw/upload-symbols.sh",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    }
]

const projectProducts: PortfolioProduct[] = [
    {
        name: 'aniMaL',
        sx: {
            background: 'white'
        },
        description: 'This was a group project completed for CSE 3310 - Fundamentals of Software Engineering. We built an Android app that connects to a TensorFlow Lite machine learing model which can identify a few types of animals using the device\'s camera. The Android frontend was completed for extra credit and allows a user to sign in and view accuracy stats.',
        image: '/img/animal.png',
        technologies: ['TensorFlow', 'Android (Kotlin)', 'Firebase', 'Python'],
        firstAction: {
            button: 'Code',
            EndIcon: GitHub,
            href: 'https://github.com/devgregw/Team3aniMaL',
            target: "_blank",
            rel: "noopener noreferrer"
        }
    }
]

const retiredProducts: PortfolioProduct[] = [

    {
        name: 'Authentic',
        description: 'I developed Android and iOS apps (plus a web CMS) in collaboration with Authentic City Church.',
        image: '/img/acc.png',
        technologies: ['React', 'JavaScript', 'Firebase', 'iOS (Swift, UIKit)', 'Android (Kotlin)'],
        firstAction: {
            menu: 'Get',
            Icon: GetApp,
            items: [
                {
                    label: 'iOS',
                    Icon: Apple,
                    href: "https://itunes.apple.com/us/app/authentic-city-church/id1402645724?ls=1&mt=8",
                    target: "_blank",
                    rel: "noopener noreferrer"
                },
                {
                    label: 'Android',
                    Icon: Android,
                    href: "https://play.google.com/store/apps/details?id=church.authenticcity.android",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            ]
        },
        secondAction: {
            button: 'Website',
            EndIcon: OpenInNew,
            href: "https://authentic.church",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        moreActions: [
            {
                header: true,
                label: 'Code Archives'
            },
            {
                label: 'iOS',
                Icon: Apple,
                href: "https://github.com/devgregw/AuthenticiOS",
                target: "_blank",
                rel: "noopener noreferrer"
            },
            {
                label: 'Android',
                Icon: Android,
                href: "https://github.com/devgregw/AuthenticAndroid",
                target: "_blank",
                rel: "noopener noreferrer"
            },
            {
                label: 'Web CMS',
                Icon: Language,
                href: "https://github.com/devgregw/authentic-management",
                target: "_blank",
                rel: "noopener noreferrer"
            }
        ]
    },
    {
        name: 'Merge',
        image: '/img/merge.png',
        description: 'The Merge project was developed in collaboration with Central Bible Church (formerly Pantego Bible Church) and featured Android and iOS apps built with Xamarin and a Windows desktop CMS app. It was eventually retired due to leadership changes and low usage, but was a great learning experience for me nevertheless.',
        technologies: ['C#', 'WPF', 'Xamarin.Android', 'Xamarin Forms'],
        firstAction: {
            button: 'Website',
            EndIcon: OpenInNew,
            href: "https://wearecentral.org",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        moreActions: [
            {
                label: 'Code Archive',
                href: 'https://github.com/devgregw/TheMergeApp',
                target: '_blank',
                rel: 'noopener noreferrer',
                Icon: GitHub
            }
        ]
    }
]

export const products: PortfolioCollection[] = [
    {
        name: "Active",
        icon: <CategoryRounded/>,
        products: activeProducts
    },
    {
        name: "Academic",
        icon: <SchoolRounded sx={{ width: 32, height: 32 }} />,
        products: projectProducts
    },
    {
        name: "Retired",
        icon: <DoNotDisturbOnRounded sx={{ width: 32, height: 32 }} />,
        products: retiredProducts
    }
]
