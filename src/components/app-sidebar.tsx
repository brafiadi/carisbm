import { GalleryVerticalEnd, Search } from "lucide-react";
import type * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useAtomValue } from "jotai";
import { selectedYear } from "@/lib/global-state";
import { VersionSwitcher } from "./version-swithcer";

// This is sample data.
const data = {
	versions: ["2025"],
	navMain: [
		{
			title: "Mulai",
			url: "#",
			items: [
				{
					title: "Referensi",
					url: "#",
				},
				{
					title: "Motivasi",
					url: "#",
				},
			],
		},
		{
			title: "Honor",
			url: "#",
			items: [
				{
					title: "Routing",
					url: "#",
				},
				{
					title: "Data Fetching",
					url: "#",
					isActive: true,
				},
				{
					title: "Rendering",
					url: "#",
				},
			],
		},
		{
			title: "API Reference",
			url: "#",
			items: [
				{
					title: "Components",
					url: "#",
				},
			],
		},
		{
			title: "Architecture",
			url: "#",
			items: [
				{
					title: "Accessibility",
					url: "#",
				},
				{
					title: "Fast Refresh",
					url: "#",
				},
			],
		},
		{
			title: "Community",
			url: "#",
			items: [
				{
					title: "Contribution Guide",
					url: "#",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	// const year = useAtomValue(selectedYear)
	const year = 2025;
	return (
		<Sidebar variant="floating" {...props}>
			<SidebarHeader>
				<VersionSwitcher
					versions={data.versions}
					defaultVersion={data.versions[0]}
				/>
				{/* <SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Search className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">Cari SBM</span>
									<span className="">{year}</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu> */}
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className="gap-2">
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a href={item.url} className="font-medium">
										{item.title}
									</a>
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub className="ml-0 border-l-0 px-1.5">
										{item.items.map((item) => (
											<SidebarMenuSubItem key={item.title}>
												<SidebarMenuSubButton asChild isActive={item.isActive}>
													<a href={item.url}>{item.title}</a>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
