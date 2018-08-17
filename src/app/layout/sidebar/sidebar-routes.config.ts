import { RouteInfo } from "@app/layout/sidebar/sidebar.metadata"

export const SideBarRoute: RouteInfo[] = [
    { user: 'admin', path: '/admin/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { user: 'admin', path: '/admin/blogs', title: 'Blogs', icon: 'bookmarks' },
    { user: 'admin', path: '/admin/groups', title: 'Groups', icon: 'group_work' },
    { user: 'admin', path: '/admin/user', title: 'Users', icon: 'people' },
    { user: 'admin', path: '/admin/reportabuses', title: 'Report Abuses', icon: 'report_problem' },
    { user: 'admin', path: '/admin/notification', title: 'Notification', icon: 'local_offer' },
    { user: 'admin', path: '/admin/miscdata', title: 'Misc Date', icon: 'grid_on' },
]
