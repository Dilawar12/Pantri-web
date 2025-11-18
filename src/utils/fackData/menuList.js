export const menuList = [
    {
        id: 0,
        name: "Dashboard",
        path: "/dashboard",
        icon: 'feather-airplay',
    },
    {
        id: 1,
        name: "Bookings",
        path: "/dashboard/view-jobs",
        icon: 'feather-cast',
        // dropdownMenu: [
        //     {
        //         id: 1,
        //         name: "Sales Report",
        //         path: "/reports/sales",
        //         subdropdownMenu: false
        //     },
        //     {
        //         id: 2,
        //         name: "Leads Report",
        //         path: "/reports/leads",
        //         subdropdownMenu: false
        //     },
        //     {
        //         id: 3,
        //         name: "Project Report",
        //         path: "/reports/project",
        //         subdropdownMenu: false
        //     },
        //     {
        //         id: 4,
        //         name: "Timesheets Report",
        //         path: "/reports/timesheets",
        //         subdropdownMenu: false
        //     },

        // ]
    },
    {
        id: 2,
        name: "Earnings",
        path: '/dashboard/earnings',
        icon: 'feather-send',
        dropdownMenu: [
            {
                id: 1,
                name: "Earnings Overview",
                path: '/dashboard/earnings',
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Payouts History",
                path: '/dashboard/earnings',
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Commission Breakdown",
                path: '/dashboard/earnings',
                subdropdownMenu: false
            },
        ]
    },
    {
        id: 4,
        name: "Payments",
        path: "/dashboard/payment",
        icon: 'feather-dollar-sign',
        dropdownMenu: [
            {
                id: 1,
                name: "Payment Setup",
                path: "/dashboard/payment",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Payout Preferences",
                path: "/dashboard/payment",
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Coming Soon",
                path: "/dashboard/payment",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 5,
        name: "customers",
        path: "/dashboard/customers",
        icon: 'feather-users',
        //         Active Customers
        // Customer Notes (e.g., allergies, preferences)
        // Feedback & Ratings
        dropdownMenu: [
            {
                id: 1,
                name: "Active Customers",
                path: "/dashboard/customers",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Customer Notesw",
                path: "/dashboard/customers",
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Feedback & Ratings",
                path: "/dashboard/customers",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 6,
        name: "Performance Analytics",
        path: "/dashboard/leads",
        icon: 'feather-alert-circle',
        dropdownMenu: [
            {
                id: 1,
                name: "Completion Rate",
                path: "/dashboard/leads",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Average Response Time",
                path: "/dashboard/leads",
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Earnings Growth",
                path: "/dashboard/leads",
                subdropdownMenu: false
            },
            {
                id: 4,
                name: "Customer Retention",
                path: "/dashboard/leads",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 7,
        name: "leads",
        path: "/dashboard/leads",
        icon: 'feather-alert-circle',
        dropdownMenu: [
            {
                id: 1,
                name: "Interested Leads",
                path: "/dashboard/leads",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Referral Insights",
                path: "/dashboard/leads",
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Conversion Stats",
                path: "/dashboard/leads",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 8,
        name: "Services ",
        path: "/dashboard/projects",
        icon: 'feather-briefcase',
        dropdownMenu: [
            {
                id: 1,
                name: "Active Services",
                path: "/dashboard/projects",
                subdropdownMenu: false
            },
            {
                id: 2,
                name: "Availability",
                path: "/dashboard/projects",
                subdropdownMenu: false
            },
            {
                id: 3,
                name: "Service Preview",
                path: "/dashboard/projects",
                subdropdownMenu: false
            }
        ]
    },
]
