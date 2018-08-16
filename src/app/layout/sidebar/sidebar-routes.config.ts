import { RouteInfo } from "@app/layout/sidebar/sidebar.metadata"

export const SideBarRoute: RouteInfo[] = [
    { user: 'admin', path: '/admin/blogs', title: 'Blogs', icon: 'bookmarks' },
    { user: 'admin', path: '/admin/groups', title: 'Groups', icon: 'group_work' },
    { user: 'admin', path: '/admin/users', title: 'Users', icon: 'people' },
    { user: 'admin', path: '/admin/report-abuses', title: 'Report Abuses', icon: 'report_problem' },
]
