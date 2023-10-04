import NavigationLink from "./NavigationLink";
import NavigationMenuLink from "./NavigaionMenuLink";

const { spendingMenuTitle, spendingMenuLinks } = {
    "spendingMenuTitle": "Spending",
    "spendingMenuLinks": [
        {
            "href": "/spending/yearly",
            "title": "Yearly"
        },
        {
            "href": "/spending/monthly",
            "title": "Monthly"
        },
        {
            "href": "/spending/daily",
            "title": "Daily"
        }
    ]
};

const { maintenanceMenuTitle, maintenanceMenuLinks } = {
    "maintenanceMenuTitle": "Maintenance",
    "maintenanceMenuLinks": [
        {
            "href": "/maintenance/navigation-link",
            "title": "Navigation Link"
        },
        {
            "href": "/maintenance/spending-type",
            "title": "Spending Type"
        },
        {
            "href": "/maintenance/xxx",
            "title": "XXX"
        }
    ]
};

export default function NavigationBar() {
    return (
        <nav className="flex bg-slate-100 text-black px-2 py-1">
            <NavigationLink href="/" className={"font-tiltPrism text-4xl pl-4 pr-10"}>Yeesin</NavigationLink>

            <ul className="flex gap-3 flex-wrap items-center text-lg">
                <li>
                    <NavigationMenuLink title={spendingMenuTitle} menuLinks={spendingMenuLinks} />
                </li>

                <li>
                    <NavigationMenuLink title={maintenanceMenuTitle} menuLinks={maintenanceMenuLinks} />
                </li>
            </ul>
        </nav>
    )
}